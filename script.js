/**
 * ============================================
 * PORTFOLIO GAMER - SCRIPT UPDATED
 * Fecha: 2024
 * Cambios realizados:
 * 1. Mejora de reproducción de videos en móvil
 * 2. Sistema de PDF.js para visualización de CV en móviles
 * 3. Optimización de interacciones táctiles
 * 4. Mejoras de accesibilidad
 * ============================================
 */

/** 
 * 🎮 CHANGELOG DETALLADO:
 * 
 * FIX 1: Legibilidad sección "SOBRE MÍ"
 *   - Añadida clase .gamer-accent para textos destacados
 *   - Mejorado contraste de texto en .console-text
 *   - Añadidos efectos de sombra para mejor legibilidad
 * 
 * FIX 2: Reproducción de videos en móvil
 *   - Añadidos atributos playsinline y preload="metadata" a videos
 *   - Implementados eventos touchstart para reproducción táctil
 *   - Sistema de fallback para cuando los videos no se reproducen
 *   - Botones de play más grandes en móvil
 * 
 * FIX 3: Visualización de CV en móvil
 *   - Implementado PDF.js como visor principal en móviles
 *   - Sistema de detección automática de dispositivo
 *   - Fallback a iframe tradicional si PDF.js falla
 *   - Opción de abrir en nueva pestaña si todo falla
 *   - Evita descarga forzada en dispositivos móviles
 * 
 * MEJORAS ADICIONALES:
 *   - Mejor manejo de errores en carga de videos
 *   - Optimización de z-index para overlays en móvil
 *   - Mejoras de accesibilidad (aria-label, roles)
 *   - Sistema de notificaciones mejorado
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
    
    // CHANGES: Inicializar sistema de videos mejorado para móvil
    initializeVideoSystem();
    initializeVideoLoading();
    initializeCarousels();
    
    // CHANGES: Inicializar sistema de PDF para móviles
    initializePDFSystem();
    
    // CHANGES: Configurar botón VER CV para móviles
    setupCVButtonForMobile();
    
    console.log('✅ Sistema del portfolio inicializado correctamente');
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

// ===== SISTEMA DE CARRUSEL DE VIDEOS - MEJORADO PARA MÓVIL =====

// Objeto para rastrear el estado de cada carrusel
const carouselState = {};

/**
 * CHANGES: Inicializa todos los carruseles de videos con mejoras para móvil
 */
function initializeCarousels() {
    console.log('🎠 Inicializando carruseles de videos con mejoras para móvil...');
    
    const carousels = document.querySelectorAll('.video-carousel');
    
    carousels.forEach((carousel, index) => {
        const carouselId = `carousel-${index}`;
        carouselState[carouselId] = {
            currentIndex: 0,
            totalItems: carousel.querySelectorAll('.video-item').length,
            isPlaying: false
        };
        
        // Inicializar indicadores si no existen
        initializeCarouselIndicators(carousel, carouselId);
        
        // Mostrar el primer video
        showVideo(carousel, 0, carouselId);
        
        console.log(`✅ Carrusel ${carouselId} inicializado con ${carouselState[carouselId].totalItems} videos`);
    });
}

/**
 * CHANGES: Inicializa los indicadores de carrusel con mejoras táctiles
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
        indicator.setAttribute('role', 'button');
        indicator.setAttribute('tabindex', '0');
        indicator.setAttribute('aria-label', `Ver video ${i + 1} de ${totalItems}`);
        
        // CHANGES: Añadir eventos táctiles y de clic
        indicator.addEventListener('click', () => {
            showVideo(carousel, i, carouselId);
            playButtonSound();
        });
        
        indicator.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                showVideo(carousel, i, carouselId);
                playButtonSound();
            }
        });
        
        indicatorsContainer.appendChild(indicator);
    }
}

/**
 * CHANGES: Muestra un video específico en el carrusel con mejoras para móvil
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
            // CHANGES: Solo pausar si no está en reproducción por interacción táctil
            if (!carouselState[carouselId]?.isPlaying || i !== index) {
                video.pause();
                resetVideoOverlay(video);
            }
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
 * CHANGES: Cambia al siguiente o anterior video en el carrusel
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
 * CHANGES: Sistema de videos mejorado para móviles
 */
