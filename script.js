const menuIcon = document.querySelector('.menu_icon');
  const mobileMenu = document.querySelector('.menu_mobile');
  const closeIcon = document.querySelector('.close_icon');

  menuIcon.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
  });

  closeIcon.addEventListener('click',()=>{
    mobileMenu.classList.remove('active');
  })

  document.querySelectorAll('.menu_mobile a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
  });
});