import {FC, useCallback, memo} from 'react';
import {
  ActivityIndicator,
  StyleProp,
  ViewStyle,
  View,
  Text,
} from 'react-native';
import {useStores} from '@models';
import {navigate} from '@navigators';
import {TodaySchedule} from '@models/schedule/todaySchedule';

// Components
import TodayScheduleCard, {
  ITodaySchedule,
} from '@components/molecule/todayScheduleCard';

// Styles
import styles from './style';
import {apply} from '@theme';

export interface ITodayScheduleSection {
  onRefresh?: () => void;
  data: ITodaySchedule | null;
  loading?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
  headerContainerStyle?: StyleProp<ViewStyle>;
}

const TodayScheduleSection: FC<ITodayScheduleSection> = props => {
  const {
    headerContainerStyle,
    containerStyle,
    onRefresh,
    loading,
    data,
  } = props;
  const {detailPlaceStore} = useStores();

  /**
   * Go to detail schedule
   */
  const onDetail = useCallback((data: TodaySchedule) => {
    detailPlaceStore.getDetailPlace(data.id);
    navigate('detailSchedule', {data});
  }, []);

  return (
    <View style={[styles.container, containerStyle]}>
      <View style={[styles.header, headerContainerStyle]}>
        <Text style={styles.title}>Today's Schedule</Text>
        <Text style={styles.helper} onPress={onRefresh}>
          Refresh
        </Text>
      </View>

      <View style={(loading || data === null) && styles.emptyState}>
        {loading ? (
          <ActivityIndicator size="large" color={apply('product-500')} />
        ) : data === null ? (
          <Text style={styles.emptyTitle}>You Don't Have Any Schedule</Text>
        ) : (
          <TodayScheduleCard
            onPress={onDetail}
            placeId={data.placeId}
            id={data.id}
            title={data.title}
            timeStart={data.timeStart}
            timeEnd={data.timeEnd}
            clockIn={data.clockIn}
            clockOut={data.clockOut}
          />
        )}
      </View>
    </View>
  );
};

export default memo(TodayScheduleSection);
