import {FC, useMemo, memo} from 'react';
import {View, Text} from 'react-native';
import dayjs from 'dayjs';
import calendar from 'dayjs/plugin/calendar';
import {calendarConfig} from '@utils/dateUtils';

// Components
import ScheduleCard from '@components/atom/scheduleCard';
import ScheduleTime from '@components/atom/scheduleTime';
import Badge from '@components/atom/badge';

// Styles
import styles from './style';
import {apply} from '@theme';

export interface IUpcomingScheduleCard {
  title: string;
  schedule: Date;
  timeStart: Date;
  timeEnd: Date;
}

const UpcomingScheduleCard: FC<IUpcomingScheduleCard> = props => {
  const {title, schedule, timeStart, timeEnd} = props;

  /**
   * Check if the schedule today or not.
   */
  const isToday = useMemo(() => {
    dayjs.extend(calendar);

    const formattedSchedule = dayjs().calendar(dayjs(schedule), calendarConfig);

    return formattedSchedule === 'Today' ? (
      <Badge type="primary" title="Today" size="medium" />
    ) : null;
  }, [schedule]);

  return (
    <ScheduleCard>
      <Text style={styles.title}>{title}</Text>

      <View style={styles.footer}>
        <ScheduleTime
          startTime={timeStart}
          endTime={timeEnd}
          containerStyle={apply('mr-4')}
        />
        {isToday}
      </View>
    </ScheduleCard>
  );
};

export default memo(UpcomingScheduleCard);
