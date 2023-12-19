const player1="O";
const player2="X";
var count1=3;
var count2=3;
var current=player1;
var currentcount=count1;
var pick=0;
var now=document.getElementById("now")
now.textContent=current;

// ----------------------------------------------------------

let a1=document.getElementById("a1");
let a2=document.getElementById("a2");
let a3=document.getElementById("a3");
let b1=document.getElementById("b1");
let b2=document.getElementById("b2");
let b3=document.getElementById("b3");
let c1=document.getElementById("c1");
let c2=document.getElementById("c2");
let c3=document.getElementById("c3");
// -----------------------------------------------------------------A1

function tab(id){
    let currentbox=document.getElementById(id);
   if(currentbox.textContent=="")
   {
       if(currentcount>0)
       {
        currentbox.textContent=current;
         currentcount--;
         pick=0;
         if(a1.textContent==current && a2.textContent==current && a3.textContent==current)
         {
            a1.textContent="Win"
            a2.textContent="Win"
            a3.textContent="Win"
         }
         else if(b1.textContent==current && b2.textContent==current && b3.textContent==current )
         {
            b1.textContent="Win"
            b2.textContent="Win"
            b3.textContent="Win"
         }
         else if(c1.textContent==current && c2.textContent==current && c3.textContent==current )
         {
            c1.textContent="Win"
            c2.textContent="Win"
            c3.textContent="Win"
         }
         else if(a1.textContent==current && b1.textContent==current && c1.textContent==current )
         {
            a1.textContent="Win"
            b1.textContent="Win"
            c1.textContent="Win"
         }
         else if(a2.textContent==current && b2.textContent==current && c2.textContent==current )
         {
            c2.textContent="Win"
            a2.textContent="Win"
            b2.textContent="Win"
         }
         else if(a3.textContent==current && b3.textContent==current && c3.textContent==current )
         {
            c3.textContent="Win"
            a3.textContent="Win"
            b3.textContent="Win"
         }
         else if(a1.textContent==current && b2.textContent==current && c3.textContent==current )
         {
            c3.textContent="Win"
            a1.textContent="Win"
            b2.textContent="Win"
         }
         else if(a3.textContent==current && b2.textContent==current && c1.textContent==current )
         {
            c1.textContent="Win"
            a3.textContent="Win"
            b2.textContent="Win"
         }
           if(current==player1)
           {
               current=player2;
               count1=currentcount;
               currentcount=count2;
           }
           else
           {
               current=player1;
               count2=currentcount;
               currentcount=count1;
           }
          now.textContent=current;
        }
   }
    
   else
     {
         if(currentcount==0 && pick==0 && current==currentbox.textContent)
         {
              current=currentbox.textContent;
              currentbox.textContent="";
              currentcount++;
              pick++;
         }
            
     }
}

function reset(){
    document.getElementById("a1").textContent="";
    document.getElementById("a2").textContent="";
    document.getElementById("a3").textContent="";
    document.getElementById("b1").textContent="";
    document.getElementById("b2").textContent="";
    document.getElementById("b3").textContent="";
    document.getElementById("c1").textContent="";
    document.getElementById("c2").textContent="";
    document.getElementById("c3").textContent="";
     count1=3;
     count2=3;
     current=player1;
     currentcount=count1;
     pick=0;
     now.textContent=current;
    }