function initializeVideoSystem() {
    console.log('🎥 Inicializando sistema de videos con soporte táctil...');
    
    // Configurar eventos para botones de play
    const playButtons = document.querySelectorAll('.play-button');
    playButtons.forEach(button => {
        // CHANGES: Añadir eventos táctiles además de clic
        button.addEventListener('click', handleVideoPlay);
        button.addEventListener('touchstart', handleVideoPlay, { passive: false });
        
        // CHANGES: Mejorar accesibilidad
        button.setAttribute('role', 'button');
        button.setAttribute('tabindex', '0');
        button.setAttribute('aria-label', 'Reproducir video');
        
        // CHANGES: Añadir evento de teclado para accesibilidad
        button.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                handleVideoPlay(e);
            }
        });
    });
    
    // CHANGES: Añadir eventos táctiles a los overlays completos
    const videoOverlays = document.querySelectorAll('.video-overlay');
    videoOverlays.forEach(overlay => {
        overlay.addEventListener('touchstart', function(e) {
            e.preventDefault();
            const button = this.querySelector('.play-button');
            if (button) {
                handleVideoPlay.call(button, e);
            }
        }, { passive: false });
    });
    
    // Pausar video cuando se cierra el modal o se cambia de pestaña
    document.addEventListener('visibilitychange', function() {
        if (document.hidden) {
            pauseAllVideos();
        }
    });
    
    // CHANGES: Manejar errores de reproducción
    const videos = document.querySelectorAll('.project-video');
    videos.forEach(video => {
        video.addEventListener('ended', function() {
            resetVideoOverlay(this);
        });
        
        video.addEventListener('pause', function() {
            resetVideoOverlay(this);
        });
        
        // CHANGES: Manejar errores de reproducción
        video.addEventListener('error', function(e) {
            console.error('❌ Error reproduciendo video:', e);
            showVideoFallback(this);
        });
    });
    
    console.log('✅ Sistema de videos inicializado con soporte táctil');
}

/**
 * CHANGES: Maneja la reproducción de video con mejoras para móvil
 */
function handleVideoPlay(e) {
    if (e.type === 'touchstart') {
        e.preventDefault();
        e.stopPropagation();
    } else {
        e.stopPropagation();
    }
    
    const videoItem = this.closest('.video-item');
    if (!videoItem) return;
    
    const video = videoItem.querySelector('.project-video');
    if (!video) return;
    
    // CHANGES: Actualizar estado de reproducción en el carrusel
    const carousel = videoItem.closest('.video-carousel');
    if (carousel) {
        const carouselId = Array.from(document.querySelectorAll('.video-carousel')).indexOf(carousel);
        if (carouselState[`carousel-${carouselId}`]) {
            carouselState[`carousel-${carouselId}`].isPlaying = true;
        }
    }
    
    // CHANGES: Intentar reproducir con manejo de errores
    video.play().then(() => {
        console.log('▶️ Video reproduciéndose');
        this.style.display = 'none';
        const overlay = this.closest('.video-overlay');
        if (overlay) {
            overlay.style.opacity = '0';
            setTimeout(() => {
                overlay.style.display = 'none';
            }, 300);
        }
    }).catch(error => {
        console.error('❌ Error al reproducir video:', error);
        
        // CHANGES: Mostrar fallback para móviles
        showVideoFallback(video);
        
        // CHANGES: Mostrar notificación al usuario
        if (isMobileDevice()) {
            showNotification('> Para reproducir el video, tócalo nuevamente o ábrelo en nueva pestaña', 'error');
        }
    });
}

/**
 * CHANGES: Muestra un fallback cuando el video no se puede reproducir
 */
