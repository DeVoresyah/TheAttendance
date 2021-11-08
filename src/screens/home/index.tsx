import {FC, useCallback, useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView, Pressable, View} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {NavigatorParamList} from '@navigators';
import {observer} from 'mobx-react-lite';
import {useStores} from '@models';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// Components
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
  const {todayScheduleStore, nextScheduleStore} = useStores();
  const {todayScheduleData, todayScheduleFetchingStatus} = todayScheduleStore;
  const {nextScheduleData, nextScheduleFetchingStatus} = nextScheduleStore;

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
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

    todayScheduleStore.getTodaySchedule();
    nextScheduleStore.getNextSchedule();
  }, []);

  /**
   * Navigate to upcoming schedule screen
   */
  const onSeeAllUpcoming = useCallback(() => {
    navigation.navigate('upcomingSchedule');
  }, []);

  /**
   * Refresh today schedule data function
   */
  const onTodayScheduleRefresh = useCallback(() => {
    todayScheduleStore.getTodaySchedule();
  }, []);

  return (
    <SafeAreaView
      style={apply('flex bg-white')}
      edges={['left', 'right', 'bottom']}>
      <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
        <HomeHero containerStyle={apply('pt-5 mb-7')} />

        <View style={apply('px-5 mb-7')}>
          <TodayScheduleSection
            data={todayScheduleData}
            loading={todayScheduleFetchingStatus}
            onRefresh={onTodayScheduleRefresh}
          />
        </View>

        <NextScheduleSection
          data={nextScheduleData}
          headerContainerStyle={apply('px-5')}
          contentContainerStyle={apply('pl-5')}
          lastCardStyle={apply('mr-5')}
          onAll={onSeeAllUpcoming}
          loading={nextScheduleFetchingStatus}
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
