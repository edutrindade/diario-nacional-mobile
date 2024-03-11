import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView, Text, View, Linking, TouchableOpacity, Image, Alert } from 'react-native';
import { theme } from '../theme';
import { Ionicons } from '@expo/vector-icons';
import Header from '../components/Header';
import { fetchNews } from '../services/newsService';
import { INews } from '../interfaces/INews';
import Footer from '../components/Footer';

export default function Details({ route }: any) {
  const { newsItem } = route.params as { newsItem: INews };
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [from, setFrom] = useState<string | undefined>('');

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleReadMore = () => {
    Linking.openURL(newsItem.link);
  };

  const handleWhatsAppPress = async () => {
    try {
      await Linking.openURL(`whatsapp://send?text=${newsItem.titulo} - ${newsItem.link}`);
    } catch (error) {
      Alert.alert(
        'Erro',
        'Não foi possível abrir o WhatsApp. Certifique-se de que o aplicativo esteja instalado no seu dispositivo.',
        [{ text: 'OK' }]
      );
    }
  };

  const editorias = (editoria: string) => {
    if (editoria.includes('sociais;censo2020')) return 'Estatísticas Sociais e Censo 2020';
    if (editoria.includes('sociais')) return 'Estatísticas Sociais';
    if (editoria.includes('economicas')) return 'Estatísticas Econômicas';
    if (editoria.includes('censo2020')) return 'Censo 2020';
    if (editoria.includes('geociencia')) return 'Geociências';
    if (editoria.includes('revista')) return 'Revista Retratos';
    if (editoria.includes('seriesespeciais')) return 'Séries Especiais';
    return 'IBGE';
  };

  return (
    <>
      <Header onSearch={handleSearch} back />

      <View className='relative w-full h-64'>
        <Image
          source={{
            uri: `https://agenciadenoticias.ibge.gov.br/${
              JSON.parse(newsItem.imagens).image_fulltext
            }`,
          }}
          className='w-full h-full object-cover'
        />
      </View>
      <View className='relative bottom-0 left-0 right-0 bg-black bg-opacity-50 px-4 py-2'>
        <Text className='text-white font-bold text-xl'>{newsItem.titulo}</Text>
      </View>

      <View className='flex-1 flex-column  bg-white py-1'>
        <Text className='font-bold px-4 py-1 text-md'>
          Editoria:
          <Text className='text-blue-500'> {editorias(newsItem.editorias)}</Text>
        </Text>

        <Text className='text-gray-500 text-xs px-4'>Atualizado em {newsItem.data_publicacao}</Text>

        <TouchableOpacity
          className='flex-row justify-center items-center absolute right-4 top-3'
          onPress={handleWhatsAppPress}
        >
          <View
            className='flex-row justify-center w-8 h-8 items-center bg-green-500'
            style={{ borderRadius: 16 }}
          >
            <Ionicons name='logo-whatsapp' size={theme.size.lg} color={theme.colors.white} />
          </View>
        </TouchableOpacity>

        <Text className='p-4'>{newsItem.introducao}</Text>
        <TouchableOpacity onPress={handleReadMore}>
          <Text className='text-blue-500  text-center'>Ler mais...</Text>
        </TouchableOpacity>
      </View>

      <Footer setFrom={setFrom} />
    </>
  );
}
