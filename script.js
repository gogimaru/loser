const box=document.querySelector('.box')
const btn=document.querySelector('.Tglbtn')


btn.addEventListener('click',function(){
    if (box.querySelector.contains('#light-mode')){
        box.querySelector.remove('#light-mode');
        box.querySelector.add('#dark-mode');
    }else{
        box.querySelector.remove('#dark-mode');
        box.querySelector.add('#light-mode');
    }
})

console.log("hi")