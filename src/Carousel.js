function Carousel(){
    return(
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img className="d-block w-100" src="images/curry_de_legume.jpg" alt="First slide"/>
                </div>
                <div className="carousel-item">
                <img className="d-block w-100" src="images/1.jpg" alt="Second slide"/>
                </div>
                <div className="carousel-item">
                <img className="d-block w-100" src="images/2.jpg" alt="Third slide"/>
                </div>
            </div>
        </div>
    );
};

export default Carousel;