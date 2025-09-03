var H = Object.defineProperty;
var G = n => {
  throw TypeError(n)
};
var V = (n, e, a) => e in n ? H(n, e, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: a
}) : n[e] = a;
var u = (n, e, a) => V(n, typeof e != "symbol" ? e + "" : e, a),
  Y = (n, e, a) => e.has(n) || G("Cannot " + a);
var d = (n, e, a) => (Y(n, e, "read from private field"), a ? a.call(n) : e.get(n)),
  f = (n, e, a) => e.has(n) ? G("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(n) : e.set(n, a);
import {
  aK as q,
  aL as S,
  g as _,
  aM as p,
  C as U,
  u as B
} from "./DDWIi-vs.js";
import {
  g as c
} from "./C5GsJ62f.js";
const mt = "https://backend.wplace.live/files",
  gt = "0x4AAAAAABpHqZ-6i7uL0nmG",
  z = "https://backend.wplace.live",
  ft = "0x4AAAAAABpqJe8FO0N84q0F";
let F = q({
  dropletsDialogOpen: !1,
  muted: !1,
  language: Z(),
  captcha: void 0,
  now: Date.now(),
  turnstatileLoaded: !1
});
setInterval(() => {
  F.now = Date.now()
}, 500);

function Z() {
  if (navigator.languages && navigator.languages.length > 0) {
    const n = navigator.languages.find(e => e.length === 2);
    if (n) return n
  }
  return (navigator.language || navigator.userLanguage || navigator.browserLanguage || "en").substring(0, 2)
}
const W = () => "Unexpected server error. Try again later.",
  Q = () => "Erro inesperado do servidor. Tente novamente mais tarde.",
  o = (n = {}, e = {}) => (e.locale ?? c()) === "en" ? W() : Q(),
  X = () => "You need to be logged in to paint",
  ee = () => "Você precisa estar conectado para pintar",
  ae = (n = {}, e = {}) => (e.locale ?? c()) === "en" ? X() : ee(),
  te = () => "You do not have enough charges to paint. Erase some pixels.",
  ne = () => "Você não possui tinta suficiente para pintar. Apague alguns pixeis.",
  re = (n = {}, e = {}) => (e.locale ?? c()) === "en" ? te() : ne(),
  oe = n => `Error while painting: ${n.err}`,
  se = n => `Erro enquanto pinta: ${n.err}`,
  ie = (n, e = {}) => (e.locale ?? c()) === "en" ? oe(n) : se(n),
  ce = () => "Invalid phone number",
  le = () => "Número de telefone inválido",
  de = (n = {}, e = {}) => (e.locale ?? c()) === "en" ? ce() : le(),
  ue = () => "Phone already used",
  me = () => "Telefone já usado",
  ge = (n = {}, e = {}) => (e.locale ?? c()) === "en" ? ue() : me(),
  fe = () => "You have to wait to resend a code",
  he = () => "Você tem de esperar para reenviar um código",
  _e = (n = {}, e = {}) => (e.locale ?? c()) === "en" ? fe() : he(),
  pe = () => "Invalid code",
  we = () => "Código inválido",
  ye = (n = {}, e = {}) => (e.locale ?? c()) === "en" ? pe() : we(),
  be = () => "Operation not allowed. Maybe you have too many favorite locations.",
  Se = () => "Operação não permitida. Talvez você tenha muitos locais favoritos.",
  Ee = (n = {}, e = {}) => (e.locale ?? c()) === "en" ? be() : Se(),
  ve = () => "Location name is too big (max. 128 characters)",
  Te = () => "Nome da localização é grande demais (max. 128 caracteres)",
  Pe = (n = {}, e = {}) => (e.locale ?? c()) === "en" ? ve() : Te(),
  Ie = () => "Couldn't complete the purchase. This item does not exist.",
  Ae = () => "Não foi possível concluir a compra. Este item não existe.",
  Ce = (n = {}, e = {}) => (e.locale ?? c()) === "en" ? Ie() : Ae(),
  Me = () => "You do not have enough droplets to buy this item.",
  Oe = () => "Você não tem gotas suficientes para comprar este item.",
  xe = (n = {}, e = {}) => (e.locale ?? c()) === "en" ? Me() : Oe(),
  ke = () => "You already have this item. Please refresh the page.",
  Be = () => "Você já possui este item. Atualize a página.",
  De = (n = {}, e = {}) => (e.locale ?? c()) === "en" ? ke() : Be(),
  Ne = () => "Alliance name exceeded the maximum number of characters",
  Le = () => "O nome da aliança excedeu o número máximo de caracteres",
  qe = (n = {}, e = {}) => (e.locale ?? c()) === "en" ? Ne() : Le(),
  Ge = () => "Alliance name already taken",
  Ue = () => "Já possui uma aliança com esse nome",
  Re = (n = {}, e = {}) => (e.locale ?? c()) === "en" ? Ge() : Ue(),
  je = () => "Alliance with empty name",
  $e = () => "Aliança com nome vazio",
  Fe = (n = {}, e = {}) => (e.locale ?? c()) === "en" ? je() : $e(),
  Ke = () => "You are already in an alliance",
  Je = () => "Você já está em uma aliança",
  He = (n = {}, e = {}) => (e.locale ?? c()) === "en" ? Ke() : Je(),
  Ve = () => "You are not allowed to do this",
  Ye = () => "Você não tem permissão para fazer isso",
  y = (n = {}, e = {}) => (e.locale ?? c()) === "en" ? Ve() : Ye(),
  ze = () => "Can't reach the server. Maybe you are without internet connection or the server is down. Try again later",
  Ze = () => "Não é possível acessar o servidor. Talvez você esteja sem conexão com a internet ou o servidor esteja fora do ar. Tente novamente mais tarde.",
  We = (n = {}, e = {}) => (e.locale ?? c()) === "en" ? ze() : Ze(),
  Qe = () => "You or someone in your network is making a lot of requests to the server. Try again later.",
  Xe = () => "Você ou alguém na sua rede está fazendo muitas solicitações ao servidor. Tente novamente mais tarde.",
  ea = (n = {}, e = {}) => (e.locale ?? c()) === "en" ? Qe() : Xe(),
  aa = () => "No internet access or the servers are offline. Try again later.",
  ta = () => "Sem acesso à internet ou os servidores estão fora do ar. Tente novamente mais tarde.",
  na = (n = {}, e = {}) => (e.locale ?? c()) === "en" ? aa() : ta(),
  ra = () => "We’re currently experiencing high traffic. Some requests may not be processed at this time—please try again later. Thank you for your patience.",
  oa = () => "Estamos enfrentando um volume alto de acessos no momento. Algumas solicitações podem não ser processadas agora — por favor, tente novamente mais tarde. Agradecemos a sua compreensão.",
  sa = (n = {}, e = {}) => (e.locale ?? c()) === "en" ? ra() : oa(),
  ia = () => "Refresh your page to get the latest update",
  ca = () => "Recarregue sua página para obter as últimas atualizações",
  la = (n = {}, e = {}) => (e.locale ?? c()) === "en" ? ia() : ca(),
  da = () => "Inappropriate content",
  ua = () => "Conteúdo inapropriado",
  ma = (n = {}, e = {}) => (e.locale ?? c()) === "en" ? da() : ua(),
  ga = () => "Botting",
  fa = () => "Uso de bots",
  ha = (n = {}, e = {}) => (e.locale ?? c()) === "en" ? ga() : fa(),
  _a = () => "Hate speech",
  pa = () => "Discurso de Ódio",
  wa = (n = {}, e = {}) => (e.locale ?? c()) === "en" ? _a() : pa(),
  ya = () => "Griefing",
  ba = () => "Griefing",
  Sa = (n = {}, e = {}) => (e.locale ?? c()) === "en" ? ya() : ba(),
  Ea = () => "Doxxing",
  va = () => "Doxxing",
  Ta = (n = {}, e = {}) => (e.locale ?? c()) === "en" ? Ea() : va(),
  Pa = () => "Leaderboard is temporarily disabled",
  Ia = () => "O ranking está temporariamente desativado",
  b = (n = {}, e = {}) => (e.locale ?? c()) === "en" ? Pa() : Ia(),
  Aa = () => "Multi-accounting",
  Ca = () => "Múltiplas contas",
  Ma = (n = {}, e = {}) => (e.locale ?? c()) === "en" ? Aa() : Ca(),
  Oa = () => "Your account has been banned.",
  xa = () => "Sua conta foi banida.",
  ka = (n = {}, e = {}) => (e.locale ?? c()) === "en" ? Oa() : xa(),
  Ba = n => `Your account has been suspended until ${n.until}.`,
  Da = n => `Sua conta foi suspensa até ${n.until}.`,
  Na = (n, e = {}) => (e.locale ?? c()) === "en" ? Ba(n) : Da(n),
  La = () => "Breaking the rules",
  qa = () => "Quebrar as regras",
  Ga = (n = {}, e = {}) => (e.locale ?? c()) === "en" ? La() : qa(),
  Ua = () => "Your account has been suspended for breaking the rules",
  Ra = () => "Sua conta foi suspensa por quebrar as regras",
  ja = (n = {}, e = {}) => (e.locale ?? c()) === "en" ? Ua() : Ra(),
  ht = {
    griefing: Sa(),
    "multi-accounting": Ma(),
    "hate-speech": wa(),
    bot: ha(),
    doxxing: Ta(),
    "inappropriate-content": ma(),
    other: Ga()
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
  R = {
    doxxing: 0,
    "hate-speech": 1,
    "inappropriate-content": 2,
    bot: 3,
    "multi-accounting": 4,
    griefing: 5,
    other: 6
  };
class m extends Error {
  constructor(e, a) {
    super(e), this.message = e, this.status = a
  }
}

function $a(n, e) {
  const a = {};
  for (const t of n) {
    const i = e(t);
    let s = a[i];
    s ? s.push(t) : a[i] = [t]
  }
  return a
}

function pt(n, e) {
  const a = {};
  for (const t of n) {
    const i = e(t);
    a[i] = t
  }
  return a
}
const Fa = [{
    tileSize: 1e3,
    zoom: 11
  }],
  Ka = 4,
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
  Ya = {
    Droplet: {},
    "Max. Charge": {},
    "Paint Charge": {},
    Color: {},
    Flag: {},
    "Profile Picture": {}
  },
  za = {
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
  N = {
    seasons: Fa,
    regionSize: Ka,
    refreshIntervalMs: Ja,
    colors: Ha,
    errors: Va,
    items: Ya,
    products: za,
    countries: Za
  },
  Wa = N,
  K = N.seasons.length - 1,
  wt = N.seasons[K].zoom,
  yt = N.seasons[K].tileSize;

function bt(n) {
  return Wa.countries[n - 1]
}
var E;
class Qa {
  constructor(e) {
    f(this, E, S(!0));
    this.url = e
  }
  get online() {
    return _(d(this, E))
  }
  set online(e) {
    p(d(this, E), e, !0)
  }
  async paint(e, a) {
    const t = $a(e, r => `t=(${r.tile[0]},${r.tile[1]}),s=${r.season}`),
      s = (await Promise.all(Object.values(t).map(r => {
        const [l, g] = r[0].tile, w = r[0].season, J = {
          colors: r.map(L => L.colorIdx),
          coords: r.flatMap(L => L.pixel),
          t: a
        };
        return this.request(`/s${w}/pixel/${l}/${g}`, {
          method: "POST",
          body: JSON.stringify(J),
          credentials: "include"
        })
      }))).filter(r => r.status !== 200);
    if (s.length) {
      const r = s[0];
      if (r.status === 401) throw new Error(ae());
      if (r.status === 403) {
        if (r.headers.get("cf-mitigated") === "challenge") throw new Error(sa());
        const l = await r.json();
        throw (l == null ? void 0 : l.error) === "refresh" ? new Error(la()) : (ct.refresh(), new Error(re()))
      } else if (r.status === 451) {
        const l = await s[0].json();
        l == null || l.err;
        const g = l == null ? void 0 : l.suspension;
        if (g === "ban") throw new Error(ka());
        if (g === "timeout") {
          const w = new Date(Date.now() + ((l == null ? void 0 : l.durationMs) ?? 0));
          throw new Error(Na({
            until: w.toLocaleString()
          }))
        } else throw new Error(o())
      } else throw new Error(o())
    }
  }
  async getPixelInfo({
    season: e,
    tile: [a, t],
    pixel: [i, s]
  }) {
    const r = await this.request(`/s${e}/pixel/${a}/${t}?x=${i}&y=${s}`);
    if (r.status !== 200) {
      const l = await r.text();
      throw new Error(ie({
        err: l
      }))
    }
    return r.json()
  }
  async getPixelAreaInfo({
    season: e,
    tile: [a, t],
    p0: [i, s],
    p1: [r, l]
  }) {
    const g = await this.request(`/moderator/pixel-area/s${e}/${a}/${t}?x0=${i}&y0=${s}&x1=${r}&y1=${l}`, {
      credentials: "include"
    });
    if (g.status !== 200) {
      const w = await g.text();
      throw console.error("Error while fetching pixel area info", w), new Error(o())
    }
    return g.json()
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
      const t = await a.json();
      throw new Error(t == null ? void 0 : t.error)
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
    if (a.status === 403) throw new Error(Ee());
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
    const t = await this.request("/favorite-location/update", {
      method: "POST",
      body: JSON.stringify({
        id: e,
        name: a
      }),
      credentials: "include"
    });
    if (t.status === 400) throw new Error(Pe());
    if (t.status !== 200) throw new Error(o())
  }
  async leaderboardPlayers(e) {
    const a = await this.request(`/leaderboard/player/${e}`);
    if (a.status !== 200) throw new Error(b());
    return a.json()
  }
  async leaderboardAlliances(e) {
    const a = await this.request(`/leaderboard/alliance/${e}`);
    if (a.status !== 200) throw new Error(b());
    return a.json()
  }
  async leaderboardRegions(e, a = 0) {
    const t = await this.request(`/leaderboard/region/${e}/${a}`);
    if (t.status === 200) return t.json();
    throw new Error(b())
  }
  async leaderboardRegionPlayers(e, a) {
    const t = await this.request(`/leaderboard/region/players/${e}/${a}`);
    if (t.status === 200) return t.json();
    throw new Error(b())
  }
  async leaderboardRegionAlliances(e, a) {
    const t = await this.request(`/leaderboard/region/alliances/${e}/${a}`);
    if (t.status === 200) return t.json();
    throw new Error(b())
  }
  async leaderboardCountries(e) {
    const a = await this.request(`/leaderboard/country/${e}`, {
      credentials: "include"
    });
    if (a.status === 200) return a.json();
    throw new Error(b())
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
    if (a.status !== 200) throw a.status === 404 ? new Error(Ce()) : a.status === 403 ? new Error(xe()) : a.status === 409 ? new Error(De()) : new Error(o())
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
      const t = await a.json();
      throw t.error === "max_characters" ? new Error(qe()) : t.error === "name_taken" ? new Error(Re()) : t.error == "empty_name" ? new Error(Fe()) : new Error(o())
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
    if (a.status !== 200) throw a.status === 403 ? new Error(y()) : new Error(o())
  }
  async updateAllianceHeadquarters(e, a) {
    const t = await this.request("/alliance/update-headquarters", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        latitude: e,
        longitude: a
      })
    });
    if (t.status !== 200) throw t.status === 403 ? new Error(y()) : new Error(o())
  }
  async allianceLeaderboard(e) {
    const a = await this.request(`/alliance/leaderboard/${e}`, {
      credentials: "include"
    });
    if (a.status === 200) return a.json();
    throw a.status === 403 ? new Error(y()) : new Error(b())
  }
  async getAllianceInvites() {
    const e = await this.request("/alliance/invites", {
      credentials: "include"
    });
    if (e.status === 200) return e.json();
    throw e.status === 403 ? new Error(y()) : new Error(o())
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
    if (a.status !== 200) throw a.status === 403 ? new Error(y()) : new Error(o())
  }
  async banAllianceUser(e) {
    const a = await this.request("/alliance/ban", {
      body: JSON.stringify({
        bannedUserId: e
      }),
      method: "POST",
      credentials: "include"
    });
    if (a.status !== 200) throw a.status === 403 ? new Error(y()) : new Error(o())
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
    if (a.status !== 200) throw a.status === 403 ? new Error(y()) : new Error(o())
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
      const i = await a.json();
      throw new Error(i == null ? void 0 : i.error)
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
      const t = await a.json();
      throw new Error(t == null ? void 0 : t.error)
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
    if (e.status !== 200) throw new m(o(), e.status);
    const a = await e.json();
    for (const t of a.tickets) t.reports.sort((i, s) => R[i.reason] - R[s.reason]);
    return a
  }
  async getSevereOpenTicketsCount() {
    const e = await this.request("/moderator/severe-open-tickets-count", {
      method: "GET",
      credentials: "include"
    });
    if (e.status !== 200) throw new m(o(), e.status);
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
    if (e.status !== 200) throw new m(o(), e.status);
    return e.json()
  }
  async setTicketStatus(e, a) {
    const t = await this.request("/moderator/set-ticket-status", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        ticketId: e,
        status: a
      })
    });
    if (t.status !== 200) throw new m(o(), t.status)
  }
  async request(e, a) {
    let t;
    try {
      t = await fetch(`${this.url}${e}`, a), this.online = !0
    } catch (i) {
      throw console.error("Fetch error:", i), this.online = !1, new Error(We(), {
        cause: i
      })
    }
    if (t.status === 429) throw new Error(ea());
    return t
  }
  async getOpenTicketsSummary() {
    const e = await this.request("/admin/count-all-tickets", {
      method: "GET",
      credentials: "include"
    });
    if (e.status !== 200) throw new m(o(), e.status);
    return e.json()
  }
  async getClosedTicketsByMod(e, a) {
    const t = await this.request(`/admin/closed-tickets?start=${encodeURIComponent(e)}&end=${encodeURIComponent(a)}`, {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== 200) throw new m(o(), t.status);
    return (await t.json()).items.map(s => ({
      ...s,
      suspensionRate: (s.ban + s.timeout) / s.total
    }))
  }
  async getUserInfoById(e) {
    const a = await this.request(`/moderator/user-info/${encodeURIComponent(e)}`, {
      method: "GET",
      credentials: "include"
    });
    if (a.status !== 404) {
      if (a.status !== 200) throw new m(o(), a.status);
      return a.json()
    }
  }
  async getMultipleUsersInfoById(e) {
    const a = await this.request(`/moderator/users?ids=${encodeURIComponent(e.join(","))}`, {
      method: "GET",
      credentials: "include"
    });
    if (a.status !== 200) throw new m(o(), a.status);
    return a.json()
  }
  async getUserInfoFull(e) {
    const a = await this.request(`/admin/users?id=${encodeURIComponent(e)}`, {
      method: "GET",
      credentials: "include"
    });
    if (a.status !== 404) {
      if (a.status !== 200) throw new m(o(), a.status);
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
    if (a.status !== 200) throw new m(o(), a.status)
  }
  async removeBan(e) {
    const a = await this.request("/admin/remove-ban", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        userId: e
      })
    });
    if (a.status !== 200) throw new m(o(), a.status)
  }
  async getUserNotes(e) {
    const a = await this.request(`/admin/users/notes?userId=${encodeURIComponent(e)}`, {
      method: "GET",
      credentials: "include"
    });
    if (a.status !== 200) throw new m(o(), a.status);
    return a.json()
  }
  async addUserNote(e, a) {
    const t = await this.request("/admin/users/notes", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        userId: e,
        note: a
      })
    });
    if (t.status !== 200) throw new m(o(), t.status)
  }
  async getUserPurchases(e) {
    const a = await this.request(`/admin/users/purchases?userId=${encodeURIComponent(e)}`, {
      method: "GET",
      credentials: "include"
    });
    if (a.status !== 200) throw new m(o(), a.status);
    const t = await a.json();
    return (Array.isArray(t == null ? void 0 : t.purchases) ? t.purchases : []).map(s => ({
      id: String(s.id ?? ""),
      product_name: String(s.productName ?? s.product_name ?? ""),
      price: Number(s.price ?? 0),
      amount: Number(s.amount ?? 0),
      createdAt: typeof s.createdAt == "string" ? s.createdAt : s.CreatedAt ? new Date(s.CreatedAt).toISOString() : ""
    }))
  }
  async postSetUserDroplets(e, a) {
    const t = await this.request("/admin/users/set-user-droplets", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        userId: e,
        droplets: a
      })
    });
    if (t.status !== 200) throw new m(o(), t.status)
  }
}
E = new WeakMap;
let j = new Qa(z);

