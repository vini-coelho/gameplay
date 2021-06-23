import React from "react";
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';
import { RectButtonProps } from "react-native-gesture-handler";

import * as S from './styles';
import { theme } from "../../global/styles/theme";

export function ButtonAdd({...rest}: RectButtonProps){
  return(
    <S.Container {...rest}>
      <Icon
        name="plus"
        color={theme.colors.heading}
        size={24}
      />
    </S.Container>
  );
}
