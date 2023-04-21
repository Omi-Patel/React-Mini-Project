import React from "react";

function Cards(props) {
    return (
        <>
            <div className='cards'>
                <div className='card'>
                    <img src={props.img_src} width="400px" height="200px" alt='This is Image' className='img_class'
                    />
                    <div className='card_info'>
                        <span >{props.title}</span>
                        <h3>{props.sname}</h3>
                        <a href='' target='_blank'>
                            <button>Watch Now!</button>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Cards;