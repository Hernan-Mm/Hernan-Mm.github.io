/**
 * PORTFOLIO GAMER - SISTEMA PRINCIPAL
 * Archivo JavaScript con todas las funcionalidades del portfolio gaming
 * Incluye sistema de carrusel de videos completamente funcional
 */

// ===== INICIALIZACIÓN GAMER =====
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Inicializando sistema Gamer Portfolio...');
    initializeGameboyStart();
});

// ===== PANTALLA INICIAL GAMEBOY =====
function initializeGameboyStart() {
    const startButton = document.getElementById('startButton');
    const gameboyScreen = document.getElementById('gameboy-start');
    const portfolioContent = document.getElementById('portfolio-content');
    const menuOptions = document.querySelectorAll('.menu-option');

    // Efectos de sonido simples
    function playButtonSound() {
        try {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
            oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
            gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
            
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.1);
        } catch (e) {
            console.log('🔇 Audio no soportado en este navegador');
        }
    }

    function playStartSound() {
        try {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
            oscillator.frequency.setValueAtTime(523.25, audioContext.currentTime);
            oscillator.frequency.setValueAtTime(659.25, audioContext.currentTime + 0.1);
            oscillator.frequency.setValueAtTime(783.99, audioContext.currentTime + 0.2);
            
            gainNode.gain.setValueAtTime(0.2, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
            
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.5);
        } catch (e) {
            console.log('🔇 Audio no soportado en este navegador');
        }
    }

    // Efectos hover para opciones del menú
    menuOptions.forEach(option => {
        option.addEventListener('mouseenter', function() {
            playButtonSound();
            this.style.transform = 'translateX(10px)';
            this.style.textShadow = '2px 2px 0 #306230';
        });

        option.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
            this.style.textShadow = 'none';
        });

        option.addEventListener('click', function() {
            playButtonSound();
            this.style.background = '#306230';
            this.style.color = '#9bbc0f';
            
            setTimeout(() => {
                this.style.background = '';
                this.style.color = '';
            }, 200);
        });
    });

    // Botón START - Transición al portfolio
    if (startButton) {
        startButton.addEventListener('mouseenter', playButtonSound);
        
        startButton.addEventListener('click', function() {
            playStartSound();
            
            this.style.transform = 'scale(0.9)';
            this.style.boxShadow = 'inset 0 0 0 2px rgba(0,0,0,0.3)';
            
            setTimeout(() => {
                gameboyScreen.classList.add('fade-out');
                
                setTimeout(() => {
                    gameboyScreen.style.display = 'none';
                    portfolioContent.style.display = 'block';
                    
                    setTimeout(() => {
                        portfolioContent.classList.add('active');
                        initializePortfolioSystem();
                    }, 100);
                    
                }, 1000);
                
            }, 200);
        });

        startButton.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.boxShadow = '';
        });
    }

    // Efecto de batería (decorativo)
    let batteryLevel = 100;
    const batteryBar = document.querySelector('.battery-bar');
    const batteryText = document.querySelector('.battery-indicator span');
    
    function updateBattery() {
        if (batteryLevel > 0) {
            batteryLevel -= 0.1;
            if (batteryBar) {
                batteryBar.style.width = batteryLevel + '%';
            }
            if (batteryText) {
                batteryText.textContent = `BATT ${Math.round(batteryLevel)}%`;
            }
        }
    }
    
    setInterval(updateBattery, 30000);
}

// ===== INICIALIZAR SISTEMA DEL PORTFOLIO =====
function initializePortfolioSystem() {
    console.log('🎮 Inicializando sistema del portfolio...');
    initializeParticles();
    initializeSkillsAnimation();
    initializeTypewriter();
    initializeModal();
    initializeSoundEffects();
    initializeTheme();
    initializeNavigation();
    initializeSmoothScroll();
    initializeContactForm();
    initializeConsoleLoader();
    initializeStatsBars();
    handleImageErrors();
    
    // Inicializar sistema de videos y carruseles
    initializeVideoSystem();
    initializeVideoLoading();
    initializeCarousels();
}

