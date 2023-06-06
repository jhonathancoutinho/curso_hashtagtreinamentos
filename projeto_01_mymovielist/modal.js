const background = document.getElementById ('modal-background');
const modalContainer = document.getElementById('modal-container');

overlay.classList.add ();

function backgroundClickHandler (){
    overlay.classList.remove ('open');
}

function createModal(data) {
    modalContainer.innerHTML = `
    <h2 id="movie-title">${data.Title} - ${data.Year}</h2>
                <section id="modal-body">
                    <img id="movie-poster" src=${data.Poster}/>
                    <div id="movie-info">
                        <h4 id="movie-plot">${data.Plot}</h4>
                        <div id="movie-cast"><h4>Elenco:${data.Actors}</h5></div>
                        <div id="movie-genre"><h4>Gênero</h4><h5>${data.Genre}</h5></div>
                        <div id="movie-director"><h4>Diretor(a):</h4><h5>${data.Director}</h5></div>
                    </div>
                </section>
                <section id="modal-footer">
                    <button id="add-to-list"onclick='{addToList(${JSON.stringify(
                        data
                        ).replace("'", '`')})}'>Adicionar à Lista</button>
                </section>`;
}

background.addEventListener ('click', backgroundClickHandler );