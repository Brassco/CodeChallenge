import React, {
  useState,
  ChangeEvent,
  MouseEvent,
  ReactHTMLElement,
} from "react";
import { Grid, FormControl, Select, MenuItem } from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import moment, { Moment } from "moment";

//Styles
import styles from "./DateRow.module.css";
import { IDate, ILocation } from "../../../app/ts/interfaces";

export interface Props {
  data: IDate;
  setLocationToDateRow: (dateId: string, location: ILocation) => void;
  setDateToDateRow: (dateId: string, date: number) => void;
  locations: Array<ILocation>;
}

const DateRow = ({
  data,
  locations,
  setLocationToDateRow,
  setDateToDateRow,
}: Props) => {
  const handleChangeDate = (date: Moment) => {
    const momentTomiliseconds = date.valueOf();
    setDateToDateRow(data.id, momentTomiliseconds);
  };

  const handleChangeLocation = (event: SelectChangeEvent) => {
    const locationId = event.target.value;
    const locationObj = locations.find((item) => item.id === locationId);

    setLocationToDateRow(data.id, locationObj);
  };

  const getDateValue = (value: number): Moment => {
    return moment(value);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <div className={styles.rowCell}>
          <span className={styles.labelSmall}>Date</span>
          <DatePicker
            className={styles.datePicker}
            value={data ? getDateValue(data.date) : null}
            onChange={handleChangeDate}
          />
        </div>
      </Grid>
      <Grid item xs={4}>
        {locations.length > 0 && (
          <div className={styles.rowCell}>
            <span className={styles.labelSmall}>Locations</span>
            <FormControl fullWidth>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={data ? data.location?.id : ""}
                label="Location"
                onChange={handleChangeLocation}
                className={styles.seelctStyle}
              >
                {locations.map((location) => (
                  <MenuItem key={location.id} value={location.id}>
                    {location.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
        )}
      </Grid>
      <Grid item xs={4}></Grid>
    </Grid>
  );
};

export default DateRow;
