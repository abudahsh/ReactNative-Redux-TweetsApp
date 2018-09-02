import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Provider } from "react-redux";
import {
  createSwitchNavigator,
  createStackNavigator,
  createDrawerNavigator,
  createBottomTabNavigator,
  DrawerItems
} from "react-navigation";
import store from "./redux/store";
import LoginScreen from "./screens/LoginScreen";
import TweetFeedScreen from "./screens/TweetFeedScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import RegisterScreen from "./screens/RegisterScreen";
import TweetDetailScreen from "./screens/TweetDetailScreen";
import ProfileScreen from "./screens/ProfileScreen";
import LogoutScreen from "./screens/LogoutScreen";
import NotificationsScreen from "./screens/NotificationsScreen";
import SearchScreen from "./screens/Searchscreen";
import MessagesScreen from "./screens/MessagesScreen";

const CustomDrawerComp = props => (
  <View style={{ flex: 1, paddingLeft: 20 }}>
    <View
      style={{
        height: 200,
        borderColor: "#7c8390",
        justifyContent: "center",
        borderBottomWidth: StyleSheet.hairlineWidth
      }}
    >
      <Image
        style={{ height: 100, width: 90, borderRadius: 35 }}
        source={{ uri: store.getState().userLogin.profilePic }}
      />
      <Text
        style={{
          fontWeight: "bold",
          paddingBottom: 6,
          fontSize: 16,
          paddingTop: 6
        }}
      >
        {store.getState().userLogin.nickName}
      </Text>
      <Text style={{ color: "#7c8390", fontSize: 16 }}>
        {"@" + store.getState().userLogin.username}
      </Text>
    </View>
    <DrawerItems {...props} />
  </View>
);

const TweetsNavigator = createStackNavigator(
  {
    TweetFeed: TweetFeedScreen,
    TweetDetail: TweetDetailScreen
  },
  {
    initialRouteName: "TweetFeed"
  }
);
const TabNav = createBottomTabNavigator({
  Home: {
    screen: TweetsNavigator,
    navigationOptions: {
      tabBarIcon: (
        <Image
          style={{ width: 25, height: 25 }}
          source={require("./assets/home.png")}
        />
      )
    }
  },
  Search: {
    screen: SearchScreen,
    navigationOptions: {
      tabBarIcon: (
        <Image
          style={{ width: 25, height: 25 }}
          source={require("./assets/search.png")}
        />
      )
    }
  },
  Notifications: {
    screen: NotificationsScreen,
    navigationOptions: {
      tabBarIcon: (
        <Image
          style={{ width: 25, height: 25 }}
          source={require("./assets/notification.png")}
        />
      )
    }
  },
  Messages: {
    screen: MessagesScreen,
    navigationOptions: {
      tabBarIcon: (
        <Image
          style={{ width: 25, height: 25 }}
          source={require("./assets/mail.png")}
        />
      )
    }
  }
});
const DrawerNav = createDrawerNavigator(
  {
    Profile: { screen: ProfileScreen },
    Logout: { screen: LogoutScreen },
    Tabs: {
      screen: TabNav,
      navigationOptions: {
        drawerLabel: () => null
      }
    }
  },
  {
    contentComponent: CustomDrawerComp
  },
  {
    headerMode: "float",
    navigationOptions: ({ navigation }) => ({
      headerStyle: { backgroundColor: "#4C3E54" },
      title: "Welcome!",
      headerTintColor: "white"
    })
  }
);
const AppNavigator = createSwitchNavigator(
  {
    Welcome: WelcomeScreen,
    Login: LoginScreen,
    Register: RegisterScreen,
    Drawer: DrawerNav
  },
  {
    initialRouteName: "Welcome"
  }
);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}
