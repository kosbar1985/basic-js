module.exports =  function countCats(backyard){
  let number=0;
  for (let i=0; i<=backyard.length-1;i++){
    for (let j=0; j<=backyard[i].length-1;j++){
      if (backyard[i][j] == "^^"){
        number++;}
    }
    }    
  return number;
};
