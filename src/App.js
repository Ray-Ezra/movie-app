import { useEffect, useState } from 'react';
import './App.css'
import MovieCard from './MovieCard';
import searchIcon from './search.svg'
//  b99969c

const API_URL = 'https://www.omdbapi.com?apikey=b99969c'

const App = () => {
    const [ movies, setMovies ] = useState([]);
const [searchTerm, setSearchTerm] = useState('')

    const searchMovies = async (tittle) => {
        const response = await fetch(`${API_URL}&s=${tittle}`)
        const data = await response.json();

        setMovies(data.Search)
    }
    useEffect(() => {
        searchMovies('batman')
    }, []);

    return(
    <div className='app'>
        <h1>REEZY CHILL</h1>        
        <div className='search'>
            <input 
            placeholder='Search for movies'
            value= {searchTerm}
            onChange={(e) => setSearchTerm(e.target.value) }
            />
        <img 
           src={searchIcon}
           alt='search'
           onClick={() => searchMovies(searchTerm)}
        />
     </div>
     {
        movies?.length > 0
        ?(
        <div className='container'>
        {movies.map((movie) => (
            <MovieCard movie={movie}/>
        ))}
        </div>
        ): (
            <div className='empty'>
            <h2>No Movies Found</h2>    
            </div>
                
        )

     }
     </div> 
   
    )
}

export default App;