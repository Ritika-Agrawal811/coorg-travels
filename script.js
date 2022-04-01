

function viewModal(imageName){
    let modal = document.createElement('div');
    let img = document.createElement('img');
    let icon = document.createElement('i');

    img.src= "/images/" + imageName;
    icon.classList.add('fa-solid','fa-xmark');
    modal.classList.add('modal');
    modal.classList.add('open');
    modal.appendChild(img);
    modal.appendChild(icon);

    icon.addEventListener('click' , ()=>{
        modal.classList.remove('open');
    });

    document.body.append(modal);
}

function moveLeft(galleryName){

    let gallery = document.getElementById(galleryName);
    let activeImage = gallery.querySelector('.active-image');
    let previousImage = activeImage.previousElementSibling;
    let nextImage = activeImage.nextElementSibling;

    gallery.removeChild(previousImage);

    // next image styling
    nextImage.classList.remove('zoomInNext' , 'zoomOutPreviousLeft' , 'zoomOutPreviousRight' , 'zoomInActiveRight');
    nextImage.classList.add('active-image' , 'zoomInActiveLeft');
    nextImage.nextElementSibling.classList.add('zoomInNext');

    // current image styling
    activeImage.classList.remove('active-image' , 'zoomInNext' , 'zoomOutPreviousLeft', 'zoomOutPreviousRight' , 'zoomInActiveLeft','zoomInActiveRight' );
    activeImage.classList.add('zoomOutPreviousLeft');

    // previous image styling
    previousImage.classList.remove('zoomOutPreviousLeft' , 'zoomInNext' , 'zoomOutPreviousRight' , 'zoomInActiveLeft','zoomInActiveRight');

    gallery.append(previousImage);   

}

function moveRight(galleryName){

    let gallery = document.getElementById(galleryName);
    let activeImage = gallery.querySelector('.active-image');
    let previousImage = activeImage.previousElementSibling;
    let lastImage = gallery.lastElementChild;

    gallery.removeChild(lastImage);

    // previous image styling
    previousImage.classList.remove('zoomInNext' , 'zoomOutPreviousLeft' , 'zoomInActiveLeft','zoomInActiveRight' );
    previousImage.classList.add('active-image' ,'zoomInActiveRight');
   

    // current image styling
    activeImage.classList.remove('active-image' , 'zoomInNext' , 'zoomOutPreviousRight', 'zoomOutPreviousLeft' , 'zoomInActiveLeft','zoomInActiveRight');
    activeImage.classList.add('zoomOutPreviousRight');

    // last image styling   
    lastImage.classList.remove('zoomOutPreviousRight' , 'zoomInNext', 'zoomOutPreviousLeft' , 'zoomInActiveLeft','zoomInActiveRight');
    lastImage.classList.add('zoomInNext');
    gallery.prepend(lastImage);
      

}

function closeGallery(galleryId){
    let gallery = document.getElementById(galleryId);
     
    gallery.classList.remove('showGallery');
    
}


function openGallery(galleryId){
    let gallery = document.getElementById(galleryId);
     
    gallery.classList.add('showGallery');
}

