// Aquí puedes añadir funciones si necesitas interactividad
console.log("Página de CV cargada");

// Función para abrir el modal
function openModal() {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("modalImage");
    var profileImg = document.querySelector(".profile-image");
  
    // Muestra el modal y establece la imagen en tamaño grande
    modal.style.display = "flex";
    modalImg.src = profileImg.src; // Asigna la misma imagen de perfil al modal
  }
  
  // Función para cerrar el modal
  function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none"; // Oculta el modal
  }