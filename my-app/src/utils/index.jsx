export const redirect = (pages) => {
	window.location.href= pages
}

export const clearing = () => {
	localStorage.removeItem('members')
}