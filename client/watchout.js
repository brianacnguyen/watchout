// game setup:
var boardSettings = {
  width: 900,
  height: 600,
  collisionFlashDuration: 500

};
var enemySettings = {
  count: 10,
  duration: 3000,
  width: 25,
  height: 25,
  r: 18
};
var fishSettings = {
  duration: 10000,
  duration2: 15000,
  duration3: 18000,
  r: 18,
};
var playerSettings = {
    r: 18,
    currentX: 250,  // change here, to set the starting location for player
    currentY: 250
};
var scoringSettings = {
  increment: 1,
  updateInterval: 800
}

// Helper functions:
var rand = function(n) {return Math.floor((Math.random() * n) - 300);},
    randX = function() {return rand(boardSettings.width + 300);},
    randY = function() {return rand(boardSettings.height + 300);};

// update score:
var level = 1, 
    currentScore = 0,
    highScore = 0,
    collisionCount = 0,
    updateScore = function() {
  d3.select('.level span').text(level);    
  d3.select('.current span').text(currentScore);
  d3.select('.high span').text(highScore);
  d3.select('.collisions span').text(collisionCount);
};

// add game board:
var board = d3.select('body')
              .append('svg')
              .attr({
                height: boardSettings.height,
                width: boardSettings.width,
                class: 'board'
                });

//add background fish
var bgfishArray = d3.range(3);
var fish1 = board.selectAll('.fish')
                   .data(bgfishArray, function(d) {return d;})
                   .enter()
                   .append('svg:image')
                   .attr({
                      width: fishSettings.r*2,
                      height: fishSettings.r*2,
                      "xlink:href": "swimmingfish.gif",
                      x: -100,
                      y: randY,
                      class: 'fish'
                    });
var startFish = function() {
  board.selectAll('.fish')
       .transition()
       .duration(fishSettings.duration)
       .ease('linear-in-out')
       .attr({
          x: boardSettings.width + 100,
        })
       .each('end', function() {
            d3.select(this)
            .attr({
              x: -100,
              y: randY,
            });
            startFish(d3.select(this));
        })
};
      startFish();

var bgfish2Array = d3.range(4);
var fish2 = board.selectAll('.fish2')
                   .data(bgfish2Array, function(d) {return d;})
                   .enter()
                   .append('svg:image')
                   .attr({
                      width: fishSettings.r*2,
                      height: fishSettings.r*2,
                      "xlink:href": "swimmingfish2.gif",
                      x: boardSettings.width + 100,
                      y: randY,
                      class: 'fish2'
                    });
var startFish2 = function() {
  board.selectAll('.fish2')
       .transition()
       .duration(fishSettings.duration)
       .ease('linear-in-out')
       .attr({
          x: - 100,
        })
       .each('end', function() {
            d3.select(this)
            .attr({
            x: boardSettings.width + 100,
            y: randY,
          });
            startFish2(d3.select(this));
        })
};
      startFish2();

var bgfish3Array = d3.range(3);
var fish3 = board.selectAll('.fish3')
                   .data(bgfish3Array, function(d) {return d;})
                   .enter()
                   .append('svg:image')
                   .attr({
                      width: fishSettings.r*3,
                      height: fishSettings.r*3,
                      "xlink:href": "swimmingfish3.gif",
                      x: -100,
                      y: randY,
                      class: 'fish3'
                    });
var startFish3 = function() {
  board.selectAll('.fish3')
       .transition()
       .duration(fishSettings.duration2)
       .ease('linear-in-out')
       .attr({
          x: boardSettings.width + 100,
        })
       .each('end', function() {
            d3.select(this)
            .attr({
              x: -100,
              y: randY,
            });
            startFish3(d3.select(this));
        })
};
startFish3();

var bgfish4Array = d3.range(4);
var fish4 = board.selectAll('.fish4')
                   .data(bgfish4Array, function(d) {return d;})
                   .enter()
                   .append('svg:image')
                   .attr({
                      width: fishSettings.r*2,
                      height: fishSettings.r*2,
                      "xlink:href": "swimmingfish4.gif",
                      x: boardSettings.width + 100,
                      y: randY,
                      class: 'fish4'
                    })
                   .style(
                  "opacity", 0.5);
