
export const compose = (...a) => x => a.reduceRight((y, fn) => fn(y), x);
export const curry = (fn, args = []) =>
  (...a) => {
    let x = args.concat(a);
    return x.length >= fn.length ?
      fn(...x) :
      curry(fn, x);
  };


export const normalize = a => a / 3000
export const dom = (el, type) => Rx.Observable.fromEvent(el, type);

export const getFreq = frequencyData => ({
  low: normalize(frequencyData[0] + frequencyData[1] + frequencyData[2] + frequencyData[3] + frequencyData[4]),
  mid: normalize(frequencyData[5] + frequencyData[6] + frequencyData[7] + frequencyData[8] + frequencyData[9]),
  high: normalize(frequencyData[10] + frequencyData[11] + frequencyData[12] + frequencyData[13] + frequencyData[14])
})
