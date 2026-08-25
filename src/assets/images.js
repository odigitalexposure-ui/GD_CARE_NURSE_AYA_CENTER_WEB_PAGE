// Centralized Image Assets Map for GD Care Nurse And Aya Centre
// Easily replace images by swapping the imported files or changing the path here.

import img1 from './img1.jpeg';
import img2 from './img2.jpeg';
import img3 from './img3.jpeg';
import visitingCard1 from './visiting_card1.png';
import visitingCard2 from './visiting_card2.png';
import webLogo from './web_logo.png';
import transparentLogo from './transparent_logo.png';

// Key feature images (Professional healthcare & home care visuals)
export const heroImages = [
  {
    id: 1,
    url: '/images/hero-care.jpg',
    alt: 'GD Care Nurse providing senior care at home in Kolkata'
  },
  {
    id: 2,
    url: '/images/hero-mobility.jpg',
    alt: 'GD Care attendant assisting elderly patient with mobility and physical support'
  },
  {
    id: 3,
    url: '/images/hero-newborn.jpg',
    alt: 'GD Care experienced nurse and aya supporting mother and baby'
  }
];
export const heroBg = heroImages[0].url;
export const aboutImg = '/images/about-care.jpg'; // High-res compassionate caregiver & senior patient
export const visitingCardImg = visitingCard2; // Official visiting card with address & contact details
export const visitingCardFront = visitingCard1;
export const visitingCardBack = visitingCard2;
export const agencyLogo = transparentLogo;
export const transparentLogoImg = transparentLogo;

// Unique, non-duplicate authentic agency photographs & official assets for gallery & previews
export const agencyImages = [
  {
    id: 1,
    src: img1,
    title: 'GD Care Reception & Care Desk',
    category: 'Office & Desk',
    alt: 'GD Care Nurse And Aya Centre Reception Desk and Official Banner in Sonarpur, Kolkata',
    featured: true
  },
  {
    id: 2,
    src: img2,
    title: 'Care Consultation & Coordination Room',
    category: 'Consultation',
    alt: 'GD Care Nurse and Aya Centre consultation room and helpline display in Kolkata',
    featured: true
  },
  {
    id: 3,
    src: img3,
    title: 'Sonarpur Centre Entrance & Signage',
    category: 'Centre Entrance',
    alt: 'GD Care Nurse and Aya Centre Entrance with Service Details and Contact Numbers',
    featured: true
  },
  {
    id: 4,
    src: visitingCard1,
    title: 'Official Services & Care Offerings Card',
    category: 'Official Card',
    alt: 'GD Care Official Visiting Card with complete nursing, aya, elderly, and baby care services',
    featured: true
  },
  {
    id: 5,
    src: visitingCard2,
    title: 'Centre Address & 24/7 Helpline Card',
    category: 'Official Card',
    alt: 'GD Care Official Contact Card with Sonarpur Dakshin Ghosh Para address and emergency phone',
    featured: true
  },
  {
    id: 6,
    src: webLogo,
    title: 'Official GD Care Brand Emblem',
    category: 'Branding',
    alt: 'Official GD Care Nurse And Aya Centre Logo and Trust Mark',
    featured: false
  }
];

export default {
  heroBg,
  aboutImg,
  visitingCardImg,
  visitingCardFront,
  visitingCardBack,
  agencyLogo,
  agencyImages,
  img1,
  img2,
  img3,
  visitingCard1,
  visitingCard2,
  webLogo,
  transparentLogo
};
