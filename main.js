window.onload = function() {
    let menuChoice;
    while (menuChoice !== '1' && menuChoice !== '2') {
        menuChoice = prompt('Menu\n1. Create a new game\n2. Exit');

        if (menuChoice === '1') {
            let name = prompt('Enter Name');
            let gameMove;
            while (gameMove !== '1'&& gameMove !=='2'&& gameMove !== '3') {

                gameMove = prompt('Enter Move\n1. Rock\n2. Paper\n3. Scissors');
                if (gameMove === '1' || gameMove === '2' || gameMove === '3') {
                    let computerMove= Math.floor(Math.random() * 3) + 1;
                    if(gameMove === '1'){
                        if(computerMove === 1){
                            alert("Tie!");
                        }else if (computerMove === 2){
                            alert("Computer Wins! Loser")
                        }else {
                            alert("You Win!")
                        }
                    }else if (gameMove === '2'){
                        if (computerMove === 1){
                            alert("You Win!");
                        }else if( computerMove === 2){
                            alert("Tie!");
                        }else {
                            alert("Computer Wins!")
                        }
                    } else {
                        if(computerMove === 1){
                            alert("Computer Wins!");
                        }else if(computerMove === 2){
                            alert("You Win!");
                        }else {
                            alert ("Tie!");
                        }
                    }
                } else {
                    alert("Try Again!");
                }
            }

        } else if (menuChoice === '2') {
            alert('bye');
        } else {
            alert('Try again!')
        }
    }
}