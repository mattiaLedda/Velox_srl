export class InfoEdificio {
  constructor(
    superficieTetto = "",
    via = "",
    citta = "",
    provincia = "",
    cap = ""
  ) {
    this.superficieTetto = superficieTetto;
    this.via = via;
    this.citta = citta;
    this.provincia = provincia;
    this.cap = cap;
  }
}