import { StyleSheet, View } from 'react-native'
import { Button, Container, P, ScrollContainer, Spacer, ChooseButton } from '~components'
import { useAppNavigation } from '~hooks'
import { useAppDispatch, useAppSelector } from '~store/hooks'
import { setType } from '~store/slices/authSlice'
import { Images } from '~utils/images'

const ChooseUserType = () => {
  const { isLawyer } = useAppSelector(state => state.auth)
  const dispatch = useAppDispatch()
  const { navigate } = useAppNavigation()

  const nextStep = () => {
    navigate('Login')
  }

  const setLawyer = (value: boolean) => {
    dispatch(setType({ isLawyer: value }))
  }

  return (
    <ScrollContainer>
      <Container>
        <Spacer h={25} />
        <P size={28} fw='bold'>هل انت مستخدم عادي ام محامي؟</P>
        <Spacer h={25} />
        <View style={styles.row}>
          <ChooseButton
            title='مستخدم عادي'
            active={!isLawyer}
            onPress={() => setLawyer(false)}
            img={Images.user} />

          <ChooseButton
            title='محامي'
            active={isLawyer}
            onPress={() => setLawyer(true)}
            img={Images.lawyer} />
        </View>
        <Spacer h={25} />
        <Button title='التالي' onPress={nextStep} />
      </Container>
    </ScrollContainer>
  )
}

export default ChooseUserType

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
})