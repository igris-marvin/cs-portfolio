import { motion } from "framer-motion";
// import thanix_profile_image from "../../assets/images/companies/thanix_profile_image.png";

const CompanySlider = () => {
  // Double the array for seamless infinite scroll
  const doubledCompanies = [...companies, ...companies];

  return (
    <section className="py-20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Trusted <span className="text-gradient-cosmic">Partners</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Companies I've had the privilege to collaborate with
          </p>
        </motion.div>
      </div>

      {/* Slider Belt */}
      <div className="relative">
        {/* Gradient Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

        {/* Sliding Content */}
        <div className="flex slider-belt">
          {doubledCompanies.map((company, index) => (
            <div
              key={`${company.name}-${index}`}
              className="flex-shrink-0 mx-8"
            >
              <div className="light-card w-40 h-24 rounded-lg flex flex-col items-center justify-center gap-2 hover:border-primary/30 transition-all group">
                <span className="text-3xl font-display font-bold text-muted-foreground group-hover:text-primary transition-colors">
                  {company.logo}
                </span>
                <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                  {company.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const companies = [
  { name: "ThaniX", logo: "T" },
];

export default CompanySlider;
