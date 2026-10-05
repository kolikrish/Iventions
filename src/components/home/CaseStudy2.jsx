'use client'
import React, { useEffect, useState } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import SplitText from 'gsap/dist/SplitText'
import Btn from '../button/Btn'
gsap.registerPlugin(ScrollTrigger, SplitText)

const CaseStudy2 = () => {
  const slides = [
    {
      participants: '11,195',
      industry: 'Football',
      eventType: 'Live Event',
      location: 'Istanbul, Turkey',
      quote: `"You demonstrated great adaptability and flexibility in this UCL Final, as usual, with your incredible problem-solving skills and seamless handling of last-minute requests!"`,
      name: "Hospitality Production Manager",
      org: "UEFA",
      logo: "/assets/img/party-1.jpeg",
      image: "/assets/img/party-2.jpeg",
    },
    {
      participants: '8,720',
      industry: 'Football-2',
      eventType: 'Super Cup',
      location: 'Helsinki, Finland',
      quote: `"Your team went above and beyond to deliver flawless hospitality during the Super Cup — an outstanding performance under tight timelines!"`,
      name: "Event Operations Director",
      org: "UEFA",
      logo: "/assets/img/party-2.jpeg",
      image: "/assets/img/party-1.jpeg",
    },
    {
      participants: '12,500',
      industry: 'Football',
      eventType: 'Final Draw',
      location: 'Paris, France',
      quote: `"Exceptional organization and precision. The event logistics and guest experience were truly world-class!"`,
      name: "Head of Events",
      org: "UEFA",
      logo: "/assets/img/party-1.jpeg",
      image: "/assets/img/party-2.jpeg",
    },
  ]

  const [current, setCurrent] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

 
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set('.case-study-container', {
        clipPath:
          'polygon(100% 50%, 0% 50%, 0% 50%, 0% 50%, 0% 50%, 0% 50%)',
        yPercent: -10,
      })

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '#casee-study',
          start: 'top 50%',
          end: '55% 50%',
          scrub: true,
          // markers:true,
          invalidateOnRefresh: true,
        },
      })

      tl.fromTo(
        '.case-study-container',
        { yPercent: -10 },
        { yPercent: 0, ease: 'linear', duration: 1 }
      )
        .to(
          '.case-study-container',
          {
            clipPath:
              'polygon(100% 50%, 0% 0%, 0% 0%, 0% 48%, 0% 100%, 0% 100%)',
            ease: 'linear',
            duration: 1,
          },
          '<'
        )
        .to('.case-study-container', {
          clipPath:
            'polygon(100% 50%, 100% 0%, 0% 0%, 0% 48%, 0% 100%, 100% 100%)',
          ease: 'linear',
          duration: 1,
        })
    })

    return () => ctx.revert()
  }, [])

  
  const animateTextIn = () => {
    const split = new SplitText('.slider-content', {
      type: 'lines',
      linesClass: 'line',
      mask: 'lines',
    })

    gsap.set(split.lines, { yPercent: 100, opacity: 0 })

    gsap.to(split.lines, {
      yPercent: 0,
      opacity: 1,
      stagger: 0.04,
      duration: 0.4,
      ease: 'power2.out',
    })

    // Fade in image
    gsap.fromTo(
      '.slider-image',
      { opacity: 0 },
      { opacity: 1, duration: 0.4, ease: 'power2.out' }
    )
  }

  const animateSlideChange = (direction) => {
    if (isAnimating) return
    setIsAnimating(true)

    const oldSplit = new SplitText('.slider-content', {
      type: 'lines',
      linesClass: 'line',
      mask: 'lines',
    })

    const tl = gsap.timeline({
      onComplete: () => {
        setCurrent((prev) =>
          direction === 'next'
            ? (prev + 1) % slides.length
            : (prev - 1 + slides.length) % slides.length
        )
      },
    })

    tl.to(oldSplit.lines, {
      yPercent: -100,
      opacity: 0,
      stagger: 0.04,
      duration: 0.4,
      ease: 'power2.inOut',
    }).to(
      '.slider-image',
      {
        opacity: 0,
        duration: 0.3,
        ease: 'power2.inOut',
      },
      '<'
    )
  }

  useEffect(() => {
    const ctx = gsap.context(() => {
      animateTextIn()
    })

    const timeout = setTimeout(() => setIsAnimating(false), 800)
    return () => {
      ctx.revert()
      clearTimeout(timeout)
    }
  }, [current])

  return (
    <section id='casee-study' className='relative h-[150vh] z-0 bg-[#9C93E8]'>
      <style jsx>{`
        .line {
          overflow: hidden;
          display: block;
        }
      `}</style>

      <div className='sticky top-0 h-screen w-full overflow-hidden'>
        <div className='case-study-container h-full w-full bg-[#F3EFEB] text-black flex flex-col justify-between px-[2vw] py-[4vh]'>


          
          {/* HEADER */}
          <div className='grid grid-cols-2 md:grid-cols-4 gap-[3vw] text-[2.5vw] md:text-[0.8vw] uppercase tracking-[0.1vw] mb-[2vh] md:mb-[4vh]'>
            <div>
              <p className='opacity-60'>Participants</p>
              <p key={`quote-${current}`} className='text-[3vw] md:text-[1vw] font-medium slider-content'>
                {slides[current].participants}
              </p>
            </div>
            <div>
              <p className='opacity-60'>Industry</p>
              <p key={`quote-${current}`} className='text-[3vw] md:text-[1vw] font-medium slider-content'>
                {slides[current].industry}
              </p>
            </div>
            <div>
              <p className='opacity-60'>Event Type</p>
              <p key={`quote-${current}`} className='text-[3vw] md:text-[1vw] font-medium slider-content'>
                {slides[current].eventType}
              </p>
            </div>
            <div>
              <p className='opacity-60'>Location</p>
              <p key={`quote-${current}`} className='text-[3vw] md:text-[1vw] font-medium slider-content'>
                {slides[current].location}
              </p>
            </div>
          </div>

          {/* MAIN SLIDE CONTENT */}
          <div key={`quote-${current}`} className='flex flex-col md:flex-row justify-between items-center h-full gap-6 md:gap-0'>
            <div className='w-full md:w-[35%] slider-content text-[4.5vw] md:text-[2.5vw] leading-[1.2] md:leading-[1.1] font-display'>
              {slides[current].quote}
            </div>

            <div className='flex justify-center items-center gap-[4vw] md:gap-[8vw] w-full md:w-[60%]'>
              <div className='text-center w-[50%]'>
                <p className='font-semibold slider-content text-[2.8vw] md:text-[1vw]'>
                  {slides[current].name}
                </p>
                <p className='text-[2.2vw] md:text-[0.9vw] slider-content opacity-70'>
                  {slides[current].org}
                </p>
              </div>

              <div className='w-[50%] flex justify-center'>
                <img
                  src={slides[current].image}
                  alt='slide visual'
                  className='w-[24vw] h-[24vw] md:w-[10vw] md:h-[10vw] object-cover rounded-[2vw] md:rounded-[1vw] slider-image'
                />
              </div>
            </div>
          </div>

          {/* CONTROLS */}
          <div className='flex justify-between items-center mt-[3vh] text-[2.5vw] md:text-[0.8vw]'>
            <div className='flex gap-[1vw]'>
              <button
                type='button'
                onClick={() => animateSlideChange('prev')}
                disabled={isAnimating}
                aria-label='Previous slide'
                className='w-[7vw] h-[7vw] md:w-[3.2vw] md:h-[3.2vw] rounded-[0.5vw] bg-white hover:bg-black text-black hover:text-white transition-colors duration-300 flex items-center justify-center cursor-pointer border border-black/10 disabled:opacity-50 disabled:cursor-not-allowed shadow-xs'
              >
                <svg
                  width='18'
                  height='18'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                  className='w-[3.2vw] h-[3.2vw] md:w-[1.2vw] md:h-[1.2vw] stroke-current'
                >
                  <path
                    d='M19 12H5M5 12L12 19M5 12L12 5'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </button>
              <button
                type='button'
                onClick={() => animateSlideChange('next')}
                disabled={isAnimating}
                aria-label='Next slide'
                className='w-[7vw] h-[7vw] md:w-[3.2vw] md:h-[3.2vw] rounded-[0.5vw] bg-white hover:bg-black text-black hover:text-white transition-colors duration-300 flex items-center justify-center cursor-pointer border border-black/10 disabled:opacity-50 disabled:cursor-not-allowed shadow-xs'
              >
                <svg
                  width='18'
                  height='18'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                  className='w-[3.2vw] h-[3.2vw] md:w-[1.2vw] md:h-[1.2vw] stroke-current'
                >
                  <path
                    d='M5 12H19M19 12L12 5M19 12L12 19'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </button>
            </div>

            <div className='text-sm text-gray-500 w-[12vw] md:w-[4vw] flex gap-[0.3vw] font-display tracking-widest'>
              <span key={`quote-${current}`} className='slider-content w-[40%]'>
                {String(current + 1).padStart(2, '0')}
              </span>
              <span className='w-[60%]'>/ {String(slides.length).padStart(2, '0')}</span>
            </div>

            <div>
              <Btn text='See full case study' />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default CaseStudy2
