
function Button() {
    Array.from(document.querySelectorAll("button.play")).forEach((button) => {
        button.addEventListener("click", function () {
            window.location.reload();
        });
    });

    return (
        <button id="play" className="play">Shuffle</button>
    );
}
export default Button;
