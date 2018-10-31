import {combineReducers} from 'redux';
import {HomeReducer, InfoReducer, UIReducer, LikedMovieReducer, SimilarMoviesReducer} from '../modules';

export default combineReducers({
    home: HomeReducer,
    infoModal: InfoReducer,
    likedMovie: LikedMovieReducer,
    similarMovie: SimilarMoviesReducer,
    ui: UIReducer
});