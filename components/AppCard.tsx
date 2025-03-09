import Image from "next/legacy/image"
import { IntlShape, useIntl } from "react-intl"
import { categories } from "./AppsGrid"
import { app } from "../data/apps";

/**
 * Gets the recommended url of an app.
 * Either to the app page or repo page if a category is selected.
 */
function getAppUrl(app: app, activeCategory: string, intl: IntlShape) {
  if (activeCategory !== 'all' && !app[activeCategory])
    throw new Error(`Failed to get app repo specifc url, did I forget to filter the app list?`);
  // app url isn't set, search for a repo url
  if (activeCategory === `all` && !app.url) {
    // ordered by preference
    const defaultRepos = [
      `web`,
      `flatpak`,
      `fdroid`,
      `arch`,
      `arch_aur`,
      `firefox`,
      `snap`,
      `gplay`,
      `ios`,
      `macos`,
      `watchos`,
      `micestore`,
      `chrome`,
      `source`,
    ];
    for (let i = 0; i < defaultRepos.length; i++) {
      const x = defaultRepos[i];
      if (!app[x]) continue; // isn't in repo
      return getAppUrl(app, x, intl);
    }
    throw new Error(`Failed to get default repo link of ${app.name}`);
  }

  if (activeCategory !== `all` && !app[activeCategory]) throw new Error(`hi ${app.name} ${activeCategory}`);
  switch (activeCategory) {
    default:
    case `all`:
      return app.url;

    // could have thees in a seprate "urls" object, then it would look a bit better.
    case `gplay`:
      return `https://play.google.com/store/apps/details?id=${app.gplay}`;

    case `ios`:
      return `https://apps.apple.com/app/${app.ios}?platform=iphone`;
    case `macos`:
      return `https://apps.apple.com/app/${app.macos}?platform=mac`;
    case `watchos`:
      return `https://apps.apple.com/app/${app.watchos}?platform=appleWatch`;

    case `micestore`:
      return `https://microsoft.com/store/productId/${app.micestore}`;
    case `snap`:
      return `https://snapcraft.io/${app.snap}`;
    case `arch`:
      return `https://archlinux.org/packages/extra/x86_64/${app.arch}`;
    case `arch_aur`:
      return `https://aur.archlinux.org/packages/${app.arch_aur}`;
    case `fdroid`:
      return `https://f-droid.org/${intl.locale}/packages/${app.fdroid}`;
    case `flatpak`:
      return `https://${app.flatpak.replace(`/`, `/apps/`)}`;
    case `firefox`:
      return `https://addons.mozilla.org/en-US/firefox/addon/${app.firefox}`;
    case `chrome`:
      return `https://chromewebstore.google.com/detail/${app.chrome}`;
    case `web`:
      return app.web;
    case `source`:
      return app.source;
  }
}

/**
 * Renders a card with app data.
 */
export const AppCard = (app: app, activeCategory: string) => {
  const {
    name,
    icon,
    url,
    paid,
    source,
  } = app;
  const intl = useIntl()
  const categoryLabels = [];

  // add supported OS'
  Object.keys(categories).forEach(cat => {
    if (!app[cat]) return;
    categoryLabels.push(
      <a href={getAppUrl(app, cat, intl)}>
        {intl.formatMessage({ id: cat, defaultMessage: categories[cat] })}
      </a>
    );
    categoryLabels.push(`, `);
  })

  // add price label
  if (source) categoryLabels.push(<a href={source}>{intl.formatMessage({ id: `apps.libre`, defaultMessage: "Libre" })}</a>); else
    // if I wanted to be really on the nose, I'd have any "free" app as paid since you're paying with your attention.  
    if (paid) categoryLabels.push(intl.formatMessage({ id: `apps.paid`, defaultMessage: "Paid" })); else
      categoryLabels.push(intl.formatMessage({ id: `apps.free`, defaultMessage: "Free" }));

  return (
    <div
      key={`${url} ${name}`}
      rel="noopener noreferrer"
      className="flex items-stretch justify-start gap-4 rounded border border-gray-3 bg-white p-2 hover:bg-gray-4 md:p-4"
    >
      <a className="h-[3.5rem] w-[3.5rem] flex-shrink-0 overflow-hidden rounded-sm" href={getAppUrl(app, activeCategory, intl)}>
        <Image src={icon} alt={`Logo for ${name}`} />
      </a>
      <div className="flex flex-auto flex-col">
        <div className="b4 block text-gray-1">
          {categoryLabels}
        </div>
        <h3 className="b1 !font-700 flex flex-auto items-center !leading-[1] rtl:text-right">
          <a href={getAppUrl(app, activeCategory, intl)} dir="ltr">{name}</a>
        </h3>
      </div>
    </div>
  )
}