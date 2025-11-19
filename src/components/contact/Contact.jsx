import React from 'react'
import Layout from '../layout/Layout'

const Contact = () => {
  return (
    <Layout>
      <div
        className="min-h-auto bg-cover bg-center bg-no-repeat flex justify-center items-center"
        style={{
          backgroundImage: "url('/contactus.webp')",
        }}
      >
        <div className="text-white text-4xl font-bold drop-shadow-xl py-4">
            <p>Contact Us</p>
        </div>
      </div>
    </Layout>
  )
}

export default Contact