class Coder {
    private _id: string
    private _name: string
    private _email: string
    private _password: string
    private _age: number
    private _avatar: string

    constructor(id: string) {
        this._id = id
        this._name = ''
        this._email = ''
        this._password = ''
        this._age = 0
        this._avatar = ''
    }

    static validateName(name: string): boolean {
        if (name.length < 3)
            throw new Error("Name must be at least 3 characters long")
        if (name.length > 15)
            throw new Error("Name must be less than 15 characters long")
        return true
    }

    static validateEmail(email: string): boolean {
        if (!(email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)))
            throw new Error("Invalid email")
        return false
    }

    static validatePassword(password: string): boolean {
        if (password.length < 8)
            throw new Error("Password must be at least 8 characters long")
        if (!(password.match(/[a-z]/i) && password.match(/\d/)))
            throw new Error("Password must contain both letters and numbers")
        return true
    }

    get id() {
        return this._id
    }

    get name(): string {
        return this._name
    }

    get email(): string {
        return this._email
    }

    get password(): string {
        return this._password
    }

    get age(): number {
        return this._age
    }

    get avatar(): string {
        return this._avatar
    }

    set name(name: string) {
        Coder.validateName(name)
        this._name = name
    }

    set email(email: string) {
        Coder.validateEmail(email)
        this._email = email
    }

    set password(password: string) {
        Coder.validatePassword(password)
        this._password = password
    }

    set age(age: number) {
        this._age = age
    }

    set avatar(avatar: string) {
        this._avatar = avatar
    }
}

export default Coder