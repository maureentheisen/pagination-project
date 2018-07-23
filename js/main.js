//set default variables
const students = document.querySelectorAll('.student-item');
const perPage = 10;
const numStudents = students.length;
const totalPages = Math.ceil(students/perPage);

//show set number of students when user clicks on the page
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

// set the page to page 1 when user first loads the page
showPage(1, students, perPage);

// create page links
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


//remove active class
function reset(){
  $('#pagination ul li a').removeClass('active');
};

// add page links
appendPageLinks(numStudents, perPage);

//go to page when clicked
pageNumber = $('#pagination ul li a').text();
$('#pagination ul li a').on("click", function(event){
  //remove class of active when user clicks on a different page
  reset();
  let page = ($(this).text());
  showPage(page, students, perPage);
  // add class  of active when user clicks on a page
  $(this).addClass('active');
});
