import {ReactNode, FC, memo} from 'react';
import {
  TouchableNativeFeedback,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
  Platform,
  View,
} from 'react-native';

// Styles
import {apply} from '@theme';

export interface IBaseButton {
  style?: StyleProp<ViewStyle>;
  radius?: number;
  children?: ReactNode;
}

const BaseButton: FC<IBaseButton> = props => {
  const {style, radius = 12} = props;

  return Platform.OS === 'ios' ? (
    <TouchableOpacity activeOpacity={0.9} {...props}>
      {props.children}
    </TouchableOpacity>
  ) : (
    <TouchableNativeFeedback
      background={TouchableNativeFeedback.Ripple(
        apply('white color-opacity-25'),
        false,
        radius,
      )}
      {...props}>
      <View style={style}>{props.children}</View>
    </TouchableNativeFeedback>
  );
};

export default memo(BaseButton);
