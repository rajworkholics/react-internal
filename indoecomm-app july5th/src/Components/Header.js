import classes from './Header.module.css'

const Header = () =>
{
   return <div className={classes.header}>
    <p>Additional <span style={{color: 'red'}}>20% off </span>Sale items - Please See Details</p>
   </div>
}

export default Header;