



// audio.pause()
// audio.play()



var ctx = new AudioContext()
export var analyser = ctx.createAnalyser()
export var frequencyData = new Uint8Array()

navigator.webkitGetUserMedia({ audio: true },

  stream => {
    ctx.createMediaStreamSource(stream).connect(analyser)
    frequencyData = new Uint8Array(analyser.frequencyBinCount)
  },

  err => {
    console.log(err)
  }
)
