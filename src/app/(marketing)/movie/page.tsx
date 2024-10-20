import Link from 'next/link';
import styles from './Home.module.scss';
import { fetchMovies } from '@utils/omdb';
import Image from 'next/image';
import { type Metadata } from 'next';
import { BasePath } from '@utils/paths';
import { blurDataImage } from '@const/index';

export const metadata: Metadata = {
  title: 'Movie List',
  description: 'List of movies',
  metadataBase: BasePath,
  keywords: 'movie, list, netflix, movies',
  referrer: 'origin-when-cross-origin',
  alternates: {
    canonical: "/movie",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default async function HomePage() {
  const movies = await fetchMovies();

  if (!movies.length) return <div>No Movies Found</div>;

  return (
    <div className='container my-2'>
      <div className={styles.movieList}>
        {movies.map((movie, index) => (
          <Link key={movie.imdbID} href={`/movie/${movie.imdbID}`}>
            <div className={styles.movieCard}>
              <Image
                height={300}
                width={450}
                src={movie.Poster}
                alt={`Poster of ${movie.Title} movie`}
                blurDataURL={blurDataImage}
                loading={index < 3 ? 'eager' : 'lazy'}
              />
              <h3>{movie.Title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
