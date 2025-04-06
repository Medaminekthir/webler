function taskbtn(){
    prenom= document.getElementById('name').value
    nom= document.getElementById('lastname').value
    age=parseInt(document.getElementById('age').value)
    email=document.getElementById('mail').value
    dn=document.getElementById('dt').value
    
    if(prenom!="" && nom!="" && (age>=18) && email.indexOf('@')!=-1 ){
     document.getElementById('btn').disabled=false
 
 
 
    }
    console.log(nom,prenom,age,email)
 }
 console.log('oooggg')

 