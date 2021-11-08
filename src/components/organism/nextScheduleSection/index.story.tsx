import * as React from 'react';
import {Alert} from 'react-native';
import {storiesOf} from '@storybook/react-native';
import {StoryScreen, Story, UseCase} from '../../../../storybook/views';
import NextScheduleSection from './index';
import {apply} from '@theme';

declare let module;

const dataDummy = [
  {
    placeId: 1,
    id: 1,
    schedule: new Date('2021-11-05 16:00:00'),
    title: 'Mediterania Garden Residence',
    timeStart: new Date('2021-11-05 16:00:00'),
    timeEnd: new Date('2021-11-05 18:00:00'),
    clockIn: null,
    clockOut: null,
  },
  {
    placeId: 1,
    id: 2,
    schedule: new Date('2021-11-06 16:00:00'),
    title: 'Mediterania Garden Residence',
    timeStart: new Date('2021-11-06 16:00:00'),
    timeEnd: new Date('2021-11-06 18:00:00'),
    clockIn: null,
    clockOut: null,
  },
  {
    placeId: 1,
    id: 3,
    schedule: new Date('2021-11-07 16:00:00'),
    title: 'Mediterania Garden Residence',
    timeStart: new Date('2021-11-07 16:00:00'),
    timeEnd: new Date('2021-11-07 18:00:00'),
    clockIn: null,
    clockOut: null,
  },
];

storiesOf('Home Section', module)
  .addDecorator(fn => <StoryScreen>{fn()}</StoryScreen>)
  .add('Next Schedule Section', () => (
    <Story>
      <UseCase
        text="Data Ready"
        usage="Today Schedule Section with data ready.">
        <NextScheduleSection
          onAll={() => Alert.alert('', 'See All Data!')}
          data={dataDummy}
          lastCardStyle={apply('mr-0')}
        />
      </UseCase>
      <UseCase text="Data Empty" usage="Next Schedule Section with data empty.">
        <NextScheduleSection
          onAll={() => Alert.alert('', 'See All Data!')}
          data={[]}
          loading={false}
        />
      </UseCase>
      <UseCase
        text="Data Loading"
        usage="Next Schedule Section with data still loading.">
        <NextScheduleSection
          onAll={() => Alert.alert('', 'See All Data!')}
          data={[]}
          loading={true}
        />
      </UseCase>
    </Story>
  ));
