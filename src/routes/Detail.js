import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Movie from "../components/Movie";

function Detail(){
    const {id} = useParams();
    const [movie,setMovie] = useState();
    const [loading,setLoading] = useState(true);
    const getMovie = async() => {
        const json = await(
            await fetch(
               `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
        )).json();
        console.log(json);
        setMovie(json.data.movie);
        setLoading(false);
    };
    useEffect(() => {
        getMovie();
    },[]);
    console.log(movie);
    return (
        <div>
            <h1>Detail</h1>
            {
            loading ? 
            <h1>Loading...</h1>
            :
            (<div>
                <Movie 
                    id={movie.id}
                    coverImg={movie.medium_cover_image}
                    title = {movie.title}
                    summary={movie.summary}
                    genres={movie.genres}
                />
            </div>)
            }
        </div>
    ); 
}

export default Detail;

/* 
    [마지막 단계 : 코드 챌린지]
    - Home에서 해줬던 loading을 Detail에 해주기
    - movie가 State에 없음. 현재 API에서 json을 받아와서 아무것도 안 하고 있는 상태.
    -> 힌트: json을 state에 넣어보기
 */