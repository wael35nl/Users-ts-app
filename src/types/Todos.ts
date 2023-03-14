export interface UsersT {
    id:       number;
    name:     string;
    username: string;
    email:    string;
    address:  AddressT;
    phone:    string;
    website:  string;
    company:  CompanyT;
}

export interface AddressT {
    street:  string;
    suite:   string;
    city:    string;
    zipcode: string;
    geo:     GeoT;
}

export interface GeoT {
    lat: string;
    lng: string;
}

export interface CompanyT {
    name:        string;
    catchPhrase: string;
    bs:          string;
}