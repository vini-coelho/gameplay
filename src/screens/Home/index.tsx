import React from 'react';
import { useState } from 'react';
import { FlatList, Text } from 'react-native';
import { Appointment } from '../../components/Appointment';

import { ButtonAdd } from '../../components/ButtonAdd';
import { CategorySelect } from '../../components/CategorySelect';
import { ListDivider } from '../../components/ListDivider';
import { ListHeader } from '../../components/ListHeader';
import { Profile } from '../../components/Profile';

import * as S from './styles';

export function Home(){
  const [ category, setCategory ] = useState('');

  const appointments = [
    {
      id: '1',
      guild: {
        id: '1',
        name: 'Lendários',
        icon: null,
        owner: true
      },
      category: '1',
      date: '22/06 às 20:40h',
      description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
    },
    {
      id: '2',
      guild: {
        id: '1',
        name: 'Lendários',
        icon: null,
        owner: true
      },
      category: '1',
      date: '22/06 às 20:40h',
      description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
    },
  ];

  function handleCategorySelect(categoryId: string){
    categoryId === category ? setCategory('') : setCategory(categoryId);
  }

  return (
    <S.Container>
      <S.Header>
        <Profile />
        <ButtonAdd />
      </S.Header>
      
      <CategorySelect
        categorySelected={category}
        setCategory={handleCategorySelect}
      />
      <S.Content>
        <ListHeader
          title='Partidas agendadas'
          subtitle='Total 6'
        />

        <FlatList
          data={appointments}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          style={{ marginLeft: 24, marginTop: 24 }}
          ItemSeparatorComponent={() => <ListDivider />}
          renderItem={({ item }) => (
            <Appointment data={item}/>
          )}
        />
      </S.Content>
    </S.Container>
  );
}
