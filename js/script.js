var i=0;
function getinput(){
    var input = document.getElementById("myinput").value;  
    //alert(input);
    addto=document.getElementById("list");
    i++;
    if (i%2==0){
        addto.innerHTML+='<div id="'+i+'" class="row item1"><h3 class="col-8" >'+input+'</h3><button onclick=remove('+i+')>X</button></div>'
    }
    else
    addto.innerHTML+='<div id="'+i+'" class="row item2"><h3 class="col-8" >'+input+'</h3><button onclick=remove('+i+')>X</button></div>'

};

function remove(i){
    var a=i;
    rm= document.getElementById(i);
    rm.remove();
}
