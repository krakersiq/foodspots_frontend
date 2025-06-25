const watchlist = [
    {
        "name": "Greys Anatomy",
        "staffeln": 22,
        "episoden": 448,
        "streamen": "Netflix",
        "genre": "Drama",
        "bewertung": 10,
    },
    {
        "name": "Bridgeton",
        "staffeln": 6,
        "episoden": 46,
        "streamen": "Netflix",
        "genre": "Seifenoper",
        "bewertung": 7,
    },
    {
        "name": "Haus des Geldes",
        "staffeln": 5,
        "episoden": 48,
        "streamen": "Netflix",
        "genre": "Thriller",
        "bewertung": 9,
    }

];

const tbody = document.querySelector("tbody");

watchlist.forEach((serie) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
        <td>${serie.name}</td>
        <td>${serie.staffeln}</td>
        <td>${serie.episoden}</td>
        <td>${serie.streamen}</td>
        <td>${serie.genre}</td>
        <td>${serie.bewertung}</td>
    `;
    tbody.appendChild(tr);
});