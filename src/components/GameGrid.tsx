import apiClient from "@/services/api-client";
import { Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export interface Platform {
  value: string;
  name: string;
}

export interface Rating {
  mean: number;
  count: number;
}

export interface Game {
  id: number;
  name: string;
  year: number;
  genre: string;
  image: string;
  link: string;
  rating: Rating;
  adult_only: boolean;
  short_description: string;
  platforms: Platform[];
  screenshots: string[];
}

export interface FetchGamesResponse {
  total_results: number;
  limit: number;
  offset: number;
  results: Game[]; 
}
const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<FetchGamesResponse>("/games")
      .then((res) => setGames(res.data.results))
      .catch((err) => setError(err.message));
  }, [])
  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
