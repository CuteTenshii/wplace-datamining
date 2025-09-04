var V = Object.defineProperty;
var R = n => {
  throw TypeError(n)
};
var z = (n, e, t) => e in n ? V(n, e, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: t
}) : n[e] = t;
var g = (n, e, t) => z(n, typeof e != "symbol" ? e + "" : e, t),
  Y = (n, e, t) => e.has(n) || R("Cannot " + t);
var m = (n, e, t) => (Y(n, e, "read from private field"), t ? t.call(n) : e.get(n)),
  p = (n, e, t) => e.has(n) ? R("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(n) : e.set(n, t);
import {
  aH as U,
  aI as E,
  g as y,
  aJ as b,
  z as j,
  u as D
} from "./apxRKl0u.js";
import {
  g as l
} from "./C5GsJ62f.js";
const ga = "https://backend.wplace.live/files",
  fa = "0x4AAAAAABpHqZ-6i7uL0nmG",
  Z = "https://backend.wplace.live",
  ha = "0x4AAAAAABpqJe8FO0N84q0F";
let J = U({
  dropletsDialogOpen: !1,
  muted: !1,
  language: W(),
  captcha: void 0,
  now: Date.now(),
  turnstatileLoaded: !1
});
setInterval(() => {
  J.now = Date.now()
}, 500);

function W() {
  if (navigator.languages && navigator.languages.length > 0) {
    const n = navigator.languages.find(e => e.length === 2);
    if (n) return n
  }
  return (navigator.language || navigator.userLanguage || navigator.browserLanguage || "en").substring(0, 2)
}
const Q = () => "Unexpected server error. Try again later.",
  X = () => "Erro inesperado do servidor. Tente novamente mais tarde.",
  o = (n = {}, e = {}) => (e.locale ?? l()) === "en" ? Q() : X(),
  ee = () => "You need to be logged in to paint",
  te = () => "Você precisa estar conectado para pintar",
  ae = (n = {}, e = {}) => (e.locale ?? l()) === "en" ? ee() : te(),
  ne = () => "You do not have enough charges to paint. Erase some pixels.",
  re = () => "Você não possui tinta suficiente para pintar. Apague alguns pixeis.",
  oe = (n = {}, e = {}) => (e.locale ?? l()) === "en" ? ne() : re(),
  se = n => `Error while painting: ${n.err}`,
  ie = n => `Erro enquanto pinta: ${n.err}`,
  ce = (n, e = {}) => (e.locale ?? l()) === "en" ? se(n) : ie(n),
  le = () => "Invalid phone number",
  de = () => "Número de telefone inválido",
  ue = (n = {}, e = {}) => (e.locale ?? l()) === "en" ? le() : de(),
  me = () => "Phone already used",
  ge = () => "Telefone já usado",
  fe = (n = {}, e = {}) => (e.locale ?? l()) === "en" ? me() : ge(),
  he = () => "You have to wait to resend a code",
  pe = () => "Você tem de esperar para reenviar um código",
  _e = (n = {}, e = {}) => (e.locale ?? l()) === "en" ? he() : pe(),
  we = () => "Invalid code",
  ye = () => "Código inválido",
  be = (n = {}, e = {}) => (e.locale ?? l()) === "en" ? we() : ye(),
  Se = () => "Operation not allowed. Maybe you have too many favorite locations.",
  Te = () => "Operação não permitida. Talvez você tenha muitos locais favoritos.",
  Ee = (n = {}, e = {}) => (e.locale ?? l()) === "en" ? Se() : Te(),
  ve = () => "Location name is too big (max. 128 characters)",
  Ae = () => "Nome da localização é grande demais (max. 128 caracteres)",
  Ie = (n = {}, e = {}) => (e.locale ?? l()) === "en" ? ve() : Ae(),
  Pe = () => "Couldn't complete the purchase. This item does not exist.",
  Me = () => "Não foi possível concluir a compra. Este item não existe.",
  Ce = (n = {}, e = {}) => (e.locale ?? l()) === "en" ? Pe() : Me(),
  ke = () => "You do not have enough droplets to buy this item.",
  Be = () => "Você não tem gotas suficientes para comprar este item.",
  Oe = (n = {}, e = {}) => (e.locale ?? l()) === "en" ? ke() : Be(),
  xe = () => "You already have this item. Please refresh the page.",
  Ne = () => "Você já possui este item. Atualize a página.",
  De = (n = {}, e = {}) => (e.locale ?? l()) === "en" ? xe() : Ne(),
  qe = () => "Alliance name exceeded the maximum number of characters",
  Le = () => "O nome da aliança excedeu o número máximo de caracteres",
  Ge = (n = {}, e = {}) => (e.locale ?? l()) === "en" ? qe() : Le(),
  Ue = () => "Alliance name already taken",
  Re = () => "Já possui uma aliança com esse nome",
  je = (n = {}, e = {}) => (e.locale ?? l()) === "en" ? Ue() : Re(),
  $e = () => "Alliance with empty name",
  Fe = () => "Aliança com nome vazio",
  Ke = (n = {}, e = {}) => (e.locale ?? l()) === "en" ? $e() : Fe(),
  Je = () => "You are already in an alliance",
  He = () => "Você já está em uma aliança",
  Ve = (n = {}, e = {}) => (e.locale ?? l()) === "en" ? Je() : He(),
  ze = () => "You are not allowed to do this",
  Ye = () => "Você não tem permissão para fazer isso",
  S = (n = {}, e = {}) => (e.locale ?? l()) === "en" ? ze() : Ye(),
  Ze = () => "Can't reach the server. Maybe you are without internet connection or the server is down. Try again later",
  We = () => "Não é possível acessar o servidor. Talvez você esteja sem conexão com a internet ou o servidor esteja fora do ar. Tente novamente mais tarde.",
  Qe = (n = {}, e = {}) => (e.locale ?? l()) === "en" ? Ze() : We(),
  Xe = () => "You or someone in your network is making a lot of requests to the server. Try again later.",
  et = () => "Você ou alguém na sua rede está fazendo muitas solicitações ao servidor. Tente novamente mais tarde.",
  tt = (n = {}, e = {}) => (e.locale ?? l()) === "en" ? Xe() : et(),
  at = () => "No internet access or the servers are offline. Try again later.",
  nt = () => "Sem acesso à internet ou os servidores estão fora do ar. Tente novamente mais tarde.",
  rt = (n = {}, e = {}) => (e.locale ?? l()) === "en" ? at() : nt(),
  ot = () => "We’re currently experiencing high traffic. Some requests may not be processed at this time—please try again later. Thank you for your patience.",
  st = () => "Estamos enfrentando um volume alto de acessos no momento. Algumas solicitações podem não ser processadas agora — por favor, tente novamente mais tarde. Agradecemos a sua compreensão.",
  it = (n = {}, e = {}) => (e.locale ?? l()) === "en" ? ot() : st(),
  ct = () => "Refresh your page to get the latest update",
  lt = () => "Recarregue sua página para obter as últimas atualizações",
  dt = (n = {}, e = {}) => (e.locale ?? l()) === "en" ? ct() : lt(),
  ut = () => "Inappropriate content",
  mt = () => "Conteúdo inapropriado",
  gt = (n = {}, e = {}) => (e.locale ?? l()) === "en" ? ut() : mt(),
  ft = () => "Botting",
  ht = () => "Uso de bots",
  pt = (n = {}, e = {}) => (e.locale ?? l()) === "en" ? ft() : ht(),
  _t = () => "Hate speech",
  wt = () => "Discurso de Ódio",
  yt = (n = {}, e = {}) => (e.locale ?? l()) === "en" ? _t() : wt(),
  bt = () => "Griefing",
  St = () => "Griefing",
  Tt = (n = {}, e = {}) => (e.locale ?? l()) === "en" ? bt() : St(),
  Et = () => "Doxxing",
  vt = () => "Doxxing",
  At = (n = {}, e = {}) => (e.locale ?? l()) === "en" ? Et() : vt(),
  It = () => "Leaderboard is temporarily disabled",
  Pt = () => "O ranking está temporariamente desativado",
  T = (n = {}, e = {}) => (e.locale ?? l()) === "en" ? It() : Pt(),
  Mt = () => "Multi-accounting",
  Ct = () => "Múltiplas contas",
  kt = (n = {}, e = {}) => (e.locale ?? l()) === "en" ? Mt() : Ct(),
  Bt = () => "Your account has been banned.",
  Ot = () => "Sua conta foi banida.",
  xt = (n = {}, e = {}) => (e.locale ?? l()) === "en" ? Bt() : Ot(),
  Nt = n => `Your account has been suspended until ${n.until}.`,
  Dt = n => `Sua conta foi suspensa até ${n.until}.`,
  qt = (n, e = {}) => (e.locale ?? l()) === "en" ? Nt(n) : Dt(n),
  Lt = () => "Breaking the rules",
  Gt = () => "Quebrar as regras",
  Ut = (n = {}, e = {}) => (e.locale ?? l()) === "en" ? Lt() : Gt(),
  Rt = () => "Your account has been suspended for breaking the rules",
  jt = () => "Sua conta foi suspensa por quebrar as regras",
  $t = (n = {}, e = {}) => (e.locale ?? l()) === "en" ? Rt() : jt(),
  pa = {
    griefing: Tt(),
    "multi-accounting": kt(),
    "hate-speech": yt(),
    bot: pt(),
    doxxing: At(),
    "inappropriate-content": gt(),
    other: Ut()
  },
  _a = {
    doxxing: "text-red-600",
    "hate-speech": "text-red-600",
    "inappropriate-content": "text-amber-600",
    "multi-accounting": "text-amber-600",
    bot: "text-amber-600",
    griefing: "text-amber-600",
    other: "text-blue-600"
  },
  $ = {
    doxxing: 0,
    "hate-speech": 1,
    "inappropriate-content": 2,
    bot: 3,
    "multi-accounting": 4,
    griefing: 5,
    other: 6
  };
class f extends Error {
  constructor(e, t) {
    super(e), this.message = e, this.status = t
  }
}

function Ft(n, e) {
  const t = {};
  for (const a of n) {
    const r = e(a);
    let s = t[r];
    s ? s.push(a) : t[r] = [a]
  }
  return t
}

function wa(n, e) {
  const t = {};
  for (const a of n) {
    const r = e(a);
    t[r] = a
  }
  return t
}
const Kt = [{
    tileSize: 1e3,
    zoom: 11
  }],
  Jt = 4,
  Ht = 6e3,
  Vt = [{
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
  zt = {
    needsPhoneVerification: "needs_phone_verification"
  },
  Yt = {
    Droplet: {},
    "Max. Charge": {},
    "Paint Charge": {},
    Color: {},
    Flag: {},
    "Profile Picture": {}
  },
  Zt = {
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
  Wt = JSON.parse(`[{"id":1,"name":"Afghanistan","code":"AF","flag":"🇦🇫"},{"id":2,"name":"Albania","code":"AL","flag":"🇦🇱"},{"id":3,"name":"Algeria","code":"DZ","flag":"🇩🇿"},{"id":4,"name":"American Samoa","code":"AS","flag":"🇦🇸"},{"id":5,"name":"Andorra","code":"AD","flag":"🇦🇩"},{"id":6,"name":"Angola","code":"AO","flag":"🇦🇴"},{"id":7,"name":"Anguilla","code":"AI","flag":"🇦🇮"},{"id":8,"name":"Antarctica","code":"AQ","flag":"🇦🇶"},{"id":9,"name":"Antigua and Barbuda","code":"AG","flag":"🇦🇬"},{"id":10,"name":"Argentina","code":"AR","flag":"🇦🇷"},{"id":11,"name":"Armenia","code":"AM","flag":"🇦🇲"},{"id":12,"name":"Aruba","code":"AW","flag":"🇦🇼"},{"id":13,"name":"Australia","code":"AU","flag":"🇦🇺"},{"id":14,"name":"Austria","code":"AT","flag":"🇦🇹"},{"id":15,"name":"Azerbaijan","code":"AZ","flag":"🇦🇿"},{"id":16,"name":"Bahamas","code":"BS","flag":"🇧🇸"},{"id":17,"name":"Bahrain","code":"BH","flag":"🇧🇭"},{"id":18,"name":"Bangladesh","code":"BD","flag":"🇧🇩"},{"id":19,"name":"Barbados","code":"BB","flag":"🇧🇧"},{"id":20,"name":"Belarus","code":"BY","flag":"🇧🇾"},{"id":21,"name":"Belgium","code":"BE","flag":"🇧🇪"},{"id":22,"name":"Belize","code":"BZ","flag":"🇧🇿"},{"id":23,"name":"Benin","code":"BJ","flag":"🇧🇯"},{"id":24,"name":"Bermuda","code":"BM","flag":"🇧🇲"},{"id":25,"name":"Bhutan","code":"BT","flag":"🇧🇹"},{"id":26,"name":"Bolivia","code":"BO","flag":"🇧🇴"},{"id":27,"name":"Bonaire","code":"BQ","flag":"🇧🇶"},{"id":28,"name":"Bosnia and Herzegovina","code":"BA","flag":"🇧🇦"},{"id":29,"name":"Botswana","code":"BW","flag":"🇧🇼"},{"id":30,"name":"Bouvet Island","code":"BV","flag":"🇧🇻"},{"id":31,"name":"Brazil","code":"BR","flag":"🇧🇷"},{"id":32,"name":"British Indian Ocean Territory","code":"IO","flag":"🇮🇴"},{"id":33,"name":"Brunei Darussalam","code":"BN","flag":"🇧🇳"},{"id":34,"name":"Bulgaria","code":"BG","flag":"🇧🇬"},{"id":35,"name":"Burkina Faso","code":"BF","flag":"🇧🇫"},{"id":36,"name":"Burundi","code":"BI","flag":"🇧🇮"},{"id":37,"name":"Cabo Verde","code":"CV","flag":"🇨🇻"},{"id":38,"name":"Cambodia","code":"KH","flag":"🇰🇭"},{"id":39,"name":"Cameroon","code":"CM","flag":"🇨🇲"},{"id":40,"name":"Canada","code":"CA","flag":"🇨🇦"},{"id":41,"name":"Cayman Islands","code":"KY","flag":"🇰🇾"},{"id":42,"name":"Central African Republic","code":"CF","flag":"🇨🇫"},{"id":43,"name":"Chad","code":"TD","flag":"🇹🇩"},{"id":44,"name":"Chile","code":"CL","flag":"🇨🇱"},{"id":45,"name":"China","code":"CN","flag":"🇨🇳"},{"id":46,"name":"Christmas Island","code":"CX","flag":"🇨🇽"},{"id":47,"name":"Cocos (Keeling) Islands","code":"CC","flag":"🇨🇨"},{"id":48,"name":"Colombia","code":"CO","flag":"🇨🇴"},{"id":49,"name":"Comoros","code":"KM","flag":"🇰🇲"},{"id":50,"name":"Congo","code":"CG","flag":"🇨🇬"},{"id":51,"name":"Cook Islands","code":"CK","flag":"🇨🇰"},{"id":52,"name":"Costa Rica","code":"CR","flag":"🇨🇷"},{"id":53,"name":"Croatia","code":"HR","flag":"🇭🇷"},{"id":54,"name":"Cuba","code":"CU","flag":"🇨🇺"},{"id":55,"name":"Curaçao","code":"CW","flag":"🇨🇼"},{"id":56,"name":"Cyprus","code":"CY","flag":"🇨🇾"},{"id":57,"name":"Czechia","code":"CZ","flag":"🇨🇿"},{"id":58,"name":"Côte d'Ivoire","code":"CI","flag":"🇨🇮"},{"id":59,"name":"Denmark","code":"DK","flag":"🇩🇰"},{"id":60,"name":"Djibouti","code":"DJ","flag":"🇩🇯"},{"id":61,"name":"Dominica","code":"DM","flag":"🇩🇲"},{"id":62,"name":"Dominican Republic","code":"DO","flag":"🇩🇴"},{"id":63,"name":"Ecuador","code":"EC","flag":"🇪🇨"},{"id":64,"name":"Egypt","code":"EG","flag":"🇪🇬"},{"id":65,"name":"El Salvador","code":"SV","flag":"🇸🇻"},{"id":66,"name":"Equatorial Guinea","code":"GQ","flag":"🇬🇶"},{"id":67,"name":"Eritrea","code":"ER","flag":"🇪🇷"},{"id":68,"name":"Estonia","code":"EE","flag":"🇪🇪"},{"id":69,"name":"Eswatini","code":"SZ","flag":"🇸🇿"},{"id":70,"name":"Ethiopia","code":"ET","flag":"🇪🇹"},{"id":71,"name":"Falkland Islands (Malvinas)","code":"FK","flag":"🇫🇰"},{"id":72,"name":"Faroe Islands","code":"FO","flag":"🇫🇴"},{"id":73,"name":"Fiji","code":"FJ","flag":"🇫🇯"},{"id":74,"name":"Finland","code":"FI","flag":"🇫🇮"},{"id":75,"name":"France","code":"FR","flag":"🇫🇷"},{"id":76,"name":"French Guiana","code":"GF","flag":"🇬🇫"},{"id":77,"name":"French Polynesia","code":"PF","flag":"🇵🇫"},{"id":78,"name":"French Southern Territories","code":"TF","flag":"🇹🇫"},{"id":79,"name":"Gabon","code":"GA","flag":"🇬🇦"},{"id":80,"name":"Gambia","code":"GM","flag":"🇬🇲"},{"id":81,"name":"Georgia","code":"GE","flag":"🇬🇪"},{"id":82,"name":"Germany","code":"DE","flag":"🇩🇪"},{"id":83,"name":"Ghana","code":"GH","flag":"🇬🇭"},{"id":84,"name":"Gibraltar","code":"GI","flag":"🇬🇮"},{"id":85,"name":"Greece","code":"GR","flag":"🇬🇷"},{"id":86,"name":"Greenland","code":"GL","flag":"🇬🇱"},{"id":87,"name":"Grenada","code":"GD","flag":"🇬🇩"},{"id":88,"name":"Guadeloupe","code":"GP","flag":"🇬🇵"},{"id":89,"name":"Guam","code":"GU","flag":"🇬🇺"},{"id":90,"name":"Guatemala","code":"GT","flag":"🇬🇹"},{"id":91,"name":"Guernsey","code":"GG","flag":"🇬🇬"},{"id":92,"name":"Guinea","code":"GN","flag":"🇬🇳"},{"id":93,"name":"Guinea-Bissau","code":"GW","flag":"🇬🇼"},{"id":94,"name":"Guyana","code":"GY","flag":"🇬🇾"},{"id":95,"name":"Haiti","code":"HT","flag":"🇭🇹"},{"id":96,"name":"Heard Island and McDonald Islands","code":"HM","flag":"🇭🇲"},{"id":97,"name":"Honduras","code":"HN","flag":"🇭🇳"},{"id":98,"name":"Hong Kong","code":"HK","flag":"🇭🇰"},{"id":99,"name":"Hungary","code":"HU","flag":"🇭🇺"},{"id":100,"name":"Iceland","code":"IS","flag":"🇮🇸"},{"id":101,"name":"India","code":"IN","flag":"🇮🇳"},{"id":102,"name":"Indonesia","code":"ID","flag":"🇮🇩"},{"id":103,"name":"Iran","code":"IR","flag":"🇮🇷"},{"id":104,"name":"Iraq","code":"IQ","flag":"🇮🇶"},{"id":105,"name":"Ireland","code":"IE","flag":"🇮🇪"},{"id":106,"name":"Isle of Man","code":"IM","flag":"🇮🇲"},{"id":107,"name":"Israel","code":"IL","flag":"🇮🇱"},{"id":108,"name":"Italy","code":"IT","flag":"🇮🇹"},{"id":109,"name":"Jamaica","code":"JM","flag":"🇯🇲"},{"id":110,"name":"Japan","code":"JP","flag":"🇯🇵"},{"id":111,"name":"Jersey","code":"JE","flag":"🇯🇪"},{"id":112,"name":"Jordan","code":"JO","flag":"🇯🇴"},{"id":113,"name":"Kazakhstan","code":"KZ","flag":"🇰🇿"},{"id":114,"name":"Kenya","code":"KE","flag":"🇰🇪"},{"id":115,"name":"Kiribati","code":"KI","flag":"🇰🇮"},{"id":116,"name":"Kosovo","code":"XK","flag":"🇽🇰"},{"id":117,"name":"Kuwait","code":"KW","flag":"🇰🇼"},{"id":118,"name":"Kyrgyzstan","code":"KG","flag":"🇰🇬"},{"id":119,"name":"Laos","code":"LA","flag":"🇱🇦"},{"id":120,"name":"Latvia","code":"LV","flag":"🇱🇻"},{"id":121,"name":"Lebanon","code":"LB","flag":"🇱🇧"},{"id":122,"name":"Lesotho","code":"LS","flag":"🇱🇸"},{"id":123,"name":"Liberia","code":"LR","flag":"🇱🇷"},{"id":124,"name":"Libya","code":"LY","flag":"🇱🇾"},{"id":125,"name":"Liechtenstein","code":"LI","flag":"🇱🇮"},{"id":126,"name":"Lithuania","code":"LT","flag":"🇱🇹"},{"id":127,"name":"Luxembourg","code":"LU","flag":"🇱🇺"},{"id":128,"name":"Macao","code":"MO","flag":"🇲🇴"},{"id":129,"name":"Madagascar","code":"MG","flag":"🇲🇬"},{"id":130,"name":"Malawi","code":"MW","flag":"🇲🇼"},{"id":131,"name":"Malaysia","code":"MY","flag":"🇲🇾"},{"id":132,"name":"Maldives","code":"MV","flag":"🇲🇻"},{"id":133,"name":"Mali","code":"ML","flag":"🇲🇱"},{"id":134,"name":"Malta","code":"MT","flag":"🇲🇹"},{"id":135,"name":"Marshall Islands","code":"MH","flag":"🇲🇭"},{"id":136,"name":"Martinique","code":"MQ","flag":"🇲🇶"},{"id":137,"name":"Mauritania","code":"MR","flag":"🇲🇷"},{"id":138,"name":"Mauritius","code":"MU","flag":"🇲🇺"},{"id":139,"name":"Mayotte","code":"YT","flag":"🇾🇹"},{"id":140,"name":"Mexico","code":"MX","flag":"🇲🇽"},{"id":141,"name":"Micronesia","code":"FM","flag":"🇫🇲"},{"id":142,"name":"Moldova","code":"MD","flag":"🇲🇩"},{"id":143,"name":"Monaco","code":"MC","flag":"🇲🇨"},{"id":144,"name":"Mongolia","code":"MN","flag":"🇲🇳"},{"id":145,"name":"Montenegro","code":"ME","flag":"🇲🇪"},{"id":146,"name":"Montserrat","code":"MS","flag":"🇲🇸"},{"id":147,"name":"Morocco","code":"MA","flag":"🇲🇦"},{"id":148,"name":"Mozambique","code":"MZ","flag":"🇲🇿"},{"id":149,"name":"Myanmar","code":"MM","flag":"🇲🇲"},{"id":150,"name":"Namibia","code":"NA","flag":"🇳🇦"},{"id":151,"name":"Nauru","code":"NR","flag":"🇳🇷"},{"id":152,"name":"Nepal","code":"NP","flag":"🇳🇵"},{"id":153,"name":"Netherlands","code":"NL","flag":"🇳🇱"},{"id":154,"name":"New Caledonia","code":"NC","flag":"🇳🇨"},{"id":155,"name":"New Zealand","code":"NZ","flag":"🇳🇿"},{"id":156,"name":"Nicaragua","code":"NI","flag":"🇳🇮"},{"id":157,"name":"Niger","code":"NE","flag":"🇳🇪"},{"id":158,"name":"Nigeria","code":"NG","flag":"🇳🇬"},{"id":159,"name":"Niue","code":"NU","flag":"🇳🇺"},{"id":160,"name":"Norfolk Island","code":"NF","flag":"🇳🇫"},{"id":161,"name":"North Korea","code":"KP","flag":"🇰🇵"},{"id":162,"name":"North Macedonia","code":"MK","flag":"🇲🇰"},{"id":163,"name":"Northern Mariana Islands","code":"MP","flag":"🇲🇵"},{"id":164,"name":"Norway","code":"NO","flag":"🇳🇴"},{"id":165,"name":"Oman","code":"OM","flag":"🇴🇲"},{"id":166,"name":"Pakistan","code":"PK","flag":"🇵🇰"},{"id":167,"name":"Palau","code":"PW","flag":"🇵🇼"},{"id":168,"name":"Palestine","code":"PS","flag":"🇵🇸"},{"id":169,"name":"Panama","code":"PA","flag":"🇵🇦"},{"id":170,"name":"Papua New Guinea","code":"PG","flag":"🇵🇬"},{"id":171,"name":"Paraguay","code":"PY","flag":"🇵🇾"},{"id":172,"name":"Peru","code":"PE","flag":"🇵🇪"},{"id":173,"name":"Philippines","code":"PH","flag":"🇵🇭"},{"id":174,"name":"Pitcairn","code":"PN","flag":"🇵🇳"},{"id":175,"name":"Poland","code":"PL","flag":"🇵🇱"},{"id":176,"name":"Portugal","code":"PT","flag":"🇵🇹"},{"id":177,"name":"Puerto Rico","code":"PR","flag":"🇵🇷"},{"id":178,"name":"Qatar","code":"QA","flag":"🇶🇦"},{"id":179,"name":"Republic of the Congo","code":"CD","flag":"🇨🇩"},{"id":180,"name":"Romania","code":"RO","flag":"🇷🇴"},{"id":181,"name":"Russia","code":"RU","flag":"🇷🇺"},{"id":182,"name":"Rwanda","code":"RW","flag":"🇷🇼"},{"id":183,"name":"Réunion","code":"RE","flag":"🇷🇪"},{"id":184,"name":"Saint Barthélemy","code":"BL","flag":"🇧🇱"},{"id":185,"name":"Saint Helena","code":"SH","flag":"🇸🇭"},{"id":186,"name":"Saint Kitts and Nevis","code":"KN","flag":"🇰🇳"},{"id":187,"name":"Saint Lucia","code":"LC","flag":"🇱🇨"},{"id":188,"name":"Saint Martin (French part)","code":"MF","flag":"🇲🇫"},{"id":189,"name":"Saint Pierre and Miquelon","code":"PM","flag":"🇵🇲"},{"id":190,"name":"Saint Vincent and the Grenadines","code":"VC","flag":"🇻🇨"},{"id":191,"name":"Samoa","code":"WS","flag":"🇼🇸"},{"id":192,"name":"San Marino","code":"SM","flag":"🇸🇲"},{"id":193,"name":"Sao Tome and Principe","code":"ST","flag":"🇸🇹"},{"id":194,"name":"Saudi Arabia","code":"SA","flag":"🇸🇦"},{"id":195,"name":"Senegal","code":"SN","flag":"🇸🇳"},{"id":196,"name":"Serbia","code":"RS","flag":"🇷🇸"},{"id":197,"name":"Seychelles","code":"SC","flag":"🇸🇨"},{"id":198,"name":"Sierra Leone","code":"SL","flag":"🇸🇱"},{"id":199,"name":"Singapore","code":"SG","flag":"🇸🇬"},{"id":200,"name":"Sint Maarten (Dutch part)","code":"SX","flag":"🇸🇽"},{"id":201,"name":"Slovakia","code":"SK","flag":"🇸🇰"},{"id":202,"name":"Slovenia","code":"SI","flag":"🇸🇮"},{"id":203,"name":"Solomon Islands","code":"SB","flag":"🇸🇧"},{"id":204,"name":"Somalia","code":"SO","flag":"🇸🇴"},{"id":205,"name":"South Africa","code":"ZA","flag":"🇿🇦"},{"id":206,"name":"South Georgia and the South Sandwich Islands","code":"GS","flag":"🇬🇸"},{"id":207,"name":"South Korea","code":"KR","flag":"🇰🇷"},{"id":208,"name":"South Sudan","code":"SS","flag":"🇸🇸"},{"id":209,"name":"Spain","code":"ES","flag":"🇪🇸"},{"id":210,"name":"Sri Lanka","code":"LK","flag":"🇱🇰"},{"id":211,"name":"Sudan","code":"SD","flag":"🇸🇩"},{"id":212,"name":"Suriname","code":"SR","flag":"🇸🇷"},{"id":213,"name":"Svalbard and Jan Mayen","code":"SJ","flag":"🇸🇯"},{"id":214,"name":"Sweden","code":"SE","flag":"🇸🇪"},{"id":215,"name":"Switzerland","code":"CH","flag":"🇨🇭"},{"id":216,"name":"Syrian Arab Republic","code":"SY","flag":"🇸🇾"},{"id":217,"name":"Taiwan","code":"TW","flag":"🇹🇼"},{"id":218,"name":"Tajikistan","code":"TJ","flag":"🇹🇯"},{"id":219,"name":"Tanzania","code":"TZ","flag":"🇹🇿"},{"id":220,"name":"Thailand","code":"TH","flag":"🇹🇭"},{"id":221,"name":"Timor-Leste","code":"TL","flag":"🇹🇱"},{"id":222,"name":"Togo","code":"TG","flag":"🇹🇬"},{"id":223,"name":"Tokelau","code":"TK","flag":"🇹🇰"},{"id":224,"name":"Tonga","code":"TO","flag":"🇹🇴"},{"id":225,"name":"Trinidad and Tobago","code":"TT","flag":"🇹🇹"},{"id":226,"name":"Tunisia","code":"TN","flag":"🇹🇳"},{"id":227,"name":"Turkmenistan","code":"TM","flag":"🇹🇲"},{"id":228,"name":"Turks and Caicos Islands","code":"TC","flag":"🇹🇨"},{"id":229,"name":"Tuvalu","code":"TV","flag":"🇹🇻"},{"id":230,"name":"Türkiye","code":"TR","flag":"🇹🇷"},{"id":231,"name":"Uganda","code":"UG","flag":"🇺🇬"},{"id":232,"name":"Ukraine","code":"UA","flag":"🇺🇦"},{"id":233,"name":"United Arab Emirates","code":"AE","flag":"🇦🇪"},{"id":234,"name":"United Kingdom","code":"GB","flag":"🇬🇧"},{"id":235,"name":"United States","code":"US","flag":"🇺🇸"},{"id":236,"name":"United States Minor Outlying Islands","code":"UM","flag":"🇺🇲"},{"id":237,"name":"Uruguay","code":"UY","flag":"🇺🇾"},{"id":238,"name":"Uzbekistan","code":"UZ","flag":"🇺🇿"},{"id":239,"name":"Vanuatu","code":"VU","flag":"🇻🇺"},{"id":240,"name":"Vatican City","code":"VA","flag":"🇻🇦"},{"id":241,"name":"Venezuela","code":"VE","flag":"🇻🇪"},{"id":242,"name":"Viet Nam","code":"VN","flag":"🇻🇳"},{"id":243,"name":"Virgin Islands","code":"VG","flag":"🇻🇬"},{"id":244,"name":"Virgin Islands","code":"VI","flag":"🇻🇮"},{"id":245,"name":"Wallis and Futuna","code":"WF","flag":"🇼🇫"},{"id":246,"name":"Western Sahara","code":"EH","flag":"🇪🇭"},{"id":247,"name":"Yemen","code":"YE","flag":"🇾🇪"},{"id":248,"name":"Zambia","code":"ZM","flag":"🇿🇲"},{"id":249,"name":"Zimbabwe","code":"ZW","flag":"🇿🇼"},{"id":250,"name":"Åland Islands","code":"AX","flag":"🇦🇽"},{"id":251,"name":"Canary Islands","code":"IC","flag":"🇮🇨"}]`),
  L = {
    seasons: Kt,
    regionSize: Jt,
    refreshIntervalMs: Ht,
    colors: Vt,
    errors: zt,
    items: Yt,
    products: Zt,
    countries: Wt
  },
  Qt = L,
  H = L.seasons.length - 1,
  ya = L.seasons[H].zoom,
  ba = L.seasons[H].tileSize;

function Sa(n) {
  return Qt.countries[n - 1]
}
var v;
class Xt {
  constructor(e) {
    p(this, v, E(!0));
    this.url = e
  }
  get online() {
    return y(m(this, v))
  }
  set online(e) {
    b(m(this, v), e, !0)
  }
  async paint(e, t, a) {
    const r = Ft(e, i => `t=(${i.tile[0]},${i.tile[1]}),s=${i.season}`),
      c = (await Promise.all(Object.values(r).map(i => {
        const [d, u] = i[0].tile, w = i[0].season, h = {
          colors: i.map(G => G.colorIdx),
          coords: i.flatMap(G => G.pixel),
          t,
          fp: a
        };
        return this.request(`/s${w}/pixel/${d}/${u}`, {
          method: "POST",
          body: JSON.stringify(h),
          credentials: "include"
        })
      }))).filter(i => i.status !== 200);
    if (c.length) {
      const i = c[0];
      if (i.status === 401) throw new Error(ae());
      if (i.status === 403) {
        if (i.headers.get("cf-mitigated") === "challenge") throw new Error(it());
        const d = await i.json();
        throw (d == null ? void 0 : d.error) === "refresh" ? new Error(dt()) : (la.refresh(), new Error(oe()))
      } else if (i.status === 451) {
        const d = await c[0].json();
        d == null || d.err;
        const u = d == null ? void 0 : d.suspension;
        if (u === "ban") throw new Error(xt());
        if (u === "timeout") {
          const w = new Date(Date.now() + ((d == null ? void 0 : d.durationMs) ?? 0));
          throw new Error(qt({
            until: w.toLocaleString()
          }))
        } else throw new Error(o())
      } else throw new Error(o())
    }
  }
  async getPixelInfo({
    season: e,
    tile: [t, a],
    pixel: [r, s]
  }) {
    const c = await this.request(`/s${e}/pixel/${t}/${a}?x=${r}&y=${s}`);
    if (c.status !== 200) {
      const i = await c.text();
      throw new Error(ce({
        err: i
      }))
    }
    return c.json()
  }
  async getPixelAreaInfo({
    season: e,
    tile: [t, a],
    p0: [r, s],
    p1: [c, i]
  }) {
    const d = await this.request(`/moderator/pixel-area/s${e}/${t}/${a}?x0=${r}&y0=${s}&x1=${c}&y1=${i}`, {
      credentials: "include"
    });
    if (d.status !== 200) {
      const u = await d.text();
      throw console.error("Error while fetching pixel area info", u), new Error(o())
    }
    return d.json()
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
    const t = await this.request("/otp/send", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        phone: e
      })
    });
    if (t.status === 400) throw new Error(ue());
    if (t.status === 403) throw new Error(fe());
    if (t.status === 429) throw new Error(_e());
    if (t.status !== 200) throw new Error(o());
    return await t.json()
  }
  async verifyOtp(e) {
    const t = await this.request("/otp/verify", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        code: e
      })
    });
    if (t.status === 400) throw new Error(be());
    if (t.status !== 200) throw new Error(o());
    return await t.json()
  }
  async updateMe(e) {
    const t = await this.request("/me/update", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(e)
    });
    if (t.status === 400) {
      const a = await t.json();
      throw new Error(a == null ? void 0 : a.error)
    } else if (t.status !== 200) throw new Error(o())
  }
  async deleteMe() {
    if ((await this.request("/me/delete", {
        method: "POST",
        credentials: "include"
      })).status !== 200) throw new Error(o())
  }
  async favoriteLocation(e) {
    const t = await this.request("/favorite-location", {
      method: "POST",
      body: JSON.stringify({
        latitude: e[0],
        longitude: e[1]
      }),
      credentials: "include"
    });
    if (t.status === 403) throw new Error(Ee());
    if (t.status !== 200) throw new Error(o())
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
  async updateFavoriteLocation(e, t) {
    const a = await this.request("/favorite-location/update", {
      method: "POST",
      body: JSON.stringify({
        id: e,
        name: t
      }),
      credentials: "include"
    });
    if (a.status === 400) throw new Error(Ie());
    if (a.status !== 200) throw new Error(o())
  }
  async leaderboardPlayers(e) {
    const t = await this.request(`/leaderboard/player/${e}`);
    if (t.status !== 200) throw new Error(T());
    return t.json()
  }
  async leaderboardAlliances(e) {
    const t = await this.request(`/leaderboard/alliance/${e}`);
    if (t.status !== 200) throw new Error(T());
    return t.json()
  }
  async leaderboardRegions(e, t = 0) {
    const a = await this.request(`/leaderboard/region/${e}/${t}`);
    if (a.status === 200) return a.json();
    throw new Error(T())
  }
  async leaderboardRegionPlayers(e, t) {
    const a = await this.request(`/leaderboard/region/players/${e}/${t}`);
    if (a.status === 200) return a.json();
    throw new Error(T())
  }
  async leaderboardRegionAlliances(e, t) {
    const a = await this.request(`/leaderboard/region/alliances/${e}/${t}`);
    if (a.status === 200) return a.json();
    throw new Error(T())
  }
  async leaderboardCountries(e) {
    const t = await this.request(`/leaderboard/country/${e}`, {
      credentials: "include"
    });
    if (t.status === 200) return t.json();
    throw new Error(T())
  }
  async getRandomTile(e) {
    const t = await this.request(`/s${e}/tile/random`);
    if (t.status !== 200) throw new Error(o());
    return t.json()
  }
  async purchase(e) {
    const t = await this.request("/purchase", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        product: e
      })
    });
    if (t.status !== 200) throw t.status === 404 ? new Error(Ce()) : t.status === 403 ? new Error(Oe()) : t.status === 409 ? new Error(De()) : new Error(o())
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
    const t = await this.request("/alliance", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        name: e
      })
    });
    if (t.status === 200) return t.json();
    if (t.status === 400) {
      const a = await t.json();
      throw a.error === "max_characters" ? new Error(Ge()) : a.error === "name_taken" ? new Error(je()) : a.error == "empty_name" ? new Error(Ke()) : new Error(o())
    } else throw t.status === 403 ? new Error(Ve()) : new Error(o())
  }
  async leaveAlliance() {
    if ((await this.request("/alliance/leave", {
        method: "POST",
        credentials: "include"
      })).status !== 200) throw new Error(o())
  }
  async updateAllianceDescription(e) {
    const t = await this.request("/alliance/update-description", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        description: e
      })
    });
    if (t.status !== 200) throw t.status === 403 ? new Error(S()) : new Error(o())
  }
  async updateAllianceHeadquarters(e, t) {
    const a = await this.request("/alliance/update-headquarters", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        latitude: e,
        longitude: t
      })
    });
    if (a.status !== 200) throw a.status === 403 ? new Error(S()) : new Error(o())
  }
  async allianceLeaderboard(e) {
    const t = await this.request(`/alliance/leaderboard/${e}`, {
      credentials: "include"
    });
    if (t.status === 200) return t.json();
    throw t.status === 403 ? new Error(S()) : new Error(T())
  }
  async getAllianceInvites() {
    const e = await this.request("/alliance/invites", {
      credentials: "include"
    });
    if (e.status === 200) return e.json();
    throw e.status === 403 ? new Error(S()) : new Error(o())
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
    const t = await this.request(`/alliance/members/${e}`, {
      credentials: "include"
    });
    if (t.status === 200) return t.json();
    throw new Error(o())
  }
  async getAllianceBannedMembers(e) {
    const t = await this.request(`/alliance/members/banned/${e}`, {
      credentials: "include"
    });
    if (t.status === 200) return t.json();
    throw new Error(o())
  }
  async giveAllianceAdmin(e) {
    const t = await this.request("/alliance/give-admin", {
      body: JSON.stringify({
        promotedUserId: e
      }),
      method: "POST",
      credentials: "include"
    });
    if (t.status !== 200) throw t.status === 403 ? new Error(S()) : new Error(o())
  }
  async banAllianceUser(e) {
    const t = await this.request("/alliance/ban", {
      body: JSON.stringify({
        bannedUserId: e
      }),
      method: "POST",
      credentials: "include"
    });
    if (t.status !== 200) throw t.status === 403 ? new Error(S()) : new Error(o())
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
    const t = await this.request("/alliance/unban", {
      body: JSON.stringify({
        unbannedUserId: e
      }),
      method: "POST",
      credentials: "include"
    });
    if (t.status !== 200) throw t.status === 403 ? new Error(S()) : new Error(o())
  }
  async health() {
    return (await this.request("/health")).json()
  }
  async generatePixQrCode(e) {
    const t = await this.request(`/payment/abacatepay/create/pix/${e}`, {
      method: "POST",
      credentials: "include"
    });
    if (t.status === 400) {
      const r = await t.json();
      throw new Error(r == null ? void 0 : r.error)
    } else {
      if (t.status === 451) throw new Error($t());
      if (t.status !== 200) throw new Error(o())
    }
    return await t.json()
  }
  async refreshPixPayment(e) {
    const t = await this.request(`/payment/abacatepay/refresh/pix/${e}`, {
      method: "POST",
      credentials: "include"
    });
    if (t.status === 400) {
      const a = await t.json();
      throw new Error(a == null ? void 0 : a.error)
    } else if (t.status !== 200) throw new Error("Unexpected error on the server. Try again later");
    return t.json()
  }
  async getPixStatus(e) {
    const t = await this.request(`/payment/abacatepay/status/pix/${e}`, {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== 200) throw new Error("Erro inesperado. Tente atualizar a página.");
    return t.json()
  }
  async getModeratorTickets() {
    const e = await this.request("/moderator/tickets", {
      method: "GET",
      credentials: "include"
    });
    if (e.status !== 200) throw new f(o(), e.status);
    const t = await e.json();
    for (const a of t.tickets) a.reports.sort((r, s) => $[r.reason] - $[s.reason]);
    return t
  }
  async getSevereOpenTicketsCount() {
    const e = await this.request("/moderator/severe-open-tickets-count", {
      method: "GET",
      credentials: "include"
    });
    if (e.status !== 200) throw new f(o(), e.status);
    const {
      tickets: t
    } = await e.json();
    return t
  }
  async assignNewTickets() {
    const e = await this.request("/moderator/assign-new-tickets", {
      method: "POST",
      credentials: "include"
    });
    if (e.status !== 200) throw new f(o(), e.status);
    return e.json()
  }
  async setTicketStatus(e, t) {
    const a = await this.request("/moderator/set-ticket-status", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        ticketId: e,
        status: t
      })
    });
    if (a.status !== 200) throw new f(o(), a.status)
  }
  async request(e, t) {
    let a;
    try {
      a = await fetch(`${this.url}${e}`, t), this.online = !0
    } catch (r) {
      throw console.error("Fetch error:", r), this.online = !1, new Error(Qe(), {
        cause: r
      })
    }
    if (a.status === 429) throw new Error(tt());
    return a
  }
  async getOpenTicketsSummary() {
    const e = await this.request("/admin/count-all-tickets", {
      method: "GET",
      credentials: "include"
    });
    if (e.status !== 200) throw new f(o(), e.status);
    return e.json()
  }
  async getClosedTicketsByMod(e, t) {
    const a = await this.request(`/admin/closed-tickets?start=${encodeURIComponent(e)}&end=${encodeURIComponent(t)}`, {
      method: "GET",
      credentials: "include"
    });
    if (a.status !== 200) throw new f(o(), a.status);
    return (await a.json()).items.map(s => ({
      ...s,
      suspensionRate: (s.ban + s.timeout) / s.total
    }))
  }
  async getUserInfoById(e) {
    const t = await this.request(`/moderator/user-info/${encodeURIComponent(e)}`, {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== 404) {
      if (t.status !== 200) throw new f(o(), t.status);
      return t.json()
    }
  }
  async getMultipleUsersInfoById(e) {
    const t = await this.request(`/moderator/users?ids=${encodeURIComponent(e.join(","))}`, {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== 200) throw new f(o(), t.status);
    return t.json()
  }
  async getUserInfoFull(e) {
    const t = await this.request(`/admin/users?id=${encodeURIComponent(e)}`, {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== 404) {
      if (t.status !== 200) throw new f(o(), t.status);
      return t.json()
    }
  }
  async removeTimeout(e) {
    const t = await this.request("/admin/remove-timeout", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        userId: e
      })
    });
    if (t.status !== 200) throw new f(o(), t.status)
  }
  async removeBan(e) {
    const t = await this.request("/admin/remove-ban", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        userId: e
      })
    });
    if (t.status !== 200) throw new f(o(), t.status)
  }
  async getUserNotes(e) {
    const t = await this.request(`/admin/users/notes?userId=${encodeURIComponent(e)}`, {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== 200) throw new f(o(), t.status);
    return t.json()
  }
  async addUserNote(e, t) {
    const a = await this.request("/admin/users/notes", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        userId: e,
        note: t
      })
    });
    if (a.status !== 200) throw new f(o(), a.status)
  }
  async getUserPurchases(e) {
    const t = await this.request(`/admin/users/purchases?userId=${encodeURIComponent(e)}`, {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== 200) throw new f(o(), t.status);
    const a = await t.json();
    return (Array.isArray(a == null ? void 0 : a.purchases) ? a.purchases : []).map(s => ({
      id: String(s.id ?? ""),
      product_name: String(s.productName ?? s.product_name ?? ""),
      price: Number(s.price ?? 0),
      amount: Number(s.amount ?? 0),
      createdAt: typeof s.createdAt == "string" ? s.createdAt : s.CreatedAt ? new Date(s.CreatedAt).toISOString() : ""
    }))
  }
  async postSetUserDroplets(e, t) {
    const a = await this.request("/admin/users/set-user-droplets", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        userId: e,
        droplets: t
      })
    });
    if (a.status !== 200) throw new f(o(), a.status)
  }
  async getUserTickets(e) {
    const {
      userId: t,
      kind: a,
      page: r = 0,
      pageSize: s = 20
    } = e, c = new URLSearchParams({
      userId: String(t),
      kind: a,
      page: String(r),
      pageSize: String(s)
    }), i = await this.request(`/moderator/users/tickets?${c.toString()}`, {
      method: "GET",
      credentials: "include"
    });
    if (i.status !== 200) throw new f(o(), i.status);
    const d = await i.json(),
      u = Array.isArray(d == null ? void 0 : d.tickets) ? d.tickets : [];
    return u.sort((w, h) => new Date(h.createdAt).getTime() - new Date(w.createdAt).getTime()), u
  }
  mapTicketsToReportRows(e, t) {
    var r, s, c, i, d;
    const a = [];
    for (const u of e) {
      const w = u.status ?? "open";
      if (t === "received") {
        for (const h of u.reports) a.push({
          id: String(h.id),
          ticketId: String(u.id),
          createdAt: h.createdAt ?? u.createdAt,
          byUser: {
            id: Number(h.reportedBy),
            name: String(h.reportedByName ?? h.reportedBy),
            picture: h.reportedByPicture ?? null
          },
          reason: String(h.reason),
          status: w
        });
        continue
      }
      if (t === "sent") {
        for (const h of u.reports) a.push({
          id: String(h.id),
          ticketId: String(u.id),
          createdAt: h.createdAt ?? u.createdAt,
          toUser: {
            id: Number(u.reportedUser.id),
            name: String(u.reportedUser.name),
            picture: u.reportedUser.picture ?? null
          },
          reason: String(h.reason),
          status: w
        });
        continue
      }
      a.push({
        id: String(u.id),
        ticketId: String(u.id),
        createdAt: u.createdAt,
        handledBy: u.status && u.status !== "open" ? {
          id: ((r = u.handledBy) == null ? void 0 : r.id) ?? 0,
          name: ((s = u.handledBy) == null ? void 0 : s.name) ?? "Moderator",
          picture: ((c = u.handledBy) == null ? void 0 : c.picture) ?? null
        } : {
          id: 0,
          name: "—",
          picture: null
        },
        reason: String(((d = (i = u.reports) == null ? void 0 : i[0]) == null ? void 0 : d.reason) ?? "other"),
        status: w
      })
    }
    return a.sort((u, w) => new Date(w.createdAt).getTime() - new Date(u.createdAt).getTime()), a
  }
  async getModeratorClosedTicketStats(e) {
    const t = new URLSearchParams({
        id: String(e)
      }).toString(),
      a = await this.request(`/admin/users/tickets?${t}`, {
        method: "GET",
        credentials: "include"
      });
    if (a.status !== 200) throw new f(o(), a.status);
    const r = await a.json();
    return {
      closed_total: Number((r == null ? void 0 : r.closed_total) ?? 0),
      bans: Number((r == null ? void 0 : r.bans) ?? 0),
      ignored: Number((r == null ? void 0 : r.ignored) ?? 0),
      timeouts: Number((r == null ? void 0 : r.timeouts) ?? 0)
    }
  }
}
v = new WeakMap;
let F = new Xt(Z);

