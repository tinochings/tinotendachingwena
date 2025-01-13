
export function CarouselNavigationIcon({ isPreviousIcon = false }) {
    return (
        <div>
            <img height={50} width={50} src={isPreviousIcon === true ? '/images/miscellaneous/previous.svg' : '/images/miscellaneous/next.svg'}></img>
        </div>
    );
}

/**
 * imageObject = 
 * {
 *  style : module.css,
 * imageUrl : String,
 * alt: String,
 * onCloseImageView: function
 * }
 * @param {*} param0 
 * @returns 
 */
export function ImageViewer({ imageViewObject }) {

    return (
        <div className={`${imageViewObject.style.imageViewerContainer}`}>
            <div className={imageViewObject.style.overlay}></div>
            <div className={`container ${imageViewObject.style.imageBodyContainer}`}>
                <div className={imageViewObject.style.imageHeader}>
                    <img width={50} height={50} onClick={(e) => { e.preventDefault(); imageViewObject.onCloseImageView(); }} src="/images/miscellaneous/cancel.svg" alt="Close alert container"></img>
                </div>
                <div className={imageViewObject.style.imageBody}>
                    <img src={imageViewObject.imageUrl} alt={imageViewObject.alt} className={imageViewObject.style.imageView}></img>
                </div>
            </div>
        </div>
    );
}