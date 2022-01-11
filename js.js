const mod = [
    { selector: '.dot1', active: 4 },
    { selector: '.dot2', active: 4 },
    { selector: '.dot3', active: 3 },
    { selector: '.dot4', active: 1 },
    { selector: '.dot5', active: 3 }
]

const $dot = [document.querySelector('.dot1'), document.querySelector('.dot2'),
document.querySelector('.dot3'), document.querySelector('.dot4'), document.querySelector('.dot5')]

function some(){
    for (let i = 0; i < 5; i++){
        $dot[i].insertAdjacentHTML('afterbegin', `
        <div class="dots"></div>
        <div class="dots"></div>
        <div class="dots"></div>
        <div class="dots"></div>
        <div class="dots"></div>`)
    }
}

some()

let time = 600;

for (let x = 0; x < mod.length; x++) {
    for (let i = 0; i < mod[x].active; i++){
        setTimeout(()=>$dot[x].children[i].classList.add('active'),time)
        time+=200
    }
}