function Xa(n) {
  const e = atob(n),
    a = new Uint8Array(e.length);
  for (let t = 0; t < e.length; t++) a[t] = e.charCodeAt(t);
  return a
}
class et {
  constructor(e) {
    u(this, "bytes");
    this.bytes = e ?? new Uint8Array
  }
  set(e, a) {
    const t = Math.floor(e / 8),
      i = e % 8;
    if (t >= this.bytes.length) {
      const r = new Uint8Array(t + 1),
        l = r.length - this.bytes.length;
      for (let g = 0; g < this.bytes.length; g++) r[g + l] = this.bytes[g];
      this.bytes = r
    }
    const s = this.bytes.length - 1 - t;
    a ? this.bytes[s] = this.bytes[s] | 1 << i : this.bytes[s] = this.bytes[s] & ~(1 << i)
  }
  get(e) {
    const a = Math.floor(e / 8),
      t = e % 8,
      i = this.bytes.length;
    return a > i ? !1 : (this.bytes[i - 1 - a] & 1 << t) !== 0
  }
}

function St(...n) {
  return n.filter(Boolean).join(" ")
}
const at = typeof document < "u";
let $ = 0;
var v, T, P;
class tt {
  constructor() {
    f(this, v, S(q([])));
    f(this, T, S(q([])));
    f(this, P, e => {
      const a = this.toasts.findIndex(t => t.id === e);
      return a === -1 ? null : a
    });
    u(this, "addToast", e => {
      at && this.toasts.unshift(e)
    });
    u(this, "updateToast", ({
      id: e,
      data: a,
      type: t,
      message: i
    }) => {
      const s = this.toasts.findIndex(l => l.id === e),
        r = this.toasts[s];
      this.toasts[s] = {
        ...r,
        ...a,
        id: e,
        title: i,
        type: t,
        updated: !0
      }
    });
    u(this, "create", e => {
      var l;
      const {
        message: a,
        ...t
      } = e, i = typeof(e == null ? void 0 : e.id) == "number" || e.id && ((l = e.id) == null ? void 0 : l.length) > 0 ? e.id : $++, s = e.dismissable === void 0 ? !0 : e.dismissable, r = e.type === void 0 ? "default" : e.type;
      return U(() => {
        this.toasts.find(w => w.id === i) ? this.updateToast({
          id: i,
          data: e,
          type: r,
          message: a,
          dismissable: s
        }) : this.addToast({
          ...t,
          id: i,
          title: a,
          dismissable: s,
          type: r
        })
      }), i
    });
    u(this, "dismiss", e => (U(() => {
      if (e === void 0) {
        this.toasts = this.toasts.map(t => ({
          ...t,
          dismiss: !0
        }));
        return
      }
      const a = this.toasts.findIndex(t => t.id === e);
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
      let t;
      a.loading !== void 0 && (t = this.create({
        ...a,
        promise: e,
        type: "loading",
        message: typeof a.loading == "string" ? a.loading : a.loading()
      }));
      const i = e instanceof Promise ? e : e();
      let s = t !== void 0;
      return i.then(r => {
        if (typeof r == "object" && r && "ok" in r && typeof r.ok == "boolean" && !r.ok) {
          s = !1;
          const l = nt(r);
          this.create({
            id: t,
            type: "error",
            message: l
          })
        } else if (a.success !== void 0) {
          s = !1;
          const l = typeof a.success == "function" ? a.success(r) : a.success;
          this.create({
            id: t,
            type: "success",
            message: l
          })
        }
      }).catch(r => {
        if (a.error !== void 0) {
          s = !1;
          const l = typeof a.error == "function" ? a.error(r) : a.error;
          this.create({
            id: t,
            type: "error",
            message: l
          })
        }
      }).finally(() => {
        var r;
        s && (this.dismiss(t), t = void 0), (r = a.finally) == null || r.call(a)
      }), t
    });
    u(this, "custom", (e, a) => {
      const t = (a == null ? void 0 : a.id) || $++;
      return this.create({
        component: e,
        id: t,
        ...a
      }), t
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
    return _(d(this, v))
  }
  set toasts(e) {
    p(d(this, v), e, !0)
  }
  get heights() {
    return _(d(this, T))
  }
  set heights(e) {
    p(d(this, T), e, !0)
  }
}
v = new WeakMap, T = new WeakMap, P = new WeakMap;

function nt(n) {
  return n && typeof n == "object" && "status" in n ? `HTTP error! Status: ${n.status}` : `Error! ${n}`
}
const h = new tt;

function rt(n, e) {
  return h.create({
    message: n,
    ...e
  })
}
var D;
class Et {
  constructor() {
    f(this, D, B(() => h.toasts.filter(e => !e.dismiss)))
  }
  get toasts() {
    return _(d(this, D))
  }
}
D = new WeakMap;
const ot = rt,
  st = Object.assign(ot, {
    success: h.success,
    info: h.info,
    warning: h.warning,
    error: h.error,
    custom: h.custom,
    message: h.message,
    promise: h.promise,
    dismiss: h.dismiss,
    loading: h.loading,
    getActiveToasts: () => h.toasts.filter(n => !n.dismiss)
  });
var I, A, C, M, O, x, k;
class it {
  constructor() {
    u(this, "channel", new BroadcastChannel("user-channel"));
    f(this, I, S());
    f(this, A, S(!0));
    f(this, C, S(Date.now()));
    f(this, M, S(Date.now()));
    f(this, O, B(() => {
      if (!this.data) return;
      const e = this.data.charges;
      if (e.count > e.max) return e.count;
      const a = e.count + Math.max((F.now - this.lastFetch) / e.cooldownMs, 0);
      return Math.min(e.max, a)
    }));
    f(this, x, B(() => this.charges !== void 0 && this.data ? (1 - this.charges % 1) * this.data.charges.cooldownMs : void 0));
    f(this, k, B(() => {
      var e;
      return new et(Xa(((e = this.data) == null ? void 0 : e.flagsBitmap) ?? "AA=="))
    }));
    this.channel.onmessage = e => {
      const a = JSON.parse(e.data);
      a.type === "refresh" ? (this.data = a.data, this.lastFetch = Date.now()) : a.type === "logout" && (this.data = void 0)
    }
  }
  get data() {
    return _(d(this, I))
  }
  set data(e) {
    p(d(this, I), e, !0)
  }
  get loading() {
    return _(d(this, A))
  }
  set loading(e) {
    p(d(this, A), e, !0)
  }
  get now() {
    return _(d(this, C))
  }
  set now(e) {
    p(d(this, C), e)
  }
  get lastFetch() {
    return _(d(this, M))
  }
  set lastFetch(e) {
    p(d(this, M), e)
  }
  get charges() {
    return _(d(this, O))
  }
  set charges(e) {
    p(d(this, O), e)
  }
  get cooldown() {
    return _(d(this, x))
  }
  set cooldown(e) {
    p(d(this, x), e)
  }
  get flagsBitmap() {
    return _(d(this, k))
  }
  set flagsBitmap(e) {
    p(d(this, k), e)
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
    var t;
    return e < 32 ? !0 : ((((t = this.data) == null ? void 0 : t.extraColorsBitmap) ?? 0) & 1 << e - 32) !== 0
  }
}
I = new WeakMap, A = new WeakMap, C = new WeakMap, M = new WeakMap, O = new WeakMap, x = new WeakMap, k = new WeakMap;
const ct = new it;
export {
  K as C, gt as P, Wa as S, j as a, o as b, z as c, h as d, St as e, Et as f, F as g, ht as h, ma as i, wa as j, Ta as k, ha as l, Sa as m, bt as n, pt as o, wt as p, yt as q, mt as r, _t as s, st as t, ct as u, ft as v
};