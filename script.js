// Get input element
const filterInput = document.getElementById('filterInput');
// Add an event on it
filterInput.addEventListener('keyup', filterNames);

function filterNames() {
    // Get the value of the input
    let filterValue = filterInput.value.toUpperCase();
    // Get the entire contact list
    const contacts = document.getElementById('names');
    // Get items in the contact list
    const names = contacts.querySelectorAll('li.collection-item');
    //     // Loop through the collection of names
    for (const name of names) {
        let contact = name.getElementsByTagName('a')[0];
        // Check if matched
        if (contact.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
            name.style.display = "";
        } else {
            name.style.display = "none";
        }
    }
}