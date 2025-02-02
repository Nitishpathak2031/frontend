document.querySelector('#main').addEventListener('click', function(e) {
    if (e.target.tagName === 'IMG') {
        console.log(e.target.id)
        e.target.remove();
    }
});