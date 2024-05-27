import { useRouter } from "next/router"
import Image from "next/legacy/image"
import { FormattedMessage, useIntl } from 'react-intl'
import bios from "../../data/bio"
import board from "../../data/board"
import { withDefaultStaticProps } from "../../utils/defaultStaticProps"
import Layout from "../../components/Layout"
import LogoWhite from "../../public/logos/logo-white.svg?inline"

const missingAvatarSrc = require("../../public/avatars/missing_avatar.png");

function mapMastodonUrlToHandle(mastodonUrl: string) {
  let parts = mastodonUrl.match(/https:\/\/([\w\.]+)\/@([\w]+)/);
  return `${parts[2]}@${parts[1]}`;
}

const AboutMember = () => {
  const router = useRouter()
  const intl = useIntl()
  const member = board.find(member => member.slug === router.query.slug)
  const avatarSrc = member.avatar || missingAvatarSrc;

  return (
    <Layout transparentHeader={false}>
      <div dir="ltr" className="[unicode-bidi:plaintext]"></div>
      <div className="full-width-bg">
        <div className="mx-auto w-full max-w-site px-6 sm:px-20 lg:px-32 xl:px-52">
          <div className="md:grid md:grid-cols-12 md:gap-y-24 pt-40 pb-10 md:gap-x-12 border-b border-gray-3 ">
            <div className="md:col-span-7 md:col-start-6">
              <FormattedMessage
                  id="about.title"
                  defaultMessage="About {name}"
                  values={{
                    name: member.name
                  }}
                >
                  {txt => <span className="h3">{txt}</span>}
                </FormattedMessage>
            </div>
          </div>
          <div className="md:grid md:grid-cols-12 md:gap-y-24 pt-10 pb-60 md:gap-x-12">
            <div className="md:col-span-5 mb-10">
              <div className="flex flex-col text-center items-center">
                <div className="mb-4">
                  <Image src={avatarSrc} width="170" height="170" alt="" className="rounded-full"/>
                </div>
                {member.otherTitle && (
                  <div className="b2 mt-2">{member.otherTitle}</div>
                )}
                <div className="b2 mt-2">
                  {member.title ? `${member.position}, ${member.title}` : member.position}
                </div>
                {member.socials && (
                  <div className="flex flex-row items-center mt-2">
                    <LogoWhite
                      className="h-[1em] w-[1em] text-blurple-600 -mb-1"
                      fill="currentColor"
                    />
                    <a
                      href={member.socials.mastodon}
                      rel="me"
                      className="b2 ml-2 block flex-shrink-0 text-blurple-600 hocus:underline"
                    >
                      {mapMastodonUrlToHandle(member.socials.mastodon)}
                    </a>
                  </div>
                )}
              </div>
            </div>
            <div className="md:col-span-7 lg:col-span-6 md:col-start-6">
              <p className="b2">
                {intl.formatMessage(bios[member.slug])}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = board.filter(member => member.slug).map((member) => ({
    params: { slug: member.slug },
  }))
 
  return { paths, fallback: false }
}

export const getStaticProps = withDefaultStaticProps()

export default AboutMember