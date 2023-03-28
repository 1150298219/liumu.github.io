const button = document.getElementById('changeColorBtn');

button.addEventListener('click', function() {
    const body = document.querySelector('body');
    if (body.style.backgroundColor === '') {
        body.style.backgroundColor = '#333';
        body.style.color = '#fff';
    } else {
        body.style.backgroundColor = '';
        body.style.color = '#333';
    }
});
