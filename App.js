import React, {Component} from 'react';
import {
    Platform,
    StyleSheet
} from 'react-native';
import { SongStack } from './src/config/router';

type Props = {};
export default class App extends Component<Props> {
    render() {
        return (
            <SongStack/>
        );
    }
}

const styles = StyleSheet.create({
});
