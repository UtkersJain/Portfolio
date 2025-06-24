const form = document.getElementById("contact-form");
  const alertBox = document.getElementById("form-alert");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent default submit

    const formData = new FormData(form);

    fetch("https://formspree.io/f/xkgrdpqa", { // 🔁 Replace with your Formspree ID
      method: "POST",
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(response => {
      if (response.ok) {
        showAlert("✅ Email sent successfully!", "success");
        form.reset();
      } else {
        showAlert("❌ Failed to send email. Please try again.", "danger");
      }
    })
    .catch(() => {
      showAlert("❌ An error occurred. Please try again later.", "danger");
    });
  });

  function showAlert(message, type) {
    alertBox.textContent = message;
    alertBox.className = `alert alert-${type} mt-3`;
    alertBox.classList.remove("d-none");

    // Auto-dismiss after 5 seconds
    setTimeout(() => {
      alertBox.classList.add("d-none");
    }, 5000);
  }
