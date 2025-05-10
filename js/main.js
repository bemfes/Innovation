
// Закрытие прелоадера

const body = document.querySelector('body')
const preloaderOverlay = document.querySelector('.preloader__overlay')
const firstSecTransition = document.querySelector('.first-sec__transition');
if(preloaderOverlay) {
  window.addEventListener('load', () => {
  body.classList.remove('body-no-scroll')
  preloaderOverlay.classList.add('hidden')
  setTimeout(() => {
    firstSecTransition.classList.remove('section-hidden')
  }, 200)
  
})
}


// Мобильное меню
const menu = document.querySelector('.nav')
const menuSecond = document.querySelectorAll('.nav__list-second')
const menuItemSecond = document.querySelectorAll('.nav__item-menu')
const hmg = document.querySelector('.hamburger')
const spanFirst = document.querySelector('.first-span')
const spanSecond = document.querySelector('.second-span')
const spanThird = document.querySelector('.third-span')


hmg.addEventListener('click', () => {
  menu.classList.toggle('nav_hidden')
  spanFirst.classList.toggle('hmg-span-opened-1')
  spanSecond.classList.toggle('hmg-span-opened-2')
  spanThird.classList.toggle('hmg-span-opened-3')
  body.classList.toggle('body-no-scroll')
})

const navItemMenu = document.querySelectorAll('.nav__item-menu');



navItemMenu.forEach(item => {
  item.addEventListener('click', () => {
    if(item.classList.contains('nav__item-menu_service') && spanFirst.classList.contains('hmg-span-opened-1')) {
      console.log('service')
      document.querySelector('.nav__list-service').classList.remove("nav__list-mobile_hidden")
    } else if(item.classList.contains('nav__item-menu_page') && spanFirst.classList.contains('hmg-span-opened-1')) {
      console.log('page')
      document.querySelector('.nav__list-page').classList.remove("nav__list-mobile_hidden")
    }
    
  })
})
const navItemMenuClose = document.querySelectorAll('.nav__item-second-close');
const navMenuMobile = document.querySelectorAll('.nav__list-mobile')
navItemMenuClose.forEach(item => {
  item.addEventListener('click', () => {
    navMenuMobile.forEach(nav => {
      nav.classList.add('nav__list-mobile_hidden')
    })
  })
})

// Нажатие на service и page в меню

const navSecondService = document.querySelector('.nav__list-second_service')
const navLinkService = document.querySelector('.nav__item-link-service');
const navSecondPage = document.querySelector('.nav__list-second_page')
const navLinkPage = document.querySelector('.nav__item-link-page');
const navLinkBlog = document.querySelector('.nav__item-link-blog');
const navLinkUs = document.querySelector('.nav__item-link-us');
navLinkService.addEventListener('focusin', () => {
  navSecondService.classList.add('nav__list-second_opened')
  navSecondPage.classList.remove('nav__list-second_opened') 
})
navLinkPage.addEventListener('focusin', () => {
  navSecondService.classList.remove('nav__list-second_opened')
  navSecondPage.classList.add('nav__list-second_opened') 
})
navLinkBlog.addEventListener('focusin', () => {
  navSecondPage.classList.remove('nav__list-second_opened') 
})
navLinkUs.addEventListener('focusin', () => {
  navSecondService.classList.remove('nav__list-second_opened') 
})



// Социальные сети членов команды

const teamItemsAll = document.querySelectorAll('.team__item');
if (teamItemsAll) {
  teamItemsAll.forEach(item => {
    const socials = item.querySelector('.team__socials')
    item.addEventListener('focusin', () => {
      if (socials.classList.contains('team__socials_big')) {
        socials.classList.add('team__socials_big_focus')
      } else {
        socials.classList.add('team__socials_focus')
      }
    })
    if (item.nextElementSibling) {
      item.nextElementSibling.addEventListener('focusin', () => {
        if (socials.classList.contains('team__socials_big')) {
          socials.classList.remove('team__socials_big_focus')
        } else {
          socials.classList.remove('team__socials_focus')
        }
        })
    }; 
    if (item.previousElementSibling) {
      item.previousElementSibling.addEventListener('focusin', () => {
        if (socials.classList.contains('team__socials_big')) {
          socials.classList.remove('team__socials_big_focus')
        } else {
          socials.classList.remove('team__socials_focus')
        }
        })
    }; 
  })
}

