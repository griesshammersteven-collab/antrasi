import '@fontsource-variable/geist'
import '@fontsource-variable/geist-mono'
import './style.css'
import { items, sellers, protection, eur, getItem } from './data.js'

import iCheck from '@phosphor-icons/core/assets/bold/check-bold.svg?raw'
import iBack from '@phosphor-icons/core/assets/bold/arrow-left-bold.svg?raw'
import iWarn from '@phosphor-icons/core/assets/bold/warning-bold.svg?raw'
import iStar from '@phosphor-icons/core/assets/fill/star-fill.svg?raw'
import iSeal from '@phosphor-icons/core/assets/fill/seal-check-fill.svg?raw'
import iDress from '@phosphor-icons/core/assets/light/dress-light.svg?raw'
import iShirt from '@phosphor-icons/core/assets/light/t-shirt-light.svg?raw'
import iBaby from '@phosphor-icons/core/assets/light/baby-light.svg?raw'
import iShoe from '@phosphor-icons/core/assets/light/sneaker-light.svg?raw'
import iCoat from '@phosphor-icons/core/assets/light/coat-hanger-light.svg?raw'
import iPants from '@phosphor-icons/core/assets/light/pants-light.svg?raw'

const app = document.getElementById('app')
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]))
const ic = (svg, cls = 'w-4 h-4') => svg.replace('<svg', `<svg class="${cls}" aria-hidden="true" focusable="false"`)
// Platzhalter-Piktogramm nach Artikelart
const iconFor = (i) => {
  const t = i.title.toLowerCase()
  if (/mantel|winterjacke|regenjacke/.test(t)) return iCoat
  if (/jeans|hose/.test(t)) return iPants
  if (/strickjacke|pullover/.test(t)) return iShirt
  if (/sneaker|stiefel/.test(t)) return iShoe
  if (i.cat === 'Kinder') return iBaby
  if (i.cat === 'Damen') return iDress
  return iShirt
}

// ---------- Zustand (nur im Speicher, Prototyp) ----------
const state = { protect: {}, ship: {}, order: null, chats: {}, dispute: null }
const OUTSIDE = /paypal|freunde|familie|überweis|ueberweis|whatsapp|telegram|iban|außerhalb|ausserhalb|direkt zahl|bar zahl/i

// ---------- Bausteine ----------
const art = (i, cls = '') => `
  <div class="relative grid place-items-center ${cls}" style="background:linear-gradient(140deg,${i.a},${i.b})" role="img" aria-label="Platzhalterbild: ${esc(i.title)}">
    ${ic(iconFor(i), 'w-1/3 max-w-28 text-white/40')}
    <span class="absolute left-3 bottom-3 rounded-full bg-slip text-ink text-xs font-semibold px-2.5 py-1">${esc(i.cond)}</span>
  </div>`

const sellerLine = (s) => `
  <span class="inline-flex flex-wrap items-center gap-x-1.5 gap-y-0.5 text-sm text-mute">
    ${s.verified ? `<span class="text-pine" title="Verifiziert">${ic(iSeal, 'w-4 h-4')}<span class="sr-only">Verifiziert</span></span>` : ''}
    <span class="text-ink font-medium">${esc(s.name)}</span>
    <span class="inline-flex items-center gap-1 font-mono text-xs"><span class="text-pine">${ic(iStar, 'w-3.5 h-3.5')}</span><span class="sr-only">Bewertung </span>${s.rating.toFixed(1)} (${s.count})</span>
  </span>`

function total(item) {
  const prot = state.protect[item.id] ? protection(item.price) : 0
  const ship = state.ship[item.id] ?? item.ship
  return { prot, ship, sum: item.price + ship + prot }
}

