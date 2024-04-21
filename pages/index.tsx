import type { NextPage } from "next";
import HeaderSection from "../components/header-section";
import Header from "../components/header";
import styles from "./index.module.css";

const FigmaDesignImagepng: NextPage = () => {
  return (
    <div className={styles.figmaDesignImagepng}>
      <header className={styles.root}>
        <div className={styles.frame}>
          <div className={styles.groups}>
            <div className={styles.frame1}>
              <div className={styles.pm}>15:00 PM</div>
              <div className={styles.div}>19.07.2021</div>
            </div>
            <div className={styles.frame2}>
              <img className={styles.imageIcon} alt="" src="/image@2x.png" />
              <div className={styles.rurL2Exclude}>
                RUR_L2_（Exclude_NonWorking_Days)_4_1_2021_4_1_2021.csv
              </div>
            </div>
          </div>
          <div className={styles.groups1}>
            <img className={styles.imageIcon1} alt="" src="/image@2x.png" />
            <div className={styles.appUrlUsageE}>
              APP_URL_USAGE_（Exclude_Half_Days)_3_6_2021_3_31_2021.csv
            </div>
            <div className={styles.frame3}>
              <div className={styles.pm1}>16:02 PM</div>
              <div className={styles.div1}>22.07.2021</div>
            </div>
          </div>
          <div className={styles.groups2}>
            <img className={styles.imageIcon2} alt="" src="/image@2x.png" />
            <div className={styles.frame4}>
              <img className={styles.imageIcon3} alt="" src="/image@2x.png" />
              <div className={styles.frame5}>
                <HeaderSection />
                <div className={styles.recentlyGenerat}>
                  Recently Generated Reports
                </div>
              </div>
            </div>
          </div>
          <div className={styles.groups3}>
            <img
              className={styles.backgroundIcon}
              alt=""
              src="/background@2x.png"
            />
            <div className={styles.download}>Download</div>
            <div className={styles.reportName}>Report Name</div>
            <div className={styles.date}>Date</div>
          </div>
          <div className={styles.groups4}>
            <div className={styles.pm2}>17:00 PM</div>
            <div className={styles.frame6}>
              <img className={styles.imageIcon4} alt="" src="/image@2x.png" />
              <div className={styles.rurL10101202}>
                RUR_L1_01_01_2021_31_03_2021.csV
              </div>
              <div className={styles.div2}>20.07.2021</div>
            </div>
          </div>
        </div>
        <div className={styles.groups5}>
          <Header />
          <div className={styles.frame7}>
            <img className={styles.imageIcon5} alt="" src="/image@2x.png" />
          </div>
          <div className={styles.frame8}>
            <div className={styles.prev}>Prev</div>
          </div>
          <div className={styles.frame9}>
            <div className={styles.button}>
              <div className={styles.background} />
              <div className={styles.div3}>1</div>
            </div>
          </div>
          <div className={styles.frame10}>
            <img className={styles.imageIcon6} alt="" src="/image@2x.png" />
          </div>
          <div className={styles.frame11}>
            <img className={styles.imageIcon7} alt="" src="/image@2x.png" />
          </div>
          <div className={styles.frame12}>
            <div className={styles.div4}>3</div>
          </div>
          <div className={styles.frame13}>
            <img className={styles.imageIcon7} alt="" src="/image@2x.png" />
          </div>
          <div className={styles.frame14}>
            <img className={styles.imageIcon9} alt="" src="/image@2x.png" />
          </div>
          <div className={styles.frame15}>
            <img className={styles.imageIcon10} alt="" src="/image@2x.png" />
          </div>
          <div className={styles.frame16}>
            <div className={styles.next}>Next</div>
          </div>
          <div className={styles.frame17}>
            <div className={styles.div5}>{`>1`}</div>
          </div>
          <div className={styles.frame18}>
            <div className={styles.button1}>
              <img className={styles.imageIcon11} alt="" src="/image@2x.png" />
              <div className={styles.frame19}>
                <div className={styles.background1} />
                <div className={styles.div6}>10</div>
              </div>
            </div>
          </div>
          <div className={styles.frame20}>
            <div className={styles.rowsPerPage}>Rows per page</div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default FigmaDesignImagepng;
