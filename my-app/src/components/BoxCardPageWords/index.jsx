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
				<CardVideo text='Como ser dirigido pelo Espírito Santo' video='https://www.youtube.com/embed/WaHQXmxjH8g' width={387} />
				<CardVideo text='Gaste os dias para viver o propósito de Deus' video='https://www.youtube.com/embed/XeyRxb3jN3Q' width={387} />
				<CardVideo text='O drama da cruz' video='https://www.youtube.com/embed/5hrffbE9tpY' width={387} />
				<CardVideo text='Paternidade para as nações' video='https://www.youtube.com/embed/2KQCN_4Q9EU' width={387} />
				<CardVideo text='O Pai Pródigo' video='https://www.youtube.com/embed/vDSt-RuEgcQ' width={387} />
				<CardVideo text='Graça sobrenatural' video='https://www.youtube.com/embed/ChIPwSGlpJU' width={387} />
				<CardVideo text='A fé que vence o medo' video='https://www.youtube.com/embed/HqdQ94g0TYQ' width={387} />
				<CardVideo text='A grande troca do calvário' video='https://www.youtube.com/embed/HHqmGgBXhDI' width={387} />
				<CardVideo text='Os sonhos nunca morrem' video='https://www.youtube.com/embed/l6_qt2XkABg' width={387} />
				<CardVideo text='Removendo as cizas e Renovando o fogo' video='https://www.youtube.com/embed/bHB2wM6XiKc' width={387} />
				<CardVideo text='Nós somos a carta' video='https://www.youtube.com/embed/i2CFS_2Vehg' width={387} />
				<CardVideo text='Sinais de que Jesus está em casa' video='https://www.youtube.com/embed/40ntVJ3eJ94' width={387} />
				<CardVideo text='Espírito Santo o Deus esquecido' video='https://www.youtube.com/embed/JJiacaa7jcg' width={387} />
				<CardVideo text='Libertando-se do mal do esquecimento' video='https://www.youtube.com/embed/itnMyXJnK4w' width={387} />
				<CardVideo text='Os 4 cavaleiros do Apocalipse' video='https://www.youtube.com/embed/8Dh4WHPRh74' width={387} />
				<CardVideo text='A volta de Jesus, o ano milenar' video='https://www.youtube.com/embed/hZdP8C2SNmE' width={387} />
				<CardVideo text='A nova ordem mundial' video='https://www.youtube.com/embed/QX6d93ajTr4' width={387} />
				<CardVideo text='Justiça própria' video='https://www.youtube.com/embed/vj2A3A_m6JA' width={387} />
			</S.Video>
		</>
	)
}