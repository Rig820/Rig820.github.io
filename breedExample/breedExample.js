
document.getElementById('healthIcon').addEventListener('click', function () {
    document.getElementById('healthInfo').style.display='block'
    document.getElementById('trainingInfo').style.display='none'
    document.getElementById('groomingInfo').style.display='none'

    this.classList.add("iconBackgroundOrange")
    document.getElementById('groomingIcon').classList.remove("iconBackgroundOrange")
    document.getElementById('trainingIcon').classList.remove("iconBackgroundOrange")

    // show health pic and hide groom/trainig pic
    document.getElementById('healthPic').style.display='block'
    document.getElementById('groomingPic').style.display='none'
    document.getElementById('trainingPic').style.display='none'

})

document.getElementById('groomingIcon').addEventListener('click', function () {
    document.getElementById('groomingInfo').style.display='block'
    document.getElementById('healthInfo').style.display='none'
    document.getElementById('trainingInfo').style.display='none'

    this.classList.add("iconBackgroundOrange")
    document.getElementById('trainingIcon').classList.remove("iconBackgroundOrange")
    document.getElementById('healthIcon').classList.remove("iconBackgroundOrange")

    // show health pic and hide groom/trainig pic
    document.getElementById('healthPic').style.display='none'
    document.getElementById('groomingPic').style.display='block'
    document.getElementById('trainingPic').style.display='none'
})



document.getElementById('trainingIcon').addEventListener('click', function () {
    document.getElementById('trainingInfo').style.display='block'
    document.getElementById('groomingInfo').style.display='none'
    document.getElementById('healthInfo').style.display='none'

    this.classList.add("iconBackgroundOrange")
    document.getElementById('groomingIcon').classList.remove("iconBackgroundOrange")
    document.getElementById('healthIcon').classList.remove("iconBackgroundOrange")

    // show health pic and hide groom/trainig pic
    document.getElementById('healthPic').style.display='none'
    document.getElementById('groomingPic').style.display='none'
    document.getElementById('trainingPic').style.display='block'
})
