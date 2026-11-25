(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e={mara:{name:`Mara K.`,rating:4.9,count:212,reply:`antwortet in ca. 1 Std.`,verified:!0},jonas:{name:`Jonas P.`,rating:4.7,count:58,reply:`antwortet in ca. 3 Std.`,verified:!0},lena:{name:`Lena S.`,rating:4.2,count:9,reply:`antwortet in ca. 1 Tag`,verified:!1},tim:{name:`Tim R.`,rating:5,count:131,reply:`antwortet in ca. 2 Std.`,verified:!0}},t=[{id:1,title:`Wollmantel, camel`,cat:`Damen`,size:`M`,cond:`Sehr gut`,price:28,ship:3.95,seller:`mara`,a:`#C9B99A`,b:`#8E7B5C`,desc:`Schwerer Wollmantel, zweireihig, Innenfutter ohne Flecken. Länge 108 cm. Nichtraucherhaushalt.`},{id:2,title:`Slim Jeans, dunkelblau`,cat:`Herren`,size:`32/32`,cond:`Gut`,price:15,ship:3.95,seller:`jonas`,a:`#5B6F8F`,b:`#2D3A52`,desc:`Dunkelblaue Slim Jeans, leichte Gebrauchsspuren am Saum (Foto 3). Stretch-Anteil 2 %.`},{id:3,title:`Strickjacke mit Knöpfen`,cat:`Damen`,size:`S`,cond:`Sehr gut`,price:18,ship:2.95,seller:`mara`,a:`#9DB39A`,b:`#5C7A60`,desc:`Weiche Strickjacke aus Baumwollmix, kaum getragen. Waschbar bei 30 Grad.`},{id:4,title:`Winterjacke, gesteppt`,cat:`Herren`,size:`L`,cond:`Gut`,price:45,ship:4.99,seller:`tim`,a:`#3E5C76`,b:`#1D2D44`,desc:`Warm gefüttert, wasserabweisend, Kapuze abnehmbar. Reißverschluss einwandfrei.`},{id:5,title:`Kinder-Regenjacke, gelb`,cat:`Kinder`,size:`116`,cond:`Sehr gut`,price:9,ship:2.95,seller:`lena`,a:`#F0D26B`,b:`#D3A82C`,desc:`Gelbe Regenjacke mit Reflektoren. Einmal gewaschen, passt für 5 bis 6 Jahre.`},{id:6,title:`Lederstiefeletten, schwarz`,cat:`Schuhe`,size:`39`,cond:`Gut`,price:34,ship:4.99,seller:`jonas`,a:`#4A4A48`,b:`#161616`,desc:`Echtleder, Absatz 4 cm, neu besohlt. Leichte Falten am Schaft.`},{id:7,title:`Pullover, Norweger-Muster`,cat:`Herren`,size:`M`,cond:`Neu mit Etikett`,price:24,ship:3.95,seller:`tim`,a:`#B5524A`,b:`#7A2E2A`,desc:`Nie getragen, Etikett dran. Wolle, handwaschbar.`},{id:8,title:`Sneaker, weiß`,cat:`Schuhe`,size:`42`,cond:`Sehr gut`,price:29,ship:4.99,seller:`lena`,a:`#E6E2D8`,b:`#B9B3A3`,desc:`Weiße Leder-Sneaker, einmal gereinigt. Sohle mit leichten Gebrauchsspuren.`}],n=e=>Math.round((.7+e*.05)*100)/100,r=e=>e.toLocaleString(`de-DE`,{style:`currency`,currency:`EUR`}),i=e=>t.find(t=>t.id===Number(e)),a=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor"><path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z"/></svg>`,o=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor"><path d="M228,128a12,12,0,0,1-12,12H69l51.52,51.51a12,12,0,0,1-17,17l-72-72a12,12,0,0,1,0-17l72-72a12,12,0,0,1,17,17L69,116H216A12,12,0,0,1,228,128Z"/></svg>`,s=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor"><path d="M240.26,186.1,152.81,34.23h0a28.74,28.74,0,0,0-49.62,0L15.74,186.1a27.45,27.45,0,0,0,0,27.71A28.31,28.31,0,0,0,40.55,228h174.9a28.31,28.31,0,0,0,24.79-14.19A27.45,27.45,0,0,0,240.26,186.1Zm-20.8,15.7a4.46,4.46,0,0,1-4,2.2H40.55a4.46,4.46,0,0,1-4-2.2,3.56,3.56,0,0,1,0-3.73L124,46.2a4.77,4.77,0,0,1,8,0l87.44,151.87A3.56,3.56,0,0,1,219.46,201.8ZM116,136V104a12,12,0,0,1,24,0v32a12,12,0,0,1-24,0Zm28,40a16,16,0,1,1-16-16A16,16,0,0,1,144,176Z"/></svg>`,c=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor"><path d="M234.29,114.85l-45,38.83L203,211.75a16.4,16.4,0,0,1-24.5,17.82L128,198.49,77.47,229.57A16.4,16.4,0,0,1,53,211.75l13.76-58.07-45-38.83A16.46,16.46,0,0,1,31.08,86l59-4.76,22.76-55.08a16.36,16.36,0,0,1,30.27,0l22.75,55.08,59,4.76a16.46,16.46,0,0,1,9.37,28.86Z"/></svg>`,l=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor"><path d="M225.86,102.82c-3.77-3.94-7.67-8-9.14-11.57-1.36-3.27-1.44-8.69-1.52-13.94-.15-9.76-.31-20.82-8-28.51s-18.75-7.85-28.51-8c-5.25-.08-10.67-.16-13.94-1.52-3.56-1.47-7.63-5.37-11.57-9.14C146.28,23.51,138.44,16,128,16s-18.27,7.51-25.18,14.14c-3.94,3.77-8,7.67-11.57,9.14C88,40.64,82.56,40.72,77.31,40.8c-9.76.15-20.82.31-28.51,8S41,67.55,40.8,77.31c-.08,5.25-.16,10.67-1.52,13.94-1.47,3.56-5.37,7.63-9.14,11.57C23.51,109.72,16,117.56,16,128s7.51,18.27,14.14,25.18c3.77,3.94,7.67,8,9.14,11.57,1.36,3.27,1.44,8.69,1.52,13.94.15,9.76.31,20.82,8,28.51s18.75,7.85,28.51,8c5.25.08,10.67.16,13.94,1.52,3.56,1.47,7.63,5.37,11.57,9.14C109.72,232.49,117.56,240,128,240s18.27-7.51,25.18-14.14c3.94-3.77,8-7.67,11.57-9.14,3.27-1.36,8.69-1.44,13.94-1.52,9.76-.15,20.82-.31,28.51-8s7.85-18.75,8-28.51c.08-5.25.16-10.67,1.52-13.94,1.47-3.56,5.37-7.63,9.14-11.57C232.49,146.28,240,138.44,240,128S232.49,109.73,225.86,102.82Zm-52.2,6.84-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z"/></svg>`,u=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor"><path d="M212.86,210.49a1.08,1.08,0,0,0-.08-.19l-45.94-97.86,21.08-33.1.09-.14a14,14,0,0,0,0-14.4c-.07-.12-.15-.24-.23-.36L166,33.33V8a6,6,0,0,0-12,0V33.12l-5.7,7.12a26,26,0,0,1-40.6,0L102,33.12V8A6,6,0,0,0,90,8V33.33L68.22,64.44c-.08.12-.16.24-.23.36a14,14,0,0,0,0,14.4l.09.14,21.08,33.1L43.22,210.3a1.08,1.08,0,0,0-.08.19A14,14,0,0,0,56,230H200a14,14,0,0,0,12.87-19.51ZM78.26,73a2,2,0,0,1-.05-1.89L96.32,45.23l2,2.51a38,38,0,0,0,59.34,0l2-2.51,18.11,25.86a2,2,0,0,1,0,1.89l-21,33H99.29ZM201.66,217.1a1.93,1.93,0,0,1-1.67.9H56a2,2,0,0,1-1.87-2.72L99.81,118h56.38l45.67,97.28A1.92,1.92,0,0,1,201.66,217.1Z"/></svg>`,d=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor"><path d="M246.64,63,194.87,34.74A5.93,5.93,0,0,0,192,34H160a6,6,0,0,0-6,6,26,26,0,0,1-52,0,6,6,0,0,0-6-6H64a5.93,5.93,0,0,0-2.88.74L9.36,63A13.77,13.77,0,0,0,3.58,81.55l19.28,36.81A14.38,14.38,0,0,0,35.67,126H58v82a14,14,0,0,0,14,14H184a14,14,0,0,0,14-14V126h22.34a14.38,14.38,0,0,0,12.81-7.64l19.28-36.81A13.77,13.77,0,0,0,246.64,63Zm-211,51a2.42,2.42,0,0,1-2.18-1.21L14.21,76a1.82,1.82,0,0,1,.9-2.47L58,50.11V114ZM186,208a2,2,0,0,1-2,2H72a2,2,0,0,1-2-2V46H90.48a38,38,0,0,0,75,0H186Zm55.8-132-19.28,36.8a2.42,2.42,0,0,1-2.18,1.21H198V50.11l42.9,23.4A1.83,1.83,0,0,1,241.79,76Z"/></svg>`,f=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor"><path d="M92,138a10,10,0,1,1,10-10A10,10,0,0,1,92,138Zm72-20a10,10,0,1,0,10,10A10,10,0,0,0,164,118Zm-11.2,44.92a47,47,0,0,1-49.6,0,6,6,0,0,0-6.4,10.16,59,59,0,0,0,62.4,0,6,6,0,1,0-6.4-10.16ZM230,128A102,102,0,1,1,128,26,102.12,102.12,0,0,1,230,128Zm-12,0a90.11,90.11,0,0,0-87.07-89.95C118.3,55.23,118,71.85,118,72a10,10,0,0,0,20,0,6,6,0,0,1,12,0,22,22,0,0,1-44,0c0-.75.15-15.82,10.14-33.22A90,90,0,1,0,218,128Z"/></svg>`,p=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor"><path d="M228,131l-60.73-20.24a26,26,0,0,1-15.51-14L128.51,42.31a14,14,0,0,0-17.57-7.47L35.22,62.37A14.05,14.05,0,0,0,26,75.53V192a14,14,0,0,0,14,14H240a14,14,0,0,0,14-14V167.06A38,38,0,0,0,228,131ZM39.32,73.65,115,46.12a1.81,1.81,0,0,1,.68-.12,2,2,0,0,1,1.79,1.11l8,18.68L102,74.36A6,6,0,0,0,104,86a5.92,5.92,0,0,0,2-.37l24.18-8.79,6.31,14.76L118,98.36A6,6,0,0,0,120,110a6.15,6.15,0,0,0,2-.36l19.26-7a38,38,0,0,0,10.57,13.21L134,122.36A6,6,0,0,0,136,134a6.15,6.15,0,0,0,2.05-.36l28.64-10.42,57.53,19.18A25.94,25.94,0,0,1,241.49,162H38V75.53A2,2,0,0,1,39.32,73.65ZM240,194H40a2,2,0,0,1-2-2V174H242v18A2,2,0,0,1,240,194Z"/></svg>`,m=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor"><path d="M240.37,172.8,138,96l25.59-19.2A6,6,0,0,0,166,72a38,38,0,1,0-76,0,6,6,0,0,0,12,0,26,26,0,0,1,51.82-2.88l-29.32,22-.21.16L15.63,172.8A14,14,0,0,0,24,198H232a14,14,0,0,0,8.39-25.2Zm-6.5,11.83A1.85,1.85,0,0,1,232,186H24a2,2,0,0,1-1.19-3.6L128,103.5l105.17,78.9A1.85,1.85,0,0,1,233.87,184.63Z"/></svg>`,h=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor"><path d="M221.89,214.26l-22-176A14,14,0,0,0,186,26H70A14,14,0,0,0,56.11,38.26l-22,176A14,14,0,0,0,48,230H88.69a14,14,0,0,0,13.57-10.56L128,120l25.73,99.44A14,14,0,0,0,167.31,230H208a14,14,0,0,0,13.89-15.74ZM195.22,97.66A34.07,34.07,0,0,1,166.54,70h25.23ZM70,38H186a2,2,0,0,1,2,1.75L190.27,58H65.73L68,39.75A2,2,0,0,1,70,38ZM64.23,70H89.46A34.07,34.07,0,0,1,60.78,97.66Zm26.4,146.49A2,2,0,0,1,88.69,218H48a2,2,0,0,1-2-2.25L59.25,109.87A46.07,46.07,0,0,0,101.6,70H122V95.24Zm118.87.83a2,2,0,0,1-1.5.68H167.31a2,2,0,0,1-1.95-1.56L134,95.24V70h20.4a46.07,46.07,0,0,0,42.35,39.87L210,215.75A2,2,0,0,1,209.5,217.32Z"/></svg>`,g=document.getElementById(`app`),_=e=>String(e).replace(/[&<>"']/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`})[e]),v=(e,t=`w-4 h-4`)=>e.replace(`<svg`,`<svg class="${t}" aria-hidden="true" focusable="false"`),y=e=>{let t=e.title.toLowerCase();return/mantel|winterjacke|regenjacke/.test(t)?m:/jeans|hose/.test(t)?h:/strickjacke|pullover/.test(t)?d:/sneaker|stiefel/.test(t)?p:e.cat===`Kinder`?f:e.cat===`Damen`?u:d},b={protect:{},ship:{},order:null,chats:{},dispute:null},x=/paypal|freunde|familie|überweis|ueberweis|whatsapp|telegram|iban|außerhalb|ausserhalb|direkt zahl|bar zahl/i,S=(e,t=``)=>`
  <div class="relative grid place-items-center ${t}" style="background:linear-gradient(140deg,${e.a},${e.b})" role="img" aria-label="Platzhalterbild: ${_(e.title)}">
    ${v(y(e),`w-1/3 max-w-28 text-white/40`)}
    <span class="absolute left-3 bottom-3 rounded-full bg-slip text-ink text-xs font-semibold px-2.5 py-1">${_(e.cond)}</span>
  </div>`,C=e=>`
  <span class="inline-flex flex-wrap items-center gap-x-1.5 gap-y-0.5 text-sm text-mute">
    ${e.verified?`<span class="text-pine" title="Verifiziert">${v(l,`w-4 h-4`)}<span class="sr-only">Verifiziert</span></span>`:``}
    <span class="text-ink font-medium">${_(e.name)}</span>
    <span class="inline-flex items-center gap-1 font-mono text-xs"><span class="text-pine">${v(c,`w-3.5 h-3.5`)}</span><span class="sr-only">Bewertung </span>${e.rating.toFixed(1)} (${e.count})</span>
  </span>`;function w(e){let t=b.protect[e.id]?n(e.price):0,r=b.ship[e.id]??e.ship;return{prot:t,ship:r,sum:e.price+r+t}}var T=(e,t=`receipt`)=>{let n=w(e);return`
  <div class="receipt" id="${t}" aria-live="polite">
    <div class="receipt-row"><span>Artikel</span><span>${r(e.price)}</span></div>
    <div class="receipt-row"><span>Versand</span><span>${r(n.ship)}</span></div>
    <div class="receipt-row ${n.prot?``:`text-mute`}"><span>Käuferschutz${n.prot?``:` (aus)`}</span><span>${n.prot?r(n.prot):`0,00 €`}</span></div>
    <div class="receipt-row text-mute"><span>Weitere Gebühren</span><span>keine</span></div>
    <div class="receipt-total"><span>Du zahlst</span><span class="sum">${r(n.sum)}</span></div>
  </div>`},E=(e,t=`#/`)=>`<a href="${t}" class="inline-flex items-center gap-2 min-h-11 text-pine font-semibold hover:underline underline-offset-4">${v(o,`w-4 h-4`)}${e}</a>`;function D(e){return`
  <header class="sticky top-0 z-20 bg-paper/90 backdrop-blur border-b border-line">
    <div class="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
      <a href="#/" class="flex items-center gap-2.5 min-h-11" aria-label="Antrasi, zur Startseite">
        <span class="font-display text-[1.7rem] font-semibold tracking-tight">Antrasi</span>
      </a>
      <nav class="flex items-center gap-1 text-sm font-semibold" aria-label="Hauptnavigation">
        <a href="#/" class="px-3 min-h-11 inline-flex items-center rounded-xl hover:bg-paper2">Entdecken</a>
        <a href="#/streitfall" class="px-3 min-h-11 inline-flex items-center rounded-xl hover:bg-paper2">Meine Fälle</a>
      </nav>
    </div>
  </header>
  <main id="main" class="mx-auto max-w-6xl px-4 py-8 md:py-14 rise">${e}</main>
  <footer class="border-t border-line mt-20">
    <p class="mx-auto max-w-6xl px-4 py-6 text-sm text-mute">Klickbarer Prototyp. Artikel, Personen und Zahlungen sind erfunden, es wird nichts gespeichert oder abgebucht.</p>
  </footer>`}function O(){let n=[`Alle`,`Damen`,`Herren`,`Kinder`,`Schuhe`],i=t[0];return{html:D(`
      <section class="grid md:grid-cols-[1.15fr_.85fr] gap-10 md:gap-16 items-center">
        <div>
          <h1 class="text-[2.6rem] md:text-6xl font-semibold leading-[1.02]">Der Preis, den Du siehst, ist der Preis, den Du zahlst.</h1>
          <p class="mt-5 text-lg text-mute max-w-[46ch]">Bei Antrasi steht der Endpreis schon im Feed. Käuferschutz buchst Du nur, wenn Du ihn willst.</p>
          <button id="go" class="btn btn-primary mt-7">Stöbern</button>
        </div>
        <div class="md:rotate-[-1.5deg]" aria-label="Beispiel für einen Beleg">
          <p class="font-mono text-xs text-mute mb-2">SO SIEHT DEIN PREIS AUS</p>
          <div class="receipt">
            <p class="font-semibold">${_(i.title)}, ${i.size}</p>
            <div class="mt-2">
              <div class="receipt-row"><span>Artikel</span><span>${r(i.price)}</span></div>
              <div class="receipt-row"><span>Versand</span><span>${r(i.ship)}</span></div>
              <div class="receipt-row text-mute"><span>Käuferschutz (aus)</span><span>0,00 €</span></div>
              <div class="receipt-total"><span>Du zahlst</span><span class="sum">${r(i.price+i.ship)}</span></div>
            </div>
          </div>
        </div>
      </section>

      <section id="feed-top" class="mt-16 scroll-mt-24" aria-label="Artikel">
        <div class="flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
          <div class="flex gap-2 overflow-x-auto -mx-4 px-4 md:mx-0 md:px-0 pb-1" role="group" aria-label="Kategorie" id="chips">
            ${n.map((e,t)=>`<button class="chip" data-cat="${e}" aria-pressed="${t===0}">${e}</button>`).join(``)}
          </div>
          <label class="md:w-72"><span class="sr-only">Artikel suchen</span><input id="q" type="search" class="field" placeholder="Artikel suchen" autocomplete="off" /></label>
        </div>
        <div id="feed" class="mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5" aria-live="polite"></div>
      </section>

      <section class="mt-24 max-w-2xl" aria-label="Unsere Versprechen">
        <h2 class="text-3xl font-semibold">Was Du bei uns bekommst</h2>
        <ul class="mt-5 divide-y divide-line border-y border-line">
          ${[[`Endpreis sofort.`,`Im Feed steht, was Du wirklich zahlst, nicht erst an der Kasse.`],[`Schutz nur auf Wunsch.`,`Kein vorangekreuztes Häkchen. Du entscheidest, ob Du ihn willst.`],[`Menschen im Streitfall.`,`Feste Antwortfrist, Begründung in eigenen Worten, Widerspruch so oft nötig.`]].map(([e,t])=>`<li class="py-4"><strong class="font-semibold">${e}</strong> <span class="text-mute">${t}</span></li>`).join(``)}
        </ul>
      </section>`),mount(){let n=`Alle`,i=``,a=document.getElementById(`feed`),o=()=>{let o=t.filter(e=>(n===`Alle`||e.cat===n)&&e.title.toLowerCase().includes(i));a.innerHTML=o.length?o.map((t,n)=>{let i=w(t);return`
              <a class="card stagger" style="--i:${n}" href="#/artikel/${t.id}" aria-label="${_(t.title)}, Größe ${t.size}, Du zahlst ${r(i.sum)}">
                ${S(t,`aspect-[4/5]`)}
                <div class="p-3 md:p-4">
                  <h2 class="text-lg leading-snug font-semibold">${_(t.title)}</h2>
                  <p class="text-sm text-mute">Größe ${t.size}</p>
                  <p class="mt-3 text-xs uppercase tracking-wide text-mute font-semibold">Du zahlst</p>
                  <p class="font-mono text-xl font-semibold">${r(i.sum)}</p>
                  <p class="font-mono text-xs text-mute">${r(t.price)} + ${r(i.ship)} Versand</p>
                  <div class="mt-3 pt-3 border-t border-dashed border-line">${C(e[t.seller])}</div>
                </div>
              </a>`}).join(``):`<p class="col-span-full py-10 text-mute">Dazu haben wir nichts gefunden. Versuch einen anderen Begriff.</p>`};document.getElementById(`go`).addEventListener(`click`,()=>document.getElementById(`feed-top`).scrollIntoView({behavior:`smooth`})),document.getElementById(`chips`).addEventListener(`click`,e=>{let t=e.target.closest(`button[data-cat]`);t&&(n=t.dataset.cat,document.querySelectorAll(`#chips .chip`).forEach(e=>e.setAttribute(`aria-pressed`,e===t)),o())}),document.getElementById(`q`).addEventListener(`input`,e=>{i=e.target.value.trim().toLowerCase(),o()}),o()}}}function k(t){let a=i(t);if(!a)return R();let o=e[a.seller];return b.protect[a.id]??=!1,{html:D(`
      ${E(`Alle Artikel`)}
      <div class="mt-2 grid md:grid-cols-2 gap-8 md:gap-14 items-start">
        ${S(a,`aspect-[4/5] rounded-2xl`)}
        <div>
          <p class="font-mono text-sm text-mute">${a.cat}, Größe ${a.size}</p>
          <h1 class="text-4xl md:text-5xl font-semibold mt-1">${_(a.title)}</h1>
          <div class="mt-3">${C(o)}</div>
          <p class="text-sm text-mute mt-1">${_(o.reply)}</p>
          <p class="mt-5 leading-relaxed max-w-[60ch]">${_(a.desc)}</p>

          <h2 class="sr-only">Dein Beleg</h2>
          <div class="mt-7" id="rc">${T(a)}</div>

          <div class="flex items-start gap-4 rounded-xl border border-line bg-slip p-4">
            <button id="sw" class="switch mt-0.5" role="switch" aria-checked="${b.protect[a.id]}" aria-labelledby="sw-l" aria-describedby="sw-d"></button>
            <div>
              <p id="sw-l" class="font-semibold">Käuferschutz hinzufügen <span class="font-mono font-normal text-mute">(+ ${r(n(a.price))})</span></p>
              <p id="sw-d" class="text-sm text-mute mt-1">Du bekommst Dein Geld zurück, wenn der Artikel nicht ankommt oder nicht zur Beschreibung passt. Probleme meldest Du bis 7 Tage nach Erhalt. Standardmäßig aus.</p>
            </div>
          </div>

          <div class="mt-6 grid gap-3 sm:grid-cols-2">
            <a href="#/kasse/${a.id}" class="btn btn-primary">Zur Kasse</a>
            <a href="#/chat/${a.id}" class="btn btn-ghost">Nachricht schreiben</a>
          </div>
        </div>
      </div>`),mount(){document.getElementById(`sw`).addEventListener(`click`,e=>{b.protect[a.id]=!b.protect[a.id],e.currentTarget.setAttribute(`aria-checked`,b.protect[a.id]),document.getElementById(`rc`).innerHTML=T(a)})}}}var A=[[`DHL Paket an die Haustür`,0],[`Abgabe im Paketshop`,-1]],j=`flex items-center gap-3 rounded-xl border border-line bg-slip p-3.5 cursor-pointer has-[:checked]:border-pine has-[:checked]:ring-2 has-[:checked]:ring-pine/25`;function M(e){let t=i(e);return t?(b.ship[t.id]??=t.ship,{html:D(`
      ${E(`Zurück zum Artikel`,`#/artikel/`+t.id)}
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
            ${A.map(([e,n],i)=>`<label class="${j} justify-between"><span class="flex items-center gap-3"><input type="radio" name="ship" value="${n}" ${i===0?`checked`:``} class="accent-pine w-5 h-5" />${e}</span><span class="font-mono text-sm">${r(t.ship+n)}</span></label>`).join(``)}
          </fieldset>
          <fieldset class="grid gap-2">
            <legend class="text-xl font-semibold mb-2">Bezahlen</legend>
            ${[`Karte`,`PayPal (Artikel und Dienstleistung)`,`Sofortüberweisung`].map((e,t)=>`<label class="${j}"><input type="radio" name="pay" value="${e}" ${t===0?`checked`:``} class="accent-pine w-5 h-5" />${e}</label>`).join(``)}
            <p class="text-sm text-mute mt-1">Dein Geld liegt bei Antrasi, bis Du den Erhalt bestätigst. Der Verkäufer bekommt es erst dann, spätestens nach 7 Tagen.</p>
          </fieldset>
        </div>

        <aside class="md:sticky md:top-24" aria-label="Zusammenfassung">
          <h2 class="text-xl font-semibold mb-3">${_(t.title)}</h2>
          <div id="rc">${T(t)}</div>
          <div class="flex items-center justify-between gap-3 rounded-xl border border-line bg-slip p-3.5 mt-3">
            <span class="text-sm">Käuferschutz <span class="font-mono text-mute" id="pt"></span></span>
            <button type="button" id="sw" class="switch" role="switch" aria-checked="${!!b.protect[t.id]}" aria-label="Käuferschutz hinzufügen"></button>
          </div>
          <p id="err" class="text-rust font-semibold mt-3" role="alert" hidden>Bitte fülle alle Adressfelder aus.</p>
          <button class="btn btn-primary w-full mt-4" type="submit">Jetzt bezahlen</button>
        </aside>
      </form>`),mount(){let e=document.getElementById(`f`),i=document.getElementById(`rc`),a=document.getElementById(`pt`),o=()=>{i.innerHTML=T(t),a.textContent=`(+ ${r(n(t.price))})`};o(),e.addEventListener(`change`,e=>{e.target.name===`ship`&&(b.ship[t.id]=t.ship+Number(e.target.value),o())}),document.getElementById(`sw`).addEventListener(`click`,e=>{b.protect[t.id]=!b.protect[t.id],e.currentTarget.setAttribute(`aria-checked`,b.protect[t.id]),o()}),e.addEventListener(`submit`,n=>{n.preventDefault();let r=Object.fromEntries(new FormData(e)),i=[`name`,`street`,`zip`,`city`].find(e=>!r[e]?.trim());i?(document.getElementById(`err`).hidden=!1,e.elements[i].focus()):(b.order={id:`AN-`+(48210+Math.floor(Math.random()*90)),itemId:t.id,addr:r,pay:r.pay,...w(t),protect:!!b.protect[t.id]},location.hash=`#/bestellung/`+t.id)})}}):R()}function N(t){let n=i(t),o=b.order;return!n||!o||o.itemId!==n.id?R(`Zu diesem Artikel gibt es noch keine Bestellung.`):{html:D(`
      <div class="max-w-xl mx-auto">
        <div class="flex items-center gap-3">
          <span class="grid place-items-center w-11 h-11 rounded-full bg-pine text-paper">${v(a,`w-6 h-6`)}</span>
          <h1 class="text-4xl font-semibold">Bestellt, danke!</h1>
        </div>
        <p class="mt-3 text-mute">Dein Geld liegt bei Antrasi. ${_(e[n.seller].name)} verschickt in den nächsten Tagen.</p>

        <div class="receipt mt-7">
          <p class="font-mono text-xs text-mute">BELEG ${o.id}</p>
          <h2 class="text-xl font-semibold mt-1">${_(n.title)}</h2>
          <div class="mt-3">
            <div class="receipt-row"><span>Artikel</span><span>${r(n.price)}</span></div>
            <div class="receipt-row"><span>Versand</span><span>${r(o.ship)}</span></div>
            <div class="receipt-row ${o.protect?``:`text-mute`}"><span>Käuferschutz</span><span>${o.protect?r(o.prot):`nicht gewählt`}</span></div>
            <div class="receipt-total"><span>Bezahlt</span><span class="sum">${r(o.sum)}</span></div>
          </div>
          <p class="mt-4 text-sm text-mute">Zahlart: ${_(o.pay)}<br>Lieferung an: ${_(o.addr.name)}, ${_(o.addr.street)}, ${_(o.addr.zip)} ${_(o.addr.city)}</p>
        </div>

        <ol class="mt-9" aria-label="Ablauf">
          <li class="step done"><span class="dot" aria-hidden="true">${v(a,`w-3 h-3`)}</span><strong>Bezahlt</strong><br><span class="text-mute text-sm">Das Geld liegt bei Antrasi.</span></li>
          <li class="step now" aria-current="step"><span class="dot" aria-hidden="true"></span><strong>Verkäufer versendet</strong><br><span class="text-mute text-sm">Spätestens in 3 Werktagen, sonst erstatten wir automatisch.</span></li>
          <li class="step"><span class="dot" aria-hidden="true"></span><strong>Du bestätigst den Erhalt</strong><br><span class="text-mute text-sm">Erst dann bekommt der Verkäufer sein Geld.</span></li>
        </ol>

        <div class="mt-6 grid sm:grid-cols-2 gap-3">
          <a class="btn btn-ghost" href="#/chat/${n.id}">Verkäufer schreiben</a>
          <a class="btn btn-ghost" href="#/streitfall/${n.id}">Problem melden</a>
        </div>
      </div>`)}}function P(t){let n=i(t);if(!n)return R();let a=e[n.seller];b.chats[n.id]??=[{from:`they`,text:`Hallo! Schau in Ruhe, bei Fragen schreib mir einfach.`}];let o=()=>{let e=document.getElementById(`msgs`);e.innerHTML=b.chats[n.id].map(e=>e.warn?`<div class="warn rise" role="alert"><p class="font-semibold text-rust flex items-center gap-2">${v(s,`w-5 h-5`)}Achtung: Zahlung außerhalb von Antrasi</p><p class="mt-1 text-sm">Wer Dich bittet, außerhalb der Plattform zu zahlen, will meist den Käuferschutz umgehen. Bei „Freunde und Familie“ oder per Überweisung ist Dein Geld nicht geschützt. <strong>Zahle nur über die Kasse.</strong></p><a class="inline-flex items-center min-h-11 text-sm font-semibold text-pine underline underline-offset-4" href="#/streitfall/${n.id}">Nachricht melden</a></div>`:`<div class="bubble ${e.from===`me`?`bubble-me`:`bubble-they`}"><span class="sr-only">${e.from===`me`?`Du`:_(a.name)}: </span>${_(e.text)}</div>`).join(``),e.scrollTop=e.scrollHeight},c=(e,t)=>{b.chats[n.id].push({from:e,text:t}),x.test(t)&&b.chats[n.id].push({warn:!0}),o()};return{html:D(`
      <div class="max-w-xl mx-auto">
        ${E(`Zurück zum Artikel`,`#/artikel/`+n.id)}
        <div class="mt-2 flex items-center gap-3 rounded-xl border border-line bg-slip p-3">
          <div class="w-14 h-16 rounded-lg shrink-0" style="background:linear-gradient(140deg,${n.a},${n.b})" aria-hidden="true"></div>
          <div class="min-w-0"><p class="font-semibold truncate">${_(n.title)}</p><p class="font-mono text-sm text-mute">${r(w(n).sum)} inkl. Versand</p></div>
        </div>
        <p class="mt-4 text-sm text-mute">Chat mit ${_(a.name)}, ${_(a.reply)}</p>
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
      </div>`),mount(){o(),document.getElementById(`cf`).addEventListener(`submit`,e=>{e.preventDefault();let t=document.getElementById(`ci`).value.trim();t&&(document.getElementById(`ci`).value=``,c(`me`,t))}),document.getElementById(`demo`).addEventListener(`click`,e=>{let t=e.target.closest(`button`);t&&(t.dataset.send&&(c(`me`,t.dataset.send),setTimeout(()=>c(`they`,`Ja, ist noch da. Ich verschicke gern ab morgen.`),600)),t.dataset.they&&c(`they`,t.dataset.they))})}}}var F=[[`Gemeldet`,`Wir haben Deine Meldung. Der Verkäufer wird informiert.`],[`Verkäufer antwortet`,`Er hat 48 Stunden Zeit. Danach geht der Fall automatisch weiter.`],[`Prüfung durch einen Menschen`,`Ein Mitarbeiter liest beide Seiten und die Belege. Keine Textbausteine.`],[`Entscheidung`,`Du bekommst eine Begründung in eigenen Worten.`]],I=[`Der Artikel ist nicht angekommen`,`Der Artikel entspricht nicht der Beschreibung`,`Der Artikel ist beschädigt`,`Verdacht auf Betrug oder Fälschung`];function L(e){let t=e?i(e):b.dispute?i(b.dispute.itemId):null,n=b.dispute;if(!n)return t?{html:D(`
        <div class="max-w-xl mx-auto">
          ${E(`Zurück`,`#/artikel/`+t.id)}
          <h1 class="text-4xl md:text-5xl font-semibold mt-2">Problem melden</h1>
          <p class="mt-3 text-mute">${_(t.title)}, ${r(w(t).sum)}. Nach dem Absenden siehst Du den Zeitplan Deines Falls.</p>
          <form id="df" class="mt-8 grid gap-6">
            <fieldset class="grid gap-2"><legend class="font-semibold mb-2">Was ist passiert?</legend>
              ${I.map((e,t)=>`<label class="${j}"><input type="radio" name="reason" value="${e}" ${t===0?`checked`:``} class="accent-pine w-5 h-5" />${e}</label>`).join(``)}
            </fieldset>
            <label class="grid gap-1.5"><span class="font-semibold">Beschreibe es kurz (optional)</span><textarea class="field" name="text" placeholder="Zum Beispiel: Reißverschluss defekt, siehe Foto"></textarea></label>
            <button class="btn btn-primary" type="submit">Meldung abschicken</button>
          </form>
        </div>`),mount(){document.getElementById(`df`).addEventListener(`submit`,e=>{e.preventDefault();let n=Object.fromEntries(new FormData(e.target));b.dispute={itemId:t.id,reason:n.reason,text:n.text,stage:0,appeals:0},z()})}}:{html:D(`<div class="max-w-xl mx-auto"><h1 class="text-4xl font-semibold">Meine Fälle</h1><p class="mt-3 text-mute">Du hast keine offenen Fälle. Stimmt bei einer Bestellung etwas nicht, findest Du dort „Problem melden“.</p><a class="btn btn-primary mt-6" href="#/">Zur Startseite</a></div>`)};let o=i(n.itemId),s=r(w(o).sum),c=n.stage===3,l=e=>e<n.stage||c&&e===3;return{html:D(`
      <div class="max-w-xl mx-auto">
        ${E(`Zurück zur Bestellung`,`#/bestellung/`+o.id)}
        <p class="font-mono text-sm text-mute mt-2">FALL ${b.order?.id??`AN-48211`}-S</p>
        <h1 class="text-4xl md:text-5xl font-semibold">${c?`Entscheidung liegt vor`:`Dein Fall ist in Bearbeitung`}</h1>
        <p class="mt-3 text-mute">${_(o.title)}, ${_(n.reason)}${n.text?`, „`+_(n.text)+`“`:``}</p>

        <ol class="mt-9" aria-label="Status Deines Falls">
          ${F.map(([e,t],r)=>`<li class="step ${l(r)?`done`:r===n.stage?`now`:``}" ${r===n.stage?`aria-current="step"`:``}><span class="dot" aria-hidden="true">${l(r)?v(a,`w-3 h-3`):``}</span><strong>${e}</strong><br><span class="text-mute text-sm">${t}</span></li>`).join(``)}
        </ol>

        ${c?`
        <div class="receipt rise" aria-live="polite">
          <p class="text-xl font-semibold">Erstattung zugesprochen</p>
          <p class="mt-1">Du bekommst <strong class="font-mono">${s}</strong> zurück, auf Deine Zahlart, in 1 bis 3 Werktagen.</p>
          <p class="mt-2 text-sm text-mute">Begründung: Der Verkäufer hat keinen Versandbeleg vorgelegt, die Sendung ließ sich nicht verfolgen.</p>
          ${n.appeals?`<p class="mt-2 text-sm font-semibold text-pine">Bisherige Widersprüche: ${n.appeals}. Jeden prüft eine andere Person.</p>`:``}
        </div>
        <div class="mt-5 grid sm:grid-cols-2 gap-3">
          <button class="btn btn-ghost" id="ap">Widerspruch einlegen</button>
          <a class="btn btn-primary" href="#/">Fertig</a>
        </div>
        <p class="mt-3 text-sm text-mute">Widersprechen kannst Du, so oft Du neue Argumente hast.</p>`:`<div class="grid sm:grid-cols-2 gap-3">
          <button class="btn btn-primary" id="adv">Demo: Zeit vorspulen</button>
          <a class="btn btn-ghost" href="#/chat/${o.id}">Zum Chat</a>
        </div>
        <p class="mt-3 text-sm text-mute">Im echten Betrieb vergeht die Zeit von selbst. Hier springst Du zum nächsten Schritt.</p>`}
      </div>`),mount(){document.getElementById(`adv`)?.addEventListener(`click`,()=>{n.stage=Math.min(3,n.stage+1),z()}),document.getElementById(`ap`)?.addEventListener(`click`,()=>{n.appeals++,n.stage=2,z()})}}}function R(e=`Diese Seite gibt es nicht.`){return{html:D(`<div class="max-w-xl mx-auto"><h1 class="text-4xl font-semibold">Hier ist nichts</h1><p class="mt-3 text-mute">${e}</p><a class="btn btn-primary mt-6" href="#/">Zur Startseite</a></div>`)}}function z(){let[e=``,t]=location.hash.replace(/^#\/?/,``).split(`/`),n={"":O,artikel:()=>k(t),kasse:()=>M(t),bestellung:()=>N(t),chat:()=>P(t),streitfall:()=>L(t)}[e]?.()??R();g.innerHTML=n.html,n.mount?.(),window.scrollTo(0,0)}window.addEventListener(`hashchange`,z),z();