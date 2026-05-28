'use client'

import { useState } from 'react'
import { CheckCircle } from 'lucide-react'

const inputClass =
  'w-full px-4 py-3 border border-gray-200 bg-white text-brand-dark text-sm rounded-none outline-none focus:border-brand-green transition-colors'

const labelClass =
  'block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2'

export default function ContactForm() {
  const [fields, setFields] = useState({
    fullName: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setFields(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="bg-[#F0FFF0] border border-brand-green p-8 text-center">
        <CheckCircle size={48} className="text-brand-green mx-auto mb-4" />
        <h3 className="font-heading font-extrabold text-brand-dark text-xl mb-2">
          Request Received!
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed">
          Thank you! A member of the Investment Roofing team will call you within the hour to
          confirm your free inspection appointment.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="fullName" className={labelClass}>Full Name</label>
          <input
            id="fullName"
            type="text"
            name="fullName"
            placeholder="John Smith"
            required
            value={fields.fullName}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>Phone Number</label>
          <input
            id="phone"
            type="tel"
            name="phone"
            placeholder="(706) 000-0000"
            required
            value={fields.phone}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>Email Address</label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="john@example.com"
            required
            value={fields.email}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="service" className={labelClass}>Select a Service</label>
          <select
            id="service"
            name="service"
            required
            value={fields.service}
            onChange={handleChange}
            className={`${inputClass} ${fields.service ? 'text-brand-dark' : 'text-gray-400'}`}
          >
            <option value="" disabled>Select a service...</option>
            <option value="residential">Residential Roofing</option>
            <option value="insurance">Insurance Restoration</option>
            <option value="repairs">Roof Repairs</option>
            <option value="gutters">Gutter Installation</option>
            <option value="commercial">Commercial Roofing</option>
            <option value="general">Not Sure / General Inquiry</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>Message (Optional)</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Tell us about your roof — age, type of issue, or any other details that would help us prepare for your inspection."
          value={fields.message}
          onChange={handleChange}
          className={`${inputClass} resize-none`}
        />
      </div>

      <button
        type="submit"
        className="w-full bg-brand-green text-black font-bold py-4 rounded-none uppercase tracking-widest text-sm hover:brightness-110 transition-all cursor-pointer mt-2"
      >
        GET MY FREE INSPECTION
      </button>

      <p className="text-gray-400 text-xs text-center mt-3">
        No obligation. No pressure. 100% free inspection.
      </p>
    </form>
  )
}
