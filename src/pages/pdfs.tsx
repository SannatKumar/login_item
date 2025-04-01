
import headerstyles from "../assets/theheader.module.css";
import { useTranslation } from "react-i18next"; // Import the hook for translations

export default function pdfs()
{
    const { t} = useTranslation();
    return (
        <div className={headerstyles.header}>
            <ul className={headerstyles.headerul}>
                <p>Yoga Content</p>
            </ul>
        </div>
    )
};