function showVideoFallback(video) {
    const videoItem = video.closest('.video-item');
    if (!videoItem) return;
    
    // Ocultar video
    video.style.display = 'none';
    
    // Mostrar fallback
    let fallback = videoItem.querySelector('.mobile-fallback');
    if (!fallback) {
        // Crear fallback si no existe
        fallback = document.createElement('div');
        fallback.className = 'mobile-fallback';
        fallback.innerHTML = `
            <p>El video no se puede reproducir en este dispositivo.</p>
            <a href="${video.querySelector('source')?.src || '#'}" target="_blank" class="btn gaming-btn secondary">
                <i class="fas fa-external-link-alt"></i>
                VER EN NUEVA PESTAÑA
            </a>
        `;
        videoItem.appendChild(fallback);
    }
    fallback.style.display = 'flex';
    
    // Mostrar enlace de fallback en el contenido del proyecto
    const projectCard = video.closest('.gaming-project-card');
    if (projectCard) {
        const fallbackLink = projectCard.querySelector('.fallback-link');
        if (fallbackLink) {
            fallbackLink.href = video.querySelector('source')?.src || '#';
            fallbackLink.style.display = 'flex';
        }
    }
}

/**
 * CHANGES: Resetea el overlay de un video con mejoras
 */
function resetVideoOverlay(video) {
    const videoItem = video.closest('.video-item');
    if (!videoItem) return;
    
    const overlay = videoItem.querySelector('.video-overlay');
    const playButton = overlay?.querySelector('.play-button');
    
    // CHANGES: Verificar si el video está reproduciéndose antes de resetear
    if (!video.paused && !video.ended) {
        return;
    }
    
    if (overlay) {
        overlay.style.display = 'flex';
        overlay.style.opacity = '1';
    }
    
    if (playButton) {
        playButton.style.display = 'flex';
    }
    
    // CHANGES: Resetear estado de reproducción en el carrusel
    const carousel = videoItem.closest('.video-carousel');
    if (carousel) {
        const carouselId = Array.from(document.querySelectorAll('.video-carousel')).indexOf(carousel);
        if (carouselState[`carousel-${carouselId}`]) {
            carouselState[`carousel-${carouselId}`].isPlaying = false;
        }
    }
}

/**
 * CHANGES: Pausa todos los videos con mejor manejo
 */
function pauseAllVideos() {
    const videos = document.querySelectorAll('.project-video');
    videos.forEach(video => {
        if (!video.paused) {
            video.pause();
        }
        resetVideoOverlay(video);
    });
}

/**
 * CHANGES: Carga videos de manera eficiente con mejor manejo de errores
 */
function initializeVideoLoading() {
    const videos = document.querySelectorAll('.project-video');
    
    videos.forEach(video => {
        // Precargar metadata para mejor UX
        video.addEventListener('loadedmetadata', function() {
            console.log(`✅ Video cargado: ${this.currentSrc || this.src}`);
        });
        
        video.addEventListener('error', function() {
            console.error(`❌ Error cargando video: ${this.src}`);
            showVideoFallback(this);
        });
        
        // CHANGES: Manejar video bloqueado por políticas del navegador
        video.addEventListener('canplaythrough', function() {
            console.log(`🎬 Video listo para reproducir: ${this.currentSrc || this.src}`);
        });
    });
}

// ===== SISTEMA DE PDF MEJORADO PARA MÓVILES =====

let currentZoom = 1;
let pdfDoc = null;
let currentPage = 1;
let totalPages = 1;
let isMobileView = false;
let usePDFjs = false;

/**
 * CHANGES: Inicializa el sistema de PDF para móviles
 */
function initializePDFSystem() {
    // Detectar si es un dispositivo móvil
    isMobileView = isMobileDevice();
    usePDFjs = isMobileView && typeof pdfjsLib !== 'undefined';
    
    console.log(`📱 Sistema PDF: ${isMobileView ? 'Móvil' : 'Desktop'}, ${usePDFjs ? 'Usando PDF.js' : 'Usando iframe'}`);
    
    if (usePDFjs) {
        // Configurar worker de PDF.js
        pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
        console.log('✅ PDF.js configurado para móviles');
    }
}

/**
 * CHANGES: Configura el botón VER CV para móviles
 */
function setupCVButtonForMobile() {
    const viewCVButton = document.getElementById('viewCVButton');
    if (!viewCVButton) return;
    
    // CHANGES: En móviles, usar PDF.js en lugar de iframe directo
    if (isMobileView) {
        console.log('📱 Configurando botón VER CV para uso en móvil');
        
        // Añadir tooltip para móviles
        const mobileNote = document.querySelector('.mobile-note');
        if (mobileNote) {
            mobileNote.style.display = 'block';
        }
    }
}

