import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import IllustrationImg from '../../assets/illustration.png';
import { ButtonIcon } from '../../components/ButtonIcon';

import * as S from './styles';

export function SignIn() {
  const navigation = useNavigation();

  function handleSignIn(){
    navigation.navigate("Home");
  }

  return(
    <S.Container>
      <S.Image
        source={IllustrationImg}
        resizeMode='stretch'
      />
      <S.Content>
        <S.Title>
          Conecte-se {'\n'}
          e organize suas {'\n'}
          jogatinas
        </S.Title>
        <S.Subtitle>
          Crie grupos para jogar seus games {'\n'}
          favoritos com seus amigos
        </S.Subtitle>
        <ButtonIcon
          title='Entrar com Discord'
          activeOpacity={0.7}
          onPress={handleSignIn}
        />
      </S.Content>
    </S.Container>
  );
}
