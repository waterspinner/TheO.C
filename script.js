//fetch chain options
window.addEventListener('load', () => {
    fetch('https://rly.osl.zone/chains')
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        console.log(data);
        for (const elem of data) {
            const chainOption = document.createElement("option")
            const chainText = document.createTextNode(`${elem}`)
            chainOption.appendChild(chainText);
            const select = document.getElementById('channel-select');
            select.appendChild(chainOption);
        }
      })
      .catch((error) => {
        console.error(error);
      })
      

});

const channelBtn = document.querySelector('.channel-submit');
console.log(channelBtn);
let selectedOption; 

const selectMenu = document.getElementById('channel-select');
selectMenu.addEventListener("change", function() {
    selectedOption = selectMenu.options[selectMenu.selectedIndex];
  });


channelBtn.addEventListener('click', function() {
 fetch('https://rly.osl.zone/clear?chain='+selectedOption.textContent)
 .then((response) => {
    console.log(response);
 })
})
