const camp = document.querySelectorAll('#camp path');

console.log(camp);
for(let i = 0; i<camp.length; i++){
    console.log(`Letter ${i} is ${camp[i].getTotalLength()}`);
}
