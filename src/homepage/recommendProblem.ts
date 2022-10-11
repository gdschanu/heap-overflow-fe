
import Problem from '../problem/model/problem'
import MemoryLimit from '../problem/model/memoryLimit'
import TimeLimits from '../problem/model/timeLimit'
import Kilobyte from '../problem/model/kilobyte'
import Millisecond from '../problem/model/millisecond'
import getRecProblemApi from './getRecProblemApi'

async function listRecProblem(count: number): Promise<Problem[]> {

    const responseData = await getRecProblemApi(
        {count}
    )

    const problems: Problem[] = []
    responseData.forEach(item => {
        const problem = new Problem(item.id, item.name, item.description, item.author, item.difficulty)
        item.memoryLimits.forEach(memoryLimit => {
            problem.addMemoryLimit(new MemoryLimit(memoryLimit.programmingLanguage, new Kilobyte(memoryLimit.memoryLimit)))            
        })
        item.timeLimits.forEach(timeLimit => {
            problem.addTimeLimit(new TimeLimits(timeLimit.programmingLanguage, new Millisecond(timeLimit.timeLimit)))
        })
        item.allowedProgrammingLanguages.forEach((allowedProgrammingLanguage) => {
            problem.addAllowedProgrammingLanguage(allowedProgrammingLanguage)
        })
        problems.push(problem)
    })
    return problems
}



export {
    listRecProblem
}