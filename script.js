
// IMAGE ZOOM

const images = document.querySelectorAll(".project img");
const lightbox = document.getElementById("lightbox");
const zoomImage = document.getElementById("zoomImage");
const closeBtn = document.getElementById("closeLightbox");

images.forEach(function(img) {
  img.addEventListener("click", function() {
    zoomImage.src = img.src;
    zoomImage.alt = img.alt;
    lightbox.style.display = "flex";
  });
});

function closeZoom() {
  if (lightbox) {
    lightbox.style.display = "none";
    zoomImage.src = "";
  }
}

if (closeBtn) {
  closeBtn.addEventListener("click", closeZoom);
}

if (lightbox) {
  lightbox.addEventListener("click", function(event) {
    if (event.target === lightbox) {
      closeZoom();
    }
  });
}

document.addEventListener("keydown", function(event) {
  if (event.key === "Escape") {
    closeZoom();
  }
});

// WHATSAPP PROJECT INQUIRY

const form = document.getElementById("inquiryForm");

if (form) {
  form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("clientName").value.trim();
    const phone = document.getElementById("clientPhone").value.trim();
    const service = document.getElementById("service").value;
    const budget = document.getElementById("budget").value;
    const deadline = document.getElementById("deadline").value;
    const details = document.getElementById("details").value.trim();

    if (!name || !phone || !service || !details) {
      alert("Please fill all required fields.");
      return;
    }

    const message =
`Hello Vikas Grapheo!

I want to discuss a new design project.

Name: ${name}
Mobile: ${phone}
Service: ${service}
Budget: ${budget}
Deadline: ${deadline || "Not specified"}

Project Details:
${details}

Please contact me regarding this project.`;

    const whatsappNumber = "917834905783";

    const whatsappURL =
      "https://wa.me/" + whatsappNumber +
      "?text=" + encodeURIComponent(message);

    window.open(whatsappURL, "_blank");
  });
}
