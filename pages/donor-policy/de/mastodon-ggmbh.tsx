import Image from "next/legacy/image"

import Link from "next/link"
import Head from "next/head"

import Hero from "../../../components/Hero"
import Layout from "../../../components/Layout"
import heroImage from "../../../public/illustrations/apps_hero_desktop.png"
import ukFlagIcon from "../../../public/uk_flag_icon_round.svg"
import PolicyPage from "../../../components/PolicyPage"

const MastodonGGmbHDonorPolicy = () => (
  <Layout>
    <div dir="ltr" className="[unicode-bidi:plaintext]">
      <Hero desktopImage={heroImage} mobileImage={heroImage}>
        <h1 className="h2 mb-4" lang="de">
          Mastodon GmbH Spendenannahme-Richtlinie
        </h1>
        <p className="sh1" lang="de">
          Zuletzt aktualisiert: 13. Februar 2026
        </p>
      </Hero>
    </div>

    <PolicyPage>
      <section lang="de">
        <p className="mt-4 flex justify-end pb-2">
          <Link
            className="flex content-center gap-x-1"
            href="/donor-policy/mastodon-ggmbh"
          >
            <span className="hover:text-blurple-600">English translation</span>
            <Image
              src={ukFlagIcon}
              className="aspect-square"
              width="20"
              height="20"
              alt="Englische Übersetzung"
            />
          </Link>
        </p>
        <p className="mt-4">
          Mastodons Vision ist es, die Social Media Landschaft neu zu gestalten.
          Dazu gehört Inklusivität, Vielfältigkeit und Nutzerorientierung sowie
          die Förderung des Dialogs. Unser Mission ist es, zentrale Plattformen
          durch robuste Social-Networking-Software zu ersetzen, die von Natur
          aus dezentralisiert, quelloffen und vollständig interoperabel sind –
          mit einem klaren Fokus auf den Schutz der Privatsphäre.
        </p>
        <p className="mt-4">
          Diese Aufgabe wird zum Teil durch Spenden von Einzelpersonen und
          Organisationen aus aller Welt ermöglicht. Mit dieser Richtlinie
          definiert Mastodon die wesentlichen Voraussetzungen für die Annahme
          und Anerkennung von Spenden und Zuwendungen fest, um unsere Mission zu
          fördern.
        </p>
        <p className="mt-4">
          Alle finanziellen Mittel, die die Mastodon GmbH erhält, müssen im
          Einklang mit unserer Mission und unseren Zielen stehen. Die Wahrung
          unserer Unabhängigkeit hat dabei höchste Priorität.
        </p>
        <p className="mt-4">
          Um dies sicherzustellen, definieren wir im Folgenden die Kriterien für
          die Ablehnung jeglicher Unterstützung, die den Werten von Mastodon
          widerspricht oder unsere Mission, unser Team, unsere Integrität oder
          die Organisation als Ganzes gefährden könnte:
        </p>
        <ul className="mt-4 list-disc ml-8">
          <li className="mt-2">
            Hersteller von Waffen und militärische Auftragnehmer
          </li>
          <li className="mt-2">
            Jegliche Unternehmen, die sich an illegalen Aktivitäten und
            Menschenrechtsverletzungen beteiligen
          </li>
          <li className="mt-2">
            Jegliche Unternehmen, die das Team, die Unabhängigkeit und die
            Gemeinschaften der Organisation gefährden
          </li>
          <li className="mt-2">
            Unternehmen, die das Ansehen der Organisation gefährden,
            einschließlich, aber nicht ausschließlich, jugendfreie Webseiten,
            Affiliate- und Bewertungsseiten, Online-Wetten und Glücksspiel,
            SEO-Dienstleistungen, Social-Media-Einkauf und andere
          </li>
          <li className="mt-2">
            Jegliche Aussagen oder Handlungen, die die Organisation dazu
            veranlassen, die Zweckmäßigkeit der Annahme einer Spende in Frage zu
            stellen
          </li>
        </ul>
        <p className="mt-4">
          Die Mastodon GmbH nimmt die Einhaltung dieser Spendenrichtlinien sehr
          ernst. Finanzierungen sind entscheidend, um das Wachstum der von
          Mastodon GmbH zu unterstützen, dürfen jedoch nicht die Werte der
          Organisation gefährden. Entscheidungen werden nach Prüfung jeder
          GeldgeberIn und jeder Finanzierungsquelle getroffen. Wenn eine
          SpenderIn oder ein Unternehmen nicht den oben genannten Kriterien
          entspricht, wird die Spende innerhalb von 30 Tagen über die
          ursprüngliche Zahlungsmethode, sofern möglich, zurückerstattet.
        </p>
      </section>
      <section lang="de" className="mt-8">
        <h4 className="h4 mb-6">Steuerliche Konsequenzen</h4>
        <p>
          Mastodon GmbH ist nicht in der Lage, potenziellen Spendern
          steuerliche Beratung zu bieten. SpenderInnen sollten sich bezüglich
          der steuerlichen Abzugsfähigkeit von Spenden an einen Steuerberater
          wenden.
        </p>
      </section>
      <section lang="de" className="mt-8">
        <h4 className="h4 mb-6">Annahme von Sachspenden</h4>
        <p>
          Sachspenden dürfen nur vom Geschäftsführer oder einem schriftlich vom
          Geschäftsführer beauftragten MitarbeiterIn mit der Befugnis zur
          Annahme solcher Spenden angenommen werden.
        </p>
      </section>

      <Head>
        <title lang="de">
          Mastodon GmbH Spendenannahme-Richtlinie - Mastodon
        </title>
        <meta
          property="og:title"
          content="Mastodon GmbH Spendenannahme-Richtlinie"
        />
      </Head>
    </PolicyPage>
  </Layout>
)

export default MastodonGGmbHDonorPolicy
