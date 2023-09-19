import React from 'react'
import logo from '../landingpage/src/assets/images/Husna white background-01.jpg'

export function Logo({ className }: { className?: string }) {
  return (
    <img
      className={className}
      src="/landingpage/images/Husna white background-01.jpg"
      alt="Logo"
      width="32"
      height="32"
    />
  )
}
