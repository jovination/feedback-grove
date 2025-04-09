
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 10 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
    }
  })
};

const SocialProofSection = () => {
  return (
    <section className="py-14 bg-white border-y border-zinc-100">
      <div className="container-tight">
        <motion.p 
          className="text-center text-sm text-zinc-600 mb-10 font-medium"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Trusted by innovative teams at
        </motion.p>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 items-center">
          {/* Improved company logos with modern styling */}
          <motion.div
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <Card className="flex items-center justify-center h-20 bg-white hover:shadow-lg transition-all duration-300 border-zinc-100 group hover:border-amber-200">
              <div className="font-bold text-xl text-zinc-700 group-hover:scale-110 transition-transform duration-300">acme</div>
            </Card>
          </motion.div>
          
          <motion.div
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <Card className="flex items-center justify-center h-20 bg-white hover:shadow-lg transition-all duration-300 border-zinc-100 group hover:border-blue-200">
              <div className="font-bold text-xl bg-gradient-to-r from-blue-500 to-blue-700 text-transparent bg-clip-text group-hover:scale-110 transition-transform duration-300">quantum</div>
            </Card>
          </motion.div>
          
          <motion.div
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <Card className="flex items-center justify-center h-20 bg-white hover:shadow-lg transition-all duration-300 border-zinc-100 group hover:border-amber-200">
              <div className="font-bold text-xl text-zinc-700 group-hover:scale-110 transition-transform duration-300">
                VERTEX<span className="text-amber-500">corp</span>
              </div>
            </Card>
          </motion.div>
          
          <motion.div
            custom={3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <Card className="flex items-center justify-center h-20 bg-white hover:shadow-lg transition-all duration-300 border-zinc-100 group hover:border-zinc-200">
              <div className="font-bold text-xl group-hover:scale-110 transition-transform duration-300">
                <span className="bg-black text-white px-2 py-1 rounded">BOX</span>
              </div>
            </Card>
          </motion.div>
          
          <motion.div
            custom={4}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <Card className="flex items-center justify-center h-20 bg-white hover:shadow-lg transition-all duration-300 border-zinc-100 group hover:border-green-200">
              <div className="font-bold text-xl text-green-600 group-hover:scale-110 transition-transform duration-300">
                eco<span className="text-zinc-700">sphere</span>
              </div>
            </Card>
          </motion.div>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-sm text-zinc-500">Join over <span className="font-medium text-black">10,000+</span> users collecting anonymous feedback</p>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
