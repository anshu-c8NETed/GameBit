// ==================== LOCOMOTIVE SCROLL - ULTRA OPTIMIZED ====================
let locoScroll;

function initLocomotiveScroll() {
    locoScroll = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true,
        multiplier: 1.5,
        lerp: 0.15,
        class: 'is-reveal',
        reloadOnContextChange: true,
        touchMultiplier: 2.5,
        smoothMobile: true,
        smartphone: {
            smooth: true,
            multiplier: 1.8
        },
        tablet: {
            smooth: true,
            multiplier: 1.6
        }
    });

    locoScroll.on('scroll', ScrollTrigger.update);

    ScrollTrigger.scrollerProxy('[data-scroll-container]', {
        scrollTop(value) {
            return arguments.length
                ? locoScroll.scrollTo(value, 0, 0)
                : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight
            };
        },
        pinType: document.querySelector('[data-scroll-container]').style.transform
            ? 'transform'
            : 'fixed'
    });

    ScrollTrigger.addEventListener('refresh', () => locoScroll.update());
    ScrollTrigger.defaults({ scroller: '[data-scroll-container]' });
    
    locoScroll.update();
    ScrollTrigger.refresh();
    
    setTimeout(() => {
        locoScroll.update();
        ScrollTrigger.refresh();
    }, 100);

    setupSmoothNavigation();
    
    locoScroll.on('scroll', (args) => {
        if (window.threeScene) {
            window.threeScene.scrollY = args.scroll.y;
        }
        
        const nav = document.querySelector('#nav');
        if (args.scroll.y > 100) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });
}

// ==================== CUSTOM CURSOR ====================
class CustomCursor {
    constructor() {
        this.dot = document.querySelector('.cursor-dot');
        this.outline = document.querySelector('.cursor-outline');
        this.trail = document.querySelector('.cursor-trail');
        this.mouseX = 0;
        this.mouseY = 0;
        this.dotX = 0;
        this.dotY = 0;
        this.outlineX = 0;
        this.outlineY = 0;
        this.trailX = 0;
        this.trailY = 0;
        
        this.init();
    }
    
    init() {
        document.addEventListener('mousemove', (e) => {
            this.mouseX = e.clientX;
            this.mouseY = e.clientY;
        });
        
        this.animate();
        
        document.querySelectorAll('a, button, .game-card, .service-card').forEach(elem => {
            elem.addEventListener('mouseenter', () => {
                this.dot.style.transform = 'translate(-50%, -50%) scale(2)';
                this.outline.style.transform = 'translate(-50%, -50%) scale(1.5)';
            });
            
            elem.addEventListener('mouseleave', () => {
                this.dot.style.transform = 'translate(-50%, -50%) scale(1)';
                this.outline.style.transform = 'translate(-50%, -50%) scale(1)';
            });
        });
    }
    
    animate() {
        this.dotX += (this.mouseX - this.dotX) * 0.8;
        this.dotY += (this.mouseY - this.dotY) * 0.8;
        
        this.outlineX += (this.mouseX - this.outlineX) * 0.15;
        this.outlineY += (this.mouseY - this.outlineY) * 0.15;
        
        this.trailX += (this.mouseX - this.trailX) * 0.1;
        this.trailY += (this.mouseY - this.trailY) * 0.1;
        
        this.dot.style.left = this.dotX + 'px';
        this.dot.style.top = this.dotY + 'px';
        
        this.outline.style.left = this.outlineX + 'px';
        this.outline.style.top = this.outlineY + 'px';
        
        this.trail.style.left = this.trailX + 'px';
        this.trail.style.top = this.trailY + 'px';
        
        requestAnimationFrame(() => this.animate());
    }
}

// ==================== LOADING SCREEN ====================
class LoadingScreen {
    constructor() {
        this.screen = document.querySelector('.loading-screen');
        this.progress = document.querySelector('.loading-progress');
        this.percent = document.querySelector('.loading-percent');
        this.status = document.querySelector('.loading-status');
        this.currentProgress = 0;
        this.targetProgress = 0;
        
        this.statusMessages = [
            'INITIALIZING SYSTEMS...',
            'LOADING GAME ENGINE...',
            'COMPILING SHADERS...',
            'RENDERING 3D ASSETS...',
            'OPTIMIZING PERFORMANCE...',
            'READY TO PLAY!'
        ];
        
        this.init();
    }
    
    init() {
        this.simulate();
    }
    
