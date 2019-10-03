import React from 'react';
import { Button, ButtonProps } from 'react-native-elements';

import { style } from './style';

type Props = ButtonProps & { color?: string; backgroundColor?: string };

export const CommonButton: React.FC<Props> = React.memo(
  ({ color, backgroundColor, buttonStyle, titleStyle, containerStyle, ...buttonProps }) => {
    return (
      <Button
        buttonStyle={{ ...style.button, backgroundColor, ...(buttonStyle as any) }}
        containerStyle={{ ...style.container, ...(containerStyle as any) }}
        titleStyle={{ ...style.text, color, ...(titleStyle as any) }}
        {...buttonProps}
      />
    );
  },
);
