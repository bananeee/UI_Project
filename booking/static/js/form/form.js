let selection = document.getElementById('party');
let popup = document.querySelector('.popup-container')
for (var i = 1; i <= 100; i++) {
  let option = document.createElement('option');
  let number = document.createTextNode('' + i);
  option.appendChild(number);
  selection.appendChild(option);
}

let checkArr = ['date', 'time', 'name', 'email', 'phone'];
let span = [];
let noti = [];
for (let i = 0; i < checkArr.length; i++) {
  span[i] = document.createElement('span');
  noti[i] = document.createTextNode('');
  document.getElementById('check-' + checkArr[i]).appendChild(span[i]);
  if (document.getElementById(checkArr[i]).value === '') span[i].appendChild(noti[i]);
}

document.getElementById('request').onclick = function () {
  let fillAll = true;
  for (let i = 0; i < checkArr.length; i++) {
    if (document.getElementById(checkArr[i]).value === '') {
      noti[i].nodeValue = 'Please fill this field';
      fillAll = false;
    } else {
      noti[i].nodeValue = '';
    }
  }
  if (fillAll === true) {
    popup.style.display = 'block';
    setTimeout(() => {
      location.href="/"
    }, 3500);
  }
};
