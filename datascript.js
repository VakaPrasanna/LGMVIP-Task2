let box = document.getElementById("cards");

let API = async () => {
  let response = await fetch("https://reqres.in/api/users?page=1");
  let file = await response.json();
  let info = file.data
    .map((element) => {
      return `
      <div class="card">
        <div class="card-content">
        <ul >
        <li>${element.first_name} ${element.last_name}</li></ul>
        
        </div>
        
    </div>`;
    })
    .join("");
  cards.innerHTML = info;
};

let navBtn = document.getElementById("click");
navBtn.addEventListener("click", () => {
  cards.innerHTML = `
  <h2>USERS DATA:</h2>
    <br />
  <h2 class='load'> Please wait...  Fetching and Loading the Users Data ...</h2>`;
  setTimeout(() => {
    API();
  }, 2500);
});