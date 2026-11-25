// Beispieldaten für den Prototyp. Alles erfunden, keine echten Personen, Marken oder Fotos.
export const sellers = {
  mara: { name: 'Mara K.', rating: 4.9, count: 212, reply: 'antwortet in ca. 1 Std.', verified: true },
  jonas: { name: 'Jonas P.', rating: 4.7, count: 58, reply: 'antwortet in ca. 3 Std.', verified: true },
  lena: { name: 'Lena S.', rating: 4.2, count: 9, reply: 'antwortet in ca. 1 Tag', verified: false },
  tim: { name: 'Tim R.', rating: 5.0, count: 131, reply: 'antwortet in ca. 2 Std.', verified: true },
}

export const items = [
  { id: 1, title: 'Wollmantel, camel', cat: 'Damen', size: 'M', cond: 'Sehr gut', price: 28, ship: 3.95, seller: 'mara', a: '#C9B99A', b: '#8E7B5C', desc: 'Schwerer Wollmantel, zweireihig, Innenfutter ohne Flecken. Länge 108 cm. Nichtraucherhaushalt.' },
  { id: 2, title: 'Slim Jeans, dunkelblau', cat: 'Herren', size: '32/32', cond: 'Gut', price: 15, ship: 3.95, seller: 'jonas', a: '#5B6F8F', b: '#2D3A52', desc: 'Dunkelblaue Slim Jeans, leichte Gebrauchsspuren am Saum (Foto 3). Stretch-Anteil 2 %.' },
  { id: 3, title: 'Strickjacke mit Knöpfen', cat: 'Damen', size: 'S', cond: 'Sehr gut', price: 18, ship: 2.95, seller: 'mara', a: '#9DB39A', b: '#5C7A60', desc: 'Weiche Strickjacke aus Baumwollmix, kaum getragen. Waschbar bei 30 Grad.' },
  { id: 4, title: 'Winterjacke, gesteppt', cat: 'Herren', size: 'L', cond: 'Gut', price: 45, ship: 4.99, seller: 'tim', a: '#3E5C76', b: '#1D2D44', desc: 'Warm gefüttert, wasserabweisend, Kapuze abnehmbar. Reißverschluss einwandfrei.' },
  { id: 5, title: 'Kinder-Regenjacke, gelb', cat: 'Kinder', size: '116', cond: 'Sehr gut', price: 9, ship: 2.95, seller: 'lena', a: '#F0D26B', b: '#D3A82C', desc: 'Gelbe Regenjacke mit Reflektoren. Einmal gewaschen, passt für 5 bis 6 Jahre.' },
  { id: 6, title: 'Lederstiefeletten, schwarz', cat: 'Schuhe', size: '39', cond: 'Gut', price: 34, ship: 4.99, seller: 'jonas', a: '#4A4A48', b: '#161616', desc: 'Echtleder, Absatz 4 cm, neu besohlt. Leichte Falten am Schaft.' },
  { id: 7, title: 'Pullover, Norweger-Muster', cat: 'Herren', size: 'M', cond: 'Neu mit Etikett', price: 24, ship: 3.95, seller: 'tim', a: '#B5524A', b: '#7A2E2A', desc: 'Nie getragen, Etikett dran. Wolle, handwaschbar.' },
  { id: 8, title: 'Sneaker, weiß', cat: 'Schuhe', size: '42', cond: 'Sehr gut', price: 29, ship: 4.99, seller: 'lena', a: '#E6E2D8', b: '#B9B3A3', desc: 'Weiße Leder-Sneaker, einmal gereinigt. Sohle mit leichten Gebrauchsspuren.' },
]

// Käuferschutz: 0,70 € + 5 % des Artikelpreises, nur auf Wunsch.
export const protection = (price) => Math.round((0.7 + price * 0.05) * 100) / 100

export const eur = (n) => n.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })

export const getItem = (id) => items.find((i) => i.id === Number(id))
