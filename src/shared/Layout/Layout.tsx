import React, { useEffect } from "react";
import styles from "./layout.css";
import { Outlet } from "react-router-dom";

interface ILayoutProps {
  children?: React.ReactNode;
}

export function Layout({ children }: ILayoutProps) {
  return (<div className={styles.layout}>
    {children}
    <Outlet />
  </div>);
}
