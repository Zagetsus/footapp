import styled from 'styled-components/native';
import {TextProps} from 'react-native';

interface IText extends TextProps {
  upper?: boolean;
}

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderTitle = styled.Text<IText>`
  font-size: 12px;
  line-height: 16px;
  color: ${props => props.theme.colors.textSecondary};
  text-transform: ${({upper}) => (upper ? 'uppercase' : 'none')};
`;

export const TableInfo = styled.View`
  flex-direction: row;
  align-items: center;
  width: 185px;
`;

export const TableColumn = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export const TableRow = styled(Header)`
  margin-top: 16px;
`;

export const TableFirstCell = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  max-width: 140px;
`;

export const TableText = styled.Text`
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  color: ${props => props.theme.colors.textPrimary};
`;

export const Area = styled.View`
  width: 24px;
  height: 24px;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.Image`
  width: 30px;
  height: 30px;
  margin: 0 6px;
`;

export const Press = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  flex-direction: row;
  align-items: center;
`;
