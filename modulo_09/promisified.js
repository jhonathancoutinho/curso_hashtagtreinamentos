function getUser () {
    console.log('Recuperando as informações de usuário');
    const promise1 = new Promise(resolve =>{
    setTimeout(() => {
         resolve({id: 0, name: 'Daniel', surname: 'Porto'});
        }, 2000);
    });
    return promise1;
}

function getFriendList (user) {
    console.log (`Recuperando lista de amigos do usuário ${user.name} ${user.surname}`);
    const promise2 = new Promise (resolve=>{
    setTimeout(() => {
       resolve(['joão', 'bruna', 'felipe', 'Lira']);
        }, 2000);
    });
    return promise2;
}

function getPhotos (username) {
    console.log (`Recuperando lista de fotos do usuário ${username}`);
    const promise3 = new Promise (resolve => {
    setTimeout(() => {
            resolve (['egito','bahamas','maldivas', 'suécia']);
        }, 2000);
    });
    return promise3;
}


// getUser()
// .then(user => getFriendList(user))
// .then(friends => getPhotos(friends[3]))
// .then(photos=>console.log(photos))
// .catch(error => console.error(error))
// .finally(()=>{
//     console.log('Solicite ao usuário acesso total ao perfil.')
// });

async function displayLiraPhotos (){
    try {
        const user = await getUser();
        const friends = await getFriendList(user);
        const photos = await getPhotos(friends[3]);
        console.log(photos);
    }
    catch(error){
        console.error(error);
    }
    finally {
        console.log("Terminando a conexão com o instagram");
    }
}

displayLiraPhotos();