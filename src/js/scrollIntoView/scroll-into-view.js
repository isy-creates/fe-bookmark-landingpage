{
  // Selecting all bars instead of just the first one
  const elements = document.querySelectorAll('*[data-scroll]');

  const config = {
    rootMargin: '0px',
    threshold: [0.9]
  };  

  observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (window.innerWidth > 1200 && entry.intersectionRatio > 0.9) {
        entry.target.classList.add('animate');
      } 
    });
  }, config );
  
  elements.forEach(el => {
    observer.observe(el);
  });

}

