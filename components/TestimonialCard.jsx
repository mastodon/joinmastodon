import { FormattedMessage } from "react-intl"
import Image from "next/image"
import LinkButton from "./LinkButton"

export const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="shadow space-y-6 rounded bg-white py-8 px-6">
      <div className="flex gap-6">
        <Image
          className="rounded"
          src={testimonial.avatar}
          alt=""
          width="56"
          height="56"
        />
        <div className="flex flex-col justify-center">
          <p class="sh1 !font-800">{testimonial.name}</p>
          <p href="testimonial.profile_url" class="b3 text-gray-1">
            {testimonial.username}
          </p>
        </div>
      </div>
      <p class="b3">{testimonial.text}</p>

      <LinkButton href={testimonial.profile_url} light fullWidth>
        <FormattedMessage id="view_profile" defaultMessage="View profile" />
      </LinkButton>
    </div>
  )
}

export default TestimonialCard
