const dialog=document.querySelector('#lightbox');
document.querySelectorAll('.photo').forEach(button=>button.addEventListener('click',()=>{document.querySelector('#large-photo').src=button.dataset.src;document.querySelector('#large-photo').alt=button.querySelector('img').alt;document.querySelector('#photo-title').textContent=button.dataset.title;dialog.showModal()}));
document.querySelector('#close').addEventListener('click',()=>dialog.close());dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close()});
const bookingDialog=document.querySelector('#booking-dialog');
document.querySelectorAll('a[href="#kontakt"]').forEach(link=>link.addEventListener('click',e=>{e.preventDefault();const frame=document.querySelector('#booking-frame');if(!frame.src)frame.src=frame.dataset.src;bookingDialog.showModal();document.body.style.overflow='hidden'}));
document.querySelector('#booking-close').addEventListener('click',()=>bookingDialog.close());
bookingDialog.addEventListener('click',e=>{if(e.target===bookingDialog){const r=bookingDialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)bookingDialog.close()}});
bookingDialog.addEventListener('close',()=>{document.body.style.overflow=''});

// Necessary local preference only. No optional trackers or external embeds.
const noticeKey='mp-cookie-notice-v1';
const cookieBanner=document.querySelector('#cookie-banner');
const cookieDialog=document.querySelector('#cookie-dialog');
let noticeSaved=false;
try{const saved=JSON.parse(localStorage.getItem(noticeKey));noticeSaved=!!saved&&Date.now()-saved.timestamp<180*24*60*60*1000}catch{}
cookieBanner.hidden=noticeSaved;
document.querySelector('#cookie-ok').addEventListener('click',()=>{try{localStorage.setItem(noticeKey,JSON.stringify({timestamp:Date.now()}))}catch{}cookieBanner.hidden=true});
document.querySelectorAll('.cookie-link').forEach(button=>button.addEventListener('click',()=>cookieDialog.showModal()));
document.querySelector('#cookie-close').addEventListener('click',()=>cookieDialog.close());
document.querySelector('#cookie-reset').addEventListener('click',()=>{try{localStorage.removeItem(noticeKey)}catch{}cookieBanner.hidden=false;cookieDialog.close()});
cookieDialog.addEventListener('click',e=>{if(e.target===cookieDialog){const r=cookieDialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)cookieDialog.close()}});
