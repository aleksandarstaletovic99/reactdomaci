import React from 'react'
import slika11 from './bioskop/slika11.jpg';
import slika12 from './bioskop/slika12.jfif';
import slika13 from './bioskop/slika13.jfif';
import slika14 from './bioskop/slika14.jpg';
import slika15 from './bioskop/slika15.jfif';
import slika16 from './bioskop/slika16.jpg';

<script type="text/javascript"/>
function Slike()  {
    
    return (
     <div className='roditelj'>
         <div id='div1'>
         <img className="imag"  src={slika11}
         onMouseOver={e => (e.currentTarget.src = slika16)}
         onMouseOut={e => (e.currentTarget.src = slika11)}
          />
         </div>
         <div id='div2'>
         <img className="imag"  src={slika12}
          onMouseOver={e => (e.currentTarget.src = slika15)}
          onMouseOut={e => (e.currentTarget.src = slika12)}
         />
         </div>
         <div id='div3'>
         <img className="imag"  src={slika13}
          onMouseOver={e => (e.currentTarget.src = slika14)}
          onMouseOut={e => (e.currentTarget.src = slika13)}
         />
         </div>
         <div id='div4'>
         <img className="imag"  src={slika14}
          onMouseOver={e => (e.currentTarget.src = slika13)}
          onMouseOut={e => (e.currentTarget.src = slika14)}
         />
         </div>
         <div id='div5'>
         <img className="imag"  src={slika15}
          onMouseOver={e => (e.currentTarget.src = slika12)}
          onMouseOut={e => (e.currentTarget.src = slika15)}
         />
         </div>
         <div id='div6'>
         <img className="imag"  src={slika16}
          onMouseOver={e => (e.currentTarget.src = slika11)}
          onMouseOut={e => (e.currentTarget.src = slika16)}
         />
         </div>
     </div>  
    )
}

export default Slike
