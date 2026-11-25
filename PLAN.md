# Antrasi – klickbarer Prototyp (Käufer-Sicht)

Ziel: zeigen, wie ein Second-Hand-Marktplatz ehrlicher mit Preis, Schutz und Streitfällen umgeht.
Stil A „Kassenbon“: warmes Papier #F6F1E7, tiefes Grün #1F4D3A, Tinte #1F2A24, gestrichelte Belegzeilen.

## Technik (meine Wahl)
Vite + Vanilla-JS + Tailwind v4, Hash-Router, Beispieldaten in `src/data.js`, kein Backend, mobile-first, Deutsch.
Keine Marken, Logos, Texte oder Fotos von Vinted. Bilder = CSS-Farbflächen als Platzhalter.

## Screens (Hash-Routen)
1. `#/` Startseite: Erklärsatz zum Schutz, Filterchips, Feed. Karte zeigt „Du zahlst“ groß, darunter Artikel + Versand, Verkäufer-Badge (Bewertung, Antwortzeit).
2. `#/artikel/:id` Detail: Beleg mit Positionen, Schalter „Käuferschutz“ (aus, nicht voreingestellt), Button „Kaufen“, „Nachricht schreiben“.
3. `#/kasse/:id` Checkout: Adresse, Versandart, Zahlart, Beleg mit allen Zeilen, Kauf bestätigen → `#/bestellung/:id`.
4. `#/bestellung/:id` Bestätigung als Beleg, Button „Problem melden“.
5. `#/chat/:id` Chat; sendet man „PayPal Freunde?“ o.ä., erscheint sofort ein Warnhinweis.
6. `#/streitfall/:id` Zeitleiste (gemeldet, geprüft, Entscheidung), feste Antwortfrist, Widerspruch mehrfach möglich, klickbarer Statuswechsel.

## Qualität
Beschriftete Buttons, Kontrast AA, Tastaturbedienung, Fokus sichtbar, `prefers-reduced-motion`, 375 px bis Desktop.

## Schritte
Setup → Daten/Router/Stil → Screens 1–6 → im Browser testen (Konsole, Mobile, Klickpfad) → Politur.
