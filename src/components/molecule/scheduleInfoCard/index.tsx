import {FC, useCallback, useMemo, memo} from 'react';
import {Text} from 'react-native';
import dayjs from 'dayjs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// Components
import ScheduleCard from '@components/atom/scheduleCard';

// Styles
import styles from './style';
import {apply} from '@theme';

enum ScheduleInfoType {
  'time' = 'time',
  'clock-in' = 'clock-in',
  'clock-out' = 'clock-out',
}

export interface IScheduleInfoCard {
  type: keyof typeof ScheduleInfoType;
  timeStart?: Date | number;
  timeEnd?: Date | number;
  clockIn?: Date | number | null;
  clockOut?: Date | number | null;
}

const ScheduleInfoCard: FC<IScheduleInfoCard> = props => {
  const {type, timeStart, timeEnd, clockIn, clockOut} = props;

  /**
   * Get icon based on type
   */
  const renderIcon = useMemo(() => {
    if (type === 'time') {
      return (
        <Icon name="clock-time-four-outline" size={25} color={apply('black')} />
      );
    }

    if (type === 'clock-in' || type === 'clock-out') {
      return <Icon name="qrcode-scan" size={25} color={apply('black')} />;
    }

    return null;
  }, [type]);

  const formatTime = useCallback((time, useSpace = false) => {
    return dayjs(new Date(time)).format(useSpace ? 'HH : mm' : 'HH:mm');
  }, []);

  /**
   * Render title based on type
   */
  const renderTitle = useMemo(() => {
    if (type === 'time') {
      return `${formatTime(timeStart)} - ${formatTime(timeEnd)}`;
    }

    if (type === 'clock-in') {
      return clockIn ? formatTime(clockIn, true) : '-- : --';
    }

    if (type === 'clock-out') {
      return clockOut ? formatTime(clockOut, true) : '-- : --';
    }

    return '';
  }, [type, timeStart, timeEnd, clockIn, clockOut]);

  return (
    <ScheduleCard style={styles.card}>
      {renderIcon}

      <Text style={styles.title}>{renderTitle}</Text>
    </ScheduleCard>
  );
};

export default memo(ScheduleInfoCard);
