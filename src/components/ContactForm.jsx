import React, { useState } from 'react';
import { MessageSquare, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { businessInfo } from '../data/businessInfo';
import { servicesData } from '../data/services';
import { locationsData } from '../data/locations';

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Nursing Care',
    location: 'Sonarpur',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your full name';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Please enter your phone number';
    } else if (formData.phone.replace(/\D/g, '').length < 10) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }
    if (!formData.service) {
      newErrors.service = 'Please select a service';
    }
    if (!formData.location.trim()) {
      newErrors.location = 'Please specify your location or area';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    const messageLines = [
      "Hello GD Care Nurse And Aya Centre,",
      "I would like to enquire about your services.",
      "",
      `Name: ${formData.name.trim()}`,
      `Phone: ${formData.phone.trim()}`,
      `Service Required: ${formData.service}`,
      `Location: ${formData.location.trim()}`,
      formData.message.trim() ? `Message: ${formData.message.trim()}` : "",
      "",
      "Please provide me with more information."
    ].filter(Boolean).join("\n");

    const encodedMessage = encodeURIComponent(messageLines);
    const whatsappUrl = `https://wa.me/${businessInfo.contact.phoneRaw}?text=${encodedMessage}`;

    setTimeout(() => {
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
      setIsSubmitting(false);
    }, 400);
  };

  return (
    <div className="snake-card p-5 sm:p-8 md:p-9 rounded-3xl border border-[#176B78]/20 shadow-[0_12px_36px_rgba(15,76,92,0.08)] backdrop-blur-xs">
      <div className="flex items-center gap-3.5 mb-6 pb-4 sm:mb-7 sm:pb-5 border-b border-[#176B78]/15">
        <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-[#DCEEE8] to-[#CDE8E0] text-[#25D366] flex items-center justify-center shadow-xs border border-[#176B78]/15 shrink-0">
          <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6 fill-current" />
        </div>
        <div>
          <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-[#0F4C5C] font-sans">
            Send Care Enquiry
          </h3>
          <p className="text-xs text-[#4F6D74] font-medium mt-0.5">
            Directly connect with our care coordinator on WhatsApp
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4" noValidate>
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-xs font-black uppercase tracking-wider text-[#0E2A32] mb-1.5">
            Your Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g. Anirban Mukherjee"
            className={`w-full px-4 py-3 sm:py-3.5 rounded-xl border text-base sm:text-sm focus:outline-none transition-colors bg-[#F7FAF9] ${
              errors.name
                ? 'border-red-400 bg-red-50/40 focus:border-red-500'
                : 'border-[#176B78]/20 focus:border-[#0F4C5C] focus:bg-white focus:ring-2 focus:ring-[#0F4C5C]/15'
            }`}
          />
          {errors.name && (
            <p className="mt-1 text-xs text-red-600 font-semibold flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
              <span>{errors.name}</span>
            </p>
          )}
        </div>

        {/* Phone Field */}
        <div>
          <label htmlFor="phone" className="block text-xs font-black uppercase tracking-wider text-[#0E2A32] mb-1.5">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            placeholder="e.g. 9876543210"
            className={`w-full px-4 py-3 sm:py-3.5 rounded-xl border text-base sm:text-sm focus:outline-none transition-colors bg-[#F7FAF9] ${
              errors.phone
                ? 'border-red-400 bg-red-50/40 focus:border-red-500'
                : 'border-[#176B78]/20 focus:border-[#0F4C5C] focus:bg-white focus:ring-2 focus:ring-[#0F4C5C]/15'
            }`}
          />
          {errors.phone && (
            <p className="mt-1 text-xs text-red-600 font-semibold flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
              <span>{errors.phone}</span>
            </p>
          )}
        </div>

        {/* Service Required Dropdown */}
        <div>
          <label htmlFor="service" className="block text-xs font-black uppercase tracking-wider text-[#0E2A32] mb-1.5">
            Service Required <span className="text-red-500">*</span>
          </label>
          <select
            id="service"
            name="service"
            required
            value={formData.service}
            onChange={handleChange}
            className="w-full px-4 py-3 sm:py-3.5 rounded-xl border border-[#176B78]/20 text-base sm:text-sm focus:outline-none focus:border-[#0F4C5C] focus:ring-2 focus:ring-[#0F4C5C]/15 bg-[#F7FAF9] font-medium"
          >
            {servicesData.map((svc) => (
              <option key={svc.id} value={svc.title}>
                {svc.title}
              </option>
            ))}
          </select>
        </div>

        {/* Location Field */}
        <div>
          <label htmlFor="location" className="block text-xs font-black uppercase tracking-wider text-[#0E2A32] mb-1.5">
            Your Area / Location in Kolkata <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="location"
            name="location"
            required
            value={formData.location}
            onChange={handleChange}
            placeholder="e.g. Sonarpur, Garia, Jadavpur, Behala..."
            list="location-options"
            className={`w-full px-4 py-3 sm:py-3.5 rounded-xl border text-base sm:text-sm focus:outline-none transition-colors bg-[#F7FAF9] ${
              errors.location
                ? 'border-red-400 bg-red-50/40 focus:border-red-500'
                : 'border-[#176B78]/20 focus:border-[#0F4C5C] focus:bg-white focus:ring-2 focus:ring-[#0F4C5C]/15'
            }`}
          />
          <datalist id="location-options">
            {locationsData.map((loc) => (
              <option key={loc.id} value={loc.name} />
            ))}
          </datalist>
          {errors.location && (
            <p className="mt-1 text-xs text-red-600 font-semibold flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
              <span>{errors.location}</span>
            </p>
          )}
        </div>

        {/* Optional Message */}
        <div>
          <label htmlFor="message" className="block text-xs font-black uppercase tracking-wider text-[#0E2A32] mb-1.5">
            Care Requirement Details (Optional)
          </label>
          <textarea
            id="message"
            name="message"
            rows="3"
            value={formData.message}
            onChange={handleChange}
            placeholder="Describe any specific needs (e.g. daycare hours, patient routine, cooking preferences)..."
            className="w-full px-4 py-3 sm:py-3.5 rounded-xl border border-[#176B78]/20 text-base sm:text-sm focus:outline-none focus:border-[#0F4C5C] focus:ring-2 focus:ring-[#0F4C5C]/15 bg-[#F7FAF9] resize-none font-medium"
          ></textarea>
        </div>

        {/* Submit Button with WhatsApp Green Gradient */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-gradient-to-r from-[#25D366] to-[#20BA56] hover:brightness-105 active:scale-[0.99] text-white font-black text-sm sm:text-base shadow-lg shadow-green-900/15 transition-all duration-200 disabled:opacity-75 cursor-pointer"
        >
          {isSubmitting ? (
            <>
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              <span>Opening WhatsApp...</span>
            </>
          ) : (
            <>
              <MessageSquare className="w-4 h-4 fill-white" />
              <span>Send Enquiry on WhatsApp</span>
              <Send className="w-4 h-4" />
            </>
          )}
        </button>

        <p className="text-[11px] text-center text-[#4F6D74] pt-1 font-medium">
          🔒 Redirects directly to WhatsApp with your details so our care coordinator can respond promptly.
        </p>
      </form>
    </div>
  );
};

export default ContactForm;
