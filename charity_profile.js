document.addEventListener('DOMContentLoaded', function() {
  const volunteerButton = document.getElementById('volunteerButton');
  const volunteerForm = document.getElementById('volunteerForm');

  volunteerButton.addEventListener('click', function() {
    volunteerForm.style.display = 'block';
  });
});
const additionalDetailsElement = document.getElementById('additionalDetails');

additionalDetailsElement.addEventListener('mouseover', function() {
  // Display additional charity details
});

additionalDetailsElement.addEventListener('mouseout', function() {
  // Hide additional charity details
});
