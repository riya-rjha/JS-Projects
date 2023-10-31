let productImg = document.querySelector('.img');
let btn = document.getElementsByClassName('btn-gallery');

    //this is not used with arrow functions
    btn[0].addEventListener('click', function(){
        productImg.src = 'Images/image1.png';
        for(i of btn){
            i.classList.remove('active');
        }
        this.classList.add('active');
    })
    btn[1].addEventListener('click', function(){
        productImg.src = 'Images/image3.png';
        for(i of btn){
            i.classList.remove('active');
        }
        this.classList.add('active');
    })
    btn[2].addEventListener('click', function(){
        productImg.src = 'Images/image2.png';
        for(i of btn){
            i.classList.remove('active');
        }
        this.classList.add('active');
    })
