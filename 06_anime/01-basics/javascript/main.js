let targetsExample01 = anime({
  targets: '.box',
  translateX: 250,
  autoplay: false
})

let targetsPlay01 =
document.querySelector('.rectButton')

targetsPlay01.onclick = targetsExample01.play


let targetsExample02 = anime({
  targets: '.triangle',
  translateX: 150,
  autoplay: false
})

let targetsPlay02 =
document.querySelector('.triangleButton')

targetsPlay02.onclick = targetsExample02.play

//

let propsAnimetion01 = anime ({
  targets: '.props .box',
  translateX: 400,
  rotate: 180,
  backgroundColor: '#fff',
  borderRadius: ['0%', '50%'],
  autoplay: false,
  duration: 1000,
  easing: 'easeInOutQuad'
})

let propsButton01 = document.querySelector('#propsBtn01')
propsBtn01.onclick = propsAnimetion01.play
