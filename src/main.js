import './style.css'

const controls = {
	dialog_open: false,

}

const gossip = document.createElement("dialog")

document.addEventListener("keydown", evt => {
	if (["Enter", "Tab", "Backspace"].includes(evt.key))
		evt.preventDefault()
	console.log(key)
	switch (evt.key) {
		case "Enter":
		case "Tab":
		case "Backspace":
		default:
	}
})
