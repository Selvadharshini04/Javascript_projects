function convert(){
    let result=document.getElementById("input");
    result=result.value*100;
    console.log(result,"cm");
    let convert=document.getElementById('res');
    convert.innerText="converted: "+ result+"cm"
  }