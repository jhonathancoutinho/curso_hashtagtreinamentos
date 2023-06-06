const flamengoCampeaoLibertadores2023 = false;

const promessa = new Promise((resolve, reject)=>{
    console.log('Confia, seremos campeões!');
    setTimeout (()=>{
        if(flamengoCampeaoLibertadores2023){
            resolve('Deu a lógica! Vapo!');
        }
        else {
            reject ('A culpa é da arbritagem!#%$!')
        }
    }, 2000)
});

promessa.then((response)=>{
    console.log(response);
    console.log('Eu já sabia');
})
.catch(error => console.error(error));


