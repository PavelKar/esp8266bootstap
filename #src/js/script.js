// Changement du thème - Change current theme
// Adapté de - Adapted from : https://wdtz.org/bootswatch-theme-selector.html
var supports_storage = supports_html5_storage();
if (supports_storage) {
  var theme = localStorage.theme;
  if ( typeof theme != 'undefined' ) {
    console.log("Recharge le theme " + theme);
    set_theme(get_themeUrl(theme));
  }
}

// Un nouveau thème est sélectionné - New theme selected
jQuery(function($){
  $('body').on('click', '.change-style-menu-item', function() {
    var theme_name = $(this).attr('rel');
    console.log("Changement de theme " + theme_name);
    var theme_url = get_themeUrl(theme_name);
    console.log("URL theme : " + theme_url);
    set_theme(theme_url);
  });
});
// Recupere l'adresse du theme - Get theme URL
function get_themeUrl(theme_name){
  $('#labelTheme').html("Th&egrave;me : " + theme_name);
  var url_theme = "";
  if ( theme_name === "bootstrap" ) {
    url_theme = "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css";
  } else {
    url_theme = "https://maxcdn.bootstrapcdn.com/bootswatch/3.3.7/" + theme_name + "/bootstrap.min.css";
  }
  if (supports_storage) {
    // Enregistre le theme sélectionné en local - save into the local database the selected theme
    localStorage.theme = theme_name;
  }
  return url_theme;
}
// Applique le thème - Apply theme
function set_theme(theme_url) {
  $('link[title="main"]').attr('href', theme_url);
}
// Stockage local disponible ? - local storage available ?
function supports_html5_storage(){
  try {
    return 'localStorage' in window && window['localStorage'] !== null;
  } catch (e) {
    return false;
  }
}
