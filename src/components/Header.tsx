import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, TextInput, TouchableOpacity, View, LayoutAnimation } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { theme } from '../theme';
import Sidebar from './Sidebar';

interface HeaderProps {
  onSearch: (searchQuery: string) => void;
  back?: boolean;
}

const Header = ({ onSearch, back = false }: HeaderProps) => {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchVisible, setSearchVisible] = useState(false);
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const handleSearch = () => {
    onSearch(searchQuery);
    setSearchQuery('');
    toggleSearch();
  };

  const toggleSearch = () => {
    setSearchVisible(!searchVisible);
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  };

  const handleToggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <>
      {sidebarVisible && <Sidebar onClose={() => setSidebarVisible(false)} />}
      <View className='flex-row justify-between items-center p-4 bg-white'>
        {back ? (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name='arrow-back' size={theme.size.xl} color={theme.colors.black} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={handleToggleSidebar}>
            <Ionicons name='menu' size={theme.size.xl} color={theme.colors.black} />
          </TouchableOpacity>
        )}
        <Text style={{ fontFamily: theme.fonts.Girassol_400, fontSize: 24, color: 'black' }}>
          Diário Nacional
        </Text>
        {searchVisible && (
          <View className='flex-row items-center'>
            <TextInput
              placeholder='Buscar...'
              className='bg-white border border-1 border-gray-500 rounded-lg px-2 py-1 w-36'
              value={searchQuery}
              onChangeText={setSearchQuery}
              onSubmitEditing={handleSearch}
            />
          </View>
        )}
        <TouchableOpacity onPress={toggleSearch}>
          <Ionicons name='search' size={theme.size.xl} color={theme.colors.black} />
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Header;
