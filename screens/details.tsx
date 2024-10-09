import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import { DATA } from '../_mocks_/dataStructures'; // Adjust the path as necessary




const Details = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const { title } = route.params || Details; // Get title from parameters
  console.log('Title', title)
  let some = title?.toLowerCase();
  const content = DATA[some]; // Fetch content based on title

  // Set the title of the screen based on incoming title
  useEffect(() => {
    if (content) {
      navigation.setOptions({ title: title.charAt(0).toUpperCase() + title.slice(1) });
    }
  }, [title]);

  if (!content) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <Text style={styles.errorText}>Content not found</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="chevron-back" size={24} color="#007AFF" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>{title}</Text>
          <View style={{ width: 24 }} />
        </View>

        {/* Content */}
        <ScrollView style={styles.content}>
          {/* Dynamically render sections */}
          {content.map((section, index) => (
            <View key={index}>
              {/* Render section title based on type */}
              {(() => {
                if (section.type === 'heading') {
                  return <></>;
                } else if (section.type === 'subheading') {
                  return <Text style={styles.subheading}>{section.title}</Text>;
                } else if (section.type === 'subsubheading') {
                  return <Text style={styles.subsubheading}>{section.title}</Text>;
                } else {
                  return <Text style={styles.summaryTitle}>{section.title}</Text>

                }
              })()}


              {/* Render section text based on type */}
              {(() => {
                if (section.type === 'summary') {
                  return (
                    <View style={styles.summaryContainer}>
                      {section.text.map((point, idx) => (
                        <Text key={idx} style={styles.summaryText}>
                          {point}
                        </Text>
                      ))}
                    </View>
                  );
                } else {
                  return <Text style={styles.sectionText}>{section.text}</Text>;
                }
              })()}

              {/* Conditionally render image if present */}
              {section.image && (
                <View style={styles.imageContainer}>
                  <Image
                    source={{ uri: section.image }}
                    style={styles.image}
                    resizeMode="contain"
                  />
                  <Text style={styles.imageCaption}>Figure {index + 1}</Text>
                </View>
              )}
            </View>
          ))}
        </ScrollView>

        {/* Footer */}
        <View style={styles.footer}>
          <TouchableOpacity style={styles.footerTab}>
            <Text style={styles.tabText}>Brief</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerTab}>
            <Text style={styles.tabText}>Pseudo</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerTab} onPress={() => navigation.navigate('codescreen')}>
            <Text style={styles.tabText}>Javascript</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerFab}>
            <Icon name="add" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    // backgroundColor: '#F9F9F9',
    backgroundColor: 'white',

  },
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    backgroundColor: '#FFF',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  content: {
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 16,
  },
  subheading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subsubheading: {
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 8,
  },
  summaryContainer: {
    borderWidth: 1,           // Border width
    borderColor: '#ccc',      // Light gray border color
    borderRadius: 8,          // Rounded corners
    padding: 15,              // Padding inside the box
    backgroundColor: '#f9f9f9', // Light background color
    marginTop: 10,            // Margin above the summary box
    marginBottom: 30,
  },
  summaryTitle: {
    color: '#555',
    fontSize: 16,
    fontWeight: 'bold',       // Bold title for emphasis
  },
  summaryText: {
    color: '#555',             // Dark gray color for the text
    fontSize: 14,              // Font size for the summary text
    lineHeight: 20,            // Increase line height for better readability
  },
  sectionText: {
    fontSize: 14,
    lineHeight: 22,
    marginBottom: 10,
    color: '#333',
  },
  imageContainer: {
    alignItems: 'center',
    marginVertical: 12,
  },
  image: {
    width: '100%',
    height: 150,
    backgroundColor: '#EEE',
  },
  imageCaption: {
    fontSize: 12,
    color: '#777',
    marginTop: 4,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
    backgroundColor: '#FFF',
  },
  footerTab: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
  },
  tabText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#007AFF',
  },
  footerFab: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
});

export default Details;
