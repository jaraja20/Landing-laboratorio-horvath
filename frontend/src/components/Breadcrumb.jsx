import React from "react";
import { Link } from "react-router-dom";
import { IconChevronRight } from "./icons";
import { useLang } from "../i18n/LanguageContext";

export default function Breadcrumb({ current }) {
  const { t } = useLang();
  return (
    <nav className="breadcrumb" aria-label="breadcrumb" data-testid="breadcrumb">
      <div className="container">
        <ol>
          <li><Link to="/" data-testid="breadcrumb-home">{t.nav.inicio}</Link></li>
          <li aria-hidden="true" className="breadcrumb-sep"><IconChevronRight /></li>
          <li aria-current="page">{current}</li>
        </ol>
      </div>
    </nav>
  );
}
