{
  // Selecting all bars instead of just the first one
  const elements = document.querySelectorAll('*[data-scroll]');

  const config = {
    rootMargin: '0px',
    threshold: [0.75]
  };  

  observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.intersectionRatio > 0) {
        entry.target.classList.add('animate');
      } else {
        entry.target.classList.remove('animate');
      }
    });
  }, config);
  
  elements.forEach(el => {
    observer.observe(el);
  });

}