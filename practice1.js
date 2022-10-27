homeScore = document.getElementById('home-score')
guestScore = document.getElementById('guest-score')
resetScore = document.getElementById('reset-score')
let hscore = 0
let gscore = 0

function homeOne(){
    hscore +=1
    homeScore.textContent = hscore
}

function homeTwo(){
    hscore +=2
    homeScore.textContent = hscore
}

function homeThree(){
    hscore +=3
    homeScore.textContent = hscore
}

function guestOne(){
    gscore +=1
    guestScore.textContent = gscore
}

function guestTwo(){
    gscore +=2
    guestScore.textContent = gscore
}

function guestThree(){
    gscore +=3
    guestScore.textContent = gscore
}