/**
 * CHANGES: Muestra el modal del CV con PDF.js en móviles
 */
function showCVModal() {
    const modal = document.getElementById('cvModal');
    if (modal) {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        
        // CHANGES: En móviles, intentar cargar con PDF.js primero
        if (usePDFjs) {
            loadPDFWithJS();
        } else {
            // En desktop, usar iframe normal
            loadPDFWithIframe();
        }
        
        // Configurar zoom inicial
        currentZoom = 1;
        applyZoom();
        updateZoomDisplay();
        
        console.log(`📄 Abriendo visor de CV (${usePDFjs ? 'PDF.js' : 'iframe'})...`);
    }
}

/**
 * CHANGES: Carga el PDF usando PDF.js (para móviles)
 */
async function loadPDFWithJS() {
    const loadingElement = document.getElementById('pdfLoading');
    const canvasContainer = document.getElementById('pdfCanvasContainer');
    const iframeContainer = document.getElementById('pdfIframeContainer');
    const errorElement = document.getElementById('pdfError');
    const rendererInfo = document.getElementById('rendererInfo');
    
    // Mostrar cargador
    if (loadingElement) loadingElement.style.display = 'flex';
    if (canvasContainer) canvasContainer.style.display = 'none';
    if (iframeContainer) iframeContainer.style.display = 'none';
    if (errorElement) errorElement.style.display = 'none';
    if (rendererInfo) {
        rendererInfo.textContent = 'PDF.js';
        rendererInfo.style.display = 'inline';
    }
    
    updateStatus('CARGANDO_CON_PDF.JS...');
    
    try {
        // Cargar el PDF
        pdfDoc = await pdfjsLib.getDocument('CV/CvHernan25Spr.pdf').promise;
        totalPages = pdfDoc.numPages;
        currentPage = 1;
        
        // Actualizar información
        document.getElementById('totalPages').textContent = totalPages;
        document.getElementById('currentPage').textContent = currentPage;
        
        // Renderizar primera página
        await renderPage(currentPage);
        
        // Mostrar canvas y ocultar cargador
        if (canvasContainer) {
            canvasContainer.style.display = 'flex';
            iframeContainer.style.display = 'none';
        }
        if (loadingElement) loadingElement.style.display = 'none';
        
        updateStatus('PDF_CARGADO | PDF.JS');
        console.log('✅ PDF cargado con PDF.js');
        
    } catch (error) {
        console.error('❌ Error cargando PDF con PDF.js:', error);
        
        // Fallback a iframe
        loadPDFWithIframe();
    }
}

/**
 * CHANGES: Renderiza una página específica con PDF.js
 */
async function renderPage(pageNum) {
    if (!pdfDoc) return;
    
    const canvas = document.getElementById('pdfCanvas');
    if (!canvas) return;
    
    try {
        const page = await pdfDoc.getPage(pageNum);
        const viewport = page.getViewport({ scale: currentZoom });
        
        // Preparar canvas
        const context = canvas.getContext('2d');
        canvas.height = viewport.height;
        canvas.width = viewport.width;
        
        // Renderizar página
        const renderContext = {
            canvasContext: context,
            viewport: viewport
        };
        
        await page.render(renderContext).promise;
        
        // Actualizar información de página
        document.getElementById('currentPage').textContent = pageNum;
        currentPage = pageNum;
        
    } catch (error) {
        console.error('❌ Error renderizando página:', error);
        throw error;
    }
}

/**
 * CHANGES: Cambia a la página anterior
 */
function prevPage() {
    if (currentPage > 1) {
        renderPage(currentPage - 1);
        playButtonSound();
    }
}

/**
 * CHANGES: Cambia a la página siguiente
 */
function nextPage() {
    if (currentPage < totalPages) {
        renderPage(currentPage + 1);
        playButtonSound();
    }
}

/**
 * CHANGES: Carga el PDF usando iframe (fallback)
 */
