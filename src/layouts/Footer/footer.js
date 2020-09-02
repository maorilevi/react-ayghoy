import React from 'react';
const style = {
    backgroundColor: "#070f24",
    borderTop: "1px solid #070f24",
    textAlign: "center",
    padding: "20px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "60px",
    width: "100%",
};



function Footer() {
    const imageStyle = {
        width: '200px',
        height: 'auto'
    };
    return (
        <div>
            {/*<div style={phantom} />*/}
            <div style={style}>
                <a style={{float : 'left'}} href={'https://www.foresight.works/'}>
                    <img width="464" height="33"
                         style={imageStyle}
                      src="https://www.foresight.works/wp-content/uploads/2020/03/Foresite-Works-white-small.png"
                      className="attachment-large size-large" alt=""
                      srcSet="https://www.foresight.works/wp-content/uploads/2020/03/Foresite-Works-white-small.png 464w, https://www.foresight.works/wp-content/uploads/2020/03/Foresite-Works-white-small-300x21.png 300w"
                      sizes="(max-width: 464px) 100vw, 464px"/></a>
            </div>
        </div>
    )
}

export default Footer
