// Función para mostrar las opciones al hacer clic en el botón "Start" y ocultar el botón "Start"
function showOptions() {
    var startButton = document.getElementById('start-button');
    startButton.style.display = 'none'; // Oculta el botón "Start"

    var options = document.getElementById('options');
    options.classList.remove('hidden'); // Elimina la clase 'hidden' para mostrar las opciones
}

// Función para mostrar la sección correspondiente al hacer clic en los botones de opciones
function showSection(sectionId) {
    var modal = document.getElementById('myModal');
    var sobreMiContent = document.getElementById('sobre-mi-content');
    var habilidadesContent = document.getElementById('habilidades-content');
    var proyectosContent = document.getElementById('proyectos-content');
    var contactoContent = document.getElementById('contacto-content');
    var profileContainer = document.querySelector('.profile-container');

    // Ocultar todos los contenidos
    sobreMiContent.classList.add('hidden');
    habilidadesContent.classList.add('hidden');
    proyectosContent.classList.add('hidden');
    contactoContent.classList.add('hidden');
    profileContainer.style.display = 'none';

    // Mostrar solo el contenido correspondiente al botón clickeado
    if (sectionId === 'sobre-mi') {
        modal.style.display = 'flex'; // Cambia a 'flex' para cubrir toda la pantalla
        sobreMiContent.classList.remove('hidden');
        profileContainer.style.display = 'block';
    } else if (sectionId === 'habilidades') {
        modal.style.display = 'flex'; // Cambia a 'flex' para cubrir toda la pantalla
        habilidadesContent.classList.remove('hidden');
    } else if (sectionId === 'proyectos') {
        modal.style.display = 'flex'; // Cambia a 'flex' para cubrir toda la pantalla
        proyectosContent.classList.remove('hidden');
    } else if (sectionId === 'contacto') {
        modal.style.display = 'flex'; // Cambia a 'flex' para cubrir toda la pantalla
        contactoContent.classList.remove('hidden');
    }

    // Ocultar otros contenidos cuando se muestra uno nuevo
    var otherSections = document.querySelectorAll('.modal-content > div:not(#' + sectionId + '-content)');
    otherSections.forEach(section => {
        section.classList.add('hidden');
    });
}

// Función para cerrar el modal al hacer clic en el botón de cierre (X)
function closeModal() {
    var modal = document.getElementById('myModal');
    modal.style.display = 'none'; // Oculta el modal al hacer clic en el botón de cierre

    // Ocultar todos los contenidos cuando se cierra el modal
    var contents = document.querySelectorAll('.modal-content > div');
    contents.forEach(content => {
        content.classList.add('hidden');
    });
}

// Función para expandir el video al hacer clic y reproducirlo
function expandVideo(video) {
    if (video.paused) {
        video.play(); // Comienza a reproducir el video si está pausado
    } else {
        video.pause(); // Pausa el video si ya está reproduciéndose
    }

    if (video.requestFullscreen) {
        if (!document.fullscreenElement) {
            video.requestFullscreen();
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            }
        }
    }
}
