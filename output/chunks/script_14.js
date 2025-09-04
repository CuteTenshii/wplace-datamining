var H = Object.defineProperty;
var U = n => {
  throw TypeError(n)
};
var V = (n, e, t) => e in n ? H(n, e, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: t
}) : n[e] = t;
var g = (n, e, t) => V(n, typeof e != "symbol" ? e + "" : e, t),
  z = (n, e, t) => e.has(n) || U("Cannot " + t);
var u = (n, e, t) => (z(n, e, "read from private field"), t ? t.call(n) : e.get(n)),
  p = (n, e, t) => e.has(n) ? U("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(n) : e.set(n, t);
import {
  aH as G,
  aI as E,
  g as w,
  aJ as y,
  z as R,
  u as D
} from "./apxRKl0u.js";
import {
  g as l
} from "./C5GsJ62f.js";
const ma = "https://backend.wplace.live/files",
  ga = "0x4AAAAAABpHqZ-6i7uL0nmG",
  Y = "https://backend.wplace.live",
  fa = "0x4AAAAAABpqJe8FO0N84q0F";
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
    const n = navigator.languages.find(e => e.length === 2);
    if (n) return n
  }
  return (navigator.language || navigator.userLanguage || navigator.browserLanguage || "en").substring(0, 2)
}
const W = () => "Unexpected server error. Try again later.",
  Q = () => "Erro inesperado do servidor. Tente novamente mais tarde.",
  i = (n = {}, e = {}) => (e.locale ?? l()) === "en" ? W() : Q(),
  X = () => "You need to be logged in to paint",
  ee = () => "Você precisa estar conectado para pintar",
  te = (n = {}, e = {}) => (e.locale ?? l()) === "en" ? X() : ee(),
  ae = () => "You do not have enough charges to paint. Erase some pixels.",
  ne = () => "Você não possui tinta suficiente para pintar. Apague alguns pixeis.",
  re = (n = {}, e = {}) => (e.locale ?? l()) === "en" ? ae() : ne(),
  oe = n => `Error while painting: ${n.err}`,
  se = n => `Erro enquanto pinta: ${n.err}`,
  ie = (n, e = {}) => (e.locale ?? l()) === "en" ? oe(n) : se(n),
  ce = () => "Invalid phone number",
  le = () => "Número de telefone inválido",
  de = (n = {}, e = {}) => (e.locale ?? l()) === "en" ? ce() : le(),
  ue = () => "Phone already used",
  me = () => "Telefone já usado",
  ge = (n = {}, e = {}) => (e.locale ?? l()) === "en" ? ue() : me(),
  fe = () => "You have to wait to resend a code",
  he = () => "Você tem de esperar para reenviar um código",
  pe = (n = {}, e = {}) => (e.locale ?? l()) === "en" ? fe() : he(),
  _e = () => "Invalid code",
  we = () => "Código inválido",
  ye = (n = {}, e = {}) => (e.locale ?? l()) === "en" ? _e() : we(),
  be = () => "Operation not allowed. Maybe you have too many favorite locations.",
  Se = () => "Operação não permitida. Talvez você tenha muitos locais favoritos.",
  Te = (n = {}, e = {}) => (e.locale ?? l()) === "en" ? be() : Se(),
  Ee = () => "Location name is too big (max. 128 characters)",
  ve = () => "Nome da localização é grande demais (max. 128 caracteres)",
  Ae = (n = {}, e = {}) => (e.locale ?? l()) === "en" ? Ee() : ve(),
  Ie = () => "Couldn't complete the purchase. This item does not exist.",
  Pe = () => "Não foi possível concluir a compra. Este item não existe.",
  Me = (n = {}, e = {}) => (e.locale ?? l()) === "en" ? Ie() : Pe(),
  Ce = () => "You do not have enough droplets to buy this item.",
  ke = () => "Você não tem gotas suficientes para comprar este item.",
  Be = (n = {}, e = {}) => (e.locale ?? l()) === "en" ? Ce() : ke(),
  Oe = () => "You already have this item. Please refresh the page.",
  xe = () => "Você já possui este item. Atualize a página.",
  Ne = (n = {}, e = {}) => (e.locale ?? l()) === "en" ? Oe() : xe(),
  De = () => "Alliance name exceeded the maximum number of characters",
  qe = () => "O nome da aliança excedeu o número máximo de caracteres",
  Le = (n = {}, e = {}) => (e.locale ?? l()) === "en" ? De() : qe(),
  Ge = () => "Alliance name already taken",
  Ue = () => "Já possui uma aliança com esse nome",
  Re = (n = {}, e = {}) => (e.locale ?? l()) === "en" ? Ge() : Ue(),
  je = () => "Alliance with empty name",
  $e = () => "Aliança com nome vazio",
  Fe = (n = {}, e = {}) => (e.locale ?? l()) === "en" ? je() : $e(),
  Ke = () => "You are already in an alliance",
  Je = () => "Você já está em uma aliança",
  He = (n = {}, e = {}) => (e.locale ?? l()) === "en" ? Ke() : Je(),
  Ve = () => "You are not allowed to do this",
  ze = () => "Você não tem permissão para fazer isso",
  S = (n = {}, e = {}) => (e.locale ?? l()) === "en" ? Ve() : ze(),
  Ye = () => "Can't reach the server. Maybe you are without internet connection or the server is down. Try again later",
  Ze = () => "Não é possível acessar o servidor. Talvez você esteja sem conexão com a internet ou o servidor esteja fora do ar. Tente novamente mais tarde.",
  We = (n = {}, e = {}) => (e.locale ?? l()) === "en" ? Ye() : Ze(),
  Qe = () => "You or someone in your network is making a lot of requests to the server. Try again later.",
  Xe = () => "Você ou alguém na sua rede está fazendo muitas solicitações ao servidor. Tente novamente mais tarde.",
  et = (n = {}, e = {}) => (e.locale ?? l()) === "en" ? Qe() : Xe(),
  tt = () => "No internet access or the servers are offline. Try again later.",
  at = () => "Sem acesso à internet ou os servidores estão fora do ar. Tente novamente mais tarde.",
  nt = (n = {}, e = {}) => (e.locale ?? l()) === "en" ? tt() : at(),
  rt = () => "We’re currently experiencing high traffic. Some requests may not be processed at this time—please try again later. Thank you for your patience.",
  ot = () => "Estamos enfrentando um volume alto de acessos no momento. Algumas solicitações podem não ser processadas agora — por favor, tente novamente mais tarde. Agradecemos a sua compreensão.",
  st = (n = {}, e = {}) => (e.locale ?? l()) === "en" ? rt() : ot(),
  it = () => "Refresh your page to get the latest update",
  ct = () => "Recarregue sua página para obter as últimas atualizações",
  lt = (n = {}, e = {}) => (e.locale ?? l()) === "en" ? it() : ct(),
  dt = () => "Inappropriate content",
  ut = () => "Conteúdo inapropriado",
  mt = (n = {}, e = {}) => (e.locale ?? l()) === "en" ? dt() : ut(),
  gt = () => "Botting",
  ft = () => "Uso de bots",
  ht = (n = {}, e = {}) => (e.locale ?? l()) === "en" ? gt() : ft(),
  pt = () => "Hate speech",
  _t = () => "Discurso de Ódio",
  wt = (n = {}, e = {}) => (e.locale ?? l()) === "en" ? pt() : _t(),
  yt = () => "Griefing",
  bt = () => "Griefing",
  St = (n = {}, e = {}) => (e.locale ?? l()) === "en" ? yt() : bt(),
  Tt = () => "Doxxing",
  Et = () => "Doxxing",
  vt = (n = {}, e = {}) => (e.locale ?? l()) === "en" ? Tt() : Et(),
  At = () => "Leaderboard is temporarily disabled",
  It = () => "O ranking está temporariamente desativado",
  T = (n = {}, e = {}) => (e.locale ?? l()) === "en" ? At() : It(),
  Pt = () => "Multi-accounting",
  Mt = () => "Múltiplas contas",
  Ct = (n = {}, e = {}) => (e.locale ?? l()) === "en" ? Pt() : Mt(),
  kt = () => "Your account has been banned.",
  Bt = () => "Sua conta foi banida.",
  Ot = (n = {}, e = {}) => (e.locale ?? l()) === "en" ? kt() : Bt(),
  xt = n => `Your account has been suspended until ${n.until}.`,
  Nt = n => `Sua conta foi suspensa até ${n.until}.`,
  Dt = (n, e = {}) => (e.locale ?? l()) === "en" ? xt(n) : Nt(n),
  qt = () => "Breaking the rules",
  Lt = () => "Quebrar as regras",
  Gt = (n = {}, e = {}) => (e.locale ?? l()) === "en" ? qt() : Lt(),
  Ut = () => "Your account has been suspended for breaking the rules",
  Rt = () => "Sua conta foi suspensa por quebrar as regras",
  jt = (n = {}, e = {}) => (e.locale ?? l()) === "en" ? Ut() : Rt(),
  ha = {
    griefing: St(),
    "multi-accounting": Ct(),
    "hate-speech": wt(),
    bot: ht(),
    doxxing: vt(),
    "inappropriate-content": mt(),
    other: Gt()
  },
  pa = {
    doxxing: "text-red-600",
    "hate-speech": "text-red-600",
    "inappropriate-content": "text-amber-600",
    "multi-accounting": "text-amber-600",
    bot: "text-amber-600",
    griefing: "text-amber-600",
    other: "text-blue-600"
  },
  j = {
    doxxing: 0,
    "hate-speech": 1,
    "inappropriate-content": 2,
    bot: 3,
    "multi-accounting": 4,
    griefing: 5,
    other: 6
  };
