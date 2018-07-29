import React from "react";
import { connect } from "react-redux";
import { Text, FlatList, View, Button, TouchableOpacity } from "react-native";
import Row from "./../components/Row";
import { fetchTweets } from "./../redux/actions";

class TweetFeedScreen extends React.Component {
  renderItem = ({ item }) => <Row {...item} />;

  static navigationOptions = ({ navigation }) => {
    return {
      title: "Tweet Feed",
      headerLeft: <Text>{navigation.getParam("creator", "username")}</Text>,
      headerStyle: {
        backgroundColor: "white"
      },
      headerTintColor: "black",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    };
  };

  state = {
    tweets: []
  };

  _keyExtractor = (item, index) => item.id.toString();
  componentDidMount() {
    this.props.getTweets(this.props.token);
  }
  handlePress = () => {
    this.props.getTweets(this.props.token);
  };
  render() {
    if (this.props.isLoading) {
      return (
        <View>
          <Text
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            Loading......
          </Text>
        </View>
      );
    } else {
      return (
        <View>
          <FlatList
            renderItem={this.renderItem}
            data={this.props.tweets}
            keyExtractor={this._keyExtractor}
          />
          <Button title="Load" onPress={this.handlePress} />
        </View>
      );
    }
  }
}

const mapStateToProps = state => ({
  username: state.userLogin.username,
  token: state.userLogin.token,
  tweets: state.tweetFetch.tweets,
  isLoading: state.tweetFetch.isLoading
});

const mapDispatchToProps = dispatch => ({
  getTweets: token => dispatch(fetchTweets())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TweetFeedScreen);
