class Millisecond {
    private value: number

    constructor(value: number) {
        if (value < 0) {
            throw new Error('Millisecond value must be greater than or equal to 0')
        }
        this.value = value
    }

    toNumber(): number {
        return this.value
    }
}

export default Millisecond