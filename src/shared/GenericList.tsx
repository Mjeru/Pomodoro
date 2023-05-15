import React from "react";
import { Icon } from "./Icon";

interface IItem {
  id: string;
  text?: string;
  onClick?: (ev?: any) => void;
  className?: string;
  As?: "a" | "li" | "button" | "div";
  href?: string;
  icon?: "inc" | "dec" | "edit" | "delete";
}

interface IGenericListProps {
  list: IItem[];
}

function noop() {}

export const GenericList = function ({ list }: IGenericListProps) {
  return (
    <>
      {list.map(
        ({ As = "div", text, onClick = noop, className, id, href, icon }) => (
          <As className={className} onClick={onClick} key={id} href={href}>
            {icon && <Icon iconName={icon} />}
            {text}
          </As>
        )
      )}
    </>
  );
};
