export const redirect = (pages) => {
	window.location.href= pages
}

export const clearing = () => {
	localStorage.removeItem('members')
}

export const leader = (urlParams) => {
	if(urlParams?.leader === 'felipe') {
		return(<img src='./icone-ok.png' alt='ícone de correto' />)
	}
	else {
		return(<img src='./icone-x.png' alt='ícone de incorreto' />)
	}
}

export const birthDateCell = (urlParams) => {
	if(urlParams?.birthDateCell === '2011') {
		return(<img src='./icone-ok.png' alt='ícone de correto' />)
	}
	else {
		return(<img src='./icone-x.png' alt='ícone de incorreto' />)
	}
}

export const firstCellNumber = (urlParams) => {
	if(urlParams?.firstCellNumber === '08') {
		return(<img src='./icone-ok.png' alt='ícone de correto' />)
	}
	else {
		return(<img src='./icone-x.png' alt='ícone de incorreto' />)
	}
}

export const cellLocation = (urlParams) => {
	if(urlParams?.cellLocation === 'caçula') {
		return(<img src='./icone-ok.png' alt='ícone de correto' />)
	}
	else {
		return(<img src='./icone-x.png' alt='ícone de incorreto' />)
	}
}

export const dayCell = (urlParams) => {
	if(urlParams?.dayCell === 'sábado') {
		return(<img src='./icone-ok.png' alt='ícone de correto' />)
	}
	else {
		return(<img src='./icone-x.png' alt='ícone de incorreto' />)
	}
}

export const leaderArrived = (urlParams) => {
	if(urlParams?.leaderArrived === '2009') {
		return(<img src='./icone-ok.png' alt='ícone de correto' />)
	}
	else {
		return(<img src='./icone-x.png' alt='ícone de incorreto' />)
	}
}

export const shepherdName = (urlParams) => {
	if(urlParams?.shepherdName === 'régis') {
		return(<img src='./icone-ok.png' alt='ícone de correto' />)
	}
	else {
		return(<img src='./icone-x.png' alt='ícone de incorreto' />)
	}
}

export const communion = (urlParams) => {
	if(urlParams?.communion === 'salgados') {
		return(<img src='./icone-ok.png' alt='ícone de correto' />)
	}
	else {
		return(<img src='./icone-x.png' alt='ícone de incorreto' />)
	}
}

export const disciplerName = (urlParams) => {
	if(urlParams?.disciplerName === 'elaine') {
		return(<img src='./icone-ok.png' alt='ícone de correto' />)
	}
	else {
		return(<img src='./icone-x.png' alt='ícone de incorreto' />)
	}
}

export const howManyMembers = (urlParams) => {
	if(urlParams?.howManyMembers === '12') {
		return(<img src='./icone-ok.png' alt='ícone de correto' />)
	}
	else {
		return(<img src='./icone-x.png' alt='ícone de incorreto' />)
	}
}
