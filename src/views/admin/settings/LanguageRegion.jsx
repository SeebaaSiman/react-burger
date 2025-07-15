import { useState } from "react";
import { FormLR, SectionContentSettings, SummaryLR } from "../../../ui/styles/settings-style";

const LANGUAGES = [
  { code: "es", label: "Español" },
  { code: "en", label: "Inglés" },
  { code: "fr", label: "Francés" },
  { code: "de", label: "Alemán" },
];

const REGIONS = [
  { code: "ar", label: "Argentina" },
  { code: "mx", label: "México" },
  { code: "us", label: "Estados Unidos" },
  { code: "es", label: "España" },
];
const LanguageRegion = () => {
  const [language, setLanguage] = useState("es");
  const [region, setRegion] = useState("ar");

  return (
    <SectionContentSettings>
      <h2>Idioma y Región</h2>
      <p>Selecciona el idioma de la interfaz y tu zona horaria o región preferida.</p>
      <FormLR>
        <label>
          Idioma:
          <select value={language} onChange={(e) => setLanguage(e.target.value)}>
            {LANGUAGES.map((lang) => (
              <option key={lang.code} value={lang.code}>
                {lang.label}
              </option>
            ))}
          </select>
        </label>
        <label>
          Región/País:
          <select value={region} onChange={(e) => setRegion(e.target.value)}>
            {REGIONS.map((reg) => (
              <option key={reg.code} value={reg.code}>
                {reg.label}
              </option>
            ))}
          </select>
        </label>
      </FormLR>
      <SummaryLR>
        <strong>Idioma seleccionado:</strong> {LANGUAGES.find((l) => l.code === language)?.label}
        <br />
        <strong>Región seleccionada:</strong> {REGIONS.find((r) => r.code === region)?.label}
      </SummaryLR>
    </SectionContentSettings>
  );
};

export default LanguageRegion;
