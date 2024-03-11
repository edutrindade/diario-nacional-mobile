import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Profile = () => {
  const [from, setFrom] = useState<string | undefined>('');

  const handleSearch = (query: string) => {
    console.log('Retirar');
  };

  return (
    <>
      <Header onSearch={handleSearch} back />
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'white',
        }}
      >
        <View style={{ borderRadius: 100, overflow: 'hidden', width: 120, height: 120 }}>
          <Image
            source={{ uri: 'https://avatars.githubusercontent.com/u/39175147?v=4' }}
            style={{ width: '100%', height: '100%' }}
          />
        </View>
        <Text style={{ fontSize: 24, fontWeight: 'bold', marginTop: 16 }}>Eduardo Trindade</Text>
        <Text style={{ color: 'gray' }}>Datas, MG</Text>
        <View style={{ marginTop: 16, padding: 16, backgroundColor: '#f0f0f0', width: '100%' }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 8 }}>Quem sou eu?</Text>
          <Text>Professor e Desenvolvedor FullStack ReactJs, React Native e Node.js</Text>
        </View>
        <View style={{ marginTop: 36 }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Principais Tecnologias</Text>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginTop: 8 }}>
            <View
              style={{
                backgroundColor: '#ccc',
                borderRadius: 20,
                paddingHorizontal: 16,
                paddingVertical: 8,
                marginRight: 8,
                marginBottom: 8,
              }}
            >
              <Text>React Native</Text>
            </View>
            <View
              style={{
                backgroundColor: '#ccc',
                borderRadius: 20,
                paddingHorizontal: 16,
                paddingVertical: 8,
                marginRight: 8,
                marginBottom: 8,
              }}
            >
              <Text>ReactJs</Text>
            </View>
            <View
              style={{
                backgroundColor: '#ccc',
                borderRadius: 20,
                paddingHorizontal: 16,
                paddingVertical: 8,
                marginRight: 8,
                marginBottom: 8,
              }}
            >
              <Text>NodeJs</Text>
            </View>
            <View
              style={{
                backgroundColor: '#ccc',
                borderRadius: 20,
                paddingHorizontal: 16,
                paddingVertical: 8,
                marginRight: 8,
                marginBottom: 8,
              }}
            >
              <Text>Firebase</Text>
            </View>
          </View>
        </View>
        <View style={{ marginTop: 16 }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Interesses</Text>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginTop: 8 }}>
            <View
              style={{
                backgroundColor: '#ccc',
                borderRadius: 20,
                paddingHorizontal: 16,
                paddingVertical: 8,
                marginRight: 8,
                marginBottom: 8,
              }}
            >
              <Text>Tecnologia</Text>
            </View>
            <View
              style={{
                backgroundColor: '#ccc',
                borderRadius: 20,
                paddingHorizontal: 16,
                paddingVertical: 8,
                marginRight: 8,
                marginBottom: 8,
              }}
            >
              <Text>Futebol</Text>
            </View>
            <View
              style={{
                backgroundColor: '#ccc',
                borderRadius: 20,
                paddingHorizontal: 16,
                paddingVertical: 8,
                marginRight: 8,
                marginBottom: 8,
              }}
            >
              <Text>Viagens</Text>
            </View>
            <View
              style={{
                backgroundColor: '#ccc',
                borderRadius: 20,
                paddingHorizontal: 16,
                paddingVertical: 8,
                marginRight: 8,
                marginBottom: 8,
              }}
            >
              <Text>Leitura</Text>
            </View>
          </View>
        </View>
      </View>
      <Footer setFrom={setFrom} />
    </>
  );
};

export default Profile;