const teamParent = document.querySelectorAll('.team');

if (teamParent) {
  teamParent.forEach(parent => {

    const firstChild = parent.firstElementChild
    firstChild.addEventListener('focusout', () => {
      const socials = firstChild.querySelector('.team__socials')
      if (socials.classList.contains('team__socials_big')) {
        socials.classList.remove('team__socials_big_focus')
      } else {
        socials.classList.remove('team__socials_focus')
      }
    })
    const lastChild = parent.lastElementChild
    lastChild.addEventListener('focusout', () => {
      const socials = lastChild.querySelector('.team__socials')
      if (socials.classList.contains('team__socials_big')) {
        socials.classList.remove('team__socials_big_focus')
      } else {
        socials.classList.remove('team__socials_focus')
      }
    })
  })
  
}

const serviceItemsFocus = document.querySelectorAll('.service__item');
const helper = document.querySelectorAll('.helper__service-link')

if (serviceItemsFocus) {
  serviceItemsFocus.forEach(item => {
    const link = item.querySelector('.service__btn')
    const desc = item.querySelector('.service__desc')
    const helper = item.querySelector('.helper__service-link')
    const title = item.querySelector('.service__title')
    title.addEventListener('focusin', () => {
      if (!desc.classList.contains('service__desc-on')) {
        desc.classList.add('service__desc-on')
      }
    })
    desc.addEventListener('focusout', () => {
      if (desc.classList.contains('service__desc-on')) {
        item.classList.add('service__item_focus')
        link.classList.add('service__btn_focus')

      }
    })
    link.addEventListener('focusout', () => {
      item.classList.remove('service__item_focus')
      link.classList.remove('service__btn_focus')
      desc.classList.remove('service__desc-on')
    })
    
    if (item.nextElementSibling) {
      item.nextElementSibling.addEventListener('focusin', () => {
        item.classList.remove('service__item_focus')
        link.classList.remove('service__btn_focus')
        helper.classList.add('helper__service-link-on')
        
      })
    }
    if (item.previousElementSibling) {
      item.previousElementSibling.addEventListener('focusin', () => {
        item.classList.remove('service__item_focus')
        link.classList.remove('service__btn_focus')
        
      })
    }
    
  })
}
if (helper) {
  helper.forEach(help => {
    help.addEventListener('focusin', () => {
      if (help.classList.contains('helper__service-link-on')) {
        help.previousElementSibling.classList.add('service__btn_focus')
        help.parentElement.classList.add('service__item_focus')
      }
    })

  })
}
const serviceParent = document.querySelector('.service__box');
if (serviceParent) {
  const lastChild = serviceParent.lastElementChild
  const helper = lastChild.querySelector('.helper__service-link')
  helper.addEventListener('focusin', () => {
      helper.classList.add('helper__service-link-on')
  })
  
}

// Всплытие секций

const sections = document.querySelectorAll('.float');

function floatSections(entries, observer) {
  if(entries[0].isIntersecting) {
    
    entries[0].target.classList.remove('section-hidden')
    observer.unobserve(entries[0].target)
    console.log(entries[0]);
  }
}

const observerSections = new IntersectionObserver(floatSections, {threshold: 0.05})
sections.forEach(section => {
  observerSections.observe(section)
  section.classList.add('section-hidden')

})

// Всплытие опенинга и секции после него

const opening = document.querySelector('.opening');
const sectionAfterOp = document.querySelector('.section-after-op');
if (opening) {
  window.addEventListener('load', () => {
  
  setTimeout(() => {
    opening.classList.remove('section-hidden')
    setTimeout(() => {
      sectionAfterOp.classList.remove('section-hidden')
    }, 300)
  }, 50)
})
}

// Всплытие страницы блога

const blogPageSection = document.querySelector('.blog-page-second');
if (blogPageSection) {
  window.addEventListener('load', () => {
  
  setTimeout(() => {
    blogPageSection.classList.remove('section-hidden')
  }, 50)
})
}

// Липкий хэдер

const headerSticky = document.querySelector('.header__sticky');
const headerMain = document.querySelector('.header__main');

