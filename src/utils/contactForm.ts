interface ContactFormData {
  name: string
  email: string
  message: string
}

export const validateContactForm = (formData: FormData): { isValid: boolean; errors: Record<string, string> } => {
  const errors: Record<string, string> = {}
  
  // Name validation
  const name = formData.get('name') as string
  if (!name?.trim()) {
    errors.name = 'El nombre es requerido'
  }

  // Email validation
  const email = formData.get('email') as string
  if (!email?.trim()) {
    errors.email = 'El email es requerido'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = 'El email no es válido'
  }

  // Message validation
  const message = formData.get('message') as string
  if (!message?.trim()) {
    errors.message = 'El mensaje es requerido'
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  }
}

export const handleContactSubmit = async (formData: FormData): Promise<{ success: boolean, message: string }> => {
  try {
    // Here you would implement your form submission logic
    // For example, sending to an API endpoint
    return {
      success: true,
      message: '¡Mensaje enviado correctamente!'
    }
  } catch (error) {
    return {
      success: false,
      message: 'Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.'
    }
  }
}
