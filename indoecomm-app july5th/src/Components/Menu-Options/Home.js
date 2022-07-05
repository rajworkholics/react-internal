import classes from './Home.module.css'

import { NavLink } from 'react-router-dom';

const Home = () =>
{
    return <div className={classes.home}>
        <img src='https://www.indoasienlivs.se/indopage/indoecom/assets/images/slider/120.jpg'/>
        <p>Shop by Category</p>
        <h2>FEATURED CATEGORIES</h2>
        <table>
         <tr>
         <td><img src="https://www.indoasienlivs.se/indopage/indoecom/assets/images/category-icon/category-1.png" /></td>
         <td><img src="https://www.indoasienlivs.se/indopage/indoecom/assets/images/category-icon/category-2.png" /></td>
         <td><img src="https://www.indoasienlivs.se/indopage/indoecom/assets/images/category-icon/category-3.png" /></td>
         <td><img src="https://www.indoasienlivs.se/indopage/indoecom/assets/images/category-icon/category-4.png" /></td>
         <td><img src="https://www.indoasienlivs.se/indopage/indoecom/assets/images/category-icon/category-5.png" /></td>
         <td><img src="https://www.indoasienlivs.se/indopage/indoecom/assets/images/category-icon/category-6.png" /></td>
        </tr>
        <tr>
        <td><NavLink activeClassName={classes.active} to="/test">Test</NavLink></td>
        <td><NavLink activeClassName={classes.active} to="/test1">Test 1</NavLink></td>
        <td><NavLink activeClassName={classes.active} to="/test2">Test 2</NavLink></td>
        <td><NavLink activeClassName={classes.active} to="/test3">Test 3</NavLink></td>
        <td><NavLink activeClassName={classes.active} to="/test4">Test 4</NavLink></td>
        <td><NavLink activeClassName={classes.active} to="/test5">Test 5</NavLink></td>
        </tr>
    </table>
    </div>
}

export default Home;