// ===== LOADER DE CONSOLA =====
function initializeConsoleLoader() {
    const consoleLoader = document.querySelector('.console-loader');
    if (consoleLoader) {
        setTimeout(() => {
            consoleLoader.style.opacity = '0';
            setTimeout(() => consoleLoader.remove(), 1000);
        }, 2000);
    }
}

// ===== SISTEMA DE PARTÍCULAS =====
function initializeParticles() {
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            particles: {
                number: { value: 80, density: { enable: true, value_area: 800 } },
                color: { value: "#00ff88" },
                shape: { type: "circle" },
                opacity: { value: 0.5, random: true },
                size: { value: 3, random: true },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: "#00ff88",
                    opacity: 0.4,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 2,
                    direction: "none",
                    random: true,
                    straight: false,
                    out_mode: "out",
                    bounce: false
                }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: { enable: true, mode: "repulse" },
                    onclick: { enable: true, mode: "push" },
                    resize: true
                }
            }
        });
    }
}

// ===== ANIMACIÓN DE HABILIDADES =====
function initializeSkillsAnimation() {
    // Barras de habilidades en character card
    const statFills = document.querySelectorAll('.stat-fill');
    statFills.forEach(fill => {
        const level = fill.getAttribute('data-level');
        setTimeout(() => {
            fill.style.width = level + '%';
        }, 500);
    });

    // Barras de habilidades en skills section
    const skillItems = document.querySelectorAll('.skill-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillLevel = entry.target.querySelector('.level-fill');
                const level = entry.target.getAttribute('data-level');
                if (skillLevel && level) {
                    setTimeout(() => {
                        skillLevel.style.width = level + '%';
                    }, 200);
                }
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    skillItems.forEach(item => observer.observe(item));
}

// ===== EFECTO MÁQUINA DE ESCRIBIR =====
function initializeTypewriter() {
    const elements = document.querySelectorAll('.typewriter');
    elements.forEach(element => {
        const text = element.textContent;
        element.textContent = '';
        
        let i = 0;
        function typeWriter() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        }
        setTimeout(typeWriter, 1000);
    });
}

// ===== SONIDOS GAMER =====
function initializeSoundEffects() {
    const soundButton = document.getElementById('soundButton');
    let soundEnabled = false;

    if (soundButton) {
        soundButton.addEventListener('click', function() {
            soundEnabled = !soundEnabled;
            this.querySelector('i').className = soundEnabled ? 
                'fas fa-volume-up' : 'fas fa-volume-mute';
            
            if (soundEnabled) {
                console.log('🔊 Sonidos activados');
            } else {
                console.log('🔇 Sonidos desactivados');
            }
        });
    }

    // Efectos de hover en botones
    const buttons = document.querySelectorAll('.gaming-btn, .pixel-button');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            if (soundEnabled) {
                playHoverSound();
            }
        });
    });
}

function playHoverSound() {
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.setValueAtTime(400, audioContext.currentTime);
        gainNode.gain.setValueAtTime(0.05, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.1);
    } catch (e) {
        console.log('🔇 Audio no soportado');
    }
}

// ===== TEMA OSCURO/CLARO =====
function initializeTheme() {
    const themeButton = document.getElementById('themeButton');
    
    if (themeButton) {
        // Verificar preferencia del usuario
        const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
        const savedTheme = localStorage.getItem('theme');
        
        if (savedTheme === 'light' || (!savedTheme && !prefersDarkScheme.matches)) {
            setLightTheme();
        } else {
            setDarkTheme();
        }
        
        themeButton.addEventListener('click', toggleTheme);
    }
}

function setDarkTheme() {
    document.body.classList.remove('light-theme');
    document.body.classList.add('gamer-theme');
    const themeIcon = document.querySelector('#themeButton i');
    if (themeIcon) {
        themeIcon.className = 'fas fa-sun';
    }
    localStorage.setItem('theme', 'dark');
    console.log('🌙 Tema oscuro activado');
}

function setLightTheme() {
    document.body.classList.remove('gamer-theme');
    document.body.classList.add('light-theme');
    const themeIcon = document.querySelector('#themeButton i');
    if (themeIcon) {
        themeIcon.className = 'fas fa-moon';
    }
    localStorage.setItem('theme', 'light');
    console.log('☀️ Tema claro activado');
}

