function distanceFromHqInBlocks(block){
  const hqBlock =42;

  return Math.abs(block -hqBlock)
}

function distanceFromHqInFeet (block){
  return distanceFromHqInBlocks(block) * 264;
}
 
 function distanceTravelledInFeet (start, destination){
  const block = 264;
  return Math.abs(start-destination) * block;
 }
 