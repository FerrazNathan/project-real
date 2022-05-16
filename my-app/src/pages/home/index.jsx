import Sliders from '../../components/Sliders'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import styles from '../../../styles/Home.module.css'
import CardCell from '../../components/CardCell'
import BoxCardVideo from '../../components/BoxCardVideo'
import BoxCardNews from '../../components/BoxCardNews'

export default function Home() {

	const settings = {
		spaceBetween: 0,
		slidesPerView: 1,
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
		<div className={styles.container}>
			<Header />
			<Sliders settings={settings} />
			<CardCell />
			<BoxCardVideo />
			<BoxCardNews />
			<Footer />
		</div>
	)
}