import classes from './Footer.module.css'

const Footer = () =>
{
    return (
           <div className={classes.footer}>
  
            <table>
              <tr>
              <td>
              <h1>LET'S KEEP IN TOUCH</h1>
             </td>
              <td>
            <h2>About Us</h2>
          </td>
          <td>
          <div className="">
            <h2>Information</h2>
          </div>
          </td>
          <td>
          <div className="">
            <h2>Custom</h2>
          </div>
         </td>
         </tr>
         <tr></tr>
            <p>Sign up for our e-mail to get latest news.</p>
            <input type= "text" placeholder="Your E-mail Address"/>
            <button>Sign-Up</button>
         </table>
      </div>
    )
}

export default Footer;