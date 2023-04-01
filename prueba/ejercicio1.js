dinero1 = prompt ('cuanto dinero tienes amigo1?');

dinero1 = parseInt(dinero1);

if (dinero1 >= 0.6 && dinero1 < 1){
    alert('comprate el helado de agua y te sobran ' + (dinero1 - .6));
}

else if (dinero1 >= 1 && dinero1 < 1.6){
    alert('comprate el helado de crema y te sobran ' + (dinero1 - 1));
}

else if (dinero1 >= 1.6 && dinero1 < 1.7){
    alert('comprate el heladix y te sobran ' + (dinero1 - 1.6));
}

else if (dinero1 >= 1.7 && dinero1 < 1.8){
    alert('comprate el heidyhelado y te sobran ' + (dinero1 - 1.7));
}

else if(dinero1 >= 2.9) {
    alert('comprate el bote de helado y te sobran ' + (dinero1 - 2.9)) 
} 

else{
    alert('no te alcanza pa ni madres')
}