function btn(e) {
    document.getElementById('inp').value += e
}


function eq() {
    var getValue = document.getElementById('inp')
    getValue.value = eval(getValue.value)

}

function clearall() {
    document.getElementById('inp').value = ' '

}

function clr() {
    var getValue = document.getElementById('inp')
    getValue.value = getValue.value.slice(0, -1)

}
