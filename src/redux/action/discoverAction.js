import axios from "axios";
import {LIST_DISCOVER} from "../types/types";

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZjBhZTkzZmRhNWJlMWQwNDlkODZmYmE3MzIzZTIyNCIsInN1YiI6IjY0ZTZlZjVmZTg5NGE2MDBlNGU1OTk4NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eThVDIYIb3Rxt4EFmv0CHbSk3DU0bTd0x1wkcEhcmtk'
    }
};

// export const listDiscover = (discover) => {
//     return (dispatch) => {
//         axios(`https://api.themoviedb.org/3/discover/movie?language=ru-RU&with_genres=${discover.genre['id']}&primary_release_year=${discover.year}&vote_average.gte=${discover.rating}`, options)
//             .then(({data}) => {
//                 dispatch({type:LIST_DISCOVER, payload: data.result})
//             })
//     }
// }

export const listDiscover = (discover) => {

    // console.log(discover.genre['id'], 'discover.genre.id')
    // console.log(discover.year, 'discover.year')
    // console.log(discover.rating, 'discover.rating')
    return (dispatch) => {
        axios(`https://api.themoviedb.org/3/discover/movie?language=ru-RU&with_genres=${discover.genre['id']}&primary_release_year=${typeof discover.year === "number" ? discover.year : ''}&vote_average.gte=${typeof discover.rating === "number" ? discover.rating : ''}`, options)
            .then(({data}) => {
                // console.log(data)
                dispatch({type:LIST_DISCOVER, payload: data.result})
            })
    }
}