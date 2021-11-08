import {FC, useCallback, memo} from 'react';
import {Platform, Linking, View, Text} from 'react-native';
import FastImage from 'react-native-fast-image';
import {Place} from '@models/places/detailPlace';

// Components
import ScheduleCard from '@components/atom/scheduleCard';
import Button from '@components/atom/button';

// Styles
import styles from './style';
import {apply} from 'osmicsx';

const PlaceCard: FC<Place> = props => {
  const {title, thumbnail, address, coordinate} = props;

  /**
   * Open maps
   */
  const onViewMaps = useCallback(() => {
    const scheme = Platform.select({ios: 'maps:0,0?q=', android: 'geo:0,0?q='});
    const latLng = `${coordinate.latitude},${coordinate.longitude}`;
    const label = 'Custom Label';
    const url = Platform.select({
      ios: `${scheme}${label}@${latLng}`,
      android: `${scheme}${latLng}(${label})`,
    });

    Linking.openURL(url);
  }, [coordinate]);

  return (
    <ScheduleCard style={styles.container}>
      <FastImage
        source={{uri: thumbnail}}
        style={styles.thumb}
        resizeMode={FastImage.resizeMode.cover}
      />

      <View style={styles.content}>
        <Text style={styles.title} numberOfLines={2}>
          {title}
        </Text>
        <Text style={styles.address} numberOfLines={2}>
          {address}
        </Text>

        <View style={apply('items-start')}>
          <Button
            buttonStyle={apply('flex-start')}
            title="View maps"
            type="primary"
            size="medium"
            onPress={onViewMaps}
            outline
            rounded
          />
        </View>
      </View>
    </ScheduleCard>
  );
};

export default memo(PlaceCard);
