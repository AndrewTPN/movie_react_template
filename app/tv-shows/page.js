import SearchBar from "@/components/search-bar"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

export default function TVShows() {
  // TV Shows data
  const tvShows = [
    {
      id: 1,
      title: "Breaking Bad",
      image: "/placeholder.svg?height=400&width=300",
      rating: 4.9,
      description:
        "A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family's future.",
    },
    {
      id: 2,
      title: "Game of Thrones",
      image: "/placeholder.svg?height=400&width=300",
      rating: 4.7,
      description:
        "Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia.",
    },
    {
      id: 3,
      title: "Stranger Things",
      image: "/placeholder.svg?height=400&width=300",
      rating: 4.8,
      description:
        "When a young boy disappears, his mother, a police chief and his friends must confront terrifying supernatural forces in order to get him back.",
    },
    {
      id: 4,
      title: "The Mandalorian",
      image: "/placeholder.svg?height=400&width=300",
      rating: 4.6,
      description:
        "The travels of a lone bounty hunter in the outer reaches of the galaxy, far from the authority of the New Republic.",
    },
    {
      id: 5,
      title: "The Crown",
      image: "/placeholder.svg?height=400&width=300",
      rating: 4.5,
      description:
        "Follows the political rivalries and romance of Queen Elizabeth II's reign and the events that shaped the second half of the twentieth century.",
    },
    {
      id: 6,
      title: "The Witcher",
      image: "/placeholder.svg?height=400&width=300",
      rating: 4.4,
      description:
        "Geralt of Rivia, a solitary monster hunter, struggles to find his place in a world where people often prove more wicked than beasts.",
    },
  ]

  // TV Show genres for the search bar
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
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-900 to-blue-900 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">TV Shows</h1>
          <p className="text-lg opacity-80">Discover the best TV series from around the world</p>
        </div>
      </div>

      {/* Search Bar */}
      <div className="container mx-auto px-4 py-8">
        <SearchBar genres={genres} />
      </div>

      {/* TV Shows Grid */}
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6">Popular TV Shows</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tvShows.map((show) => (
            <Card key={show.id} className="bg-gray-900 border-gray-800 overflow-hidden">
              <div className="relative h-[200px]">
                <img src={show.image || "/placeholder.svg"} alt={show.title} className="w-full h-full object-cover" />
                <div className="absolute top-2 right-2 bg-black bg-opacity-70 px-2 py-1 rounded-md flex items-center">
                  <Star className="h-4 w-4 text-yellow-400 mr-1" />
                  <span className="text-sm">{show.rating}</span>
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="text-xl font-bold mb-2">{show.title}</h3>
                <p className="text-gray-400 text-sm line-clamp-3">{show.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  )
}
