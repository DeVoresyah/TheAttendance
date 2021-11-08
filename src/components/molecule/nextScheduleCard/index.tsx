import {FC, memo, useCallback} from 'react';
import {StyleProp, ViewStyle, View, Text} from 'react-native';
import {NextSchedule} from '@models/schedule/nextSchedule';
import {TodaySchedule} from '@models/schedule/todaySchedule';

// Components
import ScheduleCard from '@components/atom/scheduleCard';
import ScheduleDate from '@components/atom/scheduleDate';
import ScheduleTime from '@components/atom/scheduleTime';

// Styles
import styles from './style';
import {apply} from '@theme';

export interface INextScheduleCard extends NextSchedule {
  onPress?: (data: TodaySchedule) => void;
  cardStyle?: StyleProp<ViewStyle>;
}

const NextScheduleCard: FC<INextScheduleCard> = props => {
  const {
    placeId,
    id,
    schedule,
    title,
    timeStart,
    timeEnd,
    cardStyle,
    onPress,
  } = props;

  /**
   * On Card Press
   */
  const onScheduleDetail = useCallback(
    () =>
      onPress({
        placeId,
        id,
        title,
        timeStart,
        timeEnd,
        clockIn: null,
        clockOut: null,
      }),
    [placeId, id, schedule, title, timeStart, timeEnd, onPress],
  );

  return (
    <ScheduleCard
      onPress={onScheduleDetail}
      style={[styles.container, cardStyle]}>
      <ScheduleDate date={schedule} />

      <View style={apply('mt-5')}>
        <Text style={styles.title}>{title}</Text>
        <ScheduleTime startTime={timeStart} endTime={timeEnd} />
      </View>
    </ScheduleCard>
  );
};

export default memo(NextScheduleCard);
