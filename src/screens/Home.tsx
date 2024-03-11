import { useState } from 'react';
import { SafeAreaView, Text, View, Platform, TouchableOpacity, Image } from 'react-native';
import { theme } from '../theme';
import { useQuery } from 'react-query';
import Header from '../components/Header';
import { fetchNews } from '../services/newsService';
import { INews } from '../interfaces/INews';
import NewsList from '../components/NewsList';
import Footer from '../components/Footer';

export default function Home() {
  const [news, setNews] = useState<INews[]>([]);
  const [from, setFrom] = useState<string | undefined>('');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const [page, setPage] = useState<number>(1);
  const itemsPerPage = 24;

  const { data, isLoading, isError, error, refetch } = useQuery(
    ['news', { type: 'noticia', page, search: searchQuery, from: from }],
    () => fetchNews({ type: 'noticia', page, itemsPerPage, search: searchQuery, from: from }),
    {
      keepPreviousData: true,
      refetchOnWindowFocus: false,
    }
  );

  const handleNewsClick = (newsItem: INews) => {
    console.log('Clicou na notícia', newsItem);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  console.log('data', data);

  if (isLoading) {
    return (
      <SafeAreaView className='flex-1 bg-white'>
        <Text>Carregando...</Text>
      </SafeAreaView>
    );
  }

  console.log('data.items.length', data?.items.length);

  return (
    <>
      <Header onSearch={handleSearch} />

      <NewsList data={data?.items || []} from={from} />

      <Footer setFrom={setFrom} />
    </>
  );
}