function loadPDFWithIframe() {
    const loadingElement = document.getElementById('pdfLoading');
    const canvasContainer = document.getElementById('pdfCanvasContainer');
    const iframeContainer = document.getElementById('pdfIframeContainer');
    const errorElement = document.getElementById('pdfError');
    const rendererInfo = document.getElementById('rendererInfo');
    
    // Mostrar iframe y ocultar otros elementos
    if (iframeContainer) iframeContainer.style.display = 'block';
    if (canvasContainer) canvasContainer.style.display = 'none';
    if (loadingElement) loadingElement.style.display = 'none';
    if (errorElement) errorElement.style.display = 'none';
    if (rendererInfo) {
        rendererInfo.textContent = 'IFRAME';
        rendererInfo.style.display = 'inline';
    }
    
    updateStatus('CARGANDO_CON_IFRAME...');
    console.log('📄 Cargando PDF con iframe...');
}

/**
 * CHANGES: Cierra el modal del CV
 */
function closeCVModal() {
    const modal = document.getElementById('cvModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
        
        // CHANGES: Limpiar recursos de PDF.js
        if (pdfDoc) {
            pdfDoc.destroy();
            pdfDoc = null;
        }
        
        console.log('📄 Cerrando visor de CV...');
    }
}

/**
 * CHANGES: Maneja la carga exitosa del PDF en iframe
 */
function onPDFLoad() {
    updateStatus('CV_CARGADO | LISTO');
    console.log('✅ PDF cargado correctamente en iframe');
    
    // Ocultar mensaje de error si existe
    const pdfError = document.getElementById('pdfError');
    if (pdfError) {
        pdfError.style.display = 'none';
    }
    
    // Ocultar cargador
    const loadingElement = document.getElementById('pdfLoading');
    if (loadingElement) {
        loadingElement.style.display = 'none';
    }
}

/**
 * CHANGES: Maneja errores al cargar el PDF
 */
function onPDFError() {
    updateStatus('ERROR_CARGANDO_CV');
    console.error('❌ Error al cargar el PDF');
    
    // Mostrar mensaje de error mejorado
    const pdfError = document.getElementById('pdfError');
    const loadingElement = document.getElementById('pdfLoading');
    
    if (pdfError) {
        pdfError.style.display = 'flex';
    }
    
    if (loadingElement) {
        loadingElement.style.display = 'none';
    }
    
    // CHANGES: Intentar cargar con PDF.js si estamos en iframe y PDF.js está disponible
    if (!usePDFjs && typeof pdfjsLib !== 'undefined') {
        console.log('🔄 Intentando cargar con PDF.js como fallback...');
        usePDFjs = true;
        loadPDFWithJS();
    }
}

/**
 * CHANGES: Reintenta cargar el PDF
 */
function retryPDFLoad() {
    console.log('🔄 Reintentando carga de PDF...');
    
    const errorElement = document.getElementById('pdfError');
    if (errorElement) {
        errorElement.style.display = 'none';
    }
    
    if (usePDFjs) {
        loadPDFWithJS();
    } else {
        // Recargar iframe
        const iframe = document.getElementById('pdfFrame');
        if (iframe) {
            iframe.src = iframe.src;
        }
    }
}

/**
 * CHANGES: Abre el PDF en una nueva pestaña
 */
