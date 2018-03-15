import React from 'react';
import { StackNavigator } from 'react-navigation';

import Home from '../Home';
import SongDetail from "../SongDetail";

export const SongStack = StackNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            title: "Songs"
        }
    },
    SongDetail: {
        screen: SongDetail,
        navigationOptions: {
            title: "Detail"
        }
    }
});
