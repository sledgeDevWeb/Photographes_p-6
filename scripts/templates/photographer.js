function photographerTemplate(data) {
    const { name, portrait, price } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const titleH3 = document.createElement( 'h3' );
        titleH3.textContent= price;
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(titleH3);
        return (article);
    }
    return { name, picture, price, getUserCardDOM }
}