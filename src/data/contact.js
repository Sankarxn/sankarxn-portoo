export const WHATSAPP_TOPICS = [
  {
    id: 'portfolio',
    label: 'Portfolio Website',
    defaultText: "Hi Sankaran, I found your portfolio and I'd like to discuss building a custom Portfolio Website."
  },
  {
    id: 'landing',
    label: 'Landing Page',
    defaultText: "Hi Sankaran, I'd like to talk about designing a high-conversion Landing Page for my business."
  },
  {
    id: 'business',
    label: 'Small Business Website',
    defaultText: "Hi Sankaran, I need a modern, fast Small Business Website to make my company look established online."
  },
  {
    id: 'redesign',
    label: 'Website Redesign',
    defaultText: "Hi Sankaran, I have an existing website that needs a modern redesign and speed optimization."
  },
  {
    id: 'other',
    label: 'Other Enquiry',
    defaultText: "Hi Sankaran, I found your portfolio and I'd like to discuss a custom web project with you."
  }
];

export const CONTACT_INFO = {
  name: 'Sankaranarayanan K V',
  shortName: 'Sankaran',
  location: 'Kerala, India',
  email: 'sankxrdev@gmail.com',
  phoneDisplay: '+91 7012099077',
  whatsappNumber: '917012099077',
  buildWhatsAppUrl: (messageText) => {
    return `https://wa.me/917012099077?text=${encodeURIComponent(messageText)}`;
  }
};
