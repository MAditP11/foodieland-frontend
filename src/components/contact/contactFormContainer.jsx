import ImgContact from '../assets/contact/Layer 1 1.png'
import FormInput from '../components/contact/formInput'

export default function ContactFormContainer() {
  return (
    <div class="flex flex-col pt-16 gap-14 items-center ">
      <div class="sub-title flex flex-col gap-10 items-center">
        <h1 class="font-semibold text-6xl font-inter">Contact us</h1>
      </div>

      <div class="content flex w-full">
        <div class="left-content h-fit px-6 rounded-3xl bg-[linear-gradient(to_top,var(--color-primary),var(--color-white))]">
          <img src={ImgContact} alt="" />
        </div>
        <div class="right-content flex flex-col w-4/6 pl-10 gap-16">
          <form class="flex flex-col gap-5">
            <div class="grid grid-cols-2 grid-rows-2 gap-y-5 gap-x-8">
              {/* <!-- NAME --> */}
              <FormInput
                labelFor={'name'}
                labelName={'NAME'}
                type={'text'}
                id={'name'}
                placeholder={'Enter your name...'}
              />
              {/* <!-- EMAIL --> */}
              <FormInput
                labelFor={'email'}
                labelName={'EMAIL'}
                type={'email'}
                id={'email'}
                placeholder={'Enter your email address...'}
              />
              {/* <!-- SUBJECT --> */}
              <FormInput
                labelFor={'subject'}
                labelName={'SUBJECT'}
                type={'text'}
                id={'subject'}
                placeholder={'Enter subject...'}
              />

              {/* <!-- ENQUIRY TYPE --> */}
              <FormInput
                labelFor={'enquiry-type'}
                labelName={'ENQUIRY TYPE'}
                id={'enquiry-type'}
                isOption
              />
            </div>
            {/* <!-- MESSAGES --> */}

            <FormInput
              labelFor={'messages'}
              labelName={'MESSAGES'}
              id={'messages'}
              rows={'8'}
              placeholder={'Enter your messages...'}
            />
            {/* <!-- BUTTON SUBMIT --> */}
            <div class="mt-4">
              <button class="w-fit text-white font-semibold font-inter text-base leading-6 bg-black px-14 py-4 rounded-xl">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
