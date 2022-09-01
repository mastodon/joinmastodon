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
    <Link href={testimonial.profile_url}>
      <a
        target="_blank"
        rel="noopener noreferrer"
        className="keen-slider__slide mb-8 inline-block h-max w-full space-y-6 rounded bg-white p-8"
      >
        <p className="b1">{testimonial.text}</p>
        <div className="flex flex-wrap gap-x-6 items-center">
          <Image
            className="rounded shrink-0"
            src={testimonial.avatar}
            alt=""
            width="56"
            height="56"
          />
          <div className="flex flex-col justify-center">
            <p className="b2 !font-700">{testimonial.name}</p>
            <p className="b2 truncate text-gray-1">{testimonial.username}</p>
          </div>
        </div>
      </a>
    </Link>
  )
}

export default TestimonialCard
