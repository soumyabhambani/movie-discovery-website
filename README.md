# Movie Discovery Website

A modern, responsive web application built with React and Vite that allows users to discover and explore movies. The application integrates with The Movie Database (TMDB) API to provide real-time movie information.

## Features

- 🎬 Browse popular movies
- 🔍 Search functionality to find specific movies
- ❤️ Add movies to favorites
- 📱 Responsive design for all devices
- 🎨 Modern and clean user interface

## Tech Stack

- React 19
- Vite 6
- React Router for navigation
- Context API for state management
- TMDB API for movie data
- Modern CSS styling

## Project Structure

- Clean component architecture
- Separate pages for Home and Favorites
- Reusable components
- Context-based state management
- Environment variable configuration for API keys

## Getting Started

1. Clone the repository
```bash
git clone https://github.com/soumyabhambani/movie-discovery-website.git
```

2. Install dependencies
```bash
npm install
```

3. Create a `.env` file in the root directory with your TMDB API key:
```
VITE_MOVIE_API_KEY=your_tmdb_api_key
```

4. Run the development server
```bash
npm run dev
```

## Deployment

This project is deployed on Netlify. To deploy your own version:

1. Fork this repository
2. Create a new site on Netlify
3. Connect your GitHub repository
4. Add your environment variables in Netlify's dashboard
5. Deploy!

## Environment Variables

The following environment variables are required:

- `VITE_MOVIE_API_KEY`: Your TMDB API key

## Contributing

Feel free to submit issues and enhancement requests!

## License

This project is open source and available under the MIT License.
