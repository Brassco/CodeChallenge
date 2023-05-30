import React, { useState, useEffect } from "react";

import {
  InputLabel,
  Box,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
  Grid,
  Button,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import type { NextPage } from "next";
import Head from "next/head";
import { useSelector, useDispatch } from "react-redux";

//Styles
import styles from "../styles/Home.module.css";

//Components
import SidebarMenu from "../components/SideBarMenu";
import SideBarLogo from "../components/SideBarLogo";
import TopBarMenu from "../components/TopBarMenu";
import Tabs from "../components/Tabs";
import Divider from "../components/Divider";
import LocationModal from "../components/LocationModal";
import LocationItem from "../components/LocationItem";
import DateRow from "../components/DateRow";

//Redux
import { setLocationsList } from "../app/redux/slices/locationsSlice";
import { addDate } from "../app/redux/slices/datesSlice";

//Interfaces
import { IDate, ILocation } from "../app/ts/interfaces";

//Services
import {
  fetchLocations,
  addLocation,
  deleteLocation,
  updateLocation,
} from "../services/locations";

const sideBarNavigationList = [
  { id: "1", name: "Status", status: "default", href: "/status" },
  {
    id: "2",
    name: "Tickets & Transactions",
    status: "default",
    href: "/transactions",
  },
  { id: "3", name: "Informations", status: "default", href: "/informations" },
  {
    id: "4",
    name: "Location & Seatings",
    status: "default",
    href: "/location",
  },
  { id: "5", name: "Display", status: "default", href: "/display" },
  {
    id: "6",
    name: "Ticket groups & categories",
    status: "default",
    href: "categories",
  },
];

const topBarNavigationList = [
  { id: "1", name: "Dashboard", status: "disabled", href: "/dashboard" },
  { id: "2", name: "Events", status: "active", href: "/events" },
  { id: "3", name: "Konto", status: "disabled", href: "/konto" },
  { id: "4", name: "Support", status: "disabled", href: "/support" },
];

const TabsLinks = [
  { id: "1", name: "Location", status: "active", href: "/location-tab" },
  { id: "2", name: "Sirzplan", status: "disabled", href: "/sitzplan-tab" },
];

const countriesList = [
  { id: "1", name: "Great Britain", code: "GB" },
  { id: "2", name: "Germany", code: "GE" },
];

const Home: NextPage = () => {
  const {
    container,
    main,
    headerContainer,
    footer,
    logo,
    sideColumn,
    contentColumn,
  } = styles;
  const dispatch = useDispatch();
  const { locations: locationsState, dates: datesState } = useSelector(
    (state) => state
  );

  const { locations } = locationsState;
  const { dates } = datesState;

  const [alert, setAlert] = useState<boolean>(false);
  const [alertMessage, setAlertMessage] = useState<string>("");

  const [location, setLocation] = useState<string>("");
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const [selectedLocation, setSelectedLocation] =
    useState<ILocation | undefined>(undefined);
  const [dateRows, setDateRows] = useState<Array<IDate>>(dates);

  const getLocationsList = async () => {
    const list = await fetchLocations();

    if (list.length > 0) {
      dispatch(setLocationsList(list));
    }
  };

  useEffect(() => {
    getLocationsList();
  }, []);

  const handleModal = () => {
    setModalOpen(!isModalOpen);
  };

  const handleDeleteLocation = async (locationId: string) => {
    
    setSelectedLocation(undefined);
    setModalOpen(false);
    const response = await deleteLocation(locationId);
    if (response.status == 200) {
      const list = response.data;
      dispatch(setLocationsList(list));
    } else {
      setAlert(true);
      setAlertMessage("Something went wrong, please try again later");
    }
  };

  const handleSaveLocation = async (location: ILocation) => {
    
    setSelectedLocation(undefined);
    setModalOpen(false);
    let response = null;
    if (location.hasOwnProperty("id")) {
      response = await updateLocation(location);
    } else {
      response = await addLocation(location);
    }
    if (response) {
      if (response.status == 200) {
        const list = response.data;
        dispatch(setLocationsList(list));
      } else {
        setAlert(true);
        setAlertMessage("Something went wrong, please try again later");
      }
    }
  };

  const handleEditLocation = (location: ILocation) => {
    setSelectedLocation(location);
    setModalOpen(true);
  };

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  const handleNewDateRow = () => {
    const now = Date.now();

    const dateRow: IDate = {
      id: now.toString(),
      date: now,
    };

    const newRows = [...dateRows];
    newRows.push(dateRow);

    setDateRows(newRows);
  };

  const setLocationToDateRow = (dateId: string, location: ILocation) => {
    let updatedList = [];
  
    if (dateRows.length < 1) {
      updatedList.push({
        id: dateId,
        location: location,
      });
    } else {
      updatedList = dateRows.map((item) => {
        if (item.id === dateId) {
          item = { ...item, location };
        }
        return item;
      });
    }

    setDateRows(updatedList);
  };

  const setDateToDateRow = (dateId: string, date: number) => {
    let updatedList = [];
  
    if (dateRows.length < 1) {
      updatedList.push({
        id: dateId,
        date: date,
      });
    } else {
      updatedList = dateRows.map((item) => {
        if (item.id === dateId) {
          item.date = date;
        }
        return item;
      });
    }

    setDateRows(updatedList);
  };

  const handleSaveDates = () => {
    
    dispatch(addDate(dateRows));
  };

  const handleLogo = (): void => {
    console.log("[Home] [handleLogo]");
  };

  const onHandleTab = (): void => {
    console.log("[Home] [onHandleTab]");
  };

  return (
    <div className={container}>
      <div className={sideColumn}>
        <SideBarLogo logoSrc={""} onClick={handleLogo} />
        <SidebarMenu navigationList={sideBarNavigationList} />
      </div>
      <div className={contentColumn}>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={main}>
          <TopBarMenu navigationList={topBarNavigationList} />

          <div className={headerContainer}>
            <h1>Location & Sitzplan</h1>
          </div>

          <Tabs tabsLinks={TabsLinks} onClick={onHandleTab} />
          <div className={styles.title}>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </span>
          </div>

          <div className={styles.rowLabelContainer}>
            <span className={styles.label}>Dates</span>
          </div>
          <Divider />
          {dateRows &&
            dateRows.length > 0 &&
            dateRows.map((date) => (
              <DateRow
                key={date.id}
                data={date}
                setLocationToDateRow={setLocationToDateRow}
                setDateToDateRow={setDateToDateRow}
                locations={locations}
              />
            ))}

          <Divider />
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <div className={styles.rowCell}>
                <Button
                  variant="outlined"
                  sx={{
                    borderColor: "#858585",
                    color: "#d3d3d3",
                    border: 2,
                  }}
                  onClick={handleNewDateRow}
                >
                  Add date +
                </Button>
              </div>
            </Grid>
            <Grid item xs={6}></Grid>
            <Grid item xs={2}>
              <div className={styles.rowCell}>
                <Button
                  variant="outlined"
                  onClick={handleSaveDates}
                  sx={{
                    border: 2,
                    borderColor: "#39F0B2",
                    color: "#dcdcdc",
                  }}
                >
                  Save
                </Button>
              </div>
            </Grid>
          </Grid>

          <div className={styles.rowLabelContainer}>
            <span className={styles.label}>Locations</span>
          </div>
          <Divider />
          {locations.length > 0 &&
            locations.map((item: ILocation) => (
              <LocationItem
                key={item.id}
                item={item}
                onClick={() => handleEditLocation(item)}
              />
            ))}
          <Divider />

          <Grid container spacing={2}>
            <Grid item xs={4}>
              <div className={styles.rowCell}>
                <Button
                  sx={{
                    borderColor: "#858585",
                    color: "#d3d3d3",
                    border: 2,
                  }}
                  variant="outlined"
                  onClick={handleModal}
                >
                  Add location +
                </Button>
              </div>
            </Grid>
            <Grid item xs={8} />
          </Grid>
        </main>
        <LocationModal
          location={selectedLocation}
          isOpen={isModalOpen}
          onClose={handleModal}
          onDelete={handleDeleteLocation}
          onSave={handleSaveLocation}
          countriesList={countriesList}
        />
      </div>
      <div className={sideColumn}></div>
    </div>
  );
};

export default Home;
