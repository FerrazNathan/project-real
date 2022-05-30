export const redirect = (pages) => {
	window.location.href= pages
}

export const clearing = () => {
	localStorage.removeItem('members')
}

export const leader = (urlParams) => {
	if(urlParams.leader === 'felipe') {
		return(<img src='./icone-ok.png' alt='ícone de correto' />)
	}
	else {
		return(<img src='./icone-x.png' alt='ícone de incorreto' />)
	}
}

export const birthDateCell = (urlParams) => {
	if(urlParams.leader === '2012') {
		return(<img src='./icone-ok.png' alt='ícone de correto' />)
	}
	else {
		return(<img src='./icone-x.png' alt='ícone de incorreto' />)
	}
}

export const firstCellNumber = (urlParams) => {
	if(urlParams.leader === '08') {
		return(<img src='./icone-ok.png' alt='ícone de correto' />)
	}
	else {
		return(<img src='./icone-x.png' alt='ícone de incorreto' />)
	}
}

export const cellLocation = (urlParams) => {
	if(urlParams.leader === 'cacula') {
		return(<img src='./icone-ok.png' alt='ícone de correto' />)
	}
	else {
		return(<img src='./icone-x.png' alt='ícone de incorreto' />)
	}
}

export const dayCell = (urlParams) => {
	if(urlParams.leader === 'sabado') {
		return(<img src='./icone-ok.png' alt='ícone de correto' />)
	}
	else {
		return(<img src='./icone-x.png' alt='ícone de incorreto' />)
	}
}

export const leaderArrived = (urlParams) => {
	if(urlParams.leader === '2009') {
		return(<img src='./icone-ok.png' alt='ícone de correto' />)
	}
	else {
		return(<img src='./icone-x.png' alt='ícone de incorreto' />)
	}
}

export const shepherdName = (urlParams) => {
	if(urlParams.leader === 'regis') {
		return(<img src='./icone-ok.png' alt='ícone de correto' />)
	}
	else {
		return(<img src='./icone-x.png' alt='ícone de incorreto' />)
	}
}

export const communion = (urlParams) => {
	if(urlParams.leader === 'salgados') {
		return(<img src='./icone-ok.png' alt='ícone de correto' />)
	}
	else {
		return(<img src='./icone-x.png' alt='ícone de incorreto' />)
	}
}

export const disciplerName = (urlParams) => {
	if(urlParams.leader === 'elaine') {
		return(<img src='./icone-ok.png' alt='ícone de correto' />)
	}
	else {
		return(<img src='./icone-x.png' alt='ícone de incorreto' />)
	}
}

export const howManyMembers = (urlParams) => {
	if(urlParams.leader === '12') {
		return(<img src='./icone-ok.png' alt='ícone de correto' />)
	}
	else {
		return(<img src='./icone-x.png' alt='ícone de incorreto' />)
	}
}
