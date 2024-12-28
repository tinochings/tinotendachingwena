
export function CarouselNavigationIcon({ isPreviousIcon = false}){
    return(
        <div>
            <img height={50} width={50} src={isPreviousIcon === true ? '/miscellaneous/previous.svg' : '/miscellaneous/next.svg'}></img>
        </div>
    );
}