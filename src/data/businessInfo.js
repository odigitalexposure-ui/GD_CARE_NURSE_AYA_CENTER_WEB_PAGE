// Business Information for GD Care Nurse And Aya Centre

export const businessInfo = {
  name: 'GD Care Nurse And Aya Centre',
  shortName: 'GD Care',
  tagline: 'Compassionate Care • Professional Support',
  address: {
    street: 'SONARPUR DAKSHIN GHOSH PARA',
    landmark: 'ANANDA ASRAM CLUB',
    city: 'KOLKATA',
    district: 'South 24 Parganas',
    state: 'West Bengal',
    pin: '700150',
    fullFormatted: 'SONARPUR DAKSHIN GHOSH PARA, Landmark: ANANDA ASRAM CLUB, South 24 Parganas, Kolkata, West Bengal - 700150'
  },
  contact: {
    // Primary Contact Line (Option 1: Calling & WhatsApp)
    phone: '+91 91630 87355',
    phoneRaw: '9163087355',
    callHref: 'tel:+919163087355',
    whatsappHref: 'https://wa.me/9163087355',

    // Secondary Contact Line (Option 2: Calling Purpose Only)
    secondaryPhone: '+91 84780 95846',
    secondaryPhoneRaw: '918478095846',
    secondaryCallHref: 'tel:+918478095846',
    secondaryWhatsappHref: null,

    // Contact lines list for flexible rendering
    phones: [
      {
        id: 'primary',
        label: 'Helpline 1 (Call & WhatsApp)',
        display: '+91 91630 87355',
        raw: '9163087355',
        callHref: 'tel:+919163087355',
        whatsappHref: 'https://wa.me/9163087355',
        hasWhatsapp: true,
        isPrimary: true
      },
      {
        id: 'secondary',
        label: 'Helpline 2 (Call Only)',
        display: '+91 84780 95846',
        raw: '918478095846',
        callHref: 'tel:+918478095846',
        whatsappHref: null,
        hasWhatsapp: false,
        isPrimary: false
      }
    ],

    // Note: No email provided by business. Keep null or configurable.
    email: null,
    availability: 'Available for Care Enquiries'
  },
  map: {
    googleMapsUrl: 'https://maps.app.goo.gl/r9UzqPEyUfQotv689?utm_source=chatgpt.com',
    embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4374.367257505497!2d88.430846!3d22.439515399999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0273f8f7e8bb93%3A0x79b03838b606b2b4!2sGD%20Care%20Nurse%20And%20Aya%20Centre!5e1!3m2!1sen!2sin!4v1787569104983!5m2!1sen!2sin'
  },
  developer: {
    name: 'Digital Exposure Online Service',
    url: 'https://www.teamdeoskolkata.in/'
  }
};

export default businessInfo;
