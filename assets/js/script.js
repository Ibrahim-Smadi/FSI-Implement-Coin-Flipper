let headFlips = 0
let tailFlips = 0

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('flip').addEventListener('click', () => {
        
        let coinflip = Math.random() < 0.5

        if (coinflip) {
            document.getElementById('penny-image').src = 'assets/images/penny-heads.jpg'
            document.getElementById('message').textContent = 'You flipped Heads!'
            headFlips += 1
        }
        
        else {
            document.getElementById('penny-image').src = 'assets/images/penny-tails.jpg'
            document.getElementById('message').textContent = 'You flipped Tails!'
            tailFlips += 1
        }

        let total = headFlips + tailFlips
        let headPercent = 0
        let tailPercent = 0
        
        if (total > 0) {
            headPercent = Math.round((headFlips / total) * 100)
            tailPercent = Math.round((tailFlips / total) * 100)
        }

        document.getElementById('heads').textContent = headFlips
        document.getElementById('tails').textContent = tailFlips
        document.getElementById('heads-percent').textContent = headPercent + '%'
        document.getElementById('tails-percent').textContent = tailPercent + '%'

    })
    
    document.getElementById('clear').addEventListener('click', function (){
       headFlips = 0
       tailFlips = 0

       document.getElementById('message').textContent = 'Flip The Coin!'
       
       let total = headFlips + tailFlips
       let headPercent = 0
       let tailPercent = 0

       if (total > 0) {
           headPercent = Math.round((headFlips / total) * 100)
           tailPercent = Math.round((tailFlips / total) * 100)
       }

       document.getElementById('heads').textContent = headFlips
       document.getElementById('tails').textContent = tailFlips
       document.getElementById('heads-percent').textContent = headPercent + '%'
       document.getElementById('tails-percent').textContent = tailPercent + '%'

    })
    

    console.log('JavaScript Loaded!')


})
