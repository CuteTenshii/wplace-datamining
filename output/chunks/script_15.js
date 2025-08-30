var H = Object.defineProperty;
var q = t => {
  throw TypeError(t)
};
var V = (t, e, a) => e in t ? H(t, e, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: a
}) : t[e] = a;
var u = (t, e, a) => V(t, typeof e != "symbol" ? e + "" : e, a),
  z = (t, e, a) => e.has(t) || q("Cannot " + a);
var d = (t, e, a) => (z(t, e, "read from private field"), a ? a.call(t) : e.get(t)),
  m = (t, e, a) => e.has(t) ? q("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, a);
import {
  aH as G,
  aI as b,
  g as f,
  aJ as p,
  z as R,
  u as B
} from "./B6s--CY1.js";
import {
  g as s
} from "./C5GsJ62f.js";
const mt = "https://backend.wplace.live/files",
  gt = "0x4AAAAAABpHqZ-6i7uL0nmG",
  Y = "https://backend.wplace.live",
  ft = "0x4AAAAAABpqJe8FO0N84q0F";
let K = G({
  dropletsDialogOpen: !1,
  muted: !1,
  language: Z(),
  captcha: void 0,
  now: Date.now(),
  turnstatileLoaded: !1
});
setInterval(() => {
  K.now = Date.now()
}, 500);

function Z() {
  if (navigator.languages && navigator.languages.length > 0) {
    const t = navigator.languages.find(e => e.length === 2);
    if (t) return t
  }
  return (navigator.language || navigator.userLanguage || navigator.browserLanguage || "en").substring(0, 2)
}
const W = () => "Unexpected server error. Try again later.",
  Q = () => "Erro inesperado do servidor. Tente novamente mais tarde.",
  o = (t = {}, e = {}) => (e.locale ?? s()) === "en" ? W() : Q(),
  X = () => "You need to be logged in to paint",
  ee = () => "Você precisa estar conectado para pintar",
  ae = (t = {}, e = {}) => (e.locale ?? s()) === "en" ? X() : ee(),
  te = () => "You do not have enough charges to paint. Erase some pixels.",
  ne = () => "Você não possui tinta suficiente para pintar. Apague alguns pixeis.",
  re = (t = {}, e = {}) => (e.locale ?? s()) === "en" ? te() : ne(),
  oe = t => `Error while painting: ${t.err}`,
  se = t => `Erro enquanto pinta: ${t.err}`,
  ie = (t, e = {}) => (e.locale ?? s()) === "en" ? oe(t) : se(t),
  le = () => "Invalid phone number",
  ce = () => "Número de telefone inválido",
  de = (t = {}, e = {}) => (e.locale ?? s()) === "en" ? le() : ce(),
  ue = () => "Phone already used",
  me = () => "Telefone já usado",
  ge = (t = {}, e = {}) => (e.locale ?? s()) === "en" ? ue() : me(),
  fe = () => "You have to wait to resend a code",
  he = () => "Você tem de esperar para reenviar um código",
  _e = (t = {}, e = {}) => (e.locale ?? s()) === "en" ? fe() : he(),
  pe = () => "Invalid code",
  we = () => "Código inválido",
  ye = (t = {}, e = {}) => (e.locale ?? s()) === "en" ? pe() : we(),
  be = () => "Operation not allowed. Maybe you have too many favorite locations.",
  Se = () => "Operação não permitida. Talvez você tenha muitos locais favoritos.",
  ve = (t = {}, e = {}) => (e.locale ?? s()) === "en" ? be() : Se(),
  Ee = () => "Location name is too big (max. 128 characters)",
  Te = () => "Nome da localização é grande demais (max. 128 caracteres)",
  Pe = (t = {}, e = {}) => (e.locale ?? s()) === "en" ? Ee() : Te(),
  Me = () => "Couldn't complete the purchase. This item does not exist.",
  Ie = () => "Não foi possível concluir a compra. Este item não existe.",
  Ae = (t = {}, e = {}) => (e.locale ?? s()) === "en" ? Me() : Ie(),
  Ce = () => "You do not have enough droplets to buy this item.",
  Oe = () => "Você não tem gotas suficientes para comprar este item.",
  ke = (t = {}, e = {}) => (e.locale ?? s()) === "en" ? Ce() : Oe(),
  xe = () => "You already have this item. Please refresh the page.",
  Be = () => "Você já possui este item. Atualize a página.",
  De = (t = {}, e = {}) => (e.locale ?? s()) === "en" ? xe() : Be(),
  Le = () => "Alliance name exceeded the maximum number of characters",
  Ne = () => "O nome da aliança excedeu o número máximo de caracteres",
  Ge = (t = {}, e = {}) => (e.locale ?? s()) === "en" ? Le() : Ne(),
  qe = () => "Alliance name already taken",
  Re = () => "Já possui uma aliança com esse nome",
  Ue = (t = {}, e = {}) => (e.locale ?? s()) === "en" ? qe() : Re(),
  je = () => "Alliance with empty name",
  Fe = () => "Aliança com nome vazio",
  Ke = (t = {}, e = {}) => (e.locale ?? s()) === "en" ? je() : Fe(),
  $e = () => "You are already in an alliance",
  Je = () => "Você já está em uma aliança",
  He = (t = {}, e = {}) => (e.locale ?? s()) === "en" ? $e() : Je(),
  Ve = () => "You are not allowed to do this",
  ze = () => "Você não tem permissão para fazer isso",
  w = (t = {}, e = {}) => (e.locale ?? s()) === "en" ? Ve() : ze(),
  Ye = () => "Can't reach the server. Maybe you are without internet connection or the server is down. Try again later",
  Ze = () => "Não é possível acessar o servidor. Talvez você esteja sem conexão com a internet ou o servidor esteja fora do ar. Tente novamente mais tarde.",
  We = (t = {}, e = {}) => (e.locale ?? s()) === "en" ? Ye() : Ze(),
  Qe = () => "You or someone in your network is making a lot of requests to the server. Try again later.",
  Xe = () => "Você ou alguém na sua rede está fazendo muitas solicitações ao servidor. Tente novamente mais tarde.",
  ea = (t = {}, e = {}) => (e.locale ?? s()) === "en" ? Qe() : Xe(),
  aa = () => "No internet access or the servers are offline. Try again later.",
  ta = () => "Sem acesso à internet ou os servidores estão fora do ar. Tente novamente mais tarde.",
  na = (t = {}, e = {}) => (e.locale ?? s()) === "en" ? aa() : ta(),
  ra = () => "We’re currently experiencing high traffic. Some requests may not be processed at this time—please try again later. Thank you for your patience.",
  oa = () => "Estamos enfrentando um volume alto de acessos no momento. Algumas solicitações podem não ser processadas agora — por favor, tente novamente mais tarde. Agradecemos a sua compreensão.",
  sa = (t = {}, e = {}) => (e.locale ?? s()) === "en" ? ra() : oa(),
  ia = () => "Refresh your page to get the latest update",
  la = () => "Recarregue sua página para obter as últimas atualizações",
  ca = (t = {}, e = {}) => (e.locale ?? s()) === "en" ? ia() : la(),
  da = () => "Inappropriate content",
  ua = () => "Conteúdo inapropriado",
  ma = (t = {}, e = {}) => (e.locale ?? s()) === "en" ? da() : ua(),
  ga = () => "Botting",
  fa = () => "Uso de bots",
  ha = (t = {}, e = {}) => (e.locale ?? s()) === "en" ? ga() : fa(),
  _a = () => "Hate speech",
  pa = () => "Discurso de Ódio",
  wa = (t = {}, e = {}) => (e.locale ?? s()) === "en" ? _a() : pa(),
  ya = () => "Griefing",
  ba = () => "Griefing",
  Sa = (t = {}, e = {}) => (e.locale ?? s()) === "en" ? ya() : ba(),
  va = () => "Doxxing",
  Ea = () => "Doxxing",
  Ta = (t = {}, e = {}) => (e.locale ?? s()) === "en" ? va() : Ea(),
  Pa = () => "Leaderboard is temporarily disabled",
  Ma = () => "O ranking está temporariamente desativado",
  y = (t = {}, e = {}) => (e.locale ?? s()) === "en" ? Pa() : Ma(),
  Ia = () => "Multi-accounting",
  Aa = () => "Múltiplas contas",
  Ca = (t = {}, e = {}) => (e.locale ?? s()) === "en" ? Ia() : Aa(),
  Oa = () => "Your account has been banned.",
  ka = () => "Sua conta foi banida.",
  xa = (t = {}, e = {}) => (e.locale ?? s()) === "en" ? Oa() : ka(),
  Ba = t => `Your account has been suspended until ${t.until}.`,
  Da = t => `Sua conta foi suspensa até ${t.until}.`,
  La = (t, e = {}) => (e.locale ?? s()) === "en" ? Ba(t) : Da(t),
  Na = () => "Breaking the rules",
  Ga = () => "Quebrar as regras",
  qa = (t = {}, e = {}) => (e.locale ?? s()) === "en" ? Na() : Ga(),
  Ra = () => "Your account has been suspended for breaking the rules",
  Ua = () => "Sua conta foi suspensa por quebrar as regras",
  ja = (t = {}, e = {}) => (e.locale ?? s()) === "en" ? Ra() : Ua(),
  ht = {
    griefing: Sa(),
    "multi-accounting": Ca(),
    "hate-speech": wa(),
    bot: ha(),
    doxxing: Ta(),
    "inappropriate-content": ma(),
    other: qa()
  },
  _t = {
    doxxing: "text-red-600",
    "hate-speech": "text-red-600",
    "inappropriate-content": "text-amber-600",
    "multi-accounting": "text-amber-600",
    bot: "text-amber-600",
    griefing: "text-amber-600",
    other: "text-blue-600"
  },
  U = {
    doxxing: 0,
    "hate-speech": 1,
    "inappropriate-content": 2,
    bot: 3,
    "multi-accounting": 4,
    griefing: 5,
    other: 6
  };
class _ extends Error {
  constructor(e, a) {
    super(e), this.message = e, this.status = a
  }
}

function Fa(t, e) {
  const a = {};
  for (const n of t) {
    const l = e(n);
    let i = a[l];
    i ? i.push(n) : a[l] = [n]
  }
  return a
}
const Ka = [{
    tileSize: 1e3,
    zoom: 11
  }],
  $a = 4,
  Ja = 6e3,
  Ha = [{
    name: "Transparent",
    rgb: [0, 0, 0]
  }, {
    name: "Black",
    rgb: [0, 0, 0]
  }, {
    name: "Dark Gray",
    rgb: [60, 60, 60]
  }, {
    name: "Gray",
    rgb: [120, 120, 120]
  }, {
    name: "Light Gray",
    rgb: [210, 210, 210]
  }, {
    name: "White",
    rgb: [255, 255, 255]
  }, {
    name: "Deep Red",
    rgb: [96, 0, 24]
  }, {
    name: "Red",
    rgb: [237, 28, 36]
  }, {
    name: "Orange",
    rgb: [255, 127, 39]
  }, {
    name: "Gold",
    rgb: [246, 170, 9]
  }, {
    name: "Yellow",
    rgb: [249, 221, 59]
  }, {
    name: "Light Yellow",
    rgb: [255, 250, 188]
  }, {
    name: "Dark Green",
    rgb: [14, 185, 104]
  }, {
    name: "Green",
    rgb: [19, 230, 123]
  }, {
    name: "Light Green",
    rgb: [135, 255, 94]
  }, {
    name: "Dark Teal",
    rgb: [12, 129, 110]
  }, {
    name: "Teal",
    rgb: [16, 174, 166]
  }, {
    name: "Light Teal",
    rgb: [19, 225, 190]
  }, {
    name: "Dark Blue",
    rgb: [40, 80, 158]
  }, {
    name: "Blue",
    rgb: [64, 147, 228]
  }, {
    name: "Cyan",
    rgb: [96, 247, 242]
  }, {
    name: "Indigo",
    rgb: [107, 80, 246]
  }, {
    name: "Light Indigo",
    rgb: [153, 177, 251]
  }, {
    name: "Dark Purple",
    rgb: [120, 12, 153]
  }, {
    name: "Purple",
    rgb: [170, 56, 185]
  }, {
    name: "Light Purple",
    rgb: [224, 159, 249]
  }, {
    name: "Dark Pink",
    rgb: [203, 0, 122]
  }, {
    name: "Pink",
    rgb: [236, 31, 128]
  }, {
    name: "Light Pink",
    rgb: [243, 141, 169]
  }, {
    name: "Dark Brown",
    rgb: [104, 70, 52]
  }, {
    name: "Brown",
    rgb: [149, 104, 42]
  }, {
    name: "Beige",
    rgb: [248, 178, 119]
  }, {
    name: "Medium Gray",
    rgb: [170, 170, 170]
  }, {
    name: "Dark Red",
    rgb: [165, 14, 30]
  }, {
    name: "Light Red",
    rgb: [250, 128, 114]
  }, {
    name: "Dark Orange",
    rgb: [228, 92, 26]
  }, {
    name: "Light Tan",
    rgb: [214, 181, 148]
  }, {
    name: "Dark Goldenrod",
    rgb: [156, 132, 49]
  }, {
    name: "Goldenrod",
    rgb: [197, 173, 49]
  }, {
    name: "Light Goldenrod",
    rgb: [232, 212, 95]
  }, {
    name: "Dark Olive",
    rgb: [74, 107, 58]
  }, {
    name: "Olive",
    rgb: [90, 148, 74]
  }, {
    name: "Light Olive",
    rgb: [132, 197, 115]
  }, {
    name: "Dark Cyan",
    rgb: [15, 121, 159]
  }, {
    name: "Light Cyan",
    rgb: [187, 250, 242]
  }, {
    name: "Light Blue",
    rgb: [125, 199, 255]
  }, {
    name: "Dark Indigo",
    rgb: [77, 49, 184]
  }, {
    name: "Dark Slate Blue",
    rgb: [74, 66, 132]
  }, {
    name: "Slate Blue",
    rgb: [122, 113, 196]
  }, {
    name: "Light Slate Blue",
    rgb: [181, 174, 241]
  }, {
    name: "Light Brown",
    rgb: [219, 164, 99]
  }, {
    name: "Dark Beige",
    rgb: [209, 128, 81]
  }, {
    name: "Light Beige",
    rgb: [255, 197, 165]
  }, {
    name: "Dark Peach",
    rgb: [155, 82, 73]
  }, {
    name: "Peach",
    rgb: [209, 128, 120]
  }, {
    name: "Light Peach",
    rgb: [250, 182, 164]
  }, {
    name: "Dark Tan",
    rgb: [123, 99, 82]
  }, {
    name: "Tan",
    rgb: [156, 132, 107]
  }, {
    name: "Dark Slate",
    rgb: [51, 57, 65]
  }, {
    name: "Slate",
    rgb: [109, 117, 141]
  }, {
    name: "Light Slate",
    rgb: [179, 185, 209]
  }, {
    name: "Dark Stone",
    rgb: [109, 100, 63]
  }, {
    name: "Stone",
    rgb: [148, 140, 107]
  }, {
    name: "Light Stone",
    rgb: [205, 197, 158]
  }],
  Va = {
    needsPhoneVerification: "needs_phone_verification"
  },
  za = {
    Droplet: {},
    "Max. Charge": {},
    "Paint Charge": {},
    Color: {},
    Flag: {},
    "Profile Picture": {}
  },
  Ya = {
    10: {
      name: "25,000 Droplets",
      price: 500,
      isDollar: !0,
      lookupKey: "droplets_5",
      items: [{
        name: "Droplet",
        amount: 25e3
      }]
    },
    20: {
      name: "78,750 Droplets",
      price: 1500,
      isDollar: !0,
      lookupKey: "droplets_15",
      items: [{
        name: "Droplet",
        amount: 76750
      }]
    },
    30: {
      name: "165,000 Droplets",
      price: 3e3,
      isDollar: !0,
      lookupKey: "droplets_30",
      items: [{
        name: "Droplet",
        amount: 165e3
      }]
    },
    40: {
      name: "287,500 Droplets",
      price: 5e3,
      isDollar: !0,
      lookupKey: "droplets_50",
      items: [{
        name: "Droplet",
        amount: 287500
      }]
    },
    50: {
      name: "450,000 Droplets",
      price: 7500,
      isDollar: !0,
      lookupKey: "droplets_75",
      items: [{
        name: "Droplet",
        amount: 45e4
      }]
    },
    60: {
      name: "625,000 Droplets",
      price: 1e4,
      isDollar: !0,
      lookupKey: "droplets_100",
      items: [{
        name: "Droplet",
        amount: 625e3
      }]
    },
    70: {
      name: "+5 Max. Charges",
      price: 500,
      isDollar: !1,
      items: [{
        name: "Max. Charge",
        amount: 5
      }]
    },
    80: {
      name: "+30 Paint Charges",
      price: 500,
      isDollar: !1,
      items: [{
        name: "Paint Charge",
        amount: 30
      }]
    },
    100: {
      name: "Unlock Color",
      price: 2e3,
      isDollar: !1,
      items: [{
        name: "Color",
        amount: 1
      }]
    },
    110: {
      name: "Flag",
      price: 2e4,
      isDollar: !1,
      items: [{
        name: "Flag",
        amount: 1
      }]
    },
    120: {
      name: "Profile Picture",
      price: 2e4,
      isDollar: !1,
      items: [{
        name: "Profile Picture",
        amount: 1
      }]
    }
  },
  Za = JSON.parse(`[{"id":1,"name":"Afghanistan","code":"AF","flag":"🇦🇫"},{"id":2,"name":"Albania","code":"AL","flag":"🇦🇱"},{"id":3,"name":"Algeria","code":"DZ","flag":"🇩🇿"},{"id":4,"name":"American Samoa","code":"AS","flag":"🇦🇸"},{"id":5,"name":"Andorra","code":"AD","flag":"🇦🇩"},{"id":6,"name":"Angola","code":"AO","flag":"🇦🇴"},{"id":7,"name":"Anguilla","code":"AI","flag":"🇦🇮"},{"id":8,"name":"Antarctica","code":"AQ","flag":"🇦🇶"},{"id":9,"name":"Antigua and Barbuda","code":"AG","flag":"🇦🇬"},{"id":10,"name":"Argentina","code":"AR","flag":"🇦🇷"},{"id":11,"name":"Armenia","code":"AM","flag":"🇦🇲"},{"id":12,"name":"Aruba","code":"AW","flag":"🇦🇼"},{"id":13,"name":"Australia","code":"AU","flag":"🇦🇺"},{"id":14,"name":"Austria","code":"AT","flag":"🇦🇹"},{"id":15,"name":"Azerbaijan","code":"AZ","flag":"🇦🇿"},{"id":16,"name":"Bahamas","code":"BS","flag":"🇧🇸"},{"id":17,"name":"Bahrain","code":"BH","flag":"🇧🇭"},{"id":18,"name":"Bangladesh","code":"BD","flag":"🇧🇩"},{"id":19,"name":"Barbados","code":"BB","flag":"🇧🇧"},{"id":20,"name":"Belarus","code":"BY","flag":"🇧🇾"},{"id":21,"name":"Belgium","code":"BE","flag":"🇧🇪"},{"id":22,"name":"Belize","code":"BZ","flag":"🇧🇿"},{"id":23,"name":"Benin","code":"BJ","flag":"🇧🇯"},{"id":24,"name":"Bermuda","code":"BM","flag":"🇧🇲"},{"id":25,"name":"Bhutan","code":"BT","flag":"🇧🇹"},{"id":26,"name":"Bolivia","code":"BO","flag":"🇧🇴"},{"id":27,"name":"Bonaire","code":"BQ","flag":"🇧🇶"},{"id":28,"name":"Bosnia and Herzegovina","code":"BA","flag":"🇧🇦"},{"id":29,"name":"Botswana","code":"BW","flag":"🇧🇼"},{"id":30,"name":"Bouvet Island","code":"BV","flag":"🇧🇻"},{"id":31,"name":"Brazil","code":"BR","flag":"🇧🇷"},{"id":32,"name":"British Indian Ocean Territory","code":"IO","flag":"🇮🇴"},{"id":33,"name":"Brunei Darussalam","code":"BN","flag":"🇧🇳"},{"id":34,"name":"Bulgaria","code":"BG","flag":"🇧🇬"},{"id":35,"name":"Burkina Faso","code":"BF","flag":"🇧🇫"},{"id":36,"name":"Burundi","code":"BI","flag":"🇧🇮"},{"id":37,"name":"Cabo Verde","code":"CV","flag":"🇨🇻"},{"id":38,"name":"Cambodia","code":"KH","flag":"🇰🇭"},{"id":39,"name":"Cameroon","code":"CM","flag":"🇨🇲"},{"id":40,"name":"Canada","code":"CA","flag":"🇨🇦"},{"id":41,"name":"Cayman Islands","code":"KY","flag":"🇰🇾"},{"id":42,"name":"Central African Republic","code":"CF","flag":"🇨🇫"},{"id":43,"name":"Chad","code":"TD","flag":"🇹🇩"},{"id":44,"name":"Chile","code":"CL","flag":"🇨🇱"},{"id":45,"name":"China","code":"CN","flag":"🇨🇳"},{"id":46,"name":"Christmas Island","code":"CX","flag":"🇨🇽"},{"id":47,"name":"Cocos (Keeling) Islands","code":"CC","flag":"🇨🇨"},{"id":48,"name":"Colombia","code":"CO","flag":"🇨🇴"},{"id":49,"name":"Comoros","code":"KM","flag":"🇰🇲"},{"id":50,"name":"Congo","code":"CG","flag":"🇨🇬"},{"id":51,"name":"Cook Islands","code":"CK","flag":"🇨🇰"},{"id":52,"name":"Costa Rica","code":"CR","flag":"🇨🇷"},{"id":53,"name":"Croatia","code":"HR","flag":"🇭🇷"},{"id":54,"name":"Cuba","code":"CU","flag":"🇨🇺"},{"id":55,"name":"Curaçao","code":"CW","flag":"🇨🇼"},{"id":56,"name":"Cyprus","code":"CY","flag":"🇨🇾"},{"id":57,"name":"Czechia","code":"CZ","flag":"🇨🇿"},{"id":58,"name":"Côte d'Ivoire","code":"CI","flag":"🇨🇮"},{"id":59,"name":"Denmark","code":"DK","flag":"🇩🇰"},{"id":60,"name":"Djibouti","code":"DJ","flag":"🇩🇯"},{"id":61,"name":"Dominica","code":"DM","flag":"🇩🇲"},{"id":62,"name":"Dominican Republic","code":"DO","flag":"🇩🇴"},{"id":63,"name":"Ecuador","code":"EC","flag":"🇪🇨"},{"id":64,"name":"Egypt","code":"EG","flag":"🇪🇬"},{"id":65,"name":"El Salvador","code":"SV","flag":"🇸🇻"},{"id":66,"name":"Equatorial Guinea","code":"GQ","flag":"🇬🇶"},{"id":67,"name":"Eritrea","code":"ER","flag":"🇪🇷"},{"id":68,"name":"Estonia","code":"EE","flag":"🇪🇪"},{"id":69,"name":"Eswatini","code":"SZ","flag":"🇸🇿"},{"id":70,"name":"Ethiopia","code":"ET","flag":"🇪🇹"},{"id":71,"name":"Falkland Islands (Malvinas)","code":"FK","flag":"🇫🇰"},{"id":72,"name":"Faroe Islands","code":"FO","flag":"🇫🇴"},{"id":73,"name":"Fiji","code":"FJ","flag":"🇫🇯"},{"id":74,"name":"Finland","code":"FI","flag":"🇫🇮"},{"id":75,"name":"France","code":"FR","flag":"🇫🇷"},{"id":76,"name":"French Guiana","code":"GF","flag":"🇬🇫"},{"id":77,"name":"French Polynesia","code":"PF","flag":"🇵🇫"},{"id":78,"name":"French Southern Territories","code":"TF","flag":"🇹🇫"},{"id":79,"name":"Gabon","code":"GA","flag":"🇬🇦"},{"id":80,"name":"Gambia","code":"GM","flag":"🇬🇲"},{"id":81,"name":"Georgia","code":"GE","flag":"🇬🇪"},{"id":82,"name":"Germany","code":"DE","flag":"🇩🇪"},{"id":83,"name":"Ghana","code":"GH","flag":"🇬🇭"},{"id":84,"name":"Gibraltar","code":"GI","flag":"🇬🇮"},{"id":85,"name":"Greece","code":"GR","flag":"🇬🇷"},{"id":86,"name":"Greenland","code":"GL","flag":"🇬🇱"},{"id":87,"name":"Grenada","code":"GD","flag":"🇬🇩"},{"id":88,"name":"Guadeloupe","code":"GP","flag":"🇬🇵"},{"id":89,"name":"Guam","code":"GU","flag":"🇬🇺"},{"id":90,"name":"Guatemala","code":"GT","flag":"🇬🇹"},{"id":91,"name":"Guernsey","code":"GG","flag":"🇬🇬"},{"id":92,"name":"Guinea","code":"GN","flag":"🇬🇳"},{"id":93,"name":"Guinea-Bissau","code":"GW","flag":"🇬🇼"},{"id":94,"name":"Guyana","code":"GY","flag":"🇬🇾"},{"id":95,"name":"Haiti","code":"HT","flag":"🇭🇹"},{"id":96,"name":"Heard Island and McDonald Islands","code":"HM","flag":"🇭🇲"},{"id":97,"name":"Honduras","code":"HN","flag":"🇭🇳"},{"id":98,"name":"Hong Kong","code":"HK","flag":"🇭🇰"},{"id":99,"name":"Hungary","code":"HU","flag":"🇭🇺"},{"id":100,"name":"Iceland","code":"IS","flag":"🇮🇸"},{"id":101,"name":"India","code":"IN","flag":"🇮🇳"},{"id":102,"name":"Indonesia","code":"ID","flag":"🇮🇩"},{"id":103,"name":"Iran","code":"IR","flag":"🇮🇷"},{"id":104,"name":"Iraq","code":"IQ","flag":"🇮🇶"},{"id":105,"name":"Ireland","code":"IE","flag":"🇮🇪"},{"id":106,"name":"Isle of Man","code":"IM","flag":"🇮🇲"},{"id":107,"name":"Israel","code":"IL","flag":"🇮🇱"},{"id":108,"name":"Italy","code":"IT","flag":"🇮🇹"},{"id":109,"name":"Jamaica","code":"JM","flag":"🇯🇲"},{"id":110,"name":"Japan","code":"JP","flag":"🇯🇵"},{"id":111,"name":"Jersey","code":"JE","flag":"🇯🇪"},{"id":112,"name":"Jordan","code":"JO","flag":"🇯🇴"},{"id":113,"name":"Kazakhstan","code":"KZ","flag":"🇰🇿"},{"id":114,"name":"Kenya","code":"KE","flag":"🇰🇪"},{"id":115,"name":"Kiribati","code":"KI","flag":"🇰🇮"},{"id":116,"name":"Kosovo","code":"XK","flag":"🇽🇰"},{"id":117,"name":"Kuwait","code":"KW","flag":"🇰🇼"},{"id":118,"name":"Kyrgyzstan","code":"KG","flag":"🇰🇬"},{"id":119,"name":"Laos","code":"LA","flag":"🇱🇦"},{"id":120,"name":"Latvia","code":"LV","flag":"🇱🇻"},{"id":121,"name":"Lebanon","code":"LB","flag":"🇱🇧"},{"id":122,"name":"Lesotho","code":"LS","flag":"🇱🇸"},{"id":123,"name":"Liberia","code":"LR","flag":"🇱🇷"},{"id":124,"name":"Libya","code":"LY","flag":"🇱🇾"},{"id":125,"name":"Liechtenstein","code":"LI","flag":"🇱🇮"},{"id":126,"name":"Lithuania","code":"LT","flag":"🇱🇹"},{"id":127,"name":"Luxembourg","code":"LU","flag":"🇱🇺"},{"id":128,"name":"Macao","code":"MO","flag":"🇲🇴"},{"id":129,"name":"Madagascar","code":"MG","flag":"🇲🇬"},{"id":130,"name":"Malawi","code":"MW","flag":"🇲🇼"},{"id":131,"name":"Malaysia","code":"MY","flag":"🇲🇾"},{"id":132,"name":"Maldives","code":"MV","flag":"🇲🇻"},{"id":133,"name":"Mali","code":"ML","flag":"🇲🇱"},{"id":134,"name":"Malta","code":"MT","flag":"🇲🇹"},{"id":135,"name":"Marshall Islands","code":"MH","flag":"🇲🇭"},{"id":136,"name":"Martinique","code":"MQ","flag":"🇲🇶"},{"id":137,"name":"Mauritania","code":"MR","flag":"🇲🇷"},{"id":138,"name":"Mauritius","code":"MU","flag":"🇲🇺"},{"id":139,"name":"Mayotte","code":"YT","flag":"🇾🇹"},{"id":140,"name":"Mexico","code":"MX","flag":"🇲🇽"},{"id":141,"name":"Micronesia","code":"FM","flag":"🇫🇲"},{"id":142,"name":"Moldova","code":"MD","flag":"🇲🇩"},{"id":143,"name":"Monaco","code":"MC","flag":"🇲🇨"},{"id":144,"name":"Mongolia","code":"MN","flag":"🇲🇳"},{"id":145,"name":"Montenegro","code":"ME","flag":"🇲🇪"},{"id":146,"name":"Montserrat","code":"MS","flag":"🇲🇸"},{"id":147,"name":"Morocco","code":"MA","flag":"🇲🇦"},{"id":148,"name":"Mozambique","code":"MZ","flag":"🇲🇿"},{"id":149,"name":"Myanmar","code":"MM","flag":"🇲🇲"},{"id":150,"name":"Namibia","code":"NA","flag":"🇳🇦"},{"id":151,"name":"Nauru","code":"NR","flag":"🇳🇷"},{"id":152,"name":"Nepal","code":"NP","flag":"🇳🇵"},{"id":153,"name":"Netherlands","code":"NL","flag":"🇳🇱"},{"id":154,"name":"New Caledonia","code":"NC","flag":"🇳🇨"},{"id":155,"name":"New Zealand","code":"NZ","flag":"🇳🇿"},{"id":156,"name":"Nicaragua","code":"NI","flag":"🇳🇮"},{"id":157,"name":"Niger","code":"NE","flag":"🇳🇪"},{"id":158,"name":"Nigeria","code":"NG","flag":"🇳🇬"},{"id":159,"name":"Niue","code":"NU","flag":"🇳🇺"},{"id":160,"name":"Norfolk Island","code":"NF","flag":"🇳🇫"},{"id":161,"name":"North Korea","code":"KP","flag":"🇰🇵"},{"id":162,"name":"North Macedonia","code":"MK","flag":"🇲🇰"},{"id":163,"name":"Northern Mariana Islands","code":"MP","flag":"🇲🇵"},{"id":164,"name":"Norway","code":"NO","flag":"🇳🇴"},{"id":165,"name":"Oman","code":"OM","flag":"🇴🇲"},{"id":166,"name":"Pakistan","code":"PK","flag":"🇵🇰"},{"id":167,"name":"Palau","code":"PW","flag":"🇵🇼"},{"id":168,"name":"Palestine","code":"PS","flag":"🇵🇸"},{"id":169,"name":"Panama","code":"PA","flag":"🇵🇦"},{"id":170,"name":"Papua New Guinea","code":"PG","flag":"🇵🇬"},{"id":171,"name":"Paraguay","code":"PY","flag":"🇵🇾"},{"id":172,"name":"Peru","code":"PE","flag":"🇵🇪"},{"id":173,"name":"Philippines","code":"PH","flag":"🇵🇭"},{"id":174,"name":"Pitcairn","code":"PN","flag":"🇵🇳"},{"id":175,"name":"Poland","code":"PL","flag":"🇵🇱"},{"id":176,"name":"Portugal","code":"PT","flag":"🇵🇹"},{"id":177,"name":"Puerto Rico","code":"PR","flag":"🇵🇷"},{"id":178,"name":"Qatar","code":"QA","flag":"🇶🇦"},{"id":179,"name":"Republic of the Congo","code":"CD","flag":"🇨🇩"},{"id":180,"name":"Romania","code":"RO","flag":"🇷🇴"},{"id":181,"name":"Russia","code":"RU","flag":"🇷🇺"},{"id":182,"name":"Rwanda","code":"RW","flag":"🇷🇼"},{"id":183,"name":"Réunion","code":"RE","flag":"🇷🇪"},{"id":184,"name":"Saint Barthélemy","code":"BL","flag":"🇧🇱"},{"id":185,"name":"Saint Helena","code":"SH","flag":"🇸🇭"},{"id":186,"name":"Saint Kitts and Nevis","code":"KN","flag":"🇰🇳"},{"id":187,"name":"Saint Lucia","code":"LC","flag":"🇱🇨"},{"id":188,"name":"Saint Martin (French part)","code":"MF","flag":"🇲🇫"},{"id":189,"name":"Saint Pierre and Miquelon","code":"PM","flag":"🇵🇲"},{"id":190,"name":"Saint Vincent and the Grenadines","code":"VC","flag":"🇻🇨"},{"id":191,"name":"Samoa","code":"WS","flag":"🇼🇸"},{"id":192,"name":"San Marino","code":"SM","flag":"🇸🇲"},{"id":193,"name":"Sao Tome and Principe","code":"ST","flag":"🇸🇹"},{"id":194,"name":"Saudi Arabia","code":"SA","flag":"🇸🇦"},{"id":195,"name":"Senegal","code":"SN","flag":"🇸🇳"},{"id":196,"name":"Serbia","code":"RS","flag":"🇷🇸"},{"id":197,"name":"Seychelles","code":"SC","flag":"🇸🇨"},{"id":198,"name":"Sierra Leone","code":"SL","flag":"🇸🇱"},{"id":199,"name":"Singapore","code":"SG","flag":"🇸🇬"},{"id":200,"name":"Sint Maarten (Dutch part)","code":"SX","flag":"🇸🇽"},{"id":201,"name":"Slovakia","code":"SK","flag":"🇸🇰"},{"id":202,"name":"Slovenia","code":"SI","flag":"🇸🇮"},{"id":203,"name":"Solomon Islands","code":"SB","flag":"🇸🇧"},{"id":204,"name":"Somalia","code":"SO","flag":"🇸🇴"},{"id":205,"name":"South Africa","code":"ZA","flag":"🇿🇦"},{"id":206,"name":"South Georgia and the South Sandwich Islands","code":"GS","flag":"🇬🇸"},{"id":207,"name":"South Korea","code":"KR","flag":"🇰🇷"},{"id":208,"name":"South Sudan","code":"SS","flag":"🇸🇸"},{"id":209,"name":"Spain","code":"ES","flag":"🇪🇸"},{"id":210,"name":"Sri Lanka","code":"LK","flag":"🇱🇰"},{"id":211,"name":"Sudan","code":"SD","flag":"🇸🇩"},{"id":212,"name":"Suriname","code":"SR","flag":"🇸🇷"},{"id":213,"name":"Svalbard and Jan Mayen","code":"SJ","flag":"🇸🇯"},{"id":214,"name":"Sweden","code":"SE","flag":"🇸🇪"},{"id":215,"name":"Switzerland","code":"CH","flag":"🇨🇭"},{"id":216,"name":"Syrian Arab Republic","code":"SY","flag":"🇸🇾"},{"id":217,"name":"Taiwan","code":"TW","flag":"🇹🇼"},{"id":218,"name":"Tajikistan","code":"TJ","flag":"🇹🇯"},{"id":219,"name":"Tanzania","code":"TZ","flag":"🇹🇿"},{"id":220,"name":"Thailand","code":"TH","flag":"🇹🇭"},{"id":221,"name":"Timor-Leste","code":"TL","flag":"🇹🇱"},{"id":222,"name":"Togo","code":"TG","flag":"🇹🇬"},{"id":223,"name":"Tokelau","code":"TK","flag":"🇹🇰"},{"id":224,"name":"Tonga","code":"TO","flag":"🇹🇴"},{"id":225,"name":"Trinidad and Tobago","code":"TT","flag":"🇹🇹"},{"id":226,"name":"Tunisia","code":"TN","flag":"🇹🇳"},{"id":227,"name":"Turkmenistan","code":"TM","flag":"🇹🇲"},{"id":228,"name":"Turks and Caicos Islands","code":"TC","flag":"🇹🇨"},{"id":229,"name":"Tuvalu","code":"TV","flag":"🇹🇻"},{"id":230,"name":"Türkiye","code":"TR","flag":"🇹🇷"},{"id":231,"name":"Uganda","code":"UG","flag":"🇺🇬"},{"id":232,"name":"Ukraine","code":"UA","flag":"🇺🇦"},{"id":233,"name":"United Arab Emirates","code":"AE","flag":"🇦🇪"},{"id":234,"name":"United Kingdom","code":"GB","flag":"🇬🇧"},{"id":235,"name":"United States","code":"US","flag":"🇺🇸"},{"id":236,"name":"United States Minor Outlying Islands","code":"UM","flag":"🇺🇲"},{"id":237,"name":"Uruguay","code":"UY","flag":"🇺🇾"},{"id":238,"name":"Uzbekistan","code":"UZ","flag":"🇺🇿"},{"id":239,"name":"Vanuatu","code":"VU","flag":"🇻🇺"},{"id":240,"name":"Vatican City","code":"VA","flag":"🇻🇦"},{"id":241,"name":"Venezuela","code":"VE","flag":"🇻🇪"},{"id":242,"name":"Viet Nam","code":"VN","flag":"🇻🇳"},{"id":243,"name":"Virgin Islands","code":"VG","flag":"🇻🇬"},{"id":244,"name":"Virgin Islands","code":"VI","flag":"🇻🇮"},{"id":245,"name":"Wallis and Futuna","code":"WF","flag":"🇼🇫"},{"id":246,"name":"Western Sahara","code":"EH","flag":"🇪🇭"},{"id":247,"name":"Yemen","code":"YE","flag":"🇾🇪"},{"id":248,"name":"Zambia","code":"ZM","flag":"🇿🇲"},{"id":249,"name":"Zimbabwe","code":"ZW","flag":"🇿🇼"},{"id":250,"name":"Åland Islands","code":"AX","flag":"🇦🇽"},{"id":251,"name":"Canary Islands","code":"IC","flag":"🇮🇨"}]`),
  L = {
    seasons: Ka,
    regionSize: $a,
    refreshIntervalMs: Ja,
    colors: Ha,
    errors: Va,
    items: za,
    products: Ya,
    countries: Za
  },
  Wa = L,
  $ = L.seasons.length - 1,
  pt = L.seasons[$].zoom,
  wt = L.seasons[$].tileSize;

function yt(t) {
  return Wa.countries[t - 1]
}
var v;
class Qa {
  constructor(e) {
    m(this, v, b(!0));
    this.url = e
  }
  get online() {
    return f(d(this, v))
  }
  set online(e) {
    p(d(this, v), e, !0)
  }
  async paint(e, a) {
    const n = Fa(e, r => `t=(${r.tile[0]},${r.tile[1]}),s=${r.season}`),
      i = (await Promise.all(Object.values(n).map(r => {
        const [c, h] = r[0].tile, S = r[0].season, J = {
          colors: r.map(N => N.colorIdx),
          coords: r.flatMap(N => N.pixel),
          t: a
        };
        return this.request(`/s${S}/pixel/${c}/${h}`, {
          method: "POST",
          body: JSON.stringify(J),
          credentials: "include"
        })
      }))).filter(r => r.status !== 200);
    if (i.length) {
      const r = i[0];
      if (r.status === 401) throw new Error(ae());
      if (r.status === 403) {
        if (r.headers.get("cf-mitigated") === "challenge") throw new Error(sa());
        const c = await r.json();
        throw (c == null ? void 0 : c.error) === "refresh" ? new Error(ca()) : (lt.refresh(), new Error(re()))
      } else if (r.status === 451) {
        const c = await i[0].json();
        c == null || c.err;
        const h = c == null ? void 0 : c.suspension;
        if (h === "ban") throw new Error(xa({}));
        if (h === "timeout") {
          const S = new Date(Date.now() + ((c == null ? void 0 : c.durationMs) ?? 0));
          throw new Error(La({
            until: S.toLocaleString()
          }))
        } else throw new Error(o())
      } else throw new Error(o())
    }
  }
  async getPixelInfo({
    season: e,
    tile: [a, n],
    pixel: [l, i]
  }) {
    const r = await this.request(`/s${e}/pixel/${a}/${n}?x=${l}&y=${i}`);
    if (r.status !== 200) {
      const c = await r.text();
      throw new Error(ie({
        err: c
      }))
    }
    return r.json()
  }
  async me() {
    const e = await this.request("/me", {
      credentials: "include"
    });
    if (e.status === 200) return await e.json()
  }
  async logout() {
    const e = await this.request("/auth/logout", {
      method: "POST",
      credentials: "include"
    });
    if (e.status !== 200) throw new Error(await e.text());
    return await e.json()
  }
  async refreshPaymentSession(e) {
    return (await this.request(`/payment/refresh-session/${encodeURIComponent(e)}`, {
      method: "POST",
      credentials: "include"
    })).status === 200
  }
  async getOtpCooldown() {
    const e = await this.request("/otp/cooldown", {
      credentials: "include"
    });
    if (e.status !== 200) throw new Error(o());
    return await e.json()
  }
  async sendOtp(e) {
    const a = await this.request("/otp/send", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        phone: e
      })
    });
    if (a.status === 400) throw new Error(de());
    if (a.status === 403) throw new Error(ge());
    if (a.status === 429) throw new Error(_e());
    if (a.status !== 200) throw new Error(o());
    return await a.json()
  }
  async verifyOtp(e) {
    const a = await this.request("/otp/verify", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        code: e
      })
    });
    if (a.status === 400) throw new Error(ye());
    if (a.status !== 200) throw new Error(o());
    return await a.json()
  }
  async updateMe(e) {
    const a = await this.request("/me/update", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(e)
    });
    if (a.status === 400) {
      const n = await a.json();
      throw new Error(n == null ? void 0 : n.error)
    } else if (a.status !== 200) throw new Error(o())
  }
  async deleteMe() {
    if ((await this.request("/me/delete", {
        method: "POST",
        credentials: "include"
      })).status !== 200) throw new Error(o())
  }
  async favoriteLocation(e) {
    const a = await this.request("/favorite-location", {
      method: "POST",
      body: JSON.stringify({
        latitude: e[0],
        longitude: e[1]
      }),
      credentials: "include"
    });
    if (a.status === 403) throw new Error(ve());
    if (a.status !== 200) throw new Error(o())
  }
  async deleteFavoriteLocation(e) {
    if ((await this.request("/favorite-location/delete", {
        method: "POST",
        body: JSON.stringify({
          id: e
        }),
        credentials: "include"
      })).status !== 200) throw new Error(o())
  }
  async updateFavoriteLocation(e, a) {
    const n = await this.request("/favorite-location/update", {
      method: "POST",
      body: JSON.stringify({
        id: e,
        name: a
      }),
      credentials: "include"
    });
    if (n.status === 400) throw new Error(Pe());
    if (n.status !== 200) throw new Error(o())
  }
  async leaderboardPlayers(e) {
    const a = await this.request(`/leaderboard/player/${e}`);
    if (a.status !== 200) throw new Error(y());
    return a.json()
  }
  async leaderboardAlliances(e) {
    const a = await this.request(`/leaderboard/alliance/${e}`);
    if (a.status !== 200) throw new Error(y());
    return a.json()
  }
  async leaderboardRegions(e, a = 0) {
    const n = await this.request(`/leaderboard/region/${e}/${a}`);
    if (n.status === 200) return n.json();
    throw new Error(y())
  }
  async leaderboardRegionPlayers(e, a) {
    const n = await this.request(`/leaderboard/region/players/${e}/${a}`);
    if (n.status === 200) return n.json();
    throw new Error(y())
  }
  async leaderboardRegionAlliances(e, a) {
    const n = await this.request(`/leaderboard/region/alliances/${e}/${a}`);
    if (n.status === 200) return n.json();
    throw new Error(y())
  }
  async leaderboardCountries(e) {
    const a = await this.request(`/leaderboard/country/${e}`, {
      credentials: "include"
    });
    if (a.status === 200) return a.json();
    throw new Error(y())
  }
  async getRandomTile(e) {
    const a = await this.request(`/s${e}/tile/random`);
    if (a.status !== 200) throw new Error(o());
    return a.json()
  }
  async purchase(e) {
    const a = await this.request("/purchase", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        product: e
      })
    });
    if (a.status !== 200) throw a.status === 404 ? new Error(Ae()) : a.status === 403 ? new Error(ke()) : a.status === 409 ? new Error(De()) : new Error(o())
  }
  async getAlliance() {
    const e = await this.request("/alliance", {
      credentials: "include"
    });
    if (e.status === 200) return e.json();
    if (e.status === 404) return;
    throw new Error(o())
  }
  async createAlliance(e) {
    const a = await this.request("/alliance", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        name: e
      })
    });
    if (a.status === 200) return a.json();
    if (a.status === 400) {
      const n = await a.json();
      throw n.error === "max_characters" ? new Error(Ge()) : n.error === "name_taken" ? new Error(Ue()) : n.error == "empty_name" ? new Error(Ke()) : new Error(o())
    } else throw a.status === 403 ? new Error(He()) : new Error(o())
  }
  async leaveAlliance() {
    if ((await this.request("/alliance/leave", {
        method: "POST",
        credentials: "include"
      })).status !== 200) throw new Error(o())
  }
  async updateAllianceDescription(e) {
    const a = await this.request("/alliance/update-description", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        description: e
      })
    });
    if (a.status !== 200) throw a.status === 403 ? new Error(w()) : new Error(o())
  }
  async updateAllianceHeadquarters(e, a) {
    const n = await this.request("/alliance/update-headquarters", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        latitude: e,
        longitude: a
      })
    });
    if (n.status !== 200) throw n.status === 403 ? new Error(w()) : new Error(o())
  }
  async allianceLeaderboard(e) {
    const a = await this.request(`/alliance/leaderboard/${e}`, {
      credentials: "include"
    });
    if (a.status === 200) return a.json();
    throw a.status === 403 ? new Error(w()) : new Error(y())
  }
  async getAllianceInvites() {
    const e = await this.request("/alliance/invites", {
      credentials: "include"
    });
    if (e.status === 200) return e.json();
    throw e.status === 403 ? new Error(w()) : new Error(o())
  }
  async joinAlliance(e) {
    switch ((await this.request(`/alliance/join/${e}`, {
        credentials: "include"
      })).status) {
      case 200:
        return "success";
      case 208:
        return "in-another-alliance";
      case 401:
        return "not-logged-in";
      case 403:
        return "banned";
      case 400:
      case 404:
        return "invalid-invite";
      default:
        return "error"
    }
  }
  async getAllianceMembers(e) {
    const a = await this.request(`/alliance/members/${e}`, {
      credentials: "include"
    });
    if (a.status === 200) return a.json();
    throw new Error(o())
  }
  async getAllianceBannedMembers(e) {
    const a = await this.request(`/alliance/members/banned/${e}`, {
      credentials: "include"
    });
    if (a.status === 200) return a.json();
    throw new Error(o())
  }
  async giveAllianceAdmin(e) {
    const a = await this.request("/alliance/give-admin", {
      body: JSON.stringify({
        promotedUserId: e
      }),
      method: "POST",
      credentials: "include"
    });
    if (a.status !== 200) throw a.status === 403 ? new Error(w()) : new Error(o())
  }
  async banAllianceUser(e) {
    const a = await this.request("/alliance/ban", {
      body: JSON.stringify({
        bannedUserId: e
      }),
      method: "POST",
      credentials: "include"
    });
    if (a.status !== 200) throw a.status === 403 ? new Error(w()) : new Error(o())
  }
  async equipFlag(e) {
    if ((await this.request(`/flag/equip/${e}`, {
        method: "POST",
        credentials: "include"
      })).status !== 200) throw new Error(o())
  }
  async getMyProfilePictures() {
    const e = await this.request("/me/profile-pictures", {
      credentials: "include"
    });
    if (e.status !== 200) throw new Error(o());
    return e.json()
  }
  async changeProfilePicture(e) {
    if ((await this.request("/me/profile-picture/change", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          pictureId: e
        })
      })).status !== 200) throw new Error(o())
  }
  async unbanAllianceUser(e) {
    const a = await this.request("/alliance/unban", {
      body: JSON.stringify({
        unbannedUserId: e
      }),
      method: "POST",
      credentials: "include"
    });
    if (a.status !== 200) throw a.status === 403 ? new Error(w()) : new Error(o())
  }
  async health() {
    return (await this.request("/health")).json()
  }
  async generatePixQrCode(e) {
    const a = await this.request(`/payment/abacatepay/create/pix/${e}`, {
      method: "POST",
      credentials: "include"
    });
    if (a.status === 400) {
      const l = await a.json();
      throw new Error(l == null ? void 0 : l.error)
    } else {
      if (a.status === 451) throw new Error(ja());
      if (a.status !== 200) throw new Error(o())
    }
    return await a.json()
  }
  async refreshPixPayment(e) {
    const a = await this.request(`/payment/abacatepay/refresh/pix/${e}`, {
      method: "POST",
      credentials: "include"
    });
    if (a.status === 400) {
      const n = await a.json();
      throw new Error(n == null ? void 0 : n.error)
    } else if (a.status !== 200) throw new Error("Unexpected error on the server. Try again later");
    return a.json()
  }
  async getPixStatus(e) {
    const a = await this.request(`/payment/abacatepay/status/pix/${e}`, {
      method: "GET",
      credentials: "include"
    });
    if (a.status !== 200) throw new Error("Erro inesperado. Tente atualizar a página.");
    return a.json()
  }
  async getModeratorTickets() {
    const e = await this.request("/moderator/tickets", {
      method: "GET",
      credentials: "include"
    });
    if (e.status !== 200) throw new _(o(), e.status);
    const a = await e.json();
    for (const n of a.tickets) n.reports.sort((l, i) => U[l.reason] - U[i.reason]);
    return a
  }
  async getSevereOpenTicketsCount() {
    const e = await this.request("/moderator/severe-open-tickets-count", {
      method: "GET",
      credentials: "include"
    });
    if (e.status !== 200) throw new _(o(), e.status);
    const {
      tickets: a
    } = await e.json();
    return a
  }
  async assignNewTickets() {
    const e = await this.request("/moderator/assign-new-tickets", {
      method: "POST",
      credentials: "include"
    });
    if (e.status !== 200) throw new _(o(), e.status);
    return e.json()
  }
  async setTicketStatus(e, a) {
    const n = await this.request("/moderator/set-ticket-status", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        ticketId: e,
        status: a
      })
    });
    if (n.status !== 200) throw new _(o(), n.status)
  }
  async request(e, a) {
    let n;
    try {
      n = await fetch(`${this.url}${e}`, a), this.online = !0
    } catch (l) {
      throw console.error("Fetch error:", l), this.online = !1, new Error(We(), {
        cause: l
      })
    }
    if (n.status === 429) throw new Error(ea());
    return n
  }
  async getOpenTicketsSummary() {
    const e = await this.request("/admin/countalltickets", {
      method: "GET",
      credentials: "include"
    });
    if (e.status !== 200) throw new _(o(), e.status);
    return e.json()
  }
  async getClosedTicketsByMod(e, a) {
    const n = await this.request(`/admin/closed-tickets?start=${encodeURIComponent(e)}&end=${encodeURIComponent(a)}`, {
      method: "GET",
      credentials: "include"
    });
    if (n.status !== 200) throw new _(o(), n.status);
    return (await n.json()).items.map(i => ({
      ...i,
      suspensionRate: (i.ban + i.timeout) / i.total
    }))
  }
  async getUserInfoById(e) {
    const a = await this.request(`/moderator/user-info/${encodeURIComponent(e)}`, {
      method: "GET",
      credentials: "include"
    });
    if (a.status !== 404) {
      if (a.status !== 200) throw new _(o(), a.status);
      return a.json()
    }
  }
  async getUserInfoFull(e) {
    const a = await this.request(`/admin/users?id=${encodeURIComponent(e)}`, {
      method: "GET",
      credentials: "include"
    });
    if (a.status !== 404) {
      if (a.status !== 200) throw new _(o(), a.status);
      return a.json()
    }
  }
  async removeTimeout(e) {
    const a = await this.request("/admin/remove-timeout", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        userId: e
      })
    });
    if (a.status !== 200) throw new _(o(), a.status)
  }
  async removeBan(e) {
    const a = await this.request("/admin/remove-ban", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        userId: e
      })
    });
    if (a.status !== 200) throw new _(o(), a.status)
  }
}
v = new WeakMap;
let j = new Qa(Y);

