import {FC, useMemo, memo} from 'react';
import {StyleProp, ViewStyle, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import dayjs from 'dayjs';

// Styles
import styles from './style';
import {apply} from '@theme';

export interface IScheduleTime {
  containerStyle?: StyleProp<ViewStyle>;
  startTime: Date;
  endTime: Date;
}

const ScheduleTime: FC<IScheduleTime> = props => {
  const {containerStyle, startTime, endTime} = props;

  /**
   * Format start time
   */
  const formattedStartTime = useMemo(() => {
    return dayjs(startTime).format('HH:MM');
  }, [startTime]);

  /**
   * Format start time
   */
  const formattedEndTime = useMemo(() => {
    return dayjs(endTime).format('HH:MM');
  }, [endTime]);

  return (
    <View style={[styles.container, containerStyle]}>
      <Icon name="clock-time-four-outline" size={20} color={apply('black')} />
      <Text style={styles.label}>
        {formattedStartTime} - {formattedEndTime}
      </Text>
    </View>
  );
};

export default memo(ScheduleTime);
