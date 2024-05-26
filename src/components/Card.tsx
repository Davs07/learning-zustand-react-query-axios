import { Repository } from "../hooks/types";
import { useFavoriteReposStore } from "../store/favoriteRepos";

interface Props {
  repo: Repository;
  isFavorite: boolean;
}
export const Card = ({ repo, isFavorite }: Props) => {
  const addFavoriteRepo = useFavoriteReposStore(
    (state) => state.addFavoriteRepo
  );

  const removeFavoriteRepo = useFavoriteReposStore(
    (state) => state.removeFavoriteRepo
  );

  const toggleFavorite = () => {
    if (isFavorite) {
      removeFavoriteRepo(repo.id);
    } else {
      addFavoriteRepo(repo.id);
    }
  };

  return (
    <div>
      <a href={repo.html_url} target="_blank" rel="noreferrer">
        {repo.name}
      </a>

      <button
        onClick={() => toggleFavorite()}
        style={{
          color: "white",
          backgroundColor: isFavorite ? "purple" : "blue",
        }}>
        {isFavorite ? "Remove from favorites" : "Add to favorites"}
      </button>
    </div>
  );
};