function Xa(t) {
  const e = atob(t),
    a = new Uint8Array(e.length);
  for (let n = 0; n < e.length; n++) a[n] = e.charCodeAt(n);
  return a
}
class et {
  constructor(e) {
    u(this, "bytes");
    this.bytes = e ?? new Uint8Array
  }
  set(e, a) {
    const n = Math.floor(e / 8),
      l = e % 8;
    if (n >= this.bytes.length) {
      const r = new Uint8Array(n + 1),
        c = r.length - this.bytes.length;
      for (let h = 0; h < this.bytes.length; h++) r[h + c] = this.bytes[h];
      this.bytes = r
    }
    const i = this.bytes.length - 1 - n;
    a ? this.bytes[i] = this.bytes[i] | 1 << l : this.bytes[i] = this.bytes[i] & ~(1 << l)
  }
  get(e) {
    const a = Math.floor(e / 8),
      n = e % 8,
      l = this.bytes.length;
    return a > l ? !1 : (this.bytes[l - 1 - a] & 1 << n) !== 0
  }
}

function bt(...t) {
  return t.filter(Boolean).join(" ")
}
const at = typeof document < "u";
let F = 0;
var E, T, P;
class tt {
  constructor() {
    m(this, E, b(G([])));
    m(this, T, b(G([])));
    m(this, P, e => {
      const a = this.toasts.findIndex(n => n.id === e);
      return a === -1 ? null : a
    });
    u(this, "addToast", e => {
      at && this.toasts.unshift(e)
    });
    u(this, "updateToast", ({
      id: e,
      data: a,
      type: n,
      message: l
    }) => {
      const i = this.toasts.findIndex(c => c.id === e),
        r = this.toasts[i];
      this.toasts[i] = {
        ...r,
        ...a,
        id: e,
        title: l,
        type: n,
        updated: !0
      }
    });
    u(this, "create", e => {
      var c;
      const {
        message: a,
        ...n
      } = e, l = typeof(e == null ? void 0 : e.id) == "number" || e.id && ((c = e.id) == null ? void 0 : c.length) > 0 ? e.id : F++, i = e.dismissable === void 0 ? !0 : e.dismissable, r = e.type === void 0 ? "default" : e.type;
      return R(() => {
        this.toasts.find(S => S.id === l) ? this.updateToast({
          id: l,
          data: e,
          type: r,
          message: a,
          dismissable: i
        }) : this.addToast({
          ...n,
          id: l,
          title: a,
          dismissable: i,
          type: r
        })
      }), l
    });
    u(this, "dismiss", e => (R(() => {
      if (e === void 0) {
        this.toasts = this.toasts.map(n => ({
          ...n,
          dismiss: !0
        }));
        return
      }
      const a = this.toasts.findIndex(n => n.id === e);
      this.toasts[a] && (this.toasts[a] = {
        ...this.toasts[a],
        dismiss: !0
      })
    }), e));
    u(this, "remove", e => {
      if (e === void 0) {
        this.toasts = [];
        return
      }
      const a = d(this, P).call(this, e);
      if (a !== null) return this.toasts.splice(a, 1), e
    });
    u(this, "message", (e, a) => this.create({
      ...a,
      type: "default",
      message: e
    }));
    u(this, "error", (e, a) => this.create({
      ...a,
      type: "error",
      message: e
    }));
    u(this, "success", (e, a) => this.create({
      ...a,
      type: "success",
      message: e
    }));
    u(this, "info", (e, a) => this.create({
      ...a,
      type: "info",
      message: e
    }));
    u(this, "warning", (e, a) => this.create({
      ...a,
      type: "warning",
      message: e
    }));
    u(this, "loading", (e, a) => this.create({
      ...a,
      type: "loading",
      message: e
    }));
    u(this, "promise", (e, a) => {
      if (!a) return;
      let n;
      a.loading !== void 0 && (n = this.create({
        ...a,
        promise: e,
        type: "loading",
        message: typeof a.loading == "string" ? a.loading : a.loading()
      }));
      const l = e instanceof Promise ? e : e();
      let i = n !== void 0;
      return l.then(r => {
        if (typeof r == "object" && r && "ok" in r && typeof r.ok == "boolean" && !r.ok) {
          i = !1;
          const c = nt(r);
          this.create({
            id: n,
            type: "error",
            message: c
          })
        } else if (a.success !== void 0) {
          i = !1;
          const c = typeof a.success == "function" ? a.success(r) : a.success;
          this.create({
            id: n,
            type: "success",
            message: c
          })
        }
      }).catch(r => {
        if (a.error !== void 0) {
          i = !1;
          const c = typeof a.error == "function" ? a.error(r) : a.error;
          this.create({
            id: n,
            type: "error",
            message: c
          })
        }
      }).finally(() => {
        var r;
        i && (this.dismiss(n), n = void 0), (r = a.finally) == null || r.call(a)
      }), n
    });
    u(this, "custom", (e, a) => {
      const n = (a == null ? void 0 : a.id) || F++;
      return this.create({
        component: e,
        id: n,
        ...a
      }), n
    });
    u(this, "removeHeight", e => {
      this.heights = this.heights.filter(a => a.toastId !== e)
    });
    u(this, "setHeight", e => {
      const a = d(this, P).call(this, e.toastId);
      if (a === null) {
        this.heights.push(e);
        return
      }
      this.heights[a] = e
    });
    u(this, "reset", () => {
      this.toasts = [], this.heights = []
    })
  }
  get toasts() {
    return f(d(this, E))
  }
  set toasts(e) {
    p(d(this, E), e, !0)
  }
  get heights() {
    return f(d(this, T))
  }
  set heights(e) {
    p(d(this, T), e, !0)
  }
}
E = new WeakMap, T = new WeakMap, P = new WeakMap;

