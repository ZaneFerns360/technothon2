import { FaInstagram, FaLinkedin, FaFacebook } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import Link from 'next/link'

export default function ContactUs() {
  return (
    <div className="pt-24">
      {' '}
      <div className="m-4 flex flex-col justify-between rounded-lg bg-blue-600 p-4 md:flex-row">
        <div className="w-full p-4 md:w-1/2">
          <h2 className="mb-2 text-3xl font-bold">Reach Us!</h2>
          <p className="text-lg">
            For any queries or assistance, feel free to reach out to us. We are
            here to help!
          </p>

          <h3 className="mb-2 mt-4 text-2xl font-bold">College Name:</h3>
          <p className="text-lg">V.E.S. Polytechnic</p>

          <h3 className="mb-2 mt-4 text-2xl font-bold">College Address:</h3>
          <p className="text-lg">Sindhi Society, Chembur, Mumbai 400071</p>

          <h3 className="mb-2 mt-4 text-2xl font-bold">Contact Information:</h3>
          <div className="flex flex-row space-x-4">
            <Link href="mailto:jeet.doshi.vesp@gmail.com">
              <MdEmail className="text-5xl" />
            </Link>

            <Link href="https://www.instagram.com/vespolytechnic_0004/">
              <FaInstagram className="text-5xl" />
            </Link>
            <Link href="https://www.linkedin.com/school/ves-polytechnic/">
              <FaLinkedin className="text-5xl" />
            </Link>
            <Link href="https://www.facebook.com/people/VESP-Diploma-Engineering/100063678624978/">
              <FaFacebook className="text-5xl" />
            </Link>
          </div>
        </div>

        <div className="mt-4 w-full p-4 md:mt-0 md:w-1/2">
          <iframe
            width="100%"
            height="400"
            style={{ border: 0, borderRadius: '15px' }}
            loading="lazy"
            allowFullScreen
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15081.71640963316!2d72.88971186256668!3d19.047273392115425!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDAyJzUwLjEiTiA3MsKwNTMnMjMuOCJF!5e0!3m2!1sen!2sin!4v1660900113753!5m2!1sen!2sin"
          ></iframe>
        </div>
      </div>
    </div>
  )
}
