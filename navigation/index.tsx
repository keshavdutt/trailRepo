// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// import { BackButton } from '../components/BackButton';
// import Details from '../screens/details';
// import DataStructuresScreen from '../screens/overview';
// import CodeScreen from '../screens/codescreen';
// import RecentScreen from 'screens/RecentScreen';
// import { Text } from 'react-native';

// // Define your tab navigator
// const Tab = createBottomTabNavigator();
// const Stack = createStackNavigator<RootStackParamList>();


// const DiscussScreen = () => {
//   return (
//     <Text>Discuss Screen</Text>
//   )
// }

// // Create a Tab Navigator
// const TabNavigator = () => {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="RapidDSA" component={DataStructuresScreen} />
//       <Tab.Screen name="Recent" component={RecentScreen} />
//       <Tab.Screen name="Discuss" component={DiscussScreen} />

//     </Tab.Navigator>
//   );
// };

// // Main Stack Navigator
// export default function RootStack() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="TabNavigator" >
//         <Stack.Screen name="TabNavigator" component={TabNavigator} options={{ headerShown: false }} />
//         <Stack.Screen 
//           name="Details" 
//           component={Details} 
//           options={{ headerShown: false }} 
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }




import React, { useEffect, useRef } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Animated, SafeAreaView, Text, TouchableOpacity, StyleSheet, View } from 'react-native';

import { BackButton } from '../components/BackButton';
import Details from '../screens/details';
import DataStructuresScreen from '../screens/overview';
import CodeScreen from '../screens/codescreen';
import ProfileScreen from 'screens/profileScreen';
import RecentScreen from '../screens/RecentScreen';
import Icon, { Icons } from '../components/icons';
import Colors from 'constants/Colors';
import DiscussionScreen from 'screens/DiscussionScreen';
import ProblemListScreen from 'screens/ProblemListScreen';


// Define the Tab and Stack navigators
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Tab configuration
const TabArr = [
  {
    route: 'Home',
    label: 'Home',
    type: Icons.Ionicons,
    activeIcon: 'grid',
    inActiveIcon: 'grid-outline',
    component: DataStructuresScreen,
  },
  {
    route: 'Discussion',
    label: 'Discussion',
    type: Icons.MaterialCommunityIcons,
    activeIcon: 'book-plus',
    inActiveIcon: 'book-plus-outline',
    component: DiscussionScreen,
  },
  {
    route: 'Practice',
    label: 'Practice',
    type: Icons.MaterialCommunityIcons,
    activeIcon: 'timeline-plus',
    inActiveIcon: 'timeline-plus-outline',
    component: ProblemListScreen,
  },
  {
    route: 'Profile',
    label: 'Profile',
    type: Icons.FontAwesome,
    activeIcon: 'user-circle', 
    inActiveIcon: 'user-circle-o',
    component: ProfileScreen,
  },
];

// Tab button component
// const TabButton = ({ item, onPress, accessibilityState }) => {
//   const focused = accessibilityState.selected;
//   const scaleValue = useRef(new Animated.Value(1)).current;

//   useEffect(() => {
//     Animated.spring(scaleValue, {
//       toValue: focused ? 1.5 : 1,
//       friction: 5,
//       useNativeDriver: true,
//     }).start();
//   }, [focused]);

//   return (
//     <TouchableOpacity onPress={onPress} activeOpacity={1} style={styles.tabButtonContainer}>
//       <Animated.View style={{ transform: [{ scale: scaleValue }] }}>
//         <Icon
//           type={item.type}
//           name={focused ? item.activeIcon : item.inActiveIcon}
//           color={focused ? Colors.primary : Colors.primaryLite}
//         />
//       </Animated.View>
//     </TouchableOpacity>
//   );
// };


const TabButton = ({ item, onPress, accessibilityState }) => {
  const focused = accessibilityState.selected;
  const scaleValue = useRef(new Animated.Value(1)).current;

  // useEffect(() => {
  //   Animated.spring(scaleValue, {
  //     toValue: focused ? 1.5 : 1,
  //     friction: 5,
  //     useNativeDriver: true,
  //   }).start();
  // }, [focused]);

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={1} style={styles.tabButtonContainer}>
      <Animated.View style={{ transform: [{ scale: scaleValue }], alignItems: 'center' }}>
        {/* Icon */}
        <Icon
          type={item.type}
          name={focused ? item.activeIcon : item.inActiveIcon}
          color={focused ? Colors.primary : Colors.primaryLite}
          size={24}  // Adjust icon size as necessary
        />
        {/* Label */}
        <Text style={[styles.tabLabel, { color: focused ? Colors.primary : Colors.primaryLite }]}>
          {item.label}
        </Text>
      </Animated.View>
    </TouchableOpacity>
  );
};


// Create a Tab Navigator
const TabNavigator = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: styles.tabBarStyle,
        }}
      >
        {TabArr.map((item, index) => (
          <Tab.Screen
            key={index}
            name={item.route}
            component={item.component}
            options={{
              tabBarShowLabel: true,
              tabBarButton: (props) => <TabButton {...props} item={item} />,
              headerShown: true,
              header: () => {
                return (
                  <View style={styles.headerContainer}>
                    <Text style={styles.headerText}>Rapid DSA</Text>
                  </View>
                )
              },
            }}
          />
        ))}
      </Tab.Navigator>
    </SafeAreaView>
  );
};

// Main Stack Navigator
export default function RootStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TabNavigator">
        <Stack.Screen name="TabNavigator" component={TabNavigator} options={{ headerShown: false }} />
        <Stack.Screen name="Details" component={Details} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// Styles
const styles = StyleSheet.create({
  // safeArea: {
  //   flex: 1,
  //   backgroundColor: 'white',
  // },
  // tabBarStyle: {
  //   height: 60,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },
  // tabButtonContainer: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   height: 60,
  // },
  // headerContainer: {
  //   height: 60, // Set a fixed height for the header
  //   justifyContent: 'center', // Center vertically
  //   alignItems: 'center', // Center horizontally
  //   backgroundColor: 'white', // Background color for the header
  //   elevation: 2, // Optional: add shadow effect on Android
  //   // shadowColor: 'rgba(0, 0, 0, 0.2)', // Optional: add shadow effect on iOS
  //   // shadowOffset: { width: 0, height: 2 }, // Optional: shadow offset
  //   shadowOpacity: 0.8, // Optional: shadow opacity
  //   shadowRadius: 2, // Optional: shadow radius
  // },
  // headerText: {
  //   fontSize: 20, // Adjust as needed
  //   fontWeight: 'bold',
  //   color: '#333', // Change text color
  // },

  safeArea: {
    flex: 1,
    backgroundColor: 'white',
  },
  tabBarStyle: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabButtonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
  },
  tabLabel: {
    fontSize: 12,  // Adjust size as needed
    marginTop: 4,  // Space between icon and label
    fontWeight: '500',  // You can adjust the font weight
  },
  headerContainer: {
    height: 60, 
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    elevation: 2,
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
});