function openPDFInNewTab() {
    playButtonSound();
    window.open('CV/CvHernan25Spr.pdf', '_blank');
    console.log('📋 Abriendo PDF en nueva pestaña...');
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
 * Ajusta el zoom del PDF al ancho del contenedor
 */
function fitToWidth() {
    const container = document.querySelector('.pdf-container');
    
    if (container) {
        const containerWidth = container.clientWidth - 40;
        
        if (usePDFjs && pdfDoc) {
            // Para PDF.js, necesitamos recalcular el render
            currentZoom = Math.min(containerWidth / 800, 1.5);
            renderPage(currentPage);
        } else {
            // Para iframe
            const iframe = document.getElementById('pdfFrame');
            if (iframe) {
                const scale = Math.min(containerWidth / 800, 1.5);
                currentZoom = Math.max(Math.min(scale, 1.5), 0.5);
                applyZoom();
            }
        }
        
        playButtonSound();
        console.log('🔍 Ajustando PDF al ancho - Zoom:', Math.round(currentZoom * 100) + '%');
    }
}

function fitToPage() {
    const container = document.querySelector('.pdf-container');
    
    if (container) {
        const containerWidth = container.clientWidth;
        const containerHeight = container.clientHeight;
        
        if (usePDFjs && pdfDoc) {
            // Para PDF.js
            const widthScale = containerWidth / 800;
            const heightScale = containerHeight / 1100;
            currentZoom = Math.min(widthScale, heightScale);
            currentZoom = Math.max(Math.min(currentZoom, 1.5), 0.5);
            renderPage(currentPage);
        } else {
            // Para iframe
            const iframe = document.getElementById('pdfFrame');
            if (iframe) {
                const widthScale = containerWidth / 800;
                const heightScale = containerHeight / 1100;
                currentZoom = Math.min(widthScale, heightScale);
                currentZoom = Math.max(Math.min(currentZoom, 1.5), 0.5);
                applyZoom();
            }
        }
        
        playButtonSound();
        console.log('🔍 Ajustando PDF a la página - Zoom:', Math.round(currentZoom * 100) + '%');
    }
}

function applyZoom() {
    if (usePDFjs && pdfDoc) {
        // Para PDF.js, rerenderizar con nuevo zoom
        renderPage(currentPage);
    } else {
        // Para iframe
        const iframe = document.getElementById('pdfFrame');
        if (iframe) {
            iframe.style.transform = `scale(${currentZoom})`;
            iframe.style.transformOrigin = 'center top';
        }
    }
    updateZoomDisplay();
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
    
    if (usePDFjs) {
        // Para PDF.js, abrir en nueva pestaña para imprimir
        window.open('CV/CvHernan25Spr.pdf', '_blank');
    } else {
        // Para iframe
        const iframe = document.getElementById('pdfFrame');
        if (iframe && iframe.contentWindow) {
            iframe.contentWindow.focus();
            iframe.contentWindow.print();
        } else {
            // Fallback
            window.open('CV/CvHernan25Spr.pdf', '_blank');
        }
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

// ===== FUNCIONES DE UTILIDAD =====

/**
 * CHANGES: Detecta si es un dispositivo móvil
 */
function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

/**
 * CHANGES: Función para reproducir sonido de botones
 */
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

// ===== INICIALIZACIÓN COMPLETA DEL SISTEMA =====
console.log('✅ Sistema Gamer Portfolio actualizado y listo');

/**
 * ============================================
 * 🧪 TESTING INSTRUCTIONS / INSTRUCCIONES DE PRUEBA
 * ============================================
 * 
 * PRUEBA 1: Legibilidad sección "SOBRE MÍ"
 *   - Abrir la página en Chrome DevTools
 *   - Ir a la sección "SOBRE MÍ"
 *   - Verificar que el texto sea legible (contraste adecuado)
 *   - Usar la herramienta de accesibilidad de Chrome para verificar contraste >= 4.5:1
 *   - Redimensionar ventana para probar responsive
 * 
 * PRUEBA 2: Reproducción de videos en iPhone (Safari)
 *   - Abrir la página en iPhone Safari
 *   - Tocar el botón de play en cualquier proyecto
 *   - Verificar que el video se reproduce in-page (no fullscreen)
 *   - Verificar que el overlay desaparece al reproducir
 *   - Probar cambiar entre videos en carruseles
 * 
 * PRUEBA 3: Reproducción de videos en Android (Chrome)
 *   - Abrir la página en Android Chrome
 *   - Tocar el botón de play en cualquier proyecto
 *   - Verificar reproducción in-page
 *   - Probar fallback si el video no se reproduce
 * 
 * PRUEBA 4: Visualización de CV en móvil
 *   - En iPhone/Android, tocar botón "VER CV"
 *   - Verificar que se abre el modal con PDF.js (o fallback)
 *   - Verificar que NO descarga automáticamente
 *   - Probar zoom y navegación entre páginas
 *   - Probar botón "Abrir en nueva pestaña" si hay error
 * 
 * PRUEBA 5: Accesibilidad
 *   - Usar navegador con lectores de pantalla
 *   - Verificar que todos los botones tengan aria-label
 *   - Verificar que el modal tenga role="dialog"
 *   - Navegar con teclado (Tab, Enter, Espacio)
 * 
 * NOTAS:
 * - PDF.js puede fallar si el servidor bloquea CORS
 * - Algunos móviles pueden bloquear autoplay de video
 * - El contraste fue medido con herramientas automáticas
 * ============================================
 */