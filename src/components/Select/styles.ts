import styled from 'styled-components/native';
import {TextProps} from 'react-native';

interface IProps extends TextProps{
  active: boolean;
}

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 48px;
  padding: 14px 16px;
  border-radius: 16px;
  border-width: 1px;
  border-color: ${props => props.theme.colors.grey};
`;

export const IconArea = styled.View`
  width: 24px;
  height: 24px;
  justify-content: center;
`;

export const SelectText = styled.Text`
  font-size: 16px;
  line-height: 19px;
  color: ${props => props.theme.colors.textSecondary};
`;

export const ActionSheetItem = styled.View`
  width: 100%;
  height: 40px;
  align-items: center;
  justify-content: center;
`;

export const ActionSheetText = styled.Text<IProps>`
  font-size: 14px;
  text-align: center;
  margin-bottom: 5px;
  color: ${({active, theme}) =>
    active ? theme.colors.secondary : theme.colors.textPrimary};
`;
