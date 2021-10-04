import React, { useEffect, useState } from "react";
import { View, TouchableOpacity } from "react-native";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createStackNavigator } from "react-navigation-stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setNavigator } from './src/navigationRef';
import { NavigationContainer, getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { navigate } from "./src/navigationRef";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from './src/reducers';
import ReduxThunk from 'redux-thunk';

import LoginScreen from "./src/screens/LoginScreen";
import OnBoardingScreen from "./src/screens/OnBoardingScreen";
import SignUpScreen from "./src/screens/SignUpScreen";

import Dashboard from "./src/screens/Dashboard";
import Pledges from "./src/screens/Pledges";
import Vouchers from "./src/screens/Vouchers";
import Profile from "./src/screens/Profile";
import Scan from "./src/screens/Scan";
import NotificationScreen from './src/screens/NotificationScreen';
import PledgeDetailScreen from "./src/screens/PledgeDetailScreen";
import ScratchCardHideScreen from "./src/screens/ScratchCardHideScreen";
import ScratchCardShowScreen from "./src/screens/ScratchCardShowScreen";
import HotDealSwiperComponent from "./src/components/HotDealSwiperComponent";
import VoucherCreate from "./src/components/VoucherCreate";
import VoucherDetailsScreen from "./src/screens/VoucherDetailsScreen";
import Blank from "./src/screens/Blank";
import ProfileEditScreen from "./src/screens/ProfileEditScreen";


function getHeaderTitle(route) {
  // If the focused route is not found, we need to assume it's the initial screen
  // This can happen during if there hasn't been any navigation inside the screen
  // In our case, it's "Dash" as that's the first screen inside the navigator
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Dash';

  switch (routeName) {
    case 'Dash':
      return 'DASHBOARD';
    case 'Pledge':
      return 'PLEDGES';
    case 'Vouch':
      return 'VOUCHERS';
    case 'Prof':
      return 'PROFILE'
  }
}

const Tab = createMaterialTopTabNavigator();

function TabScreen() {
  return (
    <Tab.Navigator
      initialRouteName="Dash"
      backBehavior='history'
      transitionStyle='curl'
      tabBarPosition='top'
    >
      <Tab.Screen name="Dash" component={Dashboard}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <MaterialCommunityIcons name="home-variant" size={28} color="#6299EC" />
            ) : (
              <MaterialCommunityIcons name="home-variant" size={28} color="#929292" />
            ),
        }}
      />
      <Tab.Screen name="Pledge" component={Pledges}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Ionicons name="gift" size={28} color="#6299EC" />
            ) : (
              <Ionicons name="gift" size={28} color="#929292" />
            ),
        }}
      />
      <Tab.Screen name="Vouch" component={Vouchers}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Ionicons name="ios-ribbon" size={28} color="#6299EC" />
            ) : (
              <Ionicons name="ios-ribbon" size={28} color="#929292" />
            ),
        }}
      />
      <Tab.Screen name="ProfTab" component={Blank}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Ionicons name="person" size={28} color="#6299EC" />
            ) : (
              <Ionicons name="person" size={28} color="#929292" />
            ),
        }}
      />
    </Tab.Navigator>
  )
}

const Stack = createNativeStackNavigator();

function NavStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={TabScreen}
          options={({ route }) => ({
            headerTitle: getHeaderTitle(route),
            headerRight: () => (
              <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity style={{ marginRight: 15 }} onPress={() => navigate('Scanner')} >
                  <MaterialIcons name="qr-code-scanner" size={32} color="#6299EC" />
                </TouchableOpacity>
                <TouchableOpacity style={{ marginRight: 10 }} onPress={() => navigate('Notify')} >
                  <Ionicons name="notifications" size={32} color="#6299EC" />
                </TouchableOpacity>
              </View>
            ),
            headerShadowVisible: false
          })}
        />
        <Stack.Screen
          name="PledgeDetail"
          component={PledgeDetailScreen}
          options={() => ({
            headerTintColor: '#fff',
            headerShadowVisible: false,
            headerTitle: 'PLEDGE DETAILS',
            headerTransparent: true
          })}
        />
        <Stack.Screen
          name="ScratchCardHide"
          component={ScratchCardHideScreen}
        />
        <Stack.Screen
          name="ScratchCardShow"
          component={ScratchCardShowScreen}
        />
        <Stack.Screen
          name="HotDealSwipe"
          component={HotDealSwiperComponent}
        />
        <Stack.Screen
          name="VoucherDetail"
          component={VoucherDetailsScreen}
          options={() => ({
            headerShadowVisible: false,
            headerTitle: 'VOUCHER DETAILS',
            headerTransparent: true
          })}
        />
        <Stack.Screen
          name="Prof"
          component={Profile}
          options={() => ({
            headerTintColor: '#fff',
            headerTitle: 'PROFILE',
            headerShadowVisible: false,
            headerTransparent: true,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const switchNavigator = createSwitchNavigator({
  loginFlow: createStackNavigator({
    Login: LoginScreen,
    SignUp: SignUpScreen
  }),
  mainFlow: createStackNavigator({
    Tabs: {
      screen: NavStack,
      navigationOptions: {
        headerShown: false
      }
    },
    Notify: {
      screen: NotificationScreen,
      navigationOptions: {
        headerTransparent: true,
        headerTitle: 'NOTIFICATIONS',
        headerShadowVisible: false
      }
    },
    Scanner: {
      screen: Scan,
      navigationOptions: {
        headerTransparent: true,
        headerTitle: 'SCAN',
        headerShadowVisible: false
      }
    },
    VouchCre: {
      screen: VoucherCreate
    },
    OnBoard: {
      screen: OnBoardingScreen,
      navigationOptions: {
        headerShown: false
      }
    },
    ProfileEdit: {
      screen: ProfileEditScreen,
      navigationOptions: {
        headerTransparent: true,
        headerTitle: 'EDIT PROFILE',
        headerShadowVisible: false
      }
    }
  })
});

const App = createAppContainer(switchNavigator);

export default () => {

  const [isFirstLaunch, setIsFirstLaunch] = useState(null);

  useEffect(() => {
    AsyncStorage.getItem("alreadyLaunched").then(value => {
      if (value == null) {
        AsyncStorage.setItem("alreadyLaunched", "true"); // No need to wait for `setItem` to finish, although you might want to handle errors
        setIsFirstLaunch({ isFirstLaunch: true });
      }
      else {
        setIsFirstLaunch({ isFirstLaunch: false });
      }
    })
  }, []);

  if (isFirstLaunch === null) {
    return null; // This is the 'tricky' part: The query to AsyncStorage is not finished, but we have to present something to the user. Null will just render nothing, so you can also put a placeholder of some sort, but effectively the interval between the first mount and AsyncStorage retrieving your data won't be noticeable to the user.
  } else if (isFirstLaunch == true) {
    return <OnBoard />
  } else {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <App
          ref={(navigator) => {
            setNavigator(navigator);
          }}
        />
      </Provider>
    );
  };
};