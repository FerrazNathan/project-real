/* eslint-disable react/prop-types */
import React from 'react'
import * as S from './styles'

export default function BannerWords({ text, title, hello, src }) {
	return (
		<S.Section>
			<S.Container>
				<h1>{hello}</h1>
				<h1>{title}</h1>
				<p>{text}</p>
				<img src={src} />
			</S.Container>
		</S.Section>
	)
}