const receipt = (item, id = 'receipt') => {
  const t = total(item)
  return `
  <div class="receipt" id="${id}" aria-live="polite">
    <div class="receipt-row"><span>Artikel</span><span>${eur(item.price)}</span></div>
    <div class="receipt-row"><span>Versand</span><span>${eur(t.ship)}</span></div>
    <div class="receipt-row ${t.prot ? '' : 'text-mute'}"><span>Käuferschutz${t.prot ? '' : ' (aus)'}</span><span>${t.prot ? eur(t.prot) : '0,00 €'}</span></div>
    <div class="receipt-row text-mute"><span>Weitere Gebühren</span><span>keine</span></div>
    <div class="receipt-total"><span>Du zahlst</span><span class="sum">${eur(t.sum)}</span></div>
  </div>`
}

const crumbs = (label, href = '#/') => `<a href="${href}" class="inline-flex items-center gap-2 min-h-11 text-pine font-semibold hover:underline underline-offset-4">${ic(iBack, 'w-4 h-4')}${label}</a>`

function shell(inner) {
  return `
  <header class="sticky top-0 z-20 bg-paper/90 backdrop-blur border-b border-line">
    <div class="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
      <a href="#/" class="flex items-center gap-2.5 min-h-11" aria-label="Antrasi, zur Startseite">
        <span class="grid place-items-center w-9 h-9 rounded-xl bg-pine text-paper">${ic(iCheck, 'w-5 h-5')}</span>
        <span class="font-display text-2xl font-semibold tracking-tight">Antrasi</span>
      </a>
      <nav class="flex items-center gap-1 text-sm font-semibold" aria-label="Hauptnavigation">
        <a href="#/" class="px-3 min-h-11 inline-flex items-center rounded-xl hover:bg-paper2">Entdecken</a>
        <a href="#/streitfall" class="px-3 min-h-11 inline-flex items-center rounded-xl hover:bg-paper2">Meine Fälle</a>
      </nav>
    </div>
  </header>
  <main id="main" class="mx-auto max-w-6xl px-4 py-8 md:py-14 rise">${inner}</main>
  <footer class="border-t border-line mt-20">
    <p class="mx-auto max-w-6xl px-4 py-6 text-sm text-mute">Klickbarer Prototyp. Artikel, Personen und Zahlungen sind erfunden, es wird nichts gespeichert oder abgebucht.</p>
  </footer>`
}

