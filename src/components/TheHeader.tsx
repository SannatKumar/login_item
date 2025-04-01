import headerstyles from "../assets/theheader.module.css";

export default function TheHeader()
{
    return (
        <div className={headerstyles.header}>
            <ul className={headerstyles.headerul}>
                <li>
                    Home
                </li>
                <li>
                    Yoga Content
                </li>
                <li>
                    Images
                </li>
                <li>
                    Pdfs
                </li>
                <li>
                    Contact
                </li>
                <li>
                    Links
                </li>
            </ul>
        </div>
    )
}