function toggleTheme() {
    const isGamerTheme = document.body.classList.contains('gamer-theme');
    if (isGamerTheme) {
        setLightTheme();
    } else {
        setDarkTheme();
    }
}

// ===== NAVEGACIÓN =====
function initializeNavigation() {
    const hamburger = document.querySelector('.gaming-hamburger');
    const navMenu = document.querySelector('.gaming-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            this.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }
    
    // Cerrar menú al hacer clic en enlace
    const navLinks = document.querySelectorAll('.gaming-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            const hamburger = document.querySelector('.gaming-hamburger');
            const navMenu = document.querySelector('.gaming-menu');
            if (hamburger && navMenu) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    });
}

// ===== SCROLL SUAVE =====
function initializeSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80;
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ===== FORMULARIO DE CONTACTO =====
function initializeContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            if (validateForm()) {
                simulateFormSubmission();
            }
        });
    }
}

function validateForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();
    
    if (!name || !email || !subject || !message) {
        showNotification('> Completa todos los campos requeridos', 'error');
        return false;
    }
    
    if (!isValidEmail(email)) {
        showNotification('> Email no válido', 'error');
        return false;
    }
    
    return true;
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function simulateFormSubmission() {
    const submitButton = document.querySelector('#contactForm button[type="submit"]');
    const originalText = submitButton.innerHTML;
    
    // Mostrar estado de carga
    submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> ENVIANDO...';
    submitButton.disabled = true;
    
    // Simular delay de red
    setTimeout(() => {
        showNotification('> Mensaje enviado con éxito! Te contactaré pronto.', 'success');
        document.getElementById('contactForm').reset();
        submitButton.innerHTML = originalText;
        submitButton.disabled = false;
    }, 2000);
}

// ===== SISTEMA DE CARRUSEL DE VIDEOS - COMPLETAMENTE FUNCIONAL =====

// Objeto para rastrear el estado de cada carrusel
const carouselState = {};

/**
 * Inicializa todos los carruseles de videos
 */
function initializeCarousels() {
    console.log('🎠 Inicializando carruseles de videos...');
    
    const carousels = document.querySelectorAll('.video-carousel');
    
    carousels.forEach((carousel, index) => {
        const carouselId = `carousel-${index}`;
        carouselState[carouselId] = {
            currentIndex: 0,
            totalItems: carousel.querySelectorAll('.video-item').length
        };
        
        // Inicializar indicadores si no existen
        initializeCarouselIndicators(carousel, carouselId);
        
        // Mostrar el primer video
        showVideo(carousel, 0, carouselId);
        
        console.log(`✅ Carrusel ${carouselId} inicializado con ${carouselState[carouselId].totalItems} videos`);
    });
}

/**
 * Inicializa los indicadores de carrusel
 */
function initializeCarouselIndicators(carousel, carouselId) {
    const totalItems = carouselState[carouselId].totalItems;
    
    // Crear contenedor de indicadores si no existe
    let indicatorsContainer = carousel.querySelector('.carousel-indicators');
    if (!indicatorsContainer) {
        indicatorsContainer = document.createElement('div');
        indicatorsContainer.className = 'carousel-indicators';
        carousel.appendChild(indicatorsContainer);
    }
    
    // Limpiar indicadores existentes
    indicatorsContainer.innerHTML = '';
    
    // Crear indicadores
    for (let i = 0; i < totalItems; i++) {
        const indicator = document.createElement('div');
        indicator.className = `carousel-indicator ${i === 0 ? 'active' : ''}`;
        indicator.setAttribute('data-index', i);
        indicator.addEventListener('click', () => {
            showVideo(carousel, i, carouselId);
        });
        indicatorsContainer.appendChild(indicator);
    }
}

/**
 * Muestra un video específico en el carrusel
 */
