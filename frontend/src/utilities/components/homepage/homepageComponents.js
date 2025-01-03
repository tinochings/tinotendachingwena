import componentsStyle from './components.module.css';
import Cvitem from '@/utilities/models/cvitem';

const listTypes = { LinksArrayType: Symbol(0), SkillsArrayType: Symbol(1)};
export function LogoContainer({ imageUrl, imageAlt, title, classList }) {
    return (
        <div className={classList}>
            <div>
                <img src={imageUrl} alt={imageAlt}></img>
            </div>
            <div>
                <span>{title}</span>
            </div>

        </div>
    );
}

/**
 * Singular list representation of a CV entry
 * @param {*} cvItem the model class instance representation
 * @returns 
 */
export function CurriculumnVitaeItem({ cvItem = new Cvitem() }) {
    return (
        <li className={`${componentsStyle.marginTop}`}>
            <div className={`${componentsStyle.cvItemCont}`}>
                <div className={`${componentsStyle.cvItemColumn1}`}>
                    <span>{cvItem.duration}</span>
                </div>

                <div className={`${componentsStyle.cvItemColumn2}`}>
                    <div className={`${componentsStyle.cvItemHeaderCont}`}>
                        <span>{cvItem.jobTitle}</span>
                        <span>{cvItem.company}</span>
                    </div>
                    <div className={`${componentsStyle.cvItemDescriptionCont}`}>
                        <p>
                            {cvItem.description}
                        </p>
                    </div>
                    <ConvertArrayToListItems arrayToConvert={cvItem.links} listType={listTypes.LinksArrayType}/>
                    <ConvertArrayToListItems arrayToConvert={cvItem.skillsAttained} listType={listTypes.SkillsArrayType}/>
                </div>
            </div>
        </li>
    );
}

/**
 * Converts a list of items to the following format:
 * <li>
 *      <span>arrayItem<span/>
 * </li>
 * or:
 * <li>
 *      <a>text</a>
 * </li>
 * @param {} arrayToConvert 
 */
function ConvertArrayToListItems({arrayToConvert, listType}, ){
    if (arrayToConvert !== undefined && arrayToConvert !== null && arrayToConvert.length > 0){
        switch(listType){
            case listTypes.SkillsArrayType: {
                return(
                    <div className={`${componentsStyle.cvItemSkillsCont}`}>
                        <ul className={`${componentsStyle.cvItemSkillsUl}`}>
                            {arrayToConvert.map((item, index) => 
                                <li key={index} className={`${componentsStyle.cvItemSkillsListItem}`}>
                                    <span>{item}</span>
                                </li>
                            )}
                        </ul>
                        </div>
                );
            }
            case listTypes.LinksArrayType: {
                return(
                    <div className={`${componentsStyle.cvItemSkillsCont}`}>
                        <ul className={`${componentsStyle.cvItemSkillsUl}`}>
                        {arrayToConvert.map((item, index) => 
                                <li key={index} className={`${componentsStyle.cvItemLinkListItem}`}>
                                    <img src={item.linkImage} alt={item.linkImage === '/images/miscellaneous/link.svg' ? 'Link available' : 'Link unavailable'}></img>
                                    <a className={`menu-item ${componentsStyle.cvAnchor}`} href={item.link} target='_blank'>{item.linkText}</a>
                                </li>
                            )}
                        </ul>
                        </div>
                );
            }
        }
    }

    return(
        <>
        </>
    );
}