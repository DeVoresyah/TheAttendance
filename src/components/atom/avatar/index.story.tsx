import * as React from 'react';
import {storiesOf} from '@storybook/react-native';
import {StoryScreen, Story, UseCase} from '../../../../storybook/views';
import Avatar from './index';

declare let module;

storiesOf('Avatar', module)
  .addDecorator(fn => <StoryScreen>{fn()}</StoryScreen>)
  .add('Size Presets', () => (
    <Story>
      <UseCase text="Small" usage="Small avatar.">
        <Avatar
          size="small"
          source={{
            uri: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
          }}
        />
      </UseCase>
      <UseCase text="Medium" usage="Medium avatar.">
        <Avatar
          size="medium"
          source={{
            uri: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
          }}
        />
      </UseCase>
      <UseCase text="Large" usage="Large avatar.">
        <Avatar
          size="large"
          source={{
            uri: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg',
          }}
        />
      </UseCase>
    </Story>
  ));
