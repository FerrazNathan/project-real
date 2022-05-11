/* eslint-disable react/prop-types */
import React from 'react'
import * as S from './styles'

export default function BannerWords({ text, title }) {
	return (
		<S.Section>
			<S.Container>
				<h1>{text}</h1>
				<p>{title}</p>
			</S.Container>
		</S.Section>
	)
}
