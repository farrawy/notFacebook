import FeedScreen from "../screens/Feed/FeedScreen";
import CreatePostScreen from "../screens/CreatePostScreen";
import ProfileScreen from "../screens/ProfileScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  TransitionPresets,
  createStackNavigator,
} from "@react-navigation/stack";
import { AppNavigator } from "./bottomTabNavigator";

const Stack = createStackNavigator();

const FeedNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Feed"
      screenOptions={{
        ...TransitionPresets.ModalSlideFromBottomIOS,
        headerShown: false,
      }}
    >
      <Stack.Screen name="Feed" component={FeedScreen} />
      <Stack.Screen name="Create Post" component={CreatePostScreen} />
    </Stack.Navigator>
  );
};

export default FeedNavigator;
