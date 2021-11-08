import React from 'react';
import {useColorScheme} from 'react-native';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {navigationRef} from './navigation-utilities';
import {TodaySchedule} from '@models/schedule/todaySchedule';

// Components
import CustomHeader from '@components/molecule/customHeader';

// Screens
import HomeScreen from '@screens/home';

// Schedule Screens
import UpcomingScheduleScreen from '@screens/schedule/upcomingSchedule';
import DetailScheduleScreen from '@screens/schedule/detailSchedule';

export type NavigatorParamList = {
  home: undefined;
  upcomingSchedule: undefined;
  detailSchedule: {
    data: TodaySchedule;
  };
};

const Stack = createNativeStackNavigator<NavigatorParamList>();

const AppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: props => <CustomHeader {...props} />,
      }}>
      <Stack.Screen name="home" component={HomeScreen} />
      <Stack.Screen
        name="upcomingSchedule"
        component={UpcomingScheduleScreen}
      />
      <Stack.Screen name="detailSchedule" component={DetailScheduleScreen} />
    </Stack.Navigator>
  );
};

interface NavigationProps
  extends Partial<React.ComponentProps<typeof NavigationContainer>> {}

export const AppNavigator = (props: NavigationProps) => {
  const colorScheme = useColorScheme();
  return (
    <NavigationContainer
      ref={navigationRef}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
      {...props}>
      <AppStack />
    </NavigationContainer>
  );
};

AppNavigator.displayName = 'AppNavigator';

/**
 * A list of routes from which we're allowed to leave the app when
 * the user presses the back button on Android.
 *
 * Anything not on this list will be a standard `back` action in
 * react-navigation.
 *
 * `canExit` is used in ./app/app.tsx in the `useBackButtonHandler` hook.
 */
const exitRoutes = ['home'];
export const canExit = (routeName: string) => exitRoutes.includes(routeName);
