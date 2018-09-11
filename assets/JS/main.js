//Variable declarations
var portfolio = [ 
    {
        name: "Hangman",
        img: "assets/images/hangman.png",
        href: "https://joedmg58.github.io/Word-Guess-Game/index.html",
        git: ""
    },
    {
        name: "Crystal collector",
        img: "assets/images/crystals_shot.png",
        href: "https://joedmg58.github.io/Crystal-Collector/index.html",
        git: ""
    },
    {
        name: "Trivia Game",
        img: "assets/images/Trivia.PNG",
        href: "https://joedmg58.github.io/TriviaGame/index.html",
        git: ""
    },
    {
        name: "GifTastic",
        img: "assets/images/giftastic.gif",
        href: "https://joedmg58.github.io/GifTastic/index.html",
        git: ""
    },
    {
        name: "Train Schedule",
        img: "assets/images/train_schedule.jpg",
        href: "https://joedmg58.github.io/trainSchedule/index.html"
    },
    {
        name: "Parking Ticket Reinbursement",
        img: "assets/images/ptr.png",
        href: "https://joedmg58.github.io/PTR/index.html"
    },
    {
        name: "Rock Paper Scissor",
        img: "assets/images/rock.PNG",
        href: "https://joedmg58.github.io/RPS-Game/index.html"
    },
    {
        name: "LIRI-Bot",
        img: "assets/images/liribot.jpg",
        href: "",
        git: "https://github.com/joedmg58/liri-node-app"
    },
    {
        name: "Bamazon",
        img: "",
        href: ""
    },
    {
        name: "Friend Finder",
        img: "",
        href: ""
    },
    {
        name: "Eat-Da-Burger",
        img: "",
        href: ""
    },
    {
        name: "Doula Service",
        img: "",
        href: ""
    }  
];

//Everythings happends when document is loaded (ready)
window.addEventListener( "load", documentReady );

function documentReady( event ) {

    console.log( 'document loaded' );

    var portfolioContent = document.getElementsByClassName( "portfolioContent" )[0];

    for( let i = 0; i < portfolio.length; i++ ) {

        var portfolioItem = document.createElement( "DIV" );
        portfolioItem.classList.add( "portfolioItems" );

        var itemImage = document.createElement( "IMG" ); 
        itemImage.classList.add( "itemPic" );
        itemImage.setAttribute( 'src', portfolio[i].img );
        itemImage.setAttribute( 'alt', portfolio[i].name );

        var itemLink = document.createElement( 'a' );
        itemLink.classList.add( 'itemLink' );
        itemLink.setAttribute( 'href', portfolio[i].href );
        itemLink.setAttribute( 'target', '_blank');
        itemLink.innerHTML = portfolio[i].name;

        var itemTitle = document.createElement( "DIV" );
        itemTitle.classList.add( "itemTitle" );
        itemTitle.appendChild( itemLink );

        portfolioItem.appendChild( itemImage );
        portfolioItem.appendChild( itemTitle );

        portfolioContent.appendChild( portfolioItem );
    }

}