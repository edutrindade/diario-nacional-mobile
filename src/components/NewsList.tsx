import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { INews } from '../interfaces/INews';
import { theme } from '../theme';

interface NewsListProps {
  data: INews[];
  from?: string;
}

const NewsList = ({ data, from }: NewsListProps) => {
  const renderNewsItem = ({ item }: { item: INews }) => (
    <TouchableOpacity onPress={() => handleNewsClick(item)}>
      <View className='flex-row p-3'>
        <Image
          source={{
            uri: `https://agenciadenoticias.ibge.gov.br/${JSON.parse(item.imagens).image_fulltext}`,
          }}
          style={{ width: 150, height: 100, marginRight: 12 }}
        />
        <View className='flex-1'>
          <Text style={{ fontSize: theme.size.md, fontFamily: theme.fonts.Roboto_700 }}>
            {item.titulo}
          </Text>
          <Text className='text-gray-400'>{item.data_publicacao}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  const calculateNumOfDays = (date: string) => {
    console.log('date', date);
    const today = new Date();
    const [month, day, year] = date.split('-');
    const newsDate = new Date(`${year}-${month}-${day}`);
    const difference = today.getTime() - newsDate.getTime();
    const days = Math.ceil(difference / (1000 * 3600 * 24));
    return days;
  };

  const handleNewsClick = (newsItem: INews) => {
    console.log('Clicou na notícia', newsItem);
  };

  const newsData = data.slice(1);

  return (
    <>
      {from !== '' && from && (
        <View className='flex-row items-center bg-black py-1'>
          <Ionicons
            name='information-circle-outline'
            size={theme.size.mdl}
            color={'rgb(254 240 138)'}
          />
          <Text className='px-1 text-sm text-yellow-200'>
            Notícias dos últimos {calculateNumOfDays(from)} dias
          </Text>
        </View>
      )}
      <FlatList
        data={newsData}
        ListHeaderComponent={<NewsItem item={data[0]} />}
        renderItem={renderNewsItem}
        keyExtractor={(item) => item.id.toString()}
        ItemSeparatorComponent={() => <View className='bg-gray-200 mx-2 ' style={{ height: 1 }} />}
      />
    </>
  );
};

const NewsItem = ({ item }: { item: INews }) => (
  <TouchableOpacity>
    <View className='relative w-full h-64'>
      <Image
        source={{
          uri: `https://agenciadenoticias.ibge.gov.br/${JSON.parse(item.imagens).image_fulltext}`,
        }}
        className='w-full h-full object-cover'
      />
    </View>
    <View className='relative bottom-0 left-0 right-0 bg-black bg-opacity-50 px-4 py-2'>
      <Text className='text-white font-bold text-xl'>{item.titulo}</Text>
    </View>
  </TouchableOpacity>
);

export default NewsList;
