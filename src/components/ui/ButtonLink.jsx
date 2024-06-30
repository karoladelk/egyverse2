import React from 'react'
import { Box } from '@chakra-ui/react'
import { motion } from 'framer-motion'

function ButtonLink({ text }) {
  return (
    <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-lg font-semibold leading-6 text-white inline-block">
      <span className="absolute inset-0 overflow-hidden rounded-full">
        <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,#ffd90079_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
      </span>
      <Box
        className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10"
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        flexDirection={'row'}
      >
        <span >{text}</span>
        <motion.div
          initial={{ x: 0 }}
          whileHover={{ x: 5 }}
          whileTap={{ x: 0 }}
          className="text-white"
        >
          <svg
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M10.75 8.75L14.25 12L10.75 15.25"
            ></path>
          </svg>
        </motion.div>
      </Box>
      <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)]  from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
    </button>
  )
}

export default ButtonLink
