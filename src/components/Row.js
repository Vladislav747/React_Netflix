import axios from '../axios';
import React, {useState, useEffect} from 'react';

function Row ({title, fetchUrl}){
    const [movies, setMovies] = useState([]);

    //run once when the row loads, and don't run again
    useEffect(() => {
       async function  fetchData() {
           const request = await axios.get(fetchUrl);
           setMovies(request.data.results);
           return request;
       }
       fetchData();
    }, [fetchUrl]);

    console.log(movies, "movies");
    return(
    <div className="row">
        <h2>{title}</h2>
        <div class="row__posters">
            {movies}
        </div>
    </div>
    )
}


export default Row;