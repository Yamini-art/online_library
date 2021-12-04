import React from 'react';
import swal from 'sweetalert';


 export default function BookUpload(props) {
 





  const uploadBook=()=>{
   var file=document.getElementById("file").files[0]
    upload(file);
    
  }



  const upload = (file) => {
      console.log(file);

      const formData = new FormData();

 formData.append('file',file);

 fetch("http://localhost:8080/admin-service/library/admin/upload",{
 method: 'POST',
 body: formData
 })
 .then((response) =>{
  console.log(response)
     if(response.status==200)
     {
       alert("success")
     }
          else{
        alert("Please Try Again")
     }

 })

 .catch((error) => {
  console.log(error)
   
 });
    
}





  return (
      <>
    <section className="container shadow p-1 bg-light rounded ">
    <input type="file" id="file"></input>
     
    </section><br/>
    <section className="d-flex justify-content-center">
    <button type="button"  onClick={uploadBook}>
    <h7 >  Upload Book </h7>
    </button>

    </section>
    </>
  );
}

 <BookUpload />