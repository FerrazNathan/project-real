import React from 'react'
import * as S from './styles'
import CardVideo from '../Card'
import BannerWords from '../BannerWords'
import { dataText } from '../../common/constants/dataText'

export default function BoxCardVideo() {
	return (
		<>
			<BannerWords title={dataText.WORDSSHEPERD}/>
			<S.Video>
				<CardVideo text='Como ser dirigido pelo Espírito Santo' video='https://www.youtube.com/embed/WaHQXmxjH8g' width={387}/>
				<CardVideo text='Gaste seus dias para viver o propósito de Deus' video='https://www.youtube.com/embed/XeyRxb3jN3Q' width={387}/>
				<CardVideo text='O drama da cruz' video='https://www.youtube.com/embed/5hrffbE9tpY' width={387} />
				<CardVideo text='Paternidade para as nações' video='https://www.youtube.com/embed/2KQCN_4Q9EU' width={387} />
				<CardVideo text='O Pai Pródigo' video='https://www.youtube.com/embed/vDSt-RuEgcQ' width={387}/>
				<CardVideo text='Graça sobrenatural' video='https://www.youtube.com/embed/ChIPwSGlpJU' width={387} />
			</S.Video>
		</>
	)
}
