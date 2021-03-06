import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    ScrollView,
    ActivityIndicator
} from 'react-native';
import {List, ListItem} from 'react-native-elements'

type Props = {};
export default class Home extends Component<Props> {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
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
        this.props.navigation.navigate('SongDetail', { ...song });
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
            <ScrollView>
                <List>
                    {this.state.dataSource.map((song) => (
                        <ListItem
                            key={song.trackId}
                            roundAvatar
                            avatar={{ uri: song.artworkUrl100 }}
                            title={song.trackName}
                            subtitle={`${song.artistName} - ${song.collectionName}`}
                            onPress={() => this.onLearnMore(song)}
                        />
                    ))}
                </List>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
});
