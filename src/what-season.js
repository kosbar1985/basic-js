module.exports = function getSeason(/*date*/) {
  let season="";
  if (date=='winter'){
    return ("winter"); 
 }
 if (date=='spring'){
    return ("spring"); 
 }
 if (date=='summer'){
    return("summer"); 
 }
 if (date=='autumn'){
    return("autumn"); 
 }

  let month=getMonth(date);
  if (month = 11||0||1){
      season = "winter";
  }
  if (month = 2||3||4){
      season = "spring";
  }
  if (month = 5||6||7){
      season = "summer";
  }
  if (month = 8||9||10){
      season ="autumn";
  }
  return season;
};
