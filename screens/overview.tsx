import React, { useState } from 'react';
import { View, Text, SectionList, StyleSheet, TouchableOpacity, Modal, Button, FlatList } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { DATA } from '../_mocks_/data'; // Adjust the path based on your folder structure

const DataStructuresScreen = ({ navigation }) => {
  const [isAlgorithmView, setIsAlgorithmView] = useState(false);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("Data Structures");

  // State for controlling modal visibility
  const [isModalVisible, setModalVisible] = useState(false);

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

  // Show modal when locked question is pressed
  const handleNavigate = (item) => {
    if (item.locked) {
      setModalVisible(true); // Show the modal if the item is locked
    } else {
      navigation.navigate('Details', { title: item.path });
    }
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleNavigate(item)}>
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

  // List of premium benefits
  const premiumBenefits = [
    'Access to all locked questions',
    'Exclusive solutions and explanations',
    'AI-powered code analysis and feedback',
    'Priority support from mentors',
    'Early access to new features',
  ];

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

      {/* Modal for subscription */}
      <Modal
        visible={isModalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Premium Content</Text>
            <Text style={styles.modalMessage}>
              This question is locked. Subscribe to the premium membership for Rs 3000 per year to unlock this content.
            </Text>

            {/* Premium Benefits */}
            <Text style={styles.benefitsTitle}>Premium Membership Benefits:</Text>
            <FlatList
              data={premiumBenefits}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <View style={styles.benefitItem}>
                  <Text style={styles.benefitText}>• {item}</Text>
                </View>
              )}
            />

            <View style={styles.modalButtonContainer}>
              <Button title="Subscribe Now" onPress={() => console.log('Subscription Flow')} />
              <Button title="Cancel" onPress={() => setModalVisible(false)} />
            </View>
          </View>
        </View>
      </Modal>

      <View style={styles.bottomSpacing} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
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
    marginBottom: 5
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
    width: 15,
    height: 15,
    borderRadius: 12,
    marginRight: 15,
  },
  title: {
    fontSize: 16,
    fontWeight: '400',
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
  // Modal styles
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    width: 300,
    padding: 20,
    backgroundColor: '#FFF',
    borderRadius: 10,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 10,
    textAlign: 'center',
  },
  modalMessage: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10,
  },
  benefitsTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 10,
    textAlign: 'center',
  },
  benefitItem: {
    marginBottom: 5,
  },
  benefitText: {
    fontSize: 14,
    textAlign: 'left',
    color: '#555',
  },
  modalButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
});

export default DataStructuresScreen;
