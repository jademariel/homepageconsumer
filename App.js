import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import ProfileScreen from "./screens/ProfileScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            let iconSource;

            if (route.name === "Home") {
              iconSource = focused
                ? require("./assets/images/home.png")
                : require("./assets/images/home1.png");
            } else if (route.name === "Product") {
              iconSource = focused
                ? require("./assets/images/product.png")
                : require("./assets/images/product1.png");
            } else if (route.name === "Profile") {
              iconSource = focused
                ? require("./assets/images/profile.png")
                : require("./assets/images/profile1.png");
            }

            return (
              <Image
                source={iconSource}
                style={{
                  width: focused ? 30 : 25, // Larger size when focused
                  height: focused ? 30 : 25, // Larger size when focused
                  tintColor: focused ? "#34A853" : "#666", // Optional color adjustment
                }}
              />
            );
          },
          tabBarActiveTintColor: "#34A853", // Active icon color
          tabBarInactiveTintColor: "#666", // Inactive icon color
          tabBarStyle: {
            backgroundColor: "#fff", // Background color of the footer
            height: 55, // Increase the height of the footer
          },
          tabBarLabelStyle: {
            fontSize: 12, // Adjust the font size of the labels
          },
        })}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Tab.Screen name="Product" component={ProductScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
