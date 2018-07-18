import React from "react";
import { connect } from "react-redux";
import { Text, FlatList, View, Button } from "react-native";
import Row from "./../components/Row";

const renderItem = ({ item }) => <Row {...item} />;

class TweetFeedScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: []
    };
    this.getTweets = this.getTweets.bind(this);
  }
  _keyExtractor = (item, index) => item.id;

  getTweets = async () => {
    const token = await this.props.token;
    console.log("started...");
    const headers = {
      "Content-Type": "application/json"
    };

    if (token) {
      headers.Authorization = `Token ${token}`;
      console.log(token);
    }
    const response = await fetch("http://10.0.3.2:8000/test/tweets/", {
      headers
    });
    console.log("sent reuqest");
    const results = await response.json();
    console.log(results);
    this.setState({ tweets: results });
  };

  render() {
    return (
      <View>
        <Text>Tweets Feed</Text>
        <Text style={{ color: "red" }}>username : {this.props.username}</Text>
        <FlatList
          renderItem={renderItem}
          data={this.state.tweets}
          keyExtractor={this._keyExtractor}
        />
        <Button title="Load" onPress={this.getTweets} />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  token: state.userReducer.token
});

export default connect(mapStateToProps)(TweetFeedScreen);
