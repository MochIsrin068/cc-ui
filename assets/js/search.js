var data = document.getElementById('list-cctv');

var search = document.querySelector('#search input');

search.addEventListener('keyup', function (i) {
    var searchChar = i.target.value.toUpperCase();
    var cari = data.getElementsByClassName('row');

    Array.from(cari).forEach(function (data) {
        var partext = data.lastElementChild;
        var text = partext.firstElementChild.textContent;

        if (text.toUpperCase().indexOf(searchChar) !== -1) {
            data.style.display = 'block';
        } else {
            data.style.display = 'none';
        }
    });

});