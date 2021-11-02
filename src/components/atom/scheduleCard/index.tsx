import {FC, memo} from 'react';
import {Pressable, PressableProps} from 'react-native';

// Styles
import styles from './style';

const ScheduleCard: FC<PressableProps> = props => {
  return (
    <Pressable {...props} style={[styles.container, props.style]}>
      {props.children}
    </Pressable>
  );
};

export default memo(ScheduleCard);
