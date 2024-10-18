import Image from "next/image";
import styles from "./MovieDetails.module.scss"; 
import { type MovieDetailsType } from "@/types/movie"; 
import BackButtonLink from "@components/BackButton";

interface MovieDetailsProps {
  movie: MovieDetailsType;
}

const MovieDetails = ({ movie }: MovieDetailsProps) => {
  return (
    <div className="container my-2">
      <BackButtonLink />

      <div className={styles.movieDetails}>

        <Image height={300} width={450} src={movie.Poster} alt={movie.Title} />
        <div className={styles.movieInfo}>
          <h1>{movie.Title}</h1>
          <p>
            <strong>Plot:</strong> {movie.Plot}
          </p>
          <p>
            <strong>Rating:</strong> {movie.imdbRating}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
