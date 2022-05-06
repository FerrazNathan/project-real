import React from 'react'
import Slider from 'react-slick'
import * as S from './styles'

export default function Sliders() {

	const settings = {
		dots: true,
		infinite: false,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1
	}

	return (
		<S.Container>
			<Slider {...settings}>
				<div>
					<h1>1</h1>
				</div>
				<div>
					<h1>2</h1>
				</div>
				<div>
					<h1>3</h1>
				</div>
				<div>
					<h1>4</h1>
				</div>
				<div>
					<h1>5</h1>
				</div>
				<div>
					<h1>6</h1>
				</div>
			</Slider>
		</S.Container>
	)
}
