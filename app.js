let count = 0;

    function updateCounter() {
        document.querySelector('counter').innerText = count;
    }

    function increment() {
        count++;
        updateCounter();
    }

    function decrement() {
        count--;
        updateCounter();
    }