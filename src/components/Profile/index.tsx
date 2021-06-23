import React from 'react';
import { Avatar } from '../Avatar';

import * as S from './styles';

export function Profile(){
  return(
    <S.Container>
      <Avatar urlImage='https://github.com/vini-coelho.png'/>
      <S.VerticalWrapper>
        <S.HorizontalWrapper>
          <S.Greeting>Olá,</S.Greeting>
          <S.Username>Vinicius</S.Username>
        </S.HorizontalWrapper>
        <S.Message>Hoje é dia de vitória</S.Message>
      </S.VerticalWrapper>
    </S.Container>
  );
}
