const inpWrap = document.querySelector('.inp-wrap');
const input = document.querySelector('.inp-anim');
const validation = document.querySelector('.inp-wrap span');

input.addEventListener('input', (e) => {

  if(e.target.value !== ""){
    e.target.parentNode.classList.add('active-input')
  } else if (e.target.value === "") {
    e.target.parentNode.classList.remove('active-input')
  }

  if (e.target.value.includes('$')) {
    input.classList.add('error');
    validation.classList.add('visible');
  } else {
    input.classList.remove('error');
    validation.classList.remove('visible');
  }

})