import React from 'react'
import './Icon.css'
import { FaInstagramSquare, FaTwitter, FaYoutube, FaLinkedin, FaCloudDownloadAlt } from "react-icons/fa";
import { DiHtml5, DiCss3, DiSass, DiJavascript1, DiReact } from 'react-icons/di';
import { SiRedux } from 'react-icons/si';
import { BsFillPeopleFill } from 'react-icons/bs';
import { HiSpeakerphone }  from 'react-icons/hi';
import { AiFillLike, AiFillFacebook } from 'react-icons/ai';

const icons = {
  facebook: AiFillFacebook,
  instagram: FaInstagramSquare,
  twitter: FaTwitter,
  linkedin: FaLinkedin,
  youtube: FaYoutube,
  html: DiHtml5,
  css: DiCss3,
  sass: DiSass,
  javascript: DiJavascript1,
  react: DiReact,
  redux: SiRedux,
  cloudDownload: FaCloudDownloadAlt,
  people: BsFillPeopleFill,
  speaker: HiSpeakerphone,
  like: AiFillLike,
}

const Icon = (props) => {
  const IconComponent = icons[props.iconKey]
  const className = Object.keys(props).reduce((arr, key) => {
    return props[key] ? [...arr, key] : arr
  }, ['icon-wrapper']).join(' ')

  return (
    <div className={className} >
      <IconComponent />
    </div>
  )
}

export default Icon
