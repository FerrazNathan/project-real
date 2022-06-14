/* eslint-disable react/jsx-key */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { A11y, Navigation, Pagination, Autoplay } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import styles from './styles.module.css'
// import { urlImagesCell } from '../../mock'

export default function Sliders({ settings, children }) {

	return (
		<Swiper className={styles.content}
			modules=
				{[Navigation, Pagination, A11y, Autoplay]}
			{...settings}
		>
			{children}
			<div className={styles.container}>
				<SwiperSlide className={styles.single}>
					<img src='./foto1.jpg' />
				</SwiperSlide>
				<SwiperSlide className={styles.single}>
					<img src='./foto2.jpg' />
				</SwiperSlide>
				<SwiperSlide className={styles.single}>
					<img src='./foto3.jpg' />
				</SwiperSlide>
				<SwiperSlide className={styles.single}>
					<img src='./foto4.jpg' />
				</SwiperSlide>
				<SwiperSlide className={styles.single}>
					<img src='./foto5.jpg' />
				</SwiperSlide>
				<SwiperSlide className={styles.single}>
					<img src='./foto6.jpg' />
				</SwiperSlide>
				<SwiperSlide className={styles.single}>
					<img src='./foto7.jpg' />
				</SwiperSlide>
				<SwiperSlide className={styles.single}>
					<img src='./foto8.jpg' />
				</SwiperSlide>
				<SwiperSlide className={styles.single}>
					<img src='./foto9.jpg' />
				</SwiperSlide>
				<SwiperSlide className={styles.single}>
					<img src='./foto10.jpg' />
				</SwiperSlide>
				<SwiperSlide className={styles.single}>
					<img src='./foto11.jpg' />
				</SwiperSlide>
				<SwiperSlide className={styles.single}>
					<img src='./foto12.jpg' />
				</SwiperSlide>
				<SwiperSlide className={styles.single}>
					<img src='./foto13.jpg' />
				</SwiperSlide>
				<SwiperSlide className={styles.single}>
					<img src='./foto14.jpg' />
				</SwiperSlide>
				<SwiperSlide className={styles.single}>
					<img src='./foto15.jpg' />
				</SwiperSlide>
				<SwiperSlide className={styles.single}>
					<img src='./foto16.jpg' />
				</SwiperSlide>
				<SwiperSlide className={styles.single}>
					<img src='./foto17.jpg' />
				</SwiperSlide>
				<SwiperSlide className={styles.single}>
					<img src='./foto18.jpg' />
				</SwiperSlide>
				<SwiperSlide className={styles.single}>
					<img src='./foto19.jpg' />
				</SwiperSlide>
				<SwiperSlide className={styles.single}>
					<img src='./foto20.jpg' />
				</SwiperSlide>
				<SwiperSlide className={styles.single}>
					<img src='./foto21.jpg' />
				</SwiperSlide>
				<SwiperSlide className={styles.single}>
					<img src='./foto22.jpg' />
				</SwiperSlide>
				<SwiperSlide className={styles.single}>
					<img src='./foto23.jpg' />
				</SwiperSlide>
				<SwiperSlide className={styles.single}>
					<img src='./foto24.jpg' />
				</SwiperSlide>
				<SwiperSlide className={styles.single}>
					<img src='./foto25.jpg' />
				</SwiperSlide>
				<SwiperSlide className={styles.single}>
					<img src='./foto26.jpg' />
				</SwiperSlide>
				<SwiperSlide className={styles.single}>
					<img src='./foto27.jpg' />
				</SwiperSlide>
				<SwiperSlide className={styles.single}>
					<img src='./foto28.jpg' />
				</SwiperSlide>
				<SwiperSlide className={styles.single}>
					<img src='./foto29.jpg' />
				</SwiperSlide>
				<SwiperSlide className={styles.single}>
					<img src='./foto30.jpg' />
				</SwiperSlide>
				<SwiperSlide className={styles.single}>
					<img src='./foto31.jpg' />
				</SwiperSlide>
				<SwiperSlide className={styles.single}>
					<img src='./foto32.jpg' />
				</SwiperSlide>
				<SwiperSlide className={styles.single}>
					<img src='./foto33.jpg' />
				</SwiperSlide>
				<SwiperSlide className={styles.single}>
					<img src='./foto34.jpg' />
				</SwiperSlide>
				<SwiperSlide className={styles.single}>
					<img src='./foto35.jpg' />
				</SwiperSlide>
				<SwiperSlide className={styles.single}>
					<img src='./foto36.jpg' />
				</SwiperSlide>
				<SwiperSlide className={styles.single}>
					<img src='./foto37.jpg' />
				</SwiperSlide>
				<SwiperSlide className={styles.single}>
					<img src='./foto38.jpg' />
				</SwiperSlide>
				<SwiperSlide className={styles.single}>
					<img src='./foto39.jpg' />
				</SwiperSlide>
				<SwiperSlide className={styles.single}>
					<img src='./foto40.jpg' />
				</SwiperSlide>
				<SwiperSlide className={styles.single}>
					<img src='./foto41.jpg' />
				</SwiperSlide>
				<SwiperSlide className={styles.single}>
					<img src='./foto42.jpg' />
				</SwiperSlide>
				<SwiperSlide className={styles.single}>
					<img src='./foto43.jpg' />
				</SwiperSlide>
				<SwiperSlide className={styles.single}>
					<img src='./foto44.jpg' />
				</SwiperSlide>
				<SwiperSlide className={styles.single}>
					<img src='./foto45.jpg' />
				</SwiperSlide>
				<SwiperSlide className={styles.single}>
					<img src='./foto46.jpg' />
				</SwiperSlide>
				<SwiperSlide className={styles.single}>
					<img src='./foto47.jpg' />
				</SwiperSlide>
			</div>
		</Swiper >
	)
}
