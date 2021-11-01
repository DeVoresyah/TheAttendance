import * as React from 'react';
import {storiesOf} from '@storybook/react-native';
import {StoryScreen, Story, UseCase} from '../../../../storybook/views';
import ScheduleTime from './index';

declare let module;

storiesOf('Schedule DateTime', module)
  .addDecorator(fn => <StoryScreen>{fn()}</StoryScreen>)
  .add('Schedule Time', () => (
    <Story>
      <UseCase text="Schedule Time" usage="Schedule start time - end time.">
        <ScheduleTime
          startTime={new Date('01-11-2021 16:00:00')}
          endTime={new Date('01-11-2021 18:00:00')}
        />
      </UseCase>
    </Story>
  ));
