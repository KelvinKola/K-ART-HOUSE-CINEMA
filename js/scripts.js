/*FUNZIONE CERCA FEED*/

function searchMovies() {
    const query = document.getElementById('search-bar').value.toLowerCase();
    const movies = document.querySelectorAll('#movie-feed .movie');
    movies.forEach(movie => {
        const title = movie.querySelector('h2').textContent.toLowerCase();
        if (title.includes(query)) {
            movie.style.display = '';
        } else {
            movie.style.display = 'none';
        }
    });
    return false; // Prevent form submission
}

/*FUNZIONE TASTO DESCRIZIONE PAGINA HOME*/

function toggleDescription(descriptionId) {
    var description = document.getElementById(descriptionId);
    if (description) { // Verifica se l'elemento è stato trovato
        if (description.style.display === "none" || description.style.display === "") {
            description.style.display = "block";
        } else {
            description.style.display = "none";
        }
    } else {
        console.log("Elemento non trovato: " + descriptionId); // Messaggio di errore per il debugging
    }
}

/*FUNZIONE COMMENTI PAGINA HOME*/

function addComment() {
    const username = document.getElementById('username').value.trim(); // Ottieni il nome utente
    const commentText = document.getElementById('comment-text').value.trim(); // Ottieni il testo del commento

    if (commentText !== "" && username !== "") { // Verifica che entrambi i campi non siano vuoti
        const commentList = document.getElementById('comments-list');
        const newComment = document.createElement('li');
        newComment.className = 'list-group-item';
        newComment.innerHTML = `<strong>${username}:</strong> ${commentText} <span class="badge badge-success">👍 0</span> <span class="badge badge-danger">👎 0</span>`;
        commentList.appendChild(newComment);
        document.getElementById('comment-form').reset(); // Reset del form dopo l'invio
    }
}

/*FUNZIONE CERCA CATALOGO*/

function searchCatalog() {
    const query = document.getElementById('search-bar').value.toLowerCase();

    // Cerca tra i film
    const movieRows = document.querySelectorAll('#movie-list tr');
    movieRows.forEach(row => {
        const title = row.querySelector('td:first-child a').textContent.toLowerCase();
        if (title.includes(query)) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });

    // Cerca tra gli autori
    const authorRows = document.querySelectorAll('#author-list tbody tr');
    authorRows.forEach(row => {
        const name = row.querySelector('td:first-child a').textContent.toLowerCase();
        if (name.includes(query)) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });

    return false; // Prevent form submission
}

/*FUNZIONE FILTRO PAGINA FILM*/

function filterCatalog() {
    const author = document.getElementById('filtro-autore').value;
    const year = document.getElementById('filtro-anno').value;
    const rating = document.getElementById('filtro-classifica').value;
    const rows = document.querySelectorAll('#movie-list tr');
    
    rows.forEach(row => {
        const rowAuthor = row.querySelector('td:nth-child(2)').textContent;
        const rowYear = row.querySelector('td:nth-child(3)').textContent;
        const rowRating = row.querySelector('td:nth-child(4)').textContent;
        let display = true;

        if (author && author !== 'Tutti' && rowAuthor !== author) display = false;
        if (year && year !== 'Tutti' && rowYear !== year) display = false;
        if (rating && rating !== 'Tutti' && rowRating !== rating) display = false;

        row.style.display = display ? '' : 'none';
    });
}
function viewAllFilms() {
    document.getElementById('filtro-autore').selectedIndex = 0;
    document.getElementById('filtro-anno').selectedIndex = 0;
    document.getElementById('filtro-classifica').selectedIndex = 0;
    const rows = document.querySelectorAll('#movie-list tr');
    rows.forEach(row => row.style.display = '');
    const allDetails = document.querySelectorAll('.movie-details');
    allDetails.forEach(detail => detail.style.display = 'none');

    const movieList = document.querySelector('.table-responsive');
    movieList.style.display = '';
}


/*FUNZIONE PER MOSTRARE/NASCONDERE I DETTAGLI DEL FILM*/

function toggleMovieDetails(movieId) {
    const movieDetails = document.getElementById(movieId);
    const movieList = document.querySelector('.table-responsive'); // Seleziona la lista dei film
    
    // Nascondi o mostra i dettagli del film
    if (movieDetails.style.display === 'block') {
        movieDetails.style.display = 'none';
        movieList.style.display = ''; // Mostra la lista dei film
    } else {
        // Nascondi tutti i blocchi di dettagli dei film
        const allDetails = document.querySelectorAll('.movie-details');
        allDetails.forEach(detail => detail.style.display = 'none');
        
        // Nascondi la lista dei film
        movieList.style.display = 'none';

        // Mostra solo il blocco di dettagli selezionato
        movieDetails.style.display = 'block';
    }
}

function goBackFilm() {
    // Codice specifico per tornare indietro nella pagina film
    const allDetails = document.querySelectorAll('.movie-details');
    allDetails.forEach(detail => detail.style.display = 'none');

    const movieList = document.querySelector('.table-responsive');
    movieList.style.display = '';
}


/*FUNZIONE FILTRO PAGINA AUTORI*/

function filterAuthors() {
    const author = document.getElementById('author-filter').value;
    const rating = document.getElementById('rating-filter').value;
    const rows = document.querySelectorAll('#author-list tbody tr');
    
    rows.forEach(row => {
        const rowAuthor = row.querySelector('td:nth-child(1)').textContent.trim();
        const rowRating = row.querySelector('td:nth-child(2)').textContent.trim();
        let display = true;

        if (author && author !== 'Tutti' && rowAuthor !== author) display = false;
        if (rating && rating !== 'Tutti' && rowRating !== rating) display = false;

        row.style.display = display ? '' : 'none';
    });
}
function viewAllAuthors() {
    document.getElementById('author-filter').selectedIndex = 0;
    document.getElementById('rating-filter').selectedIndex = 0;
    const rows = document.querySelectorAll('#author-list tbody tr');
    rows.forEach(row => row.style.display = '');

    const allDetails = document.querySelectorAll('.author-details');
    allDetails.forEach(detail => detail.style.display = 'none');
    document.getElementById('author-list').style.display = '';
}

/*FUNZIONE PER MOSTRARE/NASCONDERE I DETTAGLI DEGL'AUTORI*/

function toggleAuthorDetails(authorId) {
    const authorDetails = document.getElementById(authorId);
    const authorList = document.getElementById('author-list');

    if (authorDetails.style.display === 'block') {
        authorDetails.style.display = 'none';
        authorList.style.display = ''; // Mostra la lista degli autori
    } else {
        // Nascondi tutti i blocchi di dettagli degli autori
        const allDetails = document.querySelectorAll('.author-details');
        allDetails.forEach(detail => detail.style.display = 'none');
        
        // Nascondi la lista degli autori
        authorList.style.display = 'none';

        // Mostra solo il blocco di dettagli selezionato
        authorDetails.style.display = 'block';
    }
}

function goBackAutori() {
    // Codice specifico per tornare indietro nella pagina autori
    const allDetails = document.querySelectorAll('.author-details');
    allDetails.forEach(detail => detail.style.display = 'none');

    document.getElementById('author-list').style.display = '';
}

/*FUNZIONE LOGOUT*/

function logout() {
    alert('Logged out');
}


