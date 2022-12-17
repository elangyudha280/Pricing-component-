


const inputCheck = document.querySelector('#check')
const label = document.querySelector('.input-check')
const circle = document.querySelector('.circle')

let textTotal = {
    basic:document.querySelector('.text-total-Basic'),
    professional:document.querySelector('.text-total-Professional'),
    master:document.querySelector('.text-total-Master'),
    changeTo(basic,pro,master){
        this.basic.textContent = basic
        this.professional.textContent = pro
        this.master.textContent = master
        return 
    }

}

label.addEventListener('click',()=>{
        if(!inputCheck.checked){
        circle.classList.remove('translate-x-[100%]')
        textTotal.changeTo('19.99','24.99','39.99')
    }else{
        circle.classList.add('translate-x-[100%]')
        textTotal.changeTo('199.99','249.99','399.99')
    }
})

window.addEventListener('load',()=>{
    inputCheck.checked = true
})