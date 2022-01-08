const generateHtml = () => {
return `<!DOCTYPE html>
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
      
    </section>

    <!-- JavaScript Bundle with Popper -->
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
      crossorigin="anonymous"
    ></script>
    <!-- JQuery -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js" integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    
  </body>
</html>
`
}
const createCard = (name, role, id, email, other) => {
    let card = $(`<div>`).attr("class", "card bg-light border-dark border-2 m-4").attr('style','width: 18rem');
    let cardBody = $("<div>").attr("class", "card-body bg-primary text-white");
    let cardTitle = $("<h5>").attr("class", "card-title").text(`${name}`);
    let cardText = $("<p>").attr("class", "card-text").text(`${role}`);
    let listgroup = $("<ul>").attr("class", "list-group list-group-flush p-3");
    let li1 = $("<li>").attr("class", "list-group-item").text(`${id}`);
    let li2 = $("<li>").attr("class", "list-group-item").text(`${email}`);
    let li3 = $("<li>").attr("class", "list-group-item").text(`${other}`);
    cardBody.append(cardTitle, cardText);
    listgroup.append(li1, li2, li3);
    card.append(cardBody, listgroup);
    $(`.team-members`).append(card);
  };
  export{
      generateHtml,
      createCard
  }