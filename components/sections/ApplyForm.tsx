'use client'

import { useState } from 'react'
import { CheckCircle } from 'lucide-react'

const inputClass =
  'w-full px-4 py-3 border border-gray-200 bg-white text-brand-dark text-sm rounded-none outline-none focus:border-brand-green transition-colors'

const labelClass =
  'block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2'

export default function ApplyForm() {
  const [fields, setFields] = useState({
    fullName: '',
    phone: '',
    email: '',
    position: '',
    experience: '',
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
          Application Received!
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed">
          Thank you for your interest in joining the Investment Roofing team. We&apos;ll review
          your application and reach out within 2 business days.
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
          <label htmlFor="position" className={labelClass}>Position of Interest</label>
          <select
            id="position"
            name="position"
            required
            value={fields.position}
            onChange={handleChange}
            className={`${inputClass} ${fields.position ? 'text-brand-dark' : 'text-gray-400'}`}
          >
            <option value="" disabled>Select a position...</option>
            <option value="roofing-installer">Roofing Installer</option>
            <option value="crew-lead">Crew Lead</option>
            <option value="sales-estimator">Sales & Estimator</option>
            <option value="general">General / Open to Any Role</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="experience" className={labelClass}>Years of Roofing Experience</label>
        <select
          id="experience"
          name="experience"
          required
          value={fields.experience}
          onChange={handleChange}
          className={`${inputClass} ${fields.experience ? 'text-brand-dark' : 'text-gray-400'}`}
        >
          <option value="" disabled>Select experience level...</option>
          <option value="none">No experience — willing to learn</option>
          <option value="1-2">1–2 years</option>
          <option value="3-5">3–5 years</option>
          <option value="5+">5+ years</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>Tell Us About Yourself (Optional)</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Tell us about your background, skills, or why you want to join the Investment Roofing team."
          value={fields.message}
          onChange={handleChange}
          className={`${inputClass} resize-none`}
        />
      </div>

      <button
        type="submit"
        className="w-full bg-brand-green text-black font-bold py-4 rounded-none uppercase tracking-widest text-sm hover:brightness-110 transition-all cursor-pointer mt-2"
      >
        SUBMIT MY APPLICATION
      </button>

      <p className="text-gray-400 text-xs text-center mt-3">
        We respond to all applications within 2 business days.
      </p>
    </form>
  )
}
