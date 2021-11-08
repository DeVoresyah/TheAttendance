import * as React from 'react';
import {storiesOf} from '@storybook/react-native';
import {StoryScreen, Story, UseCase} from '../../../../storybook/views';
import TodayScheduleCard from './index';

declare let module;

storiesOf('Schedule Card', module)
  .addDecorator(fn => <StoryScreen>{fn()}</StoryScreen>)
  .add('Today Card', () => (
    <Story>
      <UseCase text="Today Schedule Card" usage="Schedule card for today.">
        <TodayScheduleCard
          id={1}
          placeId={1}
          title="Mediterania Garden Residence"
          timeStart={new Date('03-11-2021 16:00:00')}
          timeEnd={new Date('03-11-2021 18:00:00')}
          clockIn={null}
          clockOut={null}
        />
      </UseCase>
    </Story>
  ));
