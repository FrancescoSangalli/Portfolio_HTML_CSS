const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate__animated');
      entry.target.classList.add('animate__fadeIn');
    }
  });
});

observer.observe(document.querySelector('.photo-1'));
observer.observe(document.querySelector('.photo-2'));
observer.observe(document.querySelector('.photo-3'));
observer.observe(document.querySelector('.photo-4'));
