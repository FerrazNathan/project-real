import React from 'react'
import * as S from './styles'
import Card from '../Card'
import BannerWords from '../BannerWords'
import { dataText } from '../../common/constants/dataText'

export default function BoxCard() {
	return (
		<>
			<BannerWords text={dataText.WORDSSHEPERD}/>
			<S.Video>
				<Card text='Como ser dirigido pelo Espírito Santo' video='https://www.youtube.com/embed/WaHQXmxjH8g' />
				<Card text='Gaste seus dias para viver o propósito de Deus' video='https://www.youtube.com/embed/XeyRxb3jN3Q' />
				<Card text='O drama da cruz' video='https://www.youtube.com/embed/5hrffbE9tpY' />
				<Card text='Paternidade para as nações' video='https://www.youtube.com/embed/2KQCN_4Q9EU' />
			</S.Video>
		</>
	)
}
