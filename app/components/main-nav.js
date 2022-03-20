import Component from '@ember/component';

export default Component.extend({

    testFunc() {
        let burgerMenu = document.getElementById('burger-menu');
        let overlay = document.getElementById('menu');

        burgerMenu.addEventListener('click',function(){
            this.classList.toggle("close");
            overlay.classList.toggle("overlay");
        });
        console.log('test');
        return this.testFunc();
    }

    
});
