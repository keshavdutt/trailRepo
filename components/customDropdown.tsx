import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, TextInput, StyleSheet } from 'react-native';

const CustomDropdown = ({ options, selectedValue, onSelect, title }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  // Filter options based on the search term
  const filteredOptions = options.filter(option =>
    option.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <View style={styles.dropdownContainer}>
      <TouchableOpacity style={styles.dropdown} onPress={() => setIsOpen(!isOpen)}>
        <Text style={styles.dropdownText}>{selectedValue || title}</Text>
      </TouchableOpacity>
      {isOpen && (
        <View style={styles.dropdownListContainer}>
          {/* <TextInput
            style={styles.searchInput}
            placeholder="Search..."
            placeholderTextColor="#888" // Set the placeholder text color
            value={searchTerm}
            onChangeText={setSearchTerm} // Update search term on input change
          /> */}
          <ScrollView style={styles.dropdownList}>
            {filteredOptions.length > 0 ? (
              filteredOptions.map((option, index) => (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.dropdownItem,
                    hoveredItem === index && styles.dropdownItemHighlighted,
                  ]}
                  onPress={() => {
                    onSelect(option);
                    setIsOpen(false);
                    setSearchTerm(''); // Clear the search term after selection
                  }}
                  onMouseEnter={() => setHoveredItem(index)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <Text style={styles.dropdownItemText}>{option}</Text>
                </TouchableOpacity>
              ))
            ) : (
              <Text style={styles.noOptionsText}>No options found</Text>
            )}
          </ScrollView>
        </View>
      )}
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  dropdownContainer: {
    marginBottom: 15,
  },
  dropdown: {
    padding: 10,
    backgroundColor: '#E0F7FA',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#00796B',
  },
  dropdownText: {
    fontSize: 16,
    color: '#00796B',
  },
  dropdownListContainer: {
    borderRadius: 5,
    overflow: 'hidden',
    elevation: 3,
    maxHeight: 250,
  },
  dropdownList: {
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
  },
  dropdownItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  dropdownItemText: {
    fontSize: 16,
    color: '#333',
  },
  dropdownItemHighlighted: {
    backgroundColor: '#E0F7FA',
  },
  searchInput: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#F0F0F0',
    marginBottom: 10,
    marginTop: 5,
  },
  noOptionsText: {
    textAlign: 'center',
    color: '#888',
    padding: 10,
  },
});

export default CustomDropdown;
