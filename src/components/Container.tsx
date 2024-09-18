import { ReactNode } from 'react'
import { View } from 'react-native';
import { globalStyles } from '~theme'

type ContainerProps = {
  children: ReactNode
  style?: object
}

export const Container = ({children, style}: ContainerProps) => {
  return (
    <View style={[globalStyles.container, style]}>
      {children}
    </View>
  );
};