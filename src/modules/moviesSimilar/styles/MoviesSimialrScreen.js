import React from 'react';
import { connect} from 'react-redux';
import {getMoviesSimilar, getMoviesSimilarFirst} from './actions';
import {LoadingScreen} from '../../commons';
import {MoviesSimilarList} from './components';


class MoviesSimialrScreen extends Component {
    state = {
        loading: false
    }

    async componentDidUpdate() {
        this.setState({
            loading: true
        });

        await this.props.getMoviesSimilarFirst(this.props.likedMovie[0].id);
        this.setState({loading: false});
    }

    render() {
        // logging the state for error messages
        console.log(this.state);

        if (this.state.loading) {
            return <LoadingScreen/>
        }
        return <MoviesSimilarList
            liked={this.props.likedMovie}
            movies={this.props.movieSimilar.movies}
            getMoviesSimilar={this.props.getMoviesSimilar}
        />;

    }
}

export default connect (
    state => ({
    likedMovie: state.likedMovie,
    movieSimialr: state.moviesSimilar
}),
    {getMoviesSimilar, getMoviesSimilarFirst}
)(MoviesSimialrScreen);