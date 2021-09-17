document.addEventListener('DOMContentLoaded', () => {




    let startTime = Date.now();
    const minWidth = 20;
    const maxWidth = 300;
    const span = document.getElementById('timeTaken');

    let intId = null;

    function randColor() {
        const numbers = '0123456789ABCDEF'.split('');
        let result = '#';
        for (let i = 0; i < 6; i++) {
            result += numbers[Math.floor(Math.random() * 16)];
        }
        return result;
    }

    function elapsedTime(t1, t2) {
        t2 = t2 || Date.now();
        const t = Number.parseFloat((t2 - t1) / 1000);

        return t.toFixed(2).toLocaleString();
    }
    shape.addEventListener('click', shapeClicked);
    makeShapeAppear2();

    function makeShapeAppear1() {
        if (intId) {
            clearInterval(intId);
        }
        intId = setInterval(() => {

            shape.style.display = 'block';
        }, Math.random() * 2000);
    }

    function makeShapeAppear2() {
        if (intId) {
            clearTimeout(intId);
        }
        intId = setTimeout(() => {
            let w = Math.random() * maxWidth;
            if (w < minWidth) {
                w = minWidth;
            }
            if (Math.random() > .5) {
                shape.style.borderRadius = "50%";
            } else {
                shape.style.borderRadius = 0;
            }
            shape.style.display = 'block';
            shape.style.top = Math.random() * 400 + 'px';
            shape.style.left = Math.random() * 400 + 'px';
            shape.style.height = w + 'px';
            shape.style.width = w + 'px';
            shape.style.backgroundColor = randColor();

        }, Math.random() * 2000);
    }

    function shapeClicked() {
        shape.style.display = 'none';

        span.innerHTML = elapsedTime(startTime);
        startTime = Date.now();

        makeShapeAppear2();







    }
});