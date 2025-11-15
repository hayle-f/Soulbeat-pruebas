import Faqs from '../../components/faqs-subs/Faqs'
import Subscription from '../../components/faqs-subs/Subscription'

const FaqsSubscription = () => {
  return (
    <div className="mx-auto xl:max-w-[2000px] text-center mb-10">
      <div className="bg-[url('/imgs/videoframe2.png')] bg-cover bg-center bg-no-repeat mb-12">
          <h1 className="text-[3rem] py-2 font-bold text-[#f0f0f0] [text-shadow:_2px_4px_30px_#000000,_-2px_-4px_20px_#000000,_0px_6px_20px_#000000] self-center sm:text-[5rem] sm:p-5 md:text-[6.5rem] md:p-[30px]">S o u l B e a t</h1>
      </div>
      <Faqs />
      <Subscription />
    </div>
  )
}

export default FaqsSubscription