import React from 'react'
import './home.css'

const Home=() =>
{
    return (
        <div className="home">
        <div className="back_image">
         <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAA1BMVEWJz/C4QSRIAAAAR0lEQVR4nO3BAQEAAACCIP+vbkhAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAO8GxYgAAb0jQ/cAAAAASUVORK5CYII=" height="500px" width="100%"/>
        </div>

        <div className="sbc">
        <p>Shop By Categories</p>
        </div>
        <p>FEATURED CATEGORIES</p>
   
       <div class="btn">
         <button>i</button> &nbsp; &nbsp;
         <button>i</button>
       </div>

       <div className="sbc">
        <p>See Our Latest</p>
        </div>
        <p>OUR PRODUCTS</p>

        <div className="ab">
          <table cellSpacing="100px" cellPadding="50px">
            <tr>
             <th>Free Shiping</th>
             <th>Free Returns</th>
             <th>100% Secure Payment</th>
             <th>Support 24/7</th>
            </tr>
            <tr>
              <td></td>
            </tr>
          </table>
        </div>
        </div>
    )
}

export default Home;