import * as React from 'react';
import {Alert} from 'react-native';
import {storiesOf} from '@storybook/react-native';
import {StoryScreen, Story, UseCase} from '../../../../storybook/views';
import TodayScheduleSection from './index';

declare let module;

const dataDummy = {
  title: 'Mediterania Garden Residence',
  timeStart: new Date('2021-11-05 16:00:00'),
  timeEnd: new Date('2021-11-05 18:00:00'),
  clockIn: null,
  clockOut: null,
};

storiesOf('Home Section', module)
  .addDecorator(fn => <StoryScreen>{fn()}</StoryScreen>)
  .add('Today Schedule Section', () => (
    <Story>
      <UseCase
        text="Data Ready"
        usage="Today Schedule Section with data ready.">
        <TodayScheduleSection
          onRefresh={() => Alert.alert('', 'Refresh Data!')}
          data={dataDummy}
        />
      </UseCase>
      <UseCase
        text="Data Empty"
        usage="Today Schedule Section with data empty.">
        <TodayScheduleSection
          onRefresh={() => Alert.alert('', 'Refresh Data!')}
          data={null}
        />
      </UseCase>
      <UseCase
        text="Data Loading"
        usage="Today Schedule Section with data still loading.">
        <TodayScheduleSection
          onRefresh={() => Alert.alert('', 'Refresh Data!')}
          data={dataDummy}
          loading={true}
        />
      </UseCase>
    </Story>
  ));
