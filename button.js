stupidButton={
    count: 0,
    init:function(mysel){
        target = document.querySelectorAll(mysel)[0];
        wrapper= document.createElement('li');
            wrapper.classList.add('toolbar-item');
        button = document.createElement('a');
            button.id = "stupid"
            button.classList.add('toolbar-trigger')
            button.innerText = "Stupid ";
        counter = document.createElement('span');
            counter.classList.add('count');
            counter.style.background = "#c00";
            counter.style.color = '#fff';
            counter.style.borderRadius = '4px';
            counter.style.padding = '4px';
            counter.style.fontWeight = '700';
        button.appendChild(counter);
        wrapper.appendChild(button);
        target.appendChild(wrapper);
        
        button.addEventListener('click', function(){
            stupidButton.count++;
            var counter = document.querySelectorAll('#stupid .count')[0];
            counter.innerText = stupidButton.count;
        })
    }
}

stupidButton.init('#opsbar-opsbar-operations')