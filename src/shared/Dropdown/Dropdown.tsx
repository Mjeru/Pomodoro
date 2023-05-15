import React, { useEffect, useRef } from "react";
import styles from "./dropdown.css";

interface IDropdownProps {
  button: React.ReactNode;
  children: React.ReactNode;
  isOpen?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
}

export function Dropdown({
  button,
  children,
  isOpen,
  onOpen,
  onClose,
}: IDropdownProps) {
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(isOpen);
  const handleOpen = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const close = () => {
    setIsDropdownOpen(false);
  };
  const container = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (isDropdownOpen) {
      document.body.addEventListener("click", function CloseDropdown(ev: any) {
        setIsDropdownOpen(false);
        document.body.removeEventListener("click", CloseDropdown);
      });
    }
  }, [isDropdownOpen]);
  return (
    <div className={styles.container}>
      <div
        onClick={handleOpen}
        className={isDropdownOpen ? styles.dropdownOpen : ""}
      >
        {button}
      </div>
      {isDropdownOpen && (
        <div className={styles.listContainer} onClick={close}>
          <div className={styles.list} ref={container}>
            {children}
          </div>
        </div>
      )}
    </div>
  );
}
