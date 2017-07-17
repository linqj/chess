/**
 * Created by linqiaojuan on 17-7-17.
 */
//五子棋
var canvas=document.getElementById('chess');
var context=canvas.getContext('2d');
var cwidth=canvas.width;
var cheight=canvas.height;
context.strokeStyle='#BFBFBF';
var me=true;
var chessBoard=[];
//建立15×15的矩阵
for(var i=0;i<15;i++){
    chessBoard[i]=[];
    for(var j=0;j<15;j++){
        chessBoard[i][j]=0;
    }
}
window.onload=function(){
    pline(context);
};
// 画网格线
function pline(ctx){
    for(var i=0;i<=15;i++) {
        ctx.beginPath();
        ctx.moveTo(15 + i * 30, 15);
        ctx.lineTo(15 + i * 30, 435);
        ctx.stroke();
        ctx.moveTo(15,15 + i * 30);
        ctx.lineTo(435,15 + i * 30);
        ctx.stroke();
    }
}
var onStep=function(i,j,me){
    context.beginPath();
    context.arc(15 + i * 30,15 + j* 30,13,0,2*Math.PI);
    context.closePath();
    var gradient=context.createRadialGradient(15 + i * 30+2,15 + j * 30-2,13,15 + i * 30+2,15 + j * 30-2,0);
    if(me){
        gradient.addColorStop(0,'#0A0A0A');
        gradient.addColorStop(1,'#636766');
    }else{
        gradient.addColorStop(0,'#D1D1D1');
        gradient.addColorStop(1,'#F9F9F9');
    }
    context.fillStyle=gradient;
    context.fill();
};
//落子并保证不能重复点击
canvas.onclick=function(e){
    var x=e.offsetX;
    var y=e.offsetY;
    var i=Math.floor(x/30);
    var j=Math.floor(y/30);
    if(chessBoard[i][j]==0){
        onStep(i,j,me);
        if(me){
            chessBoard[i][j]=1;
        }else{
            chessBoard[i][j]=2;
        }
        me=!me;
    }
};