
let black = document.querySelectorAll('.black .colour img');
let allImage = document.querySelector('.mySlides');


const selectors = {
    priceSelector: {
        selector: document.querySelector('.variant-price'),
        value: document.querySelector('.variant-price').innerHTML
    },
    titleSelector: {
        selector: document.querySelector('.variant-title'),
        value: document.querySelector('.variant-title').innerHTML
    },
    imagesSelector: {
        selector: document.querySelector('.mySlides'),
        value: document.querySelector('.mySlides').innerHTML
    },
    featuredImageSelector: {
        selector: document.querySelector('.row'),
        value: document.querySelector('.row').innerHTML
    },

}


const products = [
    {
        handle: "black-jibbon",
        images: ['./img/j1.webp', './img/j2.webp', './img/j4.jpg', './img/6.jpg', './img/j3.webp', './img/9.webp', './img/7.webp'],
        featuredImage: '',
        price: "$59.90 AUD",
        title: "Black",
        description: ""
    },
    {
        handle: "cocoa-jibbon",
        images: ['./img4/1.webp', './img4/3.jpg', './img4/4.jpg', './img4/5.jpg', './img4/7.webp'],
        featuredImage: '',
        price: "$59.90 AUD",
        title: "Coca",
        description: ""
    },
    {
        handle: "tan-jibbon",
        images: ['./img4/13.webp', './img/j2.webp', './img4/14.webp', './img4/15.jpg', './img4/14.jpg', './img4/13-2.jpg'],
        featuredImage: "",
        price: "$59.90 AUD",
        title: "Tan",
        description: ""
    },
    {
        handle: "blush-jibbon",
        images: ['./img4/615.webp', './img4/AAA.webp', './img4/851.webp', './img4/852.webp', './img4/853.webp', './img4/854.webp', './img4/855.webp', './img4/856.webp'],
        featuredImage: '',
        price: "$59.90 AUD",
        title: "Blush",
        description: ""
    }
];




const colors = document.querySelectorAll('.jibbon-colors');
const block = document.querySelector('.inner-blok .div');

colors && colors.forEach((e) => {
    e.addEventListener('click', (colorItem) => {
        const handle = colorItem.target.dataset.handle;
        const productObj = products.filter((product) => {
            return product.handle === handle;
        });
        const product = productObj[0];
        selectors.priceSelector.value = product.price;
        selectors.titleSelector.value = product.title;
        selectors.imagesSelector.value = product.images.map((url,index) => {
            const img = document.createElement('img');
            img.src = url;
            img.setAttribute('class', 'mySlidItem')
            if(index === 0){
                img.setAttribute('class', 'initial-coca');
               
            }
            return img;
        });
        selectors.featuredImageSelector.value = product.images.map((url) => {
            const img = document.createElement('img');
            img.src = url;
            img.setAttribute('class', 'cursor demo')
            return img
        });
        render(selectors);
    });

});

function render(selectors) {
    for (const [key, value] of Object.entries(selectors)) {
        value.selector.innerHTML = value.value;
        if (key === 'imagesSelector') {
            value.selector.innerHTML = "";
            value.value.map((image,index) => {
            if(index === 0){
                image.style.display = 'block';
            }
            value.selector.appendChild(image);
            });
        }
        if (key == 'featuredImageSelector') {
            value.selector.innerHTML = '';
            value.value.map((featured,index) => {
                featured.addEventListener('click', () =>{
                    currentSlide(index+1);
                })
                value.selector.appendChild(featured);
            })
        }
    }
}

let buttons = document.querySelectorAll('.jibbon-colors');
buttons.forEach(button => {
    button.addEventListener('click', function () {
        buttons.forEach(btn => btn.classList.remove('active'));
        block.classList.remove('active');
        this.classList.add('active');
    });
});


let btn = document.querySelector('.black form .btn');
let select = document.querySelector('.black form select');
let monogram = document.querySelector('.black form .monogram')
let inp = document.querySelector('.black form input');
let h = document.querySelector('.num');
let pr = document.querySelector('.black .variant-price');
let mySlidItem = document.querySelectorAll('.mySlidItem');


select.addEventListener('click', func);
btn.addEventListener('click', function (e) {
    e.preventDefault();
});

function func(e) {
    if (e.target.value === 'YES') {
        monogram.classList.add('active');
        pr.innerHTML = '$74.90 AUD';
    } else {
        monogram.classList.remove('active');
        h.innerHTML = '';
        inp.value = '';
        pr.innerHTML = '$59.90 AUD';
    }
}


