import React from 'react';
import { useState } from 'react';
import { FlatList } from 'react-native';

import { ButtonAdd } from '../../components/ButtonAdd';
import { CategorySelect } from '../../components/CategorySelect';
import { ListHeader } from '../../components/ListHeader';
import { Profile } from '../../components/Profile';

import * as S from './styles';

export function Home(){
  const [ category, setCategory ] = useState('');

  function handleCategorySelect(categoryId: string){
    categoryId === category ? setCategory('') : setCategory(categoryId);
  }

  return (
    <S.Container>
      <S.Header>
        <Profile />
        <ButtonAdd />
      </S.Header>

      <S.Wrapper>
        <CategorySelect
          categorySelected={category}
          setCategory={handleCategorySelect}
        />
        <S.Content>
          <ListHeader
            title='Partidas agendadas'
            subtitle='Total 6'
          />
        </S.Content>
      </S.Wrapper>
    </S.Container>
  );
}