    simulate() {
        const interval = setInterval(() => {
            this.targetProgress += Math.random() * 25;
            if (this.targetProgress > 100) this.targetProgress = 100;
            
            const statusIndex = Math.floor((this.targetProgress / 100) * (this.statusMessages.length - 1));
            this.status.textContent = this.statusMessages[statusIndex];
            
            if (this.targetProgress === 100) {
                clearInterval(interval);
                setTimeout(() => this.complete(), 200);
            }
        }, 120);
        
        this.animateProgress();
    }
    
    animateProgress() {
        this.currentProgress += (this.targetProgress - this.currentProgress) * 0.2;
        this.progress.style.width = this.currentProgress + '%';
        this.percent.textContent = Math.floor(this.currentProgress) + '%';
        
        if (this.currentProgress < 99.9) {
            requestAnimationFrame(() => this.animateProgress());
        }
    }
    
    complete() {
        this.screen.classList.add('hidden');
        document.body.style.overflow = '';
        
        setTimeout(() => {
            initLocomotiveScroll();
            initAnimations();
        }, 200);
    }
}

// ==================== THREE.JS 3D HELMET SCENE - FIXED ====================
class ThreeScene {
    constructor() {
        this.scene = null;
        this.camera = null;
        this.renderer = null;
        this.helmet = null;
        this.particles = [];
        this.scrollY = 0;
        this.mouse = { x: 0, y: 0 };
        this.targetMouse = { x: 0, y: 0 };
        
        if (window.innerWidth > 768) {
            this.init();
            window.threeScene = this;
        }
    }
    
