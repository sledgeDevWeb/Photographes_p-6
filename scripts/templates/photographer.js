function photographerTemplate(data) {
    const { name, portrait, price, city, country, tagline } = data;

    const picture = `assets/SamplePhotos/PhotographersIdPhotos/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const Myprice = document.createElement( 'span' );
        Myprice.textContent= price ;
        const img = document.createElement( 'img' );
        img.setAttribute("src", portrait)
        img.textContent=portrait;
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        const Mycity = document.createElement( 'p' );
        Mycity.textContent = city;
        const Mycountry  = document.createElement( 'p' );
        Mycountry.textContent = country;
        const Mytagline  = document.createElement( 'h3' );
        Mytagline.textContent = tagline;
        

        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(Mycity);
        article.appendChild(Mycountry);
        article.appendChild(Mytagline);
        article.appendChild(Myprice);
        return (article);
    }
    return { name, portrait, price, city, country, tagline, getUserCardDOM }
}