function ea(n) {
  const e = atob(n),
    t = new Uint8Array(e.length);
  for (let a = 0; a < e.length; a++) t[a] = e.charCodeAt(a);
  return t
}
class ta {
  constructor(e) {
    g(this, "bytes");
    this.bytes = e ?? new Uint8Array
  }
  set(e, t) {
    const a = Math.floor(e / 8),
      r = e % 8;
    if (a >= this.bytes.length) {
      const c = new Uint8Array(a + 1),
        i = c.length - this.bytes.length;
      for (let d = 0; d < this.bytes.length; d++) c[d + i] = this.bytes[d];
      this.bytes = c
    }
    const s = this.bytes.length - 1 - a;
    t ? this.bytes[s] = this.bytes[s] | 1 << r : this.bytes[s] = this.bytes[s] & ~(1 << r)
  }
  get(e) {
    const t = Math.floor(e / 8),
      a = e % 8,
      r = this.bytes.length;
    return t > r ? !1 : (this.bytes[r - 1 - t] & 1 << a) !== 0
  }
}

function Ta(...n) {
  return n.filter(Boolean).join(" ")
}
const aa = typeof document < "u";
let K = 0;
var A, I, P;
class na {
  constructor() {
    p(this, A, E(U([])));
    p(this, I, E(U([])));
    p(this, P, e => {
      const t = this.toasts.findIndex(a => a.id === e);
      return t === -1 ? null : t
    });
    g(this, "addToast", e => {
      aa && this.toasts.unshift(e)
    });
    g(this, "updateToast", ({
      id: e,
      data: t,
      type: a,
      message: r
    }) => {
      const s = this.toasts.findIndex(i => i.id === e),
        c = this.toasts[s];
      this.toasts[s] = {
        ...c,
        ...t,
        id: e,
        title: r,
        type: a,
        updated: !0
      }
    });
    g(this, "create", e => {
      var i;
      const {
        message: t,
        ...a
      } = e, r = typeof(e == null ? void 0 : e.id) == "number" || e.id && ((i = e.id) == null ? void 0 : i.length) > 0 ? e.id : K++, s = e.dismissable === void 0 ? !0 : e.dismissable, c = e.type === void 0 ? "default" : e.type;
      return j(() => {
        this.toasts.find(u => u.id === r) ? this.updateToast({
          id: r,
          data: e,
          type: c,
          message: t,
          dismissable: s
        }) : this.addToast({
          ...a,
          id: r,
          title: t,
          dismissable: s,
          type: c
        })
      }), r
    });
    g(this, "dismiss", e => (j(() => {
      if (e === void 0) {
        this.toasts = this.toasts.map(a => ({
          ...a,
          dismiss: !0
        }));
        return
      }
      const t = this.toasts.findIndex(a => a.id === e);
      this.toasts[t] && (this.toasts[t] = {
        ...this.toasts[t],
        dismiss: !0
      })
    }), e));
    g(this, "remove", e => {
      if (e === void 0) {
        this.toasts = [];
        return
      }
      const t = m(this, P).call(this, e);
      if (t !== null) return this.toasts.splice(t, 1), e
    });
    g(this, "message", (e, t) => this.create({
      ...t,
      type: "default",
      message: e
    }));
    g(this, "error", (e, t) => this.create({
      ...t,
      type: "error",
      message: e
    }));
    g(this, "success", (e, t) => this.create({
      ...t,
      type: "success",
      message: e
    }));
    g(this, "info", (e, t) => this.create({
      ...t,
      type: "info",
      message: e
    }));
    g(this, "warning", (e, t) => this.create({
      ...t,
      type: "warning",
      message: e
    }));
    g(this, "loading", (e, t) => this.create({
      ...t,
      type: "loading",
      message: e
    }));
    g(this, "promise", (e, t) => {
      if (!t) return;
      let a;
      t.loading !== void 0 && (a = this.create({
        ...t,
        promise: e,
        type: "loading",
        message: typeof t.loading == "string" ? t.loading : t.loading()
      }));
      const r = e instanceof Promise ? e : e();
      let s = a !== void 0;
      return r.then(c => {
        if (typeof c == "object" && c && "ok" in c && typeof c.ok == "boolean" && !c.ok) {
          s = !1;
          const i = ra(c);
          this.create({
            id: a,
            type: "error",
            message: i
          })
        } else if (t.success !== void 0) {
          s = !1;
          const i = typeof t.success == "function" ? t.success(c) : t.success;
          this.create({
            id: a,
            type: "success",
            message: i
          })
        }
      }).catch(c => {
        if (t.error !== void 0) {
          s = !1;
          const i = typeof t.error == "function" ? t.error(c) : t.error;
          this.create({
            id: a,
            type: "error",
            message: i
          })
        }
      }).finally(() => {
        var c;
        s && (this.dismiss(a), a = void 0), (c = t.finally) == null || c.call(t)
      }), a
    });
    g(this, "custom", (e, t) => {
      const a = (t == null ? void 0 : t.id) || K++;
      return this.create({
        component: e,
        id: a,
        ...t
      }), a
    });
    g(this, "removeHeight", e => {
      this.heights = this.heights.filter(t => t.toastId !== e)
    });
    g(this, "setHeight", e => {
      const t = m(this, P).call(this, e.toastId);
      if (t === null) {
        this.heights.push(e);
        return
      }
      this.heights[t] = e
    });
    g(this, "reset", () => {
      this.toasts = [], this.heights = []
    })
  }
  get toasts() {
    return y(m(this, A))
  }
  set toasts(e) {
    b(m(this, A), e, !0)
  }
  get heights() {
    return y(m(this, I))
  }
  set heights(e) {
    b(m(this, I), e, !0)
  }
}
A = new WeakMap, I = new WeakMap, P = new WeakMap;

