const box=document.querySelector(".box");
const sta=document.querySelector("#status");
const restart=document.querySelector("#restart");
const num=document.querySelectorAll(".num");
var i=1,o=0,x=0;
var arrx=[];
var arro=[];
const player=document.getElementById("player");
restart.addEventListener("click",function(){
    sta.style.display="none";
    i=1,o=0,x=0,arro=[],arrx=[];
    for(var t=0;t<9;t++){
        num[t].innerText="";
    }
});

box.addEventListener("click",function(e){
    if(i<=9){
    if(e.target.className=="num"){
        // console.log("match");
        // console.log(e.target);
        if(i%2==0){
            e.target.innerHTML="<p>O</P>";
            player.innerText="Turn of Player X";
            arro[o]=parseInt(e.target.id);
            o++;
            
        }
        else{
            e.target.innerHTML="<p>X</P>";
            player.innerText="Turn of Player O";
            arrx[x]=parseInt(e.target.id);
            x++;
            
            // console.log(sta);




            
        }
        var k=0;
        if(((arro[k]%10==arro[k+1]%10)&&(arro[k]%10==arro[k+2]%10))||(((arro[k]-arro[k]%10)/10==(arro[k+1]-arro[k+1]%10)/10&&(arro[k]-arro[k]%10)/10==(arro[k+2]-arro[k+2]%10)/10)))
        {    
        console.log("ooo");
        sta.style.display="block";
            sta.innerText="Player O Win";
            sta.style.backgroundColor="green";
        }
        // console.log(arro[0]%10);
        // console.log(arro[1]%10);
        // console.log(arro[2]%10);
        if((arrx[k]%10==arrx[k+1]%10)&&(arrx[k]%10==arrx[k+2]%10)||(((arro[k]-arro[k]%10)/10==(arro[k+1]-arro[k+1]%10)/10&&(arro[k]-arro[k]%10)/10==(arro[k+2]-arro[k+2]%10)/10)))
        {    
        console.log("xxx");
        sta.style.display="block";
        sta.innerText="Player X Win";
        sta.style.backgroundColor="green";
        }
        // sta.style.display="block";
        // console.log(i);
        console.log(arro);
        console.log(arrx);
        if(i==9){
            sta.style.display="block";
            sta.innerText="Game Tie";
            sta.style.backgroundColor="red";
        }
        i++;
        
    }
}   
});