// ---------- Startseite ----------
function home() {
  const cats = ['Alle', 'Damen', 'Herren', 'Kinder', 'Schuhe']
  const sample = items[0]
  const promises = [
    ['Endpreis sofort.', 'Im Feed steht, was Du wirklich zahlst, nicht erst an der Kasse.'],
    ['Schutz nur auf Wunsch.', 'Kein vorangekreuztes Häkchen. Du entscheidest, ob Du ihn willst.'],
    ['Menschen im Streitfall.', 'Feste Antwortfrist, Begründung in eigenen Worten, Widerspruch so oft nötig.'],
  ]
  return {
    html: shell(`
      <section class="grid md:grid-cols-[1.15fr_.85fr] gap-10 md:gap-16 items-center">
        <div>
          <h1 class="text-[2.6rem] md:text-6xl font-semibold leading-[1.02]">Der Preis, den Du siehst, ist der Preis, den Du zahlst.</h1>
          <p class="mt-5 text-lg text-mute max-w-[46ch]">Bei Antrasi steht der Endpreis schon im Feed. Käuferschutz buchst Du nur, wenn Du ihn willst.</p>
          <button id="go" class="btn btn-primary mt-7">Stöbern</button>
        </div>
        <div class="md:rotate-[-1.5deg]" aria-label="Beispiel für einen Beleg">
          <p class="font-mono text-xs text-mute mb-2">SO SIEHT DEIN PREIS AUS</p>
          <div class="receipt">
            <p class="font-semibold">${esc(sample.title)}, ${sample.size}</p>
            <div class="mt-2">
              <div class="receipt-row"><span>Artikel</span><span>${eur(sample.price)}</span></div>
              <div class="receipt-row"><span>Versand</span><span>${eur(sample.ship)}</span></div>
              <div class="receipt-row text-mute"><span>Käuferschutz (aus)</span><span>0,00 €</span></div>
              <div class="receipt-total"><span>Du zahlst</span><span class="sum">${eur(sample.price + sample.ship)}</span></div>
            </div>
          </div>
        </div>
      </section>

      <section id="feed-top" class="mt-16 scroll-mt-24" aria-label="Artikel">
        <div class="flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
          <div class="flex gap-2 overflow-x-auto -mx-4 px-4 md:mx-0 md:px-0 pb-1" role="group" aria-label="Kategorie" id="chips">
            ${cats.map((c, n) => `<button class="chip" data-cat="${c}" aria-pressed="${n === 0}">${c}</button>`).join('')}
          </div>
          <label class="md:w-72"><span class="sr-only">Artikel suchen</span><input id="q" type="search" class="field" placeholder="Artikel suchen" autocomplete="off" /></label>
        </div>
        <div id="feed" class="mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5" aria-live="polite"></div>
      </section>

      <section class="mt-24 max-w-2xl" aria-label="Unsere Versprechen">
        <h2 class="text-3xl font-semibold">Was Du bei uns bekommst</h2>
        <ul class="mt-5 divide-y divide-line border-y border-line">
          ${promises.map(([h, p]) => `<li class="py-4"><strong class="font-semibold">${h}</strong> <span class="text-mute">${p}</span></li>`).join('')}
        </ul>
      </section>`),
    mount() {
      let cat = 'Alle'
      let q = ''
      const feed = document.getElementById('feed')
      const draw = () => {
        const list = items.filter((i) => (cat === 'Alle' || i.cat === cat) && i.title.toLowerCase().includes(q))
        feed.innerHTML = list.length
          ? list.map((i, n) => {
              const t = total(i)
              return `
              <a class="card stagger" style="--i:${n}" href="#/artikel/${i.id}" aria-label="${esc(i.title)}, Größe ${i.size}, Du zahlst ${eur(t.sum)}">
                ${art(i, 'aspect-[4/5]')}
                <div class="p-3 md:p-4">
                  <h2 class="text-lg leading-snug font-semibold">${esc(i.title)}</h2>
                  <p class="text-sm text-mute">Größe ${i.size}</p>
                  <p class="mt-3 text-xs uppercase tracking-wide text-mute font-semibold">Du zahlst</p>
                  <p class="font-mono text-xl font-semibold">${eur(t.sum)}</p>
                  <p class="font-mono text-xs text-mute">${eur(i.price)} + ${eur(t.ship)} Versand</p>
                  <div class="mt-3 pt-3 border-t border-dashed border-line">${sellerLine(sellers[i.seller])}</div>
                </div>
              </a>`
            }).join('')
          : `<p class="col-span-full py-10 text-mute">Dazu haben wir nichts gefunden. Versuch einen anderen Begriff.</p>`
      }
      document.getElementById('go').addEventListener('click', () => document.getElementById('feed-top').scrollIntoView({ behavior: 'smooth' }))
      document.getElementById('chips').addEventListener('click', (e) => {
        const b = e.target.closest('button[data-cat]')
        if (!b) return
        cat = b.dataset.cat
        document.querySelectorAll('#chips .chip').forEach((c) => c.setAttribute('aria-pressed', c === b))
        draw()
      })
      document.getElementById('q').addEventListener('input', (e) => { q = e.target.value.trim().toLowerCase(); draw() })
      draw()
    },
  }
}

