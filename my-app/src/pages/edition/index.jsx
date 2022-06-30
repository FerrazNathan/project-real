import React from 'react';
import EditDelete from '../../components/EditDelete';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Banner from '../../components/Banner';
import BannerWords from '../../components/BannerWords';
import * as S from './styles';

export default function Edition() {
  return (
    <div>
      <Header />
      <S.Banner>
        <Banner img="./members.jpeg" />
      </S.Banner>
      <BannerWords title="Sessão para Editar ou Remover membros" />
      <EditDelete />
      <Footer />
    </div>
  );
}
