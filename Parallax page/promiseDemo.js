

window.addEventListener('DOMContentLoaded', (event) => {
    var bannerImage = document.querySelector('.banner-image');
    tenSecond().then(nineSecond(), eightSecond(), sevenSecond(), sixSecond(), fiveSecond(), fourSecond(), threeSecond(), twoSecond(), oneSecond());
    Promise.all([tenSecond, nineSecond, eightSecond, sevenSecond, sixSecond, fiveSecond, fourSecond, threeSecond, twoSecond, oneSecond]).then(res => { console.log("Let's Play!") });
});

var bannerImage = document.querySelector('.banner-image');
const oneSecond = () => new Promise((resolve, reject) => {
   

    resolve(setTimeout(() => {
        bannerImage.setAttribute('src', 'images/first.jpg');
        document.querySelector('#first').classList.add('show');
    }, 9000));
});

const twoSecond = () => new Promise((resolve, reject) => {
    let bannerImage = document.querySelector('.banner-image');

    resolve(setTimeout(() => {
        bannerImage.setAttribute('src', 'images/second.jpg');

        document.querySelector('#second').classList.add('show');
    }, 8000));
});

const threeSecond = () => new Promise((resolve, reject) => {
    let bannerImage = document.querySelector('.banner-image');

    resolve(setTimeout(() => {
        bannerImage.setAttribute('src', 'images/third.jpg');

        document.querySelector('#third').classList.add('show');
    }, 7000));
});

const fourSecond = () => new Promise((resolve, reject) => {
    let bannerImage = document.querySelector('.banner-image');

    resolve(setTimeout(() => {
        bannerImage.setAttribute('src', 'images/fourth.jpg');

        document.querySelector('#fourth').classList.add('show');
    }, 6000));
});

const fiveSecond = () => new Promise((resolve, reject) => {
    let bannerImage = document.querySelector('.banner-image');

    resolve(setTimeout(() => {
        bannerImage.setAttribute('src', 'images/fifth.jpg');
        document.querySelector('#fifth').classList.add('show');
    }, 5000));
});

const sixSecond = () => new Promise((resolve, reject) => {
    let bannerImage = document.querySelector('.banner-image');

    resolve(setTimeout(() => {
        bannerImage.setAttribute('src', 'images/sixth.jpg');

        document.querySelector('#sixth').classList.add('show');
    }, 4000));
});

const sevenSecond = () => new Promise((resolve, reject) => {
    let bannerImage = document.querySelector('.banner-image');

    resolve(setTimeout(() => {
        bannerImage.setAttribute('src', 'images/seventh.jpg');

        document.querySelector('#seventh').classList.add('show');
    }, 3000));
});

const eightSecond = () => new Promise((resolve, reject) => {
    let bannerImage = document.querySelector('.banner-image');

    resolve(setTimeout(() => {
        bannerImage.setAttribute('src', 'images/eighth.jpg');

        document.querySelector('#eighth').classList.add('show');
    }, 2000));
});

const nineSecond = () => new Promise((resolve, reject) => {

    resolve(setTimeout(() => {
        bannerImage.setAttribute('src', 'images/ninth.jpg');

        document.querySelector('#ninth').classList.add('show');
    }, 1000));
});

const tenSecond = () => new Promise((resolve, reject) => {
    let bannerImage = document.querySelector('.banner-image');

    resolve(setTimeout(() => {
        bannerImage.setAttribute('src', 'images/tenth.jpg');
        document.querySelector('#tenth').classList.add('show');
    }, 0));
});

