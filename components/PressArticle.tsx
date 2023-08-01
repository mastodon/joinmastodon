import Image from "next/legacy/image"

const PressArticle = ({ story }) => (
  <a
    href={story.url}
    rel="nofollow noopener"
    className="col-span-12 block rounded-md ring-blurple-500 hover:text-blurple-600 focus:ring md:col-span-6 lg:col-span-3"
  >
    <div className="flex w-full items-center justify-center rounded-md bg-gray-4 py-20 px-16">
      <div className="relative h-10 w-full">
        <Image src={story.logo} alt="" layout="fill" objectFit="contain" />
      </div>
    </div>

    <div className="py-4">
      <div className="h6 mb-2 !font-medium">{story.title}</div>
      <div className="b2 !font-bold">{new URL(story.url).hostname}</div>
    </div>
  </a>
)

export default PressArticle
