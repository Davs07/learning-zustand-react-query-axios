import "./App.css";
import { Card } from "./components/Card";
import { useFetchRepository } from "./hooks/useRepos";
import { useFavoriteReposStore } from "./store/favoriteRepos";

export const App = () => {
  const { data, isLoading } = useFetchRepository();
  const { favoritesReposIds, addFavoriteRepo, removeFavoriteRepo } =
    useFavoriteReposStore();

  if (isLoading) {
    return <>loading...</>;
  }

  console.log(data);
  return (
    <div>
      {data?.map(
        (repo) =>
          repo.name && (
            <Card
              key={repo.id}
              repo={repo}
              isFavorite={favoritesReposIds.includes(repo.id)}
            />
          )
      )}
    </div>
  );
};
