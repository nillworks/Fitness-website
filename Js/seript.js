const ulMenu = document.getElementById('NavigationMenu');
const MobileBars = document.getElementById('mobile_btn');

const openIcon = document.getElementById('openIcon');
const closeIcon = document.getElementById('closeIcon');

const mobileBarsClickFun = () => {};

MobileBars.addEventListener('click', () => {
  ulMenu.classList.toggle('translate-x-full');
  ulMenu.classList.toggle('translate-x-0');

  // icon toggle
  openIcon.classList.toggle('hidden');
  closeIcon.classList.toggle('hidden');
});
