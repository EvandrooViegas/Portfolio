import iInfo from "./iInfo";
import iSocialMedia from "./iSocialMedia";
import iTestimonial from "./iTestimonial";

export default interface iMe {
    name:           string,
    avatar:         string,
    description:    string,
    slogan:         string,
    skills:         string[]
    infos:          iInfo[],
    social_medias:  iSocialMedia[],
    testimonials:   iTestimonial[],
    _id:            string
    _updatedAt:     Date
    _createdAt:     Date
    _rev:           string
    _type:          "me"
}