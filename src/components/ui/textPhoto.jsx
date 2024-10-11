"use client"

import { useEffect, useRef } from "react"
import { motion, useInView, useAnimation } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function textPhoto() {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [controls, isInView])

  return (
    <section ref={ref} className="w-full bg-[#F2F2F2] py-16 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            className="w-full md:w-1/2 mb-8 md:mb-0 pr-0 md:pr-8"
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
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
            <Button className="bg-[#96C061] hover:bg-[#7da350] text-white">
              READ MORE
            </Button>
          </motion.div>
          <motion.div
            className="w-full md:w-1/2"
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, x: 100 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          >
            <img
              src="/placeholder.svg?height=400&width=400"
              alt="Organic tea leaves in a white bowl"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}