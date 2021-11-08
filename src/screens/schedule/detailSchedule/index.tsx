import {FC, useEffect, useMemo} from 'react';
import {ActivityIndicator, ScrollView, View, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StackScreenProps} from '@react-navigation/stack';
import {NavigatorParamList} from '@navigators';
import {observer} from 'mobx-react-lite';
import {useStores} from '@models';
import dayjs from 'dayjs';

// Components
import PlaceCard from '@components/molecule/placeCard';
import ScheduleInfoCard from '@components/molecule/scheduleInfoCard';

// Styles
import styles from './style';
import {apply} from '@theme';

const DetailScheduleScreen: FC<
  StackScreenProps<NavigatorParamList, 'detailSchedule'>
> = props => {
  const {navigation} = props;
  const {data} = props.route.params;
  const {detailPlaceStore} = useStores();
  const {detailPlaceData, detailPlaceFetchingStatus} = detailPlaceStore;

  /**
   * Get schedule date
   */
  const scheduleDate = useMemo(() => {
    return dayjs(new Date(data.timeStart)).format('DD MMMM YYYY');
  }, [data]);

  useEffect(() => {
    navigation.setOptions({
      title: scheduleDate,
      headerRight: () => null,
    });
  }, [scheduleDate, data]);

  return (
    <SafeAreaView
      style={[
        apply('flex bg-silver-100'),
        detailPlaceFetchingStatus && apply('items-center justify-center'),
      ]}
      edges={['left', 'right', 'bottom']}>
      {detailPlaceFetchingStatus ? (
        <ActivityIndicator size="large" color={apply('product-500')} />
      ) : (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={apply('p-5')}>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Store</Text>
            <PlaceCard
              id={detailPlaceData?.id}
              thumbnail={detailPlaceData?.thumbnail}
              title={detailPlaceData?.title}
              address={detailPlaceData?.address}
              coordinate={detailPlaceData?.coordinate}
            />
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Time Schedule</Text>
            <ScheduleInfoCard
              type="time"
              timeStart={data.timeStart}
              timeEnd={data.timeEnd}
            />
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Clock In</Text>
            <ScheduleInfoCard type="clock-in" clockIn={data.clockIn} />
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Clock Out</Text>
            <ScheduleInfoCard type="clock-out" clockOut={data.clockOut} />
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default observer(DetailScheduleScreen);
