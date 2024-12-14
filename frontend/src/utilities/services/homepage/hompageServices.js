import Cvitem from "@/utilities/models/cvitem";

/**
 * 
 * @returns instantiated Delta Beverages CV ITEM 
 */
export function deltaBeveragesCvItem() {
    let deltaBeverages = new Cvitem("08/2024 - Current", "Delta Beverages - Transport Services", "I.C.T Specialist",
         [], ['Resource Management', 'Systems Integration', 'SAP']);

    deltaBeverages.description = `Leverage my expertise in software development to provide acute insight 
    in integrating new software systems into Delta's technological ecosystem. Provide technical software support for applications such as
    SAP. Maintain and manage I.T resources physiclly and remotely for all Delta Transport Services branches. Facilitating the increase
    of computer literacy within the organization by the provision of ICT training and workshops `;

    return deltaBeverages;
}