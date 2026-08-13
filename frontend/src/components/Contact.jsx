import React, { useState } from "react";
import axios from "axios";
import { IconPhone, IconWhatsApp, IconMapPin, IconMail, IconCheck } from "./icons";
import {
  PHONE_TEL, PHONE_DISPLAY, WHATSAPP_DISPLAY, MAPS_DIR, WA_NUMBER, CONTACT_EMAIL, waLink,
} from "../data";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const SERVICES = [
  "Análisis Clínicos", "Análisis Especializados", "Estudios Genéticos y ADN",
  "Prevención Temprana", "Salud Laboral (empresas)", "Consultoría en Salud (empresas)",
  "Investigación Clínica (empresas)", "Otra consulta",
];

const empty = { name: "", phone: "", email: "", service: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(empty);
  const [sent, setSent] = useState(false);

  const update = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const buildText = () => {
    const { name, phone, service, message } = form;
    let text = `Hola, soy ${name || "un/a interesado/a"}.`;
    if (service) text += ` Quisiera consultar sobre: ${service}.`;
    if (message) text += ` ${message}`;
    if (phone) text += ` (Mi teléfono: ${phone})`;
    return text;
  };

  const saveLead = async (channel) => {
    try {
      await axios.post(`${API}/leads`, { ...form, channel });
    } catch (e) {
      // No bloqueamos el contacto si falla el guardado del lead.
      console.error("No se pudo guardar el lead:", e?.message);
    }
  };

  const submit = async (e, channel) => {
    e.preventDefault();
    if (!form.name.trim()) return;
    await saveLead(channel);
    const text = buildText();
    if (channel === "whatsapp") {
      window.open(waLink(text), "_blank", "noopener");
    } else {
      const subject = `Consulta web — ${form.service || "Laboratorios Horvath"}`;
      const body = `${text}${form.email ? `\n\nCorreo de contacto: ${form.email}` : ""}`;
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    }
    setSent(true);
  };

  return (
    <section className="contact section-pad" id="contacto" data-testid="contact">
      <div className="container">
        <div className="section-head reveal">
          <p className="eyebrow">Contacto</p>
          <h2>Estamos para ayudarte</h2>
          <p>Elegí el canal que prefieras. Vamos a responderte lo antes posible.</p>
        </div>

        <div className="contact-grid">
          <div className="contact-actions reveal">
            <a href={`tel:${PHONE_TEL}`} className="contact-action tel" data-testid="contact-call">
              <span className="ca-icon"><IconPhone /></span>
              <div><strong>Llamanos</strong><span>{PHONE_DISPLAY}</span></div>
            </a>
            <a href={waLink("Hola, quiero más información.")} target="_blank" rel="noopener noreferrer" className="contact-action wa" data-testid="contact-whatsapp">
              <span className="ca-icon"><IconWhatsApp /></span>
              <div><strong>WhatsApp</strong><span>{WHATSAPP_DISPLAY}</span></div>
            </a>
            <a href={MAPS_DIR} target="_blank" rel="noopener noreferrer" className="contact-action map" data-testid="contact-map">
              <span className="ca-icon"><IconMapPin /></span>
              <div><strong>Cómo llegar</strong><span>Av. Aviadores del Chaco N° 2530</span></div>
            </a>

            <div className="contact-hours">
              <h4>Horario de atención</h4>
              <div className="hour-row"><span>Lunes a viernes</span><strong>6:30 – 18:00</strong></div>
              <div className="hour-row"><span>Sábados</span><strong>6:30 – 13:00</strong></div>
              <div className="hour-row"><span>Domingos</span><strong>Cerrado</strong></div>
            </div>
          </div>

          <form className="contact-form reveal" onSubmit={(e) => submit(e, "whatsapp")} data-testid="contact-form">
            <h3>Escribinos</h3>
            <p className="hint">Completá el formulario y elegí cómo querés contactarnos: WhatsApp o correo.</p>

            {sent && (
              <div className="form-success" data-testid="form-success">
                <IconCheck /> ¡Listo! Abrimos tu canal elegido con el mensaje precargado. Si no se abrió, revisá tu app.
              </div>
            )}

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="cf-name">Nombre</label>
                <input type="text" id="cf-name" name="name" value={form.name} onChange={update} placeholder="Tu nombre" required />
              </div>
              <div className="form-group">
                <label htmlFor="cf-phone">Teléfono</label>
                <input type="tel" id="cf-phone" name="phone" value={form.phone} onChange={update} placeholder="09xx xxx xxx" />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="cf-email">Correo (opcional)</label>
              <input type="email" id="cf-email" name="email" value={form.email} onChange={update} placeholder="tucorreo@ejemplo.com" />
            </div>

            <div className="form-group">
              <label htmlFor="cf-service">Servicio de interés</label>
              <select id="cf-service" name="service" value={form.service} onChange={update}>
                <option value="">Elegí una opción</option>
                {SERVICES.map((s) => <option key={s}>{s}</option>)}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="cf-message">Mensaje</label>
              <textarea id="cf-message" name="message" rows="3" value={form.message} onChange={update} placeholder="Contanos brevemente qué necesitás" />
            </div>

            <div className="form-actions">
              <button type="submit" className="btn btn-navy" data-testid="submit-whatsapp">
                <IconWhatsApp /> Enviar por WhatsApp
              </button>
              <button type="button" className="btn btn-violet" onClick={(e) => submit(e, "email")} data-testid="submit-email">
                <IconMail /> Enviar por correo
              </button>
            </div>
            <p className="form-note">Al enviar, se abrirá WhatsApp o tu app de correo con el mensaje precargado para confirmar el envío.</p>
          </form>
        </div>
      </div>
    </section>
  );
}