function showVideo(carousel, index, carouselId) {
    const videoItems = carousel.querySelectorAll('.video-item');
    const indicators = carousel.querySelectorAll('.carousel-indicator');
    const totalItems = videoItems.length;
    
    // Validar índice
    if (index < 0) index = totalItems - 1;
    if (index >= totalItems) index = 0;
    
    // Ocultar todos los videos y pausarlos
    videoItems.forEach((item, i) => {
        item.classList.remove('active');
        const video = item.querySelector('.project-video');
        if (video) {
            video.pause();
            resetVideoOverlay(video);
        }
    });
    
    // Mostrar video actual
    videoItems[index].classList.add('active');
    
    // Actualizar indicadores
    indicators.forEach((indicator, i) => {
        indicator.classList.toggle('active', i === index);
    });
    
    // Actualizar estado
    carouselState[carouselId].currentIndex = index;
    
    console.log(`🔄 Carrusel ${carouselId}: Mostrando video ${index + 1} de ${totalItems}`);
}

/**
 * Cambia al siguiente o anterior video en el carrusel
 */
function changeVideo(button, direction) {
    const carousel = button.closest('.video-carousel');
    const carouselId = Array.from(document.querySelectorAll('.video-carousel')).indexOf(carousel);
    const state = carouselState[`carousel-${carouselId}`];
    
    if (!state) {
        console.error('❌ Estado del carrusel no encontrado');
        return;
    }
    
    const newIndex = state.currentIndex + direction;
    showVideo(carousel, newIndex, `carousel-${carouselId}`);
    
    // Reproducir sonido
    playButtonSound();
}

/**
 * Sistema de videos mejorado
 */
function initializeVideoSystem() {
    console.log('🎥 Inicializando sistema de videos...');
    
    // Configurar eventos para botones de play
    const playButtons = document.querySelectorAll('.play-button');
    playButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            const videoItem = this.closest('.video-item');
            const video = videoItem.querySelector('.project-video');
            if (video) {
                video.play();
                this.style.display = 'none';
                const overlay = this.closest('.video-overlay');
                if (overlay) {
                    overlay.style.opacity = '0';
                    setTimeout(() => {
                        overlay.style.display = 'none';
                    }, 300);
                }
            }
        });
    });
    
    // Pausar video cuando se cierra el modal o se cambia de pestaña
    document.addEventListener('visibilitychange', function() {
        if (document.hidden) {
            pauseAllVideos();
        }
    });
    
    // Reiniciar overlay cuando el video termina
    const videos = document.querySelectorAll('.project-video');
    videos.forEach(video => {
        video.addEventListener('ended', function() {
            resetVideoOverlay(this);
        });
        
        video.addEventListener('pause', function() {
            resetVideoOverlay(this);
        });
    });
    
    console.log('✅ Sistema de videos inicializado');
}

/**
 * Resetea el overlay de un video
 */
function resetVideoOverlay(video) {
    const videoItem = video.closest('.video-item');
    const overlay = videoItem.querySelector('.video-overlay');
    const playButton = overlay.querySelector('.play-button');
    
    if (overlay) {
        overlay.style.display = 'flex';
        overlay.style.opacity = '1';
    }
    
    if (playButton) {
        playButton.style.display = 'flex';
    }
}

/**
 * Pausa todos los videos
 */
function pauseAllVideos() {
    const videos = document.querySelectorAll('.project-video');
    videos.forEach(video => {
        video.pause();
        resetVideoOverlay(video);
    });
}

/**
 * Carga videos de manera eficiente
 */
function initializeVideoLoading() {
    const videos = document.querySelectorAll('.project-video');
    
    videos.forEach(video => {
        // Precargar metadata para mejor UX
        video.addEventListener('loadedmetadata', function() {
            console.log(`✅ Video cargado: ${this.src}`);
        });
        
        video.addEventListener('error', function() {
            console.error(`❌ Error cargando video: ${this.src}`);
            this.style.display = 'none';
            const fallback = document.createElement('div');
            fallback.className = 'video-fallback';
            fallback.innerHTML = `
                <div class="fallback-content">
                    <i class="fas fa-exclamation-triangle"></i>
                    <p>Video no disponible</p>
                </div>
            `;
            this.parentNode.appendChild(fallback);
        });
    });
}

