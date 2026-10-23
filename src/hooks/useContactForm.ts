import { useState, type FormEvent } from "react";
import { validate as validateEmail } from "react-email-validator";
import { contactService } from "../services/contact.service";

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

type ContactFormErrors = Partial<Record<keyof ContactFormData, string>>;

const initialFormData: ContactFormData = {
  firstName: "",
  lastName: "",
  email: "",
  message: "",
};

const validate = (formData: ContactFormData): ContactFormErrors => {
  const errors: ContactFormErrors = {};
  const firstName = formData.firstName.trim();
  const lastName = formData.lastName.trim();
  const email = formData.email.trim();
  const message = formData.message.trim();

  if (!firstName) {
    errors.firstName = "First name is required";
  } else if (firstName.length > 50) {
    errors.firstName = "First name must be 50 characters or fewer";
  }

  if (!lastName) {
    errors.lastName = "Last name is required";
  } else if (lastName.length > 50) {
    errors.lastName = "Last name must be 50 characters or fewer";
  }

  if (!email) {
    errors.email = "Email address is required";
  } else if (email.length > 254) {
    errors.email = "Email address must be 254 characters or fewer";
  } else if (!validateEmail(email)) {
    errors.email = "Please enter a valid email address";
  }

  if (message.length < 10) {
    errors.message = "Message must be at least 10 characters";
  } else if (message.length > 1000) {
    errors.message = "Message must be 1000 characters or fewer";
  }

  return errors;
};

export const useContactForm = () => {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleChange = (name: keyof ContactFormData, value: string) => {
    setFormData((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: undefined }));
    setErrorMessage(null);
    setSuccessMessage(null);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrorMessage(null);
    setSuccessMessage(null);

    const validationErrors = validate(formData);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setIsSubmitting(true);
    try {
      await contactService.create({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email.trim(),
        message: `${formData.message.trim()}`,
      });
      setFormData(initialFormData);
      setSuccessMessage("Your message has been sent. Thank you for reaching out!");
    } catch (error) {
      setErrorMessage(
        error instanceof Error
          ? `Unable to send your message: ${error.message}`
          : "Unable to send your message. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formData,
    errors,
    isSubmitting,
    errorMessage,
    successMessage,
    handleChange,
    handleSubmit,
  };
};
