class DateTime {
  private date : Date
  constructor(value : string) {
    this.date = new Date(value)
  }

  public toString() : string {
    return this.date.toDateString()
  }
}

export default DateTime