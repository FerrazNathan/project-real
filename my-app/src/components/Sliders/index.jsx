/* eslint-disable react/prop-types */
import React from 'react'
import * as S from './styles'
import { Swiper, SwiperSlide } from 'swiper/react'
import { A11y, Navigation, Pagination, Autoplay } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './Slider.module.css'

export default function Sliders({ settings, children }) {

	return (
		<Swiper className='container'
			modules=
				{[Navigation, Pagination, A11y, Autoplay]}
			{...settings}
		>
			{children}
			<S.Container>
				<SwiperSlide className='single'>
					<a href='/members'>
						<img src='https://i0.wp.com/iamanovercomer.org/cotestluc/wp-content/uploads/2014/01/cell_groups.jpg?w=840' />
					</a>
				</SwiperSlide>
				<SwiperSlide className='single'>
					<a href='/words'>
						<img src='https://i.ytimg.com/vi/JzvI1Utww3U/maxresdefault.jpg' />
					</a>
				</SwiperSlide>
				<SwiperSlide className='single'>
					<a href='/events'>
						<img src='https://s3-sa-east-1.amazonaws.com/inradar.media/uploads/page/None/page-88c658e3c8c307e6158ae2720417e3b5.jpg' />
					</a>
				</SwiperSlide>
				<SwiperSlide className='single'>
					<a href='/testimonies'>
						<img src='https://thumbor.guiame.com.br/unsafe/840x500/http://media.guiame.com.br/archives/2019/10/24/4085184020-jovens-em-igreja.jpg' />
					</a>
				</SwiperSlide>
				<SwiperSlide className='single'>
					<a href='/ourCell'>
						<img src='https://i.ytimg.com/vi/zVBcCuxFTWo/sddefault.jpg' />
					</a>
				</SwiperSlide>
				<SwiperSlide className='single'>
					<a href='/contacts'>
						<img src='https://tm.ibxk.com.br/2021/10/04/04125619753191.jpg?ims=1120x420' />
					</a>
				</SwiperSlide>
			</S.Container>
		</Swiper >
	)
}