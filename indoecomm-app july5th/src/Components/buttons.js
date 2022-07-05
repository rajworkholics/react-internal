import classes from './buttons.module.css';

const Buttons = () =>
{

    const showOptions =() =>{
        
    }

    const showCart =() =>{
        
    }

    return (
        <div className={classes.button}>
            <button onClick={showOptions}></button>
            <button onClick={showCart}></button>
        </div>
    )
}

export default Buttons;