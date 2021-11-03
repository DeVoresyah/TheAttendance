import {FC, memo} from 'react';
import {View, Text} from 'react-native';
import DashedLine from 'react-native-dashed-line';

// Components
import ScheduleCard from '@components/atom/scheduleCard';
import ScheduleTime from '@components/atom/scheduleTime';
import Clock from '@components/molecule/clock';

// Styles
import styles from './style';
import {apply} from '@theme';

export interface ITodayScheduleCard {
  title: string;
  timeStart: Date;
  timeEnd: Date;
  clockIn?: Date | null;
  clockOut?: Date | null;
}

const TodayScheduleCard: FC<ITodayScheduleCard> = props => {
  const {title, timeStart, timeEnd, clockIn, clockOut} = props;

  return (
    <ScheduleCard style={styles.container}>
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
