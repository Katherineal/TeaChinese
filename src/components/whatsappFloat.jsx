import { PiWhatsappLogo } from "react-icons/pi"
import { useEffect, useState } from "react"

export default function WhatsAppFloat() {
  const phoneNumber = "5491140354020"
  const message = "Hola, me gustaría obtener más información."
  const [animate, setAnimate] = useState(true)

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true)
    }, 15000) 

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <style jsx global>{`
        @-webkit-keyframes heartbeat {
        from {
            -webkit-transform: scale(1);
                    transform: scale(1);
            -webkit-transform-origin: center center;
                    transform-origin: center center;
            -webkit-animation-timing-function: ease-out;
                    animation-timing-function: ease-out;
        }
        10% {
            -webkit-transform: scale(0.91);
                    transform: scale(0.91);
            -webkit-animation-timing-function: ease-in;
                    animation-timing-function: ease-in;
        }
        17% {
            -webkit-transform: scale(0.98);
                    transform: scale(0.98);
            -webkit-animation-timing-function: ease-out;
                    animation-timing-function: ease-out;
        }
        33% {
            -webkit-transform: scale(0.87);
                    transform: scale(0.87);
            -webkit-animation-timing-function: ease-in;
                    animation-timing-function: ease-in;
        }
        45% {
            -webkit-transform: scale(1);
                    transform: scale(1);
            -webkit-animation-timing-function: ease-out;
                    animation-timing-function: ease-out;
        }
        }
        @keyframes heartbeat {
        from {
            -webkit-transform: scale(1);
                    transform: scale(1);
            -webkit-transform-origin: center center;
                    transform-origin: center center;
            -webkit-animation-timing-function: ease-out;
                    animation-timing-function: ease-out;
        }
        10% {
            -webkit-transform: scale(0.91);
                    transform: scale(0.91);
            -webkit-animation-timing-function: ease-in;
                    animation-timing-function: ease-in;
        }
        17% {
            -webkit-transform: scale(0.98);
                    transform: scale(0.98);
            -webkit-animation-timing-function: ease-out;
                    animation-timing-function: ease-out;
        }
        33% {
            -webkit-transform: scale(0.87);
                    transform: scale(0.87);
            -webkit-animation-timing-function: ease-in;
                    animation-timing-function: ease-in;
        }
        45% {
            -webkit-transform: scale(1);
                    transform: scale(1);
            -webkit-animation-timing-function: ease-out;
                    animation-timing-function: ease-out;
        }
        }
        .heartbeat {
            -webkit-animation: heartbeat 1.5s ease-in-out both;
                    animation: heartbeat 1.5s ease-in-out both;
        }
      `}</style>
      <button
        onClick={handleClick}
        className={`fixed bottom-10 right-10 z-50 p-3 bg-[#96C061] text-white rounded-full shadow-lg hover:bg-[#7da350] transition-all duration-300 ease-in-out hover:scale-110 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50 ${animate ? 'heartbeat' : ''}`}
        aria-label="Contactar por WhatsApp"
        onAnimationEnd={() => setAnimate(false)} // Stop animation after the first run
      >
        <PiWhatsappLogo className="w-8 h-8" />
      </button>
    </>
  )
}
