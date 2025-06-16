document.addEventListener('DOMContentLoaded', function() {
  var images = [
    {
      src: '/bg-images/wq7VErajAaE.webp',
      photographer: 'KTRYNA',
      photographerLink: 'https://unsplash.com/de/@ktryna?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
      imageLink: 'https://unsplash.com/de/fotos/wq7VErajAaE?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'
    },
    {
      src: '/bg-images/fdF3PitDawc.webp',
      photographer: 'KTRYNA',
      photographerLink: 'https://unsplash.com/de/@ktryna?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
      imageLink: 'https://unsplash.com/de/fotos/fdF3PitDawc?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash'
    },  
    {
      src: '/bg-images/6JQMjhqpVhE.webp',
      photographer: 'Jez Timms',
      photographerLink: 'https://unsplash.com/de/@jeztimms?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
      imageLink: 'https://unsplash.com/de/fotos/aufschnitt-und-fleisch-clever-6JQMjhqpVhE?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash'
    },  
    {
      src: '/bg-images/iwP2UhGvnJI.webp',
      photographer: 'Harris Vo',
      photographerLink: 'https://unsplash.com/de/@hoanvokim?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
      imageLink: 'https://unsplash.com/de/fotos/funf-fische-zwischen-tomaten-auf-schwarzem-netz-iwP2UhGvnJI?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash'
    }
  ];

  var randomImage = images[Math.floor(Math.random() * images.length)];
  var bg = document.querySelector('.bgimg');
  bg.style.backgroundImage = 'url(' + randomImage.src + ')';

  var photographerLink = document.getElementById('photographer-link');
  var imageLink = document.getElementById('image-link');
  photographerLink.textContent = randomImage.photographer;
  photographerLink.href = randomImage.photographerLink;
  imageLink.href = randomImage.imageLink;
});
