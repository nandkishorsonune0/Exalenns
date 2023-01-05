
function apartmentHunting(blocks, reqs) {
  // Write your code here.
  
  let optimalBlock = 0;
  let minMaxDistance = Infinity;

  // Create an auxiliary array to store the distances
  const distances = new Array(blocks.length);
  for (let i = 0; i < blocks.length; i++) {
    distances[i] = new Array(reqs.length).fill(Infinity);
  }

  // Calculate the distances in a single pass
  for (let i = 0; i < blocks.length; i++) {
    for (let j = 0; j < reqs.length; j++) {
      if (blocks[i][reqs[j]]) {
        distances[i][j] = 0;
      } else {
        for (let k = 0; k < blocks.length; k++) {
          if (blocks[k][reqs[j]]) {
            distances[i][j] = Math.min(distances[i][j], Math.abs(i - k));
          }
        }
      }
    }
  }

  // Find the optimal block
  for (let i = 0; i < blocks.length; i++) {
    const maxDistance = Math.max(...distances[i]);
    if (maxDistance < minMaxDistance) {
      minMaxDistance = maxDistance;
      optimalBlock = i;
    }
  }

  return optimalBlock;
}
const blocks = [
  {
    "gym": false,
    "school": true,
    "store": false,
  },
  {
    "gym": true,
    "school": false,
    "store": false,
  },
  {
    "gym": true,
    "school": true,
    "store": false,
  },
  {
    "gym": false,
    "school": true,
    "store": false,
  },
  {
    "gym": false,
    "school": true,
    "store": true,
  }
];
const reqs = ["gym", "school", "store"];

console.log(apartmentHunting(blocks, reqs));
