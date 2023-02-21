//fetch chain options
window.addEventListener('load', () => {
    fetch('https://oc.coldyvalidator.net/health')
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        console.log(data);
        console.log(data.chains);
        //iterate through array and out put options
        for (const elem of data.chains) {
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

//handle option change
const channelBtn = document.querySelector('.channel-submit');
let selectedOption; 

//on change, assign selected option
const selectMenu = document.getElementById('channel-select');
selectMenu.addEventListener("change", function() {
    selectedOption = selectMenu.options[selectMenu.selectedIndex];
  });

//on "clear channel" click, assign selected option
channelBtn.addEventListener('click', function() {
 fetch('https://oc.coldyvalidator.net/clear?chain='+selectedOption.textContent)
 .then((response) => {
    console.log(response);
    return response.json();
 })
 //output data.
 .then((data) => {
  console.log(data);
  console.log(data.info);
  const infoResponse = document.createElement("p");
  const infoText = document.createTextNode(`${data.info}`)
  infoResponse.appendChild(infoText);
  const infoDiv = document.getElementById('info-div');
  infoDiv.appendChild(infoResponse);

  const resultResponse = document.createElement("p");
  const resultText = document.createTextNode(`${data.result}`);
  resultResponse.appendChild(resultText);
  infoDiv.appendChild(resultResponse);
 })
})
