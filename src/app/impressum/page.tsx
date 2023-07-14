export default function Page() {
  return (
    <div className="p-5 text-white bg-green-600 h-full">
      <h2 className="mb-5 font-bold text-2xl">Impressum</h2>
      <p className="mb-5">
        Das Hauptziel dieses Projekts besteht ausschließlich darin,
        Informationen bereitzustellen und Besuchern die Möglichkeit zu geben,
        sich umfassend zu informieren. Ich möchte keine persönlichen Daten
        sammeln oder kommerzielle Transaktionen durchführen.
      </p>
      <p className="mb-5">
        Mir ist bewusst, dass viele Websites ein Impressum benötigen, um den
        rechtlichen Anforderungen gerecht zu werden. Allerdings möchte ich
        darauf hinweisen, dass meine Website explizit nicht in den
        Geltungsbereich dieser rechtlichen Anforderungen fällt, da sie nicht
        kommerziell genutzt wird und keine personenbezogenen Daten erhoben
        werden.
      </p>
      <p className="mb-5">
        Sollten dennoch Fragen oder Bedenken bezüglich des Inhalts meiner
        Website bestehen, stehe ich jederzeit zur Verfügung. Bitte zögere nicht,
        mich über{" "}
        <a className="underline" href="mailto:kontakt@cscfinder.de">
          die diese E-Mail Addresse
        </a>{" "}
        zu erreichen.
      </p>
    </div>
  );
}
