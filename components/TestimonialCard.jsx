import { FormattedMessage } from "react-intl"
import Image from "next/image"
import LinkButton from "./LinkButton"

export const TestimonialCard = ({ testimonial }) => {
  return (
    <div>
      <Image src={testimonial.avatar} alt="" width="56" height="56" />
      <p>{testimonial.name}</p>
      <p>{testimonial.username}</p>

      <p>{testimonial.text}</p>

      <LinkButton href="/" light>
        <FormattedMessage id="view_profile" defaultMessage="View profile" />
      </LinkButton>
    </div>
  )
}

export default TestimonialCard
