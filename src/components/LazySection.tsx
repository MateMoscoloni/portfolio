import dynamic from 'next/dynamic'

export const LazyAbout = dynamic(() => import('./About'))
export const LazySkills = dynamic(() => import('./Skills'))
export const LazyExperience = dynamic(() => import('./Experience'))
export const LazyServices = dynamic(() => import('./Services'))
