import { default as _Link } from 'next/link';
import { memo, MouseEvent, ReactNode } from 'react';
import styles from './Divider.module.css';

export interface DividerProps {
  color?: string;
}

function Divider({
  color,
  ...rest
}: DividerProps) {
  return (
    <div className={styles.container} style={{backgroundColor: color ? color : "#808080"}}/>
  );
}

export default memo(Divider);
