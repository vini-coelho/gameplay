import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import DiscordImg from '../../assets/discord.png';
import * as S from './styles';

type Props = TouchableOpacityProps & {
  title: string;
}

export function ButtonIcon ({ title } : Props){
  return (
    <S.Container>
      <S.IconWrapper>
        <S.Icon source={DiscordImg}/>
      </S.IconWrapper>

      <S.Title>{title}</S.Title>
    </S.Container>
  );
}
