# Automatisches Testen von culture.web

Jeden Monat wird eine neue Version von culture.web ausgeliefert. Damit der Betrieb unserer Sammlungsdatenbank KIMCH reibungslos und zufriedenstellend weiterlaufen kann, ist ein ausführliches Testen der neuen Version notwendig. Dies ist sehr aufwendig. 
Es gibt aktuell ca. 80 Use-Cases plus die Tickets aus den letzten 5 Versionen, welche überprüft werden müssen. Deshalb wäre ein automatisiertes Testen enorm sinnvoll.

Dazu haben wir [Cypress](https://www.cypress.io/) genutzt und End-To-End-Tests (E2E) erstellt.

## Setup von Cypress

Cypress ist sehr ausführlich und verständlich dokumentiert. [Hier](https://docs.cypress.io/guides/getting-started/installing-cypress) wird die Installation Schritt für Schritt erklärt.


## Nutzung von Cypress
[Hier](https://docs.cypress.io/guides/getting-started/opening-the-app#The-Launchpad) wird die Nutzung von Cypress beschrieben. Cypress can in den Browsern Google Chrome, Firefox und Electron verwendet werden.

## E2E Tests erstellen
Mit Cypress können [E2E](https://docs.cypress.io/guides/end-to-end-testing/writing-your-first-end-to-end-test) Tests erstellt werden. Diese werden in einem Script dokumentiert und nacheinander ausgeführt. 

## Best Practices
Cypress [beschreibt](https://docs.cypress.io/guides/references/best-practices#Selecting-Elements) die für eine korrektes Testing notwendigen Best Practices. Es wird empfohlen, jedem DOM-Objekt eine eindeutige Cypress-ID zu geben und es darüber im Testfall anzusprechen:

Hier ein Code-Beispiel um einen Button und sein verhalten zu testen.
#### HTML-Code:
```
<button
  id="main"
  class="btn btn-large"
  name="submission"
  role="button"
  data-cy="submit"
>
  Submit
</button>
```
#### Cypress-Code:

```
cy.get('[data-cy="submit"]').click()
```

## Fazit von KIM.ch
Folgendes konnte mit Cypher getestet werden:
* Login
* Logout
* Warnung, falls Nutzer bereits an einem anderen Ort eingeloggt ist
* Neues Sammlungsobjekt mit Objektbezeichnung erstellen

Culture.Web verleiht den einzelnen DOM-Objekten zwar eine ID, jedoch ist diese die selbe für alle Objekte und wird bei jedem Login neu generiert. Es ist nicht möglich die Eingabefelder auf der Objekterfassungsmaske anzusteuern, da sie zudem die selben CSS-Klassen verwenden.

Lediglich die Objektbezeichnung konnte ausgefüllt werden, da sie das einzige gelbe Feld (Pflichtfeld) auf der Maske ist.

Es war nicht möglich die Personenerfassung zu testen, da es auf der Personenmaske mehrere Pflichtfelder (Anzeigename und Nachname) gibt. Deshalb konnten die für die Erfassung notwendigen Felder nicht angesteuert und ausgefüllt werden. Wie bereits erwähnt, vergibt Culture.Web den einzelnen DOM-Objekten keine eindeutigen IDs und über die CSS-Klassen waren die Felder nicht eindeutig identifizierbar.

Automatisiertes Testing würde die Qualität von Culture.Web enorm steigern und unseren Testing-Aufwand drastisch verkleinern. Bereits geschriebene Tests würden innert kürzester Zeit ausgeführt, keine Use-Cases vergessen und das Erstellen von neuen Testszenarien ist recht einfach.
Deshalb wäre es sehr wünschenswert, dass jedes DOM-Element in Culture.Web eine eigene Testing-ID oder Cypress-ID erhalten würde. Auch so kann geprüft werden ob und welche DOM-Elemente im Testing angesprochen werden.