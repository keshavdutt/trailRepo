
import React, { useEffect, useRef, useState } from 'react';
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity, SafeAreaView, Dimensions } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import { DATA } from '../_mocks_/dataStructures'; // Adjust the path as necessary

const { width } = Dimensions.get('window');

const Details = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const scrollViewRef = useRef(null); // Ref for ScrollView

  const { title } = route.params || Details; // Get title from parameters
  let some = title?.toLowerCase();
  const content = DATA[some]; // Fetch content based on title

  const [selectedTab, setSelectedTab] = useState(0); // Track the selected tab

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

  const briefContent = (
    <ScrollView contentContainerStyle={styles.contentContainer} showsVerticalScrollIndicator={false}>
      {content.map((section, index) => (
        <View key={index} style={{marginTop: 0 }}>
          {section.type === 'heading' ? null : section.type === 'subheading' ? (
            <Text style={styles.subheading}>{section.title}</Text>
          ) : section.type === 'subsubheading' ? (
            <Text style={styles.subsubheading}>{section.title}</Text>
          ) : (
            <Text style={styles.summaryTitle}>{section.title}</Text>
          )}

          {section.type === 'summary' ? (
            <View style={styles.summaryContainer}>
              {section.text.map((point, idx) => (
                <Text key={idx} style={styles.summaryText}>
                  {point}
                </Text>
              ))}
            </View>
          ) : (
            <Text style={styles.sectionText}>{section.text}</Text>
          )}

          {section.image && (
            <View style={styles.imageContainer}>
              <Image source={{ uri: section.image }} style={styles.image} resizeMode="contain" />
              <Text style={styles.imageCaption}>Figure {index + 1}</Text>
            </View>
          )}
        </View>
      ))}
    </ScrollView>
  );

  const pseudoContent = (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      <Text style={styles.subheading}>Pseudo Code Example</Text>
      <Text style={styles.sectionText}>
        {'function examplePseudoCode() {\n' +
          '   // Step 1: Initialize variables\n' +
          '   let a = 0;\n' +
          '   let b = 1;\n' +
          '   // Step 2: Start loop\n' +
          '   for (let i = 0; i < 10; i++) {\n' +
          '      let temp = a + b;\n' +
          '      a = b;\n' +
          '      b = temp;\n' +
          '   }\n' +
          '   return b;\n' +
          '}'}
      </Text>
      <Text style={styles.subheading}>Explanation:</Text>
      <Text style={styles.sectionText}>
        The above pseudo code is a simple implementation of generating Fibonacci numbers. It loops 10 times, updates variables `a` and `b`, and returns the 10th Fibonacci number.
      </Text>
    </ScrollView>
  );

  const javascriptContent = (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      <Text style={styles.subheading}>JavaScript Code Example</Text>
      <Text style={styles.sectionText}>
        {'function exampleJavaScript() {\n' +
          '   // Step 1: Initialize variables\n' +
          '   let a = 0;\n' +
          '   let b = 1;\n' +
          '   // Step 2: Start loop\n' +
          '   for (let i = 0; i < 10; i++) {\n' +
          '      let temp = a + b;\n' +
          '      a = b;\n' +
          '      b = temp;\n' +
          '   }\n' +
          '   return b;\n' +
          '}'}
      </Text>
      <Text style={styles.subheading}>Explanation:</Text>
      <Text style={styles.sectionText}>
        This JavaScript code generates Fibonacci numbers. It initializes two variables and uses a loop to update them, eventually returning the 10th Fibonacci number.
      </Text>
    </ScrollView>
  );

  const handleTabChange = (index) => {
    setSelectedTab(index);
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({ x: width * index, animated: false });
    }
  };

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

        {/* Horizontal ScrollView to switch between Brief, Pseudo Code, and Javascript */}
        <ScrollView
          ref={scrollViewRef}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={(e) => {
            const page = Math.round(e.nativeEvent.contentOffset.x / width);
            setSelectedTab(page);
          }}
          scrollEventThrottle={16}
        >
          <View style={[styles.contentPage, { width }]}>{briefContent}</View>
          <View style={[styles.pseudoContentPage, { width }]}>{pseudoContent}</View>
          <View style={[styles.contentPage, { width }]}>{javascriptContent}</View>
        </ScrollView>

        {/* Footer */}
        <View style={styles.footer}>
          <TouchableOpacity
            style={[styles.footerTab, selectedTab === 0 && styles.selectedTab]}
            onPress={() => handleTabChange(0)}
          >
            <Text style={[styles.tabText, selectedTab === 0 && styles.selectedTabText]}>Brief</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.footerTab, selectedTab === 1 && styles.selectedTab]}
            onPress={() => handleTabChange(1)}
          >
            <Text style={[styles.tabText, selectedTab === 1 && styles.selectedTabText]}>Code</Text>
          </TouchableOpacity>
          {/* <TouchableOpacity
            style={[styles.footerTab, selectedTab === 2 && styles.selectedTab]}
            onPress={() => handleTabChange(2)}
          >
            <Text style={[styles.tabText, selectedTab === 2 && styles.selectedTabText]}>Problems</Text>
          </TouchableOpacity> */}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
  },
  contentContainer: {
    marginTop: 0,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 60,
    alignItems: 'center',
    backgroundColor: 'white',
    elevation: 2,
    paddingHorizontal: 16,
    shadowRadius: 2,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  contentPage: {
    flex: 1,
    // padding: 16,
    paddingHorizontal: 16
  },
  pseudoContentPage: {
    flex: 1,
    paddingHorizontal: 16,
    marginTop: 20
  },
  heading: {
    fontSize: 20,
    fontWeight: '500',
    marginVertical: 16,
  },
  subheading: {
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 8,
  },
  subsubheading: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 8,
  },
  sectionText: {
    fontSize: 14,
    lineHeight: 22,
    marginBottom: 10,
    color: '#333',
  },
  summaryContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 15,
    backgroundColor: '#f9f9f9',
    marginTop: 10,
    marginBottom: 30,
  },
  summaryTitle: {
    color: '#555',
    fontSize: 16,
    fontWeight: 'bold',
  },
  summaryText: {
    color: '#555',
    fontSize: 14,
    lineHeight: 20,
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
  selectedTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#FF4081',
  },
  tabText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#007AFF',
  },
  selectedTabText: {
    color: '#007AFF',
    fontWeight: 'bold',
  }
});

export default Details;
