import React from 'react'
import * as S from './styles'
import { dataText } from '../../common/constants/dataText'
import {
	explicationCell,
	explicationCell2,
	explicationCell3,
	explicationCell4,
	explicationCell5,
	explicationCell6,
	explicationCell7,
	explicationCell8,
	explicationCell9,
	explicationCell10
} from '../../mock/index'

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
				<p>{explicationCell6}</p>
				<p>{explicationCell7}</p>
				<p>{explicationCell8}</p>
				<p>{explicationCell9}</p>
				<p>{explicationCell10}</p>
			</S.Content>
		</S.Container>
	)
}
