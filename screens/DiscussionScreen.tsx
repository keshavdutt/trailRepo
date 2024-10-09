import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const DiscussionScreen = () => {
  // Dummy data for recent interview experiences
  const interviewExperiences = [
    { id: '1', title: 'Google Interview - Software Engineer', description: 'It was a 5 round interview focused on data structures, system design, and algorithms.' },
    { id: '2', title: 'Amazon Interview - Frontend Developer', description: 'The interview had coding questions, system design, and behavioral questions.' },
    { id: '3', title: 'Microsoft Interview - Backend Developer', description: 'The interview covered distributed systems, algorithms, and problem-solving.' },
  ];

  // Dummy data for discussion threads
  const discussionThreads = [
    { id: '1', topic: 'JavaScript: Event delegation' },
    { id: '2', topic: 'React Native: Performance optimization techniques' },
    { id: '3', topic: 'System design: Load balancers' },
  ];

  // Render list item for interview experiences
  const renderInterviewItem = ({ item }) => (
    <View style={styles.interviewItem}>
      <Text style={styles.interviewTitle}>{item.title}</Text>
      <Text style={styles.interviewDescription}>{item.description}</Text>
    </View>
  );

  // Render list item for discussion threads
  const renderDiscussionItem = ({ item }) => (
    <View style={styles.discussionItem}>
      <Text style={styles.discussionText}>{item.topic}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Section for Recent Interview Experiences */}
      <Text style={styles.sectionTitle}>Recent Interview Experiences</Text>
      <FlatList
        data={interviewExperiences}
        keyExtractor={(item) => item.id}
        renderItem={renderInterviewItem}
        style={styles.list}
        contentContainerStyle={styles.listContent}
      />

      {/* Section for Discussion Threads */}
      <Text style={styles.sectionTitle}>Discussion Threads</Text>
      <FlatList
        data={discussionThreads}
        keyExtractor={(item) => item.id}
        renderItem={renderDiscussionItem}
        style={styles.list}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    paddingHorizontal: 15,
    marginTop: 20,
    marginBottom: 10,
  },
  list: {
    marginTop: 5,
  },
  listContent: {
    paddingHorizontal: 15,
  },
  interviewItem: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    marginVertical: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  interviewTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  interviewDescription: {
    fontSize: 14,
    color: '#666',
  },
  discussionItem: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    marginVertical: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  discussionText: {
    fontSize: 16,
    color: '#333',
  },
});

export default DiscussionScreen;
