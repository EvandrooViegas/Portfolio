import iFollowersGrowth from "./iFollowersGrowth";
import iInfo from "./iInfo";
import iSocialMedia from "./iSocialMedia";
import iTestimonial from "./iTestimonial";
import iVideo from "./iVideo";

export default interface iMe {
    name:           string,
    description:    string,
    avatar:         string,
    video:          string;
    skills:         string[]
    slogan:         string,
    best_videos:    iVideo[]
    behind_scenes:  iVideo[]
    social_medias:  iSocialMedia[],
    infos:          iInfo[],
    growth:         iFollowersGrowth[]
    testimonials:   iTestimonial[],
    _id:            string
    _updatedAt:     Date
    _createdAt:     Date
    _rev:           string
    _type:          "me"
}