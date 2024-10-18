import { notFound } from "next/navigation";
import { fetchMovie } from "@utils/omdb";
import MovieDetails from "@components/MovieDetails";

export default async function MovieDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const movie = await fetchMovie(params.id);

  if (!movie) return notFound(); // Either This Or Our Custom Error Page

  return <MovieDetails movie={movie} />;
}
