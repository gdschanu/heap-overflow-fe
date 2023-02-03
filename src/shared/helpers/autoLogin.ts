import { getCoderInfo } from "@/coder/auth"
import store from "../store"
import errorHandler from "./errorHandler"

export default async function autoLogin() {
  try {
    const accessToken = localStorage.getItem('accessToken')
    const coderId = localStorage.getItem('coderId')
    if (accessToken && coderId) {
      const coder = await getCoderInfo(coderId)
      store.dispatch('coderStore/setCoder', coder)
    } else {
      localStorage.removeItem('accessToken')
      localStorage.removeItem('coderId')
    }
  } catch (error) {
    errorHandler(error)
  }
}