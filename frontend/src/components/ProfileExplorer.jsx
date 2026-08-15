import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconArrowRight, IconWhatsApp, IconClose, IconCheck } from "./icons";
import { waLink, PATIENT_PROFILES } from "../data";
import { useLang } from "../i18n/LanguageContext";

const cardV = { hidden: { opacity: 0, y: 26 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } };
const gridV = { show: { transition: { staggerChildren: 0.06 } } };

export default function ProfileExplorer() {
  const { t, lang } = useLang();
  const p = t.pacientes;
  const L = (v) => (v && typeof v === "object" && !Array.isArray(v) ? (v[lang] || v.es) : v);
  const [activeId, setActiveId] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const active = PATIENT_PROFILES.find((x) => x.id === activeId);
  const visibleProfiles = showAll ? PATIENT_PROFILES : PATIENT_PROFILES.slice(0, 6);
  const remaining = PATIENT_PROFILES.length - 6;

  useEffect(() => {
    document.body.style.overflow = activeId ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [activeId]);

  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") setActiveId(null); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <motion.div
        className="perfiles-grid"
        data-testid="perfiles-grid"
      >
        {visibleProfiles.map((prof) => (
          <motion.button
            key={prof.id}
            type="button"
            className={`perfil-card${prof.image ? " has-image" : ""}`}
            data-accent={prof.accent}
            style={prof.image ? { backgroundImage: `linear-gradient(180deg, rgba(11,26,58,0.35) 0%, rgba(11,26,58,0.92) 78%), url(${prof.image})` } : undefined}
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.45 }}
            whileHover={{ y: -8 }}
            onClick={() => setActiveId(prof.id)}
            data-testid={`perfil-card-${prof.id}`}
          >
            <span className="perfil-tag">{L(prof.tag)}</span>
            <h3>{L(prof.title)}</h3>
            <p>{L(prof.summary)}</p>
            <span className="card-cta">{p.verDetalle} <IconArrowRight /></span>
          </motion.button>
        ))}
      </motion.div>

      {!showAll && remaining > 0 && (
        <div className="ver-mas-wrap">
          <button type="button" className="btn btn-navy" onClick={() => setShowAll(true)} data-testid="perfiles-ver-mas">
            {t.cta.verMas} (+{remaining}) <IconArrowRight />
          </button>
        </div>
      )}

      <AnimatePresence>
        {active && (
          <motion.div
            className="perfil-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveId(null)}
            data-testid="perfil-overlay"
          >
            <motion.div
              className={`perfil-modal${active.image ? " has-image" : ""}`}
              data-accent={active.accent}
              initial={{ scale: 0.82, opacity: 0, y: 24 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 12 }}
              transition={{ type: "spring", stiffness: 240, damping: 24 }}
              onClick={(e) => e.stopPropagation()}
              data-testid="perfil-modal"
              role="dialog"
              aria-modal="true"
            >
              <button className="perfil-close" onClick={() => setActiveId(null)} aria-label="Cerrar" data-testid="perfil-close">
                <IconClose />
              </button>

              <div
                className="perfil-modal-head"
                style={active.image ? { backgroundImage: `linear-gradient(180deg, rgba(11,26,58,0.35) 0%, rgba(11,26,58,0.9) 85%), url(${active.image})` } : undefined}
              >
                <span className="perfil-tag">{L(active.tag)}</span>
                <h3>{L(active.title)}</h3>
                <p>{L(active.summary)}</p>
              </div>

              <div className="perfil-modal-body">
                <h4 className="perfil-body-title">{p.estudios}</h4>
                <div className="perfil-groups">
                  {active.groups.map((g) => (
                    <div className="perfil-group" key={L(g.label)}>
                      <strong>{L(g.label)}</strong>
                      <ul>
                        {g.items.map((it) => (
                          <li key={it}><IconCheck /> {it}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <div className="perfil-oriented">
                  <strong>{p.orientadoA}</strong> {L(active.orientedTo)}
                </div>

                <a
                  className="btn btn-cyan perfil-cta"
                  href={waLink(`${t.wa.servicePrefix} "${L(active.title)}".`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="perfil-wa"
                >
                  <IconWhatsApp /> {p.consultarPerfil}
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
