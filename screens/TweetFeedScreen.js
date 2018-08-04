import React from "react";
import { connect } from "react-redux";
import {
  Text,
  FlatList,
  View,
  Button,
  TouchableOpacity,
  Image
} from "react-native";
import Row from "./../components/Row";
import { fetchTweets } from "./../redux/actions";
import store from "./../redux/store";

class TweetFeedScreen extends React.Component {
  renderItem = ({ item }) => <Row {...item} />;

  static navigationOptions = ({ navigation }) => {
    return {
      title: "Tweet Feed",
      headerLeft: (
        <TouchableOpacity
          style={{ marginLeft: 15 }}
          onPress={() => navigation.openDrawer()}
        >
          <Image
            style={{ height: 45, width: 45, borderRadius: 8 }}
            source={{ uri: store.getState().userLogin.profilePic }}
          />
        </TouchableOpacity>
      ),
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

  render() {
    if (store.getState().userLogin.isLoading) {
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
      const { navigation } = this.props;
      return (
        <View>
          <FlatList
            renderItem={this.renderItem}
            data={this.props.tweets}
            keyExtractor={this._keyExtractor}
          />
        </View>
      );
    }
  }
}

const mapStateToProps = state => ({
  username: state.userLogin.username,
  token: state.userLogin.token,
  nickName: state.userLogin.nickName,
  profilePic: state.userLogin.profilePic,
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
