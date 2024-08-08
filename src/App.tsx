import "./App.css";

import { useTranslation } from "react-i18next";

function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = () => {
    const currentLanguage = i18n.language;
    const newLanguage = currentLanguage === "en" ? "es" : "en";
    i18n.changeLanguage(newLanguage);
  };

  return (
    <>
      <h1>{t("title")}</h1>

      <p className="read-the-docs">{t("welcome")}</p>

      <button onClick={changeLanguage}>{t("button")}</button>
    </>
  );
}

export default App;
