/* eslint-disable react/prop-types */
import React from 'react'
import * as S from './styles'

export default function Banner({ img }) {
	return (
		<S.Container>
			<img src={img} />
		</S.Container>
	)
}
