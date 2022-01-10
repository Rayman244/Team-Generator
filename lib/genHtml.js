const { cardList } = require("./brain")

const generateHtml = () => {

const html =`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!-- CSS only -->
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
      crossorigin="anonymous"
    />
    <link rel="stylesheet" href="./styles.css" />
    <title>My Team</title>
  </head>
  <body class="bg-secondary">
    <header class="container-fluid bg-danger">
      <p class="team-name h1 text-white text-center">My Team</p>
    </header>
    <section class="team-members container mt-5 d-flex flex-wrap justify-content-evenly">
    ${cardList.map((card)=>card)}
      
    </section>

    <!-- JavaScript Bundle with Popper -->
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
      crossorigin="anonymous"
    ></script>
    
  </body>
</html>
`
return html
}
const createCard = (name, role, id, email, other) => {
  const card2 = `<div class="card bg-light border-dark border-2 m-4"> 
      <div class="card-body bg-primary text-white">
        <h5 class="card-title">${name}</h5>
        <p class="card-text">${role}</p>
      </div>
      <ul class="list-group list-group-flush p-3">
        <li class="list-group-item">ID: ${id}</li>
        <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
        <li class="list-group-item">${other}</li>
      </ul>
    </div>
  ` 
  cardList.push(card2);
  };
  const generateCss = ()=>{
    return `header{
      height: 200px;
  }
  .team-name{
      padding-top: 75px
  }`
  }
  module.exports ={
      generateHtml,
      createCard,
      generateCss
  }