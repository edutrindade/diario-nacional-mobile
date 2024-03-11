import { useState } from 'react';
import { SafeAreaView, Text } from 'react-native';
import { useQuery } from 'react-query';
import Header from '../components/Header';
import { fetchNews } from '../services/newsService';
import NewsList from '../components/NewsList';
import Footer from '../components/Footer';

export default function Home() {
  const [from, setFrom] = useState<string | undefined>('');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const [page, setPage] = useState<number>(1);
  const itemsPerPage = 24;

  const { data, isLoading } = useQuery(
    ['news', { type: 'noticia', page, search: searchQuery, from: from }],
    () => fetchNews({ type: 'noticia', page, itemsPerPage, search: searchQuery, from: from }),
    {
      keepPreviousData: true,
      refetchOnWindowFocus: false,
    }
  );

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  if (isLoading) {
    return (
      <SafeAreaView className='flex-1 bg-white'>
        <Text>Carregando...</Text>
      </SafeAreaView>
    );
  }

  return (
    <>
      <Header onSearch={handleSearch} />

      <NewsList data={data?.items || []} from={from} />

      <Footer setFrom={setFrom} />
    </>
  );
}
