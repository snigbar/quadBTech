import { TShow } from "../interfaces/interfaces";

export const fetchShows = async (): Promise<TShow[] | null> => {
  const response = await fetch("https://api.tvmaze.com/search/shows?q=all");
  const result = await response.json();
  return result;
};
