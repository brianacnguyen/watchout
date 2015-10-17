var svgWidth = 800;
var svgHeight = 500;

var createData = function(asteroidCount) {
  var result = [];
  for (var i = 0; i < asteroidCount; i++) {
    var x = Math.floor(Math.random() * (svgWidth - 20));
    var y = Math.floor(Math.random() * (svgHeight - 20));
    result.push([x, y]);
  }
  return result;
};

var dataset = createData(50);

var svg = d3.select('body')
            .append("svg")
            .attr("width", svgWidth)
            .attr("height", svgHeight)
            .style("border", "5px solid red");

var g = svg.append("g");

var asteroidX = 200;
var asteroidY = 52;

var img =   d3.select("g")
            .selectAll('g')
            .data(dataset)//
            .enter()
            .append("svg:image")
            .attr("width", 30)
            .attr("height", 30)//
            .attr("xlink:href", "asteroid.png")
            .attr("x", function(d) {
              return d[0];
            })
            .attr("y", function(d) {
              return d[1];
            });

