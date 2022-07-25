function generateHTML(responses){
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">
    </head>
    <body>
        <div class="d-flex justify-content-center">
        ${
            responses.map(function(employee){
            return generateCard(employee)
            }).join("\n")
        }
        </div>
    </body>
    </html>` 
}

function generateCard (employee){
    let lastInfo = " "
    if(employee.getRole() == "Engineer"){
        lastInfo = `<li class="list-group-item">Github ${employee.getGithub()}</li>`
    } else if(employee.getRole() == "Intern"){
        lastInfo = `<li class="list-group-item">School ${employee.getSchool()}</li>`
    } else if(employee.getRole() == "Manager"){
        lastInfo = `<li class="list-group-item">Office Number ${employee.getOfficeNumber()}</li>`
    }
    return ` <div class="card m-2" style="width: 18rem;">
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Name ${employee.getName()}</li>
      <li class="list-group-item">ID ${employee.getID()}</li>
      <li class="list-group-item">Email ${employee.getEmail()}</li>
      ${lastInfo}
    </ul>
  </div>`
}

// allow import to other files using require
module.exports = generateHTML;