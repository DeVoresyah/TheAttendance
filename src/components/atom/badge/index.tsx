import {FC, useMemo, memo} from 'react';
import {StyleProp, ViewStyle, View, Text} from 'react-native';

// Styles
import styles from './style';
import {apply} from '@theme';

enum BadgeType {
  'primary' = 'primary',
  'secondary' = 'secondary',
  'muted' = 'muted',
}

enum BadgeSize {
  'small' = 'small',
  'medium' = 'medium',
  'large' = 'large',
}

export interface IBadge {
  type: keyof typeof BadgeType;
  size: keyof typeof BadgeSize;
  title: string | number;
  containerStyle?: StyleProp<ViewStyle>;
}

const Badge: FC<IBadge> = props => {
  const {containerStyle, type, size, title} = props;

  /**
   * Get background style based on type
   */
  const backgroundStyle = useMemo(() => {
    if (type === 'primary') {
      return apply('bg-primary-500');
    }
    if (type === 'secondary') {
      return apply('bg-secondary-500');
    }
    if (type === 'muted') {
      return apply('bg-silver-500');
    }
  }, [type]);

  /**
   * Get badge size.
   */
  const sizeStyle = useMemo(() => {
    if (size === 'small') {
      return {container: styles.small, label: styles.labelSmall};
    }
    if (size === 'medium') {
      return {container: styles.medium, label: styles.labelMedium};
    }
    if (size === 'large') {
      return {container: styles.large, label: styles.labelLarge};
    }

    return null;
  }, [size]);

  return (
    <View
      style={[
        styles.container,
        backgroundStyle,
        sizeStyle.container,
        containerStyle,
      ]}>
      <Text style={sizeStyle.label}>{title}</Text>
    </View>
  );
};

export default memo(Badge);
