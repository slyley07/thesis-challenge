let $ = function(ele) {
  return document.getElementById(ele);
}

let openNav = function() {
  $('nav-links').classList.toggle('show');
}

let closeNav = function() {
  $('nav-links').classList.toggle('show');
}

let viewPass = function() {
  if ($('password').type !== 'password') {
    $('password').type = 'password'
    $('vis').src = './public/img/vis.svg'
    $('vis').alt = 'Show Password'
    $('vis').title = 'Show Password'
  } else {
    $('password').type = 'text'
    $('vis').src = './public/img/vis-off.svg'
    $('vis').alt = 'Hide Password'
    $('vis').title = 'Hide Password'

  }
}
