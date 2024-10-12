import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

const DiscussionScreen = ({navigation}) => {
  // Dummy data for recent interview experiences
  const interviewExperiences = [
    { id: '1', title: 'Google Interview - Software Engineer', description: 'It was a 5 round interview focused on data structures, system design, and algorithms.' },
    { id: '2', title: 'Amazon Interview - Frontend Developer', description: 'The interview had coding questions, system design, and behavioral questions.' },
    { id: '3', title: 'Microsoft Interview - Backend Developer', description: 'The interview covered distributed systems, algorithms, and problem-solving.' },
    { id: '4', title: 'Facebook Interview - Data Scientist', description: 'The interview consisted of statistical analysis, machine learning, and coding challenges.' },
    { id: '5', title: 'Apple Interview - iOS Developer', description: 'Focused on Swift programming, app architecture, and UI/UX design principles.' },
    { id: '6', title: 'Netflix Interview - Software Engineer', description: 'The process included system design interviews and cultural fit discussions.' },
    { id: '7', title: 'Uber Interview - Data Analyst', description: 'Questions centered around data visualization, SQL queries, and analytics case studies.' },
    { id: '8', title: 'Adobe Interview - UX Researcher', description: 'Interview involved case studies, user experience principles, and research methodologies.' },
    { id: '9', title: 'Twitter Interview - DevOps Engineer', description: 'The interview covered CI/CD pipelines, cloud architecture, and troubleshooting.' },
    { id: '10', title: 'Salesforce Interview - Product Manager', description: 'Focused on product lifecycle management, stakeholder communication, and agile methodologies.' },
  ];


  // Render list item for interview experiences
  const renderInterviewItem = ({ item }) => (
    <TouchableOpacity onPress={() => {navigation.navigate('DiscussDetailScreen')}}>
      <View style={styles.interviewItem}>
        <Text style={styles.interviewTitle}>{item.title}</Text>
        <Text style={styles.interviewDescription}>{item.description}</Text>
      </View>
    </TouchableOpacity>
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
    marginTop: 10,
    // marginBottom: 10,
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
    marginVertical: 6,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  interviewTitle: {
    fontSize: 14,
    fontWeight: '500',
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
