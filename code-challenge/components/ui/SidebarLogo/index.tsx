import { memo, MouseEvent, ReactNode, useCallback } from 'react';

//Styles
import styles from "./SidebarLogo.module.css";

export interface LogoProps {
  logoSrc?: string;
  onClick?: (event: MouseEvent<HTMLElement>) => void;
}

function SidebarLogo({
    logoSrc,
  onClick,
  ...rest
}: LogoProps) {
  const handleClick = useCallback(
    (e) => {
        onClick && onClick(e);
    },
    [],
  );
  
  return (
    <div className={styles.logoContainer} >
        {
            logoSrc ? 
            <img className={styles.image} src={logoSrc}/> :
            <div className={styles.emptyLogo} onClick={onClick}/>
        }
      
    </div>
  );
}

export default memo(SidebarLogo);
