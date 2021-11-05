import {FC, useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView, Pressable, View} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {NavigatorParamList} from '@navigators';
import {observer} from 'mobx-react-lite';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// Components
import CustomHeader from '@components/molecule/customHeader';
import Avatar from '@components/atom/avatar';
import HomeHero from '@components/atom/homeHero';
import TodayScheduleSection from '@components/organism/todayScheduleSection';
import NextScheduleSection from '@components/organism/nextScheduleSection';
import Button from '@components/atom/button';

// Styles
import styles from './style';
import {apply} from '@theme';

const HomeScreen: FC<StackScreenProps<NavigatorParamList, 'home'>> = props => {
  const {navigation} = props;
  const [todayDummy] = useState({
    title: 'Mediterania Garden Residence',
    timeStart: new Date('2021-11-05 16:00:00'),
    timeEnd: new Date('2021-11-05 18:00:00'),
    clockIn: null,
    clockOut: null,
  });
  const [nextDummy] = useState([
    {
      title: 'Mediterania Garden Residence',
      schedule: new Date('2021-11-05 16:00:00'),
      timeStart: new Date('2021-11-05 16:00:00'),
      timeEnd: new Date('2021-11-05 18:00:00'),
      clockIn: null,
      clockOut: null,
    },
    {
      title: 'Mediterania Garden Residence',
      schedule: new Date('2021-11-06 16:00:00'),
      timeStart: new Date('2021-11-06 16:00:00'),
      timeEnd: new Date('2021-11-06 18:00:00'),
      clockIn: null,
      clockOut: null,
    },
    {
      title: 'Mediterania Garden Residence',
      schedule: new Date('2021-11-07 16:00:00'),
      timeStart: new Date('2021-11-07 16:00:00'),
      timeEnd: new Date('2021-11-07 18:00:00'),
      clockIn: null,
      clockOut: null,
    },
  ]);

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      header: props => <CustomHeader {...props} />,
      title: 'LIVE ATTENDANCE',
      headerLeft: () => (
        <Avatar
          size="small"
          source={{
            uri: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
          }}
        />
      ),
      headerRight: () => (
        <Pressable>
          <Icon name="bell-outline" size={30} color="black" />
        </Pressable>
      ),
    });
  }, []);

  return (
    <SafeAreaView
      style={apply('flex bg-white')}
      edges={['left', 'right', 'bottom']}>
      <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
        <HomeHero containerStyle={apply('pt-5 mb-7')} />

        <View style={apply('px-5 mb-7')}>
          <TodayScheduleSection data={todayDummy} />
        </View>

        <NextScheduleSection
          data={nextDummy}
          headerContainerStyle={apply('px-5')}
          contentContainerStyle={apply('pl-5')}
          lastCardStyle={apply('mr-5')}
        />
      </ScrollView>

      <View style={styles.footer}>
        <Button
          title="Clock In"
          type="secondary"
          size="large"
          buttonStyle={apply('mr-2')}
        />
        <Button
          title="Clock Out"
          type="disabled"
          size="large"
          buttonStyle={apply('ml-2')}
          disabled={true}
        />
      </View>
    </SafeAreaView>
  );
};

export default observer(HomeScreen);
