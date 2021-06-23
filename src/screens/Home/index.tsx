import React from 'react';
import { Profile } from '../../components/Profile';

import * as S from './styles';

export function Home(){
  return (
    <S.Container>
      <S.Header>
        <Profile />
      </S.Header>
    </S.Container>
  );
}
