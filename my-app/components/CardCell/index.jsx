import React from 'react'
import * as S from './styles'
import { dataText } from '../../src/common/constants/dataText'
import { explicationCell, explicationCell2, explicationCell3, explicationCell4, explicationCell5 } from '../../src/mock'

export default function CardCell() {
	return (
		<S.Container>
			<S.Header>
				<h1>{dataText.WHATISACELL}</h1>
				<p>{dataText.BYSHEPERD}</p>
			</S.Header>
			<S.Content>
				<p>{explicationCell}</p>
				<p>{explicationCell2}</p>
				<p>{explicationCell3}</p>
				<p>{explicationCell4}</p>
				<p>{explicationCell5}</p>
			</S.Content>
		</S.Container>
	)
}
