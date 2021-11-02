import * as React from 'react';
import {storiesOf} from '@storybook/react-native';
import {StoryScreen, Story, UseCase} from '../../../../storybook/views';
import Clock from './index';

// styles
import {apply} from '@theme';

declare let module;

storiesOf('Schedule Clock', module)
  .addDecorator(fn => <StoryScreen>{fn()}</StoryScreen>)
  .add('Type Presets', () => (
    <Story>
      <UseCase
        text="Clock In"
        usage="Schedule clock in."
        style={apply('row items-center')}>
        <Clock time={null} type="in" containerStyle={apply('mr-2')} />
        <Clock time={new Date('01-11-2021 16:00:00')} type="in" />
      </UseCase>
      <UseCase
        text="Clock Out"
        usage="Schedule clock in."
        style={apply('row items-center')}>
        <Clock time={null} type="out" containerStyle={apply('mr-2')} />
        <Clock time={new Date('01-11-2021 18:00:00')} type="out" />
      </UseCase>
    </Story>
  ));
