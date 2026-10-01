const menuButton=document.querySelector('.menu-toggle');
const menu=document.querySelector('#mobile-nav');
menuButton.addEventListener('click',()=>{const open=menuButton.getAttribute('aria-expanded')!=='true';menuButton.setAttribute('aria-expanded',String(open));menu.hidden=!open;});
menu.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{menu.hidden=true;menuButton.setAttribute('aria-expanded','false');}));
document.addEventListener('keydown',e=>{if(e.key==='Escape'){menu.hidden=true;menuButton.setAttribute('aria-expanded','false');}});
const heroSets=[['03','06','02'],['01','04','05']];
const descriptions={'01':'Un couple s’embrasse auprès d’un cheval','02':'Les mariés dans la lumière dorée du soir','03':'Un instant de tendresse à la fenêtre','04':'Les mariés près des lettres LOVE illuminées','05':'Les mariés portés par leurs invités','06':'Portrait d’une mariée devant une élégante demeure'};
let heroIndex=0;
function changeHero(step){heroIndex=(heroIndex+step+heroSets.length)%heroSets.length;['left','center','right'].forEach((position,i)=>{const img=document.querySelector('#hero-'+position),n=heroSets[heroIndex][i];img.src='assets/icaros/'+n+'.webp';img.alt=descriptions[n];});document.querySelector('.hero-count').textContent='0'+(heroIndex+1)+' — 02';}
document.querySelector('.hero-prev').addEventListener('click',()=>changeHero(-1));document.querySelector('.hero-next').addEventListener('click',()=>changeHero(1));
const photos=Array.from(document.querySelectorAll('[data-photo]'));
const dialog=document.querySelector('#lightbox');let current=0,lastFocus;
function showPhoto(index){current=(index+photos.length)%photos.length;const source=photos[current].querySelector('img');const img=dialog.querySelector('img');img.src=source.src;img.alt=source.alt;dialog.querySelector('figcaption').textContent=source.alt+' — '+(current+1)+' / '+photos.length;}
photos.forEach((button,index)=>button.addEventListener('click',()=>{lastFocus=button;showPhoto(index);dialog.showModal();document.body.classList.add('modal-open');}));
dialog.querySelector('.close').addEventListener('click',()=>dialog.close());dialog.querySelector('.previous').addEventListener('click',()=>showPhoto(current-1));dialog.querySelector('.next').addEventListener('click',()=>showPhoto(current+1));
dialog.addEventListener('close',()=>{document.body.classList.remove('modal-open');lastFocus?.focus();});dialog.addEventListener('keydown',e=>{if(e.key==='ArrowRight'){e.preventDefault();showPhoto(current+1);}if(e.key==='ArrowLeft'){e.preventDefault();showPhoto(current-1);}});
let touchX;dialog.addEventListener('touchstart',e=>{touchX=e.changedTouches[0].clientX;},{passive:true});dialog.addEventListener('touchend',e=>{const delta=e.changedTouches[0].clientX-touchX;if(Math.abs(delta)>60)showPhoto(current+(delta<0?1:-1));},{passive:true});
document.querySelector('#year').textContent=new Date().getFullYear();
