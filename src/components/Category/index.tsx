import React from "react";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { SvgProps } from "react-native-svg";

import { theme } from "../../global/styles/theme";
import * as S from './styles';

type Props = RectButtonProps & {
  title: string;
  icon: React.FC<SvgProps>;
  checked?: boolean;
}

export function Category({
  title,
  icon: Icon,
  checked = false,
  ...rest
}: Props){
  const { secondary50, secondary70 } = theme.colors;

  return(
    <RectButton {...rest}>
      <S.CardContainer
        checked={checked}
        colors={[ secondary50, secondary70 ]}
      >
        <S.Content>
          <S.CheckButton checked={checked}/>

          <Icon width={48} height={48}/>

          <S.Title>{title}</S.Title>
        </S.Content>
      </S.CardContainer>
    </RectButton>
  );
}
