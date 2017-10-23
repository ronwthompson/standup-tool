const allStudents = ['Adonay','Aldo','Justin','Kat','Kevin','Kyle','Lena','Matt','Melinda','Nathan','RJ','Ronald','Sean','Stan']

function generateGroup(){
    shuffleStudents(allStudents)
    let numOfGroups = document.getElementById('numOfGroups').value
    const groupSize = Math.floor(allStudents.length/numOfGroups)
    let oddballs = allStudents.length%numOfGroups
    let arrayOfGroups = []
    let completedStudents = 0
    for (let i = 0; i < numOfGroups; i++){
        let studentsToAdd = groupSize
        if(oddballs>0){
            studentsToAdd++
            oddballs--
        }
        let tempArr = allStudents.slice(completedStudents, completedStudents+studentsToAdd)
        arrayOfGroups.push(tempArr)
        completedStudents += studentsToAdd
    }
    let groupHtml = ''
    for (let i = 0; i < arrayOfGroups.length; i++){
        groupHtml += '<div class="group">'
        for (let o = 0; o < arrayOfGroups[i].length; o++){
            groupHtml += '<span class="student">'
            groupHtml += arrayOfGroups[i][o]
            groupHtml += ' </span>'
        }
        groupHtml += '</div>'
    }
    document.getElementById('allGroups').innerHTML = groupHtml
}

function shuffleStudents(array){
    var m = array.length, t, i;
    while (m) {
        i = Math.floor(Math.random() * m--);
        t = array[m];
        array[m] = array[i];
        array[i] = t;
    }
    return array;
}