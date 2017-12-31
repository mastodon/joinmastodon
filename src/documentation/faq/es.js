import React from 'react';
import { Link } from 'react-router-dom';
import { LinkableH2 } from '../../LinkableHeadings';
import Navigation from '../../Navigation';
import admin from '../../assets/screenshots/admin_info.png';
import globe from '../../assets/screenshots/compose-globe.png';
import expandedViewPermaLink from '../../assets/screenshots/expanded_view-permalink.png';
import gettingStartedFavourites from '../../assets/screenshots/getting_started-favourites.png';
import gettingStartedExtendedInformation from '../../assets/screenshots/getting_started-extended_information.png';
import gettingStartedPreferences from '../../assets/screenshots/getting_started-preferences.png';
import inlineTootTimestampLink from '../../assets/screenshots/inline_toot-timestamp_link.png';
import linkToProfile from '../../assets/screenshots/link_to_profile.png';
import preferencesDataExport from '../../assets/screenshots/preferences-data_export.png';
import preferencesPostPrivacy from '../../assets/screenshots/preferences-post_privacy.png';
import profileAvatarClick from '../../assets/screenshots/profile-avatar_click.png';
import profileWebpageURL from '../../assets/screenshots/profile-webpage_URL.png';
import search from '../../assets/screenshots/search.png';
import toolbarGettingStarted from '../../assets/screenshots/toolbar-getting_started.png';

