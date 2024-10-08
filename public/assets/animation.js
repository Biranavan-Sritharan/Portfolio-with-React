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