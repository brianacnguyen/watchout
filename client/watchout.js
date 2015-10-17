
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
            .attr({
            class: 'background',
            width: svgWidth,
            height: svgHeight
            })
            .style("border", "2px solid black")
            .append("g");

var asteroidX = 200;
var asteroidY = 52;

var update = function(dataset) {
  var asteroid = background.selectAll(".asteroid").data(dataset);
  asteroid
    .transition()
    .duration(1800)
    .attr({
    y: function(d) { return d[1]; },
    x: function(d) { return d[0]; }
    });

  asteroid
    .enter().append("image")
    .attr({
    "width": 50,
    "height": 50,
    "xlink:href": "star.gif",
    x: function(d) { return d[0]; },
    y: function(d) { return d[1]; },
    'class': 'asteroid'
  });
    
};
// this fixed the beginning:
update(createData(35));
setInterval(function() {

  update(createData(35));
}, 2500);
//yoyo
var drag = d3.behavior.drag()  
             .on('dragstart', function() { circle.style('fill', 'red'); })
             .on('drag', function() { circle.attr('cx', d3.event.x)
                                            .attr('cy', d3.event.y); })
             .on('dragend', function() { circle.style('fill', '#728CA6'); });


// draggable svg:

var circle = background.selectAll('.draggableCircle')
                .data([{
                  x: (svgWidth / 2),
                  y: (svgHeight / 2),
                  r: 16
                }])
                .enter()
                .append('svg:circle')
                .attr({
                class: 'draggableCircle',
                cx: function(d) {return d.x;},
                cy: function(d) {return d.y;},
                r: function(d) {return d.r;},
                opacity: 0.7,
                border: '1px solid black'
                })
                .call(drag)
                .style('fill', '#728CA6');
