
export function CarouselNavigationIcon({ isPreviousIcon = false}){
    return(
        <div>
            <img height={50} width={50} src={isPreviousIcon === true ? '/images/miscellaneous/previous.svg' : '/images/miscellaneous/next.svg'}></img>
        </div>
    );
}