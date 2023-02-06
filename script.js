//fetch chain options
window.addEventListener('load', () => {
    fetch('https://rly.osl.zone/chains', {
        mode: 'cors'
      })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      })
      

});