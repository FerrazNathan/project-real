import React from 'react'
import * as S from './styles'
import { dataText } from '../../common/constants/dataText'

export default function CardCell() {
	return (
		<S.Container>
			<S.Header>
				<h1>{dataText.WHATISACELL}</h1>
				<p>{dataText.BYSHEPERD}</p>
			</S.Header>
			<S.Content>
				<iframe width="100%" height="100%" src="https://www.youtube.com/embed/fVmIRF-SIc8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
			</S.Content>
		</S.Container>
	)
}
