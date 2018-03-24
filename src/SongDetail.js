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
    this.state = {}
  }

  componentDidMount() {

  }

  render() {
    const song = this.props.navigation.state.params;

    return (
      <View>
        <Text>
          hello detail {song.trackName}
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
