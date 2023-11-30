import BasicPage from "../components/BasicPage"
import Head from "next/head"
import Hero from "../components/Hero"
import Layout from "../components/Layout"

const Covenant = () => (
  <Layout>
    <div dir="ltr" className="[unicode-bidi:plaintext]">
      <Hero>
        <h1 className="h1">Mastodon Server Covenant</h1>
      </Hero>
      <BasicPage>
        <CovenantSection
          heading="All Mastodon servers we link to from our server picker commit to the following:"
          rules={[
            {
              heading:
                "Active moderation against racism, sexism, homophobia and transphobia",
              text: "Users must have the confidence that they are joining a safe space, free from white supremacy, anti-semitism and transphobia of other platforms.",
            },
            {
              heading: "Daily backups",
              text: "It is important for users to have the confidence that a trip over the power cable or a rogue bit flip will not erase all of their data. Having a backup strategy is a basic necessity of providing a public service.",
            },
            {
              heading:
                "At least one other person with emergency access to the server infrastructure",
              text: "Various circumstances can prevent the original owner of the Mastodon server from answering technical emergencies. For this reason, more than one person must have that capability.",
            },
            {
              heading:
                "Commitment to give users at least 3 months of advance warning in case of shutting down",
              text: "Sometimes services shut down, it is the cycle of life. But users must have the confidence that their account will not disappear overnight, so that they have time to export their data and find another server.",
            },
          ]}
        />

        <hr className="my-16 border-gray-3" />

        <section>
          <h2 className="h4">Submitting your server</h2>
          <p className="mt-4">
            If you are a server owner, and your server passes these
            requirements, you can send an e-mail to{" "}
            <span className="font-bold">servers@joinmastodon.org</span> with the
            subject &quot;Server submission&quot; to be listed on this website.
            Please include the <strong>domain name</strong>, whether you are a
            private individual or represent an organization, in which country
            the server is legally situated in, and which category would fit it
            best.
          </p>
          <p className="mt-4">
            Because our goal is giving new users a smooth and reliable start
            into the decentralized social network of Mastodon rather than simply
            promoting individual servers, we are generally not interested in
            promoting brand new and unproven servers, so the submission should
            not be your primary strategy of growing your community.
          </p>
        </section>

        <hr className="my-16 border-gray-3" />

        <CovenantSection
          heading="Metadata guidelines"
          description="Your server's metadata should be in a presentable state:"
          rules={[
            {
              heading: "Short description",
              text: "This is your place to express what makes your server different from others. Do not describe what Mastodon is. Is it hosted by a specific organization? Is it operated from a specific country or region? Stick to one or two sentences. Attention is a limited resource. If your server's target audience speaks a different language than English, write the description in that language.",
            },
            {
              heading: "Thumbnail",
              text: "Avoid the default. Express the visual identity of your server. A high quality image will make your server look professional. Stick close to the recommended dimensions of 1200x630px and use only JPG and PNG formats. Avoid transparency. We will proxy the image to avoid sending traffic from our visitors directly to your host.",
            },
            {
              heading: "Language",
              text: "If you are running a language-specific server, make sure to set DEFAULT_LOCALE in your configuration to prevent Mastodon from showing the interface in the language of the visitor.",
            },
            {
              heading: "Rules",
              text: "Make sure to create server rules — free-text rules in extended server description are not enough. Server rules are an integral part of onboarding. They must be kept short and to the point (you can elaborate in the extended server description). As a rule they should fit on a typical phone screen without having to scroll through. You want the visitor to be able to read them quickly. Do not include items that are covered by hardcoded report reasons, such as spam.",
            },
            {
              heading: "Contact information",
              text: `Have a valid and reachable e-mail address for inquiries ("business e-mail"). We may contact you through that address. And in cases of legal matters, it is generally preferable to receive e-mails through your own address rather than through your web host's abuse contact. You shoud also have a contact account ("Contact username") though it does not have to be your personal account.`,
            },
          ]}
        />

        <hr className="my-16 border-gray-3" />

        <CovenantSection
          heading="Incompatible policies"
          description="There are some things you should avoid if you want us to promote your server:"
          rules={[
            {
              heading: "Blocking major e-mail providers",
              text: "Most people only have one e-mail address and few are willing to create a new one to satisfy the requirements of a social network they are checking out. Avoid blocking sign-ups from major e-mail providers like GMail, Outlook and so on, as this creates an incredibly frustrating onboarding experience that reflects badly on Mastodon as a whole.",
            },
            {
              heading: "Running in limited-federation mode",
              text: "Mastodon is a decentralized social network and we are interested in promoting decentralization. While we respect the use cases of running Mastodon without federation in academic and private contexts, users arriving through our page should be able to participate in the Mastodon network without excessive limitations.",
            },
          ]}
        />

        <hr className="my-16 border-gray-3" />

        <CovenantSection
          heading="After submission"
          description="Submissions are reviewed manually. Our service periodically checks if your server is up and if it is accepting sign-ups. We only show servers that are up and accepting sign-ups."
        />

        <Head>
          <title>Mastodon Server Covenant - Mastodon</title>
          <meta
            property="og:title"
            content="Mastodon Server Covenant for joinmastodon.org"
          />
        </Head>
      </BasicPage>
    </div>
  </Layout>
)

const CovenantSection = ({
  heading,
  description,
  rules,
}: {
  heading?: string
  description?: React.ReactNode | string
  rules?: { heading: string; text: string }[]
}) => {
  return (
    <section>
      {heading && <h2 className="h4">{heading}</h2>}
      {description && <p className="mt-4">{description}</p>}
      {rules && (
        <ol className="mt-8 list-inside list-decimal space-y-4">
          {rules.map((rule) => {
            return (
              <li key={rule.heading}>
                <h2 className="inline font-bold">{rule.heading}</h2>
                <p className="mt-2 ">{rule.text}</p>
              </li>
            )
          })}
        </ol>
      )}
    </section>
  )
}
export default Covenant
