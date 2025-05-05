function showSection(sectionId) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
      section.classList.add('hidden');
    });
  
    const sectionToShow = document.getElementById(sectionId);
    sectionToShow.classList.remove('hidden');
  
    // Scroll al titolo corretto
    const headers = document.querySelectorAll('.section-header');
    headers.forEach(header => {
      const title = header.querySelector('h1').textContent.toLowerCase();
      if (title === sectionId) {
        header.scrollIntoView({ behavior: 'smooth' });
      } else{
        sectionToShow.classList.remove('hidden')
      }
    });
  }
  

  function toggleSection(sectionId) {
    const section = document.getElementById(sectionId);
    const isVisible = !section.classList.contains('hidden');
    
    if (isVisible) {
      section.classList.add('hidden');
    } else {
      section.classList.remove('hidden');
    }
  
    // Cambia l'iconcina o lo stile del titolo
    const header = document.getElementById(`${sectionId}-header`);
    const icon = header.querySelector('i');
    
    if (isVisible) {
      icon.classList.remove('fas', 'fa-minus');
      icon.classList.add('fas', 'fa-plus');
    } else {
      icon.classList.remove('fas', 'fa-plus');
      icon.classList.add('fas', 'fa-minus');
    }
  }
  