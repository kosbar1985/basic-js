const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample( sampleActivity ) {
  if (typeof sampleActivity !='string') {
    return false;
            } else{
                let y=Number.parseFloat(sampleActivity);
                let x=Number(y);
                if (x>15){
                  return false;}
                if (isNaN(x)||x<=0){
                  return false;} else{
                    let b=MODERN_ACTIVITY/x;
                    let a=Math.log(b);
                    let k=0.693/HALF_LIFE_PERIOD;
                    let t = a/k;
                    let number = Math.ceil(t);
                    return number;
                  }
}
}
