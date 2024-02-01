export const fetchShows = async (): Promise<
  Record<string, unknown>[] | null
> => {
  const response = await fetch("https://api.tvmaze.com/search/shows?q=all");
  const result = await response.json();
  return result;
};
