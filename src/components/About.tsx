import { motion } from 'framer-motion';

export default function About() {
  return (
    
    <div className="py-20 bg-blue-100 rounded-[80px]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-7xl mx-auto px-5 py-8 "
        >
         <h1 className="mb-4 text-4xl font-bold md:text-6xl text-left">About Us</h1>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            Since our establishment, Civil Tech has been at the forefront of manufacturing premium quality cover blocks for the construction industry. Our commitment to excellence and innovation has made us a trusted name in the field. We specialize in producing a wide range of cover blocks that ensure proper concrete coverage and structural integrity in construction projects of all scales.
          </p>
          
          <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div
            className="flex flex-col gap-10 xl:gap-14 lg:flex-row lg:justify-between">
            <div className="w-full lg:w-1/3 bg-blue-200 p-5 rounded-2xl">
              <div
                className="font-manrope font-bold text-5xl bg-gradient-to-r from-cyan-700 to-emerald-800 bg-clip-text text-transparent mb-6 text-center ">
                13M+
              </div>
              <p className="text-lg  leading-7 text-center">Global orders Completed</p>
            </div>
            <div className="w-full lg:w-1/3 bg-blue-200 p-5 rounded-2xl">
              <div
                className="font-manrope font-bold text-5xl bg-gradient-to-r from-cyan-700 to-emerald-800 bg-clip-text text-transparent mb-6 text-center ">
                50M+
              </div>
              <p className="text-lg  leading-7 text-center">Is the number of our beloved Customers</p>
            </div>
            <div className="w-full lg:w-1/3 bg-blue-200 p-5 rounded-2xl">
              <div
                className="font-manrope font-bold text-5xl bg-gradient-to-r from-cyan-700 to-emerald-800 bg-clip-text text-transparent mb-6 text-center ">
                15+
              </div>
              <p className="text-lg  leading-7 text-center">Our inventry with different type of cover blocks</p>
            </div>
          </div>
        </div>
    </section>
                                            
        </motion.div>
      </div>
    </div>
  );
}