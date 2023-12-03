const get = (target) => {
    return document.querySelector(target);
}
const getAll = (target) => {
    return document.querySelectorAll(target);
}

let $link = getAll('a[href="#"]');
$link.forEach(item => {
    item.addEventListener('click', e => {
        e.preventDefault();
    })
})
 

const nav_menu = () => {
  let $nav = get('#nav');
  let $menua = getAll('#nav .gnb > li > a');
  let $menuli = get('#nav .gnb > li');
  let $menuul = getAll('#nav .gnb > li > ul');
  let $close = get('#nav .close');
  let $allmenu = get('#header .all-menu');
  let $body = get('body');

  let $bg = get('#wrap .bg');
  
  $allmenu.addEventListener('click', e => {
    $nav.classList.add('on');
    $bg.classList.add('on');
    $body.style.overflow = 'hidden';
  })

  $close.addEventListener('click', e => {
    $nav.classList.remove('on');
    $bg.classList.remove('on');
    $body.style.overflow = 'visible';
    
    setTimeout(()=>{
      $menuul.forEach(menu => {
        menu.classList.remove('on');
      })
    },400)
  })

  $bg.addEventListener('click', e => {
    $nav.classList.remove('on');
    $bg.classList.remove('on');
    $body.style.overflow = 'visible';
  })

  $menua.forEach(item => {
    item.addEventListener('click', e => {
      let el = e.currentTarget;
      $menuul.forEach(menu => {
        menu.classList.remove('on');
      })
      el.nextElementSibling.classList.add('on');
    })
  })

}

const gnb = () => {
  window.addEventListener('scroll', e => {
      let logo = document.getElementById('logo');
      let t = window.scrollY;
      if(t>=100) {
          header.classList.add('active');
          logo.setAttribute('src','./images/common/ft_logo.png');
      }else { 
          header.classList.remove('active');
          logo.setAttribute('src','./images/common/hd_logo.png');
      }
  })
}//end gnb

const family = () => {
  let $title = get('.family .title');
  let $list = get('.family .list');
  let isOpen = null;

  if($title != null){
      $title.addEventListener('click', e => {
          $list.classList.toggle('on');
          $title.classList.toggle('on');
          e.preventDefault();
      })
  }
 
}


const comInit = ()  => {
    const loadPage  = (page, tag ) => {
        fetch(page)
        .then(res => {
        return res.text()
        })
        .then(data => {
            get( tag ).innerHTML = data;
            nav_menu();
            gnb();
            family();
        });
    }
    loadPage("./page/header.html", 'header');
    loadPage("./page/footer.html", 'footer');    
}

;( () => {
    comInit();    
})();

