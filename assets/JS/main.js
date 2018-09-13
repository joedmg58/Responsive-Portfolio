//Variable declarations
var portfolio = [ 
    {
        name: "Hangman",
        img: "assets/images/hangman.png",
        href: "https://joedmg58.github.io/Word-Guess-Game/index.html",
        git: "https://github.com/joedmg58/Word-Guess-Game"
    },
    {
        name: "Crystal collector",
        img: "assets/images/crystals_shot.png",
        href: "https://joedmg58.github.io/Crystal-Collector/index.html",
        git: "https://github.com/joedmg58/Crystal-Collector"
    },
    {
        name: "Trivia Game",
        img: "assets/images/Trivia.PNG",
        href: "https://joedmg58.github.io/TriviaGame/index.html",
        git: "https://github.com/joedmg58/TriviaGame"
    },
    {
        name: "GifTastic",
        img: "assets/images/giftastic.gif",
        href: "https://joedmg58.github.io/GifTastic/index.html",
        git: "https://github.com/joedmg58/GifTastic"
    },
    {
        name: "Train Schedule",
        img: "assets/images/train_schedule.jpg",
        href: "https://joedmg58.github.io/trainSchedule/index.html",
        git: "https://github.com/joedmg58/trainSchedule"
    },
    {
        name: "Parking Ticket Reinbursement",
        img: "assets/images/ptr.png",
        href: "https://joedmg58.github.io/PTR/index.html",
        git: "https://github.com/joedmg58/PTR"
    },
    {
        name: "Rock Paper Scissor",
        img: "assets/images/rock.PNG",
        href: "https://joedmg58.github.io/RPS-Game/index.html",
        git: "https://github.com/joedmg58/RPS-Game"
    },
    {
        name: "LIRI-Bot",
        img: "assets/images/liribot.jpg",
        href: "#",
        git: "https://github.com/joedmg58/liri-node-app"
    },
    /* {
        name: "Bamazon",
        img: "",
        href: "https://github.com/joedmg58/bamazon",
        git: "https://github.com/joedmg58/bamazon"
    }, */
    {
        name: "Friend Finder",
        img: "assets/images/friendFinder.png",
        href: "https://jm58-friend-finder.herokuapp.com/",
        git: "https://github.com/joedmg58/friendFinder"
    },
    {
        name: "Eat-Da-Burger",
        img: "assets/images/burger.png",
        href: "https://github.com/joedmg58/burger",
        git: "https://github.com/joedmg58/burger"
    },
    {
        name: "Doula Services",
        img: "assets/images/doula.png",
        href: "https://github.com/joedmg58/Doula-Services",
        git: "https://github.com/joedmg58/Doula-Services"
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