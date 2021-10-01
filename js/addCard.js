const imgUrl = "https://source.unsplash.com/random/";

const getRandomNumber = () => {
    return Math.floor( Math.random() * 1000 );
};

export const addNewCard = ( event ) => {
    event.preventDefault();
    const cardImage = document.createElement( "img" );
    const cardTitle = document.createElement( "h3" );
    const cardParagraph = document.createElement( "p" );
    const cardContainer = document.createElement( "section" );
    const cardImageSection = document.createElement( "section" );
    const cardArticle = document.createElement( "article" );

    const lorem = document.createTextNode( "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias perferendis ex, repudiandae dolorum illo illum itaque autem eveniet corporis et obcaecati est provident assumenda fuga aut debitis ab vel voluptas." );
    const title = document.createTextNode( "Card Title" );

    cardArticle.classList.add( "card" );
    cardImageSection.classList.add( "card-image" );
    cardContainer.classList.add( "card-container" );

    cardParagraph.appendChild( lorem );
    cardTitle.appendChild( title );
    cardImage.src = `${ imgUrl }${ getRandomNumber() }`;

    cardImageSection.appendChild( cardImage );

    cardContainer.appendChild( cardTitle );
    cardContainer.appendChild( cardParagraph );

    cardArticle.appendChild( cardImageSection );
    cardArticle.appendChild( cardContainer );

    document.querySelector( "main" ).appendChild( cardArticle );
};
