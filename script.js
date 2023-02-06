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