import * as React from 'react';
import {storiesOf} from '@storybook/react-native';
import {StoryScreen, Story, UseCase} from '../../../../storybook/views';
import NextScheduleCard from './index';

declare let module;

const scheduleStart = new Date('03-11-2021 16:00:00');
const scheduleEnd = new Date('03-11-2021 16:00:00');

storiesOf('Schedule Card', module)
  .addDecorator(fn => <StoryScreen>{fn()}</StoryScreen>)
  .add('Next Card', () => (
    <Story>
      <UseCase
        text="Next Schedule Card"
        usage="Schedule card for next/upcoming.">
        <NextScheduleCard
          title="Mediterania Garden Residence"
          schedule={scheduleStart}
          timeStart={scheduleStart}
          timeEnd={scheduleEnd}
        />
      </UseCase>
    </Story>
  ));
