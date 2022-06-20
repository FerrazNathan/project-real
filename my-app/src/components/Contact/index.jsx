import React from 'react';
import BannerWords from '../BannerWords';
import { BsWhatsapp } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { BsFacebook } from 'react-icons/bs';
import * as S from './styles';

export default function index() {
  return (
    <>
      <BannerWords
        title="Venha fazer parte da nossa célula"
        text="Entre em contato conosco"
      />
      <S.Container>
        <S.ContentIcon>
          <a href="https://www.facebook.com/nathan.ferraz.58" target="_blank">
            <BsFacebook style={{ width: '5%', height: '5%' }} />
          </a>
        </S.ContentIcon>
        <S.ContentIcon>
          <a
            href="https://instagram.com/feoulip?igshid=YmMyMTA2M2Y="
            target="_blank"
          >
            <BsInstagram style={{ width: '5%', height: '5%' }} />
          </a>
        </S.ContentIcon>
        <S.ContentIcon>
          <a
            href="https://web.whatsapp.com/send?phone=+5511910282739"
            target="_blank"
          >
            <BsWhatsapp style={{ width: '5%', height: '5%' }} />
          </a>
        </S.ContentIcon>
      </S.Container>
    </>
  );
}
