import React, {useRef} from "react";
import {ActionSheetCustom as ActionSheet} from 'react-native-actionsheet';
import {
  ActionSheetItem,
  ActionSheetText,
  Container,
  IconArea,
  SelectText,
} from './styles';
import Arrow from '../../assets/svg/arrow-down.svg';

interface Props {
  icon: JSX.Element;
  active: any;
  setActive: any;
  label: string;
  name: string;
  options: any[];
}

const Select: React.FC<Props> = ({
  icon,
  active,
  setActive,
  label,
  name,
  options,
}) => {
  const actionSheetRef = useRef<any>(null);

  const handleOrder = () => {
    actionSheetRef.current.show();
    console.log(active);
  };

  const findIndexOptions = () => {
    const index = options.indexOf(active);

    return index !== -1 ? index : null;
  };

  const handleAction = (index: number) => {
    setActive(options[index]);
  };

  return (
    <>
      <Container onPress={handleOrder}>
        <IconArea>{icon}</IconArea>
        <SelectText>{active[name] || label}</SelectText>
        <IconArea>
          <Arrow />
        </IconArea>
      </Container>
      <ActionSheet
        title={label}
        ref={actionSheetRef}
        onPress={handleAction}
        options={options.map((option, index) => (
          <ActionSheetItem>
            <ActionSheetText active={index === findIndexOptions()}>
              {option[name]}
            </ActionSheetText>
          </ActionSheetItem>
        ))}
      />
    </>
  );
};

export default Select;
