import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import Sound from 'react-native-sound';
import { Button, Card, Icon } from 'react-native-elements';

type Props = {};
export default class SongDetail extends Component<Props> {

  constructor(props) {
    super(props);
    this.state = {
      song: {}
    }

    this.state.song = this.props.navigation.state.params;
  }

  componentDidMount() {

  }

  playTrack = () => {
    const track = new Sound(this.state.song.previewUrl, null, (e) => {
      if (e) {
        console.log('error loading track:', e)
      } else {
        track.play()
      }
    })
  }

  render() {
    return (
      <View>
        <Card
          title={this.state.song.artistName}
          image={{uri: this.state.song.artworkUrl100}} >
          <Text style={{marginBottom: 10}}>
            {this.state.song.trackName}
          </Text>
          <Icon
            raised
            name='play'
            type='font-awesome'
            color='#5BC546'
            onPress={() => this.playTrack()} />
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
