import {FC, memo} from 'react';
import {Pressable, Platform, View, Text} from 'react-native';
import {getHeaderTitle} from '@react-navigation/elements';
import {StackHeaderProps} from '@react-navigation/stack';
import {NativeStackHeaderProps} from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import {HeaderBackButtonProps} from '@react-navigation/elements';

// Styles
import styles from './style';

const CustomHeader: FC<StackHeaderProps | NativeStackHeaderProps> = props => {
  const {navigation, route, options, back} = props;
  const {headerLeft, headerRight} = options;
  const title = getHeaderTitle(options, route.name);

  return (
    <View
      style={[
        styles.container,
        Platform.OS === 'android' && styles.containerAndroid,
      ]}>
      <View style={styles.leftContainer}>
        {back ? (
          <Pressable onPress={navigation.goBack}>
            <Icon name="keyboard-backspace" size={30} color="black" />
          </Pressable>
        ) : headerLeft !== undefined ? (
          headerLeft(undefined)
        ) : null}
      </View>

      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>

      <View style={styles.rightContainer}>
        {headerRight !== undefined ? headerRight(undefined) : null}
      </View>
    </View>
  );
};

export default memo(CustomHeader);
