/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React from 'react'
import * as S from './styles'
import { Swiper, SwiperSlide } from 'swiper/react'
import { A11y, Navigation, Pagination, Autoplay } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import styles from './styles.module.css'
import { redirect } from '../../utils'

export default function Sliders({ settings, children }) {
	return (
		<Swiper
			className={styles.content}
			modules={[Navigation, Pagination, A11y, Autoplay]}
			{...settings}
		>
			{children}
			<S.Container className={styles.container}>
				<SwiperSlide className={styles.single}>
					<a onClick={() => redirect('/members')}>
						<img src="./members.jpeg" alt='Banner da pagina de membros'/>
					</a>
				</SwiperSlide>
				<SwiperSlide className={styles.single}>
					<a onClick={() => redirect('/words')}>
						<img src="https://i.ytimg.com/vi/JzvI1Utww3U/maxresdefault.jpg" alt='Banner da pagina de palavras'/>
					</a>
				</SwiperSlide>
				<SwiperSlide className={styles.single}>
					<a onClick={() => redirect('/events')}>
						<img src="./bg_conv.png" alt='Banner da pagina de eventos'/>
					</a>
				</SwiperSlide>
				<SwiperSlide className={styles.single}>
					<a onClick={() => redirect('/testimonies')}>
						<img src="./testemunho.jpg" alt='Banner da pagina de testemunhos'/>
					</a>
				</SwiperSlide>
				<SwiperSlide className={styles.single}>
					<a onClick={() => redirect('/ourCell')}>
						<img src="http://www.videirafrankfurt.de/img/celula.jpg" alt='Banner da pagina da nossa célula'/>
					</a>
				</SwiperSlide>
			</S.Container>
		</Swiper>
	)
}
