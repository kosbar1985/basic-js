module.exports = function createDreamTeam(members) {
  /*throw 'Not implemented';*/
 
  let arr=[];
  if (!Array.isArray(members)){
return false;
}
for(let i=0; i<members.length;i++){

if (typeof members[i] !== "string"){


console.log('1');
} else{           

arr[i] = members[i];
arr[i] = arr[i].replace(/\s+/g, '');
arr[i]= arr[i][0];
arr[i]=arr[i].toUpperCase(); 


}
}
arr.sort();
let str = arr.join('');      

return(str);

};