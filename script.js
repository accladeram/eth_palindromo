
function extraerLetrasYDigitos(texto) {
      return texto.match(/[a-zA-Z0-9]/g)?.join('') || '';
    }
    
    function reverseTexto(text) {
      return text.split('').reverse().join('');
    }
    
    function outresultP(txt){
    const intxtresult = document.getElementById("result");
    intxtresult.innerText = txt+" is a palindrome";
    }
    function outresultN(txt){
    const intxtresult = document.getElementById("result");  
    intxtresult.innerText = txt+" is not a palindrome";
    }
    
    function check(){
      const txtin = document.getElementById("text-input").value.trim();
      
    if(txtin==""){
      alert("Please input a value");
      return;
    }
    
    let aux = extraerLetrasYDigitos(txtin);
    aux = aux.toLowerCase()
    
    if(aux.length==1){
      outresultP(txtin);
      return;
    }
    
    let aux_re= reverseTexto(aux);
    if(aux_re==aux){
      outresultP(txtin);
      return;
    }else{
       outresultN(txtin);
      return;
    }
    
    }