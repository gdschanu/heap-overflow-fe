import apiService from '@/shared/helpers/apiService';
import Difficulty from "../../difficulty";
import { ProblemStatus } from "../../problemStatus";
import ProgrammingLanguage from "../../programmingLanguage";

type GetRecommendProblemsRequest = {
  count: number
}

type GetRecommendsProblemResponse = {
  code: null | string
  message: string
  data: null | GetRecommendsProblemResponseData
}

type GetRecommendsProblemResponseData = {
  id: string
  difficulty: Difficulty
  name: string
  description: string
  author: string
  memoryLimits: Array<{
    programmingLanguage: ProgrammingLanguage
    memoryLimit: number
  }>
  timeLimits: Array<{
    programmingLanguage: ProgrammingLanguage
    timeLimit: number
  }>
  allowedProgrammingLanguages: ProgrammingLanguage[]
  acceptance: number
  tags: string[]
  status: ProblemStatus
}[]

export default async function getRecommendProblemsApi(req: GetRecommendProblemsRequest) {
  const response = (await apiService('GET', `/practiceProblem/problem/recommended?count=${req.count}`, {}, {})).data as GetRecommendsProblemResponse
  return response
}