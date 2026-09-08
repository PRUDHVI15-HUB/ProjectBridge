import { SUPPORT_EMAIL } from '../config/constants.js';

/**
 * Builds the formatted, structured email body text for a general project request.
 *
 * @param {Object} formData
 * @returns {string} Formatted plain text email body
 */
export function formatProjectRequestEmail(formData) {
  if (!formData) return '';

  const studentName = formData.fullName?.trim() || 'Student';
  const phone = formData.phone?.trim() || 'Not provided';
  const email = formData.email?.trim() || 'Not provided';

  const branchName = formData.branch === 'Other' && formData.customBranch?.trim()
    ? formData.customBranch.trim()
    : (formData.branch || 'Not provided');

  const college = formData.college?.trim() || 'Not provided';
  const year = formData.year || 'Not provided';
  const requirement = formData.requirement?.trim() || 'Not provided';

  // Optional details
  const optionalParts = [];
  if (formData.preferredTech?.trim()) {
    optionalParts.push(`Preferred Technology: ${formData.preferredTech.trim()}`);
  }
  if (formData.deadline?.trim()) {
    optionalParts.push(`Deadline: ${formData.deadline.trim()}`);
  }
  if (formData.additionalNotes?.trim()) {
    optionalParts.push(`Additional Notes: ${formData.additionalNotes.trim()}`);
  }

  const additionalSection = optionalParts.length > 0
    ? `\n\nADDITIONAL DETAILS\n${optionalParts.join('\n')}`
    : '';

  return `Hello ProjectBridge Team,

I would like to request a project.

STUDENT DETAILS
Name: ${studentName}
Phone: ${phone}
Student Email: ${email}

ACADEMIC DETAILS
College: ${college}
Branch: ${branchName}
Year: ${year}

PROJECT REQUIREMENT
${requirement}${additionalSection}

Thank you,
${studentName}`;
}

/**
 * Generates the complete, properly URL-encoded mailto link for a general project request.
 *
 * @param {Object} formData
 * @returns {string} mailto URL
 */
export function getProjectRequestEmailUrl(formData) {
  const studentName = formData?.fullName?.trim() || 'Student';
  const subject = `New Project Request - ${studentName}`;
  const body = formatProjectRequestEmail(formData);

  const encodedSubject = encodeURIComponent(subject);
  const encodedBody = encodeURIComponent(body);

  return `mailto:${SUPPORT_EMAIL}?subject=${encodedSubject}&body=${encodedBody}`;
}

/**
 * Builds the formatted, structured email body text for requesting a specific project idea.
 *
 * @param {Object} projectIdea
 * @returns {string} Formatted plain text email body
 */
export function formatProjectIdeaEmail(projectIdea) {
  if (!projectIdea) return '';

  const title = projectIdea.title?.trim() || 'Not provided';
  const category = projectIdea.category?.trim() || 'Not provided';
  const type = projectIdea.type?.trim() || 'Not provided';
  const difficulty = projectIdea.difficulty?.trim() || 'Not provided';

  const technologies = Array.isArray(projectIdea.technologies) && projectIdea.technologies.length > 0
    ? projectIdea.technologies.join(', ')
    : (Array.isArray(projectIdea.techDetails) && projectIdea.techDetails.length > 0
      ? projectIdea.techDetails.join(', ')
      : 'Not provided');

  const description = projectIdea.description?.trim() || projectIdea.overview?.trim() || 'Not provided';

  return `Hello ProjectBridge Team,

I am interested in requesting the following project:

PROJECT
${title}

CATEGORY
${category}

PROJECT TYPE
${type}

DIFFICULTY
${difficulty}

TECHNOLOGY
${technologies}

DESCRIPTION
${description}

Please contact me to discuss the project.

Thank you.`;
}

/**
 * Generates the complete, properly URL-encoded mailto link for a specific project idea.
 *
 * @param {Object} projectIdea
 * @returns {string} mailto URL
 */
export function getProjectIdeaEmailUrl(projectIdea) {
  const title = projectIdea?.title?.trim() || 'Project';
  const subject = `Project Request - ${title}`;
  const body = formatProjectIdeaEmail(projectIdea);

  const encodedSubject = encodeURIComponent(subject);
  const encodedBody = encodeURIComponent(body);

  return `mailto:${SUPPORT_EMAIL}?subject=${encodedSubject}&body=${encodedBody}`;
}

/**
 * Safely opens the default email application with pre-filled content.
 * Strictly verifies that only valid mailto: protocols are navigated to.
 *
 * @param {string} url mailto: link
 */
export function openEmailClient(url) {
  if (typeof window !== 'undefined' && typeof url === 'string' && url.startsWith('mailto:')) {
    window.location.href = url;
  }
}
