import { memo, MouseEvent } from "react";
import Modal from "@mui/material/Modal";

//UI
import LocationForm from "../ui/LocationForm";

//Interfaces
import {ILocation, ICountry} from '../../app/ts/interfaces';

export interface ModalProps {
  isOpen: boolean;
  onClose: (event: MouseEvent<HTMLElement>) => void;
  onDelete: (locationId: string) => void;
  onSave: (location: ILocation) => void;
  location?: ILocation;
  countriesList: Array<ICountry>;
}

function LocationModal({ isOpen, onClose, onDelete, onSave, location, countriesList, ...rest }: ModalProps) {
  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <LocationForm location={location} onDelete={onDelete} onSave={onSave} onClose={onClose} countriesList={countriesList}></LocationForm>
    </Modal>
  )
}

export default memo(LocationModal);