// ---------- Artikel ----------
function itemView(id) {
  const i = getItem(id)
  if (!i) return notFound()
  const s = sellers[i.seller]
  state.protect[i.id] ??= false
  return {
    html: shell(`
      ${crumbs('Alle Artikel')}
      <div class="mt-2 grid md:grid-cols-2 gap-8 md:gap-14 items-start">
        ${art(i, 'aspect-[4/5] rounded-2xl')}
        <div>
          <p class="font-mono text-sm text-mute">${i.cat}, Größe ${i.size}</p>
          <h1 class="text-4xl md:text-5xl font-semibold mt-1">${esc(i.title)}</h1>
          <div class="mt-3">${sellerLine(s)}</div>
          <p class="text-sm text-mute mt-1">${esc(s.reply)}</p>
          <p class="mt-5 leading-relaxed max-w-[60ch]">${esc(i.desc)}</p>

          <h2 class="sr-only">Dein Beleg</h2>
          <div class="mt-7" id="rc">${receipt(i)}</div>

          <div class="flex items-start gap-4 rounded-xl border border-line bg-slip p-4">
            <button id="sw" class="switch mt-0.5" role="switch" aria-checked="${state.protect[i.id]}" aria-labelledby="sw-l" aria-describedby="sw-d"></button>
            <div>
              <p id="sw-l" class="font-semibold">Käuferschutz hinzufügen <span class="font-mono font-normal text-mute">(+ ${eur(protection(i.price))})</span></p>
              <p id="sw-d" class="text-sm text-mute mt-1">Du bekommst Dein Geld zurück, wenn der Artikel nicht ankommt oder nicht zur Beschreibung passt. Probleme meldest Du bis 7 Tage nach Erhalt. Standardmäßig aus.</p>
            </div>
          </div>

          <div class="mt-6 grid gap-3 sm:grid-cols-2">
            <a href="#/kasse/${i.id}" class="btn btn-primary">Zur Kasse</a>
            <a href="#/chat/${i.id}" class="btn btn-ghost">Nachricht schreiben</a>
          </div>
        </div>
      </div>`),
    mount() {
      document.getElementById('sw').addEventListener('click', (e) => {
        state.protect[i.id] = !state.protect[i.id]
        e.currentTarget.setAttribute('aria-checked', state.protect[i.id])
        document.getElementById('rc').innerHTML = receipt(i)
      })
    },
  }
}

