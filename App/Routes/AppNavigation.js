import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { StatusBar } from "expo-status-bar";

// Screens
import HomeScreen from "../Screens/HomeScreen";
import OnboardingScreen from "../Screens/OnboardingScreen";
import Login from "../Screens/Login";
import Register from "../Screens/Register";
import VideosScreen from "../Screens/Videos";
import TestReadyScreen from "../Screens/TestReady";
import RoadSignsScreen from "../Screens/RoadSigns";
import SettingsScreen from "../Screens/Settings";
import MapScreen from "../Screens/Maps";
import TestRoutes from "../Screens/TestRoutes";

// Stack Navigator
const Stack = createStackNavigator();

// Bottom Tab Navigator
const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = "home";
          } else if (route.name === "Videos") {
            iconName = "youtube-play";
          } else if (route.name === "TestReady") {
            iconName = "check-circle-o";
          } else if (route.name === "Road Signs") {
            iconName = "map-signs";
          } else if (route.name === "Settings") {
            iconName = "cogs";
          }

          return <FontAwesome name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#8E97FD",
        tabBarInactiveTintColor: "#A0A3B1",
        tabBarStyle: { backgroundColor: "#fff" },
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Videos" component={VideosScreen} />
      <Tab.Screen name="TestReady" component={TestReadyScreen} />
      <Tab.Screen
        name="Road Signs"
        component={RoadSignsScreen}
        // options={{ title: "Traffic Signs", headerShown: true }}
      />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <StatusBar />
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen
          name="Onboarding"
          component={OnboardingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HomeScreen"
          component={BottomTabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MapScreen"
          component={MapScreen}
          options={{
            headerShown: true,
            title: "Car Test Route 01",
            headerBackTitle: false,
          }}
        />
        <Stack.Screen
          name="TestRoutes"
          component={TestRoutes}
          options={{
            headerShown: true,
            title: "Aberdeen North",
            headerBackTitle: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
