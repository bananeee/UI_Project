function myFunction(x) {
  if (x.matches) {
    // If media query matches
    document.getElementById('nav').classList.remove('large-nav');
    document.getElementById('nav').classList.add('small-nav');
  } else {
    document.getElementById('nav').classList.add('large-nav');
    document.getElementById('nav').classList.remove('small-nav');
  }
}

var x = window.matchMedia('(max-width: 800px)');
myFunction(x); // Call listener function at run time
x.addListener(myFunction); // Attach listener function on state changes

// var arr = [
//   './images/slide image 1.jpg',
//   './images/slide image 2.jpg',
//   './images/slide image 3.jpg',
//   './images/slide image 4.jpg',
//   './images/slide image 5.jpg'
// ];

// index = 0;
// function slider(){
//     var img = document.getElementById("img-slide");
//     img.src=arr[index];
//     index++;
//     if(index == arr.length)
//         index = 0;
//     window.setTimeout("slider()", 2000);
// }
