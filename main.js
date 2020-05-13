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