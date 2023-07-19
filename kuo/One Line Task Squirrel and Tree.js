

// const fo2 = (h,H,S) => +(Math.sqrt(h*h+S*S)*H/h).toFixed(4)
// const fo2 = (h,H,S) => +(Math.sqrt(h*h+S*S)*H/h).toFixed(4).replace(/.0+$/,'')
// const fo2 = (h,H,S) => {let r=Math.sqrt(h*h+S*S)*H/h; return Number.isInteger(r)?r:Number(r.toFixed(4))}
// Math.sqrt(h*h+S*S)*H/h

const fo2 = (h,H,S) => +(Math.hypot(h,S)*H/h).toFixed(4)
// const fo3 = (h,H,S) => +(Math.hypot(h,S)*H/h).toFixed(4)
const fo3 = (h,H,S) => +((h*h+S*S)**0.5*H/h).toFixed(4)

console.log(fo2(4,16,3))
console.log(fo3(4,16,3))
console.log(fo2(2,11,47))
console.log(fo3(2,11,47))
console.log(fo2(15,774,948))
console.log(typeof fo2(8,9,37))

console.log(0.05 == .05)