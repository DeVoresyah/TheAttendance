import {FC, useMemo, memo} from 'react';
import {StyleProp, ImageStyle} from 'react-native';
import FastImage, {FastImageProps} from 'react-native-fast-image';

// Styles
import styles from './style';

enum AvatarSize {
  'small' = 'small',
  'medium' = 'medium',
  'large' = 'large',
}

export interface IAvatar extends FastImageProps {
  size: keyof typeof AvatarSize;
  avatarStyle?: StyleProp<ImageStyle>;
}

const Avatar: FC<IAvatar> = props => {
  const {size, avatarStyle} = props;

  /**
   * Get image size
   */
  const sizeStyle = useMemo(() => {
    if (size === 'small') {
      return styles.small;
    }
    if (size === 'medium') {
      return styles.medium;
    }
    if (size === 'large') {
      return styles.large;
    }
  }, [size]);

  return (
    <FastImage {...props} style={[styles.container, sizeStyle, avatarStyle]} />
  );
};

export default memo(Avatar);
