import React from 'react';

import { theme } from '../../global/styles/theme';
import * as S from './styles';

type Props = {
  urlImage: string;
}

import a from '../../assets/illustration.png'
export function Avatar({ urlImage }: Props){
  const { secondary50, secondary70 } = theme.colors;

  return(
    <S.Container
      colors={[ secondary50, secondary70 ]}
    >
      <S.Avatar source={{ uri: urlImage }}/>
    </S.Container>
  );
}
