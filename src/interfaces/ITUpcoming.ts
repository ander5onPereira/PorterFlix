import { ITResult } from "./ITResult";

export interface ITUpcoming {
  dates: {
    maximum: string,
    minimum: string
  },
  page: number,
  results: Array<ITResult>,
  total_pages: number,
  total_results: number
}