    init() {
        // Scene setup
        this.scene = new THREE.Scene();
        this.scene.fog = new THREE.Fog(0x0a0a0f, 10, 50);
        
        // Camera setup
        this.camera = new THREE.PerspectiveCamera(
            50,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        this.camera.position.set(8, 2, 10);
        this.camera.lookAt(0, 0, 0);
        
        // Renderer setup
        const canvas = document.getElementById('three-canvas');
        this.renderer = new THREE.WebGLRenderer({
            canvas: canvas,
            alpha: true,
            antialias: window.innerWidth > 1280,
            powerPreference: "high-performance"
        });
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setClearColor(0x0a0a0f, 0);
        
        // Lights
        this.setupLights();
        
        // Load helmet with proper GLTFLoader
        this.loadHelmet();
        
        // Create particles
        this.createParticles();
        
        // Event listeners
        this.addEventListeners();
        
        // Start animation
        this.animate();
    }
    
    setupLights() {
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
        this.scene.add(ambientLight);
        
        const light1 = new THREE.PointLight(0x00f0ff, 2.5, 50);
        light1.position.set(5, 5, 5);
        this.scene.add(light1);
        
        const light2 = new THREE.PointLight(0xff0080, 2, 50);
        light2.position.set(-5, 3, -5);
        this.scene.add(light2);
        
        const light3 = new THREE.PointLight(0xb000ff, 1.5, 30);
        light3.position.set(0, -2, 5);
        this.scene.add(light3);
        
        // Add directional light for better visibility
        const dirLight = new THREE.DirectionalLight(0xffffff, 0.5);
        dirLight.position.set(0, 10, 5);
        this.scene.add(dirLight);
    }
    
    loadHelmet() {
        // Check if GLTFLoader exists
        if (typeof THREE.GLTFLoader === 'undefined') {
            console.log('GLTFLoader not available, using fallback');
            this.createFallbackHelmet();
            return;
        }
        
        const loader = new THREE.GLTFLoader();
        
        // Try loading the helmet
        loader.load(
            'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/DamagedHelmet/glTF/DamagedHelmet.gltf',
            (gltf) => {
                console.log('Helmet loaded successfully!');
                this.helmet = gltf.scene;
                this.setupHelmet();
            },
            (progress) => {
                console.log('Loading helmet:', (progress.loaded / progress.total * 100) + '%');
            },
            (error) => {
                console.error('Error loading helmet:', error);
                this.createFallbackHelmet();
            }
        );
    }
    
    setupHelmet() {
        // Center and scale the helmet
        const box = new THREE.Box3().setFromObject(this.helmet);
        const center = box.getCenter(new THREE.Vector3());
        const size = box.getSize(new THREE.Vector3());
        
        const maxDim = Math.max(size.x, size.y, size.z);
        const scale = 4 / maxDim; // Larger scale
        
        this.helmet.scale.setScalar(scale);
        this.helmet.position.sub(center.multiplyScalar(scale));
        this.helmet.position.set(4, 0, 0);
        
        // Add glow effect to materials
        this.helmet.traverse((child) => {
            if (child.isMesh) {
                child.material.emissive = new THREE.Color(0x00f0ff);
                child.material.emissiveIntensity = 0.2;
                child.material.metalness = 0.9;
                child.material.roughness = 0.3;
            }
        });
        
        this.scene.add(this.helmet);
        console.log('Helmet added to scene');
    }
    
    createFallbackHelmet() {
        console.log('Creating fallback helmet');
        
        // Create a cool helmet-like shape
        const helmetGroup = new THREE.Group();
        
        // Main helmet dome
        const domeGeometry = new THREE.SphereGeometry(1.2, 32, 32, 0, Math.PI * 2, 0, Math.PI / 1.5);
        const domeMaterial = new THREE.MeshStandardMaterial({
            color: 0x00f0ff,
            metalness: 0.9,
            roughness: 0.2,
            emissive: 0x00f0ff,
            emissiveIntensity: 0.3
        });
        const dome = new THREE.Mesh(domeGeometry, domeMaterial);
        dome.position.y = 0.5;
        helmetGroup.add(dome);
        
        // Visor
        const visorGeometry = new THREE.BoxGeometry(1.8, 0.4, 1.4);
        const visorMaterial = new THREE.MeshStandardMaterial({
            color: 0xff0080,
            metalness: 1,
            roughness: 0.1,
            emissive: 0xff0080,
            emissiveIntensity: 0.4,
            transparent: true,
            opacity: 0.8
        });
        const visor = new THREE.Mesh(visorGeometry, visorMaterial);
        visor.position.set(0, 0.3, 0.6);
        helmetGroup.add(visor);
        
        // Side panels
        const panelGeometry = new THREE.BoxGeometry(0.3, 0.8, 1.2);
        const panelMaterial = new THREE.MeshStandardMaterial({
            color: 0xb000ff,
            metalness: 0.8,
            roughness: 0.3,
            emissive: 0xb000ff,
            emissiveIntensity: 0.2
        });
        
        const leftPanel = new THREE.Mesh(panelGeometry, panelMaterial);
        leftPanel.position.set(-1, 0.2, 0);
        helmetGroup.add(leftPanel);
        
        const rightPanel = new THREE.Mesh(panelGeometry, panelMaterial);
        rightPanel.position.set(1, 0.2, 0);
        helmetGroup.add(rightPanel);
        
        // Top vent
        const ventGeometry = new THREE.CylinderGeometry(0.15, 0.15, 0.6, 8);
        const ventMaterial = new THREE.MeshStandardMaterial({
            color: 0x00ff88,
            metalness: 0.9,
            roughness: 0.2,
            emissive: 0x00ff88,
            emissiveIntensity: 0.3
        });
        const vent = new THREE.Mesh(ventGeometry, ventMaterial);
        vent.position.y = 1.2;
        vent.rotation.z = Math.PI / 2;
        helmetGroup.add(vent);
        
        helmetGroup.position.set(4, 0, 0);
        helmetGroup.scale.set(1.5, 1.5, 1.5);
        
        this.helmet = helmetGroup;
        this.scene.add(this.helmet);
        console.log('Fallback helmet created');
    }
    
    createParticles() {
        const particleCount = 400;
        const positions = new Float32Array(particleCount * 3);
        const colors = new Float32Array(particleCount * 3);
        
        const color1 = new THREE.Color(0x00f0ff);
        const color2 = new THREE.Color(0xff0080);
        const color3 = new THREE.Color(0xb000ff);
        
        for (let i = 0; i < particleCount; i++) {
            const i3 = i * 3;
            
            positions[i3] = (Math.random() - 0.5) * 50;
            positions[i3 + 1] = (Math.random() - 0.5) * 50;
            positions[i3 + 2] = (Math.random() - 0.5) * 50;
            
            const randomColor = Math.random();
            let mixedColor;
            if (randomColor < 0.33) {
                mixedColor = color1;
            } else if (randomColor < 0.66) {
                mixedColor = color2;
            } else {
                mixedColor = color3;
            }
            
            colors[i3] = mixedColor.r;
            colors[i3 + 1] = mixedColor.g;
            colors[i3 + 2] = mixedColor.b;
        }
        
        const geometry = new THREE.BufferGeometry();
        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
        
        const material = new THREE.PointsMaterial({
            size: 0.06,
            vertexColors: true,
            transparent: true,
            opacity: 0.6,
            blending: THREE.AdditiveBlending
        });
        
        this.particleSystem = new THREE.Points(geometry, material);
        this.scene.add(this.particleSystem);
    }
    
    addEventListeners() {
        window.addEventListener('mousemove', (e) => {
            this.targetMouse.x = (e.clientX / window.innerWidth) * 2 - 1;
            this.targetMouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
        });
        
        window.addEventListener('resize', () => {
            this.camera.aspect = window.innerWidth / window.innerHeight;
            this.camera.updateProjectionMatrix();
            this.renderer.setSize(window.innerWidth, window.innerHeight);
            
            if (locoScroll) {
                locoScroll.update();
            }
        });
    }
    
    animate() {
        requestAnimationFrame(() => this.animate());
        
        // Smooth mouse tracking
        this.mouse.x += (this.targetMouse.x - this.mouse.x) * 0.1;
        this.mouse.y += (this.targetMouse.y - this.mouse.y) * 0.1;
        
        // Animate helmet
        if (this.helmet) {
            const scrollProgress = Math.min(this.scrollY / (document.body.scrollHeight - window.innerHeight), 1);
            
            // Strong cursor-based rotation
            this.helmet.rotation.y = this.mouse.x * Math.PI * 0.4;
            this.helmet.rotation.x = this.mouse.y * Math.PI * 0.25;
            this.helmet.rotation.z = this.mouse.x * Math.PI * 0.15;
            
            // Position based on scroll
            this.helmet.position.y = Math.sin(scrollProgress * Math.PI * 4) * 2;
            this.helmet.position.z = -scrollProgress * 10;
            
            // Floating animation
            this.helmet.position.y += Math.sin(Date.now() * 0.001) * 0.3;
            
            // Scale pulse
            const scale = 1 + Math.sin(Date.now() * 0.002) * 0.08;
            const baseScale = this.helmet.userData.baseScale || 1;
            this.helmet.scale.set(scale * baseScale, scale * baseScale, scale * baseScale);
            
            // Tilt based on mouse
            const tiltX = this.mouse.y * 0.08;
            const tiltY = this.mouse.x * 0.08;
            this.helmet.position.x = 4 + tiltY * 2.5;
            this.helmet.position.y += tiltX * 2.5;
        }
        
        // Animate particles
        if (this.particleSystem) {
            this.particleSystem.rotation.y += 0.0005;
            this.particleSystem.rotation.x = this.mouse.y * 0.1;
            this.particleSystem.rotation.z = this.mouse.x * 0.05;
        }
        
        // Camera movement
        this.camera.position.x = 8 + this.mouse.x * 3;
        this.camera.position.y = 2 + this.mouse.y * 3;
        this.camera.lookAt(this.helmet ? this.helmet.position : new THREE.Vector3(0, 0, 0));
        
        this.renderer.render(this.scene, this.camera);
    }
}

// ==================== GSAP ANIMATIONS - OPTIMIZED ====================
function initAnimations() {
    gsap.registerPlugin(ScrollTrigger);
    
    gsap.from('.hero-label', {
        y: 40,
        opacity: 0,
        duration: 0.6,
        delay: 0.2,
        ease: 'power3.out'
    });
    
    gsap.from('.title-line .word', {
        y: 120,
        opacity: 0,
        rotationX: -90,
        stagger: 0.08,
        duration: 0.8,
        delay: 0.4,
        ease: 'power4.out'
    });
    
    gsap.from('.hero-description', {
        y: 25,
        opacity: 0,
        duration: 0.6,
        delay: 0.8,
        ease: 'power3.out'
    });
    
    gsap.from('.hero-cta', {
        y: 25,
        opacity: 0,
        duration: 0.6,
        delay: 1,
        ease: 'power3.out'
    });
    
    gsap.from('.stat-box', {
        y: 40,
        opacity: 0,
        stagger: 0.12,
        duration: 0.7,
        delay: 1.2,
        ease: 'power3.out'
    });
    
    gsap.utils.toArray('.section-header').forEach((header) => {
        gsap.from(header, {
            scrollTrigger: {
                trigger: header,
                start: 'top 85%',
                scroller: '[data-scroll-container]'
            },
            y: 50,
            opacity: 0,
            duration: 0.7,
            ease: 'power3.out'
        });
    });
    
    gsap.utils.toArray('.service-card').forEach((card, i) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 88%',
                scroller: '[data-scroll-container]'
            },
            y: 70,
            opacity: 0,
            rotation: 5,
            duration: 0.7,
            delay: i * 0.12,
            ease: 'power3.out'
        });
    });
    
    gsap.utils.toArray('.game-card').forEach((card, i) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 88%',
                scroller: '[data-scroll-container]'
            },
            y: 80,
            opacity: 0,
            scale: 0.92,
            duration: 0.8,
            delay: i * 0.12,
            ease: 'power3.out'
        });
    });
    
    gsap.utils.toArray('.tech-card').forEach((card, i) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 88%',
                scroller: '[data-scroll-container]'
            },
            y: 40,
            opacity: 0,
            duration: 0.5,
            delay: i * 0.06,
            ease: 'power3.out'
        });
    });
    
    gsap.from('.contact-title .line', {
        scrollTrigger: {
            trigger: '.contact-title',
            start: 'top 85%',
            scroller: '[data-scroll-container]'
        },
        y: 70,
        opacity: 0,
        stagger: 0.1,
        duration: 0.9,
        ease: 'power4.out'
    });
    
    const statNumbers = document.querySelectorAll('.stat-number');
    statNumbers.forEach((stat) => {
        const target = parseInt(stat.getAttribute('data-target'));
        stat.innerHTML = '0';
        
        ScrollTrigger.create({
            trigger: stat,
            start: 'top 85%',
            scroller: '[data-scroll-container]',
            onEnter: () => {
                gsap.to(stat, {
                    innerHTML: target,
                    duration: 1.8,
                    snap: { innerHTML: 1 },
                    ease: 'power2.out',
                    onUpdate: function() {
                        const current = Math.floor(this.targets()[0].innerHTML);
                        const parent = stat.closest('.stat-box');
                        const label = parent.querySelector('.stat-label').textContent;
                        
                        if (label.includes('PLAYERS')) {
                            stat.innerHTML = current + 'M+';
                        } else {
                            stat.innerHTML = current + '+';
                        }
                    },
                    onComplete: function() {
                        const parent = stat.closest('.stat-box');
                        const label = parent.querySelector('.stat-label').textContent;
                        
                        if (label.includes('PLAYERS')) {
                            stat.innerHTML = target + 'M+';
                        } else {
                            stat.innerHTML = target + '+';
                        }
                    }
                });
            }
        });
    });
}