function headerFollow(entries) {
    if (!entries[0].isIntersecting) {
        headerSticky.classList.add('sticky')
        headerMain.style.padding = '0.7rem 0rem'
    } else {
        headerSticky.classList.remove('sticky')
        headerMain.style.padding = '0rem 0rem'
    }
}
const options = {
    threshold: 0,
}
const observer = new IntersectionObserver(headerFollow, options)
observer.observe(document.querySelector('.header__intersection'))

// Нажатие на члена команды
const teamItems = document.querySelectorAll('.team__item');

if (teamItems) {
  teamItems.forEach(item => {
    item.addEventListener('click', () => {
      const teamSocials = item.querySelector('.team__socials')
      if (teamSocials.classList.contains('team__socials_big')) {
        teamSocials.classList.toggle('socials__opened_big')
      } else {
        teamSocials.classList.toggle('socials__opened')
      }
    })
  })
}

// Нажатие на штуку сервиса

const serviceItems = document.querySelectorAll('.service__item');

if (serviceItems) {
  if (window.innerWidth > 991) {

    serviceItems.forEach(item => {
      item.addEventListener('click', () => {
        const serviceBtn = item.querySelector('.service__btn')
        serviceBtn.classList.toggle('service__btn_opened')
        item.classList.toggle('service__item_opened')
      })
    })
  }
}

// Валидация формы подписки

new window.JustValidate('.subscribe__form', {
    colorWrong: "#18181B",
    messages: {
      email: {
        email: "Enter the correct email",
        required: "Enter an email",
      },
  
    },
    submitHandler: function(thisForm) {
      
  
      thisForm.reset();
      modalSubs.classList.remove('modal_hidden')
      overlaySubs.classList.remove('overlay_hidden')
    }
  });

const formSubs = document.querySelector(".subscribe__form");

let observerSubs = new MutationObserver((mutations) => {
      for (let mut of mutations) {
        for (let node of mut.addedNodes) {
          node.classList.add(`req-subscribe`);
          
        }
      }
    });
    
observerSubs.observe(formSubs, { childList: true });

// Закрытие модалки после подписки

const btnSubsClose = document.querySelector('.modal__btn_subs');
const modalSubs = document.querySelector('.modal_subs');
const overlaySubs = document.querySelector('.overlay_subs');
btnSubsClose.addEventListener('click', () => {
  modalSubs.classList.add('modal_hidden')
  overlaySubs.classList.add('overlay_hidden')
})
overlaySubs.addEventListener('click', () => {
  modalSubs.classList.add('modal_hidden')
  overlaySubs.classList.add('overlay_hidden')
})
document.addEventListener('keydown', (e) => {
  if(e.key === 'Escape') {
    modalSubs.classList.add('modal_hidden')
    overlaySubs.classList.add('overlay_hidden')
  }
})

// Валидация формы связи и закрытие модалки после отправки формы

const formContact = document.querySelector(".contact__form");
if (formContact) {
  let observerContact = new MutationObserver((mutations) => {
      console.log(mutations);
      for (let mut of mutations) {
        for (let node of mut.addedNodes) {
          if (node.textContent === 'Enter a phone') {
            node.classList.add(`req-contact-phone`);
          } else if (node.textContent === 'Enter first name') {
            node.classList.add(`req-contact-first`);
          } else if (node.textContent === 'Enter last name') {
            node.classList.add(`req-contact-last`);
          } else if (node.textContent === 'Enter an email' || node.textContent === "Enter the correct email") {
            node.classList.add(`req-contact-email`);
          } else if (node.textContent === 'Enter a message') {
            node.classList.add(`req-contact-message`);
          }
          node.classList.add(`req-contact`);
        }
      }
    });
    
  observerContact.observe(formContact, { childList: true });

  const btnContactsClose = document.querySelector('.modal__btn_contacts');
  const modalContacts = document.querySelector('.modal_contacts');
  const overlayContacts = document.querySelector('.overlay_contacts');
  btnContactsClose.addEventListener('click', () => {
    modalContacts.classList.add('modal_hidden')
    overlayContacts.classList.add('overlay_hidden')
  })
  overlayContacts.addEventListener('click', () => {
    modalContacts.classList.add('modal_hidden')
    overlayContacts.classList.add('overlay_hidden')
  })
  document.addEventListener('keydown', (e) => {
    if(e.key === 'Escape') {
      modalContacts.classList.add('modal_hidden')
      overlayContacts.classList.add('overlay_hidden')
    }
  })
  new window.JustValidate('.contact__form', {
      rules: {
        firstname: {
          required: true
        },
        lastname: {
          required: true
        },
        email: {
          required: true
        },
        tel: {
          required: true
        },
        text: {
          required: true
        },
      },
      colorWrong: "red",
      messages: {
        firstname: {
          required: "Enter first name",
        },
        
        lastname: {
          required: "Enter last name",
        },
        email: {
          email: "Enter the correct email",
          required: "Enter an email",
        },
        tel: {
          required: "Enter a phone",
        },
        text: {
          required: "Enter a message",
        },
        
    
      },
      submitHandler: function(thisForm) {
      
        thisForm.reset();
        modalContacts.classList.remove('modal_hidden')
        overlayContacts.classList.remove('overlay_hidden')
      }
    });
}

