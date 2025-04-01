
import { useState } from "react";
import { jsPDF } from "jspdf";
import headerstyles from "../assets/theheader.module.css";
import { useTranslation } from "react-i18next";

export default function PdfGenerator() {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const generatePDF = () => {
        const doc = new jsPDF();
        doc.text("User Details", 10, 10);
        doc.text(`Name: ${formData.name}`, 10, 20);
        doc.text(`Email: ${formData.email}`, 10, 30);
        doc.text(`Message: ${formData.message}`, 10, 40);
        doc.save("user-details.pdf");
    };

    return (
        <div className={headerstyles.header}>
            <h2>{t("generatepdf")}</h2>
            <form>
                <label>Name:</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} />

                <label>Email:</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} />

                <label>Message:</label>
                <textarea name="message" value={formData.message} onChange={handleChange} />

                <button type="button" onClick={generatePDF}>Download PDF</button>
            </form>
        </div>
    );
}
