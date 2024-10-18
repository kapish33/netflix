import Link from 'next/link';
import styles from './Home.module.scss';
import { fetchMovies } from '@utils/omdb';
import Image from 'next/image';

export default async function HomePage() {
  const movies = await fetchMovies();

  if(!movies.length) return <div>No Movies Found</div>

  return (
    <div className='container my-2'>
      <div className={styles.movieList}>
        {movies.map((movie) => (
          <Link key={movie.imdbID} href={`/movie/${movie.imdbID}`}>
            <div className={styles.movieCard}>
              <Image height={300} width={450} src={movie.Poster} alt={movie.Title} /> 
              <h3>{movie.Title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
