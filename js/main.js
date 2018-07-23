
function showPage(perPage, pageNumber) {
  const student = $('.student-item')
  const students = student.length;

  student.hide();

    $( student ).each(function(index) {
      if(index < perPage){
        $( this ).show();
    }
    });
  };


showPage(5, 2);
