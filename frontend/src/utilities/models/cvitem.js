export default class Cvitem {
    #description = ''; 

    /**
     * 
     * @param {*} duration Time period worked for the company in format MM/YYYY - (MM/YYY || Current)
     * @param {*} company Name of the company worked for
     * @param {*} jobTitle The postion at the company worked
     * @param {*} links URL Links provided if any 
     * @param {*} skillsAttained Defines the set of skills  used and improved
     */
    constructor (duration = "", company = "", jobTitle = "", links = [], skillsAttained = []){
        this.duration = duration;
        this.company = company;
        this.jobTitle = jobTitle;
        this.links = links;
        this.skillsAttained = skillsAttained;
    }

    get description(){
        return this.#description;
    }
    set description(description) {
        this.#description = description;
    }
    produceObject() {
        return {
            duration: this.duration,
            company: this.company,
            position: this.position,
            description: this.description,
            links: this.links,
            skillsAttained:this.skillsAttained
        };
    }
}