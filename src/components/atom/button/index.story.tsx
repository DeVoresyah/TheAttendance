import * as React from 'react';
import {storiesOf} from '@storybook/react-native';
import {StoryScreen, Story, UseCase} from '../../../../storybook/views';
import {Alert} from 'react-native';
import Button from './index';

declare let module;

storiesOf('Button', module)
  .addDecorator(fn => <StoryScreen>{fn()}</StoryScreen>)
  .add('Style Presets', () => (
    <Story>
      <UseCase text="Primary" usage="Primary solid button.">
        <Button
          type="primary"
          size="medium"
          title="Primary Solid Button"
          onPress={() => Alert.alert("It's Primary Button!")}
        />
      </UseCase>
      <UseCase text="Secondary" usage="Secondary solid button.">
        <Button
          type="secondary"
          size="medium"
          title="Secondary Solid Button"
          onPress={() => Alert.alert("It's Secondary Button!")}
        />
      </UseCase>
      <UseCase text="Disabled" usage="Disabled solid button.">
        <Button
          type="disabled"
          size="medium"
          title="Disabled Solid Button"
          disabled
          onPress={() => Alert.alert("It's Disabled Button!")}
        />
      </UseCase>
      <UseCase text="Primary Outline" usage="Primary outline button.">
        <Button
          type="primary"
          size="medium"
          title="Primary Outline Button"
          outline
          onPress={() => Alert.alert("It's Primary Outline Button!")}
        />
      </UseCase>
      <UseCase text="Secondary Outline" usage="Secondary outline button.">
        <Button
          type="secondary"
          size="medium"
          title="Secondary Outline Button"
          outline
          onPress={() => Alert.alert("It's Secondary Outline Button!")}
        />
      </UseCase>
      <UseCase text="Disabled Outline" usage="Disabled outline button.">
        <Button
          type="disabled"
          size="medium"
          title="Disabled Outline Button"
          disabled
          outline
          onPress={() => Alert.alert("It's Disabled Outline Button!")}
        />
      </UseCase>
    </Story>
  ))
  .add('Rounded Presets', () => (
    <Story>
      <UseCase text="Primary Rounded" usage="Primary rounded solid button.">
        <Button
          type="primary"
          size="medium"
          title="Primary Rounded Solid Button"
          rounded
          onPress={() => Alert.alert("It's Primary Rounded Solid Button!")}
        />
      </UseCase>
      <UseCase text="Secondary Rounded" usage="Secondary rounded solid button.">
        <Button
          type="secondary"
          size="medium"
          title="Secondary Rounded Solid Button"
          rounded
          onPress={() => Alert.alert("It's Secondary Rounded Button!")}
        />
      </UseCase>
      <UseCase text="Disabled Rounded" usage="Disabled rounded solid button.">
        <Button
          type="disabled"
          size="medium"
          title="Disabled Solid Button"
          disabled
          rounded
          onPress={() => Alert.alert("It's Disabled Rounded Button!")}
        />
      </UseCase>
      <UseCase text="Primary Rounded Outline" usage="Primary rounded button.">
        <Button
          type="primary"
          size="medium"
          title="Primary Rounded Outline Button"
          outline
          rounded
          onPress={() => Alert.alert("It's Primary Rounded Outline Button!")}
        />
      </UseCase>
      <UseCase
        text="Secondary Rounded Outline"
        usage="Secondary rounded outline button.">
        <Button
          type="secondary"
          size="medium"
          title="Secondary Rounded Outline Button"
          outline
          rounded
          onPress={() => Alert.alert("It's Secondary Rounded Outline Button!")}
        />
      </UseCase>
      <UseCase
        text="Disabled Rounded Outline"
        usage="Disabled rounded outline button.">
        <Button
          type="disabled"
          size="medium"
          title="Disabled Rounded Outline Button"
          disabled
          outline
          rounded
          onPress={() => Alert.alert("It's Disabled Rounded Outline Button!")}
        />
      </UseCase>
    </Story>
  ))
  .add('Size Presets', () => (
    <Story>
      <UseCase text="Small" usage="Small size button.">
        <Button
          type="primary"
          size="small"
          title="Small Button"
          onPress={() => Alert.alert("It's Small Button!")}
        />
      </UseCase>
      <UseCase text="Medium" usage="Medium size button.">
        <Button
          type="primary"
          size="medium"
          title="Medium Button"
          onPress={() => Alert.alert("It's Medium Button!")}
        />
      </UseCase>
      <UseCase text="Large" usage="Large size button.">
        <Button
          type="primary"
          size="large"
          title="Large Button"
          onPress={() => Alert.alert("It's Large Button!")}
        />
      </UseCase>
    </Story>
  ));
