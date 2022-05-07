/* eslint-disable react/prop-types */
import React from 'react'
import * as S from './styles'
import { Swiper, SwiperSlide } from 'swiper/react'
import { A11y, Navigation, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './slider.module.css'

export default function Sliders({ settings, children }) {

	return (
		<Swiper
			modules=
				{[Navigation, Pagination, A11y]}
			{...settings}
		>
			{children}
			<S.Container>
				<SwiperSlide>
					<a href='/members'>
						<img src='https://i1.sndcdn.com/avatars-000110228955-57sa1f-t500x500.jpg' />
					</a>
				</SwiperSlide>
				<SwiperSlide>
					<a href='/words'>
						<img src='https://i1.sndcdn.com/avatars-000110228955-57sa1f-t500x500.jpg' />
					</a>
				</SwiperSlide>
				<SwiperSlide>
					<a href='/events'>
						<img src='https://i1.sndcdn.com/avatars-000110228955-57sa1f-t500x500.jpg' />
					</a>
				</SwiperSlide>
				<SwiperSlide>
					<a href='/testimonies'>
						<img src='https://i1.sndcdn.com/avatars-000110228955-57sa1f-t500x500.jpg' />
					</a>
				</SwiperSlide>
				<SwiperSlide>
					<a href='/ourCell'>
						<img src='https://i1.sndcdn.com/avatars-000110228955-57sa1f-t500x500.jpg' />
					</a>
				</SwiperSlide>
				<SwiperSlide>
					<a href='/contacts'>
						<img src='https://i1.sndcdn.com/avatars-000110228955-57sa1f-t500x500.jpg' />
					</a>
				</SwiperSlide>
			</S.Container>
		</Swiper>
	)
}
