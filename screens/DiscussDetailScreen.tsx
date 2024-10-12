import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import React, { useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons'; // Make sure you install this package

// Sample Data for the interview experience
const interviewExperience = [
    {
        type: 'heading',
        title: 'Flipkart - Software Engineer 2',
        text: 'I recently appeared for the Software Engineer 2 role at Flipkart. The interview process was quite rigorous and involved the following stages:',
    },
    {
        type: 'subheading',
        title: '1. Online Coding Round',
        text: 'The first round was an online coding test that included two questions focused on data structures and algorithms. The questions were mainly focused on arrays, trees, and dynamic programming.',
    },
    {
        type: 'subheading',
        title: '2. Technical Interview 1',
        text: 'The second round was a technical interview where I was asked to solve a problem related to system design and distributed systems.',
    },
    {
        type: 'subsubheading',
        title: '3. Technical Interview 2',
        text: 'In the third round, I was asked more questions related to low-level design, object-oriented programming, and a few puzzles.',
    },
    {
        type: 'subheading',
        title: '4. HR Interview',
        text: 'The final round was an HR round where I was asked about my previous experience, my motivation for joining Flipkart, and my expectations regarding the role.',
    },
    {
        type: 'subheading',
        title: 'Conclusion',
        text: 'Overall, it was a positive experience. Make sure you are well-versed in algorithms and system design, as well as behavioral questions, as they play a crucial role in Flipkart\'s selection process.',
    },
];

export default function DiscussDetailScreen({ navigation }) {
    const [bookmarked, setBookmarked] = useState(false);

    const handleBookmarkPress = () => {
        setBookmarked(!bookmarked);
    };

    const handleBackPress = () => {
        navigation.goBack();
    };

    return (
        <SafeAreaView style={styles.safeContainer}>
            {/* Header with Back Button and Bookmark Icon */}
            <View style={styles.headerContainer}>
                <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
                    <MaterialIcons name="arrow-back" size={28} color="#00796B" />
                </TouchableOpacity>

                {/* Title and Position Section */}
                {/* <Text style={styles.title}>Flipkart Interview Experience</Text> */}

                {/* Bookmark Icon */}
                <TouchableOpacity onPress={handleBookmarkPress} style={styles.bookmarkIcon}>
                    <MaterialIcons
                        name={bookmarked ? 'bookmark' : 'bookmark-border'}
                        size={28}
                        color={bookmarked ? '#4CAF50' : '#666'}
                    />
                </TouchableOpacity>
            </View>

            {/* Scrollable Content */}
            <ScrollView contentContainerStyle={styles.content}>
                {interviewExperience.map((section, index) => (
                    <View key={index} style={styles.section}>
                        {/* <Text style={styles.subheading}>{section.title}</Text> */}
                        {(() => {
                            if (section.type === 'heading') {
                                return <Text style={styles.heading}>{section.title}</Text>;
                            } else if (section.type === 'subheading') {
                                return <Text style={styles.subheading}>{section.title}</Text>;
                            } else if (section.type === 'subsubheading') {
                                return <Text style={styles.subsubheading}>{section.title}</Text>;
                            } else {
                                return <Text style={styles.summaryTitle}>{section.title}</Text>

                            }
                        })()}
                        <Text style={styles.sectionText}>{section.text}</Text>

                        {section.image && (
                            <Image
                                source={{ uri: section.image }}
                                style={styles.image}
                                resizeMode="contain"
                            />
                        )}
                    </View>
                ))}
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeContainer: {
        flex: 1,
        backgroundColor: 'white',
        // backgroundColor: '#F8F8F8',
    },
    headerContainer: {
        // flexDirection: 'row',
        // justifyContent: 'space-between',
        // alignItems: 'center',
        // paddingHorizontal: 20,
        // paddingVertical: 15,
        // backgroundColor: '#FFFFFF',
        // borderBottomWidth: 1,
        // borderBottomColor: '#E0E0E0',
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 60,
        // justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        elevation: 2,
        // shadowOpacity: 0.8,
        // paddingTop: 20,
        paddingHorizontal: 16,
        // shadowRadius: 2,
        // flexDirection: 'row',
        // alignItems: 'center',
        // justifyContent: 'space-between',
        // padding: 16,
        // height: 60,
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0',
        // backgroundColor: '#FFF',
    },
    backButton: {
        paddingRight: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: '600',
        color: '#00796B',
    },
    bookmarkIcon: {
        padding: 5,
    },
    content: {
        paddingHorizontal: 20,
        paddingVertical: 15,
    },
    section: {
        marginBottom: 20,
    },

    heading: {
        fontSize: 18,
        fontWeight: '500',
        marginVertical: 16,
    },

    subheading: {
        fontSize: 18,
        fontWeight: '500',
        marginBottom: 5,
        color: '#00796B',
    },
    subsubheading: {
        fontSize: 16,
        fontWeight: '500',
        marginBottom: 8,
    },
    sectionText: {
        fontSize: 14,
        lineHeight: 22,
        color: '#333',
    },
    image: {
        width: '100%',
        height: 200,
        marginTop: 10,
        backgroundColor: '#EEE',
    },
});
