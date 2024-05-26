import { useQuery } from "@tanstack/react-query";
import api from "../api/github";
import { Repository } from "./types";

async function fetchRepos() {
  const { data } = await api.get<Repository[]>("/users/davs07/repos");
  return data;
}

export function useFetchRepository() {
  return useQuery({
    queryKey: ["repos"],
    queryFn: fetchRepos,
  });
}
