import Link from "next/link"
import Image from "next/image"
import type { Testimonial } from "../data/testimonials"

export type TestimonialCardProps = {
  testimonial: Testimonial
}
/**
 * TestimonialCard component.
 * Layout (width, height, positioning) can be set from the parent.
 */
export const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  return (
    <div className="keen-slider__slide mb-8 inline-block h-max w-full space-y-6 rounded bg-white p-8">
      <p className="b1">{testimonial.text}</p>
      <div className="flex gap-x-6 items-center">
        <div className="shrink-0">
          <Image
            className="rounded "
            src={testimonial.avatar}
            alt=""
            width="56"
            height="56"
          />
        </div>
        <div className="flex flex-col justify-center truncate">
          <p className="b2 !font-bold">{testimonial.name}</p>
          <p className="b2 truncate text-gray-1">{testimonial.username}</p>
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard
