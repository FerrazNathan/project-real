/* eslint-disable react/prop-types */
import React from 'react'
import * as S from './styles'
import { GoLocation } from 'react-icons/go'
import { BsCalendarDate } from 'react-icons/bs'
import { FiClock } from 'react-icons/fi'

export default function CardNews({ title, text, src, date, local, hour }) {
	return (
		<S.Container>
			<S.ContentBody>
				<S.ContentImage>
					<img src={src} />
				</S.ContentImage>
				<S.ContentText>
					<h1>{title}</h1>
					<p>{text}</p>
					<S.ContentInformation>
						<BsCalendarDate />
						<p>{date}</p>
					</S.ContentInformation>
					<S.ContentInformation>
						<GoLocation />
						<p>{local}</p>
					</S.ContentInformation>
					<S.ContentInformation>
						<FiClock />
						<p>{hour}</p>
					</S.ContentInformation>
				</S.ContentText>
			</S.ContentBody>
		</S.Container>
	)
}