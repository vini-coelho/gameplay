import React, { ReactNode } from 'react';
import { Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { theme } from '../../global/styles/theme';

type Props = {
  children: ReactNode;
}

export function Background({ children }: Props){
  const { secondary80, secondary100 } = theme.colors;

  return (
    <LinearGradient
      style={{ height: Dimensions.get('window').height }}
      colors={[secondary80, secondary100]}
    >
      {children}
    </LinearGradient>
  );
}
