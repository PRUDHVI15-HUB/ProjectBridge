import { WHATSAPP_NUMBER } from '../config/constants';

/**
 * Builds the formatted, structured WhatsApp message string from form data.
 *
 * @param {Object} formData
 * @returns {string} Formatted plain text message
 */
export function formatProjectRequestMessage(formData) {
  const branchName = formData.branch === 'Other' && formData.customBranch?.trim()
    ? formData.customBranch.trim()
    : (formData.branch || 'Not provided');

  const email = formData.email?.trim() || 'Not provided';
  const preferredTech = formData.preferredTech?.trim() || 'Not provided';
  const deadline = formData.deadline?.trim() || 'Not provided';
  const additionalNotes = formData.additionalNotes?.trim() || 'Not provided';

  return `🚀 New Project Request — ProjectBridge

STUDENT DETAILS
Name: ${formData.fullName?.trim() || 'Not provided'}
Phone: ${formData.phone?.trim() || 'Not provided'}
Email: ${email}

ACADEMIC DETAILS
College: ${formData.college?.trim() || 'Not provided'}
Branch: ${branchName}
Year: ${formData.year || 'Not provided'}

PROJECT REQUIREMENT
${formData.requirement?.trim() || 'Not provided'}

OPTIONAL DETAILS
Preferred Technology: ${preferredTech}
Deadline: ${deadline}
Additional Requirements: ${additionalNotes}

---
Submitted through ProjectBridge`;
}

/**
 * Generates the complete, properly URL-encoded WhatsApp click-to-chat link.
 *
 * @param {Object} formData
 * @param {string} [customNumber] Optional override for receiving number
 * @returns {string} WhatsApp URL (https://wa.me/...)
 */
export function getWhatsAppUrl(formData, customNumber = WHATSAPP_NUMBER) {
  const message = formatProjectRequestMessage(formData);
  const cleanNumber = String(customNumber).replace(/\D/g, '');
  const encodedMessage = encodeURIComponent(message);
  
  return `https://wa.me/${cleanNumber}?text=${encodedMessage}`;
}

/**
 * Opens WhatsApp click-to-chat in a new window/tab safely.
 *
 * @param {string} url
 */
export function openWhatsApp(url) {
  if (typeof window !== 'undefined') {
    window.open(url, '_blank', 'noopener,noreferrer');
  }
}
