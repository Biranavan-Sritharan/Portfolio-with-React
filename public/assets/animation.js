document.querySelector('html').addEventListener('mousemove', eyeball);

function eyeball(event) {
    const eyes = document.querySelectorAll('.pupil');
    eyes.forEach(function(eye) {
        // Center of the eye (parent container of pupil)
        let eyeCenterX = (eye.parentElement.getBoundingClientRect().left) + (eye.parentElement.clientWidth / 2);
        let eyeCenterY = (eye.parentElement.getBoundingClientRect().top) + (eye.parentElement.clientHeight / 2);

        // Angle between the mouse position and the eye center
        let radian = Math.atan2(event.pageY - eyeCenterY, event.pageX - eyeCenterX);

        // Calculates the position for pupils based on the angle
        let distance = 20; // Distance the pupil moves inside the eye
        let pupilX = Math.cos(radian) * distance;
        let pupilY = Math.sin(radian) * distance;

        // Moves the actual pupils inside the eye
        eye.style.transform = `translate(${pupilX}px, ${pupilY}px)`;
    });
}

(function() {
    console.clear();
    
    const follower = document.querySelector('#follower');
    
    let posX = 0;
    let posY = 0;
    let mouseX = 0;
    let mouseY = 0;
    
    const ease = 0.1;
    
    function easeTo() {    
      const followerBounds = follower.getBoundingClientRect();
      
      const dX = mouseX - (followerBounds.left - 10);
      const dY = mouseY - (followerBounds.top - 10);
      
      posX += dX * ease;
      posY += dY * ease;
    }
    
    function update() {
      easeTo();
      follower.style.transform = `translate3d(${posX}px, ${posY}px, 0)`;  
      requestAnimationFrame(update);
    }
    
    function setCoords(e) {
      mouseX = e.clientX;
      mouseY = e.clientY;
    }
    
      document.onmousemove = setCoords;
    update();
  })();