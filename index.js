function distanceFromHqInBlocks(block){
  const hqBlock =42;

  return Math.abs(block -hqBlock)
}

function distanceFromHqInFeet (block){
  return distanceFromHqInBlocks(block) * 264;
}
 
 function distanceTravelledInFeet (start, destination){
  const feetPerbBlock = 264;
  return Math.abs(start-destination) * feetPerbBlock;
 }

 function calculatesFarePrice (start, destination){
  const distance = distanceTravelledInFeet(start, destination);
  
  if (distance <=400){
    return 0;
  }
  else if (distance >400 && distance<=2000){
    return (distance-400) * 0.02;
  }
  else if (distance >2000 && distance<2500){
    return  25;
  }
  else{
    return `cannot travel that far`
  }
 }