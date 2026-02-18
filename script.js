function scrollToSection(id) {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        } else {
          console.error(`Element with ID "${id}" not found.`);
        }
}