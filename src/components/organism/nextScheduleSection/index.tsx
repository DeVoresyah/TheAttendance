import {FC, memo} from 'react';
import {
  ActivityIndicator,
  StyleProp,
  ViewStyle,
  FlatList,
  View,
  Text,
} from 'react-native';

// Components
import NextScheduleCard, {
  INextScheduleCard,
} from '@components/molecule/nextScheduleCard';

// Styles
import styles from './style';
import {apply} from '@theme';

export interface INextScheduleSection {
  onAll?: () => void;
  data: INextScheduleCard[];
  loading?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
  lastCardStyle?: StyleProp<ViewStyle>;
  contentContainerStyle?: StyleProp<ViewStyle>;
  headerContainerStyle?: StyleProp<ViewStyle>;
}

const NextScheduleSection: FC<INextScheduleSection> = props => {
  const {
    contentContainerStyle,
    headerContainerStyle,
    containerStyle,
    lastCardStyle,
    loading = false,
    onAll,
    data,
  } = props;

  return (
    <View style={[styles.container, containerStyle]}>
      <View style={[styles.header, headerContainerStyle]}>
        <Text style={styles.title}>Next Schedule</Text>
        <Text style={styles.helper} onPress={onAll}>
          See All
        </Text>
      </View>

      {loading ? (
        <View style={apply('flex items-center justify-center')}>
          <ActivityIndicator size="large" color={apply('product-500')} />
        </View>
      ) : data.length === 0 ? (
        <View style={apply('flex items-center justify-center')}>
          <Text style={styles.emptyTitle}>You Don't Have Any Schedule</Text>
        </View>
      ) : (
        <FlatList
          data={data}
          extraData={data}
          keyExtractor={(_, index) => index.toString()}
          initialNumToRender={2}
          renderItem={({item, index}) => (
            <NextScheduleCard
              schedule={item.schedule}
              title={item.title}
              timeStart={item.timeStart}
              timeEnd={item.timeEnd}
              cardStyle={[
                styles.card,
                index === data.length - 1 && lastCardStyle,
              ]}
            />
          )}
          contentContainerStyle={contentContainerStyle}
          showsHorizontalScrollIndicator={false}
          horizontal
        />
      )}
    </View>
  );
};

export default memo(NextScheduleSection);
