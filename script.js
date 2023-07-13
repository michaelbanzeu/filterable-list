// Get input element
let filterInput = document.getElementById('filterInput');
// Add an event on it
filterInput.addEventListener('keyup', filterNames);

function filterNames() {
    // Get the value of the input
    let filterValue = document.getElementById('filterInput').value.toUpperCase();
    // Get the entire contact list
    let contacts = document.getElementById('names');
    // Get items in the contact list
    let names = contacts.querySelectorAll('li.collection-item');
    // Loop through the collection of names
    for (var i = 0; i < names.length; i++) {
        let a = names[i].getElementsByTagName('a')[0];
        // Check if matched
        if (a.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
            names[i].style.display = '';
        } else {
            names[i].style.display = 'none';
        }
    }
}