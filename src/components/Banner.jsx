import { FaSignInAlt } from 'react-icons/fa'
import bannerImage from '../assets/images/banner_img2.jpg'
import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <div className="bg-secondary min-h-96">
        <section className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row justify-between md:items-center">
            <aside className="md:w-1/2 flex-grow flex-shrink-0">
                <div className='text-center md:text-start px-4 pb-10'>
                    <h1 className='text-3xl md:text-5xl font-bold mb-7'>
                        Flexible & Modern: School Management Portal
                    </h1>
                    <p className='mb-7 text-sm md:text-base'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente 
                        neque natus asperiores porro odio, consequuntur maiores dolorum 
                        perspiciatis beatae, labore animi accusamus provident nobis.
                    </p>

                    <Link to={'/login'} className='py-2 px-4 bg-primary text-white rounded-lg inline-flex items-center gap-1 mx-auto md:mx-0'>
                        <FaSignInAlt />  Login
                    </Link>
                </div>
            </aside>

            {/* Image side */}
            <aside className="md:w-1/2 flex-grow flex-shrink-0 relative">
                <div className='my-16 md:my-20 h-52 w-72 md:h-80 md:w-[27rem] max-w-full overflow-hidden mx-auto rounded-3xl md:rotate-12 rotate-6 shadow-2xl'>
                    <img src={bannerImage} alt="" className='object-cover min-h-full' />
                </div>
            </aside>
        </section>
    </div>
  )
}

export default Banner