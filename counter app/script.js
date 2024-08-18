let counter=0;
function increment(){
  counter=counter+1;
  document.getElementById("counter").innerText=counter;
}
function decrement(){
  if(counter>0){
    counter=counter-1;
    document.getElementById("counter").innerText=counter;
  }
    
}