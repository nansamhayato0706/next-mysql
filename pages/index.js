import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [dataResponse, setdataResponse] = useState([]);
  useEffect(() => {
    async function getPageData() {
      const apiUrlEndpoint = "http://localhost:3000/api/getdata-lib";
      const response = await fetch(apiUrlEndpoint);
      const res = await response.json();
      console.log(res.users);
      setdataResponse(res.users);
    }
    getPageData();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.column}>姓</div>
      <div className={styles.column}>名</div>
      {dataResponse.map((users) => {
        return (
          <div key={users.user_id}>
            <div className={styles.column}>
              <div>{users.last_name}</div>
              {/* <img src={`/images/${users.productimage}`} alt="" /> */}
            </div>
            <div className={styles.column}>
              <div>{users.first_name}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