// Открытие и закрытие видео

const videoBox = document.querySelectorAll('.video-box')


const videoPlay = document.querySelectorAll('.vid-play')
const video = document.querySelector('.video')
const overlayVideo = document.querySelector('.overlay-video')

if (videoPlay) {
  videoPlay.forEach(play => {
      play.addEventListener('click', () => {
        video.classList.remove('video_hidden')
        video.play()
        overlayVideo.classList.remove('overlay-video__hidden')
        })
  })
}
if (overlayVideo) {
  overlayVideo.addEventListener('click', () => {
    overlayVideo.classList.add('overlay-video__hidden')
    video.classList.add('video_hidden')
  })

}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    video.classList.add('video_hidden')
    overlayVideo.classList.add('overlay-video__hidden')
  }
})

// Детальный сервис, перелистывание услуг

const btnRight = document.querySelector('.det-service__arrow_right')
const btnLeft = document.querySelector('.det-service__arrow_left')
const detServiceItemFirst = document.querySelectorAll('.det-service__item_first')
const detServiceItemSecond = document.querySelectorAll('.det-service__item_second')
const detServiceSlider = document.querySelector('.det-service__box-slider');

function detServiceRight() {
  detServiceItemFirst.forEach(item => {
    item.classList.add('det-service__item_disappear')
  })
  setTimeout(() => {
    detServiceItemSecond.forEach(item => {
      item.classList.remove('det-service__item_appear')
    })
  }, 300)
  btnLeft.classList.remove('det-service__arrow_disabled')
  btnRight.classList.add('det-service__arrow_disabled')
}

function detServiceLeft() {
  detServiceItemSecond.forEach(item => {
    item.classList.add('det-service__item_appear')
  })
  setTimeout(() => {
    detServiceItemFirst.forEach(item => {
      item.classList.remove('det-service__item_disappear')
    })
  }, 300)
  btnLeft.classList.add('det-service__arrow_disabled')
  btnRight.classList.remove('det-service__arrow_disabled')
}

if (btnRight) {
  btnRight.addEventListener('click', detServiceRight)
  btnLeft.addEventListener('click', detServiceLeft)

  const sensitivity = 20;
  let touchStart = null; 
  let touchPosition = null;


  detServiceSlider.addEventListener("touchstart", function (e) {
    TouchStart(e);
  });
  detServiceSlider.addEventListener("touchmove", function (e) {
    TouchMove(e);
  }); 

  detServiceSlider.addEventListener("touchend", function (e) {
    TouchEnd(e);
  });

  detServiceSlider.addEventListener("touchcancel", function (e) {
    TouchEnd(e);
  });

  function TouchStart(e) {
    touchStart = {
      x: e.changedTouches[0].clientX,
      y: e.changedTouches[0].clientY,
    };
    touchPosition = { x: touchStart.x, y: touchStart.y };
  }

  function TouchMove(e) {
    touchPosition = {
      x: e.changedTouches[0].clientX,
      y: e.changedTouches[0].clientY,
    };
  }

  function TouchEnd(e) {
    CheckAction();
    touchStart = null;
    touchPosition = null;
  }

  function CheckAction() {
    let d =
      {
        x: touchStart.x - touchPosition.x,
        y: touchStart.y - touchPosition.y,
      };

    if (Math.abs(d.x) > Math.abs(d.y)) {
      if (Math.abs(d.x) > sensitivity) {
        if (d.x > 0) {
          detServiceRight()
        }
        else {
          detServiceLeft()
        }
      }
    }
  }

}
  


// Открытие обычных вопросов

const questions = document.querySelectorAll('.questions__item')

