import { StyleSheet, Text, View, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Import the icon component
import QuestionAnalysisModal from './questionAnalysisModal';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

// Sample data for the question detail
const questionData = {
    title: 'How to Reverse a Linked List?',
    description: `Given a singly linked list, write a function to reverse the linked list in place. You should solve this problem with an iterative approach.\nThis problem is often asked in technical interviews, and it's important to understand both the iterative and recursive solutions. Make sure to handle edge cases such as an empty list or a list with only one node.`,
    tags: ['Linked List', 'Recursion'],
    companies: ['Google', 'Amazon'],
    sampleInput: `Input: 1 -> 2 -> 3 -> 4 -> 5 -> NULL\n\nEdge Case: NULL (empty list)\nEdge Case: 1 -> NULL (single node)`,
    sampleOutput: `Output: 5 -> 4 -> 3 -> 2 -> 1 -> NULL\n\nEdge Case: NULL (remains NULL)\nEdge Case: 1 -> NULL (remains 1 -> NULL)`,
};

export default function QuestionDetailScreen({ navigation }) {
    const handleBackPress = () => {
        navigation.goBack(); // Navigate back to the previous screen
    };

    const handleBookmarkPress = () => {
        // Logic to bookmark the question goes here
        console.log('Bookmark pressed!');
    };

    const [modalVisible, setModalVisible] = useState(false);
    const [analysisContent, setAnalysisContent] = useState('') // state for setting result of analyse



    return (
        <SafeAreaView style={styles.container}>
            {/* Custom Header */}
            <View style={styles.header}>
            <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
                    <MaterialIcons name="arrow-back" size={28} color="#00796B" />
                </TouchableOpacity>
                {/* <Text style={styles.headerTitle}>Question Detail</Text> */}
                <TouchableOpacity onPress={handleBookmarkPress} style={styles.bookmarkButton}>
                    <Icon name="bookmark-border" size={24} color="#00796B" />
                </TouchableOpacity>
            </View>

            <ScrollView contentContainerStyle={styles.scrollContainer}>
                {/* Question Title */}
                <Text style={styles.title}>{questionData.title}</Text>

                {/* Question Description */}
                <Text style={styles.description}>{questionData.description}</Text>

                {/* Tags Section */}
                <View style={styles.tagsContainer}>
                    {questionData.tags.map((tag, index) => (
                        <View key={index} style={styles.tag}>
                            <Text style={styles.tagText}>{tag}</Text>
                        </View>
                    ))}
                    {questionData.companies.map((company, index) => (
                        <View key={index} style={styles.companyTag}>
                            <Text style={styles.companyTagText}>{company}</Text>
                        </View>
                    ))}
                </View>

                {/* Sample Input */}
                <View style={styles.sampleContainer}>
                    <Text style={styles.sampleTitle}>Sample Input:</Text>
                    <Text style={styles.sampleText}>{questionData.sampleInput}</Text>
                </View>

                {/* Sample Output */}
                <View style={styles.sampleContainer}>
                    <Text style={styles.sampleTitle}>Sample Output:</Text>
                    <Text style={styles.sampleText}>{questionData.sampleOutput}</Text>
                </View>

                {/* Action Buttons */}
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} onPress={() => setModalVisible(true)} >
                        <Text style={styles.buttonText}>AI Analyze</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>View Solution</Text>
                    </TouchableOpacity>
                </View>


                <QuestionAnalysisModal
                    visible={modalVisible}
                    onClose={() => setModalVisible(false)}
                    problemStatement={'anythinng'}
                    setAnalysisContent={setAnalysisContent}
                />
                

            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        // backgroundColor: '#F8F8F8',
    },
    header: {
        // backgroundColor: '#FFFFFF',
        // padding: 15,
        // flexDirection: 'row',
        // justifyContent: 'space-between',
        // alignItems: 'center',
        // borderBottomWidth: 1,
        // borderBottomColor: '#E0E0E0',
        // justifyContent: 'center',

        // shadowOpacity: 0.8,
        // paddingTop: 20,
        // shadowRadius: 2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 60,
        alignItems: 'center',
        backgroundColor: 'white',
        elevation: 2,
        paddingHorizontal: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0',
        
    },
    backButton: {
        paddingRight: 10,
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        flex: 1, // Allow the title to take available space
    },
    bookmarkButton: {
        paddingLeft: 15,
    },
    scrollContainer: {
        padding: 15,
        flexGrow: 1,
    },
    title: {
        fontSize: 20,
        fontWeight: '500',
        color: '#333',
        marginBottom: 10,
    },
    description: {
        fontSize: 14,
        color: '#666',
        marginBottom: 20,
        lineHeight: 22,
    },
    tagsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: 20,
        justifyContent: 'flex-start',
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
        marginRight: 8
    },
    companyTagText: {
        fontSize: 12,
        color: '#FF6F00',
    },
    sampleContainer: {
        backgroundColor: '#FFFFFF',
        padding: 15,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#E0E0E0',
        marginBottom: 20,
    },
    sampleTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 5,
    },
    sampleText: {
        fontSize: 14,
        color: '#666',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    button: {
        backgroundColor: '#4CAF50',
        borderRadius: 8,
        padding: 12,
        flex: 1,
        marginHorizontal: 5,
        alignItems: 'center',
        elevation: 2,
    },
    buttonText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 16,
    },
});
