exports.sustractor = function(){
  var arr1=[1,2,3,4,5,6,7,8,]
  var arr2=[1,2,3]
  var difference = arr1.filter(x => !arr2.includes(x));
  //console.log(difference)
  return difference;
  }