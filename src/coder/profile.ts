class Profile {
    private name: string
    private phone: string
    private age: string
    private slogan: string
    private university: string
    private address: string
    private city: string
    private zip: string

    constructor() {
        this.name = ''
        this.phone = ''
        this.age = ''
        this.slogan = ''
        this.university = ''
        this.address = ''
        this.city = ''
        this.zip = ''
    }

    getName(): string {
        return this.name
    }

    getPhone(): string {
        return this.phone
    }

    getAge(): string {
        return this.age
    }
    getSlogan(): string {
        return this.slogan
    }
    getUniversity(): string {
        return this.university
    }
    getAddress(): string {
        return this.address
    }
    getCity(): string {
        return this.city
    }
    getZip(): string {
        return this.zip
    }
    setName(name: string): void {
        this.name = name
    }
    setPhone(phone: string): void {
        this.phone = phone
    }

    setAge(age: string): void {
        this.age = age
    }
    setSlogan(slogan: string): void {
        this.slogan = slogan
    }
    setUniversity(university: string): void {
        this.university = university
    }
    setAddress(address: string): void {
        this.address = address
    }
    setCity(city: string): void {
        this.city = city
    }
    setZip(zip: string): void {
        this.zip = zip
    }

}

export default Profile