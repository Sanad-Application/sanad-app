import { View } from 'react-native';
import { P } from '~components';
import {globalStyles} from '~theme';

const ChooseUserType = () => {
  return (
    <View style={globalStyles.container}>
      <P>هل انت مستخدم عادي ام محامي؟</P>
    </View>
  );
};

export default ChooseUserType;