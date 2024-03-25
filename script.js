// Función para mostrar las opciones al hacer clic en el botón "Start"
function showOptions() {
    var options = document.getElementById('options');
    options.classList.remove('hidden'); // Elimina la clase 'hidden' para mostrar las opciones
}

// Función para mostrar la sección correspondiente al hacer clic en los botones de opciones
function showSection(sectionId) {
    var modal = document.getElementById('myModal');
    var sobreMiContent = document.getElementById('sobre-mi-content');
    var habilidadesContent = document.getElementById('habilidades-content');
    var proyectosContent = document.getElementById('proyectos-content'); // Nuevo panel
    var contactoContent = document.getElementById('contacto-content'); // Nuevo panel
    var profileContainer = document.querySelector('.profile-container');

    if (sectionId === 'sobre-mi') {
        modal.style.display = 'block'; // Muestra el modal
        sobreMiContent.classList.remove('hidden'); // Muestra el contenido de "Sobre Mí"
        habilidadesContent.classList.add('hidden'); // Oculta el contenido de "Habilidades"
        proyectosContent.classList.add('hidden'); // Oculta el contenido de "Proyectos" (nuevo)
        contactoContent.classList.add('hidden'); // Oculta el contenido de "Contacto" (nuevo)
        profileContainer.style.display = 'block'; // Muestra la foto de perfil
    } else if (sectionId === 'habilidades') {
        modal.style.display = 'block'; // Muestra el modal
        habilidadesContent.classList.remove('hidden'); // Muestra el contenido de "Habilidades"
        sobreMiContent.classList.add('hidden'); // Oculta el contenido de "Sobre Mí"
        proyectosContent.classList.add('hidden'); // Oculta el contenido de "Proyectos" (nuevo)
        contactoContent.classList.add('hidden'); // Oculta el contenido de "Contacto" (nuevo)
        profileContainer.style.display = 'none'; // Oculta la foto de perfil
    } else if (sectionId === 'proyectos') { // Nuevo panel
        modal.style.display = 'block'; // Muestra el modal
        proyectosContent.classList.remove('hidden'); // Muestra el contenido de "Proyectos" (nuevo)
        sobreMiContent.classList.add('hidden'); // Oculta el contenido de "Sobre Mí"
        habilidadesContent.classList.add('hidden'); // Oculta el contenido de "Habilidades"
        contactoContent.classList.add('hidden'); // Oculta el contenido de "Contacto" (nuevo)
        profileContainer.style.display = 'none'; // Oculta la foto de perfil
    } else if (sectionId === 'contacto') { // Nuevo panel
        modal.style.display = 'block'; // Muestra el modal
        contactoContent.classList.remove('hidden'); // Muestra el contenido de "Contacto" (nuevo)
        sobreMiContent.classList.add('hidden'); // Oculta el contenido de "Sobre Mí"
        habilidadesContent.classList.add('hidden'); // Oculta el contenido de "Habilidades"
        proyectosContent.classList.add('hidden'); // Oculta el contenido de "Proyectos" (nuevo)
        profileContainer.style.display = 'none'; // Oculta la foto de perfil
    }
}

// Función para cerrar el modal al hacer clic en el botón de cierre (X)
function closeModal() {
    var modal = document.getElementById('myModal');
    modal.style.display = 'none'; // Oculta el modal al hacer clic en el botón de cierre
}