const Faq = () => (
  <div>
    <div className='intro'>
      <Navigation />
      <h1>Preguntas frecuentes</h1>
    </div>
    <div className='article article--text'>
      <LinkableH2 id='what-is-a-mastodon'>¿Qué es un <i>Mastodon</i>?</LinkableH2>
      <p>Es un animal prehistórico, predecesor del mamut. Los mastodontes hacen “toot” (al menos en inglés, en español berrearían, ¿no?).</p>
      <LinkableH2 id='why-the-name-mastodon'>¿Por qué el nombre <i>Mastodon</i>?</LinkableH2>
      <p>Existe una banda de metal progresivo con el mismo nombre del que soy fan, la cual hizo que este animal llamara mi atención. Pensé que el nombre/animal es muy cool.</p>
      <LinkableH2 id='how-exactly-is-it-decentralized'>¿Por qué Mastodon es una red descentralizada?</LinkableH2>
      <p>Hay diferentes maneras en las cuales algo puede ser descentralizado;  en este caso, Mastodon es del tipo “federado”. Piensa en el correo electrónico, no tanto en los servicios torrent para compartir archivos: existen muchos servidores distintos (“instancias” o “nodos” en el caso de esta red) y los usuarios tienen una cuenta en alguno de estos servidores, pero pueden interactuar y seguirse entre ellos sin importar en qué servidor esté su cuenta.</p>
      <LinkableH2 id='technically-how-does-the-federation-work'>Técnicamente, ¿cómo funciona la federación?</LinkableH2>
      <p>Estamos utilizando el conjunto de protocolos OStatus:</p>
      <ol>
        <li>Webfinger para la búsqueda de usuarios en distintos dominios</li>
        <li><i>Feeds</i> de Atom con las extensiones ActivityStreams, Portable Contacts y Threads para el contenido</li>
        <li>PubSubHubbub para la suscripción a los <i>feeds</i> de Atom</li>
        <li>Salmon para la entrega de ciertos elementos desde los <i>feeds</i> de Atom a todos los interesados, como un usuario siendo mencionado, el autor del estatus al que se le está respondiendo, una persona siendo seguida, etc.
</li>
      </ol>
      <LinkableH2 id='what-is-mastodon-social'>¿Qué es mastodon.social?</LinkableH2>
      <p>Es la instancia (o nodo) “emblemática” de Mastodon, también conocida como el servidor que administro yo mismo (<a href='https://mastodon.social/@Gargron'>@Gargron</a>) con las modificaciones al código más recientes. No se supone que tenga que ser la única instancia al final de cuentas.</p>
      <LinkableH2 id='what-else-is-part-of-the-federated-network'>¿Qué otras plataformas son parte de la red federada?</LinkableH2>
      <p>Llamemos a la red federada “fediverso”.  El fediverso ha existido por más tiempo que Mastodon, poblado por servidores de GNU social, Friendica, Hubzilla, Diaspora, etc. No todos estos servidores son completamente compatibles entre ellos. Mastodon hace lo posible por adaptarse a los estándares actuales, por lo mismo, tener compatibilidad con GNU social es de mayor prioridad que tenerla con otras plataformas.</p>
      <LinkableH2 id='i-tried-logging-into-a-gnu-social-client-app-with-mastodon-and-it-didnt-work-why'>Intenté iniciar sesión en Mastodon con una app cliente para GNU social, pero no funcionó, ¿por qué?</LinkableH2>
      <p>Si bien Mastodon es compatible con GNU social en términos de comunicación de servidor a servidor, no sucede lo mismo con la comunicación de cliente a servidor API (o el cómo accedes a Mastodon). Por lo tanto, las apps que fueron hechas específicamente para GNU social no van a funcionar con Mastodon. La razón de esto es por una parte técnica y por la otra ideológica.</p>
      <p>Como Mastodon ha sido creado en blanco, es mucho más simple hacer que la API refleje las estructuras internas de la manera más fiel posible, en lugar de crear una capa que las emule. Por otra parte, la API cliente de GNU social es de hecho una implementación a medias de la API de legado (<i>legacy</i>) de Twitter –esta es la razón por la que funciona con algunos clientes viejos para Twitter–. Sin embargo, muchas de estas apps dejaron de ser mantenidas, la API de GNU social no se mantuvo a la par de la API real de Twitter y nunca implementó todas sus características; al mismo tiempo, la API de Twitter nunca fue pensada para un servicio federado y por lo tanto obscurece una parte de su funcionalidad.</p>
      <LinkableH2 id='how-is-mastodon-funded'>¿Cómo se financia Mastodon?</LinkableH2>
      <p>El desarrollo de Mastodon y el alojamiento web de mastodon.social es financiado por medio de mi <a href='https://www.patreon.com/user?u=619786'>Patreon (y a través de donaciones en BTC/PayPal)</a>. ). Más allá de lo anterior, no estoy interesado en financiamiento de capital de riesgo (<i>VC funding</i>), monetización, dinero a través de anunciantes, ni nada parecido.  En todo caso puedo ofrecer servicios de instalación/mantenimiento sobre demanda.</p>
      <p>El software es libre y gratuito, y las comunidades deberían alojar sus propios servidores si pueden hacerlo, de esa manera los costos quedan más o menos distribuidos. Obviamente sería difícil para mí pagar las cuentas si literalmente todo el mundo decide usar sólo la instancia mastodon.social.</p>
      <LinkableH2 id='this-looks-a-lot-like-twitter-whats-the-difference'>Mastodon se parece mucho a Twitter, ¿cuál es la diferencia?</LinkableH2>
      <p>Mastodon es una red social descentralizada; cualquiera puede iniciar y mantener su propio servidor de Mastodon, bajo las reglas para su comunidad que elija. Twitter es manejado por una autoridad centralizada y establece reglas que se aplican a todos.</p>
      <LinkableH2 id='what-is-a-federation'>¿Qué es una “federación”?</LinkableH2>
      <p>Es un grupo de servidores de Mastodon que comparten toots entre ellos.</p>
      <LinkableH2 id='what-is-an-instance'>¿Qué es una “instancia” o “nodo”?</LinkableH2>
      <p>Es un servidor en el que puedes tener una cuenta. Cada instancia tiene sus propias políticas y reglas, ¡porque pueden ser administradas por cualquiera!</p>
      <LinkableH2 id='how-should-i-choose-which-instance-to-use'>¿Cómo elijo qué instancia o nodo usar?</LinkableH2>
      <p><a href='https://instances.mastodon.xyz/list'>Existen muchas instancias</a> para  casi cualquier interés. Está bien si quieres probar un par de nodos públicos mientras encuentras algún otro que te agrade. Comentar tus intereses en una instancia pública, como <a href='https://mastodon.social'>mastodon.social</a> puede ayudar a que te inviten a otras instancias más específicas.</p>
      <p>Para ver un <i>preview</i> de lo que sucede en un nodo puedes usar <a href='http://www.unmung.com/mastoview?url=mastodon.social&view=local'>esta herramienta</a> creada por <a href='https://mastodon.social/@kevinmarks'>Kevin Marks</a>.</p>
      <LinkableH2 id='how-many-people-signed-up-for-mastodon-can-i-see-a-chart-of-user-counts-over-time'>¿Cuánta gente está registrada en Mastodon? ¿Puedo ver una gráfica con el número de usuarios a través del tiempo?</LinkableH2>
      <p>Claro, sólo sigue a <a href='https://social.lou.lt/@mastodonusercount'>@mastodonusercount@social.lou.lt</a>.</p>
      <LinkableH2 id='how-do-i-get-this-on-android'>¿Cómo puedo acceder a Mastodon en Android?</LinkableH2>
      <p>Puedes probar <a href='https://play.google.com/store/apps/details?id=com.keylesspalace.tusky'>Tusky</a>.</p>
      <LinkableH2 id='on-android-i-really-want-multiple-account-support'>Me gustaría tener soporte para múltiples cuentas en Android.</LinkableH2>
      <p>Puedes probar <a href='https://play.google.com/store/apps/details?id=ch.kevinegli.tootyfruity221258'>TootyFruity</a>.</p>
      <LinkableH2 id='how-do-i-get-this-on-iphone'>¿Cómo puedo acceder a Mastodon desde un iPhone?</LinkableH2>
      <p>Puedes probar <a href='https://itunes.apple.com/us/app/amaroq-for-mastodon/id1214116200'>Amaroq</a>. También puedes elegir hacerlo en Safari.</p>
      <LinkableH2 id='are-there-other-mobile-desktop-cli-apps'>¿Existen otras apps para móvil/escritorio/cli?</LinkableH2>
      <p><Link to='/documentation/apps'>Sí.</Link></p>
      <LinkableH2 id='can-tusky-do-how-about-feature-and-whats-with-tuskys'>¿Tusky puede hacer ‘<span aria-label='foo' role='img'>💇</span>’? ¿Qué tal la característica “<span aria-label='bar' role='img'>🔥</span>”? ¿Y qué pasa con “<span aria-label='baz' role='img'>⛱</span>” en Tusky?</LinkableH2>
      <p>Puedes seguir o contactar a la cuenta de Tusky en <a href='https://mastodon.social/@Tusky'>@Tusky@mastodon.social</a> o a los desarrolladores en <a href='https://mastodon.social/@Vavassor'>@Vavassor@mastodon.social</a> y <a href='https://mastodon.social/@daycode'>@daycode@mastodon.social</a>.</p>
      <LinkableH2 id='how-do-i-search'>¿Cómo hago búsquedas?</LinkableH2>
      <div className='article--text__flex'>
        <p>Puedes buscar a usuarios o <i>hashtags</i>, pero no hacer búsquedas de texto general. Usa el campo que está arriba del área donde escribes los toots.</p>
        <img src={search} alt='Search Box' height='200'/>
      </div>
      <LinkableH2 id='how-do-i-dm-direct-message'>¿Cómo mando un DM (Mensaje Directo)?</LinkableH2>
      <div className='article--text__flex'>
        <p>Haz click en el <strong>icono de globo</strong> que aparece debajo de tu toot para cambiar las opciones de privacidad, las cuales incluyen mensajes directos.</p>
        <img src={globe} alt="Privacy Globe" height="400"/>
      </div>
      <LinkableH2 id='i-dont-get-the-local-vs-federated-timeline-thing'>No entiendo la diferencia entre historia (*timeline*) local e historia federada.</LinkableH2>
      <p>Los toots “locales” corresponden al servidor en el que te registraste. La “federada” son todos los toots que tu servidor recibe de distintos servidores (es más complicado, pero la versión corta es: “los toots de gente que tú y otros usuarios locales siguen”).</p>
      <LinkableH2 id='are-there-instances-that-my-instance-doesnt-federated-with-how-do-i-know'>¿Hay nodos o instancias con las cuales no federa la instancia en la que estoy? ¿Cómo puedo saberlo?</LinkableH2>
      <p>Algunos nodos son privados y por lo tanto no estarán federados con el tuyo. U otros podrían haber sido bloqueados por el tuyo. Puedes preguntar a tu admin para saber más sobre con cuáles nodos están federando (ve a: “<a href='#who-is-my-admin-and-how-do-i-contact-follow-them'>¿Quién es mi admin? ¿Cómo me pongo en contacto o sigo a esa persona?</a>”)</p>
      <LinkableH2 id='can-i-have-more-than-one-account-can-i-use-the-same-email-on-different-instances'>¿Puedo tener más de una cuenta? ¿Puedo usar la misma dirección de correo electrónico en diferentes instancias o nodos?</LinkableH2>
      <p>¡Sí y sí! Si encuentras alguna otra instancia a la que te gustaría unirte, ¡regístrate! Toma nota de que no todas las instancias están abiertas para que se inscriban miembros nuevos y de que es posible que alguien ya haya tomado tu nombre de usuario preferido ahí.</p>
      <LinkableH2 id='can-i-import-the-people-i-follow-to-another-instance'>¿Puedo importar las cuentas que sigo si me mudo de instancia o nodo?</LinkableH2>
      <p>Sí. Esto puede tomar tiempo dependiendo del nodo al que te estés mudando. Habla con quien administre tu nuevo nodo si tienes dificultades. Si tu nuevo nodo no está federado con los nodos a los que pertenecen estas cuentas, posiblemente las pierdas.</p>
      <LinkableH2 id='how-do-i-prevent-people-from-impersonating-me'>¿Cómo evito que alguien se haga pasar por mí en Mastodon?</LinkableH2>
      <p>Puesto que cualquiera puede crear cualquier nombre de usuario en cualquier nodo o instancia, siempre que no haya sido registrado antes, es imposible prevenir que otras personas usen el mismo nombre de usuario en diferentes instancias. Alguna gente se ha tomado el trabajo de instalar y mantener sus propias instancias personales de un solo usuario como forma de verificación, o usa <a href='https://keybase.io/'>Keybase</a>.</p>
      <LinkableH2 id='how-do-i-enable-two-factor-authentication'>¿Cómo activo la Autenticación en Dos Pasos (<strong>“Autenticación de dos factores”</strong> en la página)?</LinkableH2>
      <p>Si el nodo en el que estás tiene soporte para hacerlo, la opción estará en <strong>Preferencias</strong> (<i>Preferences</i>) > <strong>Autenticación de Dos Factores</strong> (<i>Two-factor Authentication</i>). La <a href='https://github.com/tootsuite/documentation/blob/master/Using-Mastodon/2FA.md'>Autenticación de Dos Factores de Mastodon</a> (liga en inglés) usa tanto código QR como llaves en texto no enriquecido.</p>
      <LinkableH2 id='why-cant-i-see-someones-toots'>¿Por qué no puedo ver los toots de alguien?</LinkableH2>
      <p>Esto puede ocurrir por varias razones. Por una parte, puede que los toots de una persona sean privados; tienes que seguir a una cuenta privada para poder ver el contenido no-público. Por otra parte, si alguien te ha bloqueado, no podrás ver aquellos toots no-públicos de su cuenta.</p>
      <LinkableH2 id='whats-trending'>¿Cuáles son las tendencias en Mastodon?</LinkableH2>
      <p>Para conocer las tendencias sigue al estimadísimo bot <a href='https://mastodon.social/@TrendingBot'>@TrendingBot@mastodon.social</a>.</p>
      <LinkableH2 id='whats-cw'>¿Qué es “CW”?</LinkableH2>
      <p>“CW” son las siglas de “Content Warning” (advertencia sobre contenido). Puedes usar esta opción para esconder el contenido de un toot, como un *spoiler*.</p>
      <LinkableH2 id='how-does-the-mark-image-as-sensitive-feature-work-nsfw'>¿Cómo funciona la característica de “Marcar contenido como sensible” (“NSFW”)?</LinkableH2>
      <p>Cuando añades una imagen a un toot usando el icono de cámara, aparecerá un icono adicional (típicamente con la legenda “NSFW”). Al hacer click en este icono la imagen acompañando el toot será ocultada por una advertencia de <strong>Contenido sensible</strong>, la cual previene que otros usuarios vean la imagen publicada a menos de que hagan click en ella.</p>
      <p>"NSFW" son las siglas de <strong>Not Safe For Work</strong> (literalmente "No apropiado para el trabajo"). Se utiliza en diferentes lugares de Internet para advertir que el contenido no es apropiado para visualizar en el trabajo o en lugares públicos por ser pornográfico, sangriento, violento u ofensivo.</p>
      <LinkableH2 id='whats-with-the-pineapples'>¿Por qué tanta piña/ananá?</LinkableH2>
      <p>Son deliciosas y hacen sonreír a la gente. Sólo sigue la corriente.</p>
      <LinkableH2 id='i-see-awoo-a-lot-what-does-that-mean'>Veo mucho “Awoo” por todos lados, ¿qué significa?</LinkableH2>
      <p>Intenta decirlo en voz alta: “aúu”. ¡Es divertido!</p>
      <LinkableH2 id='how-do-i-delete-my-account'>¿Cómo puedo borrar mi cuenta?</LinkableH2>
      <p>Por el momento no puedes hacerlo directamente, tendrás que mandarle un toot a quien administre tu instancia para que te ayude.</p>
      <LinkableH2 id='who-is-my-admin-and-how-do-i-contact-follow-them'>¿Quién es mi admin? ¿Cómo me pongo en contacto o sigo a esa persona?</LinkableH2>
      <p>Haz click en <strong>Primeros pasos</strong> (<i>Getting Started</i>), luego en <strong>Información adicional</strong> (<i>Extended Information</i>); se desplegará una página con información sobre el nodo o la instancia en la que estás. ¡Esperemos que tu admin haya puesto su información de contacto ahí!</p>
      <img src={toolbarGettingStarted} alt='Getting Started Button' height='200'/>
      <img src={gettingStartedExtendedInformation} alt='Extended Information' height='200'/>
      <img src={admin} alt='Admin Info' height='200'/>
      <LinkableH2 id='wow-i-keep-seeing-offensive-stuff-from-a-particular-instance-is-there-a-way-to-block-all-of-it'>Wow, sigo viendo cosas ofensivas por parte de usuarios de una instancia o nodo en particular, ¿hay alguna manera de bloquear a *todo* el nodo?</LinkableH2>
      <p>No sin que hayan muchos clicks involucrados, lo lamento. ¡Pero tu admin sí puede hacerlo! Por favor ponte en contacto con tu admin.</p>
      <LinkableH2 id='is-mastodon-moderated'>Alguien modera a Mastodon?</LinkableH2>
      <p>Cada nodo o instancia maneja la moderación de manera distinta y cada uno tiene a sus propios moderadores. Está bien si preguntas qué reglas siguen en el nodo en el que estás. Usualmente las reglas están publicadas en la página del nodo en la liga <strong>Acerca de esta instancia</strong> (“About”), <a href='https://mastodon.social/about/more'>como en la página de “more” en mastodon.social</a>.</p>
      <LinkableH2 id='how-do-i-report-offensive-content'>¿Cómo reporto contenido ofensivo?</LinkableH2>
      <p>Debajo de cada toot verás <strong>tres puntos</strong>, junto a la opción de darle favorito. Hacer click en esos tres puntos te permitirá ver un menú que te ofrece las opciones de expandir un toot o reportar el contenido de éste. Al momento de reportar el contenido, por favor selecciona todos los toots que necesiten atención por parte de los moderadores.</p>
      <LinkableH2 id='how-do-i-handle-harrasment'>¿Qué hago si me acosan en Mastodon?</LinkableH2>
      <p>Si quien administra tu nodo o instancia se tomo el acoso de manera seria, puedes reportarlo a través del sistema de reportes. Puedes acceder a éste por medio de los <strong>tres puntos</strong> debajo de cada toot o contactando directamente a tu admin..</p>
      <LinkableH2 id='will-my-private-messages-reach-people-on-other-instances'>¿Mis mensajes privados pueden llegar a personas de otras instancias?</LinkableH2>
      <p>Sí, deberían de hacerlo. Sin embargo, los mensajes privados <i>no son seguros</i>; te recomendamos evitar enviar información confidencial por medio de ellos.</p>
      <LinkableH2 id='what-does-adjust-status-privacy-mean-and-how-does-it-work'>¿Qué significa el icono de <strong>Ajustar privacidad</strong> (<i>Adjust Status Privacy</i>) y cómo funciona?</LinkableH2>
      <p>El <strong>icono de globo terráqueo</strong> debajo del área en la que escribes un toot te permite ajustar la privacidad del toot al modificar quién puede ver tu publicación. Esto es lo que sucede:</p>
      <table>
        <thead>
          <tr>
            <th>Configuración</th>
            <th>Destinatarios</th>
            <th>Quién lo puede ver</th>
            <th>Notas</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Público (<i>Public</i>)</td>
            <td>Global, historias (<i>TLs</i>) públicas</td>
            <td>Todos</td>
            <td>Contenido federado. Gente de otros nodos muy probablemente lo verán.</td>
          </tr>
          <tr>
            <td>Sin federar (<i>Unlisted</i>)</td>
            <td>Sólo tus seguidores</td>
            <td>Todos</td>
            <td>Puede ser retooteado y así ser visto en otros nodos.</td>
          </tr>
          <tr>
            <td>Privado (<i>Private</i>)</td>
            <td>Sólo tus seguidores</td>
            <td>Sólo tus seguidores</td>
            <td>No puede ser retooteado.</td>
          </tr>
          <tr>
            <td>Directo (<i>Direct</i>)</td>
            <td>Sólo la gente mencionada</td>
            <td>Sólo la gente mencionada</td>
            <td>Similar al correo electrónico.</td>
          </tr>
        </tbody>
      </table>
      <LinkableH2 id='can-i-use-hashtags-should-i'>¿Puedo usar hashtags? ¿Debería de hacerlo?</LinkableH2>
      <p>¡Sí! Los hashtags son monitoreados y muchas veces son divertidos, pero algunos se usan para ayudar a otras personas a evitar contenido sensible. Esto es particularmente apreciado en toots públicos sobre política (#POLITICS), salud (#HEALTH), depresión (#DEPRESSION), temas lascivos (#LEWD) o no apropiados en general (#NSFW). Para este tipo de temas sensibles es que se diseñó el sistema de <strong>Content Warning</strong>.</p>
      <LinkableH2 id='how-do-i-get-verified-with-a'>¿Cómo hago para que mi cuenta sea verificada y tenga <span aria-label='verified account mark' role='img'>“✅”</span>?</LinkableH2>
      <p><span aria-label='verified account mark' role='img'>“✅”</span> es un emoji, <i>sólo</i> se usa por los lulz. No hay cuentas verificadas en Mastodon. Puedes copiar y pegar <span aria-label='verified account mark' role='img'>“✅”</span> en tu biografía si quieres.</p>
      <LinkableH2 id='can-i-edit-a-toot'>¿Los toots se pueden editar?</LinkableH2>
      <p>No, lo siento. Pero puedes borrarlos y rescribirlos…</p>
      <LinkableH2 id='if-i-delete-a-post-does-it-get-deleted-everywhere'>Si borro un toot, ¿es borrado de todos lados?</LinkableH2>
      <p>Borrar un toot lo borrará de la historia (<i>timeline</i>) local. Sin embargo, si ya ha sido retooteado (<i>boosted</i>) todavía podrá ser visto y tal vez pueda ser federado.</p>
      <LinkableH2 id='how-do-i-view-my-favourite-toots'>¿Cómo veo mis toots favoritos?</LinkableH2>
      <div className='article--text__flex'>
        <p>Haz click en <strong>Primeros pasos</strong> (<i>Getting Started</i>), luego en <strong>Favoritos</strong> (<i>Favourites</i>).</p>
        <img src={toolbarGettingStarted} alt='Getting Started Button' height='200'/>
        <img src={gettingStartedFavourites} alt='Favourites' height='200'/>
      </div>
      <LinkableH2 id='can-i-quote-a-toot'>¿Se puede citar un toot?</LinkableH2>
      <p>No por el momento. Debes copiar y pegar manualmente el texto del toot para citarlo.</p>
      <LinkableH2 id='if-my-instance-shuts-down-forever-do-i-lose-my-data'>Si cierran para siempre la instancia o el nodo en el que estoy, ¿perdería todos los datos de mi cuenta?</LinkableH2>
      <p>Sí, así es.</p>
      <LinkableH2 id='can-i-save-my-data'>¿Puedo salvar los datos de mi cuenta?</LinkableH2>
      <div className='article--text__flex'>
        <p>Sí, ¡una parte de ellos! Sólo ve a <strong>Preferencias</strong> (<i>Preferences</i>) y luego a <strong>Exportar información</strong> (<i>Data export</i>).</p>
        <img src={preferencesDataExport} alt='Data Export' height='400'/>
      </div>
      <LinkableH2 id='i-cant-see-toots-of-a-remote-user-under-their-bio'>No puedo ver los toots de un usuario remoto (de otra instancia) al ir a su bio!</LinkableH2>
      <div className='article--text__flex'>
        <p>Ve a la <strong>vista expandida</strong> de su perfil, luego haz click en su imagen de perfil. Al hacerlo irás directamente al servidor en el que se aloja la cuenta, el cual desplegará todos sus toots públicos.</p>
        <img src={profileAvatarClick} alt='Click their avatar' height='200'/>
        <img src={profileWebpageURL} alt='Native webpage view' height='200'/>
      </div>
      <LinkableH2 id='how-do-i-see-threads'>¿Cómo veo un hilo de toots?</LinkableH2>
      <p>Haz click en el texto del toot para ver la <strong>vista expandida</strong> de éste. Te mostrará el hilo al que el toot está conectado.</p>
      <LinkableH2 id='how-do-i-link-to-toots'>¿Cómo obtengo la liga de un toot?</LinkableH2>
      <p>Hay dos ligas permanentes (<i>permalinks</i>) para los toots. Puedes hacer <strong>click derecho</strong> en la marca de tiempo localizada en el encabezado del toot. O en los toots expandidos, haz <strong>click derecho</strong> en la fecha que aparece abajo del toot.</p>
      <div className='article--text__center'>
        <img src={inlineTootTimestampLink} alt='Inline View Permalink' height='200'/>
        <img src={expandedViewPermaLink} alt='Expanded View Permalink' height='200'/>
      </div>
      <LinkableH2 id='how-do-i-link-to-my-profile'>¿Cómo obtengo la liga de mi perfil?</LinkableH2>
      <div className='article--text__flex'>
        <p>Haz <strong>click derecho</strong> en tu imagen de perfil y luego selecciona <strong>Copiar dirección de enlace</strong>.</p>
        <img src={linkToProfile} alt='URL for Profile' height='200'/>
      </div>
      <LinkableH2 id='does-clicking-a-hashtag-show-local-results-or-federated'>Al hacer click en un #hashtag, ¿los resultados que se muestran son de toots locales o federados?</LinkableH2>
      <p>Federados.</p>
      <LinkableH2 id='when-i-mute-a-boost-who-gets-muted-the-booster-or-the-original-author'>Cuando silencio un retoot (<i>boost</i>), ¿a quién estoy silenciando? ¿A quien hizo el retoot o al autor original?</LinkableH2>
      <p>Al autor original del toot.</p>
      <LinkableH2 id='can-i-preview-the-people-on-an-instance-and-what-theyre-saying'>¿Puedo ver un <i>preview</i> de los miembros de una instancia cualquiera y de lo que están tooteando?</LinkableH2>
      <p>Sí, prueba <a href='http://www.unmung.com/mastoview?url=mastodon.social&view=local'>esta excelente herramienta</a> para ver <i>previews</i> de instancias.</p>
      <LinkableH2 id='how-do-i-hide-the-toots-of-launguages-i-dont-understand'>¿Cómo filtro los toots en idiomas que no entiendo?</LinkableH2>
      <p>El equipo de desarrolladores están trabajando en un filtro para esto junto con otras opciones de filtrado. ¡Mantente en tu asiento!</p>
      <LinkableH2 id='is-automatic-translation-supported'>¿Hay soporte para hacer traducciones automáticas de los toots?</LinkableH2>
      <p>Todavía no, pero el <a href='https://github.com/tomouchuu/mastodon-translate'>script para TamperMonkey en Firefox</a> podría funcionarte.</p>
      <LinkableH2 id='do-toots-automatically-broadcast-federated-or-stay-local'>¿Los toots automáticamente son publicados en la federación o se quedan en la instancia local?</LinkableH2>
      <p>Por default los toots están federados (son públicos) y se mostrarán tanto en la historia (<i>timeline</i>) local como en la federada. Puedes cambiar esté comportamiento default al hacer click en <strong>Preferencias</strong> (<i>Settings</i>) > <strong>Preferencias</strong> (<i>Preferences</i>) > <strong>Privacidad de publicaciones</strong> (<i>Post Privacy</i>).</p>
      <div className='article--text__center'>
        <img src={toolbarGettingStarted} alt='Getting Started Button' height='200'/>
        <img src={gettingStartedPreferences} alt='Preferences' height='200'/>
        <img src={preferencesPostPrivacy} alt='Post Privacy' height='400'/>
      </div>
      <LinkableH2 id='how-do-i-start-my-own-instance'>¿Cómo hago mi propia instancia o nodo?</LinkableH2>
      <p>Lee la <a href='https://github.com/tootsuite/documentation/blob/master/README.md'>Guía de Usuario</a>, bajo el encabezado “Running Mastodon” (guía en inglés).</p>
      <LinkableH2 id='i-found-a-bug-or-have-a-suggestion-for-mastodon'>Encontré un error/tengo una sugerencia para Mastodon.</LinkableH2>
      <p>Puedes reportar errores o enviar sugerencias al <a href='https://github.com/tootsuite/mastodon/issues'>Rastreador de Problemas de Mastodon</a> (liga en inglés).</p>
      <LinkableH2 id='are-there-instances-es'>¿Existen nodos o instancias sólo para hispanoparlantes o específicas para un país de habla española?</LinkableH2>
      <p>Por supuesto, en este momento ya existen varias instancias dirigidas a hablantes de español y a comunidades de países específicos. Esta es la lista hasta hoy:</p>
      <dl>
        <dt>Para hispanohablantes en general</dt>
        <dd><a href='https://mastodones.club/'>https://mastodones.club/</a></dd>
        <dt>México</dt>
        <dd><a href='https://mstdn.mx/'>https://mstdn.mx/</a></dd>
        <dt>Argentina</dt>
        <dd><a href='https://mastodonar.club/'>https://mastodonar.club/</a></dd>
        <dt>Uruguay</dt>
        <dd><a href='https://mastodon.undernet.uy/'>https://mastodon.undernet.uy/</a></dd>
        <dt>Perú</dt>
        <dd><a href='https://mastodon.pe/'>https://mastodon.pe/</a></dd>
      </dl>
      <LinkableH2 id='hey-i-love-mastodon-faqs-can-i-have-more'>Ey, ¡me encantan las Preguntas Frecuentes sobre Mastodon! ¿Dónde hay más?</LinkableH2>
      <p>Aquí hay algunas más de individuos muy trabajadores que también quieren ayudar (ligas en inglés):</p>
      <ul>
        <li><a href='https://hastebin.com/raw/xuqogukimu'>https://hastebin.com/raw/xuqogukimu</a></li>
        <li><a href='https://github.com/ThomasLeister/masto-faq'>https://github.com/ThomasLeister/masto-faq</a></li>
        <li><a href='http://mastoguide.info/Pages/FAQindex.html'>http://mastoguide.info/Pages/FAQindex.html</a></li>
        <li><a href='https://medium.com/tebelorg/my-first-10-days-on-mastodon-fediverse-f6f1d73db8d7'>https://medium.com/tebelorg/my-first-10-days-on-mastodon-fediverse-f6f1d73db8d7</a></li>
        <li><a href='https://github.com/tootsuite/documentation/blob/master/Using-Mastodon/FAQ.md'>https://github.com/tootsuite/documentation/blob/master/Using-Mastodon/FAQ.md</a></li>
      </ul>
      <footer>
        <p>Este documento de Preguntas Frecuentes fue formado con las contribuciones de <a href='https://mastodon.social/@Gargron'>@Gargron</a>, <a href='https://mastodon.social/@Raccoon'>@raccoon</a>, <a href='https://octodon.social/@upside'>@upside</a>, <a href='https://mastodon.social/@zacanger'>@zacanger</a>, <a href='https://octodon.social/@NthTensor'>@NthTensor</a>, <a href='https://mastodon.social/@ametlles'>@ametlles</a>, ¡y mucha otra gente del fediverso!</p>
        <p>Traducción al español por <a href='https://mastodon.social/@ametlles'>@ametlles</a>. ¡Gracias a <a href='https://mastodones.club/@ara_batur'>@ara_batur</a> por los cambios sugeridos!</p>
      </footer>
    </div>
  </div>
);

export default Faq;
