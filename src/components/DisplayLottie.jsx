import React from 'react';
import { Lottie } from 'lottie-react';

export default function DisplayLottie({ animationData, src, style, lottieStyle }) {
  const animation = animationData || src;
  if (!animation) return null;

  return (
    <div
      style={{
        width: '100%',
        maxWidth: '520px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        ...style
      }}
    >
      <Lottie
        src={animation}
        loop={true}
        autoplay={true}
        style={{
          width: '100%',
          height: '380px',
          ...lottieStyle
        }}
      />
    </div>
  );
}

