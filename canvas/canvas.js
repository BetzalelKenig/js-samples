window.addEventListener('load', () => {
    const canvas = document.querySelector('#canvas');
    const ctx = canvas.getContext('2d');

    const resize = () => {
        canvas.height = window.innerHeight;
        canvas.width = window.innerWidth;
    }
    resize();

    window.addEventListener('resize', resize);

    let painting = false;

    const startPosition = (e) => {
        painting = true;
        draw(e);
    }
    const finishPosition = () => {
        painting = false;
        ctx.beginPath();
    }

    const draw = (e) => {
        if (!painting) return;
        ctx.lineWidth = 5;
        ctx.strokeStyle = 'red';
        ctx.lineCap = 'round';

        ctx.lineTo(e.clientX, e.clientY);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(e.clientX, e.clientY);
    }

    canvas.addEventListener('mousedown', startPosition);
    canvas.addEventListener('mouseup', finishPosition);
    canvas.addEventListener('mousemove', draw);
});