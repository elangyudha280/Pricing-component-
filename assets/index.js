


const inputCheck = document.querySelector('#check')
const label = document.querySelector('.input-check')
const circle = document.querySelector('.circle')

label.addEventListener('click',()=>{
    if(!inputCheck.checked){
        circle.classList.add('translate-x-[100%]')
    }else{
        circle.classList.remove('translate-x-[100%]')
    }
})

window.addEventListener('load',()=>{
    inputCheck.checked = false
})