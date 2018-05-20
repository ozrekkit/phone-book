var contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', function (event) {
    event.preventDefault();
    var form = event.currentTarget;
    var name = form.name.value;
    var number = form.number.value;
    var contact = new Contact(name, number);
    console.log(contact);
    saveContact(contact);
    renderContact(contact);
});

function createMain(contact) {
    var main = document.createElement('div');
    main.setAttribute('class', 'main');
    main.innerHTML = JSON.parse(localStorage.getItem('contacts')).number;
    return main;

}

function createHeader(contact) {
    var header = document.createElement('div');
    header.setAttribute('class', 'header');
    header.innerHTML = contact.name;
    return header;
}

function createRow() {
    var row = document.createElement('div');
    row.setAttribute('class', 'row');
    return row;
}

function getContactRow() {
    var contactBoard = document.getElementById('contact-board');
    var row = createRow();
    if (contactBoard.childElementCount > 0) {
        var lastRow = contactBoard.lastElementChild;
        if (lastRow.childElementCount < 3) {
            row = lastRow;
        }
    }
    contactBoard.appendChild(row);
    var col = document.createElement('div');
    col.setAttribute('class', 'col-sm-4');
    row.appendChild(col);
    return col;
}

function renderContact(contact) {
    var contact = document.createElement('div');
    contact.setAttribute('class', 'contact');
    contact.appendChild(createHeader(contact));
    contact.appendChild(createMain());
    var contactContainer = getContactRow();
    contactContainer.appendChild(contact);
}

function saveContact(contact) {
    var contacts = {};
    localStorage.setItem('contacts', JSON.stringify(contacts[contact.id] = contact));
}

function Contact(name, number) {
    this.id = getId();
    this.name = name;
    this.number = number;
    this.photo = '/assets/images/beard_man.jpg';
}

function getId() {
    return 123;
}