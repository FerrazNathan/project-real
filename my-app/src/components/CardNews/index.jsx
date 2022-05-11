/* eslint-disable react/prop-types */
import React from 'react'
import * as S from './styles'

export default function CardNews({ title, text }) {
	return (
		<S.Container>
			<S.Header>
				<h1>{title}</h1>
			</S.Header>
			<S.ContentText>
				<p>{text}</p>
			</S.ContentText>
		</S.Container>
	)
}