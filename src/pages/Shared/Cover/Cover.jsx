import { Parallax } from 'react-parallax';

const Cover = ({img, title }) => {
  return (
    <Parallax
    blur={{ min: -50, max: 50 }}
    bgImage={img}
    bgImageAlt="the menu"
    strength={-200}
>
<div
  className="hero h-[700px]">
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
      <p className="mb-5 text-2xl">
        
The food and beverage offering, we're available for customers to order. It typically includes various sections such as appetizers, main courses, desserts, and drinks. 
      </p>
    </div>
  </div>
</div>
</Parallax>
   
  )
}

export default Cover