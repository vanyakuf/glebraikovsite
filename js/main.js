window.addEventListener('scroll', () => {
  const footerLink = document.querySelector('.footer__email-link');
  if (!footerLink) return;

  const scrollPosition = window.innerHeight + window.scrollY;
  const documentHeight = document.body.offsetHeight;
  const offset = (70 / 1920) * window.innerWidth;

  if (scrollPosition >= documentHeight - offset) {
    footerLink.classList.add('animate-underline');
  } else {
    footerLink.classList.remove('animate-underline');
  }
});

// Ожидаем, когда хэдер подгрузится и появятся нужные элементы
document.addEventListener("DOMContentLoaded", () => {
  const checkForHeader = setInterval(() => {
    const burger = document.getElementById('burger');
    const mobileMenu = document.getElementById('mobileMenu');

    if (burger && mobileMenu) {
      clearInterval(checkForHeader);

      burger.addEventListener('click', () => {
        burger.classList.toggle('active');
        mobileMenu.classList.toggle('active');
      });
    }
  }, 50);
});


// Projects Preview Image Swap
document.addEventListener('DOMContentLoaded', () => {
  const previewImage = document.getElementById('preview-image');
  const items = document.querySelectorAll('.projects__list li');

  items.forEach(item => {
    const imageSrc = item.dataset.image;

    item.addEventListener('mouseenter', () => {
      if (previewImage && imageSrc) {
        previewImage.style.opacity = 0;
        setTimeout(() => {
          previewImage.src = imageSrc;
          previewImage.style.opacity = 1;
        }, 150);
      }
    });

    item.addEventListener('mouseleave', () => {
      if (previewImage) {
        previewImage.style.opacity = 0;
        setTimeout(() => {
          previewImage.src = '/assets/images/placeholder.jpg';
          previewImage.style.opacity = 1;
        }, 150);
      }
    });
  });
});

// Sticky .projects__left stop at bottom of .projects (только на десктопе)
window.addEventListener('scroll', () => {
    if (window.innerWidth <= 760) return; // Не применять на мобилках
  
    const left = document.querySelector('.projects__left');
    const wrapper = document.querySelector('.projects__left-wrapper');
    const container = document.querySelector('.projects');
  
    if (!left || !wrapper || !container) return;
  
    const scrollY = window.scrollY;
    const wrapperTop = wrapper.offsetTop;
    const containerBottom = container.offsetTop + container.offsetHeight;
    const leftHeight = left.offsetHeight;
  
    const bottomOffset = (48 / 1920) * window.innerWidth;
  
    const stopY = containerBottom - leftHeight - bottomOffset;
  
    if (scrollY >= stopY - wrapperTop) {
      left.style.position = 'absolute';
      left.style.top = `${container.offsetHeight - leftHeight - bottomOffset}px`;
    } else {
      left.style.position = 'fixed';
      left.style.top = `calc(200 / 1920 * 100vw)`;
    }
  });

  document.addEventListener('DOMContentLoaded', () => {
    const isMobile = window.innerWidth <= 760;
  
    if (!isMobile) return;
  
    const items = document.querySelectorAll('.projects__list li');
  
    items.forEach(item => {
      const imageSrc = item.dataset.image;
      const link = item.querySelector('a');
  
      if (imageSrc && link && !link.querySelector('img.project-mobile')) {
        const img = document.createElement('img');
        img.src = imageSrc;
        img.alt = 'Project Preview';
        img.classList.add('project-mobile');
        link.prepend(img);
      }
    });
  });

  
  document.addEventListener('DOMContentLoaded', function () {
  // Авторасширение textarea
  const textarea = document.querySelector('textarea[name="message"]');
  if (textarea) {
    textarea.addEventListener('input', function() {
      this.style.height = 'auto';
      this.style.height = this.scrollHeight + 'px';
    });
  }

});

document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.contact__form');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const formData = new FormData(form);

      fetch(form.action, {
        method: 'POST',
        body: formData
      })
      .then(response => response.text())
      .then(message => {
        showNotification(message, true);
        form.reset();
      })
      .catch(error => {
        showNotification('An error occurred. Please try again.', false);
      });
    });
  }

  function showNotification(message, isSuccess) {
    const notification = document.createElement('div');
    notification.className = 'notification' + (isSuccess ? ' success' : ' error');
    notification.textContent = message;

    document.body.appendChild(notification);

    setTimeout(() => {
      notification.remove();
    }, 4000);
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.projects__list li');

  items.forEach(item => {
    const imageSrc = item.dataset.image;
    if (imageSrc) {
      const img = new Image();
      img.src = imageSrc;
    }
  });
});