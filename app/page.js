import MovieCarousel from "@/components/movie-carousel"
import SearchBar from "@/components/search-bar"
import TrendingMovies from "@/components/trending-movies"

export default function Home() {
  // Featured movies data for the carousel
  const featuredMovies = [
    {
      id: 1,
      title: "Inception",
      description:
        "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
      image: "/placeholder.svg?height=600&width=1200",
    },
    {
      id: 2,
      title: "The Dark Knight",
      description:
        "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
      image: "/placeholder.svg?height=600&width=1200",
    },
    {
      id: 3,
      title: "Interstellar",
      description:
        "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      image: "/placeholder.svg?height=600&width=1200",
    },
  ]

  // Trending movies data
  const trendingMovies = [
    {
      id: 1,
      title: "Dune",
      image: "/placeholder.svg?height=400&width=300",
      rating: 4.8,
    },
    {
      id: 2,
      title: "The Matrix",
      image: "/placeholder.svg?height=400&width=300",
      rating: 4.7,
    },
    {
      id: 3,
      title: "Avengers: Endgame",
      image: "/placeholder.svg?height=400&width=300",
      rating: 4.6,
    },
    {
      id: 4,
      title: "Parasite",
      image: "/placeholder.svg?height=400&width=300",
      rating: 4.9,
    },
    {
      id: 5,
      title: "Joker",
      image: "/placeholder.svg?height=400&width=300",
      rating: 4.5,
    },
  ]

  // Movie genres for the search bar
  const genres = [
    "Action",
    "Adventure",
    "Animation",
    "Comedy",
    "Crime",
    "Documentary",
    "Drama",
    "Fantasy",
    "Horror",
    "Mystery",
    "Romance",
    "Sci-Fi",
    "Thriller",
  ]

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Movie Carousel */}
      <MovieCarousel movies={featuredMovies} />

      {/* Search Bar */}
      <div className="container mx-auto px-4 py-8">
        <SearchBar genres={genres} />
      </div>

      {/* Trending Movies */}
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6">Trending Movies</h2>
        <TrendingMovies movies={trendingMovies} />
      </div>
    </main>
  )
}
