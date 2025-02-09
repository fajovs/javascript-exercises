const findTheOldest = function(persons) {

    let ageArray = persons.map(person => {
        if(!person.yearOfDeath){
            return parseInt(new Date().getFullYear()) - person.yearOfBirth
        }else{
            return person.yearOfDeath - person.yearOfBirth
        }
    })

    return persons[ageArray.indexOf(Math.max(...ageArray))]

};

// Do not edit below this line
module.exports = findTheOldest;
