var $ = Object.defineProperty;
var x = n => {
  throw TypeError(n)
};
var J = (n, e, a) => e in n ? $(n, e, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: a
}) : n[e] = a;
var u = (n, e, a) => J(n, typeof e != "symbol" ? e + "" : e, a),
  V = (n, e, a) => e.has(n) || x("Cannot " + a);
var d = (n, e, a) => (V(n, e, "read from private field"), a ? a.call(n) : e.get(n)),
  m = (n, e, a) => e.has(n) ? x("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(n) : e.set(n, a);
import {
  aH as G,
  aS as w,
  y as f,
  aI as h,
  v as q,
  aU as O
} from "./BUjsOn5w.js";
import {
  g as l
} from "./C5GsJ62f.js";
const Ua = "https://backend.wplace.live/files",
  ja = "0x4AAAAAABpHqZ-6i7uL0nmG",
  H = "https://backend.wplace.live",
  Fa = "0x4AAAAAABpqJe8FO0N84q0F";
let j = G({
  dropletsDialogOpen: !1,
  muted: !1,
  language: z(),
  captcha: void 0,
  now: Date.now()
});
setInterval(() => {
  j.now = Date.now()
}, 500);

function z() {
  if (navigator.languages && navigator.languages.length > 0) {
    const n = navigator.languages.find(e => e.length === 2);
    if (n) return n
  }
  return (navigator.language || navigator.userLanguage || navigator.browserLanguage || "en").substring(0, 2)
}
const Y = () => "Unexpected server error. Try again later.",
  Z = () => "Erro inesperado do servidor. Tente novamente mais tarde.",
  i = (n = {}, e = {}) => (e.locale ?? l()) === "en" ? Y() : Z(),
  W = () => "You need to be logged in to paint",
  Q = () => "Você precisa estar conectado para pintar",
  X = (n = {}, e = {}) => (e.locale ?? l()) === "en" ? W() : Q(),
  ee = () => "You do not have enough charges to paint. Erase some pixels.",
  ae = () => "Você não possui tinta suficiente para pintar. Apague alguns pixeis.",
  te = (n = {}, e = {}) => (e.locale ?? l()) === "en" ? ee() : ae(),
  ne = () => "Your account has been suspended due to suspected multi-accounting.",
  re = () => "Sua conta foi suspensa devido à suspeita de múltiplas contas.",
  oe = (n = {}, e = {}) => (e.locale ?? l()) === "en" ? ne() : re(),
  se = n => `Error while painting: ${n.err}`,
  ie = n => `Erro enquanto pinta: ${n.err}`,
  le = (n, e = {}) => (e.locale ?? l()) === "en" ? se(n) : ie(n),
  ce = () => "Invalid phone number",
  de = () => "Número telefonico inválido",
  ue = (n = {}, e = {}) => (e.locale ?? l()) === "en" ? ce() : de(),
  me = () => "Phone already used",
  ge = () => "Telefone já usado",
  fe = (n = {}, e = {}) => (e.locale ?? l()) === "en" ? me() : ge(),
  he = () => "You have to wait to resend a code",
  _e = () => "Você tem de esperar para reenviar um código",
  pe = (n = {}, e = {}) => (e.locale ?? l()) === "en" ? he() : _e(),
  ye = () => "Invalid code",
  we = () => "Código inválido",
  be = (n = {}, e = {}) => (e.locale ?? l()) === "en" ? ye() : we(),
  Se = () => "Operation not allowed. Maybe you have too many favorite locations.",
  ve = () => "Operação não permitida. Talvez você tenha muitos locais favoritos.",
  Ee = (n = {}, e = {}) => (e.locale ?? l()) === "en" ? Se() : ve(),
  Te = () => "Location name is too big (max. 128 characters)",
  Pe = () => "Nome da localização é grande demais (max. 128 caracteres)",
  Ae = (n = {}, e = {}) => (e.locale ?? l()) === "en" ? Te() : Pe(),
  Me = () => "Couldn't complete the purchase. This item does not exist.",
  Ie = () => "Não foi possível concluir a compra. Este item não existe.",
  Ce = (n = {}, e = {}) => (e.locale ?? l()) === "en" ? Me() : Ie(),
  Be = () => "You do not have enough droplets to buy this item.",
  Oe = () => "Você não tem gotas suficientes para comprar este item.",
  De = (n = {}, e = {}) => (e.locale ?? l()) === "en" ? Be() : Oe(),
  Le = () => "You already have this item. Please refresh the page.",
  Ne = () => "Você já possui este item. Atualize a página.",
  ke = (n = {}, e = {}) => (e.locale ?? l()) === "en" ? Le() : Ne(),
  Ge = () => "Alliance name exceeded the maximum number of characters",
  xe = () => "O nome da aliança excedeu o número máximo de caracteres",
  qe = (n = {}, e = {}) => (e.locale ?? l()) === "en" ? Ge() : xe(),
  Re = () => "Alliance name already taken",
  Ue = () => "Já possui uma aliança com esse nome",
  je = (n = {}, e = {}) => (e.locale ?? l()) === "en" ? Re() : Ue(),
  Fe = () => "Alliance with empty name",
  Ke = () => "Aliança com nome vazio",
  $e = (n = {}, e = {}) => (e.locale ?? l()) === "en" ? Fe() : Ke(),
  Je = () => "You are already in an alliance",
  Ve = () => "Você já está em uma aliança",
  He = (n = {}, e = {}) => (e.locale ?? l()) === "en" ? Je() : Ve(),
  ze = () => "You are not allowed to do this",
  Ye = () => "Você não tem permissão para fazer isso",
  p = (n = {}, e = {}) => (e.locale ?? l()) === "en" ? ze() : Ye(),
  Ze = () => "Can't reach the server. Maybe you are without internet connection or the server is down. Try again later",
  We = () => "Não é possível acessar o servidor. Talvez você esteja sem conexão com a internet ou o servidor esteja fora do ar. Tente novamente mais tarde.",
  Qe = (n = {}, e = {}) => (e.locale ?? l()) === "en" ? Ze() : We(),
  Xe = () => "You or someone in your network is making a lot of requests to the server. Try again later.",
  ea = () => "Você ou alguém na sua rede está fazendo muitas solicitações ao servidor. Tente novamente mais tarde.",
  aa = (n = {}, e = {}) => (e.locale ?? l()) === "en" ? Xe() : ea(),
  ta = () => "No internet access or the servers are offline. Try again later.",
  na = () => "Sem acesso à internet ou os servidores estão fora do ar. Tente novamente mais tarde.",
  ra = (n = {}, e = {}) => (e.locale ?? l()) === "en" ? ta() : na(),
  oa = () => "Your account have been banned for breaking the rules",
  sa = () => "Sua conta foi banida por quebrar as regras",
  ia = (n = {}, e = {}) => (e.locale ?? l()) === "en" ? oa() : sa(),
  la = () => "We’re currently experiencing high traffic. Some requests may not be processed at this time—please try again later. Thank you for your patience.",
  ca = () => "Estamos enfrentando um volume alto de acessos no momento. Algumas solicitações podem não ser processadas agora — por favor, tente novamente mais tarde. Agradecemos a sua compreensão.",
  da = (n = {}, e = {}) => (e.locale ?? l()) === "en" ? la() : ca(),
  ua = () => "Refresh your page to get the latest update",
  ma = () => "Recarregue sua página para obter as últimas atualizações",
  ga = (n = {}, e = {}) => (e.locale ?? l()) === "en" ? ua() : ma(),
  fa = () => "Leaderboard is temporarily disabled",
  ha = () => "O ranking está temporariamente desativado",
  y = (n = {}, e = {}) => (e.locale ?? l()) === "en" ? fa() : ha();

function _a(n, e) {
  const a = {};
  for (const t of n) {
    const o = e(t);
    let c = a[o];
    c ? c.push(t) : a[o] = [t]
  }
  return a
}
const pa = [{
    tileSize: 1e3,
    zoom: 11
  }],
  ya = 4,
  wa = 6e3,
  ba = [{
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
  Sa = {
    needsPhoneVerification: "needs_phone_verification"
  },
  va = {
    Droplet: {},
    "Max. Charge": {},
    "Paint Charge": {},
    Color: {},
    Flag: {},
    "Profile Picture": {}
  },
  Ea = {
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
  Ta = JSON.parse(`[{"id":1,"name":"Afghanistan","code":"AF","flag":"🇦🇫"},{"id":2,"name":"Albania","code":"AL","flag":"🇦🇱"},{"id":3,"name":"Algeria","code":"DZ","flag":"🇩🇿"},{"id":4,"name":"American Samoa","code":"AS","flag":"🇦🇸"},{"id":5,"name":"Andorra","code":"AD","flag":"🇦🇩"},{"id":6,"name":"Angola","code":"AO","flag":"🇦🇴"},{"id":7,"name":"Anguilla","code":"AI","flag":"🇦🇮"},{"id":8,"name":"Antarctica","code":"AQ","flag":"🇦🇶"},{"id":9,"name":"Antigua and Barbuda","code":"AG","flag":"🇦🇬"},{"id":10,"name":"Argentina","code":"AR","flag":"🇦🇷"},{"id":11,"name":"Armenia","code":"AM","flag":"🇦🇲"},{"id":12,"name":"Aruba","code":"AW","flag":"🇦🇼"},{"id":13,"name":"Australia","code":"AU","flag":"🇦🇺"},{"id":14,"name":"Austria","code":"AT","flag":"🇦🇹"},{"id":15,"name":"Azerbaijan","code":"AZ","flag":"🇦🇿"},{"id":16,"name":"Bahamas","code":"BS","flag":"🇧🇸"},{"id":17,"name":"Bahrain","code":"BH","flag":"🇧🇭"},{"id":18,"name":"Bangladesh","code":"BD","flag":"🇧🇩"},{"id":19,"name":"Barbados","code":"BB","flag":"🇧🇧"},{"id":20,"name":"Belarus","code":"BY","flag":"🇧🇾"},{"id":21,"name":"Belgium","code":"BE","flag":"🇧🇪"},{"id":22,"name":"Belize","code":"BZ","flag":"🇧🇿"},{"id":23,"name":"Benin","code":"BJ","flag":"🇧🇯"},{"id":24,"name":"Bermuda","code":"BM","flag":"🇧🇲"},{"id":25,"name":"Bhutan","code":"BT","flag":"🇧🇹"},{"id":26,"name":"Bolivia","code":"BO","flag":"🇧🇴"},{"id":27,"name":"Bonaire","code":"BQ","flag":"🇧🇶"},{"id":28,"name":"Bosnia and Herzegovina","code":"BA","flag":"🇧🇦"},{"id":29,"name":"Botswana","code":"BW","flag":"🇧🇼"},{"id":30,"name":"Bouvet Island","code":"BV","flag":"🇧🇻"},{"id":31,"name":"Brazil","code":"BR","flag":"🇧🇷"},{"id":32,"name":"British Indian Ocean Territory","code":"IO","flag":"🇮🇴"},{"id":33,"name":"Brunei Darussalam","code":"BN","flag":"🇧🇳"},{"id":34,"name":"Bulgaria","code":"BG","flag":"🇧🇬"},{"id":35,"name":"Burkina Faso","code":"BF","flag":"🇧🇫"},{"id":36,"name":"Burundi","code":"BI","flag":"🇧🇮"},{"id":37,"name":"Cabo Verde","code":"CV","flag":"🇨🇻"},{"id":38,"name":"Cambodia","code":"KH","flag":"🇰🇭"},{"id":39,"name":"Cameroon","code":"CM","flag":"🇨🇲"},{"id":40,"name":"Canada","code":"CA","flag":"🇨🇦"},{"id":41,"name":"Cayman Islands","code":"KY","flag":"🇰🇾"},{"id":42,"name":"Central African Republic","code":"CF","flag":"🇨🇫"},{"id":43,"name":"Chad","code":"TD","flag":"🇹🇩"},{"id":44,"name":"Chile","code":"CL","flag":"🇨🇱"},{"id":45,"name":"China","code":"CN","flag":"🇨🇳"},{"id":46,"name":"Christmas Island","code":"CX","flag":"🇨🇽"},{"id":47,"name":"Cocos (Keeling) Islands","code":"CC","flag":"🇨🇨"},{"id":48,"name":"Colombia","code":"CO","flag":"🇨🇴"},{"id":49,"name":"Comoros","code":"KM","flag":"🇰🇲"},{"id":50,"name":"Congo","code":"CG","flag":"🇨🇬"},{"id":51,"name":"Cook Islands","code":"CK","flag":"🇨🇰"},{"id":52,"name":"Costa Rica","code":"CR","flag":"🇨🇷"},{"id":53,"name":"Croatia","code":"HR","flag":"🇭🇷"},{"id":54,"name":"Cuba","code":"CU","flag":"🇨🇺"},{"id":55,"name":"Curaçao","code":"CW","flag":"🇨🇼"},{"id":56,"name":"Cyprus","code":"CY","flag":"🇨🇾"},{"id":57,"name":"Czechia","code":"CZ","flag":"🇨🇿"},{"id":58,"name":"Côte d'Ivoire","code":"CI","flag":"🇨🇮"},{"id":59,"name":"Denmark","code":"DK","flag":"🇩🇰"},{"id":60,"name":"Djibouti","code":"DJ","flag":"🇩🇯"},{"id":61,"name":"Dominica","code":"DM","flag":"🇩🇲"},{"id":62,"name":"Dominican Republic","code":"DO","flag":"🇩🇴"},{"id":63,"name":"Ecuador","code":"EC","flag":"🇪🇨"},{"id":64,"name":"Egypt","code":"EG","flag":"🇪🇬"},{"id":65,"name":"El Salvador","code":"SV","flag":"🇸🇻"},{"id":66,"name":"Equatorial Guinea","code":"GQ","flag":"🇬🇶"},{"id":67,"name":"Eritrea","code":"ER","flag":"🇪🇷"},{"id":68,"name":"Estonia","code":"EE","flag":"🇪🇪"},{"id":69,"name":"Eswatini","code":"SZ","flag":"🇸🇿"},{"id":70,"name":"Ethiopia","code":"ET","flag":"🇪🇹"},{"id":71,"name":"Falkland Islands (Malvinas)","code":"FK","flag":"🇫🇰"},{"id":72,"name":"Faroe Islands","code":"FO","flag":"🇫🇴"},{"id":73,"name":"Fiji","code":"FJ","flag":"🇫🇯"},{"id":74,"name":"Finland","code":"FI","flag":"🇫🇮"},{"id":75,"name":"France","code":"FR","flag":"🇫🇷"},{"id":76,"name":"French Guiana","code":"GF","flag":"🇬🇫"},{"id":77,"name":"French Polynesia","code":"PF","flag":"🇵🇫"},{"id":78,"name":"French Southern Territories","code":"TF","flag":"🇹🇫"},{"id":79,"name":"Gabon","code":"GA","flag":"🇬🇦"},{"id":80,"name":"Gambia","code":"GM","flag":"🇬🇲"},{"id":81,"name":"Georgia","code":"GE","flag":"🇬🇪"},{"id":82,"name":"Germany","code":"DE","flag":"🇩🇪"},{"id":83,"name":"Ghana","code":"GH","flag":"🇬🇭"},{"id":84,"name":"Gibraltar","code":"GI","flag":"🇬🇮"},{"id":85,"name":"Greece","code":"GR","flag":"🇬🇷"},{"id":86,"name":"Greenland","code":"GL","flag":"🇬🇱"},{"id":87,"name":"Grenada","code":"GD","flag":"🇬🇩"},{"id":88,"name":"Guadeloupe","code":"GP","flag":"🇬🇵"},{"id":89,"name":"Guam","code":"GU","flag":"🇬🇺"},{"id":90,"name":"Guatemala","code":"GT","flag":"🇬🇹"},{"id":91,"name":"Guernsey","code":"GG","flag":"🇬🇬"},{"id":92,"name":"Guinea","code":"GN","flag":"🇬🇳"},{"id":93,"name":"Guinea-Bissau","code":"GW","flag":"🇬🇼"},{"id":94,"name":"Guyana","code":"GY","flag":"🇬🇾"},{"id":95,"name":"Haiti","code":"HT","flag":"🇭🇹"},{"id":96,"name":"Heard Island and McDonald Islands","code":"HM","flag":"🇭🇲"},{"id":97,"name":"Honduras","code":"HN","flag":"🇭🇳"},{"id":98,"name":"Hong Kong","code":"HK","flag":"🇭🇰"},{"id":99,"name":"Hungary","code":"HU","flag":"🇭🇺"},{"id":100,"name":"Iceland","code":"IS","flag":"🇮🇸"},{"id":101,"name":"India","code":"IN","flag":"🇮🇳"},{"id":102,"name":"Indonesia","code":"ID","flag":"🇮🇩"},{"id":103,"name":"Iran","code":"IR","flag":"🇮🇷"},{"id":104,"name":"Iraq","code":"IQ","flag":"🇮🇶"},{"id":105,"name":"Ireland","code":"IE","flag":"🇮🇪"},{"id":106,"name":"Isle of Man","code":"IM","flag":"🇮🇲"},{"id":107,"name":"Israel","code":"IL","flag":"🇮🇱"},{"id":108,"name":"Italy","code":"IT","flag":"🇮🇹"},{"id":109,"name":"Jamaica","code":"JM","flag":"🇯🇲"},{"id":110,"name":"Japan","code":"JP","flag":"🇯🇵"},{"id":111,"name":"Jersey","code":"JE","flag":"🇯🇪"},{"id":112,"name":"Jordan","code":"JO","flag":"🇯🇴"},{"id":113,"name":"Kazakhstan","code":"KZ","flag":"🇰🇿"},{"id":114,"name":"Kenya","code":"KE","flag":"🇰🇪"},{"id":115,"name":"Kiribati","code":"KI","flag":"🇰🇮"},{"id":116,"name":"Kosovo","code":"XK","flag":"🇽🇰"},{"id":117,"name":"Kuwait","code":"KW","flag":"🇰🇼"},{"id":118,"name":"Kyrgyzstan","code":"KG","flag":"🇰🇬"},{"id":119,"name":"Laos","code":"LA","flag":"🇱🇦"},{"id":120,"name":"Latvia","code":"LV","flag":"🇱🇻"},{"id":121,"name":"Lebanon","code":"LB","flag":"🇱🇧"},{"id":122,"name":"Lesotho","code":"LS","flag":"🇱🇸"},{"id":123,"name":"Liberia","code":"LR","flag":"🇱🇷"},{"id":124,"name":"Libya","code":"LY","flag":"🇱🇾"},{"id":125,"name":"Liechtenstein","code":"LI","flag":"🇱🇮"},{"id":126,"name":"Lithuania","code":"LT","flag":"🇱🇹"},{"id":127,"name":"Luxembourg","code":"LU","flag":"🇱🇺"},{"id":128,"name":"Macao","code":"MO","flag":"🇲🇴"},{"id":129,"name":"Madagascar","code":"MG","flag":"🇲🇬"},{"id":130,"name":"Malawi","code":"MW","flag":"🇲🇼"},{"id":131,"name":"Malaysia","code":"MY","flag":"🇲🇾"},{"id":132,"name":"Maldives","code":"MV","flag":"🇲🇻"},{"id":133,"name":"Mali","code":"ML","flag":"🇲🇱"},{"id":134,"name":"Malta","code":"MT","flag":"🇲🇹"},{"id":135,"name":"Marshall Islands","code":"MH","flag":"🇲🇭"},{"id":136,"name":"Martinique","code":"MQ","flag":"🇲🇶"},{"id":137,"name":"Mauritania","code":"MR","flag":"🇲🇷"},{"id":138,"name":"Mauritius","code":"MU","flag":"🇲🇺"},{"id":139,"name":"Mayotte","code":"YT","flag":"🇾🇹"},{"id":140,"name":"Mexico","code":"MX","flag":"🇲🇽"},{"id":141,"name":"Micronesia","code":"FM","flag":"🇫🇲"},{"id":142,"name":"Moldova","code":"MD","flag":"🇲🇩"},{"id":143,"name":"Monaco","code":"MC","flag":"🇲🇨"},{"id":144,"name":"Mongolia","code":"MN","flag":"🇲🇳"},{"id":145,"name":"Montenegro","code":"ME","flag":"🇲🇪"},{"id":146,"name":"Montserrat","code":"MS","flag":"🇲🇸"},{"id":147,"name":"Morocco","code":"MA","flag":"🇲🇦"},{"id":148,"name":"Mozambique","code":"MZ","flag":"🇲🇿"},{"id":149,"name":"Myanmar","code":"MM","flag":"🇲🇲"},{"id":150,"name":"Namibia","code":"NA","flag":"🇳🇦"},{"id":151,"name":"Nauru","code":"NR","flag":"🇳🇷"},{"id":152,"name":"Nepal","code":"NP","flag":"🇳🇵"},{"id":153,"name":"Netherlands","code":"NL","flag":"🇳🇱"},{"id":154,"name":"New Caledonia","code":"NC","flag":"🇳🇨"},{"id":155,"name":"New Zealand","code":"NZ","flag":"🇳🇿"},{"id":156,"name":"Nicaragua","code":"NI","flag":"🇳🇮"},{"id":157,"name":"Niger","code":"NE","flag":"🇳🇪"},{"id":158,"name":"Nigeria","code":"NG","flag":"🇳🇬"},{"id":159,"name":"Niue","code":"NU","flag":"🇳🇺"},{"id":160,"name":"Norfolk Island","code":"NF","flag":"🇳🇫"},{"id":161,"name":"North Korea","code":"KP","flag":"🇰🇵"},{"id":162,"name":"North Macedonia","code":"MK","flag":"🇲🇰"},{"id":163,"name":"Northern Mariana Islands","code":"MP","flag":"🇲🇵"},{"id":164,"name":"Norway","code":"NO","flag":"🇳🇴"},{"id":165,"name":"Oman","code":"OM","flag":"🇴🇲"},{"id":166,"name":"Pakistan","code":"PK","flag":"🇵🇰"},{"id":167,"name":"Palau","code":"PW","flag":"🇵🇼"},{"id":168,"name":"Palestine","code":"PS","flag":"🇵🇸"},{"id":169,"name":"Panama","code":"PA","flag":"🇵🇦"},{"id":170,"name":"Papua New Guinea","code":"PG","flag":"🇵🇬"},{"id":171,"name":"Paraguay","code":"PY","flag":"🇵🇾"},{"id":172,"name":"Peru","code":"PE","flag":"🇵🇪"},{"id":173,"name":"Philippines","code":"PH","flag":"🇵🇭"},{"id":174,"name":"Pitcairn","code":"PN","flag":"🇵🇳"},{"id":175,"name":"Poland","code":"PL","flag":"🇵🇱"},{"id":176,"name":"Portugal","code":"PT","flag":"🇵🇹"},{"id":177,"name":"Puerto Rico","code":"PR","flag":"🇵🇷"},{"id":178,"name":"Qatar","code":"QA","flag":"🇶🇦"},{"id":179,"name":"Republic of the Congo","code":"CD","flag":"🇨🇩"},{"id":180,"name":"Romania","code":"RO","flag":"🇷🇴"},{"id":181,"name":"Russia","code":"RU","flag":"🇷🇺"},{"id":182,"name":"Rwanda","code":"RW","flag":"🇷🇼"},{"id":183,"name":"Réunion","code":"RE","flag":"🇷🇪"},{"id":184,"name":"Saint Barthélemy","code":"BL","flag":"🇧🇱"},{"id":185,"name":"Saint Helena","code":"SH","flag":"🇸🇭"},{"id":186,"name":"Saint Kitts and Nevis","code":"KN","flag":"🇰🇳"},{"id":187,"name":"Saint Lucia","code":"LC","flag":"🇱🇨"},{"id":188,"name":"Saint Martin (French part)","code":"MF","flag":"🇲🇫"},{"id":189,"name":"Saint Pierre and Miquelon","code":"PM","flag":"🇵🇲"},{"id":190,"name":"Saint Vincent and the Grenadines","code":"VC","flag":"🇻🇨"},{"id":191,"name":"Samoa","code":"WS","flag":"🇼🇸"},{"id":192,"name":"San Marino","code":"SM","flag":"🇸🇲"},{"id":193,"name":"Sao Tome and Principe","code":"ST","flag":"🇸🇹"},{"id":194,"name":"Saudi Arabia","code":"SA","flag":"🇸🇦"},{"id":195,"name":"Senegal","code":"SN","flag":"🇸🇳"},{"id":196,"name":"Serbia","code":"RS","flag":"🇷🇸"},{"id":197,"name":"Seychelles","code":"SC","flag":"🇸🇨"},{"id":198,"name":"Sierra Leone","code":"SL","flag":"🇸🇱"},{"id":199,"name":"Singapore","code":"SG","flag":"🇸🇬"},{"id":200,"name":"Sint Maarten (Dutch part)","code":"SX","flag":"🇸🇽"},{"id":201,"name":"Slovakia","code":"SK","flag":"🇸🇰"},{"id":202,"name":"Slovenia","code":"SI","flag":"🇸🇮"},{"id":203,"name":"Solomon Islands","code":"SB","flag":"🇸🇧"},{"id":204,"name":"Somalia","code":"SO","flag":"🇸🇴"},{"id":205,"name":"South Africa","code":"ZA","flag":"🇿🇦"},{"id":206,"name":"South Georgia and the South Sandwich Islands","code":"GS","flag":"🇬🇸"},{"id":207,"name":"South Korea","code":"KR","flag":"🇰🇷"},{"id":208,"name":"South Sudan","code":"SS","flag":"🇸🇸"},{"id":209,"name":"Spain","code":"ES","flag":"🇪🇸"},{"id":210,"name":"Sri Lanka","code":"LK","flag":"🇱🇰"},{"id":211,"name":"Sudan","code":"SD","flag":"🇸🇩"},{"id":212,"name":"Suriname","code":"SR","flag":"🇸🇷"},{"id":213,"name":"Svalbard and Jan Mayen","code":"SJ","flag":"🇸🇯"},{"id":214,"name":"Sweden","code":"SE","flag":"🇸🇪"},{"id":215,"name":"Switzerland","code":"CH","flag":"🇨🇭"},{"id":216,"name":"Syrian Arab Republic","code":"SY","flag":"🇸🇾"},{"id":217,"name":"Taiwan","code":"TW","flag":"🇹🇼"},{"id":218,"name":"Tajikistan","code":"TJ","flag":"🇹🇯"},{"id":219,"name":"Tanzania","code":"TZ","flag":"🇹🇿"},{"id":220,"name":"Thailand","code":"TH","flag":"🇹🇭"},{"id":221,"name":"Timor-Leste","code":"TL","flag":"🇹🇱"},{"id":222,"name":"Togo","code":"TG","flag":"🇹🇬"},{"id":223,"name":"Tokelau","code":"TK","flag":"🇹🇰"},{"id":224,"name":"Tonga","code":"TO","flag":"🇹🇴"},{"id":225,"name":"Trinidad and Tobago","code":"TT","flag":"🇹🇹"},{"id":226,"name":"Tunisia","code":"TN","flag":"🇹🇳"},{"id":227,"name":"Turkmenistan","code":"TM","flag":"🇹🇲"},{"id":228,"name":"Turks and Caicos Islands","code":"TC","flag":"🇹🇨"},{"id":229,"name":"Tuvalu","code":"TV","flag":"🇹🇻"},{"id":230,"name":"Türkiye","code":"TR","flag":"🇹🇷"},{"id":231,"name":"Uganda","code":"UG","flag":"🇺🇬"},{"id":232,"name":"Ukraine","code":"UA","flag":"🇺🇦"},{"id":233,"name":"United Arab Emirates","code":"AE","flag":"🇦🇪"},{"id":234,"name":"United Kingdom","code":"GB","flag":"🇬🇧"},{"id":235,"name":"United States","code":"US","flag":"🇺🇸"},{"id":236,"name":"United States Minor Outlying Islands","code":"UM","flag":"🇺🇲"},{"id":237,"name":"Uruguay","code":"UY","flag":"🇺🇾"},{"id":238,"name":"Uzbekistan","code":"UZ","flag":"🇺🇿"},{"id":239,"name":"Vanuatu","code":"VU","flag":"🇻🇺"},{"id":240,"name":"Vatican City","code":"VA","flag":"🇻🇦"},{"id":241,"name":"Venezuela","code":"VE","flag":"🇻🇪"},{"id":242,"name":"Viet Nam","code":"VN","flag":"🇻🇳"},{"id":243,"name":"Virgin Islands","code":"VG","flag":"🇻🇬"},{"id":244,"name":"Virgin Islands","code":"VI","flag":"🇻🇮"},{"id":245,"name":"Wallis and Futuna","code":"WF","flag":"🇼🇫"},{"id":246,"name":"Western Sahara","code":"EH","flag":"🇪🇭"},{"id":247,"name":"Yemen","code":"YE","flag":"🇾🇪"},{"id":248,"name":"Zambia","code":"ZM","flag":"🇿🇲"},{"id":249,"name":"Zimbabwe","code":"ZW","flag":"🇿🇼"},{"id":250,"name":"Åland Islands","code":"AX","flag":"🇦🇽"},{"id":251,"name":"Canary Islands","code":"IC","flag":"🇮🇨"}]`),
  L = {
    seasons: pa,
    regionSize: ya,
    refreshIntervalMs: wa,
    colors: ba,
    errors: Sa,
    items: va,
    products: Ea,
    countries: Ta
  },
  Pa = L,
  F = L.seasons.length - 1,
  Ka = L.seasons[F].zoom,
  $a = L.seasons[F].tileSize;

function Ja(n) {
  return Pa.countries[n - 1]
}
var b;
class Aa {
  constructor(e) {
    m(this, b, w(!0));
    this.url = e
  }
  get online() {
    return f(d(this, b))
  }
  set online(e) {
    h(d(this, b), e, !0)
  }
  async paint(e, a) {
    const t = _a(e, r => `t=(${r.tile[0]},${r.tile[1]}),s=${r.season}`),
      c = (await Promise.all(Object.values(t).map(r => {
        const [s, _] = r[0].tile, N = r[0].season, K = {
          colors: r.map(k => k.colorIdx),
          coords: r.flatMap(k => k.pixel),
          t: a
        };
        return this.request(`/s${N}/pixel/${s}/${_}`, {
          method: "POST",
          body: JSON.stringify(K),
          credentials: "include"
        })
      }))).filter(r => r.status !== 200);
    if (c.length) {
      const r = c[0];
      if (r.status === 401) throw new Error(X());
      if (r.status === 403) {
        if (r.headers.get("cf-mitigated") === "challenge") throw new Error(da());
        const s = await r.json();
        throw (s == null ? void 0 : s.error) === "refresh" ? new Error(ga()) : (Ga.refresh(), new Error(te()))
      } else if (r.status === 451) {
        const s = await c[0].json();
        if ((s == null ? void 0 : s.error) === "multi-accounting") throw new Error(oe());
        if ((s == null ? void 0 : s.error) === "suspended") throw new Error(ia())
      } else throw new Error(i())
    }
  }
  async getPixelInfo({
    season: e,
    tile: [a, t],
    pixel: [o, c]
  }) {
    const r = await this.request(`/s${e}/pixel/${a}/${t}?x=${o}&y=${c}`);
    if (r.status !== 200) {
      const s = await r.text();
      throw new Error(le({
        err: s
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
    return (await this.request(`/payment/refresh-session/${e}`, {
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
    const a = await this.request("/otp/send", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        phone: e
      })
    });
    if (a.status === 400) throw new Error(ue());
    if (a.status === 403) throw new Error(fe());
    if (a.status === 429) throw new Error(pe());
    if (a.status !== 200) throw new Error(i());
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
    if (a.status === 400) throw new Error(be());
    if (a.status !== 200) throw new Error(i());
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
    } else if (a.status !== 200) throw new Error(i())
  }
  async deleteMe() {
    if ((await this.request("/me/delete", {
        method: "POST",
        credentials: "include"
      })).status !== 200) throw new Error(i())
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
    if (a.status !== 200) throw new Error(i())
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
  async updateFavoriteLocation(e, a) {
    const t = await this.request("/favorite-location/update", {
      method: "POST",
      body: JSON.stringify({
        id: e,
        name: a
      }),
      credentials: "include"
    });
    if (t.status === 400) throw new Error(Ae());
    if (t.status !== 200) throw new Error(i())
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
    const t = await this.request(`/leaderboard/region/${e}/${a}`);
    if (t.status === 200) return t.json();
    throw new Error(y())
  }
  async leaderboardRegionPlayers(e, a) {
    const t = await this.request(`/leaderboard/region/players/${e}/${a}`);
    if (t.status === 200) return t.json();
    throw new Error(y())
  }
  async leaderboardRegionAlliances(e, a) {
    const t = await this.request(`/leaderboard/region/alliances/${e}/${a}`);
    if (t.status === 200) return t.json();
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
    if (a.status !== 200) throw new Error(i());
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
    if (a.status !== 200) throw a.status === 404 ? new Error(Ce()) : a.status === 403 ? new Error(De()) : a.status === 409 ? new Error(ke()) : new Error(i())
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
      throw t.error === "max_characters" ? new Error(qe()) : t.error === "name_taken" ? new Error(je()) : t.error == "empty_name" ? new Error($e()) : new Error(i())
    } else throw a.status === 403 ? new Error(He()) : new Error(i())
  }
  async leaveAlliance() {
    if ((await this.request("/alliance/leave", {
        method: "POST",
        credentials: "include"
      })).status !== 200) throw new Error(i())
  }
  async updateAllianceDescription(e) {
    const a = await this.request("/alliance/update-description", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        description: e
      })
    });
    if (a.status !== 200) throw a.status === 403 ? new Error(p()) : new Error(i())
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
    if (t.status !== 200) throw t.status === 403 ? new Error(p()) : new Error(i())
  }
  async allianceLeaderboard(e, a) {
    const t = await this.request(`/alliance/${e}/leaderboard/${a}`, {
      credentials: "include"
    });
    if (t.status === 200) return t.json();
    throw t.status === 403 ? new Error(p()) : new Error(y())
  }
  async getAllianceInvites() {
    const e = await this.request("/alliance/invites", {
      credentials: "include"
    });
    if (e.status === 200) return e.json();
    throw e.status === 403 ? new Error(p()) : new Error(i())
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
    throw new Error(i())
  }
  async getAllianceBannedMembers(e) {
    const a = await this.request(`/alliance/members/banned/${e}`, {
      credentials: "include"
    });
    if (a.status === 200) return a.json();
    throw new Error(i())
  }
  async giveAllianceAdmin(e) {
    const a = await this.request("/alliance/give-admin", {
      body: JSON.stringify({
        promotedUserId: e
      }),
      method: "POST",
      credentials: "include"
    });
    if (a.status !== 200) throw a.status === 403 ? new Error(p()) : new Error(i())
  }
  async banAllianceUser(e) {
    const a = await this.request("/alliance/ban", {
      body: JSON.stringify({
        bannedUserId: e
      }),
      method: "POST",
      credentials: "include"
    });
    if (a.status !== 200) throw a.status === 403 ? new Error(p()) : new Error(i())
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
    const a = await this.request("/alliance/unban", {
      body: JSON.stringify({
        unbannedUserId: e
      }),
      method: "POST",
      credentials: "include"
    });
    if (a.status !== 200) throw a.status === 403 ? new Error(p()) : new Error(i())
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
      const o = await a.json();
      throw new Error(o == null ? void 0 : o.error)
    } else if (a.status !== 200) throw new Error("Unexpected error on the server. Try again later");
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
  async request(e, a) {
    let t;
    try {
      t = await fetch(`${this.url}${e}`, a), this.online = !0
    } catch (o) {
      throw console.error("Fetch error:", o), this.online = !1, new Error(Qe(), {
        cause: o
      })
    }
    if (t.status === 429) throw new Error(aa());
    return t
  }
}
b = new WeakMap;
let R = new Aa(H);

function Ma(n) {
  const e = atob(n),
    a = new Uint8Array(e.length);
  for (let t = 0; t < e.length; t++) a[t] = e.charCodeAt(t);
  return a
}
class Ia {
  constructor(e) {
    u(this, "bytes");
    this.bytes = e ?? new Uint8Array
  }
  set(e, a) {
    const t = Math.floor(e / 8),
      o = e % 8;
    if (t >= this.bytes.length) {
      const r = new Uint8Array(t + 1),
        s = r.length - this.bytes.length;
      for (let _ = 0; _ < this.bytes.length; _++) r[_ + s] = this.bytes[_];
      this.bytes = r
    }
    const c = this.bytes.length - 1 - t;
    a ? this.bytes[c] = this.bytes[c] | 1 << o : this.bytes[c] = this.bytes[c] & ~(1 << o)
  }
  get(e) {
    const a = Math.floor(e / 8),
      t = e % 8,
      o = this.bytes.length;
    return a > o ? !1 : (this.bytes[o - 1 - a] & 1 << t) !== 0
  }
}

function Va(...n) {
  return n.filter(Boolean).join(" ")
}
const Ca = typeof document < "u";
let U = 0;
var S, v, E;
class Ba {
  constructor() {
    m(this, S, w(G([])));
    m(this, v, w(G([])));
    m(this, E, e => {
      const a = this.toasts.findIndex(t => t.id === e);
      return a === -1 ? null : a
    });
    u(this, "addToast", e => {
      Ca && this.toasts.unshift(e)
    });
    u(this, "updateToast", ({
      id: e,
      data: a,
      type: t,
      message: o
    }) => {
      const c = this.toasts.findIndex(s => s.id === e),
        r = this.toasts[c];
      this.toasts[c] = {
        ...r,
        ...a,
        id: e,
        title: o,
        type: t,
        updated: !0
      }
    });
    u(this, "create", e => {
      var s;
      const {
        message: a,
        ...t
      } = e, o = typeof(e == null ? void 0 : e.id) == "number" || e.id && ((s = e.id) == null ? void 0 : s.length) > 0 ? e.id : U++, c = e.dismissable === void 0 ? !0 : e.dismissable, r = e.type === void 0 ? "default" : e.type;
      return q(() => {
        this.toasts.find(N => N.id === o) ? this.updateToast({
          id: o,
          data: e,
          type: r,
          message: a,
          dismissable: c
        }) : this.addToast({
          ...t,
          id: o,
          title: a,
          dismissable: c,
          type: r
        })
      }), o
    });
    u(this, "dismiss", e => (q(() => {
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
      const a = d(this, E).call(this, e);
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
      const o = e instanceof Promise ? e : e();
      let c = t !== void 0;
      return o.then(r => {
        if (typeof r == "object" && r && "ok" in r && typeof r.ok == "boolean" && !r.ok) {
          c = !1;
          const s = Oa(r);
          this.create({
            id: t,
            type: "error",
            message: s
          })
        } else if (a.success !== void 0) {
          c = !1;
          const s = typeof a.success == "function" ? a.success(r) : a.success;
          this.create({
            id: t,
            type: "success",
            message: s
          })
        }
      }).catch(r => {
        if (a.error !== void 0) {
          c = !1;
          const s = typeof a.error == "function" ? a.error(r) : a.error;
          this.create({
            id: t,
            type: "error",
            message: s
          })
        }
      }).finally(() => {
        var r;
        c && (this.dismiss(t), t = void 0), (r = a.finally) == null || r.call(a)
      }), t
    });
    u(this, "custom", (e, a) => {
      const t = (a == null ? void 0 : a.id) || U++;
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
      const a = d(this, E).call(this, e.toastId);
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
    return f(d(this, S))
  }
  set toasts(e) {
    h(d(this, S), e, !0)
  }
  get heights() {
    return f(d(this, v))
  }
  set heights(e) {
    h(d(this, v), e, !0)
  }
}
S = new WeakMap, v = new WeakMap, E = new WeakMap;

function Oa(n) {
  return n && typeof n == "object" && "status" in n ? `HTTP error! Status: ${n.status}` : `Error! ${n}`
}
const g = new Ba;

function Da(n, e) {
  return g.create({
    message: n,
    ...e
  })
}
var D;
class Ha {
  constructor() {
    m(this, D, O(() => g.toasts.filter(e => !e.dismiss)))
  }
  get toasts() {
    return f(d(this, D))
  }
}
D = new WeakMap;
const La = Da,
  Na = Object.assign(La, {
    success: g.success,
    info: g.info,
    warning: g.warning,
    error: g.error,
    custom: g.custom,
    message: g.message,
    promise: g.promise,
    dismiss: g.dismiss,
    loading: g.loading,
    getActiveToasts: () => g.toasts.filter(n => !n.dismiss)
  });
var T, P, A, M, I, C, B;
class ka {
  constructor() {
    u(this, "channel", new BroadcastChannel("user-channel"));
    m(this, T, w());
    m(this, P, w(!0));
    m(this, A, w(Date.now()));
    m(this, M, w(Date.now()));
    m(this, I, O(() => {
      if (!this.data) return;
      const e = this.data.charges;
      if (e.count > e.max) return e.count;
      const a = e.count + Math.max((j.now - this.lastFetch) / e.cooldownMs, 0);
      return Math.min(e.max, a)
    }));
    m(this, C, O(() => this.charges !== void 0 && this.data ? (1 - this.charges % 1) * this.data.charges.cooldownMs : void 0));
    m(this, B, O(() => {
      var e;
      return new Ia(Ma(((e = this.data) == null ? void 0 : e.flagsBitmap) ?? "AA=="))
    }));
    this.channel.onmessage = e => {
      const a = JSON.parse(e.data);
      a.type === "refresh" ? (this.data = a.data, this.lastFetch = Date.now()) : a.type === "logout" && (this.data = void 0)
    }
  }
  get data() {
    return f(d(this, T))
  }
  set data(e) {
    h(d(this, T), e, !0)
  }
  get loading() {
    return f(d(this, P))
  }
  set loading(e) {
    h(d(this, P), e, !0)
  }
  get now() {
    return f(d(this, A))
  }
  set now(e) {
    h(d(this, A), e)
  }
  get lastFetch() {
    return f(d(this, M))
  }
  set lastFetch(e) {
    h(d(this, M), e)
  }
  get charges() {
    return f(d(this, I))
  }
  set charges(e) {
    h(d(this, I), e)
  }
  get cooldown() {
    return f(d(this, C))
  }
  set cooldown(e) {
    h(d(this, C), e)
  }
  get flagsBitmap() {
    return f(d(this, B))
  }
  set flagsBitmap(e) {
    h(d(this, B), e)
  }
  async refresh() {
    try {
      this.loading = !0, this.data = await R.me(), this.lastFetch = Date.now(), this.channel.postMessage(JSON.stringify({
        type: "refresh",
        data: this.data
      }))
    } catch (e) {
      console.error(e), Na.warning(ra(), {
        duration: 1e4
      })
    } finally {
      this.loading = !1
    }
  }
  async logout() {
    await R.logout(), this.channel.postMessage(JSON.stringify({
      type: "logout"
    })), this.data = void 0
  }
  hasColor(e) {
    var t;
    return e < 32 ? !0 : ((((t = this.data) == null ? void 0 : t.extraColorsBitmap) ?? 0) & 1 << e - 32) !== 0
  }
}
T = new WeakMap, P = new WeakMap, A = new WeakMap, M = new WeakMap, I = new WeakMap, C = new WeakMap, B = new WeakMap;
const Ga = new ka;
export {
  F as C, ja as P, Pa as S, R as a, i as b, H as c, g as d, Va as e, Ha as f, j as g, Ja as h, Ka as i, $a as j, Ua as k, Fa as l, Na as t, Ga as u
};