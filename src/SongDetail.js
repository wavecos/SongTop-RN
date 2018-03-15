import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';
import {Button} from 'react-native-elements'

type Props = {};
export default class SongDetail extends Component<Props> {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount() {

    }

    render() {
        return (
            <View>
                <Text>
                    hello detail
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
