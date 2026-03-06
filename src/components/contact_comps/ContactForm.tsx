import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";
import { z } from "zod";

const contactSchema = z.object({
  firstName: z.string().trim().min(1, "First name is required").max(50),
  lastName: z.string().trim().min(1, "Last name is required").max(50),
  email: z.string().trim().email("Please enter a valid email"),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(1000),
});

type ContactFormData = z.infer<typeof contactSchema>;

interface ContactFormProps {
  compact?: boolean;
}

const ContactForm = ({ compact = false }: ContactFormProps) => {
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const result = contactSchema.safeParse(formData);
    
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};

      // result.error.errors.forEach((err) => {
      //   if (err.path[0]) {
      //     fieldErrors[err.path[0] as keyof ContactFormData] = err.message;
      //   }
      // });

      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ firstName: "", lastName: "", email: "", message: "" });
    
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const inputClasses = `w-full px-4 py-3 rounded-xl bg-muted/50 border border-border focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all placeholder:text-muted-foreground/50 ${compact ? 'py-2.5 text-sm' : ''}`;
  const labelClasses = `block text-sm font-medium mb-1.5 ${compact ? 'text-xs' : ''}`;

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className={`grid ${compact ? 'grid-cols-2' : 'grid-cols-1 sm:grid-cols-2'} gap-4`}>
        <div>
          <label htmlFor="firstName" className={labelClasses}>First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className={inputClasses}
            placeholder="John"
          />
          {errors.firstName && <p className="text-destructive text-xs mt-1">{errors.firstName}</p>}
        </div>
        <div>
          <label htmlFor="lastName" className={labelClasses}>Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className={inputClasses}
            placeholder="Doe"
          />
          {errors.lastName && <p className="text-destructive text-xs mt-1">{errors.lastName}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="email" className={labelClasses}>Email Address</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={inputClasses}
          placeholder="john@example.com"
        />
        {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="message" className={labelClasses}>Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={compact ? 3 : 5}
          className={`${inputClasses} resize-none`}
          placeholder="Tell me about your project..."
        />
        {errors.message && <p className="text-destructive text-xs mt-1">{errors.message}</p>}
      </div>

      <motion.button
        type="submit"
        disabled={isSubmitting || isSubmitted}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`w-full py-3 px-6 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all disabled:opacity-70 ${
          isSubmitted
            ? 'bg-green-500/20 text-green-400 border border-green-500/30'
            : 'bg-gradient-to-r from-primary to-accent text-primary-foreground hover:shadow-lg hover:shadow-primary/25'
        } ${compact ? 'py-2.5 text-sm' : ''}`}
      >
        {isSubmitted ? (
          <>
            <CheckCircle size={18} />
            Message Sent!
          </>
        ) : isSubmitting ? (
          <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
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
