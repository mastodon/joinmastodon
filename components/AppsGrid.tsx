import { FormattedMessage, useIntl } from "react-intl"
import { AppCard } from "../components/AppCard"
import classNames from "classnames"
import { useState } from "react"
import SelectMenu from "../components/SelectMenu"
import { sortBy as _sortBy } from "lodash"
import type { appsList } from "../data/apps"

export type AppsGridProps = {
  apps: appsList
}

/** Renders AppCards as a grid, with sorting and filtering options */
export const AppsGrid = ({ apps }: AppsGridProps) => {
  const intl = useIntl()
  const [activeCategory, setActiveCategory] = useState("all")

  /** normalizing the apps dictionary as an array */
  const allApps = Object.entries(apps)
    .map(([category, apps]) =>
      apps.map(({ name, icon, url, paid, released_on }) => ({
        name,
        icon,
        url,
        category,
        paid: paid ?? false,
        released_on: new Date(released_on) ?? null,
      }))
    )
    .flat()

  //prettier-ignore
  const sortOptions = [
    { value: "date_added", label: intl.formatMessage({ id: "sorting.recently_added", defaultMessage: "Recently Added" }) },
    { value: "paid", label: intl.formatMessage({ id: "sorting.free", defaultMessage: "Free" }) },
    { value: "name", label: intl.formatMessage({ id: "sorting.name", defaultMessage: "Alphabetical" }) },
  ]
  const [sortOption, setSortOption] = useState(sortOptions[0].value)
  const filteredApps = allApps.filter(
    ({ category }) => category === activeCategory || activeCategory === "all"
  )
  const sortedAndFilteredApps = _sortBy(filteredApps, sortOption)

  //prettier-ignore
  const categories = [
    { key: "all", label: intl.formatMessage({ id: "browse_apps.all", defaultMessage: "All" }) },
    { key: "android", label: intl.formatMessage({ id: "browse_apps.android", defaultMessage: "Android" }) },
    { key: "ios", label: intl.formatMessage({ id: "browse_apps.ios", defaultMessage: "iOS" }) },
    { key: "web", label: intl.formatMessage({ id: "browse_apps.web", defaultMessage: "Web" }) },
    { key: "sailfish", label: intl.formatMessage({ id: "browse_apps.sailfish", defaultMessage: "SailfishOS" }) },
    { key: "desktop", label: intl.formatMessage({ id: "browse_apps.desktop", defaultMessage: "Desktop" }) },
  ]
  return (
    <div>
      <div>
        <h2 className="h4 mb-8">
          <FormattedMessage
            id="browse_apps.title2"
            defaultMessage="Browse third-party apps"
          />
        </h2>
        <div className="-mx-gutter pis-gutter mb-6 overflow-x-auto">
          <div className="flex flex-wrap gap-gutter md:flex-nowrap">
            {categories.map((category) => (
              <label
                key={category.key}
                className={classNames(
                  "b3 block cursor-pointer whitespace-nowrap rounded border-2 p-4 text-center !font-semibold transition-all md:w-full",
                  category.key === activeCategory
                    ? "border-blurple-500 bg-blurple-500 text-white hover:border-dark-blurple hover:bg-dark-blurple focus-visible-within:border-dark-blurple focus-visible-within:bg-dark-blurple"
                    : "border-blurple-500 bg-white text-blurple-500 hover:border-dark-blurple hover:text-dark-blurple"
                )}
              >
                <input
                  className="sr-only"
                  type="radio"
                  name="apps-selection"
                  id=""
                  value={category.key}
                  onChange={(e) => setActiveCategory(e.target.value)}
                />
                {category.label}
              </label>
            ))}
          </div>
        </div>
      </div>
      <div className="my-8">
        <SelectMenu
          label={
            <FormattedMessage id="sorting.sort_by" defaultMessage="Sort" />
          }
          value="all"
          onChange={(v) => {
            setSortOption(v)
          }}
          options={sortOptions}
        />
      </div>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4">
        {sortedAndFilteredApps.map(AppCard)}
      </div>
    </div>
  )
}
export default AppsGrid
