var increment = 0;

function GenRoutes() {
  var id = increment; increment++;

  document.querySelector('body').innerHTML += `
    <div id="results-${id}" class="border">
      <h1>Results</h1>

      <div class="loader" />
    </div>`;
  
  setTimeout( () => {

    document.getElementById(`results-${id}`).innerHTML = `
      <h1>Results</h1>
      
      <h1>Placeholder Results</h1>`;
  }, 7500);
}