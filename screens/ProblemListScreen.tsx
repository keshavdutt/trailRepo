import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, Modal, TouchableOpacity, ScrollView } from 'react-native';
import CustomDropdown from 'components/customDropdown';
import { MaterialIcons } from '@expo/vector-icons'; // Import MaterialIcons for the filter icon

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
            {/* Filter Selection */}
            <View style={styles.filterSelectionContainer}>
                {/* Show "Practice Questions" if no filters are selected */}

                {selectedTags.length === 0 && !selectedCompany && (
                    <View style={styles.practiceContainer}>
                        <Text style={styles.practiceText}>Practice Questions</Text>
                    </View>
                )}
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.selectedTagsScroll}>
                    {selectedTags.map((tag, index) => (
                        <View key={index} style={styles.selectedTag}>
                            <Text style={styles.selectedTagText}>{tag}</Text>
                        </View>
                    ))}
                    {selectedCompany && (
                        <View style={styles.selectedTag}>
                            <Text style={styles.selectedTagText}>{selectedCompany}</Text>
                        </View>
                    )}
                </ScrollView>
                <TouchableOpacity style={styles.applyIcon} onPress={openFilterModal}>
                    <MaterialIcons name="filter-alt" size={24} color="#FFFFFF" />
                </TouchableOpacity>
            </View>



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
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8F8F8',
    },
    filterSelectionContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingVertical: 5,
        backgroundColor: '#ffffff',
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0',
    },
    selectedTagsScroll: {
        flex: 1,
        marginRight: 10,
    },
    selectedTag: {
        backgroundColor: '#E0F7FA',
        borderRadius: 5,
        paddingVertical: 5,
        paddingHorizontal: 10,
        marginRight: 8,
    },
    selectedTagText: {
        fontSize: 12,
        color: '#00796B',
    },
    applyIcon: {
        backgroundColor: '#FF4081',
        borderRadius: 8,
        padding: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    practiceContainer: {
        padding: 15,
        alignItems: 'center',
    },
    practiceText: {
        fontSize: 18,
        color: '#333',
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
    resetButton: {
        backgroundColor: '#FF4081',
        borderRadius: 8,
        padding: 10,
        alignItems: 'center',
        flex: 1,
        marginLeft: 5,
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
    applyButton: {
        backgroundColor: '#FF4081',
        borderRadius: 8,
        padding: 10,
        marginLeft: 10,
        alignItems: 'center',
    },
    applyButtonText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
    },
});

export default ProblemListScreen;
