// Real project photos from Facebook — newest projects go first in the array
import washroomBefore from '../assets/Washroom-before.jpg'
import washroomAfter from '../assets/Washroom-after.jpg'
import deckBefore from '../assets/lawnstairs-before.jpg'
import deckAfter from '../assets/lawnstairs-after.jpg'
import doorBefore from '../assets/door-before.jpg'
import doorAfter from '../assets/door-after.jpg'

export const BEFORE_AFTER_PROJECTS = [
  {
    id: 'deck-stairs-build',
    title: 'Custom Deck & Staircase',
    category: 'Deck & Outdoor Build',
    caption:
      'Latest project! This deck started out as an 8x12. The customer decided to add 4 feet and a set of stairs. Turned out really nice! Contact BHS for your project needs.',
    beforeImage: deckBefore,
    afterImage: deckAfter,
    tags: ['8×12 Deck', '4\' Extension', 'Custom Stairs', 'Pressure-Treated Wood'],
    featured: true,
    isLatest: true,
    aspectClass: 'aspect-[4/3]',
    beforePosition: '60% center',
    afterPosition: '50% 65%',
  },
  {
    id: 'door-replacement',
    title: 'Exterior Door Replacement',
    category: 'Door & Window Install',
    caption:
      'Replaced this 1950\'s exterior door with an updated vinyl sliding glass door. What a difference!',
    beforeImage: doorBefore,
    afterImage: doorAfter,
    tags: ['1950\'s Door Removal', 'Vinyl Sliding Glass Door', 'Exterior Upgrade'],
    featured: false,
    isLatest: false,
    aspectClass: 'aspect-[4/3]',
    beforePosition: '55% center',
    afterPosition: 'center',
  },
  {
    id: 'washroom-update',
    title: 'Small Bathroom Update',
    category: 'Bathroom Renovation',
    caption:
      'Before and after of a small bathroom update today. New tub drain, new vanity and new flooring!',
    beforeImage: washroomBefore,
    afterImage: washroomAfter,
    tags: ['New Tub Drain', 'New Vanity', 'New Flooring'],
    featured: false,
    isLatest: false,
    aspectClass: 'aspect-[3/4]',
    beforePosition: 'center',
    afterPosition: 'center',
  },
]

export const FEATURED_PROJECT = BEFORE_AFTER_PROJECTS.find((p) => p.featured)
