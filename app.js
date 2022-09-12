const nameList = ['Bob', 'Jerry', 'Johnny', 'David', 'Steve'];
let correctNames = [];
let incorrectNames = [];

function formatNames(names) {
    const joined = names.join(', ');
    return joined;
}

function checkNames() {
    const input = document.getElementById('user-input').value;
    const filteredName = nameList.filter(name => input.toLowerCase() === name.toLowerCase());

    if (filteredName[0]) {
        correctNames.push(filteredName[0])
    } else {
        incorrectNames.push(input);
    }

    const correctNamesFormatted = formatNames(correctNames);
    const incorrectNamesFormatted = formatNames(incorrectNames);

    document.getElementById('count-result').innerHTML = 'Number of correct names:' + correctNames.length;
    document.getElementById('correct-names').innerHTML = correctNamesFormatted;
    document.getElementById('incorrect-names').innerHTML = incorrectNamesFormatted;
}