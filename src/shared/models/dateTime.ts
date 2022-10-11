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

  public timeSince() : string {
    const seconds = Math.floor((new Date().getTime() - this.date.getTime()) / 1000);
    let interval = Math.floor(seconds / 31536000);
    if (interval > 1) {
      return interval + " years ago";
    }
    interval = Math.floor(seconds / 2592000);
    if (interval > 1) {
      return interval + " months ago";
    }
    interval = Math.floor(seconds / 86400);
    if (interval > 1) {
      return interval + " days ago";
    }
    interval = Math.floor(seconds / 3600);
    if (interval > 1) {
      return interval + " hours ago";
    }
    interval = Math.floor(seconds / 60);
    if (interval > 1) {
      return interval + " minutes ago";
    }
    return Math.floor(seconds) + " seconds ago";
  }
}

export default DateTime