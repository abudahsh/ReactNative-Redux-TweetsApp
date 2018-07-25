import React from "react";
import { connect } from "react-redux";
import { Text, FlatList, View, Button } from "react-native";
import Row from "./../components/Row";
import { fetchTweets } from "./../redux/actions";
const renderItem = ({ item }) => <Row {...item} />;

class TweetFeedScreen extends React.Component {
  state = {
    tweets: []
  };

  _keyExtractor = (item, index) => item.id.toString();
  handlePress = () => {
    this.props.getTweets(this.props.token);
  };
  render() {
    return (
      <View>
        <Text>Tweets Feed</Text>
        <Text style={{ color: "red" }}>username : {this.props.username}</Text>
        <FlatList
          renderItem={renderItem}
          data={this.props.tweets}
          keyExtractor={this._keyExtractor}
        />
        <Button title="Load" onPress={this.handlePress} />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  username: state.userLogin.username,
  token: state.userLogin.token,
  tweets: state.tweetFetch.tweets
});

const mapDispatchToProps = dispatch => ({
  getTweets: token => dispatch(fetchTweets())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TweetFeedScreen);
