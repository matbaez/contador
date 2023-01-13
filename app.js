const display = document.querySelector('.counter-preview');
const allBtns = document.querySelector('#allBtns');

allBtns.addEventListener('click', counter);

let value = 0;
function counter(e){
	const btn = e.target.id;
	if(btn ==='increment'){
		value++;
	} else if(btn === 'decrement'){
		value --;
	}else{
		value = 0;
	}

	display.textContent = value; 
}