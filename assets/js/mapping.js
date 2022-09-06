const data = [
    { id: 1, name: "John Doe", job: "Unknown", gender: "male" },
    { id: 2, name: "Maria Carey", job: "Singer", gender: "female" },
    { id: 3, name: "Michael Christensen", job: "Ruins pupils", gender: "male" },
    { id: 4, name: "Ole Olsen", job: "Speedway", gender: "male" },
    { id: 5, name: "Margaret Thatcher", job: "Politician", gender: "female" },
    { id: 6, name: "Marie Curie", job: "kernefysiker", gender: "male" },
  ];
  const male = "https://www.w3schools.com/howto/img_avatar.png";
  let father = document.querySelector('#father')
  const female = "https://www.w3schools.com/howto/img_avatar2.png";
  console.log(data);
  data.forEach(data => {
    document.getElementById("mother").innerHTML += `
    <figure class="card" id=${data.id}>
    <img src=${data.gender === "male" ? male : female} alt=${data.name + " er ansat som " + data.job} >
    <article class="container">
      <h4><b>${data.name}</b></h4>
      <p>${data.job}</p>
    </article>
  </figure>
    
    `;
    
  });
  let cards = document.querySelectorAll('.card')
  father.innerHTML = `
  <figure class="card" id=${data[0]}>
  <img src=${data[0].gender === "male" ? male : female} alt=${data[0].name + " er ansat som " + data[0].job} >
  <article class="container">
    <h4><b>${data[0].name}</b></h4>
    <p>${data[0].job}</p>
  </article>
  </figure>
  
  `;
    cards.forEach((e) => {
      e.addEventListener("click", () => {
        console.log(data.id);
        /**for each of the found elements, listen for an onclick */
        father.innerHTML = ""
        father.innerHTML = `
        <figure class="card" id=${data[e.id - 1]}>
        <img src=${data[e.id - 1].gender === "male" ? male : female} alt=${data[e.id - 1].name + " er ansat som " + data[e.id - 1].job} >
        <article class="container">
          <h4><b>${data[e.id - 1].name}</b></h4>
          <p>${data[e.id - 1].job}</p>
        </article>
      </figure>
        
        `;
        
      });
    });
  
  
  