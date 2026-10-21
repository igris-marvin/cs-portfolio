
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Facebook } from "lucide-react";
import { FiGithub } from "react-icons/fi";
import ContactForm from "../components/contact_comps/ContactForm";
import { useData } from "../context/data-context";

export const ContactPage = () => {
  const { contactDetails, socialData, errors } = useData();
  const contact = contactDetails[0];
  const social = socialData[0];
  const socialLinks = [
    {
      icon: FiGithub,
      name: "GitHub",
      value: social?.github ?? "igris-marvin",
      href: social?.github ?? "https://github.com/igris-marvin",
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      value: social?.linkedin ?? "Peter Malope",
      href: social?.linkedin ?? "https://www.linkedin.com/in/peter-malope-a578242bb",
    },
    ...(social?.facebook ? [{
      icon: Facebook,
      name: "Facebook",
      value: social.facebook,
      href: social.facebook,
    }] : []),
  ];
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: contact?.email ?? "mpmalope03@gmail.com",
      href: `mailto:${contact?.email ?? "mpmalope03@gmail.com"}`,
    },
    {
      icon: Phone,
      label: "Phone",
      value: contact?.number ?? "+27 68 293 8418",
      href: `tel:${contact?.number ?? "+27 68 293 8418"}`,
    },
    {
      icon: MapPin,
      label: "Address",
      value: contact?.address ?? "Pretoria, Gauteng, South Africa",
      href: null,
    },
  ];

  return (
    <>
      <main className="min-h-screen pt-24 pb-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Let's <span className="text-gradient-cosmic">Connect</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Have a project in mind or just want to chat? I'd love to hear from you.
              Reach out through any of the channels below.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left - Contact Info & Socials (no border) */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-10"
            >
              {/* Social Links */}
              <div>
                <h2 className="font-display text-2xl font-semibold mb-6">
                  Profiles
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      whileHover={{ scale: 1.03, x: 4 }}
                      className="p-5 rounded-md flex items-center gap-4 bg-muted/30 hover:bg-muted/50 transition-all group bg-gray-100"
                    >
                      <div className="w-12 h-12 rounded-md bg-linear-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:from-primary/30 group-hover:to-accent/30 transition-all text-pink-500 bg-pink-100">
                        <social.icon size={22} className="text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold group-hover:text-primary transition-colors">
                          {social.name}
                        </p>
                        <p className="text-sm text-muted-foreground">{social.value}</p>
                      </div>
                    </motion.a>
                  ))}
                  {errors.socialData && (
                    <p className="text-destructive text-sm" role="alert">
                      Unable to load social profiles: {errors.socialData}
                    </p>
                  )}
                  {!errors.socialData && socialLinks.length === 0 && (
                    <p className="text-muted-foreground text-sm">No social profiles are available.</p>
                  )}
                </div>
              </div>

              {/* Contact Details */}
              <div>
                <h2 className="font-display text-2xl font-semibold mb-6">
                  Contact Details
                </h2>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={info.label}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      whileHover={{ x: 4 }}
                      className="p-5 rounded-md bg-muted/30 hover:bg-muted/50 transition-all bg-gray-100"
                    >
                      {info.href ? (
                        <a
                          href={info.href}
                          className="flex items-start gap-4 group"
                        >
                          <div className="w-12 h-12 rounded-md bg-linear-to-br from-primary/20 to-accent/20 flex items-center justify-center shrink-0 group-hover:from-primary/30 group-hover:to-accent/30 transition-all text-pink-500 bg-pink-100">
                            <info.icon size={22} className="text-primary" />
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                            <p className="font-medium group-hover:text-primary transition-colors">
                              {info.value}
                            </p>
                          </div>
                        </a>
                      ) : (
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-md bg-linear-to-br from-primary/20 to-accent/20 flex items-center justify-center shrink-0 text-pink-500 bg-pink-100">
                            <info.icon size={22} className="text-primary" />
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                            <p className="font-medium">{info.value}</p>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  ))}
                  {errors.contactDetail && (
                    <p className="text-destructive text-sm" role="alert">
                      Unable to load contact details: {errors.contactDetail}
                    </p>
                  )}
                  {!errors.contactDetail && contactInfo.length === 0 && (
                    <p className="text-muted-foreground text-sm">No contact details are available.</p>
                  )}
                </div>
              </div>
            </motion.div>

            {/* Right - Contact Form (with border) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="rounded-2xl bg-white border border-gray-200"
            >
              <div className="light-card p-8 rounded-lg">
                <div className="mb-8">
                  <h2 className="font-display text-2xl font-semibold mb-2">
                    Send a Message
                  </h2>
                  <p className="text-muted-foreground">
                    Fill out the form below and I'll get back to you as soon as possible.
                  </p>
                </div>
                <ContactForm />
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </>
  )
}
