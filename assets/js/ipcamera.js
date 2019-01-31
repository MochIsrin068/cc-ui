let cctv = document.getElementById('stuff');
let parag = document.querySelector('.text-center');
let video = document.querySelector('.detailimage');

let list = document.getElementById('list-cctv');

let listH = document.getElementById('listhistory');
let b = parag.lastChild;


list.addEventListener('click', function (e) {
    let history = [];

    var row = list.getElementsByClassName('row');
    Array.from(row).forEach(data => {
        var cc = data.firstElementChild;
        var g = cc.firstElementChild;

        var cc8 = data.lastElementChild;
        var h6 = cc8.firstElementChild;

        if (e.target == g || e.target == h6) {
            video.setAttribute('src', g.src);
            b.textContent = h6.textContent;

            let newVid3 = document.createElement('img');
            newVid3.setAttribute('src', g.src);
            newVid3.setAttribute('id', 'history1');
            newVid3.setAttribute('class', 'historyimage');

            history.push(newVid3);
        }

    })

    for (let i = 0; i < history.length; i++) {
        let col3 = document.createElement('div');
        col3.setAttribute('class', 'col-3 pl-0');

        let shadow = document.createElement('div');
        shadow.setAttribute('class', 'shadow-lg p-3 bg-white rounded animated zoomIn');
        shadow.setAttribute('id', 'history');
        shadow.style.height = '100%';

        let stuff = document.createElement('div');
        stuff.setAttribute('id', 'stuff');

        let p = document.createElement('p');
        p.setAttribute('class', 'text-center mt-2');

        let bld = document.createElement('b');
        bld.textContent = b.textContent;

        p.appendChild(bld)

        stuff.appendChild(history[i]);
        stuff.appendChild(p);
        shadow.appendChild(stuff);
        col3.appendChild(shadow);

        listH.appendChild(col3);


        if (listH.childElementCount == 5) {
            listH.removeChild(listH.firstElementChild);
        }

    }
})