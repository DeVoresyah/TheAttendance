import {FC, useCallback, memo} from 'react';
import {View, Text} from 'react-native';
import DashedLine from 'react-native-dashed-line';
import {TodaySchedule} from '@models/schedule/todaySchedule';

// Components
import ScheduleCard from '@components/atom/scheduleCard';
import ScheduleTime from '@components/atom/scheduleTime';
import Clock from '@components/molecule/clock';

// Styles
import styles from './style';
import {apply} from '@theme';

export interface ITodaySchedule extends TodaySchedule {
  onPress?: (data: TodaySchedule) => void;
}

const TodayScheduleCard: FC<ITodaySchedule> = props => {
  const {
    placeId,
    id,
    title,
    timeStart,
    timeEnd,
    clockIn,
    clockOut,
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
        clockIn,
        clockOut,
      }),
    [placeId, id, title, timeStart, timeEnd, clockIn, clockOut, onPress],
  );

  return (
    <ScheduleCard onPress={onScheduleDetail} style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <ScheduleTime startTime={timeStart} endTime={timeEnd} />

      <View style={styles.footer}>
        <Clock type="in" time={clockIn} />
        <DashedLine
          dashLength={5}
          dashThickness={2}
          dashGap={5}
          dashColor={apply('silver-400')}
          style={apply('flex mb-3 mx-2')}
        />
        <Clock type="out" time={clockOut} />
      </View>
    </ScheduleCard>
  );
};

export default memo(TodayScheduleCard);
