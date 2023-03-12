let body = document.body
let Chars = document.getElementById('Chars')
let Blocks = document.getElementById('Blocks')

let CharsX = 400
eventKeys = ''
body.addEventListener('keypress',function(event){
	if(event.key == 'x'){
		eventKeys = 'x'
	}else if(event.key == 'y'){
		eventKeys = 'y'
	}
})
function move(){
	let ChangeX = Math.random() * 750
	let FloorX = Math.floor(ChangeX)
	if (parseInt(window.getComputedStyle(Blocks).getPropertyValue('margin-top')) == 599){
		Blocks.style.marginLeft = FloorX.toString() + 'px'
	}
}

function Colition(){
	let getY = parseInt(window.getComputedStyle(Blocks).getPropertyValue('margin-top'))
	let getX = parseInt(window.getComputedStyle(Blocks).getPropertyValue('margin-left'))
	for (let i=0; i<50; i++){
		if (getY > 450 && getY < 500 && getX + i == CharsX){
			alert('YOU CRASHED')
		}else if(getY + 30 == 450 && CharsX  - i == getX){
			alert('YOU CRAHED')
		}else if(getY +30 == 450 && CharsX + i == getX){
			alert('YOU CRASHED')
		}else if(getY < 450 && getY > 400 && getX + i == CharsX){
			alert('YOU CRASHED')
		}
	}
}

setInterval(Colition,15)

setInterval(move,1)
setInterval(function(){
	if (eventKeys == 'x'){
		CharsX -= 5
		Chars.style.marginLeft = CharsX.toString() + 'px'
	}else if (eventKeys == 'y'){
		CharsX += 5
		Chars.style.marginLeft = CharsX.toString() + 'px'
	}
},10)


setInterval(function(){
	if (CharsX > 750){
		CharsX = 0
	}else if(CharsX < 0){
		CharsX = 750
	}
},10)