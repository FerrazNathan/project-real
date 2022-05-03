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
					<h3>1</h3>
				</div>
				<div>
					<h3>2</h3>
				</div>
				<div>
					<h3>3</h3>
				</div>
				<div>
					<h3>4</h3>
				</div>
				<div>
					<h3>5</h3>
				</div>
				<div>
					<h3>6</h3>
				</div>
			</Slider>
		</S.Container>
	)
}
