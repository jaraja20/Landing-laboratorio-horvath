import React, { useState } from "react";
import axios from "axios";
import PageFade from "../components/PageFade";
import { IconPhone, IconWhatsApp, IconMapPin, IconMail, IconCheck, IconClock, IconArrowUpRight } from "../components/icons";
import { PHONE_TEL, PHONE_DISPLAY, WHATSAPP_DISPLAY, MAPS_DIR, MAPS_EMBED, ADDRESS, CONTACT_EMAIL, waLink, HERO_BG } from "../data";
import { useLang } from "../i18n/LanguageContext";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;
const empty = { name: "", phone: "", email: "", service: "", message: "" };

export default function Contacto() {
  const { t } = useLang();
  const c = t.contacto;
  const [form, setForm] = useState(empty);
  const [sent, setSent] = useState(false);

  const update = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const buildText = () => {
    const { name, phone, service, message } = form;
    let text = `${t.wa.servicePrefix}`;
    text += name ? ` ${name}:` : ":";
    if (service) text += ` ${service}.`;
    if (message) text += ` ${message}`;
    if (phone) text += ` (Tel: ${phone})`;
    return text;
  };

  const saveLead = async (channel) => {
    try { await axios.post(`${API}/leads`, { ...form, channel }); }
    catch (e) { console.error("No se pudo guardar el lead:", e?.message); }
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
      const body = `${text}${form.email ? `\n\n${form.email}` : ""}`;
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    }
    setSent(true);
  };

  return (
    <PageFade>
      <section className="page-hero contacto-hero" data-testid="contacto-hero">
        <div className="hero-photo" style={{ backgroundImage: `url(${HERO_BG.contacto})` }} />
        <div className="hero-blob b1" />
        <div className="container">
          <p className="hero-eyebrow">{t.nav.contacto}</p>
          <h1>{c.title}</h1>
          <p className="hero-sub">{c.sub}</p>
        </div>
      </section>

      <section className="contact section-pad" id="contacto" data-testid="contact">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-actions reveal">
              <a href={`tel:${PHONE_TEL}`} className="contact-action tel" data-testid="contact-call">
                <span className="ca-icon"><IconPhone /></span>
                <div><strong>{c.callLabel}</strong><span>{PHONE_DISPLAY}</span></div>
              </a>
              <a href={waLink(t.wa.general)} target="_blank" rel="noopener noreferrer" className="contact-action wa" data-testid="contact-whatsapp">
                <span className="ca-icon"><IconWhatsApp /></span>
                <div><strong>{c.waLabel}</strong><span>{WHATSAPP_DISPLAY}</span></div>
              </a>
              <a href={MAPS_DIR} target="_blank" rel="noopener noreferrer" className="contact-action map" data-testid="contact-map">
                <span className="ca-icon"><IconMapPin /></span>
                <div><strong>{c.mapLabel}</strong><span>Av. Aviadores del Chaco N° 2530</span></div>
              </a>

              <div className="contact-hours">
                <h4><IconClock /> {c.hoursTitle}</h4>
                {c.hours.map(([d, h]) => (
                  <div className="hour-row" key={d}><span>{d}</span><strong>{h}</strong></div>
                ))}
              </div>
            </div>

            <form className="contact-form reveal" onSubmit={(e) => submit(e, "whatsapp")} data-testid="contact-form">
              <h3>{c.formTitle}</h3>
              <p className="hint">{c.formHint}</p>

              {sent && (
                <div className="form-success" data-testid="form-success"><IconCheck /> {c.success}</div>
              )}

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="cf-name">{c.fields.name}</label>
                  <input type="text" id="cf-name" name="name" value={form.name} onChange={update} placeholder={c.placeholders.name} required />
                </div>
                <div className="form-group">
                  <label htmlFor="cf-phone">{c.fields.phone}</label>
                  <input type="tel" id="cf-phone" name="phone" value={form.phone} onChange={update} placeholder={c.placeholders.phone} />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="cf-email">{c.fields.email}</label>
                <input type="email" id="cf-email" name="email" value={form.email} onChange={update} placeholder={c.placeholders.email} />
              </div>

              <div className="form-group">
                <label htmlFor="cf-service">{c.fields.service}</label>
                <select id="cf-service" name="service" value={form.service} onChange={update}>
                  <option value="">{c.placeholders.service}</option>
                  {c.services.map((s) => <option key={s}>{s}</option>)}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="cf-message">{c.fields.message}</label>
                <textarea id="cf-message" name="message" rows="3" value={form.message} onChange={update} placeholder={c.placeholders.message} />
              </div>

              <div className="form-actions">
                <button type="submit" className="btn btn-navy" data-testid="submit-whatsapp"><IconWhatsApp /> {t.cta.sendWa}</button>
                <button type="button" className="btn btn-violet" onClick={(e) => submit(e, "email")} data-testid="submit-email"><IconMail /> {t.cta.sendMail}</button>
              </div>
              <p className="form-note">{c.note}</p>
            </form>
          </div>
        </div>
      </section>

      <section className="location section-pad" id="ubicacion" data-testid="location">
        <div className="container">
          <div className="section-head reveal">
            <p className="eyebrow">{c.addressTitle}</p>
            <h2>{c.locationTitle}</h2>
            <p>{ADDRESS}</p>
          </div>
          <div className="location-wrap reveal">
            <div className="location-map">
              <iframe src={MAPS_EMBED} loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Mapa Laboratorios Horvath" />
            </div>
            <div className="location-card">
              <div className="loc-row">
                <span className="loc-icon"><IconMapPin /></span>
                <div><h4>{c.addressTitle}</h4><p>{ADDRESS}</p></div>
              </div>
              <div className="loc-row">
                <span className="loc-icon"><IconClock /></span>
                <div>
                  <h4>{c.hoursTitle}</h4>
                  <p>{c.hours.map(([d, h]) => `${d}: ${h}`).join(" · ")}</p>
                </div>
              </div>
              <a href={MAPS_DIR} target="_blank" rel="noopener noreferrer" className="btn btn-cyan" data-testid="location-directions">
                {t.cta.directions} <IconArrowUpRight />
              </a>
            </div>
          </div>
        </div>
      </section>
    </PageFade>
  );
}