var startFish4 = function() {
  board.selectAll('.fish4')
       .transition()
       .duration(fishSettings.duration2)
       .ease('linear-in-out')
       .attr({
          x: - 100,
        })
       .each('end', function() {
            d3.select(this)
            .attr({
            x: boardSettings.width + 100,
            y: randY,
          });
            startFish4(d3.select(this));
        })
};
      startFish4();

var bgfish5Array = d3.range(1);
var fish5 = board.selectAll('.fish5')
                   .data(bgfish5Array, function(d) {return d;})
                   .enter()
                   .append('svg:image')
                   .attr({
                      width: fishSettings.r*3,
                      height: fishSettings.r*3,
                      "xlink:href": "swimmingfish5.gif",
                      x: -100,
                      y: randY,
                      class: 'fish5'
                    });
var startFish5 = function() {
  board.selectAll('.fish5')
       .transition()
       .duration(fishSettings.duration3)
       .ease('linear-in-out')
       .attr({
          x: boardSettings.width + 100,
        })
       .each('end', function() {
            d3.select(this)
            .attr({
              x: -100,
              y: randY,
            });
            startFish5(d3.select(this));
        })
};
      startFish5();

var bgfish6Array = d3.range(1);
var fish6 = board.selectAll('.fish6')
                   .data(bgfish6Array, function(d) {return d;})
                   .enter()
                   .append('svg:image')
                   .attr({
                      width: fishSettings.r*2,
                      height: fishSettings.r*2,
                      "xlink:href": "swimmingfish6.gif",
                      x: boardSettings.width + 100,
                      y: randY,
                      class: 'fish6'
                    });
var startFish6 = function() {
  board.selectAll('.fish6')
       .transition()
       .duration(fishSettings.duration3)
       .ease('elastic-in-out')
       .attr({
          x: - 100,
        })
       .each('end', function() {
            d3.select(this)
            .attr({
            x: boardSettings.width + 100,
            y: randY,
          });
            startFish6(d3.select(this));
        })
};
      startFish6();

var bgfish7Array = d3.range(3);
var fish7 = board.selectAll('.fish7')
                   .data(bgfish7Array, function(d) {return d;})
                   .enter()
                   .append('svg:image')
                   .attr({
                      width: fishSettings.r*3,
                      height: fishSettings.r*3,
                      "xlink:href": "jellyfish.gif",
                      x: randX ,
                      y: boardSettings.height + 100,
                      class: 'fish7'
                    })
                   .style(
                  "opacity", 0.5);
var startFish7 = function() {
  board.selectAll('.fish7')
       .transition()
       .duration(fishSettings.duration3)
       .ease('linear-in-out')
       .attr({
          y: - 100,
        })
       .each('end', function() {
            d3.select(this)
            .attr({
            x: randX,
            y: boardSettings.height + 100,
          });
            startFish7(d3.select(this));
        })
};
      startFish7();

var bgfish8Array = d3.range(2);
var fish8 = board.selectAll('.fish8')
                   .data(bgfish8Array, function(d) {return d;})
                   .enter()
                   .append('svg:image')
                   .attr({
                      width: fishSettings.r*3,
                      height: fishSettings.r*3,
                      "xlink:href": "jellyfish.gif",
                      x: randX ,
                      y: boardSettings.height + 100,
                      class: 'fish8'
                    })
                   .style(
                  "opacity", 0.5);
var startFish8 = function() {
  board.selectAll('.fish8')
       .transition()
       .duration(fishSettings.duration)
       .ease('linear-in-out')
       .attr({
          y: - 100,
        })
       .each('end', function() {
            d3.select(this)
            .attr({
            x: randX,
            y: boardSettings.height + 100,
          });
            startFish8(d3.select(this));
        })
};
      startFish8();

var bgfish9Array = d3.range(1);
var fish9 = board.selectAll('.fish9')
                   .data(bgfish9Array, function(d) {return d;})
                   .enter()
                   .append('svg:image')
                   .attr({
                      width: fishSettings.r*3,
                      height: fishSettings.r*3,
                      "xlink:href": "jellyfish.gif",
                      x: randX ,
                      y: boardSettings.height + 100,
                      class: 'fish9'
                    })
                   .style(
                  "opacity", 0.5);