// ==================== NAVIGATION ====================
function setupSmoothNavigation() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);
            
            if (target && locoScroll) {
                locoScroll.scrollTo(target, {
                    offset: -100,
                    duration: 1000,
                    easing: [0.25, 0.0, 0.35, 1.0]
                });
            } else if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ==================== MOBILE MENU ====================
const menuToggle = document.querySelector('.menu-toggle');
const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');
const mobileMenuClose = document.querySelector('.mobile-menu-close');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

menuToggle.addEventListener('click', () => {
    mobileMenuOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    gsap.from('.mobile-nav-link', {
        x: -100,
        opacity: 0,
        stagger: 0.07,
        duration: 0.45,
        ease: 'power3.out'
    });
});

mobileMenuClose.addEventListener('click', () => {
    closeMobileMenu();
});

mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
        closeMobileMenu();
    });
});

function closeMobileMenu() {
    mobileMenuOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

// ==================== GLITCH EFFECT ====================
function addGlitchEffect() {
    const glitchElements = document.querySelectorAll('.glitch');
    
    glitchElements.forEach(elem => {
        setInterval(() => {
            if (Math.random() > 0.95) {
                elem.style.textShadow = `
                    ${Math.random() * 10 - 5}px ${Math.random() * 10 - 5}px 0 #00f0ff,
                    ${Math.random() * 10 - 5}px ${Math.random() * 10 - 5}px 0 #ff0080
                `;
                
                setTimeout(() => {
                    elem.style.textShadow = '0 0 20px var(--cyber-blue)';
                }, 50);
            }
        }, 100);
    });
}

// ==================== INITIALIZATION ====================
window.addEventListener('load', () => {
    document.body.style.overflow = 'hidden';
    
    new CustomCursor();
    new LoadingScreen();
    new ThreeScene();
    addGlitchEffect();
    
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            if (locoScroll) {
                locoScroll.update();
            }
            ScrollTrigger.refresh();
        }, 400);
    });
});