function ra(n) {
  return n && typeof n == "object" && "status" in n ? `HTTP error! Status: ${n.status}` : `Error! ${n}`
}
const _ = new na;

function oa(n, e) {
  return _.create({
    message: n,
    ...e
  })
}
var q;
class Ea {
  constructor() {
    p(this, q, D(() => _.toasts.filter(e => !e.dismiss)))
  }
  get toasts() {
    return y(m(this, q))
  }
}
q = new WeakMap;
const sa = oa,
  ia = Object.assign(sa, {
    success: _.success,
    info: _.info,
    warning: _.warning,
    error: _.error,
    custom: _.custom,
    message: _.message,
    promise: _.promise,
    dismiss: _.dismiss,
    loading: _.loading,
    getActiveToasts: () => _.toasts.filter(n => !n.dismiss)
  });
var M, C, k, B, O, x, N;
class ca {
  constructor() {
    g(this, "channel", new BroadcastChannel("user-channel"));
    p(this, M, E());
    p(this, C, E(!0));
    p(this, k, E(Date.now()));
    p(this, B, E(Date.now()));
    p(this, O, D(() => {
      if (!this.data) return;
      const e = this.data.charges;
      if (e.count > e.max) return e.count;
      const t = e.count + Math.max((J.now - this.lastFetch) / e.cooldownMs, 0);
      return Math.min(e.max, t)
    }));
    p(this, x, D(() => this.charges !== void 0 && this.data ? (1 - this.charges % 1) * this.data.charges.cooldownMs : void 0));
    p(this, N, D(() => {
      var e;
      return new ta(ea(((e = this.data) == null ? void 0 : e.flagsBitmap) ?? "AA=="))
    }));
    this.channel.onmessage = e => {
      const t = JSON.parse(e.data);
      t.type === "refresh" ? (this.data = t.data, this.lastFetch = Date.now()) : t.type === "logout" && (this.data = void 0)
    }
  }
  get data() {
    return y(m(this, M))
  }
  set data(e) {
    b(m(this, M), e, !0)
  }
  get loading() {
    return y(m(this, C))
  }
  set loading(e) {
    b(m(this, C), e, !0)
  }
  get now() {
    return y(m(this, k))
  }
  set now(e) {
    b(m(this, k), e)
  }
  get lastFetch() {
    return y(m(this, B))
  }
  set lastFetch(e) {
    b(m(this, B), e)
  }
  get charges() {
    return y(m(this, O))
  }
  set charges(e) {
    b(m(this, O), e)
  }
  get cooldown() {
    return y(m(this, x))
  }
  set cooldown(e) {
    b(m(this, x), e)
  }
  get flagsBitmap() {
    return y(m(this, N))
  }
  set flagsBitmap(e) {
    b(m(this, N), e)
  }
  async refresh() {
    try {
      this.loading = !0, this.data = await F.me(), this.lastFetch = Date.now(), this.channel.postMessage(JSON.stringify({
        type: "refresh",
        data: this.data
      }))
    } catch (e) {
      console.error(e), ia.warning(rt(), {
        duration: 1e4
      })
    } finally {
      this.loading = !1
    }
  }
  async logout() {
    await F.logout(), this.channel.postMessage(JSON.stringify({
      type: "logout"
    })), this.data = void 0
  }
  hasColor(e) {
    var a;
    return e < 32 ? !0 : ((((a = this.data) == null ? void 0 : a.extraColorsBitmap) ?? 0) & 1 << e - 32) !== 0
  }
}
M = new WeakMap, C = new WeakMap, k = new WeakMap, B = new WeakMap, O = new WeakMap, x = new WeakMap, N = new WeakMap;
const la = new ca;
export {
  H as C, fa as P, Qt as S, F as a, pa as b, o as c, Z as d, _ as e, Ta as f, J as g, Ea as h, gt as i, yt as j, At as k, pt as l, Tt as m, Sa as n, wa as o, ya as p, ba as q, ga as r, _a as s, ia as t, la as u, ha as v
};