function reLoad(){
    window.location.reload();
}
var requestOptions = {
    method: 'GET',
    redirect: 'follow'
};

fetch("https://dog.ceo/api/breeds/image/random", requestOptions)
    .then(response => response.text())
    .then(result => {
    console.log(result);
    var myDog = JSON.parse(result);
    console.log(myDog);
    var displayDogs = 
    myDog.message +
    myDog.status
    document.getElementById("displayDogs").src = myDog.message;
    })
    .catch(error => console.log('error', error));