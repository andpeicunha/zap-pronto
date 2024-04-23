import React, { type HTMLAttributes } from 'react';

interface TitleBoxSpecificProps {
  variant?: 'primary' | 'secondary';
  textSize?: 'small' | 'medium' | 'large';
}

type TitleBoxProps = HTMLAttributes<HTMLSpanElement> & TitleBoxSpecificProps;

export const TitleBox = (props: TitleBoxProps) => {
  const { variant, textSize, ...rest } = props;
  const className = `bg-grayBluish-light m-2 p-2 rounded-md text-xs ${
    variant === 'primary' ? 'text-primary' : 'text-secondary'
  } ${textSize === 'small' ? 'text-xs' : textSize === 'medium' ? 'text-sm' : 'text-lg'}`;
  return <span {...rest} className={className} />;
};
