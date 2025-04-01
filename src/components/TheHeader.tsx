import { Link } from "react-router-dom";
import headerstyles from "../assets/theheader.module.css";
import { useTranslation } from "react-i18next"; // Import the hook for translations

export default function TheHeader()
{
    const { t} = useTranslation();
    return (
        <div className={headerstyles.header}>
            <ul className={headerstyles.headerul}>
                <li>
                    <Link to="/">{t("home")}</Link>
                </li>
                <li>
                    <Link to="/yoga-content">{t("yogacontent")}</Link>
                </li>
                <li>
                    <Link to="/images">{t("images")}</Link>
                </li>
                <li>
                    <Link to="/pdfs">{t("pdfs")}</Link>
                </li>
                <li>
                    <Link to="/contact">{t("contact")}</Link>
                </li>
                <li>
                    <Link to="/links">{t('links')}</Link>
                </li>
            </ul>
        </div>
    )
};