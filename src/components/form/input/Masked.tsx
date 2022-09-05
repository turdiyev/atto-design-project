import React, { ForwardedRef, forwardRef } from 'react';
import Input, { InputProps } from './Input';
import InputMask from 'react-input-mask';
import type { Props as MaskProps } from 'react-input-mask';

type Props = InputProps & { maskProps: MaskProps };

const MaskTextField = forwardRef(
  ({ maskProps, ...props }: Props, ref: ForwardedRef<HTMLInputElement>) => {
    return (
      <InputMask {...maskProps} {...props}>
        <Input className={props.className} ref={ref} />
      </InputMask>
    );
  }
);
MaskTextField.displayName = 'MaskTextFieldForwardedRef';

export default MaskTextField;
