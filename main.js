var mouse_event = "empty";
var last_position_of_X, last_position_of_Y;

canvas = document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

color = "black";
width_of_line = 1;

canvas.addEventListener("mousedown", mouse_down);
function mouse_down(e){
    mouse_event = "mouse_Down";
}

canvas.addEventListener("mousemove", mouse_move);
function mouse_move(e){
    current_x = e.clientX - canvas.offsetLeft;
    current_y = e.clientY - canvas.offsetTop;

    if(mouse_event == "mouse_Down"){
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        ctx.moveTo(last_position_of_X, last_position_of_Y);
        ctx.lineTo(current_x, current_y);

        ctx.stroke();
    }

    last_position_of_X = current_x;
    last_position_of_Y = current_y;
}