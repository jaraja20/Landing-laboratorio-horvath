import os
from datetime import datetime, timezone
from typing import Annotated, List, Optional

from bson import ObjectId
from dotenv import load_dotenv
from fastapi import FastAPI, APIRouter, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
from pydantic import BaseModel, BeforeValidator, Field

load_dotenv()

MONGO_URL = os.environ["MONGO_URL"]
DB_NAME = os.environ["DB_NAME"]

client = AsyncIOMotorClient(MONGO_URL)
db = client[DB_NAME]

app = FastAPI(title="Laboratorios Horvath API")
api = APIRouter(prefix="/api")


def _oid(v):
    if isinstance(v, ObjectId):
        return str(v)
    return v


PyObjectId = Annotated[str, BeforeValidator(_oid)]


class LeadCreate(BaseModel):
    name: str
    phone: Optional[str] = ""
    email: Optional[str] = ""
    service: Optional[str] = ""
    message: Optional[str] = ""
    channel: str = "whatsapp"  # whatsapp | email


class Lead(LeadCreate):
    id: PyObjectId = Field(validation_alias="_id", serialization_alias="id", default=None)
    created_at: str

    model_config = {"populate_by_name": True}


@api.get("/")
async def root():
    return {"status": "ok", "service": "Laboratorios Horvath"}


@api.get("/health")
async def health():
    await db.command("ping")
    return {"status": "healthy"}


@api.post("/leads", response_model=Lead)
async def create_lead(payload: LeadCreate):
    doc = payload.model_dump()
    doc["created_at"] = datetime.now(timezone.utc).isoformat()
    res = await db.leads.insert_one(doc)
    doc["_id"] = res.inserted_id
    return Lead(**doc)


@api.get("/leads", response_model=List[Lead])
async def list_leads():
    docs = await db.leads.find().sort("created_at", -1).to_list(500)
    return [Lead(**d) for d in docs]


app.include_router(api)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
