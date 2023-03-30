import { FormattedMessage, useIntl } from "react-intl"
import { AppCard } from "../components/AppCard"
import classNames from "classnames"
import { useState } from "react"
import SelectMenu from "../components/SelectMenu"
import { sortBy as _sortBy } from "lodash"
import type { appsList } from "../data/apps"
import Category from "../components/Category"

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
      apps.map(({ name, icon, url, paid, released_on, hidden_from_all }) => ({
        name,
        icon,
        url,
        category,
        paid: paid ?? false,
        hidden_from_all: hidden_from_all ?? false,
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
    ({ category, hidden_from_all }) => category === activeCategory || (activeCategory === "all" && !hidden_from_all)
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
              <Category
                key={category.key}
                value={category.key}
                currentValue={activeCategory}
                label={category.label}
                onChange={(e) => setActiveCategory(e.target.value)}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="my-8">
        <SelectMenu
          label={
            <FormattedMessage id="sorting.sort_by" defaultMessage="Sort" />
          }
          value={sortOption}
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
