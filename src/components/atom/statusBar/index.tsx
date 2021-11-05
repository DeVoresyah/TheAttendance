import {FC, memo} from 'react';
import {
  StatusBar as AppBar,
  StatusBarProps,
  Platform,
  View,
} from 'react-native';

export interface IStatusBar extends StatusBarProps {
  header?: boolean;
}

const StatusBar: FC<IStatusBar> = props => {
  const {backgroundColor, header = true} = props;

  return Platform.OS === 'ios' ? (
    <View style={{height: header ? 0 : 44, backgroundColor}}>
      <AppBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  ) : (
    <AppBar {...props} />
  );
};

export default memo(StatusBar);
