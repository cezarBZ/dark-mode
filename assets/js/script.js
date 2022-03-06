const body = document.getElementsByTagName('body')[0]
const footer = document.getElementsByTagName('footer')[0]
const h1 = document.getElementById('page-title')
const button = document.getElementById('mode-selector')

const changeTheme = () => {
	changeClasses()
	changeText()
}

const changeClasses = () => {
	body.classList.toggle('dark-mode')
	footer.classList.toggle('dark-mode')
	h1.classList.toggle('dark-mode')
	button.classList.toggle('dark-mode')
}

const changeText = () => {
	if(body.classList.contains('dark-mode')) {
		h1.innerHTML = 'Dark Mode ON'
		button.innerHTML = 'Light Mode'
		return
	}
	h1.innerHTML = 'Light Mode ON'
	button.innerHTML = 'Dark Mode'
}

button.addEventListener('click', changeTheme)