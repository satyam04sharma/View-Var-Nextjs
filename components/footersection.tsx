import nav from "./footer.module.css";
import type { NextPage } from "next";

type Content = {
    Date: string;
    time: string;
    reportName: string;
    download: boolean;
};

interface FootSectionProps {
    content: Content[];
}

const FootSection: NextPage<FootSectionProps> = ({ content }) => {
    const pageNumbers = [1, 2, 3, 4, 5];

    return (
        <tr className={nav.footerRow}>
            <td></td>
            <td className={nav.rowPagination}>
                <div className={nav.item}>
                    <img className={nav.icon} src="/image@2x.png" alt="Icon" />
                </div>
                <div className={nav.button}>
                    Prev
                </div>
                {pageNumbers.map((number) => (
                    <div key={number} className={` pageNumber ${number === 1 ? 'active' : '' } ${nav.button}`}>
                        {number}
                    </div>
                ))}
                <div className={nav.button}>
                    Next
                </div>
                <div className={nav.rowsPerPage}>
                    Rows per page
                </div>
            </td>
            <td></td>
        </tr>
    );
};

export default FootSection;
