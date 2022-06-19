/* eslint-disable react/prop-types */
import React from 'react';
import * as S from './styles';

export default function CardVideo({ video, text }) {
  return (
    <S.Container>
      {/* <S.Header>
        <h1>{text}</h1>
      </S.Header> */}
      <S.Content>
        <iframe
          style={{
            borderRadius: '16px',
            boxShadow: '1px 5px 8px 5px rgba(0, 0, 0, 0.15)',
          }}
          width="100%"
          height="100%"
          src={video}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </S.Content>
    </S.Container>
  );
}
