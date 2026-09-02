import { WHATSAPP_NUMBER } from '../config/constants.js';

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
 * Builds the formatted, structured WhatsApp message string for a specific project idea.
 *
 * @param {Object} projectIdea
 * @returns {string} Formatted plain text message
 */
export function formatProjectIdeaMessage(projectIdea) {
  if (!projectIdea) return '';

  const title = projectIdea.title?.trim() || 'Not provided';
  const category = projectIdea.category?.trim() || 'Not provided';
  const difficulty = projectIdea.difficulty?.trim() || 'Not provided';
  const type = projectIdea.type?.trim() || 'Not provided';
  const years = Array.isArray(projectIdea.years) && projectIdea.years.length > 0
    ? projectIdea.years.join(' / ')
    : 'Not provided';

  const technologies = Array.isArray(projectIdea.technologies) && projectIdea.technologies.length > 0
    ? projectIdea.technologies.join(', ')
    : (Array.isArray(projectIdea.techDetails) && projectIdea.techDetails.length > 0
      ? projectIdea.techDetails.join(', ')
      : 'Not provided');

  const description = projectIdea.description?.trim() || 'Not provided';

  return `🚀 Project Request — ProjectBridge

Hi ProjectBridge! I’m interested in this project:

PROJECT DETAILS
Project: ${title}
Category: ${category}
Difficulty: ${difficulty}
Project Type: ${type}
Suitable Year: ${years}

TECHNOLOGY
${technologies}

DESCRIPTION
${description}

I found this project on the ProjectBridge Project Ideas page and would like to know more about building it.

---
Submitted through ProjectBridge
Build. Learn. Deliver.`;
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
 * Generates the complete, properly URL-encoded WhatsApp click-to-chat link for a project idea.
 *
 * @param {Object} projectIdea
 * @param {string} [customNumber] Optional override for receiving number
 * @returns {string} WhatsApp URL (https://wa.me/...)
 */
export function getProjectIdeaWhatsAppUrl(projectIdea, customNumber = WHATSAPP_NUMBER) {
  const message = formatProjectIdeaMessage(projectIdea);
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
