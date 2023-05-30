import { memo, MouseEvent } from "react";
import DividerSC from "../ui/Divider";

export interface DividerProps {
  color?: string;
}

function Divider({ color, ...rest }: DividerProps) {
  return <DividerSC color={color}/>;
}

export default memo(Divider);
