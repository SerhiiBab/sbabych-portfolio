function sendMail() {
  const params = {
    title: "Contact Form",
    name: document.getElementById("fullName").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  console.log(params);

  const serviceID = "service_bxfz3ze";
  const templateID = "template_k4a12fs";

    emailjs.send(serviceID, templateID, params)
    .then(res=>{
        document.getElementById("fullName").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("Your message sent successfully!!")

    })
    .catch(err=>console.log(err));
  
  }

document.getElementById('submit-btn').addEventListener('click', (event) => sendMail(event));