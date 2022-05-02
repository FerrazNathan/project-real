import React from 'react'
import * as S from './styles'
import { dataText } from '../../src/common/constants/dataText'

export default function Error() {
	return (
		<S.Container>
			<S.Content>
				<h1>{dataText.ERROR}</h1>
				<p>{dataText.ERRORTEXT}</p>
				<p>{dataText.ERRORTEXTTWO}</p>
				<p>{dataText.ERRORINVITE}</p>
			</S.Content>
		</S.Container>
	)
}