// ===== VISOR DE PDF MEJORADO =====
let currentZoom = 1; // Zoom inicial al 100% - CORREGIDO

/**
 * Muestra el modal del CV con el PDF
 */
function showCVModal() {
    const modal = document.getElementById('cvModal');
    if (modal) {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        
        // CORRECCIÓN: Establecer zoom inicial al 100% y NO llamar a fitToWidth automáticamente
        currentZoom = 1; // 100% de zoom inicial
        applyZoom();
        updateZoomDisplay();
        
        console.log('📄 Abriendo visor de CV con zoom al 80%...');
    }
}

/**
 * Cierra el modal del CV
 */
function closeCVModal() {
    const modal = document.getElementById('cvModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
        console.log('📄 Cerrando visor de CV...');
    }
}

// Manejo de carga del PDF
function onPDFLoad() {
    updateStatus('CV_LOADED | READY');
    console.log('✅ PDF cargado correctamente');
    
    // Ocultar mensaje de error si existe
    const pdfError = document.getElementById('pdfError');
    if (pdfError) {
        pdfError.style.display = 'none';
    }
}

function onPDFError() {
    updateStatus('CV_LOAD_ERROR');
    console.error('❌ Error al cargar el PDF');
    const pdfError = document.getElementById('pdfError');
    if (pdfError) {
        pdfError.style.display = 'flex';
    }
}

function updateStatus(status) {
    const statusText = document.getElementById('statusText');
    if (statusText) {
        statusText.textContent = status;
    }
}

// Controles de zoom
function zoomInPDF() {
    currentZoom = Math.min(currentZoom + 0.1, 3.0);
    applyZoom();
    playButtonSound();
}

function zoomOutPDF() {
    currentZoom = Math.max(currentZoom - 0.1, 0.3);
    applyZoom();
    playButtonSound();
}

/**
 * Ajusta el zoom del PDF al ancho del contenedor automáticamente
 * (SOLO cuando el usuario hace clic en el botón "Ajustar al ancho")
 */
function fitToWidth() {
    const iframe = document.getElementById('pdfFrame');
    const container = document.querySelector('.pdf-container');
    
    if (iframe && container) {
        const containerWidth = container.clientWidth - 40; // Margen para bordes
        const containerHeight = container.clientHeight - 40;
        
        // Para PDFs, ajustamos la escala basada en el ancho del contenedor
        const scale = Math.min(containerWidth / 800, containerHeight / 1100);
        currentZoom = Math.max(Math.min(scale, 1.5), 0.5); // Limitar zoom entre 50% y 150%
        
        applyZoom();
        playButtonSound();
        console.log('🔍 Ajustando PDF al ancho - Zoom:', Math.round(currentZoom * 100) + '%');
    }
}

function fitToPage() {
    // Ajustar a toda la página visible
    const iframe = document.getElementById('pdfFrame');
    const container = document.querySelector('.pdf-container');
    
    if (iframe && container) {
        const containerWidth = container.clientWidth;
        const containerHeight = container.clientHeight;
        const pdfWidth = 800;
        const pdfHeight = 1100;
        
        const widthScale = containerWidth / pdfWidth;
        const heightScale = containerHeight / pdfHeight;
        
        // Usar la escala más pequeña para que quepa completamente
        currentZoom = Math.min(widthScale, heightScale);
        currentZoom = Math.max(Math.min(currentZoom, 1.5), 0.5); // Limitar zoom
        applyZoom();
        playButtonSound();
        console.log('🔍 Ajustando PDF a la página - Zoom:', Math.round(currentZoom * 100) + '%');
    }
}

function applyZoom() {
    const iframe = document.getElementById('pdfFrame');
    if (iframe) {
        iframe.style.transform = `scale(${currentZoom})`;
        iframe.style.transformOrigin = 'center top';
        updateZoomDisplay();
    }
}

function updateZoomDisplay() {
    const zoomLevel = document.getElementById('zoomLevel');
    if (zoomLevel) {
        zoomLevel.textContent = `${Math.round(currentZoom * 100)}%`;
    }
}

