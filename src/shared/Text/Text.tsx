import React from "react";
import styles from "./text.css";
import classNames from "classnames";

type TSizes = 28 | 20 | 16 | 14 | 12 | 10;

export enum EColors {
  black = "black",
  orange = "orange",
  green = "green",
  white = "white",
  grayF4 = "grayF4",
  greyF3 = "greyF3",
  greyD9 = "greyD9",
  greyC4 = "greyC4",
  grey99 = "grey99",
  grey66 = "grey66",
}

class EColor {}

interface ItextProps {
  As?: "li" | "span" | "div" | "h1" | "h2" | "h3" | "h4";
  children?: React.ReactNode;
  size: TSizes;
  mobileSize?: TSizes;
  desktopSize?: TSizes;
  tabletSize?: TSizes;
  color?: EColors;
}

export function Text(props: ItextProps) {
  const {
    As = "span",
    children,
    size,
    mobileSize,
    desktopSize,
    tabletSize,
    color = EColors.black,
  } = props;
  const classes = classNames(
    styles[`s${size}`],
    styles[color],
    { [styles[`m${size}`]]: mobileSize },
    { [styles[`d${size}`]]: desktopSize },
    { [styles[`t${size}`]]: tabletSize }
  );
  return <As className={classes}>{children}</As>;
}
