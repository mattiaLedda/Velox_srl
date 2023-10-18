import { InfoEdificio } from "./InfoEdificio";
import { TipoTetto } from "./TipoTetto";
import { User } from "./User";

export class RichiestaPrev {
  constructor() {
    this.infoEdificio = new InfoEdificio(); 
    this.infoTetto = new TipoTetto()
    this.infoUser = new User();
  }
}