// Funciones de utilidad
function downloadCV() {
    playButtonSound();
    const link = document.createElement('a');
    link.href = 'CV/CvHernan25Spr.pdf';
    link.download = 'CV_Hernan_Moreyra.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    console.log('📥 Descargando CV...');
}

function printCV() {
    playButtonSound();
    const iframe = document.getElementById('pdfFrame');
    if (iframe && iframe.contentWindow) {
        iframe.contentWindow.focus();
        iframe.contentWindow.print();
    } else {
        // Fallback: abrir el PDF en una nueva ventana para imprimir
        window.open('CV/CvHernan25Spr.pdf', '_blank');
    }
    console.log('🖨️ Imprimiendo CV...');
}

// ===== MODAL CV =====
function initializeModal() {
    const closeBtn = document.querySelector('.close');
    
    if (closeBtn) {
        closeBtn.addEventListener('click', closeCVModal);
    }
    
    // Cerrar modal al hacer clic fuera
    window.addEventListener('click', function(e) {
        const modal = document.getElementById('cvModal');
        if (e.target === modal) {
            closeCVModal();
        }
    });
    
    // Cerrar con ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeCVModal();
        }
    });
}

// ===== NOTIFICACIONES GAMER =====
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `gaming-notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${getNotificationIcon(type)}"></i>
            <span>${message}</span>
        </div>
        <button class="notification-close">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    // Estilos para la notificación gaming
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: var(--bg-terminal);
        color: var(--neon-green);
        padding: 1rem 1.5rem;
        border: 2px solid var(--neon-green);
        box-shadow: var(--shadow-glow);
        z-index: 10000;
        max-width: 400px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
        transform: translateX(400px);
        opacity: 0;
        transition: all 0.3s ease;
        font-family: var(--font-primary);
    `;
    
    document.body.appendChild(notification);
    
    // Animación de entrada
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
        notification.style.opacity = '1';
    }, 100);
    
    // Botón de cerrar
    const closeButton = notification.querySelector('.notification-close');
    closeButton.addEventListener('click', function() {
        closeNotification(notification);
    });
    
    // Cerrar automáticamente
    setTimeout(() => {
        if (notification.parentNode) {
            closeNotification(notification);
        }
    }, 5000);
}

function getNotificationIcon(type) {
    const icons = {
        success: 'check-circle',
        error: 'exclamation-circle',
        info: 'info-circle'
    };
    return icons[type] || 'info-circle';
}

function closeNotification(notification) {
    notification.style.transform = 'translateX(400px)';
    notification.style.opacity = '0';
    
    setTimeout(() => {
        if (notification.parentNode) {
            notification.parentNode.removeChild(notification);
        }
    }, 300);
}

// ===== AÑO ACTUAL EN FOOTER =====
document.getElementById('currentYear').textContent = new Date().getFullYear();

// ===== EFECTOS DE HOVER MEJORADOS =====
document.addEventListener('DOMContentLoaded', function() {
    // Efecto en tarjetas
    const cards = document.querySelectorAll('.pixel-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Efecto en botones de proyectos
    const projectLinks = document.querySelectorAll('.project-link');
    projectLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(5px)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
        });
    });
});

// ===== INICIALIZAR STATS BARS CUANDO SE CARGA EL PORTFOLIO =====
function initializeStatsBars() {
    const statFills = document.querySelectorAll('.stat-fill');
    statFills.forEach(fill => {
        const level = fill.getAttribute('data-level');
        setTimeout(() => {
            fill.style.width = level + '%';
        }, 1000);
    });
}

// ===== MANEJO DE IMÁGENES CON FALLBACK =====
function handleImageErrors() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('error', function() {
            this.style.display = 'none';
            const placeholder = this.nextElementSibling;
            if (placeholder && placeholder.classList.contains('pixel-placeholder')) {
                placeholder.style.display = 'flex';
            }
        });
    });
}

// Función para reproducir sonido de botones
function playButtonSound() {
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
        gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.1);
    } catch (e) {
        console.log('🔇 Audio no soportado');
    }
}

// ===== INICIALIZACIÓN COMPLETA DEL SISTEMA =====
console.log('✅ Sistema Gamer Portfolio cargado correctamente');