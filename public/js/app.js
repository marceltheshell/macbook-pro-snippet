$( document ).ready(function() {
	console.log("ready to rock!");
    $('.prezento-holder').prezento({
      devices: [{
        name: 'imac',
        deviceImageSRC: './public/images/macbook-pro.png',
        xLeftTop: 200,
        yLeftTop: 100,
        xRightBottom: 2000,
        yRightBottom: 1200,
        breakpoint: 1024,
        bgImgSrc : './public/images/cowboys.jpg',
        bgTransitionDuration: '8s'
      }], 
      responsive: 'window'
    });
});

