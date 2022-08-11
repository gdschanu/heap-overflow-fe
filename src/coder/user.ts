class User {
    setEmailOrUsername(email: string) {
      throw new Error("Method not implemented.")
    }
    private name: string
    private email: string
    private password: string

    constructor() {
        this.name = ''
        this.email = ''
        this.password = ''
    }

    validateName(name: string): boolean {
        if (name.length < 3)
            throw new Error("Name must be at least 3 characters long")
        if (name.length > 15)
            throw new Error("Name must be less than 15 characters long")
        return true
    }

    validateEmail(email: string): boolean {
        if (!(email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)))
            throw new Error("Invalid email")
        return false
    }

    validatePassword(password: string): boolean {
        if (password.length < 8)
            throw new Error("Password must be at least 8 characters long")
        if (!(password.match(/[a-z]/i) && password.match(/\d/)))
            throw new Error("Password must contain both letters and numbers")
        return true
    }

    getName(): string {
        return this.name
    }

    getEmail(): string {
        return this.email
    }

    getPassword(): string {
        return this.password
    }

    setName(name: string): void {
        this.validateName(name)
        this.name = name
    }

    setEmail(email: string): void {
        this.validateEmail(email)
        this.email = email
    }

    setPassword(password: string): void {
        this.validatePassword(password)
        this.password = password
    }

}

export default User