import apiClient from "@/services/api-client";
import { CanceledError } from "axios";
import { useState, useEffect } from "react";


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

const useGames = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState("");

    useEffect(() => {
        const controller = new AbortController();
        apiClient
            .get<FetchGamesResponse>("/games", { signal: controller.signal })
            .then((res) => setGames(res.data.results))
            .catch((err) => {
                if (err instanceof CanceledError) return;
                setError(err.message)
            });
        return () => controller.abort();
    }, [])

    return { games, error }
}

export default useGames;