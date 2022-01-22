function Rain() {
  var montante = 200
  var body = document.querySelector('body')
  var i = 0
  while (i < montante) {
    var drop = document.createElement('i')

    var size = Math.random() * 5
    var posX = Math.floor(Math.random() * window.innerWidth)
    var delay = Math.random() * -20
    var duration = Math.random() * 5
    drop.style.width = size + 'px'
    drop.style.left = posX + 'px'
    drop.style.animationDelay = delay + 's'
    drop.style.animationDuration = 1 + duration + 's'

    body.appendChild(drop)
    i++
  }
}

Rain()
