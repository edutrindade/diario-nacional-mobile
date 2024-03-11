import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../routes/Public/public.routes';

interface SidebarProps {
  onClose: () => void;
}

const Sidebar = ({ onClose }: SidebarProps) => {
  const navigation = useNavigation();

  const handleNavigation = (routeName: keyof RootStackParamList) => {
    navigation.navigate(routeName as never);
    onClose();
  };

  return (
    <View className='bg-white w-2/3 h-full flex flex-col justify-start items-start p-6 absolute top-0 left-0 z-50'>
      <TouchableOpacity className='self-end' onPress={onClose}>
        <Ionicons name='close-outline' size={24} color='black' />
      </TouchableOpacity>
      <TouchableOpacity
        className='flex flex-row items-center mt-6'
        onPress={() => handleNavigation('Home')}
      >
        <Ionicons name='menu' size={20} color='black' />
        <Text className='text-base ml-2'>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        className='flex flex-row items-center mt-4'
        onPress={() => handleNavigation('Profile')}
      >
        <Ionicons name='person-outline' size={20} color='black' />
        <Text className='text-base ml-2'>Perfil</Text>
      </TouchableOpacity>
      <TouchableOpacity
        className='flex flex-row items-center mt-4'
        onPress={() => console.log('Notifications')}
      >
        <Ionicons name='notifications-outline' size={20} color='gray' />
        <Text className='text-base ml-2 text-gray-500'>Notificações</Text>
      </TouchableOpacity>
      <TouchableOpacity
        className='flex flex-row items-center mt-4'
        onPress={() => console.log('Settings')}
      >
        <Ionicons name='settings-outline' size={20} color='gray' />
        <Text className='text-base ml-2 text-gray-500'>Configurações</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Sidebar;
