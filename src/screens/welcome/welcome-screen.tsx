import React, {FC} from 'react';
import {Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StackScreenProps} from '@react-navigation/stack';
import {observer} from 'mobx-react-lite';
import {NavigatorParamList} from '@navigators';

// styles
import {apply} from '@theme';

const WelcomeScreen: FC<
  StackScreenProps<NavigatorParamList, 'welcome'>
> = observer(props => {
  return (
    <SafeAreaView style={apply('flex items-center justify-center')}>
      <Text>Unleash Your Potential</Text>
    </SafeAreaView>
  );
});

export default WelcomeScreen;
