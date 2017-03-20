function solve(args) {

    var len = args.length,
        array = [],
        person = '',
        people = getPeople(),
        position = getYoungest(people);

    console.log(people[position].firstname + " " + people[position].lastname);

    function getPeople() {
        for (var i = 0; i < len; i++) {
            if (i % 3 === 0) {
                person = new Object();
                person.firstname = args[i];
                person.lastname = args[i + 1];
                person.age = +args[i + 2];
                array.push(person);
            }
        }
        return array;
    }

    function getYoungest(object) {
        var min = 999,
            position;
        for (var i = 0; i < object.length; i++) {
            if (object[i].age < min) {
                min = object[i].age;
                position = i;
            }
        }
        return position;
    }
}
