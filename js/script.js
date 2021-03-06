const characterUrl = "https://rickandmortyapi.com/api/character/";

fetch(characterUrl)
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    handleJson(json);
  })
  .catch(function() {
    document.location.href = "error.html";
  });

function handleJson(json) {
  const results = json.results;
  console.dir(results);

  const resultsContainer = document.querySelector(".row.results");

  let html = "";

  results.forEach(function(result) {
    let typeValue = "Unknown";

    if (result.type) {
      typeValue = result.type;
    }

    html += `<div class="col-sm-6 col-md-4 col-lg-3">                
                <div class="card"> 
                    <img class="image" src="${result.image}" alt="${result.name}">
                        <div class="details">
                            <h4 class="name">${result.name}</h4>
                            <p>Type: ${result.type}${typeValue}</p>    
                            <p>Episode count: ${result.episode.length}</p>                                  
                            <a class="btn btn-primary" href="details.html?id=${result.id}">Details</a>
                        </div>
                    </div>
                </div>`;
  });

  resultsContainer.innerHTML = html;
}
