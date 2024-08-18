function calculate(){
    let amount=document.getElementById('amount').value;
    let person=document.getElementById('person').value;
    let result=(amount/person).toFixed(2);
    document.getElementById('title').innerText=result;
    amount.value=' ';
    person.value=' '; 
  }