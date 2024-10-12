import React, { useState, useEffect, useRef } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    ScrollView,
    StatusBar,
    Modal,
    Dimensions,
    Platform,
    Keyboard,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { KeyboardAwareView } from 'react-native-keyboard-aware-view';
// import { POST } from 'utils/AI/togetherApiCaller';

const { height } = Dimensions.get('window');

export default function QuestionAnalysisModal({ visible, onClose, problemStatement, setAnalysisContent }) {
    const [postContent, setPostContent] = useState('');
    const [keyboardVisible, setKeyboardVisible] = useState(false); // Track keyboard visibility
    const textInputRef = useRef(null);

    // Submit and reset post content on submit
    const handleSubmit = () => {
        console.log('Post Submitted:', { postContent });
        setPostContent(''); // Reset input field
        onClose(); // Close modal
    };

    // Auto-focus text input when modal becomes visible
    useEffect(() => {
        if (visible) {
            const timeoutId = setTimeout(() => textInputRef.current?.focus(), 0);
            return () => clearTimeout(timeoutId); // Cleanup on unmount
        }
    }, [visible]);

    // Listen for keyboard show/hide events
    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => setKeyboardVisible(true));
        const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => setKeyboardVisible(false));

        return () => {
            keyboardDidShowListener.remove();
            keyboardDidHideListener.remove();
        };
    }, []);

    // Handle the analysis button press
    const handleAnalysePress = async () => {
        // setIsLoading(true); // Start loading indicator
        // onClose(); // Close modal

        // const req = new Request("/api/analyse", {
        //     method: "POST",
        //     body: JSON.stringify({
        //         model: "meta-llama/Llama-Vision-Free",
        //         IncomingQuestion: problemStatement,
        //         userAlgo: postContent,
        //     }),
        //     headers: { "Content-Type": "application/json" },
        // });

        // try {
        //     const response = await POST(req);
        //     const resultText = await response.text();
        //     setAnalysisContent(resultText); // Update parent component with analysis result
        // } catch (error) {
        //     console.error('Error during analysis:', error);
        // } finally {
        //     setIsLoading(false); // End loading indicator
        //     setPostContent(''); // Clear input field after analysis
        // }
    };

    return (
        <Modal
            animationType="slide"
            transparent={false}
            visible={visible}
            onRequestClose={onClose}
        >
            <KeyboardAwareView
                extraScrollHeight={100}
                enableOnAndroid
                keyboardShouldPersistTaps="handled"
                style={styles.container}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 90}
                contentContainerStyle={{ flex: 1 }}
            >
                <StatusBar backgroundColor="#fff" barStyle="dark-content" />

                {/* Header */}
                <View style={styles.header}>
                    <TouchableOpacity onPress={onClose} hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
                        <Ionicons name="close" size={28} color="black" />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>AI Analysis</Text>
                    <TouchableOpacity style={styles.analyseButton} onPress={handleAnalysePress}>
                        <Text style={styles.analyseButtonText}>Analyse</Text>
                    </TouchableOpacity>
                </View>

                {/* Input Section */}
                <ScrollView contentContainerStyle={styles.inputContainer}>
                    <TextInput
                        ref={textInputRef}
                        style={styles.textInput}
                        multiline
                        placeholder="Write your algorithm in detail for better analysis"
                        placeholderTextColor="#aaa"
                        value={postContent}
                        onChangeText={setPostContent}
                    />
                </ScrollView>

                {/* Display problem statement if keyboard is visible */}
                {keyboardVisible && (
                    <View style={styles.iconContainer}>
                        <Text>Problem: {problemStatement}</Text>
                    </View>
                )}
            </KeyboardAwareView>
        </Modal>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        marginTop: Platform.OS === 'ios' ? 40 : 20,
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: '#000',
        marginLeft: 50,
    },
    analyseButton: {
        backgroundColor: '#E1E1E1',
        paddingVertical: 5,
        paddingHorizontal: 12,
        borderRadius: 20,
    },
    analyseButtonText: {
        color: '#999',
        fontWeight: 'bold',
    },
    inputContainer: {
        paddingHorizontal: 20,
        flexGrow: 1,
        justifyContent: 'flex-start',
    },
    textInput: {
        minHeight: 150,
        borderColor: '#fff',
        borderBottomWidth: 1,
        fontSize: 18,
        paddingVertical: 10,
        color: '#333',
    },
    iconContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderTopWidth: 1,
        borderTopColor: '#ddd',
    },
});
