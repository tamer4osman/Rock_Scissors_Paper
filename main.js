function paly(humanchoice) {
    var computerchoice
    var result = false
    computerchoice = com()
    console.log(humanchoice)
    console.log(computerchoice)
    if (humanchoice === computerchoice) {
        document.getElementById('HumanRock').style.opacity = 0
        document.getElementById('HumanPaper').style.opacity = 0            
        document.getElementById('HumanScissers').style.opacity = 0
        alert('Draw')
    }
    else {
        result = compar(humanchoice, computerchoice)
        if (result) {
            alert('Human wins')
        } else {
            alert('Computer wins')
        }
    }

    function com() {
        var r = Math.floor(Math.random() * 3)
        var optitions = ['ROCK', 'PAPER', 'SCISSERS']

        switch (r) {
            case 0:
                document.getElementById('ComputerRock').style.opacity = 1
                break;
            case 1:
                document.getElementById('ComputerPaper').style.opacity = 1
                break;
            case 2:
                document.getElementById('ComputerScissers').style.opacity = 1
        }     
        return optitions[r]
    }
    function compar(humanchoice, computerchoice) {
        if (humanchoice === 'ROCK') {
            document.getElementById('HumanPaper').style.opacity = 0
            document.getElementById('HumanScissers').style.opacity = 0
            if (computerchoice === 'SCISSERS') { return true }
            else { return false }         
        }
        else if (humanchoice === 'PAPER') {
            document.getElementById('HumanRock').style.opacity = 0
            document.getElementById('HumanScissers').style.opacity = 0            
            if (computerchoice === 'ROCK') { return true }
            else { return false }
        }
        else if (humanchoice === 'SCISSERS') {
            document.getElementById('HumanRock').style.opacity = 0
            document.getElementById('HumanPaper').style.opacity = 0            
            if (computerchoice === 'PAPER') { return true }
            else { return false }
        }
    }
    document.getElementById('ComputerRock').style.opacity = 0
    document.getElementById('ComputerPaper').style.opacity = 0
    document.getElementById('ComputerScissers').style.opacity = 0
    document.getElementById('HumanRock').style.opacity = 1
    document.getElementById('HumanPaper').style.opacity = 1            
    document.getElementById('HumanScissers').style.opacity = 1
};