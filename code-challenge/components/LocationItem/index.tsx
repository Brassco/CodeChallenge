import React, {memo, MouseEvent} from 'react';
import LocationItemSC  from '../ui/LocationItem';

//Interfaces
import { ILocation } from '../../app/ts/interfaces';

interface Props {
    item: ILocation,
    onClick: (event: MouseEvent<HTMLElement>) => void;
}

const LocationItem = ({item, onClick}: Props) => {
    return (
        <LocationItemSC item={item} onClick={onClick} />
    )
}

export default memo(LocationItem);