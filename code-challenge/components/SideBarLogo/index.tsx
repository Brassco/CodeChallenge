import { memo, MouseEvent } from "react";
import SidebarLogo from "../ui/SidebarLogo";

export interface SideBarLogoProps {
  logoSrc?: string;
  onClick?: (event: MouseEvent<HTMLElement>) => void;
}

function SideBarLogo({ logoSrc, onClick, ...rest }: SideBarLogoProps) {
  return <SidebarLogo logoSrc={logoSrc} onClick={onClick} />;
}

export default memo(SideBarLogo);
