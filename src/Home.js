import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  TextInput,
  Button,
  ActivityIndicator
} from 'react-native';
import {List, ListItem} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

type Props = {};
export default class Home extends Component<Props> {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      search: "",
      dataSource: []
    }
  }

  componentDidMount() {
    return fetch('https://itunes.apple.com/search?term=radiohead&entity=song&limit=20')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson.results,
        }, function () {

        });

      })
      .catch((error) => {
        console.error(error);
      });
  }

  onLearnMore = (song) => {
    this.props.navigation.navigate('SongDetail', {...song});
  };

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return (
      <View style={styles.container}>
        <View style={styles.searchContainer}>
          <TextInput
            style={{width: 340, height: 40}}
            onChangeText={(text) => this.setState({text})}
            value={this.state.search}
          />
          <Button style={{width: 60}} title="Search" />
        </View>
        <ScrollView>
          <List>
            {this.state.dataSource.map((song) => (
              <ListItem
                key={song.trackId}
                roundAvatar
                avatar={{uri: song.artworkUrl100}}
                title={song.trackName}
                subtitle={`${song.artistName} - ${song.collectionName}`}
                onPress={() => this.onLearnMore(song)}
              />
            ))}
          </List>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  searchContainer: {
    flexDirection: 'row'
  }
});
