

$("#add_todo").submit(function(event){
   alert("Data Inserted Successfully!");
})

$("#update_todo").submit(function(event){
   event.preventDefault();

   var unidexed_array = $(this).serializeArray();
   var data = {}

   $.map(unidexed_array, function(n, i){
      data[n['name']] = n['value']
   })

   console.log(unidexed_array);

   var request =  {
      "url" : `http://localhost:8558/api/users/${data.id}`,
      "method" : "PUT",
      "data" : data
   }

   $.ajax(request).done(function(response){
      alert("Data Updated Successfully!")
   })

})

if(window.location.pathname == "/"){
   $ondelete = $(".table tbody td a.delete");
   $ondelete.click(function(){
      var id = $(this).attr("data-id")

      var request =  {
         "url" : `http://localhost:5500/api/users/${id}`,
         "method" : "DELETE"
      }

      if(confirm("Do you really want to delete this record?")){
         $.ajax(request).done(function(response){
            alert("Data Deleted Successfully!");
            location.reload()
         })
      }
   })
}