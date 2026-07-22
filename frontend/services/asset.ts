import api from "./api"
import { Asset } from "@/types/asset"

export async function getAssets(): Promise<Asset[]> {
  const response = await api.get("/assets")
  return response.data
}