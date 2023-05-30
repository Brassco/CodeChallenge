import axios from './api';

//Interface
import {ILocation} from "../app/ts/interfaces";

//Constants
import {
  LOCATIONS_LIST,
  LOCATION,
} from './constants';

export const fetchLocations = async (): Promise<Array<ILocation>> => {
  
    const response = await axios.get(LOCATIONS_LIST);
  
  return response.data;
};

export const addLocation = async (location: ILocation) => {
  
    const response = await axios.post(LOCATION, location);

  return response;
};

export const deleteLocation = async (locationId: string) => {
  const urlString = `${LOCATION}/${locationId}`;

  const response = await axios.delete(urlString);

  return response;
};

export const updateLocation = async (location: ILocation) => {
  const urlString = `${LOCATION}/${location.id}`;

  const response = await axios.put(urlString, location);

  return response;
};
