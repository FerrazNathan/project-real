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
		<>
			<Swiper className={styles.content}
				modules=
					{[Navigation, Pagination, A11y, Autoplay]}
				{...settings}
			>
				{children}
				<div className={styles.container}>
					<SwiperSlide className={styles.single}>
						<img src='https://i.ytimg.com/vi/zVBcCuxFTWo/sddefault.jpg' alt='Foto da célula'/>
					</SwiperSlide>
					<SwiperSlide className={styles.single}>
						<img src='./foto1.jpg' alt='Foto da célula'/>
					</SwiperSlide>
					<SwiperSlide className={styles.single}>
						<img src='./foto2.jpg' alt='Foto da célula'/>
					</SwiperSlide>
					<SwiperSlide className={styles.single}>
						<img src='./foto3.jpg' alt='Foto da célula'/>
					</SwiperSlide>
					<SwiperSlide className={styles.single}>
						<img src='./foto4.jpg' alt='Foto da célula'/>
					</SwiperSlide>
					<SwiperSlide className={styles.single}>
						<img src='./foto5.jpg' alt='Foto da célula'/>
					</SwiperSlide>
					<SwiperSlide className={styles.single}>
						<img src='./foto6.jpg' alt='Foto da célula'/>
					</SwiperSlide>
					<SwiperSlide className={styles.single}>
						<img src='./foto7.jpg' alt='Foto da célula'/>
					</SwiperSlide>
					<SwiperSlide className={styles.single}>
						<img src='./foto8.jpg' alt='Foto da célula'/>
					</SwiperSlide>
					<SwiperSlide className={styles.single}>
						<img src='./foto9.jpg' alt='Foto da célula'/>
					</SwiperSlide>
					<SwiperSlide className={styles.single}>
						<img src='./foto10.jpg' alt='Foto da célula'/>
					</SwiperSlide>
					<SwiperSlide className={styles.single}>
						<img src='./foto11.jpg' alt='Foto da célula'/>
					</SwiperSlide>
					<SwiperSlide className={styles.single}>
						<img src='./foto12.jpg' alt='Foto da célula'/>
					</SwiperSlide>
					<SwiperSlide className={styles.single}>
						<img src='./foto13.jpg' alt='Foto da célula'/>
					</SwiperSlide>
					<SwiperSlide className={styles.single}>
						<img src='./foto14.jpg' alt='Foto da célula'/>
					</SwiperSlide>
					<SwiperSlide className={styles.single}>
						<img src='./foto15.jpg' alt='Foto da célula'/>
					</SwiperSlide>
					<SwiperSlide className={styles.single}>
						<img src='./foto16.jpg' alt='Foto da célula'/>
					</SwiperSlide>
					<SwiperSlide className={styles.single}>
						<img src='./foto17.jpg' alt='Foto da célula'/>
					</SwiperSlide>
					<SwiperSlide className={styles.single}>
						<img src='./foto18.jpg' alt='Foto da célula'/>
					</SwiperSlide>
					<SwiperSlide className={styles.single}>
						<img src='./foto19.jpg' alt='Foto da célula'/>
					</SwiperSlide>
					<SwiperSlide className={styles.single}>
						<img src='./foto20.jpg' alt='Foto da célula'/>
					</SwiperSlide>
					<SwiperSlide className={styles.single}>
						<img src='./foto21.jpg' alt='Foto da célula'/>
					</SwiperSlide>
					<SwiperSlide className={styles.single}>
						<img src='./foto22.jpg' alt='Foto da célula'/>
					</SwiperSlide>
					<SwiperSlide className={styles.single}>
						<img src='./foto23.jpg' alt='Foto da célula'/>
					</SwiperSlide>
					<SwiperSlide className={styles.single}>
						<img src='./foto24.jpg' alt='Foto da célula'/>
					</SwiperSlide>
					<SwiperSlide className={styles.single}>
						<img src='./foto25.jpg' alt='Foto da célula'/>
					</SwiperSlide>
					<SwiperSlide className={styles.single}>
						<img src='./foto26.jpg' alt='Foto da célula' />
					</SwiperSlide>
					<SwiperSlide className={styles.single}>
						<img src='./foto27.jpg' alt='Foto da célula'/>
					</SwiperSlide>
					<SwiperSlide className={styles.single}>
						<img src='./foto28.jpg' alt='Foto da célula'/>
					</SwiperSlide>
					<SwiperSlide className={styles.single}>
						<img src='./foto29.jpg' alt='Foto da célula'/>
					</SwiperSlide>
					<SwiperSlide className={styles.single}>
						<img src='./foto30.jpg' alt='Foto da célula'/>
					</SwiperSlide>
					<SwiperSlide className={styles.single}>
						<img src='./foto31.jpg' alt='Foto da célula'/>
					</SwiperSlide>
					<SwiperSlide className={styles.single}>
						<img src='./foto32.jpg' alt='Foto da célula'/>
					</SwiperSlide>
					<SwiperSlide className={styles.single}>
						<img src='./foto33.jpg' alt='Foto da célula' />
					</SwiperSlide>
					<SwiperSlide className={styles.single}>
						<img src='./foto34.jpg' alt='Foto da célula'/>
					</SwiperSlide>
					<SwiperSlide className={styles.single}>
						<img src='./foto35.jpg' alt='Foto da célula'/>
					</SwiperSlide>
					<SwiperSlide className={styles.single}>
						<img src='./foto36.jpg' alt='Foto da célula'/>
					</SwiperSlide>
					<SwiperSlide className={styles.single}>
						<img src='./foto37.jpg' alt='Foto da célula'/>
					</SwiperSlide>
					<SwiperSlide className={styles.single}>
						<img src='./foto38.jpg' alt='Foto da célula'/>
					</SwiperSlide>
					<SwiperSlide className={styles.single}>
						<img src='./foto39.jpg' alt='Foto da célula'/>
					</SwiperSlide>
					<SwiperSlide className={styles.single}>
						<img src='./foto40.jpg' alt='Foto da célula'/>
					</SwiperSlide>
					<SwiperSlide className={styles.single}>
						<img src='./foto41.jpg' alt='Foto da célula'/>
					</SwiperSlide>
					<SwiperSlide className={styles.single}>
						<img src='./foto42.jpg' alt='Foto da célula'/>
					</SwiperSlide>
					<SwiperSlide className={styles.single}>
						<img src='./foto43.jpg' alt='Foto da célula'/>
					</SwiperSlide>
					<SwiperSlide className={styles.single}>
						<img src='./foto44.jpg' alt='Foto da célula'/>
					</SwiperSlide>
					<SwiperSlide className={styles.single}>
						<img src='./foto45.jpg' alt='Foto da célula'/>
					</SwiperSlide>
					<SwiperSlide className={styles.single}>
						<img src='./foto46.jpg' alt='Foto da célula'/>
					</SwiperSlide>
					<SwiperSlide className={styles.single}>
						<img src='./foto47.jpg' alt='Foto da célula'/>
					</SwiperSlide>
				</div>
			</Swiper >
		</>
	)
}
