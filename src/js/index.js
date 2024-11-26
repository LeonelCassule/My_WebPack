import '../css/styles.css';
import img from '../assets/bg.png';

const textComponent = () =>{
    const elH1 = document.createElement('h1');
    elH1.innerHTML = 'Leonel António Domingos Cassul';
    elH1.classList.add('main-title');
    return elH1;
 }

 const imgComponent = () => {
    const elImg = new Image(300, 150);
    elImg.src = img;
    return elImg;

 }

 document.body.appendChild(textComponent());
 document.body.appendChild(imgComponent());