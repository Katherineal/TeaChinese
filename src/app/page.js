"use client"

import React, { useState, useEffect, useRef } from 'react';
import { Heart, Brain, Zap, Leaf, Shield, Apple, Droplets, Flame } from "lucide-react"
import useEmblaCarousel from "embla-carousel-react"
import { motion, useInView, useAnimation, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { GiTeapotLeaves } from "react-icons/gi";
import { PiTeaBagDuotone } from "react-icons/pi";
import { MdHistoryEdu } from "react-icons/md";
import MenuResponsive from "@/components/menuResponsive"
import FooterResponsive from "@/components/footerResponsive"
import { Testimonios } from "@/components/testimonios"
import { LuMapPin } from "react-icons/lu";
import { PreguntasFrecuentes } from '@/components/preguntasFrecuentes';

const teaData = [
  {
    name: "Green Tea",
    subtitle: "Nature's Antioxidant Powerhouse",
    image: "https://saboresandinos.com/wp-content/uploads/2023/08/2333.png",
    benefits: [
      { text: "Strong anti-oxidant", icon: Shield },
      { text: "Prevent cancer", icon: Heart },
      { text: "Increases heart health", icon: Heart },
      { text: "Help strengthen bones", icon: Zap },
      { text: "Supports memory", icon: Brain },
      { text: "Keep the youth", icon: Leaf }
    ],
  },
  {
    name: "Black Tea",
    subtitle: "A Bold Boost for Body and Mind",
    image: "https://acdn.mitiendanube.com/stores/118/808/products/whatsapp-image-2022-09-14-at-10-37-13-pm1-f1b22eeda1f8e997a616632632831439-240-0.jpeg",
    benefits: [
      { text: "Boosts energy", icon: Zap },
      { text: "Improves focus", icon: Brain },
      { text: "Lowers cholesterol", icon: Heart },
      { text: "Reduces blood pressure", icon: Heart },
      { text: "Promotes gut health", icon: Apple },
      { text: "Supports immune system", icon: Shield }
    ],
  },
  {
    name: "White Tea",
    subtitle: "The Delicate Defender of Wellness",
    image: "https://www.thehouroftea.com/cdn/shop/files/14_11ae7508-f10f-4fdd-bd4b-8c180c49a0b1.png?v=1717096051",
    benefits: [
      { text: "Rich in antioxidants", icon: Shield },
      { text: "Promotes healthy skin", icon: Leaf },
      { text: "Aids in weight loss", icon: Apple },
      { text: "Improves oral health", icon: Shield },
      { text: "Supports liver health", icon: Heart },
      { text: "Reduces inflammation", icon: Zap }
    ],
  }
]
const features = [
  {
    title: "Our History",
    description: "Discover our rich heritage and passion for tea that spans generations.",
    icon: MdHistoryEdu,
  },
  {
    title: "Our Services",
    description: "Explore our wide range of tea services, from tasting sessions to custom blends.",
    icon: GiTeapotLeaves,
  },
  {
    title: "Our Store",
    description: "Visit our store to experience the finest selection of teas from around the world.",
    icon: LuMapPin,
  },
]
const useScrollAnimation = () => {
  const ref = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  return { ref, controls };
};

export default function Component() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % teaData.length);
  };

  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(nextSlide, 5000);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused]);

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);
  
  const { ref: servicesRef, controls: servicesControls } = useScrollAnimation();
  const { ref: infoRef, controls: infoControls } = useScrollAnimation();
  const { ref: carouselRef, controls: carouselControls } = useScrollAnimation();
  const { ref: gridRef, controls: gridControls } = useScrollAnimation();
  const { ref: faqRef, controls: faqControls } = useScrollAnimation();
  const { ref: testimonialRef, controls: testimonialControls } = useScrollAnimation();

  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [controls, isInView])

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

  React.useEffect(() => {
    if (emblaApi) {
      const interval = setInterval(() => {
        emblaApi.scrollNext()
      }, 5000)

      return () => clearInterval(interval)
    }
  }, [emblaApi])

  return (
    <div>
      <MenuResponsive/>

      {/*Portada */}
      <section className="relative bg-cover bg-center h-[60vh]" style={{ backgroundImage: `url('/images/fondo.jpg')` }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
          <motion.h1
            className="text-5xl font-bold md:text-6xl text-[#96C061]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Título Principal
          </motion.h1>
          <motion.p
            className="mt-4 text-xl md:text-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Este es el subtexto que acompaña al título principal
          </motion.p>
        </div>
      </section>

      <div className="w-full max-w-4xl mx-auto px-6 pt-8">

        {/* Servicios */}
        <motion.section 
          ref={servicesRef}
          initial="hidden"
          animate={servicesControls}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { 
              opacity: 1, 
              y: 0,
              transition: { duration: 0.5, staggerChildren: 0.2 }
            }
          }}
          className="w-full py-8"
        >
          <div className="container mx-auto px-4">
            <motion.h2
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="text-3xl md:text-4xl font-bold text-center text-[#96C061] mb-12"
            >
              Welcome to Tea Shop
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  className="flex flex-col items-center text-center"
                >
                  <motion.div
                    className="w-16 h-16 rounded-full bg-[#96C061] flex items-center justify-center mb-4"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <feature.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-black mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
        
        {/* Texto e imagen - informacion */}
        <motion.section 
          ref={infoRef}
          initial="hidden"
          animate={infoControls}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 0.5, staggerChildren: 0.2 } }
          }}
          className="w-full overflow-hidden gap-6 py-8"
        >
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <motion.div
                className="w-full md:w-1/2 mb-8 md:mb-0 pr-0 md:pr-8"
                variants={{
                  hidden: { opacity: 0, x: -100 },
                  visible: { opacity: 1, x: 0 }
                }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-[#96C061] mb-4">
                  Organically Sourced.
                  <br />
                  Beautifully Served
                </h2>
                <p className="text-gray-700 mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque semper viverra
                  lorem sit fringilla. Duis hendrerit inventum metus et lobortis. Curabitur consectetur
                  volutpat risus. Vivamus quis ex et ex elementum mattis. Phasellus lacinia tempor augue
                  at consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <p className="text-gray-700 mb-6">
                  Pellentesque semper viverra lorem sit fringilla. Duis hendrerit inventum metus et
                  lobortis. Curabitur consectetur volutpat risus. Vivamus quis ex et ex elementum mattis.
                  Phasellus lacinia tempor augue at consectetur.
                </p>
                <Button className="bg-[#96C061] hover:bg-[#7da350] text-white rounded-sm">
                  READ MORE
                </Button>
              </motion.div>
              <motion.div
                className="w-full md:w-1/2"
                variants={{
                  hidden: { opacity: 0, x: 100 },
                  visible: { opacity: 1, x: 0 }
                }}
              >
                <img
                  src="https://img.freepik.com/fotos-premium/te-hierbas-chino-sobre-fondo-blanco_1130573-109727.jpg"
                  alt="Organic tea leaves in a white bowl"
                  className="w-full h-auto rounded-lg"
                />
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/*Carrusel */}
        <div 
          className="w-full py-8 relative" 
          onMouseEnter={handleMouseEnter} 
          onMouseLeave={handleMouseLeave}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full"
            >
              <div className="max-w-4xl mx-auto px-4">
                <motion.h2
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-3xl md:text-4xl font-bold mb-2 text-center text-[#96C061]"
                >
                  Benefits of {teaData[currentSlide].name}
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="mb-4 text-center"
                >
                  {teaData[currentSlide].subtitle}
                </motion.p>
                <div className="w-full items-center justify-center flex md:hidden">
                  <motion.img
                    src={teaData[currentSlide].image}
                    alt={`${teaData[currentSlide].name} image`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="w-52 h-auto object-cover rounded-full block md:hidden"
                  />
                </div>
                <div className="flex flex-row items-center justify-center w-full gap-12">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="space-y-4 w-full flex flex-col items-end"
                  >
                    {teaData[currentSlide].benefits.slice(0, 3).map((benefit, benefitIndex) => (
                      <motion.div
                        key={benefitIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 * benefitIndex }}
                        className="flex flex-col justify-center items-end w-full"
                      >
                        <div className="flex items-center justify-end w-full">
                          <p className="text-lg text-[#96C061]">{benefit.text}</p>
                          <benefit.icon className="w-6 h-6 ml-3 text-[#96C061]" />
                        </div>
                        <p className="text-gray-600">{benefit.text}</p>
                      </motion.div>
                    ))}
                  </motion.div>
                  <motion.img
                    src={teaData[currentSlide].image}
                    alt={`${teaData[currentSlide].name} image`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="w-52 h-auto object-cover rounded-full hidden md:block"
                  />
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="space-y-4 w-full"
                  >
                    {teaData[currentSlide].benefits.slice(3).map((benefit, benefitIndex) => (
                      <motion.div
                        key={benefitIndex + 3}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 * (benefitIndex + 3) }}
                        className="justify-start flex flex-col items-start w-full"
                      >
                        <div className="flex items-center justify-start w-full">
                          <benefit.icon className="w-6 h-6 mr-3 text-[#96C061]" />
                          <p className="text-lg text-[#96C061]">{benefit.text}</p>
                        </div>
                        <p className="text-gray-600">{benefit.text}</p>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="flex justify-center mt-4">
            {teaData.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full mx-1 ${
                  index === currentSlide ? 'bg-[#96C061]' : 'bg-gray-300'
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>

        {/* Grid */}
        <motion.section 
          ref={gridRef}
          initial="hidden"
          animate={gridControls}
          variants={{
            hidden: { opacity: 0 },
            visible: { 
              opacity: 1, 
              transition: { duration: 0.5, staggerChildren: 0.1 } 
            }
          }}
          className="w-full py-8"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* New England Breakfast */}
            <motion.div 
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 }
              }}
              className="relative bg-gray-100 p-6 rounded-sm overflow-hidden flex flex-col justify-between"
            >
              <h2 className="text-xl font-semibold mb-2">NEW ENGLAND BREAKFAST</h2>
              <Button className="bg-[#96C061] hover:bg-[#7da350] text-white rounded-sm mb-4">SHOP NOW</Button>
              <img
                src="https://img.freepik.com/premium-photo/chinese-green-teapot-teacups-wooden-trivet-asian-tea-set-green-tea-set_189959-15528.jpg"
                alt="New England Breakfast Tea"
                className="w-full h-full object-cover rounded-sm max-w-[300px] max-h-[200px] mx-auto"
              />
            </motion.div>

            {/* Tea Cups */}
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 }
              }}
              className="relative bg-gray-100 rounded-sm overflow-hidden"
            >
              <img
                src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/traditional-asian-tea-on-wooden-table-jelena-jovanovic.jpg"
                alt="Tea Cups with Floating Leaves"
                className="w-full h-full object-cover rounded-sm max-w-[550px] max-h-[350px] mx-auto"
              />
            </motion.div>

            {/* New Arrivals */}
            <motion.div 
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 }
              }}
              className="relative bg-gray-100 p-6 rounded-sm overflow-hidden flex flex-col justify-between"
            >
              <h2 className="text-xl font-semibold mb-2">NEW ARRIVALS</h2>
              <p className="mb-4 text-gray-600">We feature carefully crafted tea blends that represent flavors from all across the globe.</p>
              <Button className="bg-[#96C061] hover:bg-[#7da350] text-white rounded-sm mb-4">MORE →</Button>
            </motion.div>

            {/* Perfect Brew */}
            <motion.div 
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 }
              }}
              className="relative bg-gray-100 rounded-sm overflow-hidden p-6 lg:col-span-2 flex flex-col lg:flex-row justify-between"
            >
              <img
                src="https://jcda.ca/sites/default/files/bigstock-green-tea-17093318-500px.jpg"
                alt="Loose Tea Leaves"
                className="w-full lg:w-1/2 h-48 object-cover rounded-sm mb-4 lg:mb-0 lg:mr-4 max-w-[400px] max-h-[300px] mx-auto"
              />
              <div className="flex flex-col justify-between">
                <h2 className="text-xl font-semibold mb-2">PERFECT BREW</h2>
                <p className="mb-4 text-gray-600">Learn how to make the perfect cup of your favorite tea in a variety of tea wares. Easily brew to your taste.</p>
                <Button className="bg-[#96C061] hover:bg-[#7da350] text-white rounded-sm mb-4">VIEW PRODUCTS →</Button>
              </div>
            </motion.div>

            {/* Tea Ornaments */}
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 }
              }}
              className="relative bg-gray-100 rounded-sm overflow-hidden"
            >
              <img
                src="https://img.freepik.com/premium-photo/asian-tea-ceremony-generative-ai_446633-16219.jpg"
                alt="Tea Ornaments"
                className="w-full h-full object-cover rounded-sm max-w-[550px] max-h-[300px] mx-auto"
              />
            </motion.div>
          </div>
        </motion.section>

        {/*Preguntas frecuentes */}
        <motion.section 
          ref={faqRef}
          initial="hidden"
          animate={faqControls}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 0.5 } }
          }}
          className="w-full py-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#96C061] mb-4">
            Preguntas frecuentes
          </h2>
          <PreguntasFrecuentes/>
        </motion.section>
      </div>

      {/*Testimonios*/}
      <section className="w-full py-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#96C061] mb-4">
          Testimonios
        </h2>
        <Testimonios />
      </section>

      <FooterResponsive/>
    </div>
  )
}