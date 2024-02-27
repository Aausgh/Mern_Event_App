import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
      return (
            <footer className='border-t'>
                  <div className='flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row'>
                        <Link href="/" >
                              <Image
                                    src="/assets/images/logoo.svg"
                                    width={150}
                                    height={68}
                                    alt="logo"
                              />
                        </Link>

                        <p>2023 Eventopia. All rights reserved</p>
                  </div>

            </footer>
      )
}

export default Footer