import iInfo from "./iInfo";
import iSocialMedial from "./iSocialMedia";

export default interface iMe {
    name:           string,
    avatar:         string,
    description:    string,
    slogan:         string,
    skills:         string[]
    infos:          iInfo[],
    social_medias:  iSocialMedial[]
    _id:            string
    _updatedAt:     Date
    _createdAt:     Date
    _rev:           string
    _type:          "me"
}