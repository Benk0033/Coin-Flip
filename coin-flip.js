

function flipThatCoin(result) {
    var randomNumber = Math.floor(Math.random() * 2);

    if (randomNumber === 0) {
        $("#coin-image").html(
            "<img src='http://random-ize.com/coin-flip/us-quarter/us-quarter-front.jpg' />"
        );
    }

    else {
        $("#coin-image").html(
            "<img src='http://random-ize.com/coin-flip/us-quarter/us-quarter-back.jpg' />"
        );
    }

}

$("#heads").on("click", function () {

    flipThatCoin(0);
});


