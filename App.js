import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./screens/HomeScreen"; // Home screen
import ProductScreen from "./screens/ProductScreen"; // Product screen
import ProfileScreen from "./screens/ProfileScreen"; // Profile screen
import Icon from "react-native-vector-icons/FontAwesome"; // FontAwesome for icons

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = "home";
            } else if (route.name === "Product") {
              iconName = "shopping-cart";
            } else if (route.name === "Profile") {
              iconName = "user";
            }

            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "#34A853", // Green for active tab
          tabBarInactiveTintColor: "#666", // Gray for inactive tabs
          tabBarStyle: { backgroundColor: "#f4f4f4", height: 60 },
        })}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }} // This hides the header
        />
        <Tab.Screen name="Product" component={ProductScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

