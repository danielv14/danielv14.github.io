const portfolioBtnClick = () => {
  const target = document.getElementById('projects')
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' });
  }
}