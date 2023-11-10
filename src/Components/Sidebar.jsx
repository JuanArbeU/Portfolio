import React from "react";
import styles from "../App.module.css";
import { SidebarData } from "./SidebarData";

export const Sidebar = () => {
  return (
    <div className={styles.Sidebar}>
      <ul className={styles.SidebarList}>
        {SidebarData.map((val, key) => {
          return (
            <li className={styles.row} key={key} /* onClick={} */>
              <div className={ styles.icon }>{val.icon}</div>
              <div className={ styles.title }>{val.title}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