function nt(t) {
  return t && typeof t == "object" && "status" in t ? `HTTP error! Status: ${t.status}` : `Error! ${t}`
}
const g = new tt;

function rt(t, e) {
  return g.create({
    message: t,
    ...e
  })
}
var D;
class St {
  constructor() {
    m(this, D, B(() => g.toasts.filter(e => !e.dismiss)))
  }
  get toasts() {
    return f(d(this, D))
  }
}
D = new WeakMap;
const ot = rt,
  st = Object.assign(ot, {
    success: g.success,
    info: g.info,
    warning: g.warning,
    error: g.error,
    custom: g.custom,
    message: g.message,
    promise: g.promise,
    dismiss: g.dismiss,
    loading: g.loading,
    getActiveToasts: () => g.toasts.filter(t => !t.dismiss)
  });
var M, I, A, C, O, k, x;
class it {
  constructor() {
    u(this, "channel", new BroadcastChannel("user-channel"));
    m(this, M, b());
    m(this, I, b(!0));
    m(this, A, b(Date.now()));
    m(this, C, b(Date.now()));
    m(this, O, B(() => {
      if (!this.data) return;
      const e = this.data.charges;
      if (e.count > e.max) return e.count;
      const a = e.count + Math.max((K.now - this.lastFetch) / e.cooldownMs, 0);
      return Math.min(e.max, a)
    }));
    m(this, k, B(() => this.charges !== void 0 && this.data ? (1 - this.charges % 1) * this.data.charges.cooldownMs : void 0));
    m(this, x, B(() => {
      var e;
      return new et(Xa(((e = this.data) == null ? void 0 : e.flagsBitmap) ?? "AA=="))
    }));
    this.channel.onmessage = e => {
      const a = JSON.parse(e.data);
      a.type === "refresh" ? (this.data = a.data, this.lastFetch = Date.now()) : a.type === "logout" && (this.data = void 0)
    }
  }
  get data() {
    return f(d(this, M))
  }
  set data(e) {
    p(d(this, M), e, !0)
  }
  get loading() {
    return f(d(this, I))
  }
  set loading(e) {
    p(d(this, I), e, !0)
  }
  get now() {
    return f(d(this, A))
  }
  set now(e) {
    p(d(this, A), e)
  }
  get lastFetch() {
    return f(d(this, C))
  }
  set lastFetch(e) {
    p(d(this, C), e)
  }
  get charges() {
    return f(d(this, O))
  }
  set charges(e) {
    p(d(this, O), e)
  }
  get cooldown() {
    return f(d(this, k))
  }
  set cooldown(e) {
    p(d(this, k), e)
  }
  get flagsBitmap() {
    return f(d(this, x))
  }
  set flagsBitmap(e) {
    p(d(this, x), e)
  }
  async refresh() {
    try {
      this.loading = !0, this.data = await j.me(), this.lastFetch = Date.now(), this.channel.postMessage(JSON.stringify({
        type: "refresh",
        data: this.data
      }))
    } catch (e) {
      console.error(e), st.warning(na(), {
        duration: 1e4
      })
    } finally {
      this.loading = !1
    }
  }
  async logout() {
    await j.logout(), this.channel.postMessage(JSON.stringify({
      type: "logout"
    })), this.data = void 0
  }
  hasColor(e) {
    var n;
    return e < 32 ? !0 : ((((n = this.data) == null ? void 0 : n.extraColorsBitmap) ?? 0) & 1 << e - 32) !== 0
  }
}
M = new WeakMap, I = new WeakMap, A = new WeakMap, C = new WeakMap, O = new WeakMap, k = new WeakMap, x = new WeakMap;
const lt = new it;
export {
  $ as C, gt as P, Wa as S, j as a, o as b, Y as c, g as d, bt as e, St as f, K as g, ht as h, ma as i, wa as j, Ta as k, ha as l, Sa as m, yt as n, pt as o, wt as p, mt as q, ft as r, _t as s, st as t, lt as u
};