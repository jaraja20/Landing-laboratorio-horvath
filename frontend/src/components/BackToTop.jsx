import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { IconChevronUp } from "./icons";
import { useLang } from "../i18n/LanguageContext";

export default function BackToTop() {
  const { t } = useLang();
  const location = useLocation();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setShow(window.scrollY > 500); }, [location.pathname]);

  return (
    <button
      className={`back-to-top${show ? " show" : ""}`}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label={t.cta.backTop}
      title={t.cta.backTop}
      data-testid="back-to-top"
    >
      <IconChevronUp />
    </button>
  );
}
