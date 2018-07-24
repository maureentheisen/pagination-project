//set default variables
const students = document.querySelectorAll('.student-item');
const perPage = 10;
const numStudents = students.length;
const totalPages = Math.ceil(students/perPage);

//show set number of students when user clicks on the page
function showPage(pageNumber, students, perPage) { // show variable number of students perpage, and by page number)
    maxItems = pageNumber * perPage ; //this computes what students should show up based on page number
    minItems = (maxItems) - perPage;
    // loop through students array
    for (var i = 0; i < students.length ; i++) {
        students[i].style.display = 'none'; // set to showing non
        if (i >= minItems && i <= (maxItems - 1)) {
           students[i].style.display = 'block'; //fill in the page with the students that should be there
        }
    }
}

// set the page to page 1 when user first loads the page
showPage(1, students, perPage);

// create page links
function appendPageLinks(students, perPage) { //add page numbers based on the number of students and the number of students that should appear on each page
    const totalPages = Math.ceil(students / perPage); //compute the total noumber of pages needed to show all the students
    const pagination = document.getElementById('pagination'); // create a div to hold the page numbers
    const ul = document.createElement("ul"); // create a list  to hold the page numbers
    pagination.appendChild(ul);
    for (var j = 1; j <= totalPages; j++) { // go through the pages and create a page number for each page
        var li = document.createElement("li"); // each page number is in a list item.
        ul.appendChild(li);
        li.innerHTML = '<a href="#">' + j + '</a>'; // each page number is inside a link so you can select the link to go to that page
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
  let page = ($(this).text()); //grabs the page number so it can be used in the showPage function
  showPage(page, students, perPage);
  // add class  of active when user clicks on a page
  $(this).addClass('active');
});
