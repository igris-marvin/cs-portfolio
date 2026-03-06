import { motion } from "framer-motion";
import { MapPin, Briefcase, GraduationCap, Heart } from "lucide-react";
import SocialIcons from "../components/about_comps/SocialIcons";
import dev_profile from "../assets/images/dev/mpmalope.jpg"

export const AboutPage = () => {

    return (
        <>

            <main className="min-h-screen pt-24 pb-20">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="grid lg:grid-cols-5 gap-12 lg:min-h-[calc(100vh-12rem)]">

                        {/* Left - Image (60-65% on desktop) - Full height */}
                        {/* LEFT SECTION CONTENT */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6 }}
                            className="lg:col-span-3 relative lg:h-full"
                        >
                            <div className="relative h-full min-h-[500px] lg:min-h-0 rounded-lg overflow-hidden">
                                <img
                                    src={dev_profile}
                                    alt="Dev Profile Image"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                                <div className="absolute inset-0 bg-gradient-to-r from-background/30 to-transparent" />

                                {/* Floating decorative elements */}
                                <motion.div
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ repeat: Infinity, duration: 3 }}
                                    className="absolute top-10 right-10 w-20 h-20 rounded-md bg-gradient-to-br from-primary/30 to-accent/30 blur-xl"
                                />
                                <motion.div
                                    animate={{ y: [0, 10, 0] }}
                                    transition={{ repeat: Infinity, duration: 4 }}
                                    className="absolute bottom-32 left-10 w-32 h-32 rounded-md bg-gradient-to-br from-secondary/20 to-primary/20 blur-2xl"
                                />
                            </div>

                            {/* Location Badge */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.4 }}
                                className="absolute bottom-6 left-6 light-card px-4 py-2 rounded-md flex items-center gap-2"
                            >
                                <MapPin size={16} className="text-primary" />
                                <span className="text-sm">Gauteng, South Africa</span>
                            </motion.div>
                        </motion.div>

                        {/* Right - Content - Matching height */}
                        {/* RIGHT SECTION CONTENT */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="lg:col-span-2 flex flex-col justify-center space-y-6"
                        >
                            {/* Name & Title */}
                            <div>
                                <motion.h1
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                    className="font-display text-4xl md:text-5xl font-bold mb-3"
                                >
                                    <span className="text-gradient-cosmic">Peter Malope</span>
                                </motion.h1>
                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                    className="text-xl text-primary font-medium"
                                >
                                    Software Developer
                                </motion.p>
                            </div>

                            {/* Intro */}
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="text-lg text-muted-foreground"
                            >
                                A passionate developer who turns complex problems into elegant solutions.
                                I believe in the power of clean code and intuitive design.
                            </motion.p>

                            {/* In-depth About */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 }}
                                className="space-y-4 text-muted-foreground"
                            >
                                <p>
                                    As a computer science student specializing in 
                                    full-stack development, I’ve built projects 
                                    that range from interactive web apps to backend 
                                    systems. My work reflects a balance between 
                                    technical problem-solving and creating user-friendly 
                                    experiences.
                                </p>
                                <p>
                                    I enjoy collaborating with peers on projects where 
                                    I can contribute to both the codebase and the 
                                    overall design vision. Outside of academics, I 
                                    explore new technologies.
                                </p>
                            </motion.div>

                            {/* Hobbies */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.7 }}
                            >
                                <div className="flex items-center gap-2 mb-4">
                                    <Heart size={18} className="text-primary" />
                                    <span className="font-semibold">Interests & Hobbies</span>
                                </div>
                                <div className="flex flex-wrap gap-3">
                                    {hobbies.map((hobby, index) => (
                                        <motion.span
                                            key={hobby}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: 0.7 + index * 0.1 }}
                                            className="px-4 py-2 rounded-md light-card text-sm"
                                        >
                                            {hobby}
                                        </motion.span>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Work & Education Cards */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.8 }}
                                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                            >
                                {/* Work Card */}
                                <div className="light-card p-5 rounded-md hover:border-primary/30 transition-all">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-10 h-10 rounded-md bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                                            <Briefcase size={18} className="text-primary" />
                                        </div>
                                        <h3 className="font-display font-semibold">Work</h3>
                                    </div>
                                    <p className="text-sm text-muted-foreground mb-1">-</p>
                                    <p className="text-xs text-muted-foreground/70">-</p>
                                    <p className="text-xs text-muted-foreground/70">2025 - Present</p>
                                </div>

                                {/* Education Card */}
                                <div className="light-card p-5 rounded-md hover:border-primary/30 transition-all">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-10 h-10 rounded-md bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                                            <GraduationCap size={18} className="text-primary" />
                                        </div>
                                        <h3 className="font-display font-semibold">Education</h3>
                                    </div>
                                    <p className="text-sm text-muted-foreground mb-1">Diploma in Computer Science</p>
                                    <p className="text-xs text-muted-foreground/70">Tshwane University of Technology</p>
                                    <p className="text-xs text-muted-foreground/70">2020 - 2025</p>
                                </div>
                            </motion.div>

                            {/* Social Icons */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.9 }}
                            >
                                <SocialIcons variant="default" size="md" />
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </main>
        </>
    )
}

const hobbies = [ "💻 PC Enthusiast", "📚 Reading", "🎮 Gaming", "⚽ Sports"];