class h extends Error {
  constructor(e, t) {
    super(e), this.message = e, this.status = t
  }
}

function $t(n, e) {
  const t = {};
  for (const a of n) {
    const r = e(a);
    let s = t[r];
    s ? s.push(a) : t[r] = [a]
  }
  return t
}

function _a(n, e) {
  const t = {};
  for (const a of n) {
    const r = e(a);
    t[r] = a
  }
  return t
}
const Ft = [{
    tileSize: 1e3,
    zoom: 11
  }],
  Kt = 4,
  Jt = 6e3,
  Ht = [{
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
  Vt = {
    needsPhoneVerification: "needs_phone_verification"
  },
  zt = {
    Droplet: {},
    "Max. Charge": {},
    "Paint Charge": {},
    Color: {},
    Flag: {},
    "Profile Picture": {}
  },
  Yt = {
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
  Zt = JSON.parse(`[{"id":1,"name":"Afghanistan","code":"AF","flag":"🇦🇫"},{"id":2,"name":"Albania","code":"AL","flag":"🇦🇱"},{"id":3,"name":"Algeria","code":"DZ","flag":"🇩🇿"},{"id":4,"name":"American Samoa","code":"AS","flag":"🇦🇸"},{"id":5,"name":"Andorra","code":"AD","flag":"🇦🇩"},{"id":6,"name":"Angola","code":"AO","flag":"🇦🇴"},{"id":7,"name":"Anguilla","code":"AI","flag":"🇦🇮"},{"id":8,"name":"Antarctica","code":"AQ","flag":"🇦🇶"},{"id":9,"name":"Antigua and Barbuda","code":"AG","flag":"🇦🇬"},{"id":10,"name":"Argentina","code":"AR","flag":"🇦🇷"},{"id":11,"name":"Armenia","code":"AM","flag":"🇦🇲"},{"id":12,"name":"Aruba","code":"AW","flag":"🇦🇼"},{"id":13,"name":"Australia","code":"AU","flag":"🇦🇺"},{"id":14,"name":"Austria","code":"AT","flag":"🇦🇹"},{"id":15,"name":"Azerbaijan","code":"AZ","flag":"🇦🇿"},{"id":16,"name":"Bahamas","code":"BS","flag":"🇧🇸"},{"id":17,"name":"Bahrain","code":"BH","flag":"🇧🇭"},{"id":18,"name":"Bangladesh","code":"BD","flag":"🇧🇩"},{"id":19,"name":"Barbados","code":"BB","flag":"🇧🇧"},{"id":20,"name":"Belarus","code":"BY","flag":"🇧🇾"},{"id":21,"name":"Belgium","code":"BE","flag":"🇧🇪"},{"id":22,"name":"Belize","code":"BZ","flag":"🇧🇿"},{"id":23,"name":"Benin","code":"BJ","flag":"🇧🇯"},{"id":24,"name":"Bermuda","code":"BM","flag":"🇧🇲"},{"id":25,"name":"Bhutan","code":"BT","flag":"🇧🇹"},{"id":26,"name":"Bolivia","code":"BO","flag":"🇧🇴"},{"id":27,"name":"Bonaire","code":"BQ","flag":"🇧🇶"},{"id":28,"name":"Bosnia and Herzegovina","code":"BA","flag":"🇧🇦"},{"id":29,"name":"Botswana","code":"BW","flag":"🇧🇼"},{"id":30,"name":"Bouvet Island","code":"BV","flag":"🇧🇻"},{"id":31,"name":"Brazil","code":"BR","flag":"🇧🇷"},{"id":32,"name":"British Indian Ocean Territory","code":"IO","flag":"🇮🇴"},{"id":33,"name":"Brunei Darussalam","code":"BN","flag":"🇧🇳"},{"id":34,"name":"Bulgaria","code":"BG","flag":"🇧🇬"},{"id":35,"name":"Burkina Faso","code":"BF","flag":"🇧🇫"},{"id":36,"name":"Burundi","code":"BI","flag":"🇧🇮"},{"id":37,"name":"Cabo Verde","code":"CV","flag":"🇨🇻"},{"id":38,"name":"Cambodia","code":"KH","flag":"🇰🇭"},{"id":39,"name":"Cameroon","code":"CM","flag":"🇨🇲"},{"id":40,"name":"Canada","code":"CA","flag":"🇨🇦"},{"id":41,"name":"Cayman Islands","code":"KY","flag":"🇰🇾"},{"id":42,"name":"Central African Republic","code":"CF","flag":"🇨🇫"},{"id":43,"name":"Chad","code":"TD","flag":"🇹🇩"},{"id":44,"name":"Chile","code":"CL","flag":"🇨🇱"},{"id":45,"name":"China","code":"CN","flag":"🇨🇳"},{"id":46,"name":"Christmas Island","code":"CX","flag":"🇨🇽"},{"id":47,"name":"Cocos (Keeling) Islands","code":"CC","flag":"🇨🇨"},{"id":48,"name":"Colombia","code":"CO","flag":"🇨🇴"},{"id":49,"name":"Comoros","code":"KM","flag":"🇰🇲"},{"id":50,"name":"Congo","code":"CG","flag":"🇨🇬"},{"id":51,"name":"Cook Islands","code":"CK","flag":"🇨🇰"},{"id":52,"name":"Costa Rica","code":"CR","flag":"🇨🇷"},{"id":53,"name":"Croatia","code":"HR","flag":"🇭🇷"},{"id":54,"name":"Cuba","code":"CU","flag":"🇨🇺"},{"id":55,"name":"Curaçao","code":"CW","flag":"🇨🇼"},{"id":56,"name":"Cyprus","code":"CY","flag":"🇨🇾"},{"id":57,"name":"Czechia","code":"CZ","flag":"🇨🇿"},{"id":58,"name":"Côte d'Ivoire","code":"CI","flag":"🇨🇮"},{"id":59,"name":"Denmark","code":"DK","flag":"🇩🇰"},{"id":60,"name":"Djibouti","code":"DJ","flag":"🇩🇯"},{"id":61,"name":"Dominica","code":"DM","flag":"🇩🇲"},{"id":62,"name":"Dominican Republic","code":"DO","flag":"🇩🇴"},{"id":63,"name":"Ecuador","code":"EC","flag":"🇪🇨"},{"id":64,"name":"Egypt","code":"EG","flag":"🇪🇬"},{"id":65,"name":"El Salvador","code":"SV","flag":"🇸🇻"},{"id":66,"name":"Equatorial Guinea","code":"GQ","flag":"🇬🇶"},{"id":67,"name":"Eritrea","code":"ER","flag":"🇪🇷"},{"id":68,"name":"Estonia","code":"EE","flag":"🇪🇪"},{"id":69,"name":"Eswatini","code":"SZ","flag":"🇸🇿"},{"id":70,"name":"Ethiopia","code":"ET","flag":"🇪🇹"},{"id":71,"name":"Falkland Islands (Malvinas)","code":"FK","flag":"🇫🇰"},{"id":72,"name":"Faroe Islands","code":"FO","flag":"🇫🇴"},{"id":73,"name":"Fiji","code":"FJ","flag":"🇫🇯"},{"id":74,"name":"Finland","code":"FI","flag":"🇫🇮"},{"id":75,"name":"France","code":"FR","flag":"🇫🇷"},{"id":76,"name":"French Guiana","code":"GF","flag":"🇬🇫"},{"id":77,"name":"French Polynesia","code":"PF","flag":"🇵🇫"},{"id":78,"name":"French Southern Territories","code":"TF","flag":"🇹🇫"},{"id":79,"name":"Gabon","code":"GA","flag":"🇬🇦"},{"id":80,"name":"Gambia","code":"GM","flag":"🇬🇲"},{"id":81,"name":"Georgia","code":"GE","flag":"🇬🇪"},{"id":82,"name":"Germany","code":"DE","flag":"🇩🇪"},{"id":83,"name":"Ghana","code":"GH","flag":"🇬🇭"},{"id":84,"name":"Gibraltar","code":"GI","flag":"🇬🇮"},{"id":85,"name":"Greece","code":"GR","flag":"🇬🇷"},{"id":86,"name":"Greenland","code":"GL","flag":"🇬🇱"},{"id":87,"name":"Grenada","code":"GD","flag":"🇬🇩"},{"id":88,"name":"Guadeloupe","code":"GP","flag":"🇬🇵"},{"id":89,"name":"Guam","code":"GU","flag":"🇬🇺"},{"id":90,"name":"Guatemala","code":"GT","flag":"🇬🇹"},{"id":91,"name":"Guernsey","code":"GG","flag":"🇬🇬"},{"id":92,"name":"Guinea","code":"GN","flag":"🇬🇳"},{"id":93,"name":"Guinea-Bissau","code":"GW","flag":"🇬🇼"},{"id":94,"name":"Guyana","code":"GY","flag":"🇬🇾"},{"id":95,"name":"Haiti","code":"HT","flag":"🇭🇹"},{"id":96,"name":"Heard Island and McDonald Islands","code":"HM","flag":"🇭🇲"},{"id":97,"name":"Honduras","code":"HN","flag":"🇭🇳"},{"id":98,"name":"Hong Kong","code":"HK","flag":"🇭🇰"},{"id":99,"name":"Hungary","code":"HU","flag":"🇭🇺"},{"id":100,"name":"Iceland","code":"IS","flag":"🇮🇸"},{"id":101,"name":"India","code":"IN","flag":"🇮🇳"},{"id":102,"name":"Indonesia","code":"ID","flag":"🇮🇩"},{"id":103,"name":"Iran","code":"IR","flag":"🇮🇷"},{"id":104,"name":"Iraq","code":"IQ","flag":"🇮🇶"},{"id":105,"name":"Ireland","code":"IE","flag":"🇮🇪"},{"id":106,"name":"Isle of Man","code":"IM","flag":"🇮🇲"},{"id":107,"name":"Israel","code":"IL","flag":"🇮🇱"},{"id":108,"name":"Italy","code":"IT","flag":"🇮🇹"},{"id":109,"name":"Jamaica","code":"JM","flag":"🇯🇲"},{"id":110,"name":"Japan","code":"JP","flag":"🇯🇵"},{"id":111,"name":"Jersey","code":"JE","flag":"🇯🇪"},{"id":112,"name":"Jordan","code":"JO","flag":"🇯🇴"},{"id":113,"name":"Kazakhstan","code":"KZ","flag":"🇰🇿"},{"id":114,"name":"Kenya","code":"KE","flag":"🇰🇪"},{"id":115,"name":"Kiribati","code":"KI","flag":"🇰🇮"},{"id":116,"name":"Kosovo","code":"XK","flag":"🇽🇰"},{"id":117,"name":"Kuwait","code":"KW","flag":"🇰🇼"},{"id":118,"name":"Kyrgyzstan","code":"KG","flag":"🇰🇬"},{"id":119,"name":"Laos","code":"LA","flag":"🇱🇦"},{"id":120,"name":"Latvia","code":"LV","flag":"🇱🇻"},{"id":121,"name":"Lebanon","code":"LB","flag":"🇱🇧"},{"id":122,"name":"Lesotho","code":"LS","flag":"🇱🇸"},{"id":123,"name":"Liberia","code":"LR","flag":"🇱🇷"},{"id":124,"name":"Libya","code":"LY","flag":"🇱🇾"},{"id":125,"name":"Liechtenstein","code":"LI","flag":"🇱🇮"},{"id":126,"name":"Lithuania","code":"LT","flag":"🇱🇹"},{"id":127,"name":"Luxembourg","code":"LU","flag":"🇱🇺"},{"id":128,"name":"Macao","code":"MO","flag":"🇲🇴"},{"id":129,"name":"Madagascar","code":"MG","flag":"🇲🇬"},{"id":130,"name":"Malawi","code":"MW","flag":"🇲🇼"},{"id":131,"name":"Malaysia","code":"MY","flag":"🇲🇾"},{"id":132,"name":"Maldives","code":"MV","flag":"🇲🇻"},{"id":133,"name":"Mali","code":"ML","flag":"🇲🇱"},{"id":134,"name":"Malta","code":"MT","flag":"🇲🇹"},{"id":135,"name":"Marshall Islands","code":"MH","flag":"🇲🇭"},{"id":136,"name":"Martinique","code":"MQ","flag":"🇲🇶"},{"id":137,"name":"Mauritania","code":"MR","flag":"🇲🇷"},{"id":138,"name":"Mauritius","code":"MU","flag":"🇲🇺"},{"id":139,"name":"Mayotte","code":"YT","flag":"🇾🇹"},{"id":140,"name":"Mexico","code":"MX","flag":"🇲🇽"},{"id":141,"name":"Micronesia","code":"FM","flag":"🇫🇲"},{"id":142,"name":"Moldova","code":"MD","flag":"🇲🇩"},{"id":143,"name":"Monaco","code":"MC","flag":"🇲🇨"},{"id":144,"name":"Mongolia","code":"MN","flag":"🇲🇳"},{"id":145,"name":"Montenegro","code":"ME","flag":"🇲🇪"},{"id":146,"name":"Montserrat","code":"MS","flag":"🇲🇸"},{"id":147,"name":"Morocco","code":"MA","flag":"🇲🇦"},{"id":148,"name":"Mozambique","code":"MZ","flag":"🇲🇿"},{"id":149,"name":"Myanmar","code":"MM","flag":"🇲🇲"},{"id":150,"name":"Namibia","code":"NA","flag":"🇳🇦"},{"id":151,"name":"Nauru","code":"NR","flag":"🇳🇷"},{"id":152,"name":"Nepal","code":"NP","flag":"🇳🇵"},{"id":153,"name":"Netherlands","code":"NL","flag":"🇳🇱"},{"id":154,"name":"New Caledonia","code":"NC","flag":"🇳🇨"},{"id":155,"name":"New Zealand","code":"NZ","flag":"🇳🇿"},{"id":156,"name":"Nicaragua","code":"NI","flag":"🇳🇮"},{"id":157,"name":"Niger","code":"NE","flag":"🇳🇪"},{"id":158,"name":"Nigeria","code":"NG","flag":"🇳🇬"},{"id":159,"name":"Niue","code":"NU","flag":"🇳🇺"},{"id":160,"name":"Norfolk Island","code":"NF","flag":"🇳🇫"},{"id":161,"name":"North Korea","code":"KP","flag":"🇰🇵"},{"id":162,"name":"North Macedonia","code":"MK","flag":"🇲🇰"},{"id":163,"name":"Northern Mariana Islands","code":"MP","flag":"🇲🇵"},{"id":164,"name":"Norway","code":"NO","flag":"🇳🇴"},{"id":165,"name":"Oman","code":"OM","flag":"🇴🇲"},{"id":166,"name":"Pakistan","code":"PK","flag":"🇵🇰"},{"id":167,"name":"Palau","code":"PW","flag":"🇵🇼"},{"id":168,"name":"Palestine","code":"PS","flag":"🇵🇸"},{"id":169,"name":"Panama","code":"PA","flag":"🇵🇦"},{"id":170,"name":"Papua New Guinea","code":"PG","flag":"🇵🇬"},{"id":171,"name":"Paraguay","code":"PY","flag":"🇵🇾"},{"id":172,"name":"Peru","code":"PE","flag":"🇵🇪"},{"id":173,"name":"Philippines","code":"PH","flag":"🇵🇭"},{"id":174,"name":"Pitcairn","code":"PN","flag":"🇵🇳"},{"id":175,"name":"Poland","code":"PL","flag":"🇵🇱"},{"id":176,"name":"Portugal","code":"PT","flag":"🇵🇹"},{"id":177,"name":"Puerto Rico","code":"PR","flag":"🇵🇷"},{"id":178,"name":"Qatar","code":"QA","flag":"🇶🇦"},{"id":179,"name":"Republic of the Congo","code":"CD","flag":"🇨🇩"},{"id":180,"name":"Romania","code":"RO","flag":"🇷🇴"},{"id":181,"name":"Russia","code":"RU","flag":"🇷🇺"},{"id":182,"name":"Rwanda","code":"RW","flag":"🇷🇼"},{"id":183,"name":"Réunion","code":"RE","flag":"🇷🇪"},{"id":184,"name":"Saint Barthélemy","code":"BL","flag":"🇧🇱"},{"id":185,"name":"Saint Helena","code":"SH","flag":"🇸🇭"},{"id":186,"name":"Saint Kitts and Nevis","code":"KN","flag":"🇰🇳"},{"id":187,"name":"Saint Lucia","code":"LC","flag":"🇱🇨"},{"id":188,"name":"Saint Martin (French part)","code":"MF","flag":"🇲🇫"},{"id":189,"name":"Saint Pierre and Miquelon","code":"PM","flag":"🇵🇲"},{"id":190,"name":"Saint Vincent and the Grenadines","code":"VC","flag":"🇻🇨"},{"id":191,"name":"Samoa","code":"WS","flag":"🇼🇸"},{"id":192,"name":"San Marino","code":"SM","flag":"🇸🇲"},{"id":193,"name":"Sao Tome and Principe","code":"ST","flag":"🇸🇹"},{"id":194,"name":"Saudi Arabia","code":"SA","flag":"🇸🇦"},{"id":195,"name":"Senegal","code":"SN","flag":"🇸🇳"},{"id":196,"name":"Serbia","code":"RS","flag":"🇷🇸"},{"id":197,"name":"Seychelles","code":"SC","flag":"🇸🇨"},{"id":198,"name":"Sierra Leone","code":"SL","flag":"🇸🇱"},{"id":199,"name":"Singapore","code":"SG","flag":"🇸🇬"},{"id":200,"name":"Sint Maarten (Dutch part)","code":"SX","flag":"🇸🇽"},{"id":201,"name":"Slovakia","code":"SK","flag":"🇸🇰"},{"id":202,"name":"Slovenia","code":"SI","flag":"🇸🇮"},{"id":203,"name":"Solomon Islands","code":"SB","flag":"🇸🇧"},{"id":204,"name":"Somalia","code":"SO","flag":"🇸🇴"},{"id":205,"name":"South Africa","code":"ZA","flag":"🇿🇦"},{"id":206,"name":"South Georgia and the South Sandwich Islands","code":"GS","flag":"🇬🇸"},{"id":207,"name":"South Korea","code":"KR","flag":"🇰🇷"},{"id":208,"name":"South Sudan","code":"SS","flag":"🇸🇸"},{"id":209,"name":"Spain","code":"ES","flag":"🇪🇸"},{"id":210,"name":"Sri Lanka","code":"LK","flag":"🇱🇰"},{"id":211,"name":"Sudan","code":"SD","flag":"🇸🇩"},{"id":212,"name":"Suriname","code":"SR","flag":"🇸🇷"},{"id":213,"name":"Svalbard and Jan Mayen","code":"SJ","flag":"🇸🇯"},{"id":214,"name":"Sweden","code":"SE","flag":"🇸🇪"},{"id":215,"name":"Switzerland","code":"CH","flag":"🇨🇭"},{"id":216,"name":"Syrian Arab Republic","code":"SY","flag":"🇸🇾"},{"id":217,"name":"Taiwan","code":"TW","flag":"🇹🇼"},{"id":218,"name":"Tajikistan","code":"TJ","flag":"🇹🇯"},{"id":219,"name":"Tanzania","code":"TZ","flag":"🇹🇿"},{"id":220,"name":"Thailand","code":"TH","flag":"🇹🇭"},{"id":221,"name":"Timor-Leste","code":"TL","flag":"🇹🇱"},{"id":222,"name":"Togo","code":"TG","flag":"🇹🇬"},{"id":223,"name":"Tokelau","code":"TK","flag":"🇹🇰"},{"id":224,"name":"Tonga","code":"TO","flag":"🇹🇴"},{"id":225,"name":"Trinidad and Tobago","code":"TT","flag":"🇹🇹"},{"id":226,"name":"Tunisia","code":"TN","flag":"🇹🇳"},{"id":227,"name":"Turkmenistan","code":"TM","flag":"🇹🇲"},{"id":228,"name":"Turks and Caicos Islands","code":"TC","flag":"🇹🇨"},{"id":229,"name":"Tuvalu","code":"TV","flag":"🇹🇻"},{"id":230,"name":"Türkiye","code":"TR","flag":"🇹🇷"},{"id":231,"name":"Uganda","code":"UG","flag":"🇺🇬"},{"id":232,"name":"Ukraine","code":"UA","flag":"🇺🇦"},{"id":233,"name":"United Arab Emirates","code":"AE","flag":"🇦🇪"},{"id":234,"name":"United Kingdom","code":"GB","flag":"🇬🇧"},{"id":235,"name":"United States","code":"US","flag":"🇺🇸"},{"id":236,"name":"United States Minor Outlying Islands","code":"UM","flag":"🇺🇲"},{"id":237,"name":"Uruguay","code":"UY","flag":"🇺🇾"},{"id":238,"name":"Uzbekistan","code":"UZ","flag":"🇺🇿"},{"id":239,"name":"Vanuatu","code":"VU","flag":"🇻🇺"},{"id":240,"name":"Vatican City","code":"VA","flag":"🇻🇦"},{"id":241,"name":"Venezuela","code":"VE","flag":"🇻🇪"},{"id":242,"name":"Viet Nam","code":"VN","flag":"🇻🇳"},{"id":243,"name":"Virgin Islands","code":"VG","flag":"🇻🇬"},{"id":244,"name":"Virgin Islands","code":"VI","flag":"🇻🇮"},{"id":245,"name":"Wallis and Futuna","code":"WF","flag":"🇼🇫"},{"id":246,"name":"Western Sahara","code":"EH","flag":"🇪🇭"},{"id":247,"name":"Yemen","code":"YE","flag":"🇾🇪"},{"id":248,"name":"Zambia","code":"ZM","flag":"🇿🇲"},{"id":249,"name":"Zimbabwe","code":"ZW","flag":"🇿🇼"},{"id":250,"name":"Åland Islands","code":"AX","flag":"🇦🇽"},{"id":251,"name":"Canary Islands","code":"IC","flag":"🇮🇨"}]`),
  L = {
    seasons: Ft,
    regionSize: Kt,
    refreshIntervalMs: Jt,
    colors: Ht,
    errors: Vt,
    items: zt,
    products: Yt,
    countries: Zt
  },
  Wt = L,
  J = L.seasons.length - 1,
  wa = L.seasons[J].zoom,
  ya = L.seasons[J].tileSize;

function ba(n) {
  return Wt.countries[n - 1]
}
var v;
class Qt {
  constructor(e) {
    p(this, v, E(!0));
    this.url = e
  }
  get online() {
    return w(u(this, v))
  }
  set online(e) {
    y(u(this, v), e, !0)
  }
  async paint(e, t) {
    const a = $t(e, o => `t=(${o.tile[0]},${o.tile[1]}),s=${o.season}`),
      s = (await Promise.all(Object.values(a).map(o => {
        const [c, m] = o[0].tile, d = o[0].season, b = {
          colors: o.map(f => f.colorIdx),
          coords: o.flatMap(f => f.pixel),
          t
        };
        return this.request(`/s${d}/pixel/${c}/${m}`, {
          method: "POST",
          body: JSON.stringify(b),
          credentials: "include"
        })
      }))).filter(o => o.status !== 200);
    if (s.length) {
      const o = s[0];
      if (o.status === 401) throw new Error(te());
      if (o.status === 403) {
        if (o.headers.get("cf-mitigated") === "challenge") throw new Error(st());
        const c = await o.json();
        throw (c == null ? void 0 : c.error) === "refresh" ? new Error(lt()) : (ca.refresh(), new Error(re()))
      } else if (o.status === 451) {
        const c = await s[0].json();
        c == null || c.err;
        const m = c == null ? void 0 : c.suspension;
        if (m === "ban") throw new Error(Ot());
        if (m === "timeout") {
          const d = new Date(Date.now() + ((c == null ? void 0 : c.durationMs) ?? 0));
          throw new Error(Dt({
            until: d.toLocaleString()
          }))
        } else throw new Error(i())
      } else throw new Error(i())
    }
  }
  async getPixelInfo({
    season: e,
    tile: [t, a],
    pixel: [r, s]
  }) {
    const o = await this.request(`/s${e}/pixel/${t}/${a}?x=${r}&y=${s}`);
    if (o.status !== 200) {
      const c = await o.text();
      throw new Error(ie({
        err: c
      }))
    }
    return o.json()
  }
  async getPixelAreaInfo({
    season: e,
    tile: [t, a],
    p0: [r, s],
    p1: [o, c]
  }) {
    const m = await this.request(`/moderator/pixel-area/s${e}/${t}/${a}?x0=${r}&y0=${s}&x1=${o}&y1=${c}`, {
      credentials: "include"
    });
    if (m.status !== 200) {
      const d = await m.text();
      throw console.error("Error while fetching pixel area info", d), new Error(i())
    }
    return m.json()
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
    if (e.status !== 200) throw new Error(i());
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
    if (t.status === 400) throw new Error(de());
    if (t.status === 403) throw new Error(ge());
    if (t.status === 429) throw new Error(pe());
    if (t.status !== 200) throw new Error(i());
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
    if (t.status === 400) throw new Error(ye());
    if (t.status !== 200) throw new Error(i());
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
    } else if (t.status !== 200) throw new Error(i())
  }
  async deleteMe() {
    if ((await this.request("/me/delete", {
        method: "POST",
        credentials: "include"
      })).status !== 200) throw new Error(i())
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
    if (t.status === 403) throw new Error(Te());
    if (t.status !== 200) throw new Error(i())
  }
  async deleteFavoriteLocation(e) {
    if ((await this.request("/favorite-location/delete", {
        method: "POST",
        body: JSON.stringify({
          id: e
        }),
        credentials: "include"
      })).status !== 200) throw new Error(i())
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
    if (a.status === 400) throw new Error(Ae());
    if (a.status !== 200) throw new Error(i())
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
    if (t.status !== 200) throw new Error(i());
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
    if (t.status !== 200) throw t.status === 404 ? new Error(Me()) : t.status === 403 ? new Error(Be()) : t.status === 409 ? new Error(Ne()) : new Error(i())
  }
  async getAlliance() {
    const e = await this.request("/alliance", {
      credentials: "include"
    });
    if (e.status === 200) return e.json();
    if (e.status === 404) return;
    throw new Error(i())
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
      throw a.error === "max_characters" ? new Error(Le()) : a.error === "name_taken" ? new Error(Re()) : a.error == "empty_name" ? new Error(Fe()) : new Error(i())
    } else throw t.status === 403 ? new Error(He()) : new Error(i())
  }
  async leaveAlliance() {
    if ((await this.request("/alliance/leave", {
        method: "POST",
        credentials: "include"
      })).status !== 200) throw new Error(i())
  }
  async updateAllianceDescription(e) {
    const t = await this.request("/alliance/update-description", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        description: e
      })
    });
    if (t.status !== 200) throw t.status === 403 ? new Error(S()) : new Error(i())
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
    if (a.status !== 200) throw a.status === 403 ? new Error(S()) : new Error(i())
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
    throw e.status === 403 ? new Error(S()) : new Error(i())
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
    throw new Error(i())
  }
  async getAllianceBannedMembers(e) {
    const t = await this.request(`/alliance/members/banned/${e}`, {
      credentials: "include"
    });
    if (t.status === 200) return t.json();
    throw new Error(i())
  }
  async giveAllianceAdmin(e) {
    const t = await this.request("/alliance/give-admin", {
      body: JSON.stringify({
        promotedUserId: e
      }),
      method: "POST",
      credentials: "include"
    });
    if (t.status !== 200) throw t.status === 403 ? new Error(S()) : new Error(i())
  }
  async banAllianceUser(e) {
    const t = await this.request("/alliance/ban", {
      body: JSON.stringify({
        bannedUserId: e
      }),
      method: "POST",
      credentials: "include"
    });
    if (t.status !== 200) throw t.status === 403 ? new Error(S()) : new Error(i())
  }
  async equipFlag(e) {
    if ((await this.request(`/flag/equip/${e}`, {
        method: "POST",
        credentials: "include"
      })).status !== 200) throw new Error(i())
  }
  async getMyProfilePictures() {
    const e = await this.request("/me/profile-pictures", {
      credentials: "include"
    });
    if (e.status !== 200) throw new Error(i());
    return e.json()
  }
  async changeProfilePicture(e) {
    if ((await this.request("/me/profile-picture/change", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          pictureId: e
        })
      })).status !== 200) throw new Error(i())
  }
  async unbanAllianceUser(e) {
    const t = await this.request("/alliance/unban", {
      body: JSON.stringify({
        unbannedUserId: e
      }),
      method: "POST",
      credentials: "include"
    });
    if (t.status !== 200) throw t.status === 403 ? new Error(S()) : new Error(i())
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
      if (t.status === 451) throw new Error(jt());
      if (t.status !== 200) throw new Error(i())
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
    if (e.status !== 200) throw new h(i(), e.status);
    const t = await e.json();
    for (const a of t.tickets) a.reports.sort((r, s) => j[r.reason] - j[s.reason]);
    return t
  }
  async getSevereOpenTicketsCount() {
    const e = await this.request("/moderator/severe-open-tickets-count", {
      method: "GET",
      credentials: "include"
    });
    if (e.status !== 200) throw new h(i(), e.status);
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
    if (e.status !== 200) throw new h(i(), e.status);
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
    if (a.status !== 200) throw new h(i(), a.status)
  }
  async request(e, t) {
    let a;
    try {
      a = await fetch(`${this.url}${e}`, t), this.online = !0
    } catch (r) {
      throw console.error("Fetch error:", r), this.online = !1, new Error(We(), {
        cause: r
      })
    }
    if (a.status === 429) throw new Error(et());
    return a
  }
  async getOpenTicketsSummary() {
    const e = await this.request("/admin/count-all-tickets", {
      method: "GET",
      credentials: "include"
    });
    if (e.status !== 200) throw new h(i(), e.status);
    return e.json()
  }
  async getClosedTicketsByMod(e, t) {
    const a = await this.request(`/admin/closed-tickets?start=${encodeURIComponent(e)}&end=${encodeURIComponent(t)}`, {
      method: "GET",
      credentials: "include"
    });
    if (a.status !== 200) throw new h(i(), a.status);
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
      if (t.status !== 200) throw new h(i(), t.status);
      return t.json()
    }
  }
  async getMultipleUsersInfoById(e) {
    const t = await this.request(`/moderator/users?ids=${encodeURIComponent(e.join(","))}`, {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== 200) throw new h(i(), t.status);
    return t.json()
  }
  async getUserInfoFull(e) {
    const t = await this.request(`/admin/users?id=${encodeURIComponent(e)}`, {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== 404) {
      if (t.status !== 200) throw new h(i(), t.status);
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
    if (t.status !== 200) throw new h(i(), t.status)
  }
  async removeBan(e) {
    const t = await this.request("/admin/remove-ban", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        userId: e
      })
    });
    if (t.status !== 200) throw new h(i(), t.status)
  }
  async getUserNotes(e) {
    const t = await this.request(`/admin/users/notes?userId=${encodeURIComponent(e)}`, {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== 200) throw new h(i(), t.status);
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
    if (a.status !== 200) throw new h(i(), a.status)
  }
  async getUserPurchases(e) {
    const t = await this.request(`/admin/users/purchases?userId=${encodeURIComponent(e)}`, {
      method: "GET",
      credentials: "include"
    });
    if (t.status !== 200) throw new h(i(), t.status);
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
    if (a.status !== 200) throw new h(i(), a.status)
  }
  async getUserTickets(e) {
    const {
      userId: t,
      kind: a,
      page: r = 0,
      pageSize: s = 20
    } = e, o = new URLSearchParams({
      userId: String(t),
      kind: a,
      page: String(r),
      pageSize: String(s)
    }), c = await this.request(`/moderator/users/tickets?${o.toString()}`, {
      method: "GET",
      credentials: "include"
    });
    if (c.status !== 200) throw new h(i(), c.status);
    const m = await c.json(),
      d = Array.isArray(m == null ? void 0 : m.tickets) ? m.tickets : [];
    return d.sort((b, f) => new Date(f.createdAt).getTime() - new Date(b.createdAt).getTime()), d
  }
  mapTicketsToReportRows(e, t) {
    var r, s, o, c, m;
    const a = [];
    for (const d of e) {
      const b = d.status ?? "open";
      if (t === "received") {
        for (const f of d.reports) a.push({
          id: String(f.id),
          ticketId: String(d.id),
          createdAt: f.createdAt ?? d.createdAt,
          byUser: {
            id: Number(f.reportedBy),
            name: String(f.reportedByName ?? f.reportedBy),
            picture: f.reportedByPicture ?? null
          },
          reason: String(f.reason),
          status: b
        });
        continue
      }
      if (t === "sent") {
        for (const f of d.reports) a.push({
          id: String(f.id),
          ticketId: String(d.id),
          createdAt: f.createdAt ?? d.createdAt,
          toUser: {
            id: Number(d.reportedUser.id),
            name: String(d.reportedUser.name),
            picture: d.reportedUser.picture ?? null
          },
          reason: String(f.reason),
          status: b
        });
        continue
      }
      a.push({
        id: String(d.id),
        ticketId: String(d.id),
        createdAt: d.createdAt,
        handledBy: d.status && d.status !== "open" ? {
          id: ((r = d.handledBy) == null ? void 0 : r.id) ?? 0,
          name: ((s = d.handledBy) == null ? void 0 : s.name) ?? "Moderator",
          picture: ((o = d.handledBy) == null ? void 0 : o.picture) ?? null
        } : {
          id: 0,
          name: "—",
          picture: null
        },
        reason: String(((m = (c = d.reports) == null ? void 0 : c[0]) == null ? void 0 : m.reason) ?? "other"),
        status: b
      })
    }
    return a.sort((d, b) => new Date(b.createdAt).getTime() - new Date(d.createdAt).getTime()), a
  }
  async getModeratorClosedTicketStats(e) {
    const t = new URLSearchParams({
        id: String(e)
      }).toString(),
      a = await this.request(`/admin/users/tickets?${t}`, {
        method: "GET",
        credentials: "include"
      });
    if (a.status !== 200) throw new h(i(), a.status);
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
let $ = new Qt(Y);

function Xt(n) {
  const e = atob(n),
    t = new Uint8Array(e.length);
  for (let a = 0; a < e.length; a++) t[a] = e.charCodeAt(a);
  return t
}
class ea {
  constructor(e) {
    g(this, "bytes");
    this.bytes = e ?? new Uint8Array
  }
  set(e, t) {
    const a = Math.floor(e / 8),
      r = e % 8;
    if (a >= this.bytes.length) {
      const o = new Uint8Array(a + 1),
        c = o.length - this.bytes.length;
      for (let m = 0; m < this.bytes.length; m++) o[m + c] = this.bytes[m];
      this.bytes = o
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

function Sa(...n) {
  return n.filter(Boolean).join(" ")
}
const ta = typeof document < "u";
let F = 0;
var A, I, P;
class aa {
  constructor() {
    p(this, A, E(G([])));
    p(this, I, E(G([])));
    p(this, P, e => {
      const t = this.toasts.findIndex(a => a.id === e);
      return t === -1 ? null : t
    });
    g(this, "addToast", e => {
      ta && this.toasts.unshift(e)
    });
    g(this, "updateToast", ({
      id: e,
      data: t,
      type: a,
      message: r
    }) => {
      const s = this.toasts.findIndex(c => c.id === e),
        o = this.toasts[s];
      this.toasts[s] = {
        ...o,
        ...t,
        id: e,
        title: r,
        type: a,
        updated: !0
      }
    });
    g(this, "create", e => {
      var c;
      const {
        message: t,
        ...a
      } = e, r = typeof(e == null ? void 0 : e.id) == "number" || e.id && ((c = e.id) == null ? void 0 : c.length) > 0 ? e.id : F++, s = e.dismissable === void 0 ? !0 : e.dismissable, o = e.type === void 0 ? "default" : e.type;
      return R(() => {
        this.toasts.find(d => d.id === r) ? this.updateToast({
          id: r,
          data: e,
          type: o,
          message: t,
          dismissable: s
        }) : this.addToast({
          ...a,
          id: r,
          title: t,
          dismissable: s,
          type: o
        })
      }), r
    });
    g(this, "dismiss", e => (R(() => {
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
      const t = u(this, P).call(this, e);
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
      return r.then(o => {
        if (typeof o == "object" && o && "ok" in o && typeof o.ok == "boolean" && !o.ok) {
          s = !1;
          const c = na(o);
          this.create({
            id: a,
            type: "error",
            message: c
          })
        } else if (t.success !== void 0) {
          s = !1;
          const c = typeof t.success == "function" ? t.success(o) : t.success;
          this.create({
            id: a,
            type: "success",
            message: c
          })
        }
      }).catch(o => {
        if (t.error !== void 0) {
          s = !1;
          const c = typeof t.error == "function" ? t.error(o) : t.error;
          this.create({
            id: a,
            type: "error",
            message: c
          })
        }
      }).finally(() => {
        var o;
        s && (this.dismiss(a), a = void 0), (o = t.finally) == null || o.call(t)
      }), a
    });
    g(this, "custom", (e, t) => {
      const a = (t == null ? void 0 : t.id) || F++;
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
      const t = u(this, P).call(this, e.toastId);
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
    return w(u(this, A))
  }
  set toasts(e) {
    y(u(this, A), e, !0)
  }
  get heights() {
    return w(u(this, I))
  }
  set heights(e) {
    y(u(this, I), e, !0)
  }
}
A = new WeakMap, I = new WeakMap, P = new WeakMap;

function na(n) {
  return n && typeof n == "object" && "status" in n ? `HTTP error! Status: ${n.status}` : `Error! ${n}`
}
const _ = new aa;

function ra(n, e) {
  return _.create({
    message: n,
    ...e
  })
}
var q;
class Ta {
  constructor() {
    p(this, q, D(() => _.toasts.filter(e => !e.dismiss)))
  }
  get toasts() {
    return w(u(this, q))
  }
}
q = new WeakMap;
const oa = ra,
  sa = Object.assign(oa, {
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
class ia {
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
      const t = e.count + Math.max((K.now - this.lastFetch) / e.cooldownMs, 0);
      return Math.min(e.max, t)
    }));
    p(this, x, D(() => this.charges !== void 0 && this.data ? (1 - this.charges % 1) * this.data.charges.cooldownMs : void 0));
    p(this, N, D(() => {
      var e;
      return new ea(Xt(((e = this.data) == null ? void 0 : e.flagsBitmap) ?? "AA=="))
    }));
    this.channel.onmessage = e => {
      const t = JSON.parse(e.data);
      t.type === "refresh" ? (this.data = t.data, this.lastFetch = Date.now()) : t.type === "logout" && (this.data = void 0)
    }
  }
  get data() {
    return w(u(this, M))
  }
  set data(e) {
    y(u(this, M), e, !0)
  }
  get loading() {
    return w(u(this, C))
  }
  set loading(e) {
    y(u(this, C), e, !0)
  }
  get now() {
    return w(u(this, k))
  }
  set now(e) {
    y(u(this, k), e)
  }
  get lastFetch() {
    return w(u(this, B))
  }
  set lastFetch(e) {
    y(u(this, B), e)
  }
  get charges() {
    return w(u(this, O))
  }
  set charges(e) {
    y(u(this, O), e)
  }
  get cooldown() {
    return w(u(this, x))
  }
  set cooldown(e) {
    y(u(this, x), e)
  }
  get flagsBitmap() {
    return w(u(this, N))
  }
  set flagsBitmap(e) {
    y(u(this, N), e)
  }
  async refresh() {
    try {
      this.loading = !0, this.data = await $.me(), this.lastFetch = Date.now(), this.channel.postMessage(JSON.stringify({
        type: "refresh",
        data: this.data
      }))
    } catch (e) {
      console.error(e), sa.warning(nt(), {
        duration: 1e4
      })
    } finally {
      this.loading = !1
    }
  }
  async logout() {
    await $.logout(), this.channel.postMessage(JSON.stringify({
      type: "logout"
    })), this.data = void 0
  }
  hasColor(e) {
    var a;
    return e < 32 ? !0 : ((((a = this.data) == null ? void 0 : a.extraColorsBitmap) ?? 0) & 1 << e - 32) !== 0
  }
}
M = new WeakMap, C = new WeakMap, k = new WeakMap, B = new WeakMap, O = new WeakMap, x = new WeakMap, N = new WeakMap;
const ca = new ia;
export {
  J as C, ga as P, Wt as S, $ as a, ha as b, i as c, Y as d, _ as e, Sa as f, K as g, Ta as h, mt as i, wt as j, vt as k, ht as l, St as m, ba as n, _a as o, wa as p, ya as q, ma as r, pa as s, sa as t, ca as u, fa as v
};