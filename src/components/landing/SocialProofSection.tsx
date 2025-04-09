
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 10 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.3,
    }
  })
};

const SocialProofSection = () => {
  return (
    <section className="py-10 bg-white border-t border-zinc-100">
      <div className="container-tight">
        <motion.p 
          className="text-center text-sm text-zinc-500 mb-8 font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Trusted by innovative teams at
        </motion.p>
        
        <div className="flex flex-wrap justify-center items-center gap-8 px-4">
          {/* Simplified minimal logo style */}
          <motion.div
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="group"
          >
            <div className="font-bold text-zinc-800 group-hover:text-zinc-600 transition-colors">acme</div>
          </motion.div>
          
          <motion.div
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="group"
          >
            <div className="font-bold bg-gradient-to-r from-blue-500 to-blue-700 text-transparent bg-clip-text group-hover:opacity-80 transition-opacity">quantum</div>
          </motion.div>
          
          <motion.div
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="group"
          >
            <div className="font-bold text-zinc-800 group-hover:text-zinc-600 transition-colors">
              VERTEX<span className="text-amber-500">corp</span>
            </div>
          </motion.div>
          
          <motion.div
            custom={3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="group"
          >
            <div className="font-bold group-hover:opacity-80 transition-opacity">
              <span className="bg-black text-white px-2 py-1 rounded">BOX</span>
            </div>
          </motion.div>
          
          <motion.div
            custom={4}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="group"
          >
            <div className="font-bold text-green-600 group-hover:text-green-700 transition-colors">
              eco<span className="text-zinc-700">sphere</span>
            </div>
          </motion.div>
        </div>
        
        <div className="mt-10 text-center">
          <p className="text-sm text-zinc-500">Join over <span className="font-medium text-black">10,000+</span> users collecting anonymous feedback</p>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
