document.addEventListener("DOMContentLoaded", function () {
  const petalsContainer = document.getElementById("petals");
  const petals2Container = document.getElementById("petals2");
  petalsContainer.style.perspective = "600px";

  const petalCount = 50;
  const petalCount2 = 20;
  const w = window.innerWidth, h = window.innerHeight;
  const petals = [];
  
  let animationFrameId = null;

  function R(min, max) {
    return min + Math.random() * (max - min);
  }

  const Easing = {
    linear: t => t,
    sineInOut: t => -(Math.cos(Math.PI * t) - 1) / 2
  };

  function createPetals(container, count) {
    const fragment = document.createDocumentFragment();
    
    for (let i = 0; i < count; i++) {
      const x = R(0, w);
      const y = R(-200, -150);
      const z = R(-200, 200);
      
      const petal = document.createElement("div");
      petal.className = "petal";
      petal.style.transform = `translate3d(${x}px, ${y}px, ${z}px)`;
      petal.style.filter = `hue-rotate(${R(0, 360)}deg)`;
      petal.style.transformStyle = "preserve-3d";
      
      fragment.appendChild(petal);
      
      const fallDuration = R(7000, 15000);
      const xMoveDuration = R(4000, 8000);
      const rotateDuration = R(2000, 8000);
      const endRotZ = R(0, 180);
      const endRotX = R(0, 360);
      const endRotY = R(0, 360);
      
      const now = performance.now();
      
      petals.push({
        element: petal,
        initialX: x,
        initialY: y,
        initialZ: z,
        animations: {
          fall: {
            startTime: now - (15000 * Math.random()),
            duration: fallDuration,
            startY: y,
            endY: h + 200,
            easing: Easing.linear
          },
          xMove: {
            startTime: now,
            duration: xMoveDuration,
            startX: x,
            endX: x + 100,
            startRotZ: 0,
            endRotZ: endRotZ,
            direction: 1,
            easing: Easing.sineInOut
          },
          rotate3D: {
            startTime: now - (5000 * Math.random()),
            duration: rotateDuration,
            startRotX: 0,
            endRotX: endRotX,
            startRotY: 0,
            endRotY: endRotY,
            direction: 1,
            easing: Easing.sineInOut
          }
        }
      });
    }
    
    container.appendChild(fragment);
  }

  createPetals(petalsContainer, petalCount);
  createPetals(petals2Container, petalCount2);

  function animate(timestamp) {
    // petal position and rotation
    for (let i = 0; i < petals.length; i++) {
      const petal = petals[i];
      const animations = petal.animations;
      
      // falling anim
      const fallAnim = animations.fall;
      let elapsed = (timestamp - fallAnim.startTime) % fallAnim.duration;
      let progress = elapsed / fallAnim.duration;
      let y = fallAnim.startY + (fallAnim.endY - fallAnim.startY) * fallAnim.easing(progress);
      
      // horizontal movement
      const xMoveAnim = animations.xMove;
      elapsed = timestamp - xMoveAnim.startTime;
      if (elapsed >= xMoveAnim.duration) {
        xMoveAnim.direction *= -1;
        xMoveAnim.startTime = timestamp;
        elapsed = 0;
      }
      
      progress = elapsed / xMoveAnim.duration;
      const easeValue = xMoveAnim.easing(progress);
      
      let x, rotZ;
      if (xMoveAnim.direction === 1) {
        x = xMoveAnim.startX + (xMoveAnim.endX - xMoveAnim.startX) * easeValue;
        rotZ = xMoveAnim.startRotZ + (xMoveAnim.endRotZ - xMoveAnim.startRotZ) * easeValue;
      } else {
        x = xMoveAnim.endX - (xMoveAnim.endX - xMoveAnim.startX) * easeValue;
        rotZ = xMoveAnim.endRotZ - (xMoveAnim.endRotZ - xMoveAnim.startRotZ) * easeValue;
      }
      
      // 3d rotation
      const rotateAnim = animations.rotate3D;
      elapsed = timestamp - rotateAnim.startTime;
      if (elapsed >= rotateAnim.duration) {
        rotateAnim.direction *= -1;
        rotateAnim.startTime = timestamp;
        elapsed = 0;
      }
      
      progress = elapsed / rotateAnim.duration;
      const rotEaseValue = rotateAnim.easing(progress);
      
      let rotX, rotY;
      if (rotateAnim.direction === 1) {
        rotX = rotateAnim.startRotX + (rotateAnim.endRotX - rotateAnim.startRotX) * rotEaseValue;
        rotY = rotateAnim.startRotY + (rotateAnim.endRotY - rotateAnim.startRotY) * rotEaseValue;
      } else {
        rotX = rotateAnim.endRotX - (rotateAnim.endRotX - rotateAnim.startRotX) * rotEaseValue;
        rotY = rotateAnim.endRotY - (rotateAnim.endRotY - rotateAnim.startRotY) * rotEaseValue;
      }
      
      petal.element.style.transform = 
        'translate3d(' + x + 'px,' + y + 'px,' + petal.initialZ + 'px)' +
        'rotateX(' + rotX + 'deg)' +
        'rotateY(' + rotY + 'deg)' +
        'rotateZ(' + rotZ + 'deg)';
    }
    
    animationFrameId = requestAnimationFrame(animate);
  }
  
  // start animation loop
  animationFrameId = requestAnimationFrame(animate);
  
  // handle visibility change
  document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
        animationFrameId = null;
      }
    } else {
      if (!animationFrameId) {
        animationFrameId = requestAnimationFrame(animate);
      }
    }
  });
  
  // window resizing
  let resizeTimeout;
  window.addEventListener('resize', function() {
    // debounce event
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(function() {
      const newW = window.innerWidth;
      const newH = window.innerHeight;
      
      // update if dimensions changed
      if (w !== newW || h !== newH) {
        // end points for falling
        for (let i = 0; i < petals.length; i++) {
          petals[i].animations.fall.endY = newH + 200;
        }
      }
    }, 200);
  });
});
