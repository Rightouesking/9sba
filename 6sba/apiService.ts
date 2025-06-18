// src/services/apiService.ts
import fetch from "node-fetch";
import { ApiError } from "../utils/errorHandler";

const API_URL = "https://dummyjson.com/products";

export async function fetchProducts(): Promise<any[]> {
  try {
    const res = await fetch(API_URL);
    if (!res.ok) throw new ApiError("Failed to fetch products.");
    const data = await res.json();
    return data.products;
  } catch (err) {
    throw new ApiError(err instanceof Error ? err.message : String(err));
  }
}