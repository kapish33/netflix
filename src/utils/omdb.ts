"use server";
import { type MovieDetailsType, type Movie } from "@/types/movie";

// Define interfaces for the OMDb API responses
interface OmdbSearchResponse {
  Search: Movie[]; // Array of Movie objects
  totalResults: string;
  Response: string;
}

interface OmdbMovieResponse extends MovieDetailsType {
  Response: string;
}

/**
 * Fetches a list of movies from the OMDb API based on a search term.
 *
 * @async
 * @function fetchMovies
 * @returns {Promise<Movie[]>} An array of Movie objects.
 * @throws {Error} If the fetch operation fails or if the response is invalid.
 *
 * @example
 * const movies = await fetchMovies();
 * console.log(movies);
 */
export async function fetchMovies(): Promise<Movie[]> {
  const response = await fetch(
    `https://www.omdbapi.com/?s=Batman&apikey=${process.env.OMDB_API_KEY}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch movies.");
  }

  const data = await response.json() as OmdbSearchResponse; // Explicit type assertion
  if (data.Response === "False") {
    throw new Error("No movies found.");
  }

  return data.Search;
}

/**
 * Fetches detailed information about a specific movie from the OMDb API.
 *
 * @async
 * @function fetchMovie
 * @param {string} id - The unique identifier of the movie.
 * @returns {Promise<MovieDetailsType | null>} A MovieDetailsType object or null if not found.
 * @throws {Error} If the fetch operation fails or if the response is invalid.
 *
 * @example
 * const movieDetails = await fetchMovie("tt0372784");
 * if (movieDetails) {
 *   console.log(movieDetails);
 * } else {
 *   console.log("Movie not found.");
 * }
 */
export async function fetchMovie(id: string): Promise<MovieDetailsType | null> {
  const response = await fetch(
    `https://www.omdbapi.com/?i=${id}&apikey=${process.env.OMDB_API_KEY}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch movie details.");
  }

  const data = await response.json() as OmdbMovieResponse; // Explicit type assertion
  return data.Response === "False" ? null : data;
}
