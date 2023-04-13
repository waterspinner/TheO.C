//fetch chain options
window.addEventListener('load', () => {
    fetch('https://rly.osl.zone/health')
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        console.log(data);
        console.log(data.chains);
        //iterate through array and output options
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
  channelBtn.disabled = true;
  const fetching = document.querySelector('.fetching')
  fetching.innerHTML = 'Fetching...'
 fetch('https://rly.osl.zone/clear?chain='+selectedOption.textContent)
 .then((response) => {
    console.log(response);
    return response.json();
 })
 //output data.
 .then((data) => {
  console.log(data);
  const infoElement = document.querySelector(".info");
  infoElement.innerHTML = "Info: " + `${data.info.charAt(0).toUpperCase() + data.info.slice(1).replace(/_/g, ' ')}`;
  
  const responseElement = document.querySelector(".result")
  responseElement.innerHTML = "Result: " + `${data.result.charAt(0).toUpperCase() + data.result.slice(1)}`;
  
  //if looping and creating elements, need to clear all elements before looping
  //possible loop through array to output tx-hash
  if(data.hasOwnProperty('tx_hash') == true){
  const txHashElementOne = document.querySelector(".tx-hash-one");
  txHashElementOne.innerHTML = "Tx-Hash: " + `${data.tx_hash}`;
  }else{
    const txHashElementOne = document.querySelector(".tx-hash-one");
  txHashElementOne.innerHTML = "Tx-Hash:";
  }
  //const txHashElementTwo = document.querySelector(".tx-hash-two");
  //txHashElementTwo.innerHTML = "Tx-Hash: " + `${data.tx_hash[1]}`;
 })
 .finally(() => {channelBtn.disabled = false
                  fetching.innerHTML = ''});
})
