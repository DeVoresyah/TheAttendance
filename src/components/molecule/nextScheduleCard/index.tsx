import {FC, memo} from 'react';
import {StyleProp, ViewStyle, View, Text} from 'react-native';

// Components
import ScheduleCard from '@components/atom/scheduleCard';
import ScheduleDate from '@components/atom/scheduleDate';
import ScheduleTime from '@components/atom/scheduleTime';

// Styles
import styles from './style';
import {apply} from '@theme';

export interface INextScheduleCard {
  schedule: Date;
  title: string;
  timeStart: Date;
  timeEnd: Date;
  cardStyle?: StyleProp<ViewStyle>;
}

const NextScheduleCard: FC<INextScheduleCard> = props => {
  const {schedule, title, timeStart, timeEnd, cardStyle} = props;

  return (
    <ScheduleCard style={[styles.container, cardStyle]}>
      <ScheduleDate date={schedule} />

      <View style={apply('mt-5')}>
        <Text style={styles.title}>{title}</Text>
        <ScheduleTime startTime={timeStart} endTime={timeEnd} />
      </View>
    </ScheduleCard>
  );
};

export default memo(NextScheduleCard);
