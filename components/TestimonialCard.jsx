import { FormattedMessage } from "react-intl"
import Image from "next/image"
import LinkButton from "./LinkButton"

/**
 * TestimonialCard component.
 * Layout (width, height, positioning) can be set from the parent.
 * @param {{
 *  testimonial: {
 *    avatar: string,
 *    name: string,
 *    username: string,
 *    text: string,
 *    profile_url: string,
 *  }
 * }} props
 */

export const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="h-max space-y-6 rounded bg-white py-8 px-6 shadow">
      <div className="flex flex-wrap gap-x-6 ">
        <div className="shrink-0">
          <Image
            className="rounded"
            src={testimonial.avatar}
            alt=""
            width="56"
            height="56"
          />
        </div>
        <div className="flex flex-col justify-center">
          <p className="sh1 !font-800">{testimonial.name}</p>
          <p className="b3 truncate text-gray-1">{testimonial.username}</p>
        </div>
      </div>
      <p className="b3">{testimonial.text}</p>

      <LinkButton href={testimonial.profile_url} light fullWidth>
        <FormattedMessage id="view_profile" defaultMessage="View profile" />
      </LinkButton>
    </div>
  )
}

export default TestimonialCard