var startFish9 = function() {
  board.selectAll('.fish9')
       .transition()
       .duration(fishSettings.duration2)
       .ease('linear-in-out')
       .attr({
          y: - 100,
        })
       .each('end', function() {
            d3.select(this)
            .attr({
            x: randX,
            y: boardSettings.height + 100,
          });
            startFish9(d3.select(this));
        })
};
      startFish9();
// add enemies:

var enemyArray = d3.range(enemySettings.count);

var enemies = board.selectAll('.asteroid')
                   .data(enemyArray, function(d) {return d;})
                   .enter()
                   .append('svg:image')
                   .attr({
                      width: enemySettings.r*2,
                      height: enemySettings.r*2,
                      "xlink:href": "star.gif",
                      x: randX,
                      y: randY,
                      class: 'asteroid'
                    });
var updateEnemies = function() {
  enemies = board.selectAll('.asteroid')
                 .data(enemyArray, function(d) {return d;})
                 .enter().append('svg:image')
                 .attr({
                  width: enemySettings.r*2,
                  height: enemySettings.r*2,
                  "xlink:href": "star.gif",
                  x: randX,
                  y: randY,
                  class: 'asteroid'
                });
};

var addEnemy = function() {
  level += 1;
  scoringSettings.updateInterval -= 160; 
  enemySettings.duration -= 500;
  var lastlength = enemyArray.length; 
  for (var i = lastlength; i < (lastlength + 10); i++){
    enemyArray.push(i);
  }
  updateEnemies();
}

var drag = d3.behavior
             .drag()  
             .on('drag', function() { 
                player.attr({
                  x: d3.event.x - playerSettings.r, 
                  y: d3.event.y - playerSettings.r
                });
              });

var player = board.selectAll('.mouse')
                .data([{
                  x: playerSettings.currentX,
                  y: playerSettings.currentY,
                }]);
          player.enter()
                .append("image")
                .style(
                  "opacity", 0.9)
                .attr({
                  class: "mouse",
                  "xlink:href": "bubble.gif",
                  x: function(d) {return d.x;},
                  y: function(d) {return d.y;},
                  width: playerSettings.r * 2,
                  height: playerSettings.r * 2,
                  "border-radius": playerSettings.r*2,
                  border: '1px solid black'
                })
                .call(drag);

var startEnemies = function(callback) {
  board.selectAll('.asteroid')
       .transition()
       .duration(enemySettings.duration)
       .ease('linear-in-out')
       .attr({
          x: randX,
          y: randY
        }).each('end', function() {
          if (callback) {
            startEnemies(startEnemies);
          }
        });
      };


var playerLoc = {x: 250, y: 250};
player.on('mousemove', function() {
  var loc = d3.mouse(this);
  playerSettings.currentX = loc[0];
  playerSettings.currentY = loc[1];
});
// scoring functions:

var paused = false;

var incrementCurrentScore = function() {

  currentScore = currentScore + scoringSettings.increment;
  highScore = Math.max(currentScore, highScore);
  updateScore(); 

  if (!paused) {
    setTimeout(incrementCurrentScore, scoringSettings.updateInterval);
  } 
};

var pause = function() {
  paused = true;
};
var start = function() {
  paused = false;
  incrementCurrentScore();
}


// var pauseScore = function() { clearInterval(startScore)}


var prevCollision = false;

var detectCollisions = function() {
  
  var collision = false;
  var enemy = d3.selectAll(".asteroid")[0];
  for (var i = 0; i < enemy.length; i++) {
    var enemyX = Number(enemy[i].attributes.x.value) + enemySettings.r,
        enemyY = Number(enemy[i].attributes.y.value) + enemySettings.r;

    var x = enemyX - playerSettings.currentX,
        y = enemyY - playerSettings.currentY;

    if (Math.sqrt(x*x + y*y) < enemySettings.r*2) {

      collision = true;
    }
  };
  if (collision) {
    currentScore = 0;
    if (prevCollision !== collision) {
      collisionCount = collisionCount + 1;
      flash();
    }
  }
  prevCollision = collision; 
};
d3.timer(detectCollisions);

// flash collision message:
var flash = function() {
  board.selectAll('.rect .flash').data([0]).enter().append('rect')
  .attr({
    height: boardSettings.height,
    width: boardSettings.width,
  })
  .style({
    'fill': 'white',
    opacity: 1
  }).transition().duration(200).style('opacity', 0)
  .remove();
}





