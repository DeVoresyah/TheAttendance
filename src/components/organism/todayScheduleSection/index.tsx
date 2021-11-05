import {FC, memo} from 'react';
import {
  ActivityIndicator,
  StyleProp,
  ViewStyle,
  View,
  Text,
} from 'react-native';

// Components
import TodayScheduleCard, {
  ITodayScheduleCard,
} from '@components/molecule/todayScheduleCard';

// Styles
import styles from './style';
import {apply} from '@theme';

export interface ITodayScheduleSection {
  onRefresh?: () => void;
  data: ITodayScheduleCard | null;
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

  return (
    <View style={[styles.container, containerStyle]}>
      <View style={[styles.header, headerContainerStyle]}>
        <Text style={styles.title}>Today's Schedule</Text>
        <Text style={styles.helper} onPress={onRefresh}>
          Refresh
        </Text>
      </View>

      <View
        style={
          (loading || data === null) &&
          apply('flex items-center justify-center')
        }>
        {loading ? (
          <ActivityIndicator size="large" color={apply('product-500')} />
        ) : data === null ? (
          <Text style={styles.emptyTitle}>You Don't Have Any Schedule</Text>
        ) : (
          <TodayScheduleCard
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
