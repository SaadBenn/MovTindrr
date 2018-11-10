import React from 'react';
import {View, Text, StatusBar} from 'react-native';
import {connect} from 'react-redux';
import SwipeCards from 'react-native-swipe-cards';
import {ButtonsGroup, Card, NoMoreCard} from './components';
import {InfoModal} from '../infoModal';
import styles from './styles/SwiperEL';
import {addMovieToLikedList} from './actions';
import {openModalInfo, closeModalInfo} from '../ui';

class SwiperEL extends Component {
    state = {cardIndex: 0}

    _handleYeah = (movie) => {
        this.setState({cardIndex: this.state.cardIndex + 1});
        this.props.addMovieToLikedList({
            id: movie.id,
            title: movie.title,
            image: movie.poster_path
        });
    }

    _handleNo = () => {
        this.setState({cardIndex: this.state.cardIndex + 1 })
    }

    _clickLike = () => {
        this.setState({cardIndex: this.state.cardIndex + 1});
        this._swiper._goToNextCard();
        const movie = this.props.movies[this.state.cardIndex];
        this.props.addMovieToLikedList({
            id: movie.id,
            title: movie.title,
            image: movie.poster_path
        });
    }

    _clickDislike = () => {
        this.setState({cardIndex: this.state.cardIndex + 1});
        this._swiper._goToNextCard();
    }

    render() {
        const {movies, modalInfoShow, openModalInfo, closeModalInfo} = this.props;
        if (this.state.cardIndex > movies.length - 1) {
            return <NoMoreCard/>;
        }
        return (
            <View style={styles.root}>
                <StatusBar barStyle='light-content'/>
                <View style={styles.titleContainer}>
                    <Text style={styles.titleStyle}>{movies[this.state.cardIndex].title}</Text>
                </View>
                <SwipeCards
                    ref={ref => this._swiper = ref}
                    conatinerStyle={styles.swipeContainer}
                    cards={movies}
                    renderCard={data => <Card {...data}/>}
                    handleYeah={this._handleYeah}
                    handleNo={this._handleNo}
                    yeahStyle={styles.yeahAndNoStyle}
                    yeahTextStyle={styles.yeahTextStyle}
                    noStyle={styles.yeahAndNoStyle}
                    noTextStyle={styles.noTextStyle}
                    renderNoMoreCards={() => <NoMoreCard/>}
                    />
                <ButtonsGroup
                    info = {() => openModalInfo(movies[this.state.cardIndex])}
                    dislike={this._clickDislike}
                    like={this._clickLike}
                    />
                <InfoModal
                    closeModalInfo={closeModalInfo}
                    close={() => closeModalInfo()}
                    visible={modalInfoShow}
                    movie={this.props.modalInfoMovie}
                    />
            </View>
        );
    }
}

export default  connect(
    state => ({
    modalInfoShow: state.ui.modalInfoShow,
    modalInfoMovie: state.ui.modalInfoMovie
}),
    {openModalInfo, closeModalInfo, addMovieToLikedList}
)(SwiperEL);