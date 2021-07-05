import Button from './Button';

function Header() {
    return (
        <div className="col-12 text-center">
            <h1 className="text-center">Memory 3000 </h1><br />
            <p id="story" className="text-center">Hello stranger, the citizens of tron needs you.<br />Get access
                to the mainframe and free the poor people.<br /><br />
                Select two cards, if they're equal it will stay visible,<br /> otherwise it will flip back.You
                win when you've guessed all the pairs.
            </p>
            <Button />
        </div>
    );
}
export default Header;
