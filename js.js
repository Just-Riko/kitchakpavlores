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

for (i of mod) {
    if (i.selector == '.dot1') {
        for (let i = 0; i < 4; i++){
            setTimeout(()=>$dot[0].children[i].classList.add('active'),time)
            time+=200
        }
    }
    if (i.selector == '.dot2') {
        for (let i = 0; i < 4; i++){
            setTimeout(()=>$dot[1].children[i].classList.add('active'),time)
            time+=200
        }
    }
    if (i.selector == '.dot3') {
        for (let i = 0; i < 3; i++){
            setTimeout(()=>$dot[2].children[i].classList.add('active'),time)
            time+=200
        }
    }
    if (i.selector == '.dot4') {
        setTimeout(()=>$dot[3].children[0].classList.add('active'),time)
        time+=200
    }
    if (i.selector == '.dot5'){
        for (let i = 0; i < 3; i++){
            setTimeout(()=>$dot[4].children[i].classList.add('active'),time)
            time+=200
        }
    }
}