import React, {Component} from 'react';
import {View, Text, Animated, TouchableWithoutFeedback} from 'react-native';
import {Ionicons} from '@exponent/vector-icons';
import styles from './styles/Panel';


class Panel extends Component {
    state = {
        expanded: false,
        flexAnim: new Animated.Value(1)
    }

    _icons = {
        up: 'ios-arrow-up',
        down: 'ios-arrow-down'
    }

    _toggle = () => {
        const initialValue = this.state.expanded ? 3 : 1;
        const finalValue = this.state.expanded ? 1: 3;

        this.setState({
            expanded: !this.state.expanded
        });

        this.state.flexAnim.setValue(initialValue);

        Animated.spring(
            this.state.flexAnim,
            {
                toValue: finalValue
            }
        ).start();
    }

}