let matrix = [
  [1, 2, '#'],
  ['#', 16, 32],
  [64, '#', 256],
  [512, 1024, '#'],
  [4096, '#', 16384]
]

console.log(matrix[0][2])

num = 0;
for(let i = 0; i < matrix.length; i++) {
  console.log('testing')
  for(let j = 0; j < matrix.length; j++) {
    if(matrix[i][j] == '#') {
      matrix[i][j]= 2 ** num;
    }
    num++;
    console.log(num)
  }
  num-=2;
  console.log(matrix[i])
}