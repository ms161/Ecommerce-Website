import React from 'react'
import HeaderComp from '../Store/HeaderComp'
import FooterComponent from '../FooterComponent/FooterComponent'

const AboutPage = () => {
  return (
  <>
  <div className='flex bg-black h-10  text-[20px] text-white'>

  <HeaderComp></HeaderComp>
  </div>
  <div className='bg-gray-700 h-[8rem]   ani italic text-white text-center text-6xl align-text-center mt-[3rem] ' >The Generics</div>
    <div className="mt-3 m-auto italic text-[30px] w-10 font-serif font-bold " >About</div>     
    <div className='flex justify-around    m-auto w-[50m]'>
      <div className='w-[20rem] h-[20rem] '>  <img className='rounded-full' src="https://prasadyash2411.github.io/ecom-website/img/Band%20Members.png" alt="" /></div>
      <p className='w-[70rem]'>
   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, itaque. Culpa accusamus officiis error odio porro repudiandae eaque atque, dolores molestias. Quam commodi dicta ut. Adipisci molestias nobis incidunt labore architecto enim, alias suscipit unde laboriosam sunt neque, rem consequuntur eius modi sint distinctio mollitia accusantium! Ratione, eveniet exercitationem dolore inventore quos vel sapiente. Tempore necessitatibus nihil accusamus tenetur tempora totam rerum eos adipisci! Deleniti tempore nobis, mollitia dolore sint dignissimos architecto optio nemo porro. Similique neque molestiae, recusandae excepturi non unde quidem aliquam deleniti fugiat alias temporibus odit porro, blanditiis eligendi cupiditate explicabo consequuntur eveniet molestias vel qui illum? Dolor sunt quisquam provident cumque tempore porro officiis cupiditate mollitia! Quod rerum, ipsum et laudantium sapiente voluptates nostrum aliquid in labore quia placeat neque accusantium tempora eaque ex sed asperiores deleniti numquam obcaecati debitis impedit cum delectus provident quam. Quam veniam error molestias iste? Aliquid soluta consequatur quia amet doloribus!
      </p>

    </div>
    <FooterComponent></FooterComponent>
  </>
  )
}

export default AboutPage