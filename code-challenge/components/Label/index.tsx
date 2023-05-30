import { memo } from "react";
import LabelSC from "../ui/Label";

export interface DividerProps {
  children: string;
}

function Label({ children, ...rest }: DividerProps) {
  return <LabelSC>
      {children}
  </LabelSC>;
}

export default memo(Label);
