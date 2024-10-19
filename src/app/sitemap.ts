import { fetchMovies } from '@utils/omdb';
import { BasePath } from '@utils/paths';
import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Fetch the array of movies
  const movies = await fetchMovies();

  // Mapping through the movies to create sitemap entries
  const movieUrls = movies.map((movie) => ({
    url: `${BasePath}/movie/${movie.imdbID}`,
    lastModified: new Date().toISOString(), 
  }));

  const staticUrls = [
    {
      url: `${BasePath}/`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${BasePath}/about`,
      lastModified: new Date().toISOString(),
    },
    // static pages 
  ];

  // combined list of URLs for the sitemap
  return [...staticUrls, ...movieUrls];
}
