import styles from '../styles/Home.module.css'
import Sliders from '../components/Sliders'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Home() {

	const settings = {
		spaceBetween: 10,
		slidesPerView: 1,
		navigation: true,
		loop: true,
		autoplay: {
			delay: 3500,
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
			<Footer />
		</div>
	)
}
