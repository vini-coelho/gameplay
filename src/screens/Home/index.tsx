import React from 'react';
import { ButtonAdd } from '../../components/ButtonAdd';
import { Profile } from '../../components/Profile';

import * as S from './styles';

export function Home(){
  return (
    <S.Container>
      <S.Header>
        <Profile />
        <ButtonAdd />
      </S.Header>
    </S.Container>
  );
}
