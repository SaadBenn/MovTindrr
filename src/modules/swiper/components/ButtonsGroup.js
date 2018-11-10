import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {Ionicons, FontAwesome} from '@exponent/vector-icons';
import Colors from '../../../../constants/Colors';
import styles from './styles/ButtonsGroup';

const ButtonsGroup = ({like, dislike, info}) => (
    <View style={styles.root}>
        <TouchableOpacity onPress={dislike}>
            <View style={[styles.buttons, {borderColor: Colors.redColor}]}>
                <Ionicons name='info' size={50} color='#fff' />
            </View>
        </TouchableOpacity>
        <TouchableOpacity
            onPress={like}>
            <View style={[styles.buttons, {borderColor: Colors.blueColor}]}>
                <Ionicons name='ios-thumbs-down' size={50} color={Colors.blueColor} />
            </View>
        </TouchableOpacity>
    </View>
);

export default ButtonsGroup;