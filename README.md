# ⚡ GameBit - Next-Gen Game Design Agency

A stunning cyberpunk-themed game studio portfolio website featuring 3D graphics, smooth scrolling, GSAP animations, and futuristic UI design. Built to showcase AAA game development services with an immersive, interactive experience.

---

## 📌 What's This Project About?

**GameBit** is a **fictional game development agency portfolio** that demonstrates advanced web development skills with a focus on visual storytelling. It features a fully animated cyberpunk aesthetic with Three.js 3D elements, Locomotive Scroll, and GSAP-powered animations - all optimized for both desktop and mobile devices.

---

## ✨ Features & Visual Showcase

### 🎮 Immersive Cyberpunk Experience
- **3D Interactive Helmet** - Three.js powered GLTF model (Damaged Helmet) with mouse/touch-responsive rotation
- **Fallback Procedural Helmet** - Custom-built 3D helmet using geometric shapes when GLTF loading fails
- **Particle System** - 400 particles on desktop, 150 on mobile with neon color gradients
- **Cyber Grid Background** - Animated grid lines creating depth and movement
- **Glitch Effects** - Text glitch animations on logo and headings
- **Custom Cursor System** - Dot, outline, and trail following mouse (desktop only)
- **Scanline Animations** - Horizontal scanline effects on navigation and elements

### 📜 Locomotive Smooth Scroll
- **Ultra-Smooth Scrolling** - Locomotive Scroll v4 with optimized lerp values
- **Mobile Optimized** - Separate multipliers for mobile (1.8x), tablet (1.6x), and desktop (1.5x)
- **ScrollTrigger Integration** - GSAP ScrollTrigger synced with Locomotive for scroll-based animations
- **Touch Multiplier** - Enhanced touch scrolling with 2.5x multiplier
- **Auto-Update** - Scroll instance updates on resize and content changes

### 🎨 Advanced Animations

**Page Load Sequence:**
- Glitch logo animation with color separation effect
- Progress bar with simulated loading states
- Staggered entrance animations for all hero elements
- Timeline-based GSAP animations with custom easing

**Scroll Animations:**
- Section headers fade in from bottom
- Service cards slide up with rotation effect
- Game cards scale and fade in
- Tech cards appear with staggered delays
- Stat numbers count up from 0 to target value

**Interactive Hover Effects:**
- Buttons with gradient shimmer effect
- Cards with glow overlays and border animations
- Game images zoom on hover with overlay
- Navigation links with text reveal effect

### 🎯 Sections & Content

#### Hero Section
- Animated headline with line-by-line reveals
- Cyberpunk gradient text effects
- Three CTA buttons with glow effects
- Statistics counter (150+ games, 50M+ players, 25+ awards)
- Scroll indicator with animated pulse line

#### Services Section (3 Cards)
1. **AAA Game Development** - Full-cycle development with Unreal Engine, Unity
2. **VR/AR Experiences** - Meta Quest, PSVR2, ARKit integration
3. **Game Engine Tech** - Custom engines, C++, Vulkan, DirectX

Each card includes:
- Animated number badge
- Hover glow effects
- Technology tags
- Clipped polygon design

#### Games Showcase (3 Featured Games)
1. **Neon Uprising** - Action RPG (5M+ players, 9.2/10)
2. **Quantum Breach** - FPS (3M+ players, 8.9/10)
3. **Neural Nexus** - VR Adventure (1M+ players, 9.5/10)

Features:
- High-quality game images
- Play button overlay on hover
- Genre and platform badges
- Player count and ratings

#### Technology Stack
5 tech cards showcasing:
- Unreal Engine 5 (Nanite & Lumen)
- Unity (Cross-platform)
- Custom Engines (Proprietary tech)
- C++/C# (High-performance code)
- Blender/Maya (3D modeling)

#### Contact Section
- Large animated title
- CTA button with email link
- Gradient background effects

#### Footer
- Company information
- Social media links (Twitter, Discord, Twitch, YouTube)
- Service and company links
- Copyright information

---

## 🛠️ Technologies & Implementation

### Core Technologies
- **HTML5** - Semantic markup with proper SEO tags
- **CSS3** - Custom properties, clip-path, gradients, animations
- **Vanilla JavaScript (ES6+)** - Class-based architecture, async/await

### 3D Graphics & Animation
- **Three.js (r128)** - 3D scene, camera, renderer, lighting
- **GLTFLoader** - Loading external 3D models
- **GSAP 3.12.2** - Timeline animations, ScrollTrigger integration
- **Locomotive Scroll 4.1.4** - Smooth momentum-based scrolling

