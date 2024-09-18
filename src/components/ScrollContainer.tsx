import { ReactNode } from 'react'
import { ScrollView } from 'react-native';

export const ScrollContainer = ({children}: {children: ReactNode}) => {
  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      {children}
    </ScrollView>
  );
};