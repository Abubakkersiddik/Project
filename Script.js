var h1Element =document.createElement('h1');
h1Element.innerHTML = "This is a heading";
document.getElementById('box-one').appendChild(h1Element);





var submitBtn=document.getElementById('submitBtn');

submitBtn.onclick= function () {

    var height=document.getElementById('height').value;
    var width=document.getElementById('width').value;
    var color=document.getElementById('color').value;

    var newDiv =document.getElementById('newDiv');
    newDiv.style.height = height+'px';
    newDiv.style.width = width+'px';
    newDiv.style.backgroundColor=color;

}






var redBtn =document.getElementById('red');
redBtn.onclick = function () {
    // alert('test');
    var divOne= document.getElementById('div-one');
    // alert(divOne);
    // divOne.style.backgroundColor = 'red';
    divOne.className = 'div-one red redious';

}

var greenBtn =document.getElementById('green');
greenBtn.onclick = function () {
    // alert('test');
    var divOne= document.getElementById('div-one');
    // alert(divOne);
    // divOne.style.backgroundColor = 'green';
    divOne.className = 'div-one green';

}
var blueBtn =document.getElementById('blue');
  blueBtn.onclick = function () {
    // alert('test');
    var divOne= document.getElementById('div-one');
    // alert(divOne);
    // divOne.style.backgroundColor = 'blue';
      divOne.className = 'div-one blue';
}
var defaultBtn =document.getElementById('default');
defaultBtn.onclick = function () {
    // alert('test');
    var divOne= document.getElementById('div-one');
    // alert(divOne);
    // divOne.style.backgroundColor = 'white';
    divOne.className = 'div-one default';

}







        function demo(){

        var dateTime= new Date();
        // alert(dateTime.getHours());
        var hours = dateTime.getHours();
        // alert(typeof (hours));
        var minutes = dateTime.getMinutes();
        var seconds =dateTime.getSeconds()
        document.getElementById('h1').innerHTML = hours+' :'+minutes+' :'+seconds;
            // alert('test');
        }
       setInterval(demo, 1000);



     // alert("test");
     var mainImage =document.getElementById('mainImage');
  // alert(mainImage.getAttribute('src'));
 // (mainImage.setAttribute('src','images/img2.jpg'));
     var img1=document.getElementById('img1');
     img1.onclick =function () {
        var img1path = img1.getAttribute('src');
         mainImage.setAttribute('src',img1path);
     };

     var img2=document.getElementById('img2');
     img2.onclick =function () {
         var img2path = img2.getAttribute('src');
         mainImage.setAttribute('src',img2path);
     };

     var img3=document.getElementById('img3');
     img3.onclick =function () {
         var img1path = img3.getAttribute('src');
         mainImage.setAttribute('src',img1path);
     };
     var img4=document.getElementById('img4');
     img4.onclick =function () {
         var img4path = img4.getAttribute('src');
         mainImage.setAttribute('src',img4path);
     };