const b = document.querySelector('button.button--no');
b.addEventListener('onclick', onclick);

b.onclick = function(){
    const i=Math.floor(Math.random() * 800)+0;
    const j=Math.floor(Math.random() * 800)+0;

    b.style.left=i+"px"
    b.style.top=j+"px"
}

const b2 = document.querySelector('button.button--yes');
b2.addEventListener('onclick', onclick);

b2.onclick = function(){
    var text = 'ayieeee akala ko matitiis mo ako e,' +
    '<br> sorry na wag kana sad dyan mahal na mahal kita,' +
    '<br> I Love You.' 
    document.querySelector('p').innerHTML=text;
} 