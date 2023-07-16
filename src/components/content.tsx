import GoToFinder from "@/components/goToFinder";

interface ContentProps {
  seenIntro: boolean;
}
export default function Content(props: ContentProps) {
  return (
    <div
      className={`fixed z-20 bg-green-900 text-white py-5 px-2.5 h-full overflow-auto content-container ${
        props.seenIntro ? "hidden" : ""
      }`}
    >
      <h1 className="font-bold text-2xl mt-12">
        Hello..Entdecke die besten Cannabis Social Clubs in deiner Nähe!
      </h1>
      <p>
        Suchst du nach einem sicheren und legalen Ort, um deinen Cannabisbedarf
        zu decken? Unser CSC Finder ist die ultimative Lösung, um die besten
        Cannabis Social Clubs in Deutschland zu finden!
      </p>
      <p>
        Unser CSC Finder bietet dir eine benutzerfreundliche Plattform, um Clubs
        in deiner Umgebung zu entdecken. Egal, ob du in Berlin, Hamburg,
        München, Stuttgart oder einer anderen Stadt bist, unser umfassendes
        Verzeichnis von CSCs ermöglicht es dir, den perfekten Club für deine
        Bedürfnisse zu finden.
      </p>
      <p>
        Mit unserem CSC Finder kannst du gezielt nach Clubs suchen, die deinen
        Präferenzen entsprechen. Unser Finder bietet umfangreiche Informationen
        zu jedem Club, darunter Standort, Öffnungszeiten und später Bewertungen.
        So kannst du fundierte Entscheidungen treffen und den perfekten CSC
        finden, der deinen Vorlieben und Bedürfnissen entspricht. Später ist
        geplant hier öffentliche Veranstaltungen wie Tag der offenen Tür oder
        Praxis Workshop: Cannabis Anbauim Gewächshaus zu teilen.
      </p>
      <h2 className="font-bold text-xl my-5">
        Was ist ein Cannabis Social Club?
      </h2>
      <p>
        Ein Cannabis Social Club kurz CSC ist meist ein eingetragner Verein
        (kurz e.V.). Ähnliche Clubs gibt es auch in Spanien oder Belgien.
        <br />
        Konsumenten von Cannabis, die nicht selbst anbauen wollen oder können,
        beauftragen den Club das Cannabis anzubauen. Auch wenn der Eigenanbau
        von Cannabis nicht kompliziert ist, gibt es einige Hindernisse, wie kein
        eigener Garten, keine Möglichkeit die Pflanzen zu umzäunen oder zu
        sichern oder schlicht Zeitgründe, die eine Mitgliedschaft begründen.
        Auch die Vielfalt der Produkte, die Qualitätskontrolle und die
        Bequemlichkeit spielen bei (Förder-)Mitgliedern eine Rolle!
      </p>
      <h2 className="font-bold text-xl my-5">
        Welche Vorteile bietet ein Cannabis Social Club?
      </h2>
      <ol>
        <li>
          Ein Cannabis Social Club bietet für seine volljährigen Mitglieder
          einen sicheren Zugang und qualitativ hochwertiges und vergleichsweise
          kostengünstig Cannabis für den Eigenbedarf (maximal 50 Gramm pro Monat
          und 25 Gramm am Tag).
        </li>
        <li>
          Die Clubmitglieder haben die Möglichkeit, sich untereinander
          auszutauschen und gemeinschaftlich zu lernen.
        </li>
        <li>
          Es gibt eine regulierte und kontrollierte Abgabe von Cannabis, was die
          illegale Beschaffung und den Schwarzmarkt reduzieren kann.
        </li>
        <li>
          Durch die Zusammenarbeit mit anderen Cannabis Social Clubs können
          Erfahrungen und Best Practices für den Anbau ausgetauscht werden.
        </li>
        <li>
          Im Rahmen eines Cannabis Social Clubs können zusätzlich auch Bildungs-
          und Präventionsmaßnahmen angeboten werden, um den Jugendschutz zu
          verbessern.
        </li>
      </ol>
      <h2>
        Kann ich meinen Cannabis Social Club bei euch eintragen um Mitglieder zu
        finden?
      </h2>
      <p>
        Du suchst neue Mitglieder und denkst, dass dieser Finder genau der
        richtige ist um deinen Club zu bewerben? Die Eintragung ist kostenlos
        und du musst auch nicht Mitglied von einem Dachverband sein. Wir möchten
        dass die Clubs florieren und die Konsumenten einen einen legalen und
        sicheren Konsum erleben. Leider ist unser Backend noch im Aufbau, sodass
        du uns zur Zeit noch eine email schreiben musst. Wir geben unser bestes
        dich schnell hinzuzufügen. Leider können wir nicht Vollzeit an dem
        Projekt arbeiten, deswegen kann ich euch keine Garantie geben, wann ihr
        euch einloggen könnt oder wann wir euch eintragen aber wir geben unser
        bestes!
      </p>
      <h2 className="font-bold text-xl my-5">
        Könnt ihr uns bei der Gründung von einem Social Club helfen?
      </h2>
      <p>
        Wir sind leider kein Verband und haben auch im Moment keine Ressourcen
        euch bei der Gründung eines Clubs zu unterstützen. Es gibt viele Seiten
        im Internet und auch einige Verbände, die das wahrscheinlich besser
        können als wir. Wir liegen aber nicht einfach auf der faulen Haut
        sondern sitzen schon fleißig an der nächsten IT-Lösung, die wir euch
        kostenlos und werbefrei zur verfügung stellen möchten. Seid gespannt! Zu
        viel wollen wir noch nicht verraten aber wir hoffen dass wir alle
        Clubbetreiber und Konsumenten von Cannabis damit helfen können!
        <br />
        Auch planen wir hier neue Features, die euch helfen einen ideale
        Cannabis Clubs zu finden. Ideen haben wir viele aber wir sind eben so
        offen für neue Vorschläge. Also wenn du welche hast, dann schreib uns
        gerne eine Email :)
      </p>
      <h2 className="font-bold text-xl my-5">Sonst noch was?</h2>
      <p>
        Wir verstehen die Bedeutung von Datenschutz und Sicherheit, daher sorgen
        wir dafür, dass deine persönlichen Informationen geschützt sind. Unser
        Finder gewährleistet eine sichere und vertrauliche Nutzung, damit du
        dich auf das Wesentliche konzentrieren kannst – das Entdecken
        großartiger Clubs und das Genießen von hochwertigem Cannabis. Solange
        die Legalisierung noch nicht durch ist und der rechtliche Rahmen noch
        nicht zu 100% definiert ist, ist der Anbau von Cannabis für die Clubs
        immer noch nicht legal. Wir halten euch aber auf den laufenden und
        informieren euch, wenn sich die Gesetzeslage ändert und die Eckpunkte
        feststehen!
      </p>
      <GoToFinder />
    </div>
  );
}
