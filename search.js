function myFunction() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value;
    var splitFilter = filter.split("-"); 
    var reverseArray = splitFilter.reverse();
    var joinFilter = reverseArray.join("-"); 
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(joinFilter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
  }

  $("document").ready(function () {
    let today = new Date();
    let monthDetails = (today.getMonth()+1) <=9 ? '0'+(today.getMonth()+1) : (today.getMonth()+1);
    let date = today.getDate()+'-'+monthDetails+'-'+today.getFullYear();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue != date) {
          tr[i].style.display = "none";
        };
      }       
    }
  });