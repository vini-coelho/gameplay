import React from 'react';

import * as S from './styles';

export function GuildIcon(){
  const uri = "https://github.com/vini-coelho.png";

  return(
    <S.Image 
      source={{ uri }}
      resizeMode='cover'
    />
  );
}