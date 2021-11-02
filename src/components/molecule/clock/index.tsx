import {FC, useMemo, memo} from 'react';
import {StyleProp, ViewStyle, View, Text} from 'react-native';
import dayjs from 'dayjs';

// Components
import Badge from '@components/atom/badge';

// Styles
import styles from './style';
import {apply} from '@theme';

enum ClockType {
  'in' = 'in',
  'out' = 'out',
}

export interface IClock {
  type: keyof typeof ClockType;
  time?: Date | null;
  containerStyle?: StyleProp<ViewStyle>;
}

const Clock: FC<IClock> = props => {
  const {containerStyle, type, time} = props;

  /**
   * Get clock title based on type
   */
  const clockTitle = useMemo(() => {
    return type === 'in' ? 'clock in' : 'clock out';
  }, [type]);

  /**
   * Get formatted time based on date given
   */
  const formattedTime = useMemo(() => {
    if (time !== undefined && time !== null) {
      return dayjs(time).format('HH:MM');
    } else {
      return '-- : --';
    }
  }, [time]);

  return (
    <View style={[styles.container, containerStyle]}>
      <Badge
        type={type === 'in' ? 'secondary' : 'primary'}
        size="large"
        title={clockTitle}
        containerStyle={apply('mb-2')}
      />
      <Text style={styles.time}>{formattedTime}</Text>
    </View>
  );
};

export default memo(Clock);
