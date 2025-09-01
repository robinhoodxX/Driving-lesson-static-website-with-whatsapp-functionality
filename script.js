// Get URL parameter
const urlParams = new URLSearchParams(window.location.search);
const packageType = urlParams.get('package');

// Show correct form and lock scroll
if (packageType === 'beginner') {
  document.getElementById('beginnerform').style.display = 'block';
  document.body.classList.add('lock-scroll'); // disable scrolling
}
else if (packageType === 'highway') {
  document.getElementById('highwayform').style.display = 'block';
  document.body.classList.add('lock-scroll'); // disable scrolling
}
else if (packageType === 'examsuccesssec') {
  document.getElementById('examSuccessForm').style.display = 'block';
  document.body.classList.add('lock-scroll'); // disable scrolling
}
else if (packageType === 'refreshercoursesec') {
  document.getElementById('refresherCourseForm').style.display = 'block';
  document.body.classList.add('lock-scroll'); // disable scrolling
}
else if (packageType === 'twentyhour') {
  document.getElementById('twentyhourForm').style.display = 'block';
  document.body.classList.add('lock-scroll'); // disable scrolling
}
else if (packageType === 'thirtyhour') {
  document.getElementById('thirtyhourForm').style.display = 'block';
  document.body.classList.add('lock-scroll'); // disable scrolling
}
