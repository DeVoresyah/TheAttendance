import {FC, useCallback, useEffect, useMemo, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ActivityIndicator, FlatList, Pressable, View, Text} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {NavigatorParamList} from '@navigators';
import {observer} from 'mobx-react-lite';
import {useStores} from '@models';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CalendarStrip from 'react-native-calendar-strip';

// Components
import StatusBar from '@components/atom/statusBar';
import UpcomingScheduleCard from '@components/molecule/upcomingScheduleCard';

// Styles
import styles from './style';
import {apply} from '@theme';
import dayjs from 'dayjs';

const UpcomingScheduleScreen: FC<
  StackScreenProps<NavigatorParamList, 'upcomingSchedule'>
> = props => {
  const {navigation} = props;
  const [dateSelected, setDateSelected] = useState(new Date());
  const {nextScheduleStore} = useStores();
  const {upcomingSchedule, nextScheduleFetchingStatus} = nextScheduleStore;

  /**
   * Refresh data function
   */
  const onRefresh = useCallback(() => {
    nextScheduleStore.getNextSchedule();
  }, []);

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: 'UPCOMING SCHEDULE',
      headerRight: () => (
        <Pressable onPress={onRefresh}>
          <Icon name="refresh" size={30} color="black" />
        </Pressable>
      ),
    });

    nextScheduleStore.getNextSchedule();
  }, []);

  /**
   * Get schedule based on date selected
   */
  const filteredSchedule = useMemo(() => {
    return upcomingSchedule(dayjs(new Date(dateSelected)).format('YYYY-MM-DD'));
  }, [upcomingSchedule, dateSelected]);

  return (
    <SafeAreaView
      style={apply('flex bg-white')}
      edges={['left', 'right', 'bottom']}>
      <StatusBar
        backgroundColor={apply('product-500')}
        barStyle="dark-content"
      />
      <CalendarStrip
        scrollable
        style={{height: 90, paddingTop: 0, paddingBottom: 10}}
        calendarColor={apply('product-500')}
        calendarHeaderStyle={apply('text-black')}
        dateNumberStyle={apply('text-black')}
        dateNameStyle={apply('text-black')}
        disabledDateNameStyle={apply('text-silver-500')}
        disabledDateNumberStyle={apply('text-silver-500')}
        highlightDateNumberStyle={apply('text-black')}
        highlightDateNameStyle={apply('text-black')}
        highlightDateContainerStyle={apply('bg-white')}
        minDate={new Date()}
        iconContainer={{flex: 0.1}}
        selectedDate={dateSelected}
        onDateSelected={val => setDateSelected(new Date(val.toString()))}
      />

      {nextScheduleFetchingStatus ? (
        <View style={apply('flex items-center justify-center')}>
          <ActivityIndicator size="large" color={apply('product-500')} />
        </View>
      ) : (
        <FlatList
          data={filteredSchedule}
          extraData={filteredSchedule}
          keyExtractor={(_, index) => index.toString()}
          initialNumToRender={5}
          renderItem={({item}) => (
            <UpcomingScheduleCard
              title={item.title}
              schedule={item.schedule}
              timeStart={item.timeStart}
              timeEnd={item.timeEnd}
              cardStyle={apply('mb-3')}
            />
          )}
          contentContainerStyle={[
            styles.contentContainer,
            filteredSchedule.length === 0 && styles.emptyState,
          ]}
          ListEmptyComponent={() => (
            <Text style={styles.emptyTitle}>You don't have schedule</Text>
          )}
        />
      )}
    </SafeAreaView>
  );
};

export default observer(UpcomingScheduleScreen);
