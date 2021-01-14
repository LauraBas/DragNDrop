const fill = document.querySelector('.fill')
const empties = document.querySelectorAll('.empty')

fill.addEventListener('dragstart',dragStart)
fill.addEventListener('dragend',dragEnd)

for(const empty of empties) {

}

function dragStart() {
    this.className += ' hold';
    setTimeout(()=> (this.className = 'invisible'), 0);
}

function dragEnd() {
}

function dragOver(e) {

}

function dragEnter(e) {

}

function dragLeave() {

}

function dragDrop() {

}