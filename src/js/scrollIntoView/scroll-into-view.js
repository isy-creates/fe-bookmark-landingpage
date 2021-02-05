{
  // Selecting all bars instead of just the first one
  const elements = document.querySelectorAll('*[data-scroll]');

  const config = {
    rootMargin: '0px',
    threshold: [0.8]
  };  

  observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.intersectionRatio > 0.8) {
        entry.target.classList.add('animate');
      } 
    });
  }, config );
  
  elements.forEach(el => {
    observer.observe(el);
  });

}

