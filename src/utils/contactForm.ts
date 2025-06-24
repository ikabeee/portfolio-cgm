interface ContactFormData {
  name: string
  email: string
  message: string
}

import i18next from '../i18n/config'

export const validateContactForm = (formData: FormData): { isValid: boolean; errors: Record<string, string> } => {
  const errors: Record<string, string> = {}
  const t = i18next.t.bind(i18next)
  
  // Name validation
  const name = formData.get('name') as string
  if (!name?.trim()) {
    errors.name = t('contact.validation.nameRequired')
  }

  // Email validation
  const email = formData.get('email') as string
  if (!email?.trim()) {
    errors.email = t('contact.validation.emailRequired')
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = t('contact.validation.emailInvalid')
  }

  // Message validation
  const message = formData.get('message') as string
  if (!message?.trim()) {
    errors.message = t('contact.validation.messageRequired')
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  }
}

export const handleContactSubmit = async (formData: FormData): Promise<{ success: boolean, message: string }> => {
  const t = i18next.t.bind(i18next)
  try {
    // Here you would implement your form submission logic
    // For example, sending to an API endpoint
    return {
      success: true,
      message: t('contact.success')
    }
  } catch (error) {
    return {
      success: false,
      message: t('contact.error')
    }
  }
}
