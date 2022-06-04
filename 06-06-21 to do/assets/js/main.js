const myinput = document.getElementById('myInput');
const todolist = document.querySelector('.todo-list');
const restore = document.querySelector('.restore');

myInput.addEventListener('keydown', (e) => {
    if (e.code === 'Enter' && myInput.value && e.target.value) {
        const listitem = document.createElement('li');
        listitem.className = 'list-group-item';
        listitem.innerText = `${myinput.value}`;
        todolist.append(listitem);

        const mylabel = document.createElement('label');
        mylabel.className = "container1";
        const myInput = document.createElement('input');
        myInput.type = "checkbox";
        mylabel.append(myInput);
        const myspan = document.createElement('span');
        myspan.className = "checkmark";
        mylabel.append(myspan);
        const myList = document.querySelector('.place');
        myList.append(mylabel);

        let span = document.createElement("SPAN");
        let txt = document.createTextNode("\u00D7");

        span.className = "span";
        span.appendChild(txt);
        listitem.appendChild(span);

        span.onclick = function () {
            restore.classList.remove('d-none');
            mylabel.classList.add('d-none');
            listitem.classList.add('d-none');
        }

        myInput.onclick = function () {
            if (listitem.style.color === 'red') {
                listitem.style.color = 'black';
                listitem.style.textDecoration = 'none';
            }
            else {
                listitem.style.color = 'red';
                listitem.style.textDecoration = 'line-through';
            }
        }
        myinput.value = '';
        myinput.focus();
    }

    const resbutton = document.querySelector('.restorebutton');
    const listitems = Array.from(document.getElementsByTagName('li'));
    const labels = Array.from(document.getElementsByTagName('label'));
    resbutton.onclick = function () {

        for (let i = 0; i < labels.length; i++) {
            labels[i].classList.remove('d-none');

        }
        for (let i = 0; i < listitems.length; i++) {
            listitems[i].classList.remove('d-none');
        }
    }
});