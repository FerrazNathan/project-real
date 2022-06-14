import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Banner from '../../components/Banner'
import * as S from './styles'
import Quiz from '../../components/Quiz'
import SliderImage from '../../components/SliderImages'

export default function OurCell() {

	const settings = {
		spaceBetween: 8,
		slidesPerView: 3,
		navigation: true,
		loop: true,
		autoplay: {
			delay: 6500,
			disableOnInteraction: false,
		},
		pagination: {
			clickable: true,
		},
	}

	return (
		<div>
			<Header />
			<S.Banner>
				<Banner img='./testemunho.jpg' />
			</S.Banner>
			<SliderImage settings={settings} />
			<Quiz />
			<Footer />
		</div>
	)
}