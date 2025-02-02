const changeText =function(){
    document.querySelector('h1').innerHTML = 'i love coding';
}
const changeMe = setTimeout(changeText, 2000);

document.querySelector('button').addEventListener('click', function(){
    clearTimeout(changeMe);
    console.log('timeout cleared');
});