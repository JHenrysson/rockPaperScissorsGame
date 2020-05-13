window.onload = function() {
    let menuChoice;
    while (menuChoice !== '1' && menuChoice !== '2') {
        menuChoice = prompt('Menu\n1. Create a new game\n2. Exit');

        if (menuChoice === '1') {
            alert("Starting Game")
        } else if (menuChoice === '2') {
            alert('bye');
        } else {
            alert('Try again!')
        }
    }
}