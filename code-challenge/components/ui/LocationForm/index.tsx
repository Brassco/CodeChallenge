import { memo, useState, ChangeEvent, MouseEvent, ReactNode } from "react";
import {
  Button,
  FormControl,
  InputLabel,
  Grid,
  FormHelperText,
  TextField,
  MenuItem,
  Select,
} from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select";

//Styles
import styles from "./LocationForm.module.css";

//Compponents
import Divider from "../../Divider";
import Label from "../../Label";
import MapComponent from "../../MapComponent";

//Interfaces
import { ILocation, ICountry } from "../../../app/ts/interfaces";

export interface FormProps {
  onDelete: (locationId: string) => void;
  onSave: (location: ILocation) => void;
  onClose: (event: MouseEvent<HTMLInputElement>) => void;
  location?: ILocation;
  countriesList: Array<ICountry>;
}

function LocationForm({
  onDelete,
  onSave,
  onClose,
  location,
  countriesList,
  ...rest
}: FormProps) {
  const [name, setName] = useState<string>(location ? location.name : "");
  const [street, setStreet] = useState<string>(location ? location.street : "");
  const [postalCode, setPostalCode] = useState<string>(
    location ? location.postalCode : ""
  );
  const [city, setCity] = useState<string>(location ? location.city : "");
  const [country, setCountry] = useState<string>(
    location ? location.country?.code : ""
  );

  const [nameError, setNameError] = useState<boolean>(false);
  const [streetError, setStreetError] = useState<boolean>(false);
  const [postalCodeError, setPostalCodeError] = useState<boolean>(false);
  const [cityError, setCityError] = useState<boolean>(false);
  const [countryError, setCountryError] = useState<boolean>(false);

  const handleChangeCountry = (event: SelectChangeEvent) => {
    console.log("[handleChangeCountry] value ", event.target.value);
    setCountry(event.target.value as string);
  };

  const handleChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleChangeStreet = (event: ChangeEvent<HTMLInputElement>) => {
    setStreet(event.target.value);
  };

  const handleChangePostalCode = (event: ChangeEvent<HTMLInputElement>) => {
    setPostalCode(event.target.value);
  };

  const handleChangeCity = (event: ChangeEvent<HTMLInputElement>) => {
    setCity(event.target.value);
  };

  const validateFields = () => {
    if (name.length < 1) {
      setNameError(true);
      return false;
    } else {
      setNameError(false);
    }

    if (street.length < 1) {
      setStreetError(true);
      return false;
    } else {
      setStreetError(false);
    }

    if (city.length < 1) {
      setCityError(true);
      return false;
    } else {
      setCityError(false);
    }

    if (postalCode.length < 1) {
      setPostalCodeError(true);
      return false;
    } else {
      setPostalCodeError(false);
    }

    if (country.length < 1) {
      setCountryError(true);
      return false;
    } else {
      setCountryError(false);
    }

    return true;
  };

  const handleSave = (event: MouseEvent<HTMLInputElement>) => {
    const selectedCountry = countriesList.find((item) => item.code === country);
    if (validateFields()) {
      const locationObj: ILocation = {
        ...location,
        name: name,
        street: street,
        postalCode: postalCode,
        city: city,
        country: selectedCountry,
        lat: "",
        long: "",
      };
      onSave(locationObj);
    }
  };

  const handleDelete = (event: MouseEvent<HTMLInputElement>) => {
    if (location) {
      onDelete(location.id);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.labelWrapper}>
      <Label>Create/Edit Location</Label>
      </div>
      <Divider />

      <div className={styles.gridRow}>
        <div className={styles.labelWrapper}>
          <Label>Name</Label>
        </div>

        <TextField
          className={styles.inputStyle}
          fullWidth
          error={nameError}
          id="location-name"
          label="Name"
          variant="outlined"
          value={name}
          onChange={handleChangeName}
          helperText={nameError ? "Field Is Required" : ""}
        />
      </div>
      <Divider />

      <div className={styles.gridRow}>
        <div className={styles.labelWrapper}>
          <Label>Address</Label>
        </div>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              className={styles.inputStyle}
              error={streetError}
              placeholder="Street"
              id="location-street"
              // label="Street"
              variant="outlined"
              value={street}
              onChange={handleChangeStreet}
              helperText={streetError ? "Field Is Required" : ""}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              fullWidth
              className={styles.inputStyle}
              error={cityError}
              placeholder="City"
              id="location-street"
              // label="City"
              variant="outlined"
              value={city}
              onChange={handleChangeCity}
              helperText={cityError ? "Field Is Required" : ""}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              fullWidth
              className={styles.inputStyle}
              error={postalCodeError}
              // placeholder="Postal code"
              id="location-street"
              label="Postal code"
              variant="outlined"
              value={postalCode}
              onChange={handleChangePostalCode}
              helperText={postalCodeError ? "Field Is Required" : ""}
            />
          </Grid>
          <Grid item xs={4}>
            <FormControl fullWidth error={countryError}>
              <InputLabel id="country-label">Country</InputLabel>
              <Select
                labelId="country-label"
                id="country"
                value={country}
                label="Country"
                onChange={handleChangeCountry}
                className={styles.selectStyle}
              >
                {countriesList.map((countryItem) => (
                  <MenuItem key={countryItem.id} value={countryItem.code}>
                    {countryItem.name}
                  </MenuItem>
                ))}
              </Select>
              <FormHelperText>
                {countryError ? "Field Is Required" : ""}
              </FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <MapComponent />
          </Grid>
          <Divider />
          <Grid item xs={8}></Grid>
          <Grid item xs={4}>
            <div className={styles.buttonWrapper}>
              <Button variant="outlined" onClick={handleSave}>
                Save location
              </Button>
              {location ? (
                <Button variant="outlined" onClick={handleDelete}>
                  Delete location
                </Button>
              ) : (
                <Button variant="outlined" onClick={onClose}>
                  Close
                </Button>
              ) }
            </div>
          </Grid>
        </Grid>
      </div>
      <Divider />
    </div>
  );
}

export default memo(LocationForm);
