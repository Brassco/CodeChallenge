import { memo, MouseEvent, ReactNode, useCallback } from "react";
import { Grid } from '@mui/material';

//Interfaces
import { ILocation } from '../../../app/ts/interfaces';

//Styles
import styles from "./LocationItem.module.css";

interface Props {
  item: ILocation;
  onClick: (event: MouseEvent<HTMLElement>) => void;
}

function LocationItem({ item, onClick, ...rest }: Props) {
  return (
    <Grid container spacing={2}>
            <Grid item xs={3}>
              <div className={styles.rowCell}>
                <span className={styles.labelSmall}>
                  {item.name}
                </span>
              </div>              
            </Grid>
            <Grid item xs={3} />
            <Grid item xs={3}>
              <div className={styles.rowCell}>
                <span onClick={onClick} className={styles.labelSmall}> Edit location</span>
              </div>
            </Grid>
            <Grid item xs={3} />
          </Grid>
  );
}

export default memo(LocationItem);
