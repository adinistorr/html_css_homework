function collapseMenu() {
    var menu = document.getElementById("myMenu");
    if (menu.className === "menu") {
      menu.className += " responsive";
    } else {
      menu.className = "menu";
    }
  }