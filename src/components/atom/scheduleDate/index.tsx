import {FC, useMemo, memo} from 'react';
import {View, Text} from 'react-native';
import dayjs from 'dayjs';

// Styles
import styles from './style';

export interface IScheduleDate {
  date: Date;
}

const ScheduleDate: FC<IScheduleDate> = ({date}) => {
  /**
   * Formatted day
   */
  const formattedDay = useMemo(() => {
    return dayjs(date).format('dddd');
  }, [date]);

  /**
   * Formatted date
   */
  const formattedDate = useMemo(() => {
    return dayjs(date).format('DD MMM');
  }, [date]);

  return (
    <View>
      <Text style={styles.day}>{formattedDay}</Text>
      <Text style={styles.date}>{formattedDate}</Text>
    </View>
  );
};

export default memo(ScheduleDate);
