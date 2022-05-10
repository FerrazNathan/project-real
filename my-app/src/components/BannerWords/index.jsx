/* eslint-disable react/prop-types */
import React from 'react'
import * as S from './styles'

export default function BannerWords({ text }) {
	return (
		<S.Container>
			<h1>{text}</h1>
		</S.Container>
	)
}
