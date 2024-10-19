import { notFound } from "next/navigation";
import { fetchMovie } from "@utils/omdb";
import MovieDetails from "@components/MovieDetails";
import { Metadata } from "next";
import { BasePath } from "@utils/paths";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const movie = await fetchMovie(params.id);

  if (!movie) {
    return {
      title: "Movie Not Found",
      description: "The movie you are looking for does not exist.",
    };
  }

  const { Title, Plot, Poster, imdbRating, imdbID } = movie;

  return {
    title: `${Title} - Movie Details`,
    description: Plot,
    openGraph: {
      title: `${Title} - ${imdbRating}/10`,
      description: Plot,
      url: `https://your-site.com/movie/${imdbID}`,
      images: [
        {
          url: Poster,
          alt: Title,
        },
      ],
      type: "article",
      siteName: "Movie Database",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: `${Title} - Movie Details`,
      description: Plot,
      images: [Poster],
    },
    // canonical URL
    metadataBase: BasePath,
    alternates: {
      canonical: `/movie/${imdbID}`,
    },
    referrer: "origin-when-cross-origin",

    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function MovieDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const movie = await fetchMovie(params.id);

  if (!movie) return notFound(); // Either return 404 or custom error page

  return <MovieDetails movie={movie} />;
}
