let field = document.createElement('div');
document.body.appendChild(field);
field.classList.add('field');

for (let i=1; i<101; i++) {
    let excel = document.createElement('div');
    field.appendChild(excel);
    excel.classList.add('excel');
}

let excel = document.getElementsByClassName('excel');
let x = 1;
    y = 10;

    for(let i=0; i<excel.length; i++) {
        if(x>10) {
            x=1;
            y--;
        }
        excel[i].setAttribute('posX', x);
        excel[i].setAttribute('posY', y);
        x++;    
    }

    function generateSnake() {
        let posX = Math.round(Math.random() * (10 - 1) + 1);
        let posY = Math.round(Math.random() * (10 - 1) + 1);
        return [posX, posY];
    }

    let coordinates = generateSnake();
   let snakeBody = [document.querySelector('[posX = "' + coordinates[0] + '"][posY = "' +
   coordinates[1] + '"]'), document.querySelector('[posX = "' + (coordinates[0]-1) + '"][posY = "' +
   coordinates[1] + '"]'), document.querySelector('[posX = "' + (coordinates[0]-2) + '"][posY = "' +
   coordinates[1] + '"]')];

for(let i = 0; i<snakeBody.length; i++) {
    snakeBody[i].classList.add('snakeBody');
}

snakeBody[0].classList.add('head')

let mouse;

function createMouse() {
    function generateMouse() {
        let posX = Math.round(Math.random() * (10 - 3) + 3);
        let posY = Math.round(Math.random() * (10 - 1) + 1);
        return [posX, posY];
}

    let mouseCoordinates = generateMouse();
    console.log(mouseCoordinates);
    mouse = document.querySelector('[posX = "' + mouseCoordinates[0] + '"][posY = "' +
     mouseCoordinates[1] + '"]')

    while(mouse.classList.contains('snakeBody')){
        let mouseCoordinates = generateMouse();
        mouse = document.querySelector('[posX = "' + mouseCoordinates[0] + '"][posY = "' +
        mouseCoordinates[1] + '"]');
    }

     mouse.classList.add('mouse');
}

   createMouse(); 

   let direction = 'right';

function move(){
    let snakeCoordinates = [snakeBody[0].getAttribute('posX'), snakeBody[0].getAttribute('posY')];
    snakeBody[0].classList.remove('head');
    snakeBody[snakeBody.length-1].classList.remove('snakeBody');
    snakeBody.pop();

    if (direction == 'right') {
        if (snakeCoordinates[0] < 10) {
            snakeBody.unshift(document.querySelector('[posX = "' +  (+snakeCoordinates[0] + 1) + '"][posY = "' +
            snakeCoordinates[1] + '"]'));
        } else {
            snakeBody.unshift(document.querySelector('[posX = "1"][posY = "' + snakeCoordinates[1] + '"]'));
        }
    } else if (direction == 'left') {
        if (snakeCoordinates[0] > 1) {
            snakeBody.unshift(document.querySelector('[posX = "' +  (+snakeCoordinates[0] - 1) + '"][posY = "' +
            snakeCoordinates[1] + '"]'));
        } else {
            snakeBody.unshift(document.querySelector('[posX = "10"][posY = "' + snakeCoordinates[1] + '"]'));
        }
    }  else if (direction == 'up') {
        if (snakeCoordinates[1] < 10) {
            snakeBody.unshift(document.querySelector('[posX = "' + snakeCoordinates[0] + '"][posY = "' +
            (+snakeCoordinates[1]+1) + '"]'));
        } else{
            snakeBody.unshift(document.querySelector('[posX = "' + snakeCoordinates[0] + '"][posY = "1"]'));
        }
    }  else if (direction == 'down') {
        if (snakeCoordinates[1] > 1) {
            snakeBody.unshift(document.querySelector('[posX = "' + snakeCoordinates[0] + '"][posY = "' +
            (snakeCoordinates[1]-1) + '"]'));
        } else {
            snakeBody.unshift(document.querySelector('[posX = "' + snakeCoordinates[0] + '"][posY = "10"]'));
        }
    }
   
    snakeBody[0].classList.add('head');
    for(let i = 0; i<snakeBody.length; i++) {
        snakeBody[i].classList.add('snakeBody');
    }

}

let interval = setInterval(move, 300);
  
window.addEventListener('keydown', function (e) {
    if (e.keyCode == 37 && direction!= 'right') {
        direction = 'left';
    }
    else if (e.keyCode == 38 && direction != 'down') {
        direction = 'up';
    }
    else if (e.keyCode == 39 && direction != 'left') {
        direction = 'right';
    }
    else if (e.keyCode == 40 && direction != 'up') {
        direction = 'down';
    }
});

   