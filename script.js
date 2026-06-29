const box=document.querySelector('id','box')
const btn=document.querySelector('id','Tglbtn')


btn.addEventListener('click',function(){
    if (box.querySelector.contains('class','light-mode')){
        box.querySelector.remove('class','light-mode');
        box.querySelector.add('class','dark-mode');
    }else{
        box.querySelector.remove('class','dark-mode');
        box.querySelector.add('class','light-mode');
    }
})