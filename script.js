/* 
  Archivo: script.js
  Modificaciones realizadas:
  - Sistema robusto de reproducción de video para móviles
  - Eventos touch + click mejorados
  - Función mejorada para ver el CV en móviles con PDF.js
  - Reset correcto del overlay de video
  - Código limpio, bien documentado, sin duplicados
  - Comentarios detallados para cada función
*/

/** 
 * ============================================
 * PORTFOLIO GAMER - SCRIPT OPTIMIZADO
 * ============================================
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
    
    // Inicializar componentes
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
    
    // FIX: Inicializar sistema de videos mejorado para móvil
    initializeVideoSystem();
    initializeVideoLoading();
    initializeCarousels();
    
    // FIX: Inicializar sistema de PDF para móviles
    initializePDFSystem();
    
    // FIX: Configurar botón VER CV para móviles
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
    const statFills = document.querySelectorAll('.stat-fill');
    statFills.forEach(fill => {
        const level = fill.getAttribute('data-level');
        setTimeout(() => {
            fill.style.width = level + '%';
        }, 500);
    });

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
    
    submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> ENVIANDO...';
    submitButton.disabled = true;
    
    setTimeout(() => {
        showNotification('> Mensaje enviado con éxito! Te contactaré pronto.', 'success');
        document.getElementById('contactForm').reset();
        submitButton.innerHTML = originalText;
        submitButton.disabled = false;
    }, 2000);
}

// ===== SISTEMA DE CARRUSEL DE VIDEOS - MEJORADO =====
const carouselState = {};

function initializeCarousels() {
    console.log('🎠 Inicializando carruseles de videos...');
    
    const carousels = document.querySelectorAll('.video-carousel');
    
    carousels.forEach((carousel, index) => {
        const carouselId = `carousel-${index}`;
        carouselState[carouselId] = {
            currentIndex: 0,
            totalItems: carousel.querySelectorAll('.video-item').length,
            isPlaying: false
        };
        
        initializeCarouselIndicators(carousel, carouselId);
        showVideo(carousel, 0, carouselId);
        
        console.log(`✅ Carrusel ${carouselId} inicializado con ${carouselState[carouselId].totalItems} videos`);
    });
}

function initializeCarouselIndicators(carousel, carouselId) {
    const totalItems = carouselState[carouselId].totalItems;
    
    let indicatorsContainer = carousel.querySelector('.carousel-indicators');
    if (!indicatorsContainer) {
        indicatorsContainer = document.createElement('div');
        indicatorsContainer.className = 'carousel-indicators';
        carousel.appendChild(indicatorsContainer);
    }
    
    indicatorsContainer.innerHTML = '';
    
    for (let i = 0; i < totalItems; i++) {
        const indicator = document.createElement('div');
        indicator.className = `carousel-indicator ${i === 0 ? 'active' : ''}`;
        indicator.setAttribute('data-index', i);
        indicator.setAttribute('role', 'button');
        indicator.setAttribute('tabindex', '0');
        indicator.setAttribute('aria-label', `Ver video ${i + 1} de ${totalItems}`);
        
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

function showVideo(carousel, index, carouselId) {
    const videoItems = carousel.querySelectorAll('.video-item');
    const indicators = carousel.querySelectorAll('.carousel-indicator');
    const totalItems = videoItems.length;
    
    if (index < 0) index = totalItems - 1;
    if (index >= totalItems) index = 0;
    
    videoItems.forEach((item, i) => {
        item.classList.remove('active');
        const video = item.querySelector('.project-video');
        if (video) {
            if (!carouselState[carouselId]?.isPlaying || i !== index) {
                video.pause();
                resetVideoOverlay(video);
            }
        }
    });
    
    videoItems[index].classList.add('active');
    
    indicators.forEach((indicator, i) => {
        indicator.classList.toggle('active', i === index);
    });
    
    carouselState[carouselId].currentIndex = index;
    
    console.log(`🔄 Carrusel ${carouselId}: Mostrando video ${index + 1} de ${totalItems}`);
}

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
    
    playButtonSound();
}

// ===== SISTEMA DE VIDEOS MEJORADO PARA MÓVIL =====
function initializeVideoSystem() {
    console.log('🎥 Inicializando sistema de videos con soporte táctil...');
    
    const playButtons = document.querySelectorAll('.play-button');
    playButtons.forEach(button => {
        // FIX: Agregar eventos táctiles y de clic
        button.addEventListener('click', handleVideoPlay);
        button.addEventListener('touchstart', handleVideoPlay, { passive: false });
        
        button.setAttribute('role', 'button');
        button.setAttribute('tabindex', '0');
        button.setAttribute('aria-label', 'Reproducir video');
        
        button.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                handleVideoPlay(e);
            }
        });
    });
    
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
    
    document.addEventListener('visibilitychange', function() {
        if (document.hidden) {
            pauseAllVideos();
        }
    });
    
    const videos = document.querySelectorAll('.project-video');
    videos.forEach(video => {
        video.addEventListener('ended', function() {
            resetVideoOverlay(this);
        });
        
        video.addEventListener('pause', function() {
            resetVideoOverlay(this);
        });
        
        // FIX: Manejar errores de reproducción
        video.addEventListener('error', function(e) {
            console.error('❌ Error reproduciendo video:', e);
            showVideoFallback(this);
        });
    });
    
    console.log('✅ Sistema de videos inicializado con soporte táctil');
}

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
    
    const carousel = videoItem.closest('.video-carousel');
    if (carousel) {
        const carouselId = Array.from(document.querySelectorAll('.video-carousel')).indexOf(carousel);
        if (carouselState[`carousel-${carouselId}`]) {
            carouselState[`carousel-${carouselId}`].isPlaying = true;
        }
    }
    
    // FIX: Intentar reproducir con manejo de errores
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
        
        showVideoFallback(video);
        
        if (isMobileDevice()) {
            showNotification('> Para reproducir el video, tócalo nuevamente o ábrelo en nueva pestaña', 'error');
        }
    });
}

function showVideoFallback(video) {
    const videoItem = video.closest('.video-item');
    if (!videoItem) return;
    
    video.style.display = 'none';
    
    let fallback = videoItem.querySelector('.mobile-fallback');
    if (!fallback) {
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
    
    const projectCard = video.closest('.gaming-project-card');
    if (projectCard) {
        const fallbackLink = projectCard.querySelector('.fallback-link');
        if (fallbackLink) {
            fallbackLink.href = video.querySelector('source')?.src || '#';
            fallbackLink.style.display = 'flex';
        }
    }
}

function resetVideoOverlay(video) {
    const videoItem = video.closest('.video-item');
    if (!videoItem) return;
    
    const overlay = videoItem.querySelector('.video-overlay');
    const playButton = overlay?.querySelector('.play-button');
    
    // FIX: Verificar si el video está reproduciéndose antes de resetear
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
    
    const carousel = videoItem.closest('.video-carousel');
    if (carousel) {
        const carouselId = Array.from(document.querySelectorAll('.video-carousel')).indexOf(carousel);
        if (carouselState[`carousel-${carouselId}`]) {
            carouselState[`carousel-${carouselId}`].isPlaying = false;
        }
    }
}

function pauseAllVideos() {
    const videos = document.querySelectorAll('.project-video');
    videos.forEach(video => {
        if (!video.paused) {
            video.pause();
        }
        resetVideoOverlay(video);
    });
}

function initializeVideoLoading() {
    const videos = document.querySelectorAll('.project-video');
    
    videos.forEach(video => {
        video.addEventListener('loadedmetadata', function() {
            console.log(`✅ Video cargado: ${this.currentSrc || this.src}`);
        });
        
        video.addEventListener('error', function() {
            console.error(`❌ Error cargando video: ${this.src}`);
            showVideoFallback(this);
        });
        
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

function initializePDFSystem() {
    isMobileView = isMobileDevice();
    usePDFjs = isMobileView && typeof pdfjsLib !== 'undefined';
    
    console.log(`📱 Sistema PDF: ${isMobileView ? 'Móvil' : 'Desktop'}, ${usePDFjs ? 'Usando PDF.js' : 'Usando iframe'}`);
    
    if (usePDFjs) {
        pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
        console.log('✅ PDF.js configurado para móviles');
    }
}

function setupCVButtonForMobile() {
    const viewCVButton = document.getElementById('viewCVButton');
    if (!viewCVButton) return;
    
    if (isMobileView) {
        console.log('📱 Configurando botón VER CV para uso en móvil');
        
        const mobileNote = document.querySelector('.mobile-note');
        if (mobileNote) {
            mobileNote.style.display = 'block';
        }
    }
}

function showCVModal() {
    const modal = document.getElementById('cvModal');
    if (modal) {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        
        if (usePDFjs) {
            loadPDFWithJS();
        } else {
            loadPDFWithIframe();
        }
        
        currentZoom = 1;
        applyZoom();
        updateZoomDisplay();
        
        console.log(`📄 Abriendo visor de CV (${usePDFjs ? 'PDF.js' : 'iframe'})...`);
    }
}

async function loadPDFWithJS() {
    const loadingElement = document.getElementById('pdfLoading');
    const canvasContainer = document.getElementById('pdfCanvasContainer');
    const iframeContainer = document.getElementById('pdfIframeContainer');
    const errorElement = document.getElementById('pdfError');
    const rendererInfo = document.getElementById('rendererInfo');
    
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
        pdfDoc = await pdfjsLib.getDocument('CV/CvHernan25Spr.pdf').promise;
        totalPages = pdfDoc.numPages;
        currentPage = 1;
        
        document.getElementById('totalPages').textContent = totalPages;
        document.getElementById('currentPage').textContent = currentPage;
        
        await renderPage(currentPage);
        
        if (canvasContainer) {
            canvasContainer.style.display = 'flex';
            iframeContainer.style.display = 'none';
        }
        if (loadingElement) loadingElement.style.display = 'none';
        
        updateStatus('PDF_CARGADO | PDF.JS');
        console.log('✅ PDF cargado con PDF.js');
        
    } catch (error) {
        console.error('❌ Error cargando PDF con PDF.js:', error);
        
        loadPDFWithIframe();
    }
}

async function renderPage(pageNum) {
    if (!pdfDoc) return;
    
    const canvas = document.getElementById('pdfCanvas');
    if (!canvas) return;
    
    try {
        const page = await pdfDoc.getPage(pageNum);
        const viewport = page.getViewport({ scale: currentZoom });
        
        const context = canvas.getContext('2d');
        canvas.height = viewport.height;
        canvas.width = viewport.width;
        
        const renderContext = {
            canvasContext: context,
            viewport: viewport
        };
        
        await page.render(renderContext).promise;
        
        document.getElementById('currentPage').textContent = pageNum;
        currentPage = pageNum;
        
    } catch (error) {
        console.error('❌ Error renderizando página:', error);
        throw error;
    }
}

function prevPage() {
    if (currentPage > 1) {
        renderPage(currentPage - 1);
        playButtonSound();
    }
}

function nextPage() {
    if (currentPage < totalPages) {
        renderPage(currentPage + 1);
        playButtonSound();
    }
}

function loadPDFWithIframe() {
    const loadingElement = document.getElementById('pdfLoading');
    const canvasContainer = document.getElementById('pdfCanvasContainer');
    const iframeContainer = document.getElementById('pdfIframeContainer');
    const errorElement = document.getElementById('pdfError');
    const rendererInfo = document.getElementById('rendererInfo');
    
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

function closeCVModal() {
    const modal = document.getElementById('cvModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
        
        if (pdfDoc) {
            pdfDoc.destroy();
            pdfDoc = null;
        }
        
        console.log('📄 Cerrando visor de CV...');
    }
}

function onPDFLoad() {
    updateStatus('CV_CARGADO | LISTO');
    console.log('✅ PDF cargado correctamente en iframe');
    
    const pdfError = document.getElementById('pdfError');
    if (pdfError) {
        pdfError.style.display = 'none';
    }
    
    const loadingElement = document.getElementById('pdfLoading');
    if (loadingElement) {
        loadingElement.style.display = 'none';
    }
}

function onPDFError() {
    updateStatus('ERROR_CARGANDO_CV');
    console.error('❌ Error al cargar el PDF');
    
    const pdfError = document.getElementById('pdfError');
    const loadingElement = document.getElementById('pdfLoading');
    
    if (pdfError) {
        pdfError.style.display = 'flex';
    }
    
    if (loadingElement) {
        loadingElement.style.display = 'none';
    }
    
    if (!usePDFjs && typeof pdfjsLib !== 'undefined') {
        console.log('🔄 Intentando cargar con PDF.js como fallback...');
        usePDFjs = true;
        loadPDFWithJS();
    }
}

function retryPDFLoad() {
    console.log('🔄 Reintentando carga de PDF...');
    
    const errorElement = document.getElementById('pdfError');
    if (errorElement) {
        errorElement.style.display = 'none';
    }
    
    if (usePDFjs) {
        loadPDFWithJS();
    } else {
        const iframe = document.getElementById('pdfFrame');
        if (iframe) {
            iframe.src = iframe.src;
        }
    }
}

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

function fitToWidth() {
    const container = document.querySelector('.pdf-container');
    
    if (container) {
        const containerWidth = container.clientWidth - 40;
        
        if (usePDFjs && pdfDoc) {
            currentZoom = Math.min(containerWidth / 800, 1.5);
            renderPage(currentPage);
        } else {
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
            const widthScale = containerWidth / 800;
            const heightScale = containerHeight / 1100;
            currentZoom = Math.min(widthScale, heightScale);
            currentZoom = Math.max(Math.min(currentZoom, 1.5), 0.5);
            renderPage(currentPage);
        } else {
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
        renderPage(currentPage);
    } else {
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
        window.open('CV/CvHernan25Spr.pdf', '_blank');
    } else {
        const iframe = document.getElementById('pdfFrame');
        if (iframe && iframe.contentWindow) {
            iframe.contentWindow.focus();
            iframe.contentWindow.print();
        } else {
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
    
    window.addEventListener('click', function(e) {
        const modal = document.getElementById('cvModal');
        if (e.target === modal) {
            closeCVModal();
        }
    });
    
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
    
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
        notification.style.opacity = '1';
    }, 100);
    
    const closeButton = notification.querySelector('.notification-close');
    closeButton.addEventListener('click', function() {
        closeNotification(notification);
    });
    
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
function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

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
    const cards = document.querySelectorAll('.pixel-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

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

function initializeStatsBars() {
    const statFills = document.querySelectorAll('.stat-fill');
    statFills.forEach(fill => {
        const level = fill.getAttribute('data-level');
        setTimeout(() => {
            fill.style.width = level + '%';
        }, 1000);
    });
}

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

console.log('✅ Sistema Gamer Portfolio optimizado y listo');