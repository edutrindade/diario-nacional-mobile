import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View, LayoutAnimation } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { theme } from '../theme';

const Header = ({ onSearch }: { onSearch: (searchQuery: string) => void }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchVisible, setSearchVisible] = useState(false);

  const handleSearch = () => {
    onSearch(searchQuery);
    setSearchQuery('');
    toggleSearch();
  };

  const toggleSearch = () => {
    setSearchVisible(!searchVisible);
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  };

  return (
    <View className='flex-row justify-between items-center p-4 bg-white'>
      <TouchableOpacity onPress={() => console.log('Abrir Menu')}>
        <Ionicons name='menu' size={theme.size.xl} color={theme.colors.black} />
      </TouchableOpacity>
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
  );
};

export default Header;
