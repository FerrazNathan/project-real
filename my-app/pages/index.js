import styles from '../styles/Home.module.css'
import Sliders from '../components/Sliders'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Home() {
	return (
		<div className={styles.container}>
			<Header />
			<Sliders />
			<Footer />
		</div>
	)
}
