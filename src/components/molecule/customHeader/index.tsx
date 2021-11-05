import {FC} from 'react';
import {View, Text} from 'react-native';
import {getHeaderTitle} from '@react-navigation/elements';
import {StackHeaderProps} from '@react-navigation/stack';
// import {HeaderBackButtonProps} from '@react-navigation/elements';

// Styles
import styles from './style';
import {apply} from '@theme';

const CustomHeader: FC<StackHeaderProps> = props => {
  const {route, options, back} = props;
  const {headerLeft, headerRight} = options;
  const title = getHeaderTitle(options, route.name);

  return (
    <View style={styles.container}>
      <View style={apply('flex pl-5')}>
        {back ? null : headerLeft !== undefined ? headerLeft(undefined) : null}
      </View>

      <View style={apply('flex-2 items-center')}>
        <Text style={styles.title}>{title}</Text>
      </View>

      <View style={apply('flex items-end pr-5')}>
        {headerRight !== undefined ? headerRight(undefined) : null}
      </View>
    </View>
  );
};

export default CustomHeader;
