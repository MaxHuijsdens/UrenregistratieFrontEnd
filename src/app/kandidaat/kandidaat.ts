import { Contactpersoon } from "../contactpersoon/contactpersoon";
import { Bedrijf } from "../bedrijf/bedrijf";

export class Kandidaat {
    id: number;
    telefoonnummer:string;
    naam:string;
    Uurtarief:number;
    email:string;
    werkgever: Bedrijf;
    contactpersoon : Contactpersoon

}