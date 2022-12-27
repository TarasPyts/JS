let i = 0;

   let    images = ["images/img1.jpg",
                    "images/img2.jpg",
                    "images/img3.jpg",
                    "images/img4.jpg",
                    "images/img5.jpg"];

function switchImages(param)
{
  if (param === 'next') {
    i++;
    if(i === images.length) i = 0 
  }else{
    i--;
    if(i < 0) { i = images.length -1 }
    }
  document.getElementById('slide').src = images[i];
  }


