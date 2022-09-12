class DateTime {
  private date : Date
  constructor(value : string) {
    this.date = new Date(value)
  }

  public toString() : string {
    return this.date.toLocaleString()
  }

  public static fromZonedDateTime(zdt : string) : DateTime {
    let s : string = '';
    for (let i=0; i<zdt.length; i++) {
      if (zdt[i] == '[')
        break
      s += zdt[i];
    }
    return new DateTime(s);
  }
}

export default DateTime