import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';
import { theme } from '../../global/styles/theme';

type CheckedProps = {
  checked: boolean;
}

export const CardContainer = styled(LinearGradient)<CheckedProps>`
  width: 104px;
  height: 120px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  margin-right: 8px;
  opacity: ${ ({ checked }) => checked ? 1 : 0.4 };
`;

export const Content = styled.View`
  width: 100px;
  height: 116px;
  background-color: ${theme.colors.secondary40};
  border-radius: 8px;
  justify-content: space-between;
  align-items: center;
  padding: 7px 0;
`;

export const CheckButton = styled.View<CheckedProps>`
  width: ${({ checked }) => checked ? 10 : 12}px;
  height: ${({ checked }) => checked ? 10 : 12}px;
  background-color: ${({ checked }) => checked ? theme.colors.primary : theme.colors.secondary100};
  align-self: flex-end;
  margin-right: 7px;
  border-color: ${theme.colors.secondary50};
  border-width: ${({ checked }) => checked ? 0 : 2}px;
  border-radius: 3px;
`;

export const Title = styled.Text`
  font-family: ${theme.fonts.title500};
  color: ${theme.colors.heading};
  font-size: 15px;
`;
