let contador = 0
change.onclick = function () {
  if (contador == 0) {
    document.getElementById('text').textContent = ' My name is Jordy'
    contador++
  } else if (contador == 1) {
    document.getElementById('text').textContent = 'como você chama ?'
    contador++
  } else if (contador == 2) {
    document.getElementById('text').textContent = 'Meu nome é Jordy'
    contador++
  } else {
    document.getElementById('text').textContent = " What's your Name?"
    contador = 0
  }
}

function time() {
  let date = new Date()
  let hours = date.getHours()
  let minutes = date.getMinutes()
  let seconds = date.getSeconds()
  let pmAm = ''
  // become the hours 0 == 12am
  // to method hours give 0 to 23, so  0 es 12AM
  if (hours > 0) {
    pmAm = 'AM'
  }
  if (hours >= 12) {
    pmAm = 'PM'
  }
  if (hours >= 13) {
    hours -= 12
  }
  if (hours >= 0 && hours < 10) hours = '0' + hours
  if (minutes >= 0 && minutes < 10) minutes = '0' + minutes
  if (seconds >= 0 && seconds < 10) seconds = '0' + seconds
  document.getElementById('clockTime').innerHTML =
    hours + ':' + minutes + ':' + seconds + ' ' + pmAm
  setTimeout('time()', 1000)
}

let counter = 0
function changeNameTime() {
  const listPhrase = [
    'Hello',
    'Olá',
    'Hola',
    'こんにちは',
    'Ciao',
    'Allinllachu',
    '你好',
    'hai',
    '안녕',
    'Obrigado',
    '감사합니다',
    'Gracias',
    'Thank you'
  ]
  if (counter >= listPhrase.length) {
    counter = 0
  }
  const nameTime = (document.getElementById('name-time').textContent = listPhrase[counter])
  counter++
}

function timeOut() {
  let persona1 = {
    name: ' Jordy '
  }
  persona1.name
}
setInterval(changeNameTime, 800)
changeNameTime()
time()
