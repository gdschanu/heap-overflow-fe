import programmingLanguage from './programmingLanguage'
import Kilobyte from './kilobyte'

class MemoryLimit {
    private programmingLanguage: programmingLanguage
    private memoryLimit: Kilobyte

    constructor(programmingLanguage: programmingLanguage, memoryLimit: Kilobyte) {
        this.programmingLanguage = programmingLanguage
        this.memoryLimit = memoryLimit
    }

    setMemoryLimit(memoryLimit: Kilobyte) {
        this.memoryLimit = memoryLimit
    }

    getProgrammingLanguage(): programmingLanguage {
        return this.programmingLanguage
    }

    getMemoryLimit(): Kilobyte {
        return this.memoryLimit
    }
}

export default MemoryLimit