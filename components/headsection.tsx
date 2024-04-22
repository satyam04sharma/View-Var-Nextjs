import styles from "../pages/index.module.css"; // Ensure this import path is correct
import nav from "./header.module.css"; // Ensure this import path is correct
import type { NextPage } from "next";

// Define the type for an individual content item
type Content = {
    Date: string;
    time: string;
    reportName: string;
    download: boolean;
};

interface HeadSectionProps {
    content: Content[];
}

const HeadSection: NextPage<HeadSectionProps> = ({ content }) => {
    return (
        <>
            {content.map(({ Date, time, reportName, download }, index) => (
                <tr key={index} className={nav.rowContent}>
                    <td>
                        <div className={nav.date}>{Date}</div>
                        <div className={nav.time}>{time}</div>
                    </td>
                    <td>{reportName}</td>
                    <td>
                        {download && <img className={nav.imageIcon4} src="/image@2x.png" alt="Report Icon" />}
                    </td>
                </tr>
            ))}
        </>
    );
};

export default HeadSection;
