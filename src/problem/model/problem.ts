import MemoryLimit from './memoryLimit'
import TimeLimit from './timeLimit'
import ProgrammingLanguage from './programmingLanguage'
import Difficulty from './difficulty'
import { ProblemStatus } from './problemStatus'

class Problem {
    private id: string
    private name: string
    private description: string
    private author: string
    private memoryLimits: MemoryLimit[]
    private timeLimits: TimeLimit[]
    private allowedProgrammingLanguages: ProgrammingLanguage[]
    private difficulty: Difficulty
    private acceptance: number
    private tags: string[]
    private status: ProblemStatus
    constructor(
        id: string,
        name: string,
        description: string,
        author: string,
        difficulty: Difficulty,
        acceptance: number,
        tags: string[],
        status: ProblemStatus
    ) {
        this.id = id
        this.name = name
        this.description = description
        this.author = author
        this.memoryLimits = []
        this.timeLimits = []
        this.allowedProgrammingLanguages = []
        this.difficulty = difficulty
        this.acceptance = acceptance
        this.tags = tags
        this.status = status
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

    getAcceptance(): number {
        return this.acceptance
    }

    getTags(): string[] {
        return this.tags
    }
    
    getStatus(): ProblemStatus {
        return this.status
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

    setAcceptance(acceptance: number): void {
        this.acceptance = acceptance
    }

    setTags(tags: string[]): void {
        this.tags = tags
    }

    setStatus(status: ProblemStatus): void {
        this.status = status
    }

}
export default Problem