window.MathJax = {
  tex: {
    inlineMath: [['$', '$'], ['\\(', '\\)']],
    displayMath: [['$$', '$$'], ['\\[', '\\]']],
    processEscapes: true
  }
};

const mathjaxScript = document.createElement('script');
mathjaxScript.src =
  'https://cdn.jsdelivr.net/npm/mathjax@4/tex-chtml.js';
mathjaxScript.async = true;
document.head.appendChild(mathjaxScript);