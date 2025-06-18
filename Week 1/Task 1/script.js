    function addProgressBar() {
      const container = document.getElementById('progress-container');

      const progressBar = document.createElement('div');
      progressBar.className = 'progress-bar';

      const fill = document.createElement('div');
      fill.className = 'fill';
      fill.dataset.progress = '0';

      progressBar.appendChild(fill);
      container.appendChild(progressBar);

      progressBar.addEventListener('click', () => {
        let currentProgress = parseInt(fill.dataset.progress);
        let newProgress = Math.min(currentProgress + 10, 100);
        fill.dataset.progress = newProgress;
        fill.style.width = newProgress + '%';
      });
    }
  