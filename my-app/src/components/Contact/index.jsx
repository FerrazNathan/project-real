import React from 'react'
import { BsWhatsapp } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import { BsFacebook } from 'react-icons/bs'
import { HiOutlineMail } from 'react-icons/hi'
import * as S from './styles'

export default function index() {
	return (
		<S.Container>
			<p>Contatos</p>
			<S.ContentIcon>
				<a href="https://www.facebook.com/nathan.ferraz.58" target="_blank" rel="noreferrer">
					<BsFacebook style={{color: '#fce799' }} />
				</a>
			</S.ContentIcon>
			<S.ContentIcon>
				<a
					href="https://instagram.com/feoulip?igshid=YmMyMTA2M2Y="
					target="_blank" rel="noreferrer"
				>
					<BsInstagram style={{color: '#fce799'}} />
				</a>
			</S.ContentIcon>
			<S.ContentIcon>
				<a
					href="https://web.whatsapp.com/send?phone=+5511910282739"
					target="_blank" rel="noreferrer"
				>
					<BsWhatsapp style={{color: '#fce799'}} />
				</a>
			</S.ContentIcon>
			<S.ContentIcon>
				<a
					href="https://outlook.live.com/mail/0/"
					target="_blank" rel="noreferrer"
				>
					<HiOutlineMail style={{color: '#fce799' }} />
				</a>
			</S.ContentIcon>
		</S.Container>
	)
}
