document.querySelectorAll("form[id^='contactForm']").forEach(form => {
  const resetBtn = form.querySelector("#resetBtn");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const packageTitle = form.closest("section").querySelector(".forum-header h5")?.textContent.trim() || "Package";

    // Collect fields
    const firstName = form.querySelector("[name='firstName']");
    const phone = form.querySelector("[name='phone']");
    const postcode = form.querySelector("[name='postcode']");
    const email = form.querySelector("[name='email']");
    const carType = form.querySelector("[name='carType']");
    const carModel = form.querySelector("[name='carModel']");
    const messageField = form.querySelector("[name='message']");

    let ok = true;

    // Simple validator helper
    function check(field, minLength, msg, pattern) {
      if (!field) return; // skip if field doesn't exist
      const errorEl = form.querySelector(`#err-${field.name}`);
      if (!field.value.trim() ||
        (minLength && field.value.trim().length < minLength) ||
        (pattern && !pattern.test(field.value.trim()))) {
        if (errorEl) errorEl.textContent = msg;
        ok = false;
      } else {
        if (errorEl) errorEl.textContent = "";
      }
    }

    // Validations
    check(firstName, 2, "Please enter your first name (2+ characters).");
    check(phone, 0, "Please enter a valid phone (digits, optional +).", /^\+?[0-9\s\-]{7,20}$/);
    check(email, 0, "Please enter a valid email address.", /^[^\s@]+@[^\s@]+\.[^\s@]+$/);
    check(messageField, 10, "Please write a message (10+ characters).");

    if (!ok) return; // stop if errors

    // Build WhatsApp message
    let message =
      packageTitle + "\n\n" +
      "First Name: " + firstName.value.trim() + "\n" +
      "Phone: " + phone.value.trim() + "\n" +
      "Postcode: " + (postcode?.value.trim() || "") + "\n" +
      "Email: " + email.value.trim() + "\n";

    if (carType && carType.value.trim() !== "") {
      message += "Car Type: " + carType.value.trim() + "\n";
    }
    if (carModel && carModel.value.trim() !== "") {
      message += "Car Model: " + carModel.value.trim() + "\n";
    }

    message += "Message: " + messageField.value.trim();

    const encodedMessage = encodeURIComponent(message);
    const phoneNumber = "447746243128"; // UK number

    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");

    form.reset(); // clear after successful send
    form.querySelectorAll(".error-text").forEach(err => err.textContent = "");
  });

  // ✅ Reset button clears form + errors
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      form.reset();
      form.querySelectorAll(".error-text").forEach(err => err.textContent = "");
    });
  }
});
