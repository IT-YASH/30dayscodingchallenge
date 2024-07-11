function startAnimation() {
    const paths = document.querySelectorAll('path');
    paths.forEach(path => {
      path.style.strokeDashoffset = '0';
    });
  }
  
  function resetAnimation() {
    const paths = document.querySelectorAll('path');
    paths.forEach(path => {
      path.style.transition = 'none';
      path.style.strokeDashoffset = '400';
      setTimeout(() => path.style.transition = 'stroke-dashoffset 5s linear', 0);
    });
  }
  