import * as React from 'react';
import {storiesOf} from '@storybook/react-native';
import {StoryScreen, Story, UseCase} from '../../../../storybook/views';
import HomeHero from './index';

declare let module;

storiesOf('Hero', module)
  .addDecorator(fn => <StoryScreen>{fn()}</StoryScreen>)
  .add('Home Hero', () => (
    <Story>
      <UseCase text="Home" usage="Hero for home screen.">
        <HomeHero />
      </UseCase>
    </Story>
  ));
