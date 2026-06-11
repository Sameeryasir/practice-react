export const COMPANY = {
  name: 'Bridges Home Services',
  owner: 'Bobby Bridges',
  phone: '+18123611308',
  phoneDisplay: '(812) 361-1308',
  email: 'BridgesHomeServicesIN@gmail.com',
  address: '6 Emily Anna St, Woodbridge, ON L4H 2S5, Canada',
  maps: 'https://maps.app.goo.gl/v55a4pRoUpWkHKXn7',
  facebook: 'https://www.facebook.com/BridgesHomeServicesIN/',
}

// Business hours from Facebook page — Mon–Fri 9AM–5PM, weekends closed
export const BUSINESS_HOURS = [
  { day: 'Monday', hours: '9:00 AM - 5:00 PM', open: true },
  { day: 'Tuesday', hours: '9:00 AM - 5:00 PM', open: true },
  { day: 'Wednesday', hours: '9:00 AM - 5:00 PM', open: true },
  { day: 'Thursday', hours: '9:00 AM - 5:00 PM', open: true },
  { day: 'Friday', hours: '9:00 AM - 5:00 PM', open: true },
  { day: 'Saturday', hours: 'Closed', open: false },
  { day: 'Sunday', hours: 'Closed', open: false },
]

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Our Work', href: '#our-work' },
  { label: 'Process', href: '#process' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
]

export const TRUST_METRICS = [
  { value: 500, suffix: '+', label: 'Homes Served' },
  { value: 24, suffix: '/7', label: 'Emergency Support' },
  { value: 98, suffix: '%', label: 'Customer Satisfaction' },
  { value: null, text: 'Fast', label: 'Response Time' },
]

export const SERVICES = [
  {
    title: 'Heating Services',
    description: 'Expert furnace installation, repair and maintenance to keep your home warm through every Canadian winter.',
    icon: 'Flame',
    color: 'secondary',
  },
  {
    title: 'Air Conditioning',
    description: 'Stay cool with professional AC installation, tune-ups and fast repairs for peak summer comfort.',
    icon: 'Snowflake',
    color: 'primary',
  },
  {
    title: 'Duct Cleaning',
    description: 'Improve air quality and system efficiency with thorough, professional duct cleaning services.',
    icon: 'Wind',
    color: 'primary',
  },
  {
    title: 'Water Heater Services',
    description: 'Reliable water heater installation, repair and replacement for consistent hot water year-round.',
    icon: 'Droplets',
    color: 'secondary',
  },
  {
    title: 'Maintenance Plans',
    description: 'Prevent costly breakdowns with scheduled maintenance plans tailored to your home systems.',
    icon: 'CalendarCheck',
    color: 'primary',
  },
  {
    title: 'Emergency Repairs',
    description: '24/7 emergency response when you need urgent help. Fast, dependable and professional.',
    icon: 'Zap',
    color: 'secondary',
  },
]

export const WHY_CHOOSE_US = [
  {
    title: 'Licensed Professionals',
    description: 'Every technician on our team is fully licensed, certified and trained to the highest industry standards.',
    icon: 'BadgeCheck',
  },
  {
    title: 'Transparent Pricing',
    description: 'No hidden fees or surprise charges. We provide clear, upfront estimates before any work begins.',
    icon: 'Receipt',
  },
  {
    title: 'Quality Workmanship',
    description: 'We take pride in every job with premium materials and proven techniques for lasting results.',
    icon: 'Award',
  },
  {
    title: 'Customer Satisfaction',
    description: 'Your comfort is our priority. We go above and beyond to ensure every customer is completely satisfied.',
    icon: 'HeartHandshake',
  },
]

export const PROCESS_STEPS = [
  {
    step: 1,
    title: 'Book Service',
    description: 'Reach out by phone or online to schedule a convenient appointment that fits your schedule.',
  },
  {
    step: 2,
    title: 'Inspection',
    description: 'Our technician arrives on time and performs a thorough assessment of your home systems.',
  },
  {
    step: 3,
    title: 'Recommendation',
    description: 'We explain findings clearly and provide honest recommendations with transparent pricing.',
  },
  {
    step: 4,
    title: 'Repair / Installation',
    description: 'Expert work is completed efficiently using quality parts and professional-grade equipment.',
  },
  {
    step: 5,
    title: 'Final Quality Check',
    description: 'We test everything, clean up the workspace and ensure your complete satisfaction.',
  },
]

export const TESTIMONIALS = [
  {
    name: 'Wayne Lan',
    location: 'Indiana',
    rating: 5,
    text: 'I can\'t say enough good things about Bridges Home Services. From start to finish, the experience was absolutely amazing. The team arrived on time, worked with great attention to detail and made sure everything was done perfectly. Their professionalism, honesty and hard work really stood out. Definitely a 5-star service I will use again in the future.',
  },
  {
    name: 'Carolyn Bridges Johnson',
    location: 'Indiana',
    rating: 5,
    text: 'If you want perfection Bobby is the one to call. He has done exceptional work for us. Please give him a call.',
  },
  {
    name: 'Chery Bridges Dunham',
    location: 'Indiana',
    rating: 5,
    text: 'Bobby has done several projects for our family. Very reasonable, respectable, honest and quality work. I would highly recommend!',
  },
]

export const FAQ_ITEMS = [
  {
    question: 'What services do you offer?',
    answer:
      'We offer a full range of home comfort services including heating, air conditioning, duct cleaning, water heater services, maintenance plans and 24/7 emergency repairs. Contact us for a complete list tailored to your needs.',
  },
  {
    question: 'Do you provide emergency support?',
    answer:
      'Yes. We offer 24/7 emergency support for urgent heating, cooling and plumbing issues. Call us anytime and our team will respond as quickly as possible.',
  },
  {
    question: 'Are your technicians licensed?',
    answer:
      'Absolutely. All Bridges Home Services technicians are fully licensed, insured and continuously trained to meet the highest safety and quality standards in the industry.',
  },
  {
    question: 'How can I request an estimate?',
    answer:
      'You can request a free estimate by calling us directly or sending us an email. We will schedule a convenient time to assess your needs and provide transparent pricing.',
  },
  {
    question: 'What areas do you serve?',
    answer:
      'We proudly serve Woodbridge, Vaughan, Maple, Richmond Hill and surrounding communities in the Greater Toronto Area. Contact us to confirm service availability in your area.',
  },
]
