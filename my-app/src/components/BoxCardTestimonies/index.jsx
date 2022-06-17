import React from 'react'
import * as S from './styles'
import CardTestimonies from '../Card'
import BannerWords from '../BannerWords'

export default function BoxCardTestimonies() {
	return (
		<>
			<BannerWords title='Testemunhos poderosos'/>
			<S.Video>
				<CardTestimonies text='Deive Leonardo conta sua história com Jesus' video='https://www.youtube.com/embed/9-FiOjmIOCY' width={387}/>
				<CardTestimonies text='Testemunho Rodolfo Abrantes' video='https://www.youtube.com/embed/hRctjkAKOD0' width={387} />
				<CardTestimonies text='Testemunho Fernandinho' video='https://www.youtube.com/embed/IMpEcBMkqhA' width={387}/>
				<CardTestimonies text='O dia que Jesus converteu minha lingua' video='https://www.youtube.com/embed/quA8MetjuQs' width={387} />
			</S.Video>
		</>
	)
}