inp.oninput = function () {
    h.innerHTML = inp.value;    
};



const accordion = document.getElementsByClassName('container');

for (let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener('click', function () {
        this.classList.toggle('active');
    })
    if (i == 2) {
        accordion[i].addEventListener('click', function () {
            accordion[i].classList.toggle('active1')
        })
    }
}






let modal = document.getElementById('myModal');
let btn1 = document.querySelectorAll('.circle img');
let span = document.getElementsByClassName("close")[0];
let header = document.querySelector('.modal-header');
let price = document.querySelector('.price');


btn1.forEach((el, index) => {
    el.addEventListener('click', function () {

        switch (index) {

            case 0: document.getElementById('renderList').innerHTML = '';
                price.innerHTML = '';
                header.innerHTML = '';
                modal.style.display = "block";
                let h1 = document.createElement('h1');
                h1.innerHTML = 'Multi-Tool';
                header.appendChild(h1);
                header.appendChild(span);
                let money = document.createElement('p')
                money.innerHTML = '$16.50 AUD'
                price.appendChild(money);
                let img = document.createElement('img')
                img.src = 'img3/Multi-Tool-1.webp';
                document.getElementById('renderList').appendChild(img);
                var ul = document.createElement('ul');
                ul.setAttribute('id', 'proList');
                document.getElementById('renderList').appendChild(ul);

                var productList = [
                    'Bottle opener',
                    'Flathead screwdriver',
                    'Box cutter', 'Nail file',
                    'Pry tool', 'Stainless steel'
                ];
                break;

            case 1: document.getElementById('renderList').innerHTML = '';
                header.innerHTML = '';
                price.innerHTML = '';
                modal.style.display = "block";
                let header1 = document.createElement('h1');
                header1.innerHTML = 'USB 64GB';
                header.appendChild(header1);
                header.appendChild(span);
                let money1 = document.createElement('p');
                money1.innerHTML = '$18.60 AUD'
                price.appendChild(money1);
                let img1 = document.createElement('img')
                img1.src = 'img3/Multi-Tool-2.webp';
                document.getElementById('renderList').appendChild(img1);
                var ul = document.createElement('ul');
                ul.setAttribute('id', 'proList');
                document.getElementById('renderList').appendChild(ul);

                var productList = [
                    '64GB Storage',
                    'USB 3.0',
                    'Matte stainless finish',
                    'Silicone washer included'
                ];
                break;

            case 2: document.getElementById('renderList').innerHTML = '';
                header.innerHTML = '';
                price.innerHTML = '';
                modal.style.display = "block";
                let header2 = document.createElement('h1');
                header2.innerHTML = 'Titanium Keyring';
                header.appendChild(header2);
                header.appendChild(span);
                let money2 = document.createElement('p');
                money2.innerHTML = '$15.00 AUD'
                price.appendChild(money2);
                let img2 = document.createElement('img')
                img2.src = 'img3/Multi-Tool-3.webp';
                document.getElementById('renderList').appendChild(img2);
                let p = document.createElement('p');
                document.getElementById('renderList').appendChild(p);
                p.innerHTML = ' The Jibbon grade 5 titanium keyri0ng attachment will allow you to add your fob, extra keys or electronic car key to the D-ring.<br> <br> Outside dimensions: 25mm x 14mm x 2.8mm';
                var productList = [
                    '64GB Storage',
                    'USB 3.0',
                    'Matte stainless finish',
                    'Silicone washer included'
                ];
                break;
        }

        document.getElementById('renderList').appendChild(ul);
        productList.forEach(renderProductList);

        function renderProductList(element, index, arr) {
            let li = document.createElement('li');
            li.setAttribute('class', 'item');
            ul.appendChild(li);
            document.getElementById('renderList').appendChild(ul);
            li.innerHTML = li.innerHTML + element;
        }
    })
})


span.onclick = function () {
    modal.style.display = "none";
}


window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}





let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  block.classList.add('active');
  showSlides(slideIndex += n);
};

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}



function showSlides(n) {
    let i;
    let slides = document.querySelectorAll(".mySlides img");
  
    let dots = document.getElementsByClassName("demo");

    if(n == 0){slideIndex > 0};
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
  
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
  
    dots[slideIndex-1].className += " active";
  
  }






