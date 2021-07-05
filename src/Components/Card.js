function Card() {
    //Creating the cards and randomize it on every reload.
    let mainDeck = ["card-a", "card-a", "card-b", "card-b", "card-c", "card-c", "card-d", "card-d", "card-e", "card-e", "card-f", "card-f", "card-g", "card-g", "card-h", "card-h", "card-i", "card-i", "card-j", "card-j", "card-k", "card-k", "card-l", "card-l"];
    mainDeck = mainDeck.sort(() => Math.random() - 0.5);
    let compArr = [];
    let compData = [];

   // startgame();


    /*
    //start the game by adding random pictures to the cards by adding random classes.
    function startgame() {
        Array.from(document.querySelectorAll("div.cards-inner")).forEach((card, i) => {
            card.classList.add(mainDeck[i]);
            card.dataset.id = i;
            card.classList.add("card-hidden");
        });

    }*/

        console.log(document.querySelectorAll("div.cards-inner"));

        Array.from(document.querySelectorAll("div.cards-inner")).forEach((card, i) => {
            card.classList.add(mainDeck[i]);
            card.dataset.id = i;
            card.classList.add("card-hidden");
        });



    // event click on card, get id and perform action.
    Array.from(document.querySelectorAll("div.cards-inner")).forEach(function ($btn) {
        $btn.addEventListener("click", function () {

            $btn.classList.remove("card-hidden");
            compArr.push($btn.classList[1]);
            compData.push($btn.dataset.id);

            if (compData[0] === compData[1]) {
                turnAround();
                compData = [];

            } else if (compArr.length === 2) {
                compare($btn);
                compData = [];
            }
        });
    });

    //When clicked two cards, they get send to a compare array. which triggers a if else statement.
    function compare($btn) {

        if (compArr[0] === compArr[1]) {
            setTimeout(function () {
                ifequal($btn);
            }, 500);
        } else {
            setTimeout(function () {
                turnAround($btn);
            }, 300);

        }
    }


//If they are the same cards, then add a class 'correct'
    function ifequal() {
        Array.from(document.getElementsByClassName(compArr[0])).forEach((elem) => {
            elem.classList.add("correct");
        });
        compArr = [];

    }



//if it's not equal, turn the two last cards around.
    function turnAround() {
        Array.from(document.getElementsByClassName(compArr[0])).forEach((elem) => {
            elem.classList.add("card-hidden");
        });
        Array.from(document.getElementsByClassName(compArr[1])).forEach((elem) => {
            elem.classList.add("card-hidden");
        });
        compArr = [];
    }

   let cards = [];
    for (let i = 0; i < 24; i++ ) {
        cards.push( <div key={i} className="col cards text-center p-2">
            <div className="cards-inner"></div>
        </div>)
    }
    return cards;
}
export default Card;
