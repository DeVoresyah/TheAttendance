import * as React from 'react';
import {storiesOf} from '@storybook/react-native';
import {StoryScreen, Story, UseCase} from '../../../../storybook/views';
import ScheduleDate from './index';

declare let module;

storiesOf('Schedule DateTime', module)
  .addDecorator(fn => <StoryScreen>{fn()}</StoryScreen>)
  .add('Schedule Date', () => (
    <Story>
      <UseCase text="Schedule Date" usage="Schedule show day and date.">
        <ScheduleDate date={new Date('01-11-2021 16:00:00')} />
      </UseCase>
    </Story>
  ));
