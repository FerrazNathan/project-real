import Sliders from '../../components/Sliders';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import styles from '../../../styles/Home.module.css';
import CardCell from '../../components/CardCell';
import BoxCardVideo from '../../components/BoxCardVideo';
import BoxCardNews from '../../components/BoxCardNews';
import BoxCardTestimonies from '../../components/BoxCardTestimonies';
import * as S from './styles';

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
  };

  return (
    <S.Container>
      <Header />
      <Sliders settings={settings} />
      <CardCell />
      <BoxCardVideo />
      <BoxCardNews />
      <BoxCardTestimonies />
      <Footer />
    </S.Container>
  );
}
