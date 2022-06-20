import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Quiz from '../../components/Quiz'
import SliderImage from '../../components/SliderImages'
import InformativeCell from '../../components/InformativeCell'
// import * as S from './styles'

export default function OurCell() {

	const settings = {
		spaceBetween: 8,
		slidesPerView: 3,
		navigation: true,
		loop: true,
		autoplay: {
			delay: 4500,
			disableOnInteraction: false,
		},
		pagination: {
			clickable: true,
		},
	}

	return (
		<div>
			<Header />
			<SliderImage settings={settings} />
			<InformativeCell />
			<Quiz />
			<Footer />
		</div>
	)
}