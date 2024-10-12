import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, KeyboardAvoidingView, Platform, TouchableOpacity } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

const ProblemListScreen = () => {
  const [selectedTags, setSelectedTags] = useState([]);
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [openTagDropdown, setOpenTagDropdown] = useState(false);
  const [openCompanyDropdown, setOpenCompanyDropdown] = useState(false);

  const problems = [
    { id: '1', problem: 'Sort an array', tags: ['Arrays', 'Sorting'], company: 'Google' },
    { id: '2', problem: 'Find a word in a 2D matrix', tags: ['Matrix', 'Backtracking'], company: 'Amazon' },
    { id: '3', problem: 'Implement a stack using queues', tags: ['Stacks', 'Queues'], company: 'Facebook' },
    { id: '4', problem: 'Merge two sorted linked lists', tags: ['Linked List', 'Sorting'], company: 'Microsoft' },
  ];

  const tagOptions = [
    { label: 'Arrays', value: 'Arrays' },
    { label: 'Sorting', value: 'Sorting' },
    { label: 'Matrix', value: 'Matrix' },
    { label: 'Backtracking', value: 'Backtracking' },
    { label: 'Stacks', value: 'Stacks' },
    { label: 'Queues', value: 'Queues' },
    { label: 'Linked List', value: 'Linked List' },
  ];

  const companyOptions = [
    { label: 'Google', value: 'Google' },
    { label: 'Amazon', value: 'Amazon' },
    { label: 'Facebook', value: 'Facebook' },
    { label: 'Microsoft', value: 'Microsoft' },
  ];

  // Filter problems based on selected tags and company
  const filteredProblems = problems.filter(problem => {
    const tagFilter = selectedTags.length ? selectedTags.some(tag => problem.tags.includes(tag)) : true;
    const companyFilter = selectedCompany ? problem.company === selectedCompany : true;
    return tagFilter && companyFilter;
  });

  const renderProblemItem = ({ item }) => (
    <View style={styles.problemItem}>
      <Text style={styles.problemText}>{item.problem}</Text>
      <View style={styles.tagContainer}>
        {item.tags.map((tag, index) => (
          <View key={index} style={styles.tag}>
            <Text style={styles.tagText}>{tag}</Text>
          </View>
        ))}
        <View style={styles.companyTag}>
          <Text style={styles.companyTagText}>{item.company}</Text>
        </View>
      </View>
    </View>
  );

  // Handle tag selection
  const handleTagSelect = (item) => {
    setSelectedTags(prev => {
      if (prev.includes(item)) {
        return prev.filter(tag => tag !== item);
      } else {
        return [...prev, item];
      }
    });
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <View style={styles.filterContainer}>
        {/* Tags Dropdown */}
        <DropDownPicker
          open={openTagDropdown}
          value={selectedTags}
          items={tagOptions}
          setOpen={setOpenTagDropdown}
          setValue={handleTagSelect}
          multiple={true}
          mode="BADGE" // Use BADGE mode for multi-select visual representation
          placeholder="Filter by Tags"
          style={styles.dropdown}
          dropDownContainerStyle={styles.dropdownContainer}
        />

        {/* Company Dropdown */}
        <DropDownPicker
          open={openCompanyDropdown}
          value={selectedCompany}
          items={companyOptions}
          setOpen={setOpenCompanyDropdown}
          setValue={setSelectedCompany}
          placeholder="Filter by Company"
          style={styles.dropdown01}
          dropDownContainerStyle={styles.dropdownContainer}
        />
      </View>

      {/* Reset Filters Button */}
      <TouchableOpacity style={styles.resetButton} onPress={() => {
        setSelectedTags([]);
        setSelectedCompany(null);
      }}>
        <Text style={styles.resetButtonText}>Reset Filters</Text>
      </TouchableOpacity>

      <FlatList
        data={filteredProblems}
        keyExtractor={(item) => item.id}
        renderItem={renderProblemItem}
        style={styles.list}
        contentContainerStyle={styles.listContent}
      />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    zIndex: 10,
  },
  dropdown: {
    width: '48%',
    height: 40,
    borderColor: '#E0E0E0',
    borderRadius: 8,
  },
  dropdown01: {
    width: '48%',
    height: 40,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    marginLeft: -200
  },
  dropdownContainer: {
    backgroundColor: '#FFFFFF',
    borderColor: '#E0E0E0',
    maxHeight: 200, // Set a maximum height for the dropdown to avoid overflow
    zIndex: 20, // Ensure it appears above other components
  },
  list: {
    marginTop: 10,
  },
  listContent: {
    paddingHorizontal: 15,
  },
  problemItem: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    marginVertical: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  problemText: {
    fontSize: 16,
    color: '#333',
  },
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
  companyTag: {
    backgroundColor: '#FFECB3',
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  companyTagText: {
    fontSize: 12,
    color: '#FF6F00',
  },
  resetButton: {
    padding: 10,
    backgroundColor: '#FF4081',
    borderRadius: 8,
    margin: 15,
    alignItems: 'center',
  },
  resetButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});

