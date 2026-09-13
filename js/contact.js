/* ==============================================================
   contact.js – Star Shia Quran Academy (Contact Form with Formspree)
   ============================================================== */

document.addEventListener('DOMContentLoaded', function () {
    'use strict';

    const form = document.getElementById('contactForm');
    const successDiv = document.getElementById('formSuccess');

    // ----- Individual field references -----
    const fullName = document.getElementById('fullName');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const courseInterest = document.getElementById('courseInterest');
    const message = document.getElementById('message');
    const consent = document.getElementById('consent');

    // ----- Error message elements -----
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const messageError = document.getElementById('messageError');
    const consentError = document.getElementById('consentError');

    // ----- Helper: Show/hide error -----
    function setFieldError(field, errorElement, isValid) {
        const formGroup = field.closest('.form-group');
        if (isValid) {
            formGroup.classList.remove('error');
        } else {
            formGroup.classList.add('error');
        }
    }

    // ----- Validation functions -----
    function validateName() {
        const isValid = fullName.value.trim().length >= 2;
        setFieldError(fullName, nameError, isValid);
        return isValid;
    }

    function validateEmail() {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isValid = emailRegex.test(email.value.trim());
        setFieldError(email, emailError, isValid);
        return isValid;
    }

    function validateMessage() {
        const isValid = message.value.trim().length >= 10;
        setFieldError(message, messageError, isValid);
        return isValid;
    }

    function validateConsent() {
        const isValid = consent.checked;
        const formGroup = consent.closest('.form-group');
        if (isValid) {
            formGroup.classList.remove('error');
        } else {
            formGroup.classList.add('error');
        }
        return isValid;
    }

    // ----- Real-time validation on blur -----
    fullName.addEventListener('blur', validateName);
    email.addEventListener('blur', validateEmail);
    message.addEventListener('blur', validateMessage);
    consent.addEventListener('change', validateConsent);

    // ----- Form submission with Formspree -----
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        // Run all validations
        const isNameValid = validateName();
        const isEmailValid = validateEmail();
        const isMessageValid = validateMessage();
        const isConsentValid = validateConsent();

        if (isNameValid && isEmailValid && isMessageValid && isConsentValid) {
            const submitBtn = form.querySelector('.submit-btn');
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';

            // Prepare form data
            const formData = new FormData(form);

            // Send to Formspree
            fetch(form.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            })
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error('Network response was not ok.');
            })
            .then(data => {
                // Success
                form.style.display = 'none';
                successDiv.style.display = 'block';
                successDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
                
                // Log success
                console.log('Form submitted successfully:', data);
            })
            .catch(error => {
                // Error
                console.error('Error:', error);
                alert('There was an error sending your message. Please try again.');
                submitBtn.disabled = false;
                submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
            });
        } else {
            // Focus on the first invalid field
            const firstError = form.querySelector('.form-group.error input, .form-group.error textarea, .form-group.error select');
            if (firstError) {
                firstError.focus();
            }
        }
    });
});

// After form successfully submits
gtag('event', 'form_submit', {
    'form_name': 'contact_form',
    'page_location': window.location.href
});