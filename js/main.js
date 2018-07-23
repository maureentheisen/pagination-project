//selects the list items with class .student-item
const students = document.querySelectorAll('.student-item');
const perPage = 10;
const numStudents = students.length;
const totalPages = Math.ceil(students/perPage);

function showPage(pageNumber, students, perPage) {

    maxItems = pageNumber * perPage - 1;
    minItems = (maxItems  + 1) - perPage;

    for (var i = 0; i < students.length - 1; i++) {
        students[i].style.display = 'none';
        if (i >= minItems && i <= (maxItems - 1)) {
           students[i].style.display = 'block';
        }
    }
}

showPage(3, students, perPage);


function appendPageLinks(students, perPage) {
    const totalPages = Math.ceil(students / perPage);
    const pagination = document.getElementById('pagination');
    const ul = document.createElement("ul");


    pagination.appendChild(ul);

    for (var j = 1; j <= totalPages; j++) {
        var li = document.createElement("li");
        ul.appendChild(li);
        li.innerHTML = '<a href="#">' + j + '</a>';

    }


};


appendPageLinks(numStudents, perPage);


