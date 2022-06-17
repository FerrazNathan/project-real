import React from 'react'
import * as S from './styles'
import CardVideo from '../Card'
import BannerWords from '../BannerWords'

export default function BoxCardTestimonies() {
	return (
		<>
			<BannerWords title='Testemunhos poderosos'/>
			<S.Video>
				<CardVideo text='Deive Leonardo conta sua história com Jesus' video='https://www.youtube.com/embed/9-FiOjmIOCY'/>
				<CardVideo text='Testemunho Rodolfo Abrantes' video='https://www.youtube.com/embed/hRctjkAKOD0'/>
				<CardVideo text='Testemunho Fernandinho' video='https://www.youtube.com/embed/IMpEcBMkqhA'/>
				<CardVideo text='O dia que Jesus converteu minha lingua' video='https://www.youtube.com/embed/quA8MetjuQs'/>
			</S.Video>
		</>
	)
}
