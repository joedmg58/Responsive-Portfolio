//Variable declarations
var portfolio = [ 
    {
        name: "",
        img: "",
        href: ""
    },
    {
        name: "",
        img: "",
        href: ""
    },
    {
        name: "",
        img: "",
        href: ""
    },
    {
        name: "",
        img: "",
        href: ""
    },
    {
        name: "",
        img: "",
        href: ""
    } 
];

//Everythings happends when document is loaded (ready)
window.addEventListener( "load", documentReady );

function documentReady( event ) {

    console.log( 'document loaded' );

    var portfolioContent = document.getElementsByClassName( "portfolioContent" );

    for( let i = 0; i < portfolio.length; i++ ) {

        var portfolioItem = document.createElement( "DIV" );
        portfolioItem.classList.add( "portfolioItems" );

        var itemImage = document.createElement( "IMG" ); 
        itemImage.classList.add( "itemPic" );

        var itemTitle = document.createElement( "DIV" );
        itemTitle.classList.add( "itemTitle" );

        portfolioItem.appendChild( itemImage );
        portfolioItem.appendChild( itemTitle );

        portfolioContent[0].appendChild( portfolioItem );
    }

}