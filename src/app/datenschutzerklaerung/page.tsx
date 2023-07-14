import Link from "next/link";

export default function Page() {
  return (
    <div className="p-5 text-white bg-green-600 h-min-full h-full">
      <h2 className="mb-5 font-bold text-2xl">Datenschutzerklärung</h2>
      <div>
        <h3 className="mb-5 font-bold text-xl">TL;DR</h3>
        <p className="mb-5">
          Wir setzen weder Tracking-Cookies ein, noch verfolgen wir auf
          irgendeine Weise Daten. Falls jedoch Daten erhoben werden, geschieht
          dies ausschließlich durch unsere Dienstleister wie Server, usw. Bei
          der Auswahl unserer Anbieter haben wir jedoch darauf geachtet, solche
          zu wählen, deren Geschäftsmodell nicht auf den Verkauf von Nutzerdaten
          beruht.
        </p>
      </div>
      <div>
        <h3 className="mb-5 font-bold text-xl">
          Einsatz und Verwendung des Kartenanbieters MapTiler
        </h3>
        <p>
          Diese Webseite verwendet die API (Programmierschnittstelle) von
          MapTiler, um geografische Informationen visuell darzustellen. MapTiler
          Cloud ist ein Angebot der MapTiler AG (Höfnerstrasse 98, Unterägeri,
          Zug 6314, Schweiz).
        </p>
        <p>
          Die IP-Adressen der MapTiler-Cloud-Besucher werden nur für eine
          begrenzte Zeit gespeichert, maximal 20 Minuten, und dann automatisch
          vernichtet. Die Erhebung und kurzzeitige Speicherung sind zur
          Protokollierung von sicherheitsrelevanten Aktivitäten auf der
          MapTiler-Infrastruktur notwendig. Wie Sie die Karte selbst nutzen,
          wird durch MapTiler nicht erfasst.
        </p>
        <p className="mb-5">
          Weitere Informationen zum Datenschutz durch MapTiler finden Sie unter:{" "}
          <Link
            className="underline"
            href="https://www.maptiler.com/privacy-policy/index.html"
            target="_blank"
          >
            www.maptiler.com/privacy-policy/index.html
          </Link>
          .
        </p>
      </div>
      <div className="mb-5">
        <h3 className="mb-5 font-bold text-xl">Bilder</h3>
        <p>
          Manche Bilder werden von anderen Servern geladen. Dies wird gemacht um
          eine Urheberrechtsverletzung zu umgehen. Ein Personenbezug ist uns im
          Regelfall nicht möglich und auch nicht beabsichtigt.
        </p>
      </div>
      <div>
        <h3 className="mb-5 font-bold text-xl">
          Zugriffsdaten (Server-Logfiles)
        </h3>
        <p className="mb-5">
          Beim Aufruf unserer Website erheben wir und speichern automatisch in
          sogenannten Server-Logfiles Zugriffsdaten, die Ihr Browser automatisch
          an uns übermittelt. Dies sind: <br />
          Browsertyp und Browserversion Ihres PC
          <br />
          Referrer URL (Quelle/Verweis, von welchem Sie auf unsere Website
          gelangten)
          <br />
          Datum und Uhrzeit der Serveranfrage
          <br />
          <br />
          Ein Personenbezug ist uns im Regelfall nicht möglich und auch nicht
          beabsichtigt. Die Verarbeitung solcher Daten erfolgt gemäß Art. 6 Abs.
          1 lit. f DSGVO zur Wahrung unseres berechtigten Interesses an der
          Verbesserung der Stabilität und Funktionalität unserer Website.
        </p>
      </div>
      <div>
        <h3 className="mb-5 font-bold text-xl">Kontaktaufnahme</h3>
        <p>
          Wenn Sie mit uns Kontakt aufnehmen, einschließlich per E-Mail, werden
          die übermittelten Daten einschließlich Ihrer Kontaktdaten gespeichert,
          um Ihre Anfrage zu bearbeiten oder für mögliche Folgefragen
          bereitzustehen. Eine Weitergabe dieser Daten erfolgt ohne Ihre
          Einwilligung nicht.
        </p>
        <p>
          Die Verarbeitung Ihrer Daten erfolgt ausschließlich auf Grundlage
          Ihrer Einwilligung gemäß Artikel 6 Absatz 1 lit. a der
          Datenschutz-Grundverordnung (DSGVO). Sie können Ihre bereits erteilte
          Einwilligung jederzeit widerrufen. Ein Widerruf genügt, um formlos per
          E-Mail mitgeteilt zu werden. Die Rechtmäßigkeit der Datenverarbeitung
          bis zum Widerruf bleibt vom Widerruf unberührt.
        </p>
        <p className="mb-5">
          Die übermittelten Daten bleiben bei uns gespeichert, bis Sie uns zur
          Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder
          keine Notwendigkeit mehr besteht, die Daten zu speichern. Bestimmungen
          aus zwingenden gesetzlichen Vorschriften, insbesondere
          Aufbewahrungsfristen, bleiben hiervon unberührt.
        </p>
      </div>
      <div>
        <h3 className="mb-5 font-bold text-xl">
          Gültigkeit und Änderung dieser Datenschutzerklärung
        </h3>
        <p className="mb-5">
          Diese Datenschutzerklärung gilt ab dem 3. Juni 2023. Wir behalten uns
          das Recht vor, diese Datenschutzerklärung jederzeit unter Beachtung
          der geltenden Datenschutzvorschriften zu ändern. Dies kann z.B. zur
          Einhaltung neuer Gesetzesbestimmungen oder zur Berücksichtigung der
          Änderungen unserer Website bzw. neuer Dienstleistungen auf unserer
          Website erforderlich sein. Es gilt die zum Zeitpunkt Ihres Besuchs
          abrufbare Fassung.
        </p>
      </div>
    </div>
  );
}
