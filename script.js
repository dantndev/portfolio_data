
/*function toggleSidebar() {
    var sidebar = document.getElementById("sidebar");
    sidebar.style.display = sidebar.style.display === "none" ? "block" : "none";
  } */

// BARRA 2
  function toggleSidebar() {
    var sidebar = document.getElementById("sidebar");
    var menuBtn = document.querySelector(".ham-nav-menu");
    var closeBtn = document.querySelector(".close-nav-menu");

    // Cambiar la visibilidad de la barra lateral al hacer clic en el botón del menú
    if (menuBtn) {
        menuBtn.addEventListener("click", function() {
            sidebar.style.display = "block";
        });
    }

    // Ocultar la barra lateral al hacer clic en el botón de cerrar
    if (closeBtn) {
        closeBtn.addEventListener("click", function() {
            sidebar.style.display = "none";
        });
    }

    // Event listener para clics en cualquier parte de la página
    document.addEventListener("click", function(event) {
        // Verificar si el clic no se hizo en la barra lateral ni en ninguno de los botones
        if (!sidebar.contains(event.target) && event.target !== menuBtn && event.target !== closeBtn) {
            sidebar.style.display = "none";
        }
    });
}


