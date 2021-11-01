import {FC, useMemo, memo} from 'react';
import {PressableProps, StyleProp, ViewStyle, Text} from 'react-native';
import BaseButton from './base';

// Styles
import {apply} from '@theme';
import styles from './style';

enum ButtonSize {
  'small' = 'small',
  'medium' = 'medium',
  'large' = 'large',
}

enum ButtonType {
  'primary' = 'primary',
  'secondary' = 'secondary',
  'disabled' = 'disabled',
}

export interface IButton extends PressableProps {
  size: keyof typeof ButtonSize;
  type: keyof typeof ButtonType;
  outline?: boolean;
  rounded?: boolean;
  title?: string | number;
  buttonStyle?: StyleProp<ViewStyle>;
}

const Button: FC<IButton> = props => {
  const {buttonStyle, rounded, outline, title, size, type} = props;

  /**
   * Get size style
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

  /**
   * Get background style
   */
  const backgroundStyle = useMemo(() => {
    if (!outline) {
      if (type === 'primary') {
        return apply('bg-primary-500');
      }
      if (type === 'secondary') {
        return apply('bg-secondary-500');
      }
      if (type === 'disabled') {
        return apply('bg-silver-500');
      }
    }
  }, [type, outline]);

  /**
   * Get outline style
   */
  const outlineStyle = useMemo(() => {
    if (outline) {
      if (type === 'primary') {
        return apply('border border-primary-500');
      }
      if (type === 'secondary') {
        return apply('border border-secondary-500');
      }
      if (type === 'disabled') {
        return apply('border border-silver-500');
      }
    }
  }, [type, outline]);

  /**
   * Get text size style
   */
  const textSizeStyle = useMemo(() => {
    if (size === 'small') {
      return styles.labelSmall;
    }
    if (size === 'medium') {
      return styles.labelMedium;
    }
    if (size === 'large') {
      return styles.labelLarge;
    }
  }, [size]);

  /**
   * Get text color style
   */
  const textColorStyle = useMemo(() => {
    if (!outline) {
      return apply('text-white');
    } else {
      if (type === 'primary') {
        return apply('text-primary-500');
      }
      if (type === 'secondary') {
        return apply('text-secondary-500');
      }
      if (type === 'disabled') {
        return apply('text-silver-500');
      }
    }
  }, [type, outline]);

  return (
    <BaseButton
      {...props}
      style={[
        styles.container,
        sizeStyle,
        backgroundStyle,
        rounded && styles.rounded,
        outlineStyle,
        buttonStyle,
      ]}>
      <Text style={[textSizeStyle, textColorStyle]}>{title}</Text>
    </BaseButton>
  );
};

export default memo(Button);
