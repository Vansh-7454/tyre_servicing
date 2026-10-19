'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { BRAND_INFO } from '@/data/navigation';
import { SERVICES_DATA } from '@/data/services';
import { Calendar, Phone, CheckCircle, MessageSquare, AlertCircle, Clock, User, Car, FileText, Send } from 'lucide-react';

export default function BookingForm() {
  const searchParams = useSearchParams();
  const initialService = searchParams.get('service') || searchParams.get('tyre') || '';

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    vehicleMakeModel: '',
    vehicleReg: '',
    serviceRequired: initialService || SERVICES_DATA[0].title,
    preferredDate: '',
    preferredTime: 'Morning (08:30 – 12:00)',
    notes: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submittedMode, setSubmittedMode] = useState<'none' | 'whatsapp' | 'demo'>('none');

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({
        ...prev,
        serviceRequired: initialService,
      }));
    }
  }, [initialService]);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required';
    if (!formData.phone.trim()) {
      newErrors.phone = 'Valid phone number is required';
    } else if (formData.phone.length < 8) {
      newErrors.phone = 'Please provide a full contact number';
    }
    if (!formData.vehicleMakeModel.trim()) newErrors.vehicleMakeModel = 'Vehicle Make & Model is required';
    if (!formData.serviceRequired) newErrors.serviceRequired = 'Please select a required service';
    if (!formData.preferredDate) newErrors.preferredDate = 'Please select a preferred service date';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Compose formatted WhatsApp enquiry message
    const message = `*TREADCRAFT AUTO CARE — SERVICE BOOKING ENQUIRY*
━━━━━━━━━━━━━━━━━━━━
*Customer:* ${formData.fullName}
*Phone:* ${formData.phone}
*Email:* ${formData.email || 'Not provided'}
*Vehicle:* ${formData.vehicleMakeModel} ${formData.vehicleReg ? `(Reg: ${formData.vehicleReg})` : ''}
*Service Requested:* ${formData.serviceRequired}
*Preferred Date:* ${formData.preferredDate}
*Preferred Time:* ${formData.preferredTime}
${formData.notes ? `*Additional Notes:* ${formData.notes}` : ''}
━━━━━━━━━━━━━━━━━━━━
_Submitted via TreadCraft Auto Care Online Portal_`;

    const encoded = encodeURIComponent(message);
    const cleanPhone = BRAND_INFO.whatsappNumber.replace(/[^0-9]/g, '');
    const whatsappUrl = `https://wa.me/${cleanPhone}?text=${encoded}`;

    setSubmittedMode('whatsapp');
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const handleDemoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmittedMode('demo');
  };

  return (
    <div
      style={{
        backgroundColor: '#FFFFFF',
        borderRadius: '14px',
        border: '1px solid var(--border-light)',
        boxShadow: 'var(--shadow-card)',
        padding: 'clamp(1.75rem, 4vw, 3rem)',
      }}
    >
      <div style={{ marginBottom: '2rem' }}>
        <span className="eyebrow">Direct Workshop Schedule</span>
        <h3 style={{ fontSize: '1.75rem', color: 'var(--carbon-black)', marginBottom: '0.5rem' }}>
          Request a Service Appointment
        </h3>
        <p style={{ fontSize: '0.94rem', color: 'var(--text-muted)', margin: 0 }}>
          Submit your vehicle details below. Choose to open a pre-filled WhatsApp message directly with our technician desk, or test the frontend demo form.
        </p>
      </div>

      {submittedMode === 'whatsapp' && (
        <div
          style={{
            backgroundColor: '#ECFDF5',
            border: '1px solid #10B981',
            borderRadius: '8px',
            padding: '1.5rem',
            marginBottom: '2rem',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '1rem',
          }}
        >
          <CheckCircle size={24} color="#059669" style={{ flexShrink: 0, marginTop: '2px' }} />
          <div>
            <h4 style={{ color: '#065F46', fontSize: '1.05rem', marginBottom: '0.35rem' }}>
              WhatsApp Consultation Prepared!
            </h4>
            <p style={{ color: '#047857', fontSize: '0.88rem', margin: 0, lineHeight: 1.55 }}>
              Your formatted vehicle and service booking details have been directed to our workshop WhatsApp desk ({BRAND_INFO.phoneDisplay}). Our master technician will confirm bay availability and provide an exact time slot.
            </p>
          </div>
        </div>
      )}

      {submittedMode === 'demo' && (
        <div
          style={{
            backgroundColor: 'rgba(230, 106, 53, 0.08)',
            border: '1px solid rgba(230, 106, 53, 0.4)',
            borderRadius: '8px',
            padding: '1.5rem',
            marginBottom: '2rem',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '1rem',
          }}
        >
          <AlertCircle size={24} color="var(--racing-orange)" style={{ flexShrink: 0, marginTop: '2px' }} />
          <div>
            <h4 style={{ color: 'var(--carbon-black)', fontSize: '1.05rem', marginBottom: '0.35rem' }}>
              Frontend Demonstration Acknowledgement
            </h4>
            <p style={{ color: '#586066', fontSize: '0.88rem', margin: 0, lineHeight: 1.55 }}>
              All fields were validated successfully! Because this website operates entirely on a static Next.js frontend without a backend server or database, no appointment has been recorded. To send an actual inquiry, use the <strong>Send via WhatsApp</strong> button or call us at <strong>{BRAND_INFO.phoneDisplay}</strong>.
            </p>
          </div>
        </div>
      )}

      <form noValidate style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {/* Name & Phone Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))', gap: '1.25rem' }}>
          <div>
            <label
              htmlFor="fullName"
              style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--carbon-black)', marginBottom: '0.4rem' }}
            >
              Full Name <span style={{ color: 'var(--racing-orange)' }}>*</span>
            </label>
            <div style={{ position: 'relative' }}>
              <input
                id="fullName"
                type="text"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                placeholder="e.g. Alexander Ward"
                style={{
                  width: '100%',
                  padding: '0.85rem 1rem 0.85rem 2.5rem',
                  borderRadius: '6px',
                  border: errors.fullName ? '1px solid #DC2626' : '1px solid var(--border-light)',
                  backgroundColor: 'var(--warm-ivory)',
                  fontSize: '0.92rem',
                  fontFamily: 'inherit',
                }}
              />
              <User size={16} color="#7E878C" style={{ position: 'absolute', left: '0.85rem', top: '50%', transform: 'translateY(-50%)' }} />
            </div>
            {errors.fullName && <span style={{ color: '#DC2626', fontSize: '0.78rem', marginTop: '4px', display: 'block' }}>{errors.fullName}</span>}
          </div>

          <div>
            <label
              htmlFor="phone"
              style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--carbon-black)', marginBottom: '0.4rem' }}
            >
              Contact Telephone / Mobile <span style={{ color: 'var(--racing-orange)' }}>*</span>
            </label>
            <div style={{ position: 'relative' }}>
              <input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="e.g. +44 7911 123456"
                style={{
                  width: '100%',
                  padding: '0.85rem 1rem 0.85rem 2.5rem',
                  borderRadius: '6px',
                  border: errors.phone ? '1px solid #DC2626' : '1px solid var(--border-light)',
                  backgroundColor: 'var(--warm-ivory)',
                  fontSize: '0.92rem',
                  fontFamily: 'inherit',
                }}
              />
              <Phone size={16} color="#7E878C" style={{ position: 'absolute', left: '0.85rem', top: '50%', transform: 'translateY(-50%)' }} />
            </div>
            {errors.phone && <span style={{ color: '#DC2626', fontSize: '0.78rem', marginTop: '4px', display: 'block' }}>{errors.phone}</span>}
          </div>
        </div>

        {/* Email & Vehicle Info Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))', gap: '1.25rem' }}>
          <div>
            <label
              htmlFor="email"
              style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--carbon-black)', marginBottom: '0.4rem' }}
            >
              Email Address (Optional)
            </label>
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="e.g. alexander@example.com"
              style={{
                width: '100%',
                padding: '0.85rem 1rem',
                borderRadius: '6px',
                border: '1px solid var(--border-light)',
                backgroundColor: 'var(--warm-ivory)',
                fontSize: '0.92rem',
                fontFamily: 'inherit',
              }}
            />
          </div>

          <div>
            <label
              htmlFor="vehicleMakeModel"
              style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--carbon-black)', marginBottom: '0.4rem' }}
            >
              Vehicle Make & Model <span style={{ color: 'var(--racing-orange)' }}>*</span>
            </label>
            <div style={{ position: 'relative' }}>
              <input
                id="vehicleMakeModel"
                type="text"
                value={formData.vehicleMakeModel}
                onChange={(e) => setFormData({ ...formData, vehicleMakeModel: e.target.value })}
                placeholder="e.g. BMW M340i / Audi A6 Avant"
                style={{
                  width: '100%',
                  padding: '0.85rem 1rem 0.85rem 2.5rem',
                  borderRadius: '6px',
                  border: errors.vehicleMakeModel ? '1px solid #DC2626' : '1px solid var(--border-light)',
                  backgroundColor: 'var(--warm-ivory)',
                  fontSize: '0.92rem',
                  fontFamily: 'inherit',
                }}
              />
              <Car size={16} color="#7E878C" style={{ position: 'absolute', left: '0.85rem', top: '50%', transform: 'translateY(-50%)' }} />
            </div>
            {errors.vehicleMakeModel && <span style={{ color: '#DC2626', fontSize: '0.78rem', marginTop: '4px', display: 'block' }}>{errors.vehicleMakeModel}</span>}
          </div>
        </div>

        {/* Vehicle Registration & Service Selection */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))', gap: '1.25rem' }}>
          <div>
            <label
              htmlFor="vehicleReg"
              style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--carbon-black)', marginBottom: '0.4rem' }}
            >
              Vehicle Registration / Year (Optional)
            </label>
            <input
              id="vehicleReg"
              type="text"
              value={formData.vehicleReg}
              onChange={(e) => setFormData({ ...formData, vehicleReg: e.target.value })}
              placeholder="e.g. TC26 CRA (2024)"
              style={{
                width: '100%',
                padding: '0.85rem 1rem',
                borderRadius: '6px',
                border: '1px solid var(--border-light)',
                backgroundColor: 'var(--warm-ivory)',
                fontSize: '0.92rem',
                fontFamily: 'inherit',
              }}
            />
          </div>

          <div>
            <label
              htmlFor="serviceRequired"
              style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--carbon-black)', marginBottom: '0.4rem' }}
            >
              Required Service <span style={{ color: 'var(--racing-orange)' }}>*</span>
            </label>
            <select
              id="serviceRequired"
              value={formData.serviceRequired}
              onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
              style={{
                width: '100%',
                padding: '0.85rem 1rem',
                borderRadius: '6px',
                border: errors.serviceRequired ? '1px solid #DC2626' : '1px solid var(--border-light)',
                backgroundColor: 'var(--warm-ivory)',
                fontSize: '0.92rem',
                fontFamily: 'inherit',
              }}
            >
              {SERVICES_DATA.map((srv) => (
                <option key={srv.id} value={srv.title}>
                  {srv.title}
                </option>
              ))}
              <option value="Tyre Purchase & Fitting Consultation">Tyre Purchase & Fitting Consultation</option>
              <option value="Fleet Inspection & Commercial Service">Fleet Inspection & Commercial Service</option>
            </select>
          </div>
        </div>

        {/* Date & Time Slot */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))', gap: '1.25rem' }}>
          <div>
            <label
              htmlFor="preferredDate"
              style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--carbon-black)', marginBottom: '0.4rem' }}
            >
              Preferred Appointment Date <span style={{ color: 'var(--racing-orange)' }}>*</span>
            </label>
            <div style={{ position: 'relative' }}>
              <input
                id="preferredDate"
                type="date"
                value={formData.preferredDate}
                onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                style={{
                  width: '100%',
                  padding: '0.85rem 1rem 0.85rem 2.5rem',
                  borderRadius: '6px',
                  border: errors.preferredDate ? '1px solid #DC2626' : '1px solid var(--border-light)',
                  backgroundColor: 'var(--warm-ivory)',
                  fontSize: '0.92rem',
                  fontFamily: 'inherit',
                }}
              />
              <Calendar size={16} color="#7E878C" style={{ position: 'absolute', left: '0.85rem', top: '50%', transform: 'translateY(-50%)' }} />
            </div>
            {errors.preferredDate && <span style={{ color: '#DC2626', fontSize: '0.78rem', marginTop: '4px', display: 'block' }}>{errors.preferredDate}</span>}
          </div>

          <div>
            <label
              htmlFor="preferredTime"
              style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--carbon-black)', marginBottom: '0.4rem' }}
            >
              Preferred Time Window
            </label>
            <div style={{ position: 'relative' }}>
              <select
                id="preferredTime"
                value={formData.preferredTime}
                onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                style={{
                  width: '100%',
                  padding: '0.85rem 1rem 0.85rem 2.5rem',
                  borderRadius: '6px',
                  border: '1px solid var(--border-light)',
                  backgroundColor: 'var(--warm-ivory)',
                  fontSize: '0.92rem',
                  fontFamily: 'inherit',
                }}
              >
                <option value="Morning (08:30 – 12:00)">Morning (08:30 – 12:00)</option>
                <option value="Early Afternoon (12:00 – 15:00)">Early Afternoon (12:00 – 15:00)</option>
                <option value="Late Afternoon (15:00 – 18:00)">Late Afternoon (15:00 – 18:00)</option>
              </select>
              <Clock size={16} color="#7E878C" style={{ position: 'absolute', left: '0.85rem', top: '50%', transform: 'translateY(-50%)' }} />
            </div>
          </div>
        </div>

        {/* Additional Notes */}
        <div>
          <label
            htmlFor="notes"
            style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--carbon-black)', marginBottom: '0.4rem' }}
          >
            Specific Symptoms or Wheel Specifications (Optional)
          </label>
          <textarea
            id="notes"
            rows={3}
            value={formData.notes}
            onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
            placeholder="e.g. Steering wheel shudder at 70 mph, 21-inch diamond-cut alloy wheels, suspected slow puncture rear-right."
            style={{
              width: '100%',
              padding: '0.85rem 1rem',
              borderRadius: '6px',
              border: '1px solid var(--border-light)',
              backgroundColor: 'var(--warm-ivory)',
              fontSize: '0.92rem',
              fontFamily: 'inherit',
              resize: 'vertical',
            }}
          />
        </div>

        {/* Action Buttons: WhatsApp and Demo Submit */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1rem',
            paddingTop: '0.5rem',
          }}
        >
          <button
            type="button"
            onClick={handleWhatsAppSubmit}
            className="btn btn-primary btn-lg"
            style={{ flex: '1 1 260px' }}
          >
            <MessageSquare size={18} />
            <span>Send Details via WhatsApp</span>
          </button>

          <button
            type="button"
            onClick={handleDemoSubmit}
            className="btn btn-secondary btn-lg"
            style={{ flex: '1 1 200px' }}
          >
            <Send size={18} />
            <span>Test Frontend Demo</span>
          </button>
        </div>

        <p style={{ fontSize: '0.78rem', color: '#7E878C', margin: 0, textAlign: 'center' }}>
          Zero spam guarantee. Your details are solely used to schedule your workshop appointment and verify tyre fitment dimensions.
        </p>
      </form>
    </div>
  );
}
