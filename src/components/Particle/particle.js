import gsap from 'gsap'

function random(low, high) {
    return Math.random() * (high - low) + low;
  }
  
export default class Visual {
  constructor(canvas) {
    this.canvas = canvas;
    this.context = this.canvas.getContext('2d');
    this.canvasY = this.canvas.offsetTop;
    this.canvasWidth = 0;
    this.canvasHeight = 0;
    this.particleLength = 150;
    this.particles = [];
    this.particleMaxRadius = 8;

    this.handleMouseMoveBind = this.handleMouseMove.bind(this);
    this.handleClickBind = this.handleClick.bind(this);
    this.handleResizeBind = this.handleResize.bind(this);

    this.initialize();
    this.render();
  }

  initialize() {
    this.resizeCanvas();
    for (let i = 0; i < this.particleLength; i++) {
      this.particles.push(this.createParticle(i));
    }
    this.bind();
  }

  bind() {
    document.body.addEventListener('mousemove', this.handleMouseMoveBind, false);
    document.body.addEventListener('click', this.handleClickBind, false);
    window.addEventListener('resize', this.handleResizeBind, false);
  }
  
  unbind() {
    document.body.removeEventListener('mousemove', this.handleMouseMoveBind, false);
    document.body.removeEventListener('click', this.handleClickBind, false);
    window.removeEventListener('resize', this.handleResizeBind, false);
  }

  handleMouseMove(e) {
    this.enlargeParticle(e.clientX, e.clientY);
  }

  handleClick(e) {
    this.burstParticle(e.clientX, e.clientY);
  }

  handleResize() {
    this.resizeCanvas();
  }

  resizeCanvas() {
    this.canvasWidth = this.canvas.offsetWidth;
    this.canvasHeight = this.canvas.offsetHeight;
    this.canvas.width = this.canvasWidth * window.devicePixelRatio;
    this.canvas.height = this.canvasHeight * window.devicePixelRatio;
    this.context = this.canvas.getContext('2d');
    this.context.scale(window.devicePixelRatio, window.devicePixelRatio);
  }

  createParticle(id, isRecreate) {
    const radius = random(1, this.particleMaxRadius);
    const x = isRecreate ? -radius - random(this.particleMaxRadius * 2, this.canvasWidth) : random(0, this.canvasWidth);
    let y = random(this.canvasHeight / 2 - 160, this.canvasHeight / 2 + 160);
    y += random(-100, 100);
    const alpha = random(0.05, 1);

    return {
      id: id,
      x: x,
      y: y,
      startY: y,
      radius: radius,
      defaultRadius: radius,
      startAngle: 0,
      endAngle: Math.PI * 2,
      alpha: alpha,
      color: { r: 116, g: 180, b: 225 },
      speed: alpha + 1,
      amplitude: random(50, 200),
      isBurst: false
    };
  }

  drawParticles() {
    this.particles.forEach(particle => {

      this.moveParticle(particle);

      this.context.beginPath();
      this.context.fillStyle = `rgba(${particle.color.r}, ${particle.color.g}, ${particle.color.b}, ${particle.alpha})`;
      this.context.arc(particle.x, particle.y, particle.radius, particle.startAngle, particle.endAngle);
      this.context.fill();
    });
  }

  moveParticle(particle) {
    particle.x += particle.speed;
    particle.y = particle.startY + particle.amplitude * Math.sin(((particle.x / 5) * Math.PI) / 180);
  }

  enlargeParticle(clientX, clientY) {
    this.particles.forEach(particle => {
      if (particle.isBurst) return;

      const distance = Math.hypot(particle.x - clientX, particle.y - clientY + this.canvasY);

      if (distance <= 100) {
        const scaling = (100 - distance) / 1.5;
        gsap.to(particle, {
          duration: 0.5,
          radius: particle.defaultRadius + scaling,
          ease: "power2.out"
        });
      } else {
        gsap.to(particle, {
          duration: 0.5,
          radius: particle.defaultRadius,
          ease: "power2.out"
        });
      }
    });
  }

  burstParticle(clientX, clientY) {
    this.particles.forEach(particle => {
      const distance = Math.hypot(particle.x - clientX, particle.y - clientY + this.canvasY);

      if (distance <= 100) {

        particle.isBurst = true;
        gsap.to(particle, {
          duration: 0.5,
          radius: particle.defaultRadius + 200,
          alpha: 0,
          ease: "power2.out",
          onComplete: () => {
            this.particles[particle.id] = this.createParticle(particle.id, true);
          }
        });
      }
    });
  }

  render() {
    this.context.clearRect(0, 0, this.canvasWidth + this.particleMaxRadius * 2, this.canvasHeight);

    this.drawParticles();

    this.particles.forEach(particle => {
      if (particle.x - particle.radius >= this.canvasWidth) {
        this.particles[particle.id] = this.createParticle(particle.id, true);
      }
    });

    requestAnimationFrame(this.render.bind(this));
  }
}