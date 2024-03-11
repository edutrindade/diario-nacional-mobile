import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import { theme } from '../theme';
import { useNavigation } from '@react-navigation/native';

LocaleConfig.locales['br'] = {
  monthNames: [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ],
  monthNamesShort: [
    'Jan.',
    'Fev.',
    'Mar.',
    'Abr.',
    'Mai.',
    'Jun.',
    'Jul.',
    'Ago.',
    'Set.',
    'Out.',
    'Nov.',
    'Dez.',
  ], // 'Jan
  dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
  dayNamesShort: ['Dom.', 'Seg.', 'Ter.', 'Qua.', 'Qui', 'Sex', 'Sab'],
  today: 'Hoje',
};

LocaleConfig.defaultLocale = 'br';

interface IFooterProps {
  setFrom: (from: string | undefined) => void;
}

const Footer = ({ setFrom }: IFooterProps) => {
  const [isCalendarVisible, setCalendarVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const navigation = useNavigation();

  const handleCalendarPress = () => {
    setCalendarVisible(true);
  };

  const handleDayPress = (day: any) => {
    const { dateString } = day;
    const [year, month, dayOfMonth] = dateString.split('-');
    const formattedDate = `${month}-${dayOfMonth}-${year}`;
    setCalendarVisible(false);
    navigation.navigate('Home');
    setFrom(formattedDate);
  };

  const handleHomePress = () => {
    navigation.navigate('Home');
    setFrom(undefined);
  };

  return (
    <>
      {isCalendarVisible && (
        <>
          <Text className='text-center text-lg font-bold p-4'>
            Deseja ver notícias a partir de quando?
          </Text>
          <Calendar
            maxDate={new Date().toDateString()}
            current={selectedDate}
            onDayPress={handleDayPress}
            theme={{
              backgroundColor: '#ffffff',
              calendarBackground: '#ffffff',
              textSectionTitleColor: '#b6c1cd',
              selectedDayBackgroundColor: '#00adf5',
              selectedDayTextColor: '#ffffff',
              todayTextColor: '#00adf5',
              dayTextColor: '#2d4150',
              textDisabledColor: '#b6c1cd',
            }}
          />
        </>
      )}

      <View className='flex-row justify-between items-center p-4 bg-white'>
        <TouchableOpacity onPress={handleHomePress}>
          <Ionicons name='home-outline' size={theme.size.xl} color={theme.colors.black} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Ionicons name='person-outline' size={theme.size.xl} color={theme.colors.black} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleCalendarPress}>
          <Ionicons name='calendar' size={theme.size.xl} color={theme.colors.black} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('Navegar para Notificações')}>
          <Ionicons name='notifications-outline' size={theme.size.xl} color={theme.colors.gray} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('Navegar para Configurações')}>
          <Ionicons name='settings-outline' size={theme.size.xl} color={theme.colors.gray} />
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Footer;
