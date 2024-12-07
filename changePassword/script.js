function toggleVisibility(inputId) {
    const input = document.getElementById(inputId);
    input.type = input.type === 'password' ? 'text' : 'password';
  }
  
  document.getElementById('confirm-password').addEventListener('input', function () {
    const newPassword = document.getElementById('new-password').value;
    const confirmPassword = this.value;
    const matchStatus = document.getElementById('match-status');
  
    if (confirmPassword !== newPassword) {
      matchStatus.textContent = 'Passwords do not match!';
      matchStatus.style.color = 'red';
    } else {
      matchStatus.textContent = 'Passwords match!';
      matchStatus.style.color = 'green';
    }
  });
  
  document.getElementById('change-password-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const currentPassword = document.getElementById('current-password').value;
    const newPassword = document.getElementById('new-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
  
    if (newPassword && confirmPassword && newPassword === confirmPassword) {
      location.href="/index.html"
      alert('Password changed successfully!');
    } else {
      alert('Please ensure passwords match.');
    }
  });
  