export default ProblemListScreen;


// with chips code

import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, KeyboardAvoidingView, Platform, ScrollView, TouchableOpacity } from 'react-native';

const ProblemListScreen = () => {
    const [selectedTags, setSelectedTags] = useState([]);

    const problems = [
        { id: '1', problem: 'Sort an array', tags: ['Arrays', 'Sorting'], company: 'Google' },
        { id: '2', problem: 'Find a word in a 2D matrix', tags: ['Matrix', 'Backtracking'], company: 'Amazon' },
        { id: '3', problem: 'Implement a stack using queues', tags: ['Stacks', 'Queues'], company: 'Facebook' },
        { id: '4', problem: 'Merge two sorted linked lists', tags: ['Linked List', 'Sorting'], company: 'Microsoft' },
        { id: '5', problem: 'Check for balanced parentheses', tags: ['Stacks', 'Strings'], company: 'Google' },
        { id: '6', problem: 'Find the first non-repeating character', tags: ['Strings', 'Hashing'], company: 'Apple' },
    ];

    const uniqueTags = [...new Set(problems.flatMap(problem => problem.tags))]; // Get unique tags for filtering

    // Filter problems based on selected tags
    const filteredProblems = problems.filter(problem => {
        return selectedTags.length ? selectedTags.some(tag => problem.tags.includes(tag)) : true;
    });

    const renderProblemItem = ({ item }) => (
        <View style={styles.problemItem}>
            <Text style={styles.problemText}>{item.problem}</Text>
            <View style={styles.tagContainer}>
                {item.tags.map((tag, index) => (
                    <View key={index} style={styles.tag}>
                        <Text style={styles.tagText}>{tag}</Text>
                    </View>
                ))}
                <View style={styles.companyTag}>
                    <Text style={styles.companyTagText}>{item.company}</Text>
                </View>
            </View>
        </View>
    );

    const handleTagSelect = (tag) => {
        setSelectedTags(prev => {
            if (prev.includes(tag)) {
                return prev.filter(selectedTag => selectedTag !== tag);
            } else {
                return [...prev, tag];
            }
        });
    };

    return (
        <View style={styles.container}>
            <View>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.tagScrollView}>
                    {uniqueTags.map(tag => (
                        <TouchableOpacity key={tag} onPress={() => handleTagSelect(tag)} style={[styles.tagButton, selectedTags.includes(tag) && styles.selectedTag]}>
                            <Text style={styles.tagButtonText}>{tag}</Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>

            <FlatList
                data={filteredProblems}
                keyExtractor={(item) => item.id}
                renderItem={renderProblemItem}
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
    tagScrollView: {
        padding: 10,
        backgroundColor: '#FFFFFF',
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0',
    },
    tagButton: {
        backgroundColor: '#E0F7FA',
        borderRadius: 5,
        paddingVertical: 5,
        paddingHorizontal: 10,
        marginRight: 10,
    },
    selectedTag: {
        backgroundColor: '#00796B',
    },
    tagButtonText: {
        color: '#00796B',
        fontWeight: 'bold',
    },
    list: {
        marginTop: 10,
    },
    listContent: {
        paddingHorizontal: 15,
    },
    problemItem: {
        backgroundColor: '#FFFFFF',
        padding: 15,
        marginVertical: 8,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#E0E0E0',
    },
    problemText: {
        fontSize: 16,
        color: '#333',
    },
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
    companyTag: {
        backgroundColor: '#FFECB3',
        borderRadius: 5,
        paddingVertical: 5,
        paddingHorizontal: 10,
    },
    companyTagText: {
        fontSize: 12,
        color: '#FF6F00',
    },
});

export default ProblemListScreen;



//flating button code

import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, Modal, TouchableOpacity } from 'react-native';
import CustomDropdown from 'components/customDropdown';

const ProblemListScreen = () => {
    const [selectedTags, setSelectedTags] = useState([]);
    const [selectedCompany, setSelectedCompany] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);

    const problems = [
        { id: '1', problem: 'Sort an array', tags: ['Arrays', 'Sorting'], company: 'Google' },
        { id: '2', problem: 'Find a word in a 2D matrix', tags: ['Matrix', 'Backtracking'], company: 'Amazon' },
        { id: '3', problem: 'Implement a stack using queues', tags: ['Stacks', 'Queues'], company: 'Facebook' },
        { id: '4', problem: 'Merge two sorted linked lists', tags: ['Linked List', 'Sorting'], company: 'Microsoft' },
        { id: '5', problem: 'Check for balanced parentheses', tags: ['Stacks', 'Strings'], company: 'Google' },
        { id: '6', problem: 'Find the first non-repeating character', tags: ['Strings', 'Hashing'], company: 'Apple' },
        { id: '7', problem: 'Detect a cycle in a linked list', tags: ['Linked List', 'Two Pointers'], company: 'Amazon' },
        { id: '8', problem: 'Implement a binary search tree', tags: ['Trees', 'Data Structures'], company: 'Facebook' },
        { id: '9', problem: 'Find the longest common prefix', tags: ['Strings', 'Array'], company: 'Netflix' },
        { id: '10', problem: 'Reverse a string', tags: ['Strings', 'Easy'], company: 'Microsoft' },
        { id: '11', problem: 'Find the median of two sorted arrays', tags: ['Arrays', 'Binary Search'], company: 'Google' },
        { id: '12', problem: 'Implement a queue using stacks', tags: ['Queues', 'Stacks'], company: 'Amazon' },
        { id: '13', problem: 'Maximum subarray sum', tags: ['Arrays', 'Dynamic Programming'], company: 'Facebook' },
        { id: '14', problem: 'Find the Kth largest element in an array', tags: ['Sorting', 'Arrays'], company: 'Apple' },
        { id: '15', problem: 'Generate parentheses', tags: ['Backtracking', 'Strings'], company: 'Microsoft' },
        { id: '16', problem: 'Find all anagrams in a string', tags: ['Strings', 'Hashing'], company: 'Amazon' },
        { id: '17', problem: 'Longest substring without repeating characters', tags: ['Strings', 'Sliding Window'], company: 'Google' },
        { id: '18', problem: 'Binary tree inorder traversal', tags: ['Trees', 'Traversal'], company: 'Facebook' },
        { id: '19', problem: 'Path sum in a binary tree', tags: ['Trees', 'Depth First Search'], company: 'Microsoft' },
        { id: '20', problem: 'Climbing stairs', tags: ['Dynamic Programming', 'Recursion'], company: 'Amazon' },
      ];

    const tagOptions = ['Arrays', 'Sorting', 'Matrix', 'Backtracking', 'Stacks', 'Queues', 'Linked List'];
    const companyOptions = ['Google', 'Amazon', 'Facebook', 'Microsoft'];

    // Filter problems based on selected tags and company
    const filteredProblems = problems.filter(problem => {
        const tagFilter = selectedTags.length ? selectedTags.some(tag => problem.tags.includes(tag)) : true;
        const companyFilter = selectedCompany ? problem.company === selectedCompany : true;
        return tagFilter && companyFilter;
    });

    const renderProblemItem = ({ item }) => (
        <View style={styles.problemItem}>
            <Text style={styles.problemText}>{item.problem}</Text>
            <View style={styles.tagContainer}>
                {item.tags.map((tag, index) => (
                    <View key={index} style={styles.tag}>
                        <Text style={styles.tagText}>{tag}</Text>
                    </View>
                ))}
                <View style={styles.companyTag}>
                    <Text style={styles.companyTagText}>{item.company}</Text>
                </View>
            </View>
        </View>
    );

    // Handle tag selection
    const handleTagSelect = (tag) => {
        setSelectedTags(prev => {
            if (prev.includes(tag)) {
                return prev.filter(t => t !== tag);
            } else {
                return [...prev, tag];
            }
        });
    };

    // Open the modal
    const openFilterModal = () => {
        setModalVisible(true);
    };

    return (
        <View style={styles.container}>
            {/* Problem List */}
            <FlatList
                data={filteredProblems}
                keyExtractor={(item) => item.id}
                renderItem={renderProblemItem}
                style={styles.list}
                contentContainerStyle={styles.listContent}
            />

            {/* Filter Modal */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>Filter Problems</Text>

                        {/* Tags Dropdown with Search */}
                        <CustomDropdown
                            options={tagOptions}
                            selectedValue={selectedTags.length ? selectedTags.join(', ') : null}
                            onSelect={handleTagSelect}
                            title="Filter by Tags"
                        />

                        {/* Company Dropdown with Search */}
                        <CustomDropdown
                            options={companyOptions}
                            selectedValue={selectedCompany}
                            onSelect={setSelectedCompany}
                            title="Filter by Company"
                        />

                        {/* Apply and Reset Buttons */}
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity style={styles.applyButton} onPress={() => setModalVisible(false)}>
                                <Text style={styles.applyButtonText}>Apply Filters</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.resetButton} onPress={() => {
                                setSelectedTags([]);
                                setSelectedCompany(null);
                            }}>
                                <Text style={styles.resetButtonText}>Reset Filters</Text>
                            </TouchableOpacity>
                        </View>

                        <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(false)}>
                            <Text style={styles.closeButtonText}>Close</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

            {/* Floating Action Button */}
            <TouchableOpacity style={styles.fab} onPress={openFilterModal}>
                <Text style={styles.fabText}>+</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8F8F8',
    },
    list: {
        marginTop: 10,
    },
    listContent: {
        paddingHorizontal: 15,
    },
    problemItem: {
        backgroundColor: '#FFFFFF',
        padding: 15,
        marginVertical: 8,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#E0E0E0',
    },
    problemText: {
        fontSize: 16,
        color: '#333',
    },
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
    companyTag: {
        backgroundColor: '#FFECB3',
        borderRadius: 5,
        paddingVertical: 5,
        paddingHorizontal: 10,
    },
    companyTagText: {
        fontSize: 12,
        color: '#FF6F00',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        width: '90%',
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        padding: 20,
        elevation: 5,
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 15,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    applyButton: {
        backgroundColor: '#4CAF50',
        borderRadius: 8,
        padding: 10,
        flex: 1,
        marginRight: 5,
        alignItems: 'center',
    },
    resetButton: {
        backgroundColor: '#FF4081',
        borderRadius: 8,
        padding: 10,
        flex: 1,
        marginLeft: 5,
        alignItems: 'center',
    },
    applyButtonText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
    },
    resetButtonText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
    },
    closeButton: {
        marginTop: 15,
        alignItems: 'center',
    },
    closeButtonText: {
        color: '#FF4081',
        fontWeight: 'bold',
    },
    // Floating Action Button styles
    fab: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        width: 56,
        height: 56,
        backgroundColor: '#FF4081',
        borderRadius: 28,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5, // Adds shadow effect for Android
        shadowColor: '#000', // Shadow color for iOS
        shadowOffset: { width: 0, height: 2 }, // Shadow offset for iOS
        shadowOpacity: 0.3, // Shadow opacity for iOS
        shadowRadius: 4, // Shadow radius for iOS
    },
    fabText: {
        fontSize: 28,
        color: '#FFFFFF',
    },
});

export default ProblemListScreen;



// details page with original

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
    justifyContent: 'space-between',
    height: 60, 
    alignItems: 'center',
    backgroundColor: 'white',
    elevation: 2,
    shadowOpacity: 0.8,
    paddingHorizontal: 16,
    shadowRadius: 2,

  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  content: {
    paddingHorizontal: 16,
    // paddingVertical: 5,
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


