import { redirect } from 'next/navigation';

/**
 * HomePage component.
 *
 * This component redirects users to the /movie route.
 * The redirect is implemented to ensure users are directed
 * to the movie page as needed.
 *
 * @returns {void} This function does not return a value.
 *
 * @example
 * // Redirects to the /movie page when the HomePage is accessed.
 * export default function HomePage() {
 *   redirect(`/movie`);
 * }
 */
export default function HomePage() {
  redirect(`/movie`);
}
