var contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', function (event) {
    event.preventDefault();
    var form = event.currentTarget;
    var name = form.name.value;
    var number = form.number.value;
    var avatar = form.avatar.value;
    var contact = new Contact(name, number, avatar);
    saveContact(contact);
    renderContact(contact);
});

function createMain(contact) {
    var contactName = document.createElement('div');
    contactName.setAttribute('class', 'contact-name');
    contactName.innerHTML = "Contact Name: " + contact.name;

    var contactNumber = document.createElement('div');
    contactNumber.setAttribute('class', 'contact-number');
    contactNumber.innerHTML = "Phone Number is - " + contact.number;

    var image = document.createElement('img');
    image.setAttribute('class', 'controls pull-right');
    image.setAttribute('name', 'img');
    image.setAttribute('src', contact.photo);

    var main = document.createElement('main');
    main.setAttribute('class', 'main');
    main.appendChild(contactName);
    main.appendChild(contactNumber);
    main.appendChild(image);
    return main;

}

function createHeader() {
    var spanPencil = document.createElement('span');
    spanPencil.setAttribute('class', 'glyphicon glyphicon-pencil');
    spanPencil.setAttribute('aria-hidden', 'true');

    var spanTrash = document.createElement('span');
    spanTrash.setAttribute('class', 'glyphicon glyphicon-trash');
    spanTrash.setAttribute('aria-hidden', 'true');

    var controls = document.createElement('div');
    controls.setAttribute('class', 'controls pull-right');
    controls.appendChild(spanPencil);
    controls.appendChild(spanTrash);

    var date = document.createElement('date');
    date.setAttribute('class', 'date');
    date.innerHTML = 'Date: 12-09-2018';

    var header = document.createElement('div');
    header.setAttribute('class', 'header');
    header.appendChild(controls);
    header.appendChild(date);
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
    var contactElement = document.createElement('div');
    contactElement.className = 'contact';
    contactElement.appendChild(createHeader());
    contactElement.appendChild(createMain(contact));
    var contactContainer = getContactRow();
    contactContainer.appendChild(contactElement);
}

function saveContact(contact) {
    var contacts = {};
    contacts[contact.id] = contact;
    localStorage.setItem('contacts', JSON.stringify(contacts));
}

function Contact(name, number, photo) {
    this.id = getId();
    this.name = name;
    this.number = number;
    this.photo = photo;
}

function getId() {
    return 123;
}