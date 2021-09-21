document.addEventListener('DOMContentLoaded', function(event){
    let globalParent=document.getElementById("main");
    let toDel=document.getElementById("jsdontwork");
    toDel.remove();
    globalParent.innerText="IT WORKS AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA";
});

