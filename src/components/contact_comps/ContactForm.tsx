import { motion } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";
import { useContactForm } from "../../hooks/useContactForm";

interface ContactFormProps {
  compact?: boolean;
}

const ContactForm = ({ compact = false }: ContactFormProps) => {
  const {
    formData,
    errors,
    isSubmitting,
    errorMessage,
    successMessage,
    handleChange,
    handleSubmit,
  } = useContactForm();

  const inputClasses = (hasError: boolean) =>
    `w-full px-4 py-3 rounded-md bg-muted/50 border border-gray-200 bg-gray-100 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all placeholder:text-muted-foreground/50 ${
      hasError ? "border-red-500 focus:border-red-600 focus:ring-red-500/20" : ""
    } ${compact ? "py-2.5 text-sm" : ""}`;
  const labelClasses = `block text-sm font-medium mb-1.5 ${compact ? 'text-xs' : ''}`;
  const fieldErrorClasses = "mt-1 text-xs font-medium text-red-600";
  const requiredMarker = <span className="ml-1 text-red-600" aria-hidden="true">*</span>;

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      {errorMessage && (
        <p className="text-red-600 text-sm" role="alert">
          {errorMessage}
        </p>
      )}
      {successMessage && (
        <p className="text-green-700 text-sm" role="status" aria-live="polite">
          {successMessage}
        </p>
      )}

      <div className={`grid ${compact ? 'grid-cols-2' : 'grid-cols-1 sm:grid-cols-2'} gap-4`}>
        <div>
          <label htmlFor="firstName" className={labelClasses}>First Name{requiredMarker}</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={(event) => handleChange("firstName", event.target.value)}
            className={inputClasses(Boolean(errors.firstName))}
            placeholder="Sipho"
            required
            maxLength={50}
            aria-invalid={Boolean(errors.firstName)}
            aria-describedby={errors.firstName ? "firstName-error" : undefined}
          />
          {errors.firstName && <p id="firstName-error" className={fieldErrorClasses} role="alert">{errors.firstName}</p>}
        </div>
        <div>
          <label htmlFor="lastName" className={labelClasses}>Last Name{requiredMarker}</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={(event) => handleChange("lastName", event.target.value)}
            className={inputClasses(Boolean(errors.lastName))}
            placeholder="Sithole"
            required
            maxLength={50}
            aria-invalid={Boolean(errors.lastName)}
            aria-describedby={errors.lastName ? "lastName-error" : undefined}
          />
          {errors.lastName && <p id="lastName-error" className={fieldErrorClasses} role="alert">{errors.lastName}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="email" className={labelClasses}>Email Address{requiredMarker}</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={(event) => handleChange("email", event.target.value)}
          className={inputClasses(Boolean(errors.email))}
          placeholder="sithole@example.com"
          maxLength={254}
          required
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "email-error" : undefined}
        />
        {errors.email && <p id="email-error" className={fieldErrorClasses} role="alert">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="message" className={labelClasses}>Message{requiredMarker}</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={(event) => handleChange("message", event.target.value)}
          rows={compact ? 3 : 5}
          className={`${inputClasses(Boolean(errors.message))} resize-none`}
          placeholder="Tell me about your project..."
          maxLength={1000}
          required
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message && <p id="message-error" className={fieldErrorClasses} role="alert">{errors.message}</p>}
      </div>

      <motion.button
        type="submit"
        disabled={isSubmitting}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`w-full py-3 px-6 rounded-md font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer bg-pink-500 text-white hover:shadow-lg hover:shadow-primary/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:hover:shadow-none disabled:opacity-70 ${
          successMessage
            ? 'bg-green-500/20 text-green-400 border border-green-500/30'
            : 'bg-linear-to-r from-primary to-accent text-primary-foreground'
        } ${compact ? 'py-2.5 text-sm' : ''}`}
        aria-busy={isSubmitting}
      >
        {successMessage ? (
          <>
            <CheckCircle size={18} />
            Message Sent!
          </>
        ) : isSubmitting ? (
          <>
            <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send size={18} />
            Send Message
          </>
        )}
      </motion.button>
    </form>
  );
};

export default ContactForm;
