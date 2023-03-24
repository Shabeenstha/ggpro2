const tabs = document.querySelectorAll('.tab');

tabs.forEach(tab => {
  tab.addEventListener('click', function() {
    // Remove the "selected" class from all tabs
    tabs.forEach(tab => tab.classList.remove('selected'));
    // Add the "selected" class to the clicked tab
    tab.classList.add('selected');
  });
});



