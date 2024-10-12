import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Import Material Icons or any other icon set you prefer

const profileOptions = [
  // { id: '1', title: 'Edit Profile', icon: 'edit' },
  { id: '2', title: 'Bookmarks', icon: 'bookmark' },
  { id: '3', title: 'Request a Feature', icon: 'help-outline' },
  { id: '4', title: 'About Us', icon: 'info' },
  // { id: '5', title: 'Log Out', icon: 'logout' },
];

export default function ProfileScreen() {
  const handleOptionPress = (option) => {
    console.log(`${option} pressed!`);
    // Navigate to the respective screen or perform the respective action here
  };

  return (
    <View style={styles.container}>
      {/* Profile Information */}
      <View style={styles.profileContainer}>
        <Image
          source={{ uri: 'https://via.placeholder.com/100' }} // Placeholder image
          style={styles.profileImage}
        />
        <Text style={styles.userName}>Keshav Dutt Tripathi</Text>
        <Text style={styles.userEmail}>Senior Software Engineer - Flipkart</Text>
      </View>

      {/* Profile Options */}
      <FlatList
        data={profileOptions}
        keyExtractor={(item) => item.id}
        scrollEnabled={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.optionButton}
            onPress={() => handleOptionPress(item.title)}
          >
            <Icon name={item.icon} size={24} color="#FF4081" style={styles.icon} />
            <Text style={styles.optionButtonText}>{item.title}</Text>
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.optionsContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
    padding: 20,
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: '#FF4081',
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  userEmail: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  optionsContainer: {
    flexGrow: 1,
    justifyContent: 'flex-start',
  },
  optionButton: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    marginVertical: 6,
    flexDirection: 'row', // Align icon and text in a row
    alignItems: 'center',  // Center items vertically
  },
  icon: {
    marginRight: 10, // Space between icon and text
  },
  optionButtonText: {
    fontSize: 16,
    color: '#333',
  },
});
