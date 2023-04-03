'use strict';
const modal = document.querySelector('.modal');
// const content = document.querySelector('.modal-content');
const content = document.querySelector('.modal-content');
const accept = document.querySelector('.accept');
const settings = document.querySelector('.settings')
const settingsModal = document.querySelector('.settingsModal');
const prefrences = document.querySelector('.save');
const browser = document.querySelector('.browser');
const operatingSystem = document.querySelector('.os');
const screenWidth = document.querySelector('.sw');
const screenHeight = document.querySelector('.sh');
const dialog = document.querySelector('dialog');
const dialogOne = document.querySelector('.dialogOne');
const dialogTwo= document.querySelector('.dialogTwo');

function setCookie(name, value, options = {}) {
  options = {
      path: '/',
      SameSite: 'Lax',
      ...options
  };

  const keys = Object.keys(options);
  const values = Object.values(options);

  if (options.expires instanceof Date) {
    options.expires = options.expires.toUTCString();
  }

  let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

  for (let i = 0; i < keys.length; i++) {
    updatedCookie += `; ${keys[i]}=${values[i]}`;
  }

  document.cookie = updatedCookie;
}

function getCookie(name) {
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));

  return matches ? decodeURIComponent(matches[1]) : undefined;
}
// function deleteCookie(name) {
//   setCookie(name, '', {'max-age': -1});
// }


function getScreenWidth() {
  return screen.width;
};

function getScreenHeight() {
  return screen.height;
};


function getBrowser() {
  if (navigator.userAgent.indexOf('Edg') != -1) {
    return 'Edge';
  } if (navigator.userAgent.indexOf('Chrome') != -1) {
    return 'Chrome';
  } if (navigator.userAgent.indexOf('Firefox') != -1) {
    return 'Firefox';
  } if (navigator.userAgent.indexOf('Safari') != -1) {
    return 'Safari';
  }
}

function getOS() {
  if (navigator.userAgent.indexOf('Windows NT 10.0') != -1) {
    return 'Windows 10';
  } if (navigator.userAgent.indexOf('Windows NT 6.3') != -1) {
    return 'Windows 8.1';
  } 
   if (navigator.userAgent.indexOf('Linux') != -1) {
    return 'Linux';
  } if (navigator.userAgent.indexOf('Mac') != -1) {
    return 'Mac/iOS';
  } else {
    return 'Unknown';
  }
};

// function deleteCookie(name) {
//   setCookie(name, '', {'max-age': -1});
// }

  // console.log(document.cookie ? 'Cookies available' : 'No cookies found');
  // if (!getCookie('modalShown')) {
    // setTimeout(function () {
    //   modal.style.display = 'block';
    // }, 1000);
  // }

accept.addEventListener('click', function(){
  setCookie('browser', getBrowser(), { 'max-age': 15 });
  setCookie('operatingSystem', getOS(), { 'max-age': 15 });
  setCookie('screen-width', getScreenWidth(), { 'max-age': 15 });
  setCookie('screen-height', getScreenHeight(), { 'max-age': 15 });
  setCookie('modalShown', 'true', { 'max-age': 15 });
  
  console.log(getCookie('browser'));
  console.log(getCookie('operatingSystem'));
  console.log(getCookie('screen-width'));
  console.log(getCookie('screen-height'));
  console.log(document.cookie);
  dialogOne.close();
});

// settings.addEventListener('click', function(){
//   settingsModal.style.display = 'inline-block';
//   content.style.display = 'none';
// });

prefrences.addEventListener('click', function(){
  if (browser.checked === true) {
    setCookie('browser', getBrowser(), {'max-age': 15});
    console.log(getCookie('browser'));
  } if (operatingSystem.checked === true) {
    setCookie('os', getOS(), {'max-age': 15});
    console.log(getCookie('os'));
  } if (screenWidth.checked === true) {
    setCookie('screen-width', getScreenWidth(), {'max-age': 15});
    console.log(getCookie('screen-width'));
  } if (screenHeight.checked === true) {
    setCookie('screen-height', getScreenHeight(), {'max-age': 15});
    console.log(getCookie('screen-height'));
  }
  console.log(document.cookie);
  dialogTwo.close();

  dialogOne.close();
});







if (document.cookie === '') {
  setTimeout(function () {
    dialogOne.showModal();
  }, 1000);
  
  console.log("No cookies found");
} else {
  dialogOne.close();
  console.log("Cookies available");
};

settings.addEventListener('click', () => {
  dialogOne.close();
  dialogTwo.showModal();
});


dialog.addEventListener('click', function(e){
  const rect = this.getBoundingClientRect();
  // this will information about size and other information of the dialog

  if(e.clientY < rect.top || e.clientY > rect.bottom || 
    e.clientX < rect.left || e.clientX > rect.right){
      dialog.close();
    }
});