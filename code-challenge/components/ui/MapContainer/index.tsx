import { memo, useState, ChangeEvent, MouseEvent, ReactNode } from "react";
import Image from 'next/image';

import mapImag from '../../../public/google_map_img.png';

//Styles
import styles from "./MapContainer.module.css";

function MapContainer() {
  
  return (
    <div className={styles.container}>
      <img className={styles.map} src="/google_map_img.png" />
    </div>
  );
}

export default memo(MapContainer);
