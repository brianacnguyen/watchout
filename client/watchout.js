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

var background = 
          d3.select('body')
            .append("svg")
            .attr("width", svgWidth)
            .attr("height", svgHeight)
            .style("border", "5px solid red")
            .append("g");

var asteroidX = 200;
var asteroidY = 52;

var update = function(dataset) {
  var asteroid = background.selectAll(".asteroid").data(dataset);
  asteroid
    .transition()
    .duration(1000)
    .attr("width", 30)
    .attr("height", 30)
    .attr('x', function(d) { return d[0]; })
    .attr('y', function(d) { return d[1]; });
  asteroid
    .enter().append("image")
    .attr("width", 30)
    .attr("height", 30)//
    .attr("xlink:href", "asteroid.png")
    .attr('x', function(d) { return d[0]; })
    .attr('y', function(d) { return d[1]; })
    .attr('class', 'asteroid')
};

update(createData(50));

setInterval(function() {
    update(createData(50))
}, 2000);