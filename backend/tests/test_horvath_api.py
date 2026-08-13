import os
import pytest
import requests

BASE_URL = os.environ.get("REACT_APP_BACKEND_URL", "").rstrip("/")
if not BASE_URL:
    # fallback: read frontend env
    try:
        with open("/app/frontend/.env") as f:
            for ln in f:
                if ln.startswith("REACT_APP_BACKEND_URL="):
                    BASE_URL = ln.split("=", 1)[1].strip().rstrip("/")
    except Exception:
        pass

API = f"{BASE_URL}/api"


@pytest.fixture(scope="session")
def s():
    sess = requests.Session()
    sess.headers.update({"Content-Type": "application/json"})
    return sess


# Health
def test_health(s):
    r = s.get(f"{API}/health", timeout=15)
    assert r.status_code == 200, r.text
    assert r.json().get("status") == "healthy"


# Leads: create + persist
def test_create_lead_whatsapp_and_persist(s):
    payload = {
        "name": "TEST_Juan Perez",
        "phone": "0981123456",
        "email": "test_juan@example.com",
        "service": "Análisis Clínicos",
        "message": "TEST message wa",
        "channel": "whatsapp",
    }
    r = s.post(f"{API}/leads", json=payload, timeout=15)
    assert r.status_code in (200, 201), r.text
    data = r.json()
    assert data["name"] == payload["name"]
    assert data["channel"] == "whatsapp"
    assert data.get("id")
    assert data.get("created_at")

    # Verify persisted via GET
    r2 = s.get(f"{API}/leads", timeout=15)
    assert r2.status_code == 200
    items = r2.json()
    assert any(it.get("id") == data["id"] and it["name"] == payload["name"] for it in items)


def test_create_lead_email(s):
    payload = {"name": "TEST_Email User", "channel": "email", "email": "e@e.com"}
    r = s.post(f"{API}/leads", json=payload, timeout=15)
    assert r.status_code in (200, 201)
    d = r.json()
    assert d["channel"] == "email"
    assert d["name"] == payload["name"]


def test_list_leads_sorted_desc(s):
    r = s.get(f"{API}/leads", timeout=15)
    assert r.status_code == 200
    items = r.json()
    assert isinstance(items, list)
    if len(items) >= 2:
        # descending by created_at ISO string
        for a, b in zip(items, items[1:]):
            assert a["created_at"] >= b["created_at"]


def test_create_lead_missing_name(s):
    r = s.post(f"{API}/leads", json={"channel": "whatsapp"}, timeout=15)
    assert r.status_code in (400, 422)
