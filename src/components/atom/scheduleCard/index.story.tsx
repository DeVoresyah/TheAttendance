import * as React from 'react';
import {Text} from 'react-native';
import {storiesOf} from '@storybook/react-native';
import {StoryScreen, Story, UseCase} from '../../../../storybook/views';
import ScheduleCard from './index';

declare let module;

storiesOf('Schedule Card', module)
  .addDecorator(fn => <StoryScreen>{fn()}</StoryScreen>)
  .add('Style Presets', () => (
    <Story>
      <UseCase text="Single Card" usage="Schedule single card.">
        <ScheduleCard>
          <Text>Put your card content here</Text>
        </ScheduleCard>
      </UseCase>
    </Story>
  ));
