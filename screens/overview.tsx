import React, { useState } from 'react';
import { View, Text, SectionList, StyleSheet, TouchableOpacity } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { DATA } from '../_mocks_/data'; // Adjust the path based on your folder structure

const DataStructuresScreen = ({ navigation }) => {
  const [isAlgorithmView, setIsAlgorithmView] = useState(false);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("Data Structures");

  const items = [
    { label: 'Data Structures', value: 'Data Structures' },
    { label: 'Algorithms', value: 'Algorithms' },
    { label: 'System Design', value: 'System Design' },

    
  ];

  // Set currentData based on selected view
  const currentData = 
    value === "Algorithms" ? DATA.algorithms :
    value === "System Design" ? DATA.systemDesign :
    DATA.dataStructures;


  const handleNavigate = (path) => {
    navigation.navigate('Details', { title: path });
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleNavigate(item.path)}>
      <View style={styles.item}>
        <View style={[styles.circle, { backgroundColor: item.color }]} />
        <Text style={styles.title}>{item.name}</Text>
        {item.locked && <Text style={styles.lockIcon}>🔒</Text>}
      </View>
    </TouchableOpacity>
  );

  const handleDropdownChange = (item) => {
    if (item) {
      setValue(item.value);
      setIsAlgorithmView(item.value === "Algorithms");
      setOpen(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          placeholder="Select View"
          style={styles.dropdown}
          dropDownContainerStyle={styles.dropdownContainer}
          onSelectItem={handleDropdownChange}
          onOpen={() => setOpen(true)}
          onClose={() => setOpen(false)}
        />
      </View>

      <SectionList
        sections={currentData}
        keyExtractor={(item, index) => item.name + index}
        renderItem={renderItem}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.sectionHeader}>{title}</Text>
        )}
      />

      <View style={styles.bottomSpacing} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
    // paddingBottom: 20,
  },
  headerContainer: {
    padding: 15,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    zIndex: 10,
  },
  dropdown: {
    height: 40,
    borderColor: '#E0E0E0',
    zIndex: 20,
  },
  dropdownContainer: {
    backgroundColor: '#FFFFFF',
    borderColor: '#E0E0E0',
    zIndex: 30,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    backgroundColor: '#F1F1F1',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
  },
  item: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  circle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    marginRight: 15,
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
    flex: 1,
  },
  lockIcon: {
    fontSize: 18,
    color: '#B0B0B0',
  },
  bottomSpacing: {
    // height: 20,
  },
});

export default DataStructuresScreen;
