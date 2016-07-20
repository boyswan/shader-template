var fs = require('fs');
var arg = process.argv[2]
var folder = __dirname + '/../public/assets/'

var getAsString = fs.readFileSync(folder + arg + '.js','utf8')
var model = JSON.parse(getAsString)

function getMatrix(obj) {
  return 'exports.positions=' + listToMatrix(obj.vertices, 3) + '\n' + 'exports.cells=' + listToMatrix(obj.faces, 3)
}

function listToMatrix(list, elementsPerSubArray) {
  var matrix = []
  for (var i = 0, k = -1; i < list.length; i++) {
    if (i % elementsPerSubArray === 0) {
      k++;
      matrix[k] = [];
    }
    matrix[k].push(list[i]);
  }
  return JSON.stringify(matrix);
}

fs.writeFile(folder + arg + '-min.js', getMatrix(model), function(err) {
    if(err) { return console.log(err);}
    console.log('The file was saved!');
});
