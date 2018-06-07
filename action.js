function pokemon() {
  var content = "";
  for (var i = 0; i < pokemones.length; i++) {
      content += "<div class='columna pokedeck shadow p-3 mb-5 bg-white rounded'>";
      content += "<div class = 'row justify-content-between'>";
      content += "<div class = 'col-12 foto'>";
      content += "<img src = '"+ pokemones[i].ThumbnailImage +"'>"
      content += "</div>";//Se cierra el div del col
      content += "<div class = 'col-12'>";
      content += "<h3 class = 'nombre'>" + pokemones[i].name + "</h3>";
      content += "</div>";//Se cierra el div del col
      content += "<div class = 'col-2'>";
      content += "<h1 class='numero'>" + pokemones[i].id + "</h1>";
      content += "</div>";//Se cierra el div del col
      content += "<div class = 'col-12'>";
      content += "<h3 class = 'nombre'>" + "Type: " + pokemones[i].type + "</h3>";
      content += "</div>";//Se cierra el div del col
      content += "</div>";//Se cierra el div del row
      content += "</div>";//Se cierrael div de col general
  }
  document.getElementById('result').innerHTML = content;

}

function buscar(query) {
  var content = "";
  query = query.toLowerCase();
  if (query == null) {
    for (var i = 0; i < pokemones.length; i++) {
        content += "<div class='columna pokedeck shadow p-3 mb-5 bg-white rounded'>";
        content += "<div class = 'row justify-content-between'>";
        content += "<div class = 'col-12 foto'>";
        content += "<img src = '"+ pokemones[i].ThumbnailImage +"'>"
        content += "</div>";//Se cierra el div del col
        content += "<div class = 'col-12'>";
        content += "<h3 class = 'nombre'>" + pokemones[i].name + "</h3>";
        content += "</div>";//Se cierra el div del col
        content += "<div class = 'col-2'>";
        content += "<h1 class='numero'>" + pokemones[i].id + "</h1>";
        content += "</div>";//Se cierra el div del col
        content += "<div class = 'col-12'>";
        content += "<h3 class = 'nombre'>" + "Type: " + pokemones[i].type + "</h3>";
        content += "</div>";//Se cierra el div del col
        content += "</div>";//Se cierra el div del row
        content += "</div>";//Se cierrael div de col general
    }
    document.getElementById('result').innerHTML = content;
  } else {
    for (var i = 0; i < pokemones.length; i++) {
      if (pokemones[i].name.toLowerCase().search(query) >= 0) {
        content += "<div class='columna pokedeck shadow p-3 mb-5 bg-white rounded'>";
        content += "<div class = 'row justify-content-between'>";
        content += "<div class = 'col-12 foto'>";
        content += "<img src = '"+ pokemones[i].ThumbnailImage +"'>"
        content += "</div>";//Se cierra el div del col
        content += "<div class = 'col-12'>";
        content += "<h3 class = 'nombre'>" + pokemones[i].name + "</h3>";
        content += "</div>";//Se cierra el div del col
        content += "<div class = 'col-2'>";
        content += "<h1 class='numero'>" + pokemones[i].id + "</h1>";
        content += "</div>";//Se cierra el div del col
        content += "<div class = 'col-12'>";
        content += "<h3 class = 'nombre'>" + "Type: " + pokemones[i].type + "</h3>";
        content += "</div>";//Se cierra el div del col
        content += "</div>";//Se cierra el div del row
        content += "</div>";//Se cierrael div de col general
      }
    }
    document.getElementById('result').innerHTML = content;
  }
}

function buscarPokemon() {
  var query = document.getElementById('laBusqueda').value;
  buscar(query);
}
