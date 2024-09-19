import React, { useState } from 'react'
import { Text, StyleSheet, View, TextInput } from 'react-native'

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field'
import { colors, fontPixel, heightPixel, widthPixel } from '~theme'

const CELL_COUNT = 6

interface InputBoxProps {
  value: string
  setValue: (value: string) => void
}

export const InputBox = ({ value, setValue }: InputBoxProps) => {
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT })
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  })

  return (
    <View>
      <CodeField
        ref={ref}
        {...props}
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        testID="verify_code_input"
        InputComponent={TextInput}
        renderCell={({ index, symbol, isFocused }) => (
          <Text
            key={CELL_COUNT - index - 1}
            style={[styles.cell, isFocused && styles.focusCell]}
            onLayout={getCellOnLayoutHandler(index)}>
            {symbol || (isFocused ? <Cursor /> : null)}
          </Text>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  codeFieldRoot: {
    flexDirection: 'row-reverse'
  },
  cell: {
    width: widthPixel(48),
    height: widthPixel(48),
    lineHeight: heightPixel(40),
    fontSize: fontPixel(24),
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: "#CCCCCC",
    borderRadius: widthPixel(8),
    textAlign: 'center',
  },
  focusCell: {
    borderColor: colors.primary,
  },
})