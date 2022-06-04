const myInput = document.getElementById('myInput');
const todoList = document.querySelector('.todo-list');

const deletebut = document.querySelector('.delete');
const archived = document.querySelector('.archive');
const restore = document.querySelector('.resbutton');
const restore1 = document.querySelector('.resBut1');
const restore2 = document.querySelector('.resBut2');

let myListItems;

let a = 3;
let b = 3;
let c = 3;
let d = 0;

let fordelete;


myInput.addEventListener('keydown', (e) => {
    if (e.code === 'Enter' && myInput.value && e.target.value) {
        a++;
        let forid = "list-item" + a;
        const listItem = document.createElement('li');
        listItem.className = 'list-group-item list-item aaaaa';
        listItem.innerText = `${myInput.value}`;
        listItem.setAttribute("draggable", "true");
        listItem.setAttribute("id", forid);
        todoList.append(listItem);
        if (document.getElementsByTagName('li')) {
            myListItems = Array.from(document.getElementsByTagName('li'));

        }
        myInput.value = '';
        myInput.classList.add('invisible');

        listItem.addEventListener('dragstart', (e) => {
            e.dataTransfer.setData('text', e.target.id);
        });


        const contextMenu = document.querySelector('.context');

        listItem.addEventListener("contextmenu", (event) => {
            d++;
            fordelete = "item" + d;
            listItem.classList.add(fordelete);
            event.preventDefault();
            const {
                clientX: mouseX,
                clientY: mouseY
            } = event;
            contextMenu.style.top = `${mouseY}px`;
            contextMenu.style.left = `${mouseX}px`;

            contextMenu.classList.add("visible");
        });

        restore.addEventListener('click', (e) => {
            listItem.classList.remove('d-none');
        });
    }
});

const myInput1 = document.getElementById('myInput1');
const todoList1 = document.querySelector('.todo-list1');

myInput1.addEventListener('keydown', (e) => {
    if (e.code === 'Enter' && myInput1.value && e.target.value) {
        b++;
        let forid = "list-item1" + b;
        const listItem = document.createElement('li');
        listItem.className = 'list-group-item list-item bbbbb';
        listItem.innerText = `${myInput1.value}`;
        listItem.setAttribute("draggable", "true");
        listItem.setAttribute("id", forid);
        todoList1.append(listItem);

        if (document.getElementsByTagName('li')) {
            myListItems = Array.from(document.getElementsByTagName('li'));

        }
        myInput1.value = '';
        myInput1.classList.add('invisible');

        listItem.addEventListener('dragstart', (e) => {
            e.dataTransfer.setData('text', e.target.id);
        });

        const contextMenu = document.querySelector('.context');

        listItem.addEventListener("contextmenu", (event) => {
            w++;
            fordelete = "item" + w;
            listItem.classList.add(fordelete);
            event.preventDefault();
            const {
                clientX: mouseX,
                clientY: mouseY
            } = event;
            contextMenu.style.top = `${mouseY}px`;
            contextMenu.style.left = `${mouseX}px`;

            contextMenu.classList.add("visible");
        });

        restore.addEventListener('click', (e) => {
            listItem.classList.remove('d-none');
        });
    }
});

const myInput2 = document.getElementById('myInput2');
const todoList2 = document.querySelector('.todo-list2');

myInput2.addEventListener('keydown', (e) => {
    if (e.code === 'Enter' && myInput2.value && e.target.value) {
        c++;
        let forid = "list-item2" + c;
        const listItem = document.createElement('li');
        listItem.className = 'list-group-item list-item ccccc';
        listItem.innerText = `${myInput2.value}`;
        listItem.setAttribute("draggable", "true");
        listItem.setAttribute("id", forid);
        todoList2.append(listItem);
        if (document.getElementsByTagName('li')) {
            myListItems = Array.from(document.getElementsByTagName('li'));

        }
        myInput2.value = '';
        myInput2.classList.add('invisible');


        listItem.addEventListener('dragstart', (e) => {
            e.dataTransfer.setData('text', e.target.id);
        });


        const contextMenu = document.getElementById("context-menu");

        listItem.addEventListener("contextmenu", (event) => {
            w++;
            fordelete = "item" + w;
            listItem.classList.add(fordelete);
            event.preventDefault();

            const {
                clientX: mouseX,
                clientY: mouseY
            } = event;

            contextMenu.style.top = `${mouseY}px`;
            contextMenu.style.left = `${mouseX}px`;

            contextMenu.classList.add("visible");
        });
        restore.addEventListener('click', (e) => {
            listItem.classList.remove('d-none');
        });
    }
});

const adding1 = document.querySelector('.first')

adding1.addEventListener('click', (e) => {
    myInput.classList.remove('invisible');
    myInput.focus();
});

const adding2 = document.querySelector('.second')

adding2.addEventListener('click', (e) => {
    myInput1.classList.remove('invisible');
    myInput1.focus();
});

const adding3 = document.querySelector('.third')

adding3.addEventListener('click', (e) => {
    myInput2.classList.remove('invisible');
    myInput2.focus();
});



const dropZones = Array.from(document.querySelectorAll('.drop-zone'));


dropZones.forEach(dropZone => {

    dropZone.addEventListener('dragenter', (e) => {
        e.preventDefault();
    });

    dropZone.addEventListener('dragover', (e) => {
        e.preventDefault();
    });

    dropZone.addEventListener('dragleave', (e) => {
        e.preventDefault();
    });

    dropZone.addEventListener('drop', (e) => {
        dropZone.append(document.getElementById(e.dataTransfer.getData('text')));
        e.preventDefault();
    });
});

const contextMenu = document.getElementById("context-menu");

const scope = document.querySelector("body");
scope.addEventListener("click", (e) => {
    contextMenu.classList.remove("visible");

});

archived.addEventListener('click', (e) => {
    for (let f = 0; f < myListItems.length; f++) {
        if (myListItems[f].className.includes(fordelete)) {
            myListItems[f].classList.add('d-none');
        }
    }


});

deletebut.addEventListener("click", (e) => {
    for (let y = 0; y < myListItems.length; y++) {
        if (myListItems[y].className.includes(fordelete)) {
            myListItems[y].remove();
        }
    }
});