// ---------- Kasse ----------
const SHIPPING = [['DHL Paket an die Haustür', 0], ['Abgabe im Paketshop', -1]]
const choice = 'flex items-center gap-3 rounded-xl border border-line bg-slip p-3.5 cursor-pointer has-[:checked]:border-pine has-[:checked]:ring-2 has-[:checked]:ring-pine/25'
function checkout(id) {
  const i = getItem(id)
  if (!i) return notFound()
  state.ship[i.id] ??= i.ship
  return {
    html: shell(`
      ${crumbs('Zurück zum Artikel', '#/artikel/' + i.id)}
      <h1 class="text-4xl md:text-5xl font-semibold mt-2">Kasse</h1>
      <form id="f" class="mt-8 grid md:grid-cols-[1.3fr_1fr] gap-10 items-start" novalidate>
        <div class="grid gap-9">
          <fieldset class="grid gap-3">
            <legend class="text-xl font-semibold mb-2">Lieferadresse</legend>
            <label class="grid gap-1.5"><span class="text-sm font-semibold">Vor- und Nachname</span><input class="field" name="name" autocomplete="name" required /></label>
            <label class="grid gap-1.5"><span class="text-sm font-semibold">Straße und Hausnummer</span><input class="field" name="street" autocomplete="street-address" required /></label>
            <div class="grid grid-cols-[110px_1fr] gap-3">
              <label class="grid gap-1.5"><span class="text-sm font-semibold">PLZ</span><input class="field" name="zip" inputmode="numeric" autocomplete="postal-code" required /></label>
              <label class="grid gap-1.5"><span class="text-sm font-semibold">Ort</span><input class="field" name="city" autocomplete="address-level2" required /></label>
            </div>
          </fieldset>
          <fieldset class="grid gap-2">
            <legend class="text-xl font-semibold mb-2">Versand</legend>
            ${SHIPPING.map(([l, d], n) => `<label class="${choice} justify-between"><span class="flex items-center gap-3"><input type="radio" name="ship" value="${d}" ${n === 0 ? 'checked' : ''} class="accent-pine w-5 h-5" />${l}</span><span class="font-mono text-sm">${eur(i.ship + d)}</span></label>`).join('')}
          </fieldset>
          <fieldset class="grid gap-2">
            <legend class="text-xl font-semibold mb-2">Bezahlen</legend>
            ${['Karte', 'PayPal (Artikel und Dienstleistung)', 'Sofortüberweisung'].map((l, n) => `<label class="${choice}"><input type="radio" name="pay" value="${l}" ${n === 0 ? 'checked' : ''} class="accent-pine w-5 h-5" />${l}</label>`).join('')}
            <p class="text-sm text-mute mt-1">Dein Geld liegt bei Antrasi, bis Du den Erhalt bestätigst. Der Verkäufer bekommt es erst dann, spätestens nach 7 Tagen.</p>
          </fieldset>
        </div>

        <aside class="md:sticky md:top-24" aria-label="Zusammenfassung">
          <h2 class="text-xl font-semibold mb-3">${esc(i.title)}</h2>
          <div id="rc">${receipt(i)}</div>
          <div class="flex items-center justify-between gap-3 rounded-xl border border-line bg-slip p-3.5 mt-3">
            <span class="text-sm">Käuferschutz <span class="font-mono text-mute" id="pt"></span></span>
            <button type="button" id="sw" class="switch" role="switch" aria-checked="${!!state.protect[i.id]}" aria-label="Käuferschutz hinzufügen"></button>
          </div>
          <p id="err" class="text-rust font-semibold mt-3" role="alert" hidden>Bitte fülle alle Adressfelder aus.</p>
          <button class="btn btn-primary w-full mt-4" type="submit">Jetzt bezahlen</button>
        </aside>
      </form>`),
    mount() {
      const f = document.getElementById('f')
      const rc = document.getElementById('rc')
      const pt = document.getElementById('pt')
      const draw = () => { rc.innerHTML = receipt(i); pt.textContent = `(+ ${eur(protection(i.price))})` }
      draw()
      f.addEventListener('change', (e) => {
        if (e.target.name === 'ship') { state.ship[i.id] = i.ship + Number(e.target.value); draw() }
      })
      document.getElementById('sw').addEventListener('click', (e) => {
        state.protect[i.id] = !state.protect[i.id]
        e.currentTarget.setAttribute('aria-checked', state.protect[i.id])
        draw()
      })
      f.addEventListener('submit', (e) => {
        e.preventDefault()
        const d = Object.fromEntries(new FormData(f))
        const missing = ['name', 'street', 'zip', 'city'].find((k) => !d[k]?.trim())
        if (missing) {
          document.getElementById('err').hidden = false
          f.elements[missing].focus()
          return
        }
        state.order = { id: 'AN-' + (48210 + Math.floor(Math.random() * 90)), itemId: i.id, addr: d, pay: d.pay, ...total(i), protect: !!state.protect[i.id] }
        location.hash = '#/bestellung/' + i.id
      })
    },
  }
}

// ---------- Bestellung ----------
function orderView(id) {
  const i = getItem(id)
  const o = state.order
  if (!i || !o || o.itemId !== i.id) return notFound('Zu diesem Artikel gibt es noch keine Bestellung.')
  return {
    html: shell(`
      <div class="max-w-xl mx-auto">
        <div class="flex items-center gap-3">
          <span class="grid place-items-center w-11 h-11 rounded-full bg-pine text-paper">${ic(iCheck, 'w-6 h-6')}</span>
          <h1 class="text-4xl font-semibold">Bestellt, danke!</h1>
        </div>
        <p class="mt-3 text-mute">Dein Geld liegt bei Antrasi. ${esc(sellers[i.seller].name)} verschickt in den nächsten Tagen.</p>

        <div class="receipt mt-7">
          <p class="font-mono text-xs text-mute">BELEG ${o.id}</p>
          <h2 class="text-xl font-semibold mt-1">${esc(i.title)}</h2>
          <div class="mt-3">
            <div class="receipt-row"><span>Artikel</span><span>${eur(i.price)}</span></div>
            <div class="receipt-row"><span>Versand</span><span>${eur(o.ship)}</span></div>
            <div class="receipt-row ${o.protect ? '' : 'text-mute'}"><span>Käuferschutz</span><span>${o.protect ? eur(o.prot) : 'nicht gewählt'}</span></div>
            <div class="receipt-total"><span>Bezahlt</span><span class="sum">${eur(o.sum)}</span></div>
          </div>
          <p class="mt-4 text-sm text-mute">Zahlart: ${esc(o.pay)}<br>Lieferung an: ${esc(o.addr.name)}, ${esc(o.addr.street)}, ${esc(o.addr.zip)} ${esc(o.addr.city)}</p>
        </div>

        <ol class="mt-9" aria-label="Ablauf">
          <li class="step done"><span class="dot" aria-hidden="true">${ic(iCheck, 'w-3 h-3')}</span><strong>Bezahlt</strong><br><span class="text-mute text-sm">Das Geld liegt bei Antrasi.</span></li>
          <li class="step now" aria-current="step"><span class="dot" aria-hidden="true"></span><strong>Verkäufer versendet</strong><br><span class="text-mute text-sm">Spätestens in 3 Werktagen, sonst erstatten wir automatisch.</span></li>
          <li class="step"><span class="dot" aria-hidden="true"></span><strong>Du bestätigst den Erhalt</strong><br><span class="text-mute text-sm">Erst dann bekommt der Verkäufer sein Geld.</span></li>
        </ol>

        <div class="mt-6 grid sm:grid-cols-2 gap-3">
          <a class="btn btn-ghost" href="#/chat/${i.id}">Verkäufer schreiben</a>
          <a class="btn btn-ghost" href="#/streitfall/${i.id}">Problem melden</a>
        </div>
      </div>`),
  }
}

