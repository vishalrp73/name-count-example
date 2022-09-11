const nameList = ['Bob', 'Jerry', 'Johnny', 'David', 'Steve']; // our list of names we want to check against
let correctNames = []; // where we will store our name matches
let incorrectNames = []; // where we will store our inputs that don't match

// this function is purely for visuals
function formatNames(names) {
    const joined = names.join(', ') // joins each value in the array with a ", "
    // the variable 'joined' will be a string that has joined all the array values into a single string
    return joined; // returns a string e.g. "Bob, Johnny, David"
}

// our main function to check inputs against master list (nameList) array variable
function checkNames() {
    // collecting text input value from HTML input element with id of 'user-input'
    const input = document.getElementById('user-input').value;
    const filteredName = nameList.filter(name => input.toLowerCase() === name.toLowerCase());
    // filteredName returns an array that either contains a value or doesn't
    // if this returns a value in the array, this will be the match

    // we'll use the presence of this value (or not) as the condition to execute this if/else statement
    if (filteredName[0]) {
        // this means if there is a value in the first index of filteredName
        // (e.g. if it contains a matched name), execute this push
        correctNames.push(filteredName[0])
        // correctNames is the array we store out matched names so we can render that on the screen
    } else {
        // if there's no match, push the user input value into the incorrectNames array to render on the screen
        incorrectNames.push(input);
    }

    // this simply adds a space between the commas and individual names in the array
    // references above formatNames function
    const correctNamesFormatted = formatNames(correctNames);
    const incorrectNamesFormatted = formatNames(incorrectNames);

    // gets the elements on the page and assigns each relevant variable to their innerHTML
    document.getElementById('count-result').innerHTML = 'Number of correct names:' + correctNames.length;
    document.getElementById('correct-names').innerHTML = correctNamesFormatted;
    document.getElementById('incorrect-names').innerHTML = incorrectNamesFormatted;
    // if you ignore the formatNames function, replace correctNamesFormatted and incorrectNamesFormatted
    // with the correctNames and incorrectNames array variables respectively
}