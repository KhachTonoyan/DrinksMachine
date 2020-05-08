let buttons = document.getElementsByClassName("items")
let display = document.getElementById("dis")
let ok = document.getElementById("ok")
let sum = 0

ok.onclick = () => {
	let cash = document.getElementById("cash").value
	if(cash ==50 || cash ==100 || cash ==200 || cash ==500){
		sum = sum + +cash
		display.innerHTML = `You have ${sum} AMD`
		document.getElementById("cash").value=""	
	}
	else{
		display.innerHTML = "You can use only 50,100,200,500 coins"
		cash=0
	}
	
}

for(let i=0;i<buttons.length;i++){
	buttons[i].onclick = function () {
		if(this.value < sum){
			sum = sum - this.value
			display.innerHTML = `Thank you:) Take your change ${sum}`
			sum = 0
		}
		else if(this.value == sum){
			sum = sum - this.value
			display.innerHTML = `Thank you:)`
			
		}
		else{
			display.innerHTML = `You don't input enough money`
		}
	}
}