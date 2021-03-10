const canvas = document.getElementById('canvas')
let score = document.getElementById('score')
const days = document.getElementById('days')
let endScreen = document.getElementById('endscreen')





dayLeft = 60
gameOverNumber = 20
daysRemaining = dayLeft
loopPlay = false





// Button start

function start(){

    count = 0;
    
    getFaster = 6000;

    loopPlay ? '': game()
    loopPlay = true
    
    canvas.innerHTML =''
    score.innerHTML = count
    days.innerHTML = daysRemaining
    




    function game(){

        let randomTime = Math.round(Math.random()*getFaster)

        getFaster > 800 ? (getFaster=getFaster* 0.9): ''

        setTimeout(()=>{

            if (daysRemaining === 0){
                youWin()
            }
            else if(canvas.childElementCount < gameOverNumber ){
            viruspop()
            game() 
        } else { gameOver()} 
    } , randomTime )
    }

    const gameOver = ()=>{
        endScreen.innerHTML = `<div className="gameOver"><h1>GAME OVER</h1> <br/>
        <h2>Score: ${count}</h2>
         </div>`

         endScreen.style.visibility='visible'
         endScreen.style.opacity= '1'
         loopPlay = false
    }

    const youWin = ()=>{
        let accuracy = Math.round(count/dayLeft * 100)
        endScreen.innerHTML = `<div className="youWin"><h1>Bravo, tu as atomisé ce virus de m... !</h1> <br/>
        <h2>Score: ${count}</h2><br/>
        <h2>Precision: ${accuracy}%</h2>
         </div>`

         endScreen.style.visibility='visible'
         endScreen.style.opacity= '1'
         loopPlay = true
    }
}



// Generation des virus

 function viruspop() {
    let virus = new Image();
    virus.src = "./media/pngwave.png"
    virus.classList.add('virus')
    virus.style.top=Math.random()*500 + 'px'
    virus.style.left=Math.random()*500 + 'px'

    let x, y;
    x = y = (Math.random() * 45) + 30;

    virus.style.setProperty('--x', `${ x }px`)
    virus.style.setProperty('--y', `${ y }px`)

    let plusMinus = Math.random() < 0.5 ? -1 : 1;

    let trX = Math.random()*500 * plusMinus;
    let trY = Math.random()*500 * plusMinus;
    if(trX )


    virus.style.setProperty('--trX', `${trX}%`);
    virus.style.setProperty('--trY', `${trY}%`);
    console.log(trX, trY);


    canvas.appendChild(virus)
}

// Enlever l'element cliqué

document.addEventListener('click', (e)=>{
    let cible = e.target 
    
if(cible.classList.contains('virus')){
    cible.remove();
    count++
    score.innerHTML = count;
}

})

// Conteur de click

document.addEventListener('click', ()=>{
    if (daysRemaining > 0){
        daysRemaining--
        days.innerHTML = daysRemaining

    }
})

// endScreen.addEventListener('click', ()=>{
//     endScreen.style.opacity='0'
//     endScreen.style.visibility='hidden'
// })

//pointer

// document.addEventListener('mousemove',(e)=>{

//     const pointer = document.getElementById('pointer')

//     let posX = e.clientX
//     let posY = e.clientY
//     console.log(posX,posY);

//     pointer.style.setProperty('--posX', `${posX}px`)
//     pointer.style.setProperty('--posY', `${posY}px`)

// })

