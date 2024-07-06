import School from '../assets/images/sch.png'
import Uni from '../assets/images/uni.png'
import Grad from '../assets/images/graduate.png'

const Achievements = () => {
    return (
      <div className="bg-white min-h-72">
        <section className="max-w-6xl mx-auto flex flex-col  justify-between py-32 ">
            <div className="text-center mb-4">
                <h1 className=" text-4xl font-bold ">Our Achievement</h1>
                <p className="text-sm">With our super powers we have reached this</p>
            </div>
            <div className="py-4">
              <div className="flex  justify-center flex-col md:flex-row items-center gap-4 ">
                  <div className='border-2 border-slate-300 rounded-md flex justify-center items-center gap-2 px-10  h-48' >
                    <img src={School} alt="" className='h-24 w-24'/>
                    <div>
                      <h1 className='text-2xl font-bold'>125+</h1>
                      <p>University</p>
                    </div>
                  </div>
                  
                  <div className='border-2 border-slate-300 rounded-md flex justify-center items-center gap-2 px-10  h-48' >
                    <img src={Uni} alt="" className='h-24 w-24'/>
                    <div>
                      <h1 className='text-2xl font-bold'>304+</h1>
                      <p>Schools</p>
                    </div>
                  </div>
                  
                  <div className='border-2 border-slate-300 rounded-md flex justify-center items-center gap-2 px-10 h-48' >
                    <img src={Grad} alt="" className='h-24 w-24'/>
                    <div>
                      <h1 className='text-2xl font-bold'>50k</h1>
                      <p>Students</p>
                    </div>
                  </div>
              </div>
              
            </div>
        </section>
      </div>
    )
  }
  
  export default Achievements