### Design System
- **Google Fonts** - Rajdhani (body), Orbitron (headings)
- **Remix Icons** - Icon library for UI elements
- **Cyberpunk Color Palette** - Pink (#ff0080), Blue (#00f0ff), Purple (#b000ff)

---

## 🎓 What I Learned Building This

### Three.js 3D Graphics
- **Scene Setup** - Creating scene, PerspectiveCamera with FOV adjustment for mobile
- **GLTF Model Loading** - Loading external models with progress tracking and error handling
- **Fallback 3D Geometry** - Creating procedural helmet using SphereGeometry, BoxGeometry, CylinderGeometry
- **Lighting System** - PointLight setup with neon colors, DirectionalLight, AmbientLight
- **Particle Systems** - BufferGeometry with position and color attributes
- **Mouse/Touch Tracking** - Normalized coordinates for camera and model rotation
- **Mobile Optimization** - Lower particle count, disabled antialiasing, reduced pixel ratio

### Locomotive Scroll Integration
- **ScrollerProxy** - Syncing Locomotive Scroll with GSAP ScrollTrigger
- **Custom Multipliers** - Different scroll speeds for mobile, tablet, desktop
- **Touch Handling** - Enhanced touch multiplier for better mobile experience
- **Update Mechanism** - Refreshing scroll instance on resize and content changes
- **Smooth Navigation** - ScrollTo method for anchor link navigation
- **Performance** - Optimized lerp values for smooth performance

### GSAP Advanced Animations
- **Timeline Sequencing** - Coordinating multiple animations with delays
- **ScrollTrigger** - Triggering animations based on scroll position with custom scroller
- **Stagger Effects** - Animating multiple elements with incremental delays
- **Number Counting** - Animating stat numbers from 0 to target value
- **Custom Easing** - power3.out, power4.out, back.out for natural motion
- **Transform Properties** - translateY, scale, rotation, opacity

### CSS Advanced Techniques
- **Clip-Path** - Creating polygon shapes for futuristic UI elements
- **Gradients** - Linear and radial gradients for cyberpunk aesthetic
- **Text Effects** - Glitch effect with ::before and ::after pseudo-elements
- **Background Animations** - Animated grid and scanline effects
- **Mix-Blend-Mode** - Cursor blend effects
- **Backdrop-Filter** - Glassmorphism effect on navigation

### Mobile Optimization
- **Device Detection** - Detecting mobile, tablet using userAgent and screen width
- **Touch Events** - Separate event handlers for touch vs mouse
- **Conditional Rendering** - Different particle counts and settings based on device
- **Performance Tuning** - Disabled antialiasing on mobile, lower pixel ratio
- **Responsive Layout** - Media queries for 480px, 768px, 1024px breakpoints
- **Touch Targets** - Larger button sizes on mobile devices

### Loading Screen Implementation
- **Simulated Progress** - Incremental progress updates with status messages
- **Animation Smoothing** - RequestAnimationframe for smooth progress bar animation
- **Status Messages** - Array of messages that change based on progress
- **Completion Callback** - Initializing scroll and animations after loading
- **Transition Effects** - Fade out and scale up animation on complete

---

## 📦 Project Architecture

```
gamebit/
├── index.html              # Main HTML (semantic, SEO-ready)
├── style.css              # Main styles (~2000 lines)
├── script.js              # Main JavaScript (~800 lines)
├── README.md              # This file
└── assets/
    └── images/            # Game screenshots (external URLs)
        ├── neon-uprising.jpg
        ├── quantum-breach.jpg
        └── neural-nexus.jpg
```

---

## 🚀 Key Technical Implementations

### Three.js Scene Initialization
```javascript
// Mobile-optimized scene setup
const fov = isMobile ? 60 : 50;
this.camera = new THREE.PerspectiveCamera(fov, aspect, 0.1, 1000);

// Adjust pixel ratio for mobile
const pixelRatio = isMobile ? 1 : Math.min(devicePixelRatio, 1.5);
this.renderer.setPixelRatio(pixelRatio);
this.renderer.setSize(window.innerWidth, window.innerHeight);
```

### Fallback 3D Helmet Creation
```javascript
createFallbackHelmet() {
    const helmetGroup = new THREE.Group();
    
    // Dome
    const domeGeometry = new THREE.SphereGeometry(1.2, 32, 32, 0, Math.PI * 2, 0, Math.PI / 1.5);
    const domeMaterial = new THREE.MeshStandardMaterial({
        color: 0x00f0ff,
        metalness: 0.9,
        emissive: 0x00f0ff
    });
    
    // Visor, panels, vent...
    // Position based on device
    helmetGroup.position.set(isMobile ? 0 : 4, 0, 0);
}
```

### Locomotive Scroll Setup
```javascript
locoScroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    multiplier: isMobile ? 1.2 : 1.5,
    lerp: isMobile ? 0.1 : 0.15,
    smartphone: { smooth: true, multiplier: 1.8 },
    tablet: { smooth: true, multiplier: 1.6 }
});
```

### GSAP Stat Counter Animation
```javascript
gsap.to(stat, {
    innerHTML: target,
    duration: 1.8,
    snap: { innerHTML: 1 },
    ease: 'power2.out',
    onUpdate: function() {
        const current = Math.floor(this.targets()[0].innerHTML);
        stat.innerHTML = current + '+';
    }
});
```

### Glitch Text Effect
```css
.glitch-logo::before {
    content: attr(data-text);
    position: absolute;
    left: 2px;
    text-shadow: -2px 0 var(--cyber-pink);
    clip: rect(44px, 450px, 56px, 0);
    animation: glitch-anim 5s infinite;
}
```

---

## 🎨 Design System

### Color Palette
```css
--cyber-pink: #ff0080;      /* Primary accent */
--cyber-blue: #00f0ff;      /* Secondary accent */
--cyber-purple: #b000ff;    /* Tertiary accent */
--cyber-green: #00ff88;     /* Success/tech */
--bg-dark: #0a0a0f;         /* Background */
--text-primary: #ffffff;    /* Headings */
--text-secondary: #a0a0b0;  /* Body text */
```

### Typography
- **Orbitron** - Display font for headings, logos, buttons (400-900 weight)
- **Rajdhani** - Body font for paragraphs, links (300-700 weight)
- **Font Sizes** - Clamp() for responsive scaling (e.g., clamp(40px, 10vw, 120px))

### Animation Timing
- **Fast** - 0.3s for hover states and micro-interactions
- **Medium** - 0.5s for card animations and page transitions
- **Slow** - 1-2s for page load and scroll animations
- **Easing** - power3.out (most common), power4.out (dramatic), back.out (bounce)

### Spacing System
- **Small** - 20px (gaps, padding)
- **Medium** - 40px (section margins)
- **Large** - 100-150px (section padding)

---

## 🔧 Special Features Explained

### Custom Cursor System (Desktop Only)
Three-layer cursor following mouse position:
- **Dot** - 8px circle with fast tracking (0.8 lerp)
- **Outline** - 40px circle with medium tracking (0.15 lerp)
- **Trail** - 20px blurred circle with slow tracking (0.1 lerp)
- **Hover Effects** - Scales up on interactive elements
- **Mobile** - Completely hidden on touch devices

### Loading Screen Simulation
Realistic loading experience:
- Progress increments by random 0-25% every 120ms
- Status messages change based on progress percentage
- Smooth progress bar animation using RAF
- Completion triggers scroll and animation initialization
- 0.8s fade out transition

### Mobile Menu
Full-screen overlay navigation:
- Slide-in animation from right
- Staggered link animations (0.07s delay)
- Number badges for each link
- Close button with X animation
- Auto-close on link click

### 3D Helmet Interactions
**Desktop:**
- Mouse X/Y controls rotation on all axes
- Tilt effect based on cursor position
- Floating animation with sine wave
- Scale pulse effect

**Mobile:**
- Touch position controls rotation
- Centered position instead of right-aligned
- Smaller scale (2.5 vs 4.5 units)
- Reduced rotation multiplier (0.2 vs 0.4)

### Stat Counter Animation
Numbers count up from 0:
- ScrollTrigger activates when in viewport
- GSAP animates innerHTML property
- onUpdate adds suffix (+ or M+)
- 1.8s duration with power2.out easing

---

## 📊 Performance Optimizations

### Mobile Optimizations
- **Particle Count** - 150 particles (vs 400 desktop)
- **Antialiasing** - Disabled on mobile
- **Pixel Ratio** - 1.0 (vs up to 1.5 desktop)
- **FOV** - 60° (vs 50° desktop) for better fit
- **Light Intensity** - Reduced on mobile
- **Camera Distance** - Closer (12 units vs 10)

### General Performance
- **RequestAnimationFrame** - Smooth 60fps animation loop
- **Debounced Resize** - 400ms delay before updating scroll
- **Lazy Loading** - Images load on scroll into view
- **CSS Containment** - Optimized paint and layout
- **Transform Animations** - GPU-accelerated transforms only

### Loading Strategy
- **Critical CSS** - Inline critical styles
- **Preconnect** - Fonts and CDN resources
- **Async Scripts** - Non-blocking script loading
- **Simulated Loading** - Engaging user during actual load

---

## 🌐 Browser Compatibility

✅ **Chrome 90+** (Full support)  
✅ **Firefox 88+** (Full support)  
✅ **Safari 14+** (Full support, may require -webkit- prefixes)  
✅ **Edge 90+** (Full support)  
✅ **Mobile Safari iOS 14+** (Touch-optimized)  
✅ **Chrome Mobile** (Touch-optimized)  

⚠️ **Note:** Custom cursor hidden on touch devices

---

## 📱 Responsive Breakpoints

```css
/* Tablet */
@media (max-width: 1024px) { ... }

/* Mobile */
@media (max-width: 768px) { ... }

/* Small Mobile */
@media (max-width: 480px) { ... }

/* Mobile Landscape */
@media (max-width: 896px) and (orientation: landscape) { ... }

/* Touch Devices */
@media (hover: none) { ... }
```

---

## 🐛 Error Handling & Fallbacks

### GLTF Loading Failure
- Console error logged
- Automatic switch to procedural helmet
- User sees seamless 3D experience

### GLTFLoader Missing
- Checks for THREE.GLTFLoader availability
- Falls back to procedural geometry immediately

### Locomotive Scroll Failure
- Native smooth scroll as fallback
- ScrollTrigger still functions

### Touch Device Detection
- Cursor completely hidden (display: none)
- Touch-optimized active states
- Larger touch targets

---

## 🎮 Future Enhancements

- [ ] Add more game showcases with filtering
- [ ] Implement video backgrounds for game cards
- [ ] Add team member profiles section
- [ ] Create blog section for dev insights
- [ ] Add particle interaction on click
- [ ] Implement sound effects for UI interactions
- [ ] Add more 3D models with switching
- [ ] Create case study pages for each game
- [ ] Add contact form with backend integration
- [ ] Implement dark/light theme toggle

---

## 📊 Project Stats

- **Total Lines of Code** - ~3500+
- **Sections** - 6 main sections
- **Animations** - 30+ unique animations
- **3D Elements** - 1 GLTF model + fallback + 400 particles
- **Interactive Elements** - 20+ (buttons, cards, links)
- **Responsive Breakpoints** - 5
- **Technologies** - 8 core libraries
- **Load Time** - < 3s on 4G
- **Lighthouse Score** - 90+ (Performance)

---

## 🎯 Key Learnings & Takeaways

This project taught me:

1. **3D Graphics in Production** - Integrating Three.js with fallback strategies
2. **Smooth Scroll Implementation** - Locomotive Scroll with GSAP ScrollTrigger
3. **Mobile Optimization** - Adaptive rendering based on device capabilities
4. **Cyberpunk Aesthetics** - Creating futuristic UI with CSS effects
5. **Class-Based JavaScript** - Organizing complex logic into maintainable classes
6. **Performance Tuning** - Balancing visual quality with performance
7. **Error Handling** - Graceful degradation when features fail
8. **Touch Optimization** - Separate logic for touch vs mouse interactions

---

## 📄 License

MIT License - Free for learning and personal projects.

---

## 👤 About the Developer

**Anshu Raj** - Full-Stack Developer & Creative Coder

- 🌐 Portfolio: [https://anshu-rajportfolio.netlify.app]
- 📧 Email: rajanshu2123@gmail.com
- 💼 LinkedIn: [linkedin.com/in/anshu-raj-tech](https://www.linkedin.com/in/anshu-raj-tech/)
- 💻 GitHub: [@anshu-c8NETed](https://github.com/anshu-c8NETed)
- 🎯 LeetCode: [anshxu](https://leetcode.com/u/anshxu/)

---

## 🙏 Acknowledgments

- **Three.js** - For making WebGL accessible
- **GSAP** - For professional animation capabilities
- **Locomotive Scroll** - For buttery-smooth scrolling
- **Khronos Group** - For GLTF sample models
- **Google Fonts** - For Orbitron and Rajdhani typefaces

---

⚡ **If you found this inspiring, give it a star!**

Made with ⚡, 🎮, and countless debugging sessions by Anshu Raj