// ---------- Chat ----------
function chat(id) {
  const i = getItem(id)
  if (!i) return notFound()
  const s = sellers[i.seller]
  state.chats[i.id] ??= [{ from: 'they', text: 'Hallo! Schau in Ruhe, bei Fragen schreib mir einfach.' }]
  const draw = () => {
    const box = document.getElementById('msgs')
    box.innerHTML = state.chats[i.id].map((m) => m.warn
      ? `<div class="warn rise" role="alert"><p class="font-semibold text-rust flex items-center gap-2">${ic(iWarn, 'w-5 h-5')}Achtung: Zahlung außerhalb von Antrasi</p><p class="mt-1 text-sm">Wer Dich bittet, außerhalb der Plattform zu zahlen, will meist den Käuferschutz umgehen. Bei „Freunde und Familie“ oder per Überweisung ist Dein Geld nicht geschützt. <strong>Zahle nur über die Kasse.</strong></p><a class="inline-flex items-center min-h-11 text-sm font-semibold text-pine underline underline-offset-4" href="#/streitfall/${i.id}">Nachricht melden</a></div>`
      : `<div class="bubble ${m.from === 'me' ? 'bubble-me' : 'bubble-they'}"><span class="sr-only">${m.from === 'me' ? 'Du' : esc(s.name)}: </span>${esc(m.text)}</div>`).join('')
    box.scrollTop = box.scrollHeight
  }
  const push = (from, text) => {
    state.chats[i.id].push({ from, text })
    if (OUTSIDE.test(text)) state.chats[i.id].push({ warn: true })
    draw()
  }
  return {
    html: shell(`
      <div class="max-w-xl mx-auto">
        ${crumbs('Zurück zum Artikel', '#/artikel/' + i.id)}
        <div class="mt-2 flex items-center gap-3 rounded-xl border border-line bg-slip p-3">
          <div class="w-14 h-16 rounded-lg shrink-0" style="background:linear-gradient(140deg,${i.a},${i.b})" aria-hidden="true"></div>
          <div class="min-w-0"><p class="font-semibold truncate">${esc(i.title)}</p><p class="font-mono text-sm text-mute">${eur(total(i).sum)} inkl. Versand</p></div>
        </div>
        <p class="mt-4 text-sm text-mute">Chat mit ${esc(s.name)}, ${esc(s.reply)}</p>
        <div id="msgs" class="mt-3 grid gap-2.5 content-start h-[44vh] overflow-y-auto rounded-xl bg-slip border border-line p-3" role="log" aria-live="polite" aria-label="Nachrichten"></div>

        <p class="mt-5 text-sm font-semibold">Zum Ausprobieren</p>
        <div class="mt-2 flex flex-wrap gap-2" id="demo">
          <button class="chip" data-send="Ist der Artikel noch da?">Ist der Artikel noch da?</button>
          <button class="chip" data-they="Zahl doch direkt per PayPal Freunde, dann sparst Du die Gebühr.">Verkäufer schlägt PayPal Freunde vor</button>
        </div>
        <form id="cf" class="mt-3 flex gap-2">
          <label class="flex-1"><span class="sr-only">Nachricht</span><input id="ci" class="field" placeholder="Nachricht schreiben" autocomplete="off" /></label>
          <button class="btn btn-primary" type="submit">Senden</button>
        </form>
      </div>`),
    mount() {
      draw()
      document.getElementById('cf').addEventListener('submit', (e) => {
        e.preventDefault()
        const v = document.getElementById('ci').value.trim()
        if (!v) return
        document.getElementById('ci').value = ''
        push('me', v)
      })
      document.getElementById('demo').addEventListener('click', (e) => {
        const b = e.target.closest('button')
        if (!b) return
        if (b.dataset.send) { push('me', b.dataset.send); setTimeout(() => push('they', 'Ja, ist noch da. Ich verschicke gern ab morgen.'), 600) }
        if (b.dataset.they) push('they', b.dataset.they)
      })
    },
  }
}

