// Add your code here



function submitData (nameStr, emailStr) {
  const formData = {name: nameStr, email: emailStr}
  const configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(formData)
  }
  const body = document.querySelector("body")
  return fetch("http://localhost:3000/users", configObj) 
    .then (response => response.json())
    .then (object => {
      body.append(object.id)
    })
    .catch (error => {
      alert("WHYYYYY")
      body.append(error.message)
    })
}