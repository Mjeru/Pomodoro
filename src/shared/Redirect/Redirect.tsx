import React, { useEffect } from "react";
import styles from "./redirect.css";
import { redirect, useNavigate, useNavigation } from "react-router-dom";

export function Redirect() {
  const navigation = useNavigate();
  useEffect(() => {
    navigation("/timer");
  }, []);
  return null;
}
