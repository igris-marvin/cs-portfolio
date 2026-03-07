import { motion } from 'framer-motion';
import {
  Card,
  Heading,
  Text,
  Flex,
  Box,
} from '@radix-ui/themes';
import { RocketIcon } from '@radix-ui/react-icons';

export const ProjectTempPage = () => {
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-white">
      <motion.div
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-md px-4"
      >
        <Card

          className="border-2 border-gray-950 bg-white"
          size="4"
        >
          <Flex direction="column" gap="6" align="center" className="p-2">
            {/* Rocket Icon */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Box className="text-5xl text-pink-500">
                  <RocketIcon width="48" height="48" />
                </Box>
              </motion.div>
            </motion.div>

            {/* Main Content */}
            <motion.div
              className="text-center space-y-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <Heading
                size="8"
                weight="bold"
                className="text-black"
              >
                Maintenance Underway
              </Heading>
              <Text
                size="4"
                className="text-black"
              >
                Changes are being made, sorry for the inconvenience. 
              </Text>
            </motion.div>
          </Flex>
        </Card>

        {/* Floating Bg Elements */}
        <motion.div
          animate={{
            y: [0, 20, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -top-10 -left-10 w-40 h-40 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-15 pointer-events-none"
        />
        <motion.div
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -bottom-10 -right-10 w-40 h-40 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-15 pointer-events-none"
        />
      </motion.div>
    </div>
  );
}