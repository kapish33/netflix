import { notFound } from "next/navigation";
import { fetchMovie } from "@utils/omdb";
import dynamic from "next/dynamic";
import { type Metadata } from "next";
import { BasePath } from "@utils/paths";

// Dynamically import MovieDetails component
const MovieDetails = dynamic(() => import("@components/MovieDetails"), {
  loading: () => <p>Loading movie details...</p>, // Optional loading component
  ssr: true, // Disable server-side rendering if appropriate
});

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

  if (!movie) return notFound(); // Return 404 or custom error page

  // Render MovieDetails dynamically
  return <MovieDetails movie={movie} />;
}
