import React from 'react'

const Biography = ( {imageUrl}) => {
   
    return (
        <div className="container biography">
            <div className='banner'>
                <img src= {imageUrl} alt="biography" />
            </div>
            <div class="banner">
                <p>Biography</p>
                <h3>Who we are?</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum amet rem voluptatem provident. Tenetur aliquid deserunt quasi porro consequatur vitae mollitia, facilis repellendus similique earum fuga inventore modi quae facere, obcaecati aut repellat. Nostrum esse delectus maiores soluta, non facilis odio ipsam unde in! Obcaecati officia inventore modi exercitationem magnam!</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque molestiae laudantium excepturi assumenda architecto debitis facilis quia ex expedita, quis ratione eius, illum fugit deserunt. Autem voluptas perspiciatis officia excepturi cumque voluptates sapiente. Expedita, earum.</p>
                <p>Lorem, ipsum dolor.</p>

            </div>

        </div>
    )


}
export default Biography