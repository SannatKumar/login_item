
import headerstyles from "../assets/theheader.module.css";
import { useTranslation } from "react-i18next"; // Import the hook for translations

export default function Images()
{
    const { t} = useTranslation();
    return (
        <div className={headerstyles.header}>
            <ul className={headerstyles.headerul}>
                <p>Images</p>
            </ul>
        </div>
    )
};