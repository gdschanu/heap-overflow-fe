import MemoryLimit from './memoryLimit'
import TimeLimit from './timeLimit'
import ProgrammingLanguage from './programmingLanguage'
import Difficulty from './difficulty'

class Problem {
    private id: string
    private name: string
    private description: string
    private author: string
    private memoryLimits: MemoryLimit[]
    private timeLimits: TimeLimit[]
    private allowedProgrammingLanguages: ProgrammingLanguage[]
    private difficulty: Difficulty

    constructor(
        id: string,
        name: string,
        description: string,
        author: string,
        difficulty: Difficulty) {
        this.id = id
        this.name = name
        this.description = description
        this.author = author
        this.difficulty = difficulty
        this.memoryLimits = []
        this.timeLimits = []
        this.allowedProgrammingLanguages = []
    }

    getId(): string {
        return this.id
    }

    getName(): string {
        return this.name
    }

    getDescription(): string {
        return this.description
    }

    getAuthor(): string {
        return this.author
    }

    getMemoryLimits(): MemoryLimit[] {
        return this.memoryLimits
    }

    getTimeLimits(): TimeLimit[] {
        return this.timeLimits
    }

    getAllowedProgrammingLanguages(): ProgrammingLanguage[] {
        return this.allowedProgrammingLanguages
    }

    getDifficulty(): Difficulty {
        return this.difficulty
    }

    setName(name: string): void {
        this.name = name
    }

    setDescription(description: string): void {
        this.description = description
    }

    setAuthor(author: string): void {
        this.author = author
    }

    setDifficulty(difficulty: Difficulty): void {
        this.difficulty = difficulty
    }

    addMemoryLimit(newMemoryLimit: MemoryLimit): void {
        for (const memoryLimit of this.memoryLimits) {
            if (memoryLimit.getProgrammingLanguage() === newMemoryLimit.getProgrammingLanguage()) {
                throw new Error("Memory limit for this programming language already exists")
            }
        }

        this.memoryLimits.push(newMemoryLimit)
    }

    addTimeLimit(newTimeLimit: TimeLimit): void {
        for (const timeLimit of this.timeLimits) {
            if (timeLimit.getProgrammingLanguage() === newTimeLimit.getProgrammingLanguage()) {
                throw new Error("Time limit for this programming language already exists")
            }
        }

        this.timeLimits.push(newTimeLimit)
    }

    addAllowedProgrammingLanguage(newAllowedProgrammingLanguage: ProgrammingLanguage): void {
        for (const allowedProgrammingLanguage of this.allowedProgrammingLanguages) {
            if (allowedProgrammingLanguage === newAllowedProgrammingLanguage) {
                throw new Error("duplicate programming language: " + newAllowedProgrammingLanguage)
            }
        }

        this.allowedProgrammingLanguages.push(newAllowedProgrammingLanguage)
    }

}
export default Problem