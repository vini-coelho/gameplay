import React from 'react';

import { Category } from '../Category';
import { categories } from '../../utils/categories';

import * as S from './styles';

type Props = {
  categorySelected: string;
  setCategory: (categoryId: string) => void;
}

export function CategorySelect({ categorySelected, setCategory }: Props){
  return (
    <S.Container>
      {
        categories.map(category => (
          <Category
            key={category.id}
            title={category.title}
            icon={category.icon}
            checked={category.id === categorySelected}
            onPress={() => setCategory(category.id)}
          />
        ))
      }
    </S.Container>
  );
}