questions.forEach(quest => {
  quest.addEventListener('click', (e) => {
    const neighbor = e.target.nextElementSibling
    if (neighbor.style.maxHeight) {
      neighbor.style.maxHeight = null
      e.target.classList.remove('question-opened')
      e.target.setAttribute('aria-expanded', 'false')
      neighbor.removeAttribute('tabindex', '0')
    } else {
      neighbor.style.maxHeight = neighbor.scrollHeight + "px";
      e.target.classList.add('question-opened')
      e.target.setAttribute('aria-expanded', 'true')
      neighbor.setAttribute('tabindex', '0')
    }
  })
  quest.addEventListener('keydown', (e) => {
    const neighbor = e.target.nextElementSibling
    if (e.key === 'Enter') {
      if (neighbor.style.maxHeight) {
        neighbor.style.maxHeight = null
        e.target.classList.remove('question-opened')
        e.target.setAttribute('aria-expanded', 'false')
        neighbor.removeAttribute('tabindex', '0')
      } else {
        neighbor.style.maxHeight = neighbor.scrollHeight + "px";
        e.target.classList.add('question-opened')
        e.target.setAttribute('aria-expanded', 'true')
        neighbor.setAttribute('tabindex', '0')
      }

    }
  })
})

// Открытие часто задаваемых вопросов

const faq = document.querySelectorAll('.faq__item')

faq.forEach(quest => {
  const desc = quest.querySelector('.faq__desc')
  const title = quest.querySelector('.faq__title')
  const descText = quest.querySelector('.faq__text')
  quest.addEventListener('click', (e) => {
    if (desc.style.maxHeight) {
      desc.style.maxHeight = null
      desc.classList.remove('desc-opened')
      title.classList.remove('title-opened')
      e.target.classList.remove('faq-opened')
      e.target.setAttribute('aria-expanded', 'false')
      descText.removeAttribute('tabindex', '0')
    } else {
      desc.style.maxHeight = desc.scrollHeight + 12 + "px";
      console.log(desc.style.maxHeight);
      desc.classList.add('desc-opened')
      title.classList.add('title-opened')
      e.target.classList.add('faq-opened')
      e.target.setAttribute('aria-expanded', 'true')
      descText.setAttribute('tabindex', '0')

    }
  })
  quest.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      if (desc.style.maxHeight) {
        desc.style.maxHeight = null
        desc.classList.remove('desc-opened')
        title.classList.remove('title-opened')
        e.target.classList.remove('faq-opened')
        e.target.setAttribute('aria-expanded', 'false')
        descText.removeAttribute('tabindex', '0')
      } else {
        desc.style.maxHeight = desc.scrollHeight + 12 + "px";
        console.log(desc.style.maxHeight);
        desc.classList.add('desc-opened')
        title.classList.add('title-opened')
        e.target.classList.add('faq-opened')
        e.target.setAttribute('aria-expanded', 'true')
        descText.setAttribute('tabindex', '0')
      }

    }
  })
})

// Открытие отзывов

const itemReview = document.querySelectorAll('.item-review__man')

itemReview.forEach(item => {
  item.addEventListener('click', () => {
    item.classList.toggle('item-review__man-clicked')
    item.nextElementSibling.classList.toggle('item-review__desc-hidden')
    if (item.classList.contains('item-review__man-clicked')) {
      item.setAttribute('aria-expanded', 'true')
    } else {
      item.setAttribute('aria-expanded', 'false')

    }
    if (item.nextElementSibling.classList.contains('item-review__desc_inverted')) {
      item.nextElementSibling.classList.toggle('item-review__desc-hidden-inv')
    }
    
  })
  item.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      item.classList.toggle('item-review__man-clicked')
      item.nextElementSibling.classList.toggle('item-review__desc-hidden')
      if (item.classList.contains('item-review__man-clicked')) {
        item.setAttribute('aria-expanded', 'true')
      } else {
        item.setAttribute('aria-expanded', 'false')
  
      }
      if (item.nextElementSibling.classList.contains('item-review__desc_inverted')) {
        item.nextElementSibling.classList.toggle('item-review__desc-hidden-inv')
      }

    }
    
  })
})
  
// Слайдер

const swiperBox = document.querySelector('.swiper-container');
if (swiperBox) {
  const swiper = new Swiper(swiperBox, {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
})
}