// ---------- Streitfall ----------
const STAGES = [
  ['Gemeldet', 'Wir haben Deine Meldung. Der Verkäufer wird informiert.'],
  ['Verkäufer antwortet', 'Er hat 48 Stunden Zeit. Danach geht der Fall automatisch weiter.'],
  ['Prüfung durch einen Menschen', 'Ein Mitarbeiter liest beide Seiten und die Belege. Keine Textbausteine.'],
  ['Entscheidung', 'Du bekommst eine Begründung in eigenen Worten.'],
]
const REASONS = ['Der Artikel ist nicht angekommen', 'Der Artikel entspricht nicht der Beschreibung', 'Der Artikel ist beschädigt', 'Verdacht auf Betrug oder Fälschung']

function dispute(id) {
  const i = id ? getItem(id) : state.dispute ? getItem(state.dispute.itemId) : null
  const d = state.dispute
  if (!d) {
    if (!i) return { html: shell(`<div class="max-w-xl mx-auto"><h1 class="text-4xl font-semibold">Meine Fälle</h1><p class="mt-3 text-mute">Du hast keine offenen Fälle. Stimmt bei einer Bestellung etwas nicht, findest Du dort „Problem melden“.</p><a class="btn btn-primary mt-6" href="#/">Zur Startseite</a></div>`) }
    return {
      html: shell(`
        <div class="max-w-xl mx-auto">
          ${crumbs('Zurück', '#/artikel/' + i.id)}
          <h1 class="text-4xl md:text-5xl font-semibold mt-2">Problem melden</h1>
          <p class="mt-3 text-mute">${esc(i.title)}, ${eur(total(i).sum)}. Nach dem Absenden siehst Du den Zeitplan Deines Falls.</p>
          <form id="df" class="mt-8 grid gap-6">
            <fieldset class="grid gap-2"><legend class="font-semibold mb-2">Was ist passiert?</legend>
              ${REASONS.map((r, n) => `<label class="${choice}"><input type="radio" name="reason" value="${r}" ${n === 0 ? 'checked' : ''} class="accent-pine w-5 h-5" />${r}</label>`).join('')}
            </fieldset>
            <label class="grid gap-1.5"><span class="font-semibold">Beschreibe es kurz (optional)</span><textarea class="field" name="text" placeholder="Zum Beispiel: Reißverschluss defekt, siehe Foto"></textarea></label>
            <button class="btn btn-primary" type="submit">Meldung abschicken</button>
          </form>
        </div>`),
      mount() {
        document.getElementById('df').addEventListener('submit', (e) => {
          e.preventDefault()
          const f = Object.fromEntries(new FormData(e.target))
          state.dispute = { itemId: i.id, reason: f.reason, text: f.text, stage: 0, appeals: 0 }
          route()
        })
      },
    }
  }
  const it = getItem(d.itemId)
  const refund = eur(total(it).sum)
  const decided = d.stage === 3
  const isDone = (n) => n < d.stage || (decided && n === 3)
  return {
    html: shell(`
      <div class="max-w-xl mx-auto">
        ${crumbs('Zurück zur Bestellung', '#/bestellung/' + it.id)}
        <p class="font-mono text-sm text-mute mt-2">FALL ${state.order?.id ?? 'AN-48211'}-S</p>
        <h1 class="text-4xl md:text-5xl font-semibold">${decided ? 'Entscheidung liegt vor' : 'Dein Fall ist in Bearbeitung'}</h1>
        <p class="mt-3 text-mute">${esc(it.title)}, ${esc(d.reason)}${d.text ? ', „' + esc(d.text) + '“' : ''}</p>

        <ol class="mt-9" aria-label="Status Deines Falls">
          ${STAGES.map(([h, p], n) => `<li class="step ${isDone(n) ? 'done' : n === d.stage ? 'now' : ''}" ${n === d.stage ? 'aria-current="step"' : ''}><span class="dot" aria-hidden="true">${isDone(n) ? ic(iCheck, 'w-3 h-3') : ''}</span><strong>${h}</strong><br><span class="text-mute text-sm">${p}</span></li>`).join('')}
        </ol>

        ${decided ? `
        <div class="receipt rise" aria-live="polite">
          <p class="text-xl font-semibold">Erstattung zugesprochen</p>
          <p class="mt-1">Du bekommst <strong class="font-mono">${refund}</strong> zurück, auf Deine Zahlart, in 1 bis 3 Werktagen.</p>
          <p class="mt-2 text-sm text-mute">Begründung: Der Verkäufer hat keinen Versandbeleg vorgelegt, die Sendung ließ sich nicht verfolgen.</p>
          ${d.appeals ? `<p class="mt-2 text-sm font-semibold text-pine">Bisherige Widersprüche: ${d.appeals}. Jeden prüft eine andere Person.</p>` : ''}
        </div>
        <div class="mt-5 grid sm:grid-cols-2 gap-3">
          <button class="btn btn-ghost" id="ap">Widerspruch einlegen</button>
          <a class="btn btn-primary" href="#/">Fertig</a>
        </div>
        <p class="mt-3 text-sm text-mute">Widersprechen kannst Du, so oft Du neue Argumente hast.</p>`
        : `<div class="grid sm:grid-cols-2 gap-3">
          <button class="btn btn-primary" id="adv">Demo: Zeit vorspulen</button>
          <a class="btn btn-ghost" href="#/chat/${it.id}">Zum Chat</a>
        </div>
        <p class="mt-3 text-sm text-mute">Im echten Betrieb vergeht die Zeit von selbst. Hier springst Du zum nächsten Schritt.</p>`}
      </div>`),
    mount() {
      document.getElementById('adv')?.addEventListener('click', () => { d.stage = Math.min(3, d.stage + 1); route() })
      document.getElementById('ap')?.addEventListener('click', () => { d.appeals++; d.stage = 2; route() })
    },
  }
}

function notFound(msg = 'Diese Seite gibt es nicht.') {
  return { html: shell(`<div class="max-w-xl mx-auto"><h1 class="text-4xl font-semibold">Hier ist nichts</h1><p class="mt-3 text-mute">${msg}</p><a class="btn btn-primary mt-6" href="#/">Zur Startseite</a></div>`) }
}

// ---------- Router ----------
function route() {
  const [r = '', id] = location.hash.replace(/^#\/?/, '').split('/')
  const view = { '': home, artikel: () => itemView(id), kasse: () => checkout(id), bestellung: () => orderView(id), chat: () => chat(id), streitfall: () => dispute(id) }[r]?.() ?? notFound()
  app.innerHTML = view.html
  view.mount?.()
  window.scrollTo(0, 0)
}
window.addEventListener('hashchange', route)
route()
