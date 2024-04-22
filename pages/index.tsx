import type { NextPage } from "next";
import HeaderSection from "../components/header-section"; // Ensure this is used if necessary
import HeadSection from "../components/headsection";
import styles from "./index.module.css";
import FootSection from "../components/footersection";

const FigmaDesignImagepng: NextPage = () => {
  const content = [
    {
      Date: "22.07.2021",
      time: "16:02 PM",
      reportName: "APP_URL_USAGE_(Exclude_Half_Days)_3_6_2021_3_31_2021.csv",
      download: true
    },
    {
      Date: "22.07.2021",
      time: "16:02 PM",
      reportName: "APP_URL_USAGE_(Exclude_Half_Days)_3_6_2021_3_31_2021.csv",
      download: true
    },{
      Date: "22.07.2021",
      time: "16:02 PM",
      reportName: "APP_URL_USAGE_(Exclude_Half_Days)_3_6_2021_3_31_2021.csv",
      download: true
    },{
      Date: "22.07.2021",
      time: "16:02 PM",
      reportName: "APP_URL_USAGE_(Exclude_Half_Days)_3_6_2021_3_31_2021.csv",
      download: true
    },
    ];
  return (
    <div className={styles.figmaDesignImagepng}>
      <div className={styles.root}>
        <table className={styles.table}>
          <caption className={styles.caption}>
            Recently generated reports          
          </caption>
          <thead>
            <tr>
              <th scope="col">Date</th>
              <th scope="col">Report name</th>
              <th scope="col">Download</th>
            </tr>
          </thead>
          <tbody>
            <HeadSection content={content} />
          </tbody>
          <tfoot>
            <FootSection content={content} />
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default FigmaDesignImagepng;
