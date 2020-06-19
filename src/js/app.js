/* eslint-disable linebreak-style */
const imgs = Array.from(document.getElementsByTagName('img'));
export default function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
setInterval(() => {
  const fieldappearance = getRandomInt(imgs.length);
  for (const img of imgs) {
    if (img.classList.contains('appearance')) {
      img.classList.remove('appearance');
    }
  }
  imgs[fieldappearance].classList.add('appearance');
}, 1000);
