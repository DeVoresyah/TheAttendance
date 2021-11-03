import * as React from 'react';
import {storiesOf} from '@storybook/react-native';
import {StoryScreen, Story, UseCase} from '../../../../storybook/views';
import Badge from './index';

declare let module;

storiesOf('Badge', module)
  .addDecorator(fn => <StoryScreen>{fn()}</StoryScreen>)
  .add('Style Preset', () => (
    <Story>
      <UseCase text="Badge Primary" usage="Badge primary.">
        <Badge type="primary" size="medium" title="Badge Primary" />
      </UseCase>
      <UseCase text="Badge Secondary" usage="Badge primary.">
        <Badge type="secondary" size="medium" title="Badge Secondary" />
      </UseCase>
      <UseCase text="Badge Muted" usage="Badge primary.">
        <Badge type="muted" size="medium" title="Badge Muted" />
      </UseCase>
    </Story>
  ))
  .add('Size Preset', () => (
    <Story>
      <UseCase text="Badge Small" usage="Badge small primary.">
        <Badge type="primary" size="small" title="Badge Small" />
      </UseCase>
      <UseCase text="Badge Medium" usage="Badge medium primary.">
        <Badge type="primary" size="medium" title="Badge Medium" />
      </UseCase>
      <UseCase text="Badge Large" usage="Badge large primary.">
        <Badge type="primary" size="large" title="Badge Large" />
      </UseCase>
    </Story>
  ));
