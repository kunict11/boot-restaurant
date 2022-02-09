export class Reservation {
  constructor(
    private _name: string,
    private _dateTime: Date,
    private _nSeats: number
  ) {}

  get name() {
    return this._name;
  }
  get dateTime() {
    return this._dateTime;
  }
  get nSeats() {
    return this._nSeats;
  }
}
