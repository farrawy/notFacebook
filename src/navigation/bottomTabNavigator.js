import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import FeedScreen from "../screens/Feed/FeedScreen";
import ProfileScreen from "../screens/ProfileScreen";
import FeedNavigator from "./FeedNavigator";
import { colors } from "../../constants/colors";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Feed: "home",
  Profile: "user-circle-o",
};

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <FontAwesome name={iconName} size={size} color={color} />
    ),
  };
};

export const AppNavigator = () => (
  <Tab.Navigator screenOptions={createScreenOptions}>
    <Tab.Screen name="Feed" component={FeedNavigator} />
    <Tab.Screen name="Profile" component={ProfileScreen} />
  </Tab.Navigator>
);
