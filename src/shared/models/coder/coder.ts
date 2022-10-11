import { getCoderApi } from "./api/getCoderApi"

export async function getCoder(coderId: string) {
    const coder = await getCoderApi({ coderId })
    return coder
}