import * as React from 'react';
import {storiesOf} from '@storybook/react-native';
import {StoryScreen, Story, UseCase} from '../../../../storybook/views';
import UpcomingScheduleCard from './index';

declare let module;

const scheduleStart = new Date('2021-11-03 16:00:00');
const scheduleEnd = new Date('2021-11-03 18:00:00');
const upcomingStart = new Date('2021-11-05 16:00:00');
const upcomingEnd = new Date('2021-11-05 18:00:00');

storiesOf('Schedule Card', module)
  .addDecorator(fn => <StoryScreen>{fn()}</StoryScreen>)
  .add('Upcoming Card', () => (
    <Story>
      <UseCase
        text="Upcoming Schedule Card (Today)"
        usage="Schedule card for upcoming.">
        <UpcomingScheduleCard
          title="Mediterania Garden Residence"
          schedule={scheduleStart}
          timeStart={scheduleStart}
          timeEnd={scheduleEnd}
        />
      </UseCase>
      <UseCase
        text="Upcoming Schedule Card"
        usage="Schedule card for upcoming.">
        <UpcomingScheduleCard
          title="Mediterania Garden Residence"
          schedule={upcomingStart}
          timeStart={upcomingStart}
          timeEnd={upcomingEnd}
        />
      </UseCase>
    </Story>
  ));
