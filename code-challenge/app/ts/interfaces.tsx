export interface ILocation {
    id: string;
    name: string;
    street: string;
    postalCode: string;
    city: string;
    country: ICountry;
    lat: string;
    long: string;
}

export interface ICountry {
    id: string;
    name: string;
    code: string;
}

export interface IDate {
    id: string;
    date?: number;
    location?: ILocation;
}