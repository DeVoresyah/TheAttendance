import {useState, useEffect, useMemo, FC, memo} from 'react';
import {StyleProp, ViewStyle, View, Text} from 'react-native';
import dayjs from 'dayjs';

// Styles
import styles from './style';

export interface IHomeHero {
  containerStyle?: StyleProp<ViewStyle>;
}

const HomeHero: FC<IHomeHero> = props => {
  const {containerStyle} = props;
  const [timeNow, setTimeNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeNow(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  /**
   * Get formatted time (HH:mm)
   */
  const formattedTime = useMemo(() => {
    return dayjs(timeNow).format('HH:mm');
  }, [timeNow]);

  /**
   * Get formatted date (dddd, DD MMM YYYY)
   */
  const formattedDate = useMemo(() => {
    return dayjs(timeNow).format('dddd, DD MMM YYYY');
  }, [timeNow]);

  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={styles.time}>{formattedTime}</Text>
      <Text style={styles.date}>{formattedDate}</Text>
    </View>
  );
};

export default memo(HomeHero);
