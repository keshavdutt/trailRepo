import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/FontAwesome';  // Import icon library

const RecentScreen = () => {
  const [selectedOption, setSelectedOption] = useState("Recent Questions");
  const [open, setOpen] = useState(false);

  // Dummy data for recent questions with company and topic tags
  const recentQuestions = [
    { id: '1', question: 'What is a closure in JavaScript?', company: 'Google', topic: 'JavaScript' },
    { id: '2', question: 'Explain event delegation in JavaScript.', company: 'Facebook', topic: 'JavaScript' },
    { id: '3', question: 'What is the difference between == and === in JavaScript?', company: 'Amazon', topic: 'JavaScript' },
  ];

  const interviewExperiences = [
    { id: '1', title: 'Google Interview - Software Engineer', description: 'It was a 5 round interview focused on data structures, system design, and algorithms.' },
    { id: '2', title: 'Amazon Interview - Frontend Developer', description: 'The interview had coding questions, system design, and behavioral questions.' },
    { id: '3', title: 'Microsoft Interview - Backend Developer', description: 'The interview covered distributed systems, algorithms, and problem-solving.' },
  ];

  // Options for the dropdown with icons
  const items = [
    {
      label: 'Recent Questions',
      value: 'Recent Questions',
      icon: () => <Icon name="question-circle" size={18} color="#4CAF50" />,  // Add icon
    },
    {
      label: 'Recent Interview Experiences',
      value: 'Recent Interview Experiences',
      icon: () => <Icon name="briefcase" size={18} color="#FF9800" />,  // Add icon
    },
  ];

  // Set the data based on the selected option
  const dataToShow = selectedOption === 'Recent Questions' ? recentQuestions : interviewExperiences;

  // Render list item for questions with tags (company & topic)
  const renderQuestionItem = ({ item }) => (
    <View style={styles.listItem}>
      <Text style={styles.listText}>{item.question}</Text>
      <View style={styles.tagContainer}>
        <View style={styles.tag}>
          <Text style={styles.tagText}>{item.company}</Text>
        </View>
        <View style={styles.tag}>
          <Text style={styles.tagText}>{item.topic}</Text>
        </View>
      </View>
    </View>
  );

  // Render list item for interview experiences
  const renderInterviewItem = ({ item }) => (
    <View style={styles.interviewItem}>
      <Text style={styles.interviewTitle}>{item.title}</Text>
      <Text style={styles.interviewDescription}>{item.description}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header with Dropdown */}
      <View style={styles.headerContainer}>
        {/* <Text style={styles.headerTitle}>Recent</Text> */}
        <DropDownPicker
          open={open}
          value={selectedOption}
          items={items}
          setOpen={setOpen}
          setValue={setSelectedOption}
          placeholder="Select Option"
          style={styles.dropdown}
          dropDownContainerStyle={styles.dropdownContainer}
          labelStyle={styles.dropdownLabel}
          listItemLabelStyle={styles.listItemLabel}
          arrowIconStyle={styles.arrowIcon}
          onSelectItem={(item) => setSelectedOption(item.value)}
        />
      </View>

      {/* List based on the selected dropdown option */}
      <FlatList
        data={dataToShow}
        keyExtractor={(item) => item.id}
        renderItem={selectedOption === 'Recent Questions' ? renderQuestionItem : renderInterviewItem}
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
  headerContainer: {
    padding: 15,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    zIndex: 10,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  dropdown: {
    height: 40,
    borderColor: '#E0E0E0',
    zIndex: 20,
    borderRadius: 8,
  },
  dropdownContainer: {
    backgroundColor: '#FFFFFF',
    borderColor: '#E0E0E0',
    zIndex: 30,
  },
  dropdownLabel: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
  listItemLabel: {
    fontSize: 14,
    color: '#666',
  },
  arrowIcon: {
    width: 16,
    height: 16,
  },
  list: {
    marginTop: 10,
  },
  listContent: {
    paddingHorizontal: 15,
  },
  listItem: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    marginVertical: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  listText: {
    fontSize: 16,
    color: '#333',
  },
  // Tags for company and topic
  tagContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  tag: {
    backgroundColor: '#E0F7FA',
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginRight: 8,
  },
  tagText: {
    fontSize: 12,
    color: '#00796B',
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
});

export default RecentScreen;
