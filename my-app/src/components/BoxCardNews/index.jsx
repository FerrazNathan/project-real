import React from 'react'
import * as S from './styles'
import BannerWords from '../BannerWords'
import { dataText } from '../../common/constants/dataText'
import CardNews from '../CardNews'

export default function BoxCardNews() {
	return (
		<>
			<BannerWords title={dataText.LASTNEWS} />
			<S.Card>
				<CardNews
					title='Célula'
					src='./members.jpeg'
					text='Célula é a nossa maneira de sermos igreja e acreditamso que assim podemos alcançar as pessoas de maneira que leve elas a ter um relacionamento íntimo com Jesus.'
					date='Todos os sábados'
					local='Vila Suissa'
					hour='19:00 horas'
				/>
				<CardNews
					title='Multiplicação'
					src='./foto3.jpg'
					text='A multiplicação da célula acontecerá para que possamos alcançar o maior número de pessoas possível ganhando assim vidas pra Jesus.'
					date= '02/07/2022'
					local= 'Ibav Ribeirão Pires'
					hour='19:00 horas'
				/>
				<CardNews
					title='Casas de paz'
					src='https://s3-sa-east-1.amazonaws.com/inradar.media/uploads/page/None/page-88c658e3c8c307e6158ae2720417e3b5.jpg'
					text='O objetivo é fazer a igreja crescer e cumprir a grande comissão deixada por Jesus: fazer discípulos!'
					date='Toda quarta-feira'
					local= 'Vila Suissa'
					hour='19:00 horas'
				/>
			</S.Card>
		</>
	)
}