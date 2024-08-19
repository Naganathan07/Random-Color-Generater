let hexBtn = document.querySelector('.hex-btn');
let hexClrValue = document.querySelector('.hex-clr-value');
let hexclrContainer = document.querySelector('.hex-clr-container');
let hexCopy = document.querySelector('.hex-copy');

hexBtn.addEventListener('click', () =>{

    let characterSet = '0123456789ABCDEF';
    let hexColorOutput = '' ;

    for(let i =0 , charSetLenghth = characterSet.length ; i< 6;++i){
        hexColorOutput +=characterSet.charAt(Math.floor(Math.random() * charSetLenghth)
    );
    }

    hexClrValue.textContent =`#${hexColorOutput}`;
    hexclrContainer.style.backgroundColor = `#${hexColorOutput}`;
    hexBtn.style.color =`#${hexColorOutput}`;
    console.log(hexColorOutput);
    
});


let rgbBtn = document.querySelector('#rgb-btn');
let getRedIpRange = document.querySelector('#red');
let getGreenIpRange = document.querySelector('#green');
let getBlueIpRange = document.querySelector('#blue');
let rgbClrContainer = document.querySelector('.rgb-clr-container');
let rgbCopy = document.querySelector('.rgb-copy');
let rgbClrValue = document.querySelector('.rgb-clr-value');
rgbBtn.addEventListener('click' , ()=>{
    let extractRedValue = getRedIpRange.value ;
    let extractGreenValue = getGreenIpRange.value;
    let extractBlueValue = getBlueIpRange.value;

    rgbClrValue.textContent =`rgb(${extractRedValue},${extractGreenValue},${extractRedValue})`

    rgbClrContainer.style.backgroundColor =`rgb(${extractRedValue},${extractGreenValue},${extractRedValue})`;
    rgbBtn.style.color =`rgb(${extractRedValue},${extractGreenValue},${extractRedValue})`;
    console.log(extractRedValue,extractGreenValue,extractBlueValue);
    
});

function copyHexClrToClipBoard(){
    navigator.clipboard.writeText(hexClrValue.textContent);
    alert('Hex Color is Copied To ClipBoard');  
}


hexCopy.addEventListener('click',copyHexClrToClipBoard)

function copyrgbClrToClipBoard(){

    navigator.clipboard.writeText(rgbClrValue.textContent);
    alert('RGB Color is Copied To ClipBoard')
}

rgbCopy.addEventListener('click',copyrgbClrToClipBoard);