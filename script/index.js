let togglerDiv = document.querySelector(".togglerDiv");
let togglerButton = document.querySelector(".hideToggler");
let timesNav = document.querySelector(".times-nav");
togglerDiv.addEventListener("click", function () {
  let checkClass = togglerDiv.classList.contains("dashes");
  let checkboxes = togglerDiv.classList.contains("boxes");
  

  if (checkClass) {
    togglerDiv.classList.add("boxes");
    togglerDiv.classList.remove("dashes");
    togglerButton.style.display = "none";
    timesNav.style.display = "block";
  } else if (checkboxes) {
    togglerDiv.classList.remove("boxes");
    togglerDiv.classList.add("dashes");
    togglerButton.style.display = "block";
    timesNav.style.display = "none";
  }
});

var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
var elements = document.getElementsByClassName('txt-rotate');
for (var i=0; i<elements.length; i++) {
  var toRotate = elements[i].getAttribute('data-rotate');
  var period = elements[i].getAttribute('data-period');
  if (toRotate) {
    new TxtRotate(elements[i], JSON.parse(toRotate), period);
  }
}
  

var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid purple }";
  document.body.appendChild(css);
};


$(window).scroll(function() {
  $('.toAnim').each(function() {
    var _win     = $(window),
        _ths     = $(this),
        _pos    = _ths.offset().top,
        _scroll = _win.scrollTop(),
        _height = _win.height();

    (_scroll > _pos - _height * .7) ? _ths.addClass('anim') : _ths.removeClass('anim');

  });
});


$(document).ready(function(){
  $("#menuList").click(function (){
    $("#mobileNav").show(1000)
  })

  $("#closeMobile").click(function (){
    $("#mobileNav").hide(1000)
  })
})