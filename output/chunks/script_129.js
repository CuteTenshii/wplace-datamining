import {
  g as r
} from "./BhCkpOlh.js";
const t = () => `This case has already been reviewed, resolved, or acted on by the moderation team.

The reported incident may have already resulted in a punishment, warning, previous decision, or internal review. Submitting the same case again without new evidence will not usually change the outcome.

If you have new and relevant evidence that was not included before, please submit a new report and clearly explain what new information is being provided.`,
  a = () => `Este caso já foi analisado, resolvido ou tratado pela equipe de moderação.

O incidente denunciado pode já ter resultado em uma punição, advertência, decisão anterior ou revisão interna. Enviar o mesmo caso novamente sem novas evidências geralmente não altera o resultado.

Se você tiver evidências novas e relevantes que não foram incluídas antes, envie uma nova denúncia e explique claramente quais novas informações estão sendo fornecidas.`,
  s = () => `此案件已由审核团队审查、解决或处理。

被举报的事件可能已经导致了处罚、警告、先前的裁决或内部审查。在没有新证据的情况下重复提交相同的案件通常不会改变结果。

如果您有此前未提供的、相关的新证据，请提交一份新的举报，并清楚说明所提供的新信息是什么。`,
  u = () => `Dieser Fall wurde vom Moderationsteam bereits überprüft, gelöst oder bearbeitet.

Der gemeldete Vorfall hat möglicherweise bereits zu einer Strafe, einer Verwarnung, einer früheren Entscheidung oder einer internen Überprüfung geführt. Denselben Fall ohne neue Beweise erneut einzureichen, ändert das Ergebnis in der Regel nicht.

Wenn du neue und relevante Beweise hast, die zuvor nicht enthalten waren, reiche bitte eine neue Meldung ein und erkläre klar, welche neuen Informationen vorliegen.`,
  c = () => `Este caso ya ha sido revisado, resuelto o gestionado por el equipo de moderación.

El incidente reportado puede haber dado lugar ya a una sanción, una advertencia, una decisión previa o una revisión interna. Enviar el mismo caso de nuevo sin pruebas nuevas no suele cambiar el resultado.

Si tienes pruebas nuevas y relevantes que no se incluyeron antes, envía un nuevo reporte y explica claramente qué información nueva aportas.`,
  l = () => `Ce cas a déjà été examiné, résolu ou traité par l'équipe de modération.

L'incident signalé a peut-être déjà donné lieu à une sanction, un avertissement, une décision antérieure ou un examen interne. Soumettre à nouveau le même cas sans nouvelles preuves ne change généralement pas le résultat.

Si vous disposez de nouvelles preuves pertinentes qui n'avaient pas été incluses, veuillez soumettre un nouveau signalement et expliquer clairement quelles nouvelles informations vous apportez.`,
  d = () => `Questo caso è già stato esaminato, risolto o gestito dal team di moderazione.

L'incidente segnalato potrebbe aver già portato a una punizione, un avviso, una decisione precedente o una revisione interna. Inviare di nuovo lo stesso caso senza nuove prove di solito non cambia l'esito.

Se hai prove nuove e pertinenti non incluse in precedenza, invia una nuova segnalazione e spiega chiaramente quali nuove informazioni stai fornendo.`,
  _ = () => `このケースはすでにモデレーションチームによって確認・解決・対応されています。

報告された事案は、すでに処分、警告、過去の判断、または内部審査につながっている可能性があります。新たな証拠なしに同じケースを再度提出しても、通常は結果は変わりません。

以前に含まれていなかった新しく関連性のある証拠がある場合は、新しい報告を提出し、どのような新しい情報を提供するのかを明確に説明してください。`,
  p = () => `Ta sprawa została już sprawdzona, rozstrzygnięta lub rozpatrzona przez zespół moderacji.

Zgłoszone zdarzenie mogło już skutkować karą, ostrzeżeniem, wcześniejszą decyzją lub wewnętrzną weryfikacją. Ponowne przesłanie tej samej sprawy bez nowych dowodów zwykle nie zmieni wyniku.

Jeśli masz nowe i istotne dowody, które nie zostały wcześniej dołączone, prześlij nowe zgłoszenie i jasno wyjaśnij, jakie nowe informacje przekazujesz.`,
  g = () => `Этот случай уже был рассмотрен, решён или обработан командой модерации.

Сообщённый инцидент мог уже привести к наказанию, предупреждению, ранее принятому решению или внутренней проверке. Повторная подача того же случая без новых доказательств обычно не меняет результат.

Если у вас есть новые и значимые доказательства, которые ранее не были предоставлены, отправьте новую жалобу и чётко объясните, какая новая информация предоставляется.`,
  h = () => `Цю справу вже розглянуто, вирішено або опрацьовано командою модерації.

Повідомлений інцидент, можливо, вже призвів до покарання, попередження, попереднього рішення або внутрішньої перевірки. Повторне надсилання тієї самої справи без нових доказів зазвичай не змінює результату.

Якщо у вас є нові та важливі докази, які не були додані раніше, надішліть нову скаргу та чітко поясніть, яку нову інформацію ви надаєте.`,
  m = () => `Trường hợp này đã được đội ngũ kiểm duyệt xem xét, giải quyết hoặc xử lý.

Sự việc bị báo cáo có thể đã dẫn đến một hình phạt, cảnh cáo, quyết định trước đó hoặc một lần xem xét nội bộ. Việc gửi lại cùng một trường hợp mà không có bằng chứng mới thường sẽ không thay đổi kết quả.

Nếu bạn có bằng chứng mới và liên quan mà trước đây chưa được đưa vào, vui lòng gửi một báo cáo mới và giải thích rõ thông tin mới mà bạn cung cấp là gì.`,
  f = (o = {}, n = {}) => {
    const e = n.locale ?? r();
    return e === "en" ? t() : e === "pt" ? a() : e === "ch" ? s() : e === "de" ? u() : e === "es" ? c() : e === "fr" ? l() : e === "it" ? d() : e === "jp" ? _() : e === "pl" ? p() : e === "ru" ? g() : e === "uk" ? h() : m()
  },
  v = () => "Already Handled",
  b = () => "Já tratado",
  z = () => "已处理",
  y = () => "Bereits bearbeitet",
  w = () => "Ya gestionado",
  k = () => "Déjà traité",
  j = () => "Già gestito",
  q = () => "対応済み",
  x = () => "Już rozpatrzone",
  S = () => "Уже рассмотрено",
  M = () => "Вже розглянуто",
  A = () => "Đã xử lý",
  E = (o = {}, n = {}) => {
    const e = n.locale ?? r();
    return e === "en" ? v() : e === "pt" ? b() : e === "ch" ? z() : e === "de" ? y() : e === "es" ? w() : e === "fr" ? k() : e === "it" ? j() : e === "jp" ? q() : e === "pl" ? x() : e === "ru" ? S() : e === "uk" ? M() : A()
  },
  I = () => `The reported action was allowed under the event rules or special conditions active at the time.

Some events, areas, game modes, or temporary rules may allow behavior that would normally be restricted elsewhere. Because the action was permitted in that specific context, no moderation action will be taken.

Please make sure to check the current event rules or special-area rules before submitting reports related to event gameplay.`,
  D = () => `A ação denunciada era permitida pelas regras do evento ou pelas condições especiais ativas no momento.

Alguns eventos, áreas, modos de jogo ou regras temporárias podem permitir comportamentos que normalmente seriam restritos em outros lugares. Como a ação era permitida nesse contexto específico, nenhuma ação de moderação será tomada.

Verifique as regras atuais do evento ou as regras de áreas especiais antes de enviar denúncias relacionadas à jogabilidade do evento.`,
  C = () => `被举报的行为在当时生效的活动规则或特殊条件下是被允许的。

某些活动、区域、游戏模式或临时规则可能允许在其他情况下通常会被限制的行为。由于该行为在特定情境下被允许，因此不会采取任何审核措施。

在提交与活动玩法相关的举报之前，请务必查看当前的活动规则或特殊区域规则。`,
  B = () => `Die gemeldete Aktion war nach den Event-Regeln oder den zu diesem Zeitpunkt geltenden Sonderbedingungen erlaubt.

Manche Events, Bereiche, Spielmodi oder temporäre Regeln können Verhalten erlauben, das anderswo normalerweise eingeschränkt wäre. Da die Aktion in diesem speziellen Kontext erlaubt war, wird keine Moderationsmaßnahme ergriffen.

Bitte prüfe die aktuellen Event-Regeln oder die Regeln für Sonderbereiche, bevor du Meldungen zum Event-Gameplay einreichst.`,
  L = () => `La acción reportada estaba permitida según las reglas del evento o las condiciones especiales activas en ese momento.

Algunos eventos, áreas, modos de juego o reglas temporales pueden permitir comportamientos que normalmente estarían restringidos en otros lugares. Dado que la acción estaba permitida en ese contexto específico, no se tomará ninguna medida de moderación.

Asegúrate de revisar las reglas actuales del evento o las reglas de áreas especiales antes de enviar reportes relacionados con la jugabilidad del evento.`,
  V = () => `L'action signalée était autorisée par les règles de l'événement ou par les conditions spéciales en vigueur à ce moment-là.

Certains événements, zones, modes de jeu ou règles temporaires peuvent autoriser des comportements qui seraient normalement restreints ailleurs. Comme l'action était autorisée dans ce contexte précis, aucune mesure de modération ne sera prise.

Veuillez vérifier les règles actuelles de l'événement ou les règles des zones spéciales avant de soumettre des signalements liés au gameplay d'un événement.`,
  N = () => `L'azione segnalata era consentita dalle regole dell'evento o dalle condizioni speciali attive in quel momento.

Alcuni eventi, aree, modalità di gioco o regole temporanee possono consentire comportamenti che altrove sarebbero normalmente vietati. Poiché l'azione era consentita in quel contesto specifico, non verrà presa alcuna azione di moderazione.

Assicurati di controllare le regole attuali dell'evento o le regole delle aree speciali prima di inviare segnalazioni relative al gameplay degli eventi.`,
  T = () => `報告された行為は、その時点で有効だったイベントのルールや特別な条件のもとで許可されていました。

一部のイベント、エリア、ゲームモード、または一時的なルールでは、通常なら他の場所で制限される行為が許可される場合があります。その特定の状況では行為が許可されていたため、モデレーションの措置は行われません。

イベントのプレイに関する報告を提出する前に、現在のイベントルールや特別エリアのルールを必ず確認してください。`,
  P = () => `Zgłoszone działanie było dozwolone zgodnie z zasadami wydarzenia lub specjalnymi warunkami obowiązującymi w tym czasie.

Niektóre wydarzenia, obszary, tryby gry lub zasady tymczasowe mogą zezwalać na zachowania, które gdzie indziej byłyby zwykle ograniczone. Ponieważ działanie było dozwolone w tym konkretnym kontekście, nie zostaną podjęte żadne działania moderacyjne.

Przed wysłaniem zgłoszeń dotyczących rozgrywki podczas wydarzenia sprawdź aktualne zasady wydarzenia lub zasady obszarów specjalnych.`,
  R = () => `Сообщённое действие было разрешено правилами события или особыми условиями, действовавшими в тот момент.

Некоторые события, зоны, режимы игры или временные правила могут разрешать поведение, которое обычно ограничено в других местах. Поскольку действие было разрешено в этом конкретном контексте, никаких мер модерации приниматься не будет.

Пожалуйста, проверяйте текущие правила события или правила особых зон, прежде чем отправлять жалобы, связанные с игровым процессом события.`,
  K = () => `Повідомлена дія була дозволена правилами події або особливими умовами, що діяли на той момент.

Деякі події, зони, режими гри або тимчасові правила можуть дозволяти поведінку, яка зазвичай обмежена в інших місцях. Оскільки дія була дозволена в цьому конкретному контексті, жодних заходів модерації вжито не буде.

Будь ласка, перевіряйте чинні правила події або правила особливих зон, перш ніж надсилати скарги, пов'язані з ігровим процесом події.`,
  Z = () => `Hành động bị báo cáo được cho phép theo quy tắc sự kiện hoặc các điều kiện đặc biệt đang có hiệu lực vào thời điểm đó.

Một số sự kiện, khu vực, chế độ chơi hoặc quy tắc tạm thời có thể cho phép những hành vi mà ở nơi khác thường bị hạn chế. Vì hành động được cho phép trong bối cảnh cụ thể đó, sẽ không có biện pháp kiểm duyệt nào được áp dụng.

Vui lòng kiểm tra quy tắc sự kiện hiện hành hoặc quy tắc khu vực đặc biệt trước khi gửi báo cáo liên quan đến lối chơi trong sự kiện.`,
  F = (o = {}, n = {}) => {
    const e = n.locale ?? r();
    return e === "en" ? I() : e === "pt" ? D() : e === "ch" ? C() : e === "de" ? B() : e === "es" ? L() : e === "fr" ? V() : e === "it" ? N() : e === "jp" ? T() : e === "pl" ? P() : e === "ru" ? R() : e === "uk" ? K() : Z()
  },
  W = () => "Allowed by Event or Special Rules",
  G = () => "Permitido por evento ou regras especiais",
  O = () => "活动或特殊规则允许",
  J = () => "Durch Event oder Sonderregeln erlaubt",
  U = () => "Permitido por evento o reglas especiales",
  H = () => "Autorisé par un événement ou des règles spéciales",
  Q = () => "Consentito da evento o regole speciali",
  Y = () => "イベントまたは特別ルールにより許可",
  X = () => "Dozwolone przez wydarzenie lub zasady specjalne",
  $ = () => "Разрешено событием или особыми правилами",
  ee = () => "Дозволено подією або особливими правилами",
  ne = () => "Được phép theo sự kiện hoặc quy tắc đặc biệt",
  oe = (o = {}, n = {}) => {
    const e = n.locale ?? r();
    return e === "en" ? W() : e === "pt" ? G() : e === "ch" ? O() : e === "de" ? J() : e === "es" ? U() : e === "fr" ? H() : e === "it" ? Q() : e === "jp" ? Y() : e === "pl" ? X() : e === "ru" ? $() : e === "uk" ? ee() : ne()
  },
  re = () => `The reported issue appears to have been caused by a glitch, bug, lag, desync, or another technical problem.

Because the evidence suggests that the situation may not have been intentional player misconduct, we cannot treat it as a punishable rule violation.

If the issue continues, please report it as a bug or provide more evidence showing that a player intentionally abused the glitch.`,
  ie = () => `O problema denunciado parece ter sido causado por uma falha, bug, lag, dessincronização ou outro problema técnico.

Como as evidências sugerem que a situação pode não ter sido má conduta intencional de um jogador, não podemos tratá-la como uma violação de regras passível de punição.

Se o problema persistir, denuncie-o como um bug ou forneça mais evidências mostrando que um jogador abusou intencionalmente da falha.`,
  te = () => `被举报的问题似乎是由故障、漏洞、延迟、不同步或其他技术问题导致的。

由于证据表明该情况可能并非玩家的故意不当行为，我们无法将其视为可处罚的违规行为。

如果问题持续存在，请将其作为漏洞举报，或提供更多证据，证明有玩家故意利用了该故障。`,
  ae = () => `Das gemeldete Problem scheint durch einen Glitch, Bug, Lag, eine Desynchronisation oder ein anderes technisches Problem verursacht worden zu sein.

Da die Beweise darauf hindeuten, dass es sich möglicherweise nicht um vorsätzliches Fehlverhalten eines Spielers handelte, können wir es nicht als strafbaren Regelverstoß behandeln.

Wenn das Problem weiterhin besteht, melde es bitte als Bug oder liefere weitere Beweise, die zeigen, dass ein Spieler den Glitch absichtlich ausgenutzt hat.`,
  se = () => `El problema reportado parece haber sido causado por un fallo, un error, lag, desincronización u otro problema técnico.

Dado que las pruebas sugieren que la situación pudo no ser una mala conducta intencional de un jugador, no podemos tratarla como una violación de reglas sancionable.

Si el problema continúa, repórtalo como un error o aporta más pruebas que demuestren que un jugador abusó intencionalmente del fallo.`,
  ue = () => `Le problème signalé semble avoir été causé par un bug, un glitch, du lag, une désynchronisation ou un autre problème technique.

Comme les preuves suggèrent que la situation n'était peut-être pas une faute intentionnelle d'un joueur, nous ne pouvons pas la traiter comme une infraction passible de sanction.

Si le problème persiste, veuillez le signaler en tant que bug ou fournir davantage de preuves montrant qu'un joueur a intentionnellement abusé du bug.`,
  ce = () => `Il problema segnalato sembra essere stato causato da un glitch, un bug, lag, desincronizzazione o un altro problema tecnico.

Poiché le prove suggeriscono che la situazione potrebbe non essere stata una cattiva condotta intenzionale di un giocatore, non possiamo trattarla come una violazione delle regole punibile.

Se il problema persiste, segnalalo come bug o fornisci ulteriori prove che mostrino che un giocatore ha abusato intenzionalmente del glitch.`,
  le = () => `報告された問題は、不具合、バグ、ラグ、同期ずれ、またはその他の技術的な問題によって引き起こされた可能性があります。

証拠からは、プレイヤーの意図的な不正行為ではなかった可能性が示唆されるため、処罰の対象となるルール違反として扱うことはできません。

問題が続く場合は、バグとして報告するか、プレイヤーが意図的に不具合を悪用したことを示すさらなる証拠を提出してください。`,
  de = () => `Zgłoszony problem prawdopodobnie został spowodowany usterką, błędem, lagiem, desynchronizacją lub innym problemem technicznym.

Ponieważ dowody sugerują, że sytuacja mogła nie być celowym niewłaściwym zachowaniem gracza, nie możemy potraktować jej jako karalnego naruszenia zasad.

Jeśli problem będzie się powtarzał, zgłoś go jako błąd lub dostarcz więcej dowodów pokazujących, że gracz celowo wykorzystał usterkę.`,
  _e = () => `Сообщённая проблема, по-видимому, была вызвана сбоем, багом, лагом, рассинхронизацией или другой технической неполадкой.

Поскольку доказательства указывают на то, что ситуация могла не быть умышленным нарушением со стороны игрока, мы не можем рассматривать её как наказуемое нарушение правил.

Если проблема сохраняется, сообщите о ней как об ошибке или предоставьте дополнительные доказательства того, что игрок умышленно воспользовался сбоем.`,
  pe = () => `Повідомлена проблема, схоже, була спричинена збоєм, багом, лагом, розсинхронізацією або іншою технічною несправністю.

Оскільки докази свідчать, що ситуація могла не бути навмисною неправомірною поведінкою гравця, ми не можемо розглядати її як порушення правил, що карається.

Якщо проблема повторюється, повідомте про неї як про помилку або надайте додаткові докази того, що гравець навмисно скористався збоєм.`,
  ge = () => `Vấn đề bị báo cáo có vẻ do một lỗi kỹ thuật, bug, lag, mất đồng bộ hoặc một sự cố kỹ thuật khác gây ra.

Vì bằng chứng cho thấy tình huống có thể không phải là hành vi sai phạm cố ý của người chơi, chúng tôi không thể xem đó là vi phạm quy tắc có thể bị xử phạt.

Nếu vấn đề vẫn tiếp diễn, vui lòng báo cáo dưới dạng lỗi hoặc cung cấp thêm bằng chứng cho thấy người chơi đã cố ý lợi dụng lỗi đó.`,
  he = (o = {}, n = {}) => {
    const e = n.locale ?? r();
    return e === "en" ? re() : e === "pt" ? ie() : e === "ch" ? te() : e === "de" ? ae() : e === "es" ? se() : e === "fr" ? ue() : e === "it" ? ce() : e === "jp" ? le() : e === "pl" ? de() : e === "ru" ? _e() : e === "uk" ? pe() : ge()
  },
  me = () => "Caused by a Glitch",
  fe = () => "Causado por uma falha",
  ve = () => "由故障导致",
  be = () => "Durch einen Glitch verursacht",
  ze = () => "Causado por un fallo",
  ye = () => "Causé par un bug",
  we = () => "Causato da un glitch",
  ke = () => "不具合が原因",
  je = () => "Spowodowane usterką",
  qe = () => "Вызвано сбоем",
  xe = () => "Спричинено збоєм",
  Se = () => "Do lỗi kỹ thuật gây ra",
  Me = (o = {}, n = {}) => {
    const e = n.locale ?? r();
    return e === "en" ? me() : e === "pt" ? fe() : e === "ch" ? ve() : e === "de" ? be() : e === "es" ? ze() : e === "fr" ? ye() : e === "it" ? we() : e === "jp" ? ke() : e === "pl" ? je() : e === "ru" ? qe() : e === "uk" ? xe() : Se()
  },
  Ae = () => `We could not confirm what happened based on the information provided.

The report may show part of the situation, but it does not include enough context for the moderation team to understand the full incident, verify the sequence of events, or determine whether a rule was broken.

When submitting a report, please include clear evidence, relevant timestamps, location or coordinates when applicable, and enough surrounding context to help us understand what happened before and after the reported action.`,
  Ee = () => `Não foi possível confirmar o que aconteceu com base nas informações fornecidas.

A denúncia pode mostrar parte da situação, mas não inclui contexto suficiente para que a equipe de moderação entenda o incidente completo, verifique a sequência dos eventos ou determine se uma regra foi violada.

Ao enviar uma denúncia, inclua evidências claras, registros de horário relevantes, localização ou coordenadas quando aplicável e contexto suficiente para nos ajudar a entender o que aconteceu antes e depois da ação denunciada.`,
  Ie = () => `根据所提供的信息，我们无法确认发生了什么。

该举报可能展示了部分情况，但没有包含足够的背景信息，使审核团队无法了解整个事件、核实事件的先后顺序，或判断是否违反了规则。

提交举报时，请附上清晰的证据、相关的时间戳、适用时的位置或坐标，以及足够的背景信息，帮助我们了解被举报行为前后发生了什么。`,
  De = () => `Anhand der bereitgestellten Informationen konnten wir nicht bestätigen, was passiert ist.

Die Meldung zeigt möglicherweise einen Teil der Situation, enthält aber nicht genug Kontext, damit das Moderationsteam den gesamten Vorfall verstehen, den Ablauf der Ereignisse überprüfen oder feststellen kann, ob eine Regel verletzt wurde.

Füge beim Einreichen einer Meldung bitte klare Beweise, relevante Zeitstempel, gegebenenfalls Ort oder Koordinaten sowie genügend Kontext hinzu, damit wir verstehen, was vor und nach der gemeldeten Aktion geschah.`,
  Ce = () => `No pudimos confirmar qué ocurrió con la información proporcionada.

El reporte puede mostrar parte de la situación, pero no incluye contexto suficiente para que el equipo de moderación entienda el incidente completo, verifique la secuencia de los hechos o determine si se infringió una regla.

Al enviar un reporte, incluye pruebas claras, marcas de tiempo relevantes, ubicación o coordenadas cuando corresponda y contexto suficiente para ayudarnos a entender qué ocurrió antes y después de la acción reportada.`,
  Be = () => `Nous n'avons pas pu confirmer ce qui s'est passé sur la base des informations fournies.

Le signalement montre peut-être une partie de la situation, mais il ne fournit pas assez de contexte pour que l'équipe de modération comprenne l'incident dans son ensemble, vérifie le déroulement des événements ou détermine si une règle a été enfreinte.

Lorsque vous soumettez un signalement, veuillez inclure des preuves claires, les horodatages pertinents, l'emplacement ou les coordonnées le cas échéant, et suffisamment de contexte pour nous aider à comprendre ce qui s'est passé avant et après l'action signalée.`,
  Le = () => `Non siamo riusciti a confermare cosa sia successo in base alle informazioni fornite.

La segnalazione può mostrare parte della situazione, ma non include abbastanza contesto per permettere al team di moderazione di comprendere l'intero incidente, verificare la sequenza degli eventi o stabilire se una regola sia stata violata.

Quando invii una segnalazione, includi prove chiare, marche temporali pertinenti, posizione o coordinate quando applicabile e contesto sufficiente per aiutarci a capire cosa è successo prima e dopo l'azione segnalata.`,
  Ve = () => `提供された情報からは、何が起きたのかを確認できませんでした。

この報告は状況の一部を示しているかもしれませんが、モデレーションチームが事案の全体像を把握し、出来事の流れを確認し、ルール違反があったかどうかを判断するのに十分な背景情報が含まれていません。

報告を提出する際は、明確な証拠、関連するタイムスタンプ、該当する場合は場所や座標、そして報告された行為の前後に何が起きたかを理解するのに十分な背景情報を含めてください。`,
  Ne = () => `Na podstawie podanych informacji nie mogliśmy potwierdzić, co się wydarzyło.

Zgłoszenie może pokazywać część sytuacji, ale nie zawiera wystarczającego kontekstu, aby zespół moderacji mógł zrozumieć całe zdarzenie, zweryfikować przebieg wydarzeń lub ustalić, czy doszło do naruszenia zasad.

Wysyłając zgłoszenie, dołącz wyraźne dowody, odpowiednie znaczniki czasu, lokalizację lub współrzędne, jeśli dotyczy, oraz wystarczający kontekst, który pomoże nam zrozumieć, co wydarzyło się przed zgłoszonym działaniem i po nim.`,
  Te = () => `На основании предоставленной информации мы не смогли подтвердить, что произошло.

Жалоба может показывать часть ситуации, но в ней недостаточно контекста, чтобы команда модерации могла понять инцидент целиком, проверить последовательность событий или определить, было ли нарушено правило.

При отправке жалобы прилагайте чёткие доказательства, соответствующие временные метки, местоположение или координаты, если применимо, и достаточный контекст, чтобы помочь нам понять, что происходило до и после указанного действия.`,
  Pe = () => `На основі наданої інформації ми не змогли підтвердити, що сталося.

Скарга може показувати частину ситуації, але в ній недостатньо контексту, щоб команда модерації зрозуміла весь інцидент, перевірила послідовність подій або визначила, чи було порушено правило.

Надсилаючи скаргу, додавайте чіткі докази, відповідні позначки часу, місце або координати, якщо це доречно, і достатньо контексту, щоб допомогти нам зрозуміти, що відбувалося до та після зазначеної дії.`,
  Re = () => `Chúng tôi không thể xác nhận điều gì đã xảy ra dựa trên thông tin được cung cấp.

Báo cáo có thể cho thấy một phần tình huống, nhưng không bao gồm đủ bối cảnh để đội ngũ kiểm duyệt hiểu toàn bộ sự việc, xác minh trình tự các sự kiện hoặc xác định liệu có vi phạm quy tắc hay không.

Khi gửi báo cáo, vui lòng kèm theo bằng chứng rõ ràng, dấu thời gian liên quan, vị trí hoặc tọa độ khi cần, và đủ bối cảnh xung quanh để giúp chúng tôi hiểu điều gì đã xảy ra trước và sau hành động bị báo cáo.`,
  Ke = (o = {}, n = {}) => {
    const e = n.locale ?? r();
    return e === "en" ? Ae() : e === "pt" ? Ee() : e === "ch" ? Ie() : e === "de" ? De() : e === "es" ? Ce() : e === "fr" ? Be() : e === "it" ? Le() : e === "jp" ? Ve() : e === "pl" ? Ne() : e === "ru" ? Te() : e === "uk" ? Pe() : Re()
  },
  Ze = () => "Insufficient Context",
  Fe = () => "Contexto insuficiente",
  We = () => "背景信息不足",
  Ge = () => "Unzureichender Kontext",
  Oe = () => "Contexto insuficiente",
  Je = () => "Contexte insuffisant",
  Ue = () => "Contesto insufficiente",
  He = () => "情報が不十分",
  Qe = () => "Niewystarczający kontekst",
  Ye = () => "Недостаточно контекста",
  Xe = () => "Недостатньо контексту",
  $e = () => "Không đủ bối cảnh",
  en = (o = {}, n = {}) => {
    const e = n.locale ?? r();
    return e === "en" ? Ze() : e === "pt" ? Fe() : e === "ch" ? We() : e === "de" ? Ge() : e === "es" ? Oe() : e === "fr" ? Je() : e === "it" ? Ue() : e === "jp" ? He() : e === "pl" ? Qe() : e === "ru" ? Ye() : e === "uk" ? Xe() : $e()
  },
  nn = () => `The report contains incorrect, incomplete, inaccessible, or unusable information.

This can happen when the evidence does not match the report, the link is broken, or required details are missing.

Please review the information carefully before submitting a report. Make sure to report the correct player, make sure that it is an actual violation, and make sure to submit enough context details to help the moderation team investigate reports properly.`,
  on = () => `A denúncia contém informações incorretas, incompletas, inacessíveis ou inutilizáveis.

Isso pode acontecer quando as evidências não correspondem à denúncia, o link está quebrado ou detalhes obrigatórios estão faltando.

Revise as informações com atenção antes de enviar uma denúncia. Certifique-se de denunciar o jogador correto, de que se trata de uma violação real e de fornecer detalhes de contexto suficientes para ajudar a equipe de moderação a investigar as denúncias adequadamente.`,
  rn = () => `该举报包含不正确、不完整、无法访问或无法使用的信息。

这可能是因为证据与举报内容不符、链接失效，或缺少必要的细节。

提交举报前，请仔细核对信息。请确保举报的是正确的玩家、确实存在违规行为，并提供足够的背景细节，以帮助审核团队妥善调查举报。`,
  tn = () => `Die Meldung enthält falsche, unvollständige, nicht zugängliche oder unbrauchbare Informationen.

Das kann passieren, wenn die Beweise nicht zur Meldung passen, der Link defekt ist oder erforderliche Angaben fehlen.

Bitte überprüfe die Informationen sorgfältig, bevor du eine Meldung einreichst. Stelle sicher, dass du den richtigen Spieler meldest, dass es sich tatsächlich um einen Verstoß handelt und dass du genügend Kontextdetails angibst, damit das Moderationsteam Meldungen ordnungsgemäß untersuchen kann.`,
  an = () => `El reporte contiene información incorrecta, incompleta, inaccesible o inservible.

Esto puede ocurrir cuando las pruebas no coinciden con el reporte, el enlace está roto o faltan datos necesarios.

Revisa la información con cuidado antes de enviar un reporte. Asegúrate de reportar al jugador correcto, de que se trata de una infracción real y de aportar suficientes detalles de contexto para ayudar al equipo de moderación a investigar los reportes adecuadamente.`,
  sn = () => `Le signalement contient des informations incorrectes, incomplètes, inaccessibles ou inutilisables.

Cela peut arriver lorsque les preuves ne correspondent pas au signalement, que le lien est rompu ou que des détails requis sont manquants.

Veuillez vérifier attentivement les informations avant de soumettre un signalement. Assurez-vous de signaler le bon joueur, qu'il s'agit bien d'une véritable infraction et de fournir suffisamment de détails de contexte pour aider l'équipe de modération à enquêter correctement sur les signalements.`,
  un = () => `La segnalazione contiene informazioni errate, incomplete, inaccessibili o inutilizzabili.

Ciò può accadere quando le prove non corrispondono alla segnalazione, il link è interrotto o mancano dettagli obbligatori.

Controlla attentamente le informazioni prima di inviare una segnalazione. Assicurati di segnalare il giocatore corretto, che si tratti di una violazione reale e di fornire dettagli di contesto sufficienti per aiutare il team di moderazione a investigare correttamente le segnalazioni.`,
  cn = () => `この報告には、誤った、不完全な、アクセスできない、または使用できない情報が含まれています。

これは、証拠が報告内容と一致しない、リンクが切れている、または必要な詳細が欠けている場合に起こり得ます。

報告を提出する前に、情報を注意深く確認してください。正しいプレイヤーを報告していること、実際に違反であること、そしてモデレーションチームが報告を適切に調査できるよう十分な背景情報を提出していることを確認してください。`,
  ln = () => `Zgłoszenie zawiera nieprawidłowe, niepełne, niedostępne lub nieprzydatne informacje.

Może się to zdarzyć, gdy dowody nie pasują do zgłoszenia, link jest nieaktywny lub brakuje wymaganych szczegółów.

Przed wysłaniem zgłoszenia dokładnie sprawdź informacje. Upewnij się, że zgłaszasz właściwego gracza, że jest to rzeczywiste naruszenie oraz że podajesz wystarczające szczegóły kontekstu, aby pomóc zespołowi moderacji prawidłowo zbadać zgłoszenia.`,
  dn = () => `Жалоба содержит неверную, неполную, недоступную или непригодную информацию.

Это может произойти, когда доказательства не соответствуют жалобе, ссылка не работает или отсутствуют необходимые сведения.

Внимательно проверьте информацию перед отправкой жалобы. Убедитесь, что вы жалуетесь на нужного игрока, что это действительно нарушение, и что вы предоставили достаточно контекстных деталей, чтобы помочь команде модерации правильно расследовать жалобы.`,
  _n = () => `Скарга містить неправильну, неповну, недоступну або непридатну інформацію.

Це може статися, коли докази не відповідають скарзі, посилання не працює або відсутні обов'язкові деталі.

Уважно перевірте інформацію перед надсиланням скарги. Переконайтеся, що ви скаржитеся на правильного гравця, що це справді порушення, і що ви надаєте достатньо контекстних деталей, щоб допомогти команді модерації належно розслідувати скарги.`,
  pn = () => `Báo cáo chứa thông tin không chính xác, không đầy đủ, không truy cập được hoặc không sử dụng được.

Điều này có thể xảy ra khi bằng chứng không khớp với báo cáo, liên kết bị hỏng hoặc thiếu các chi tiết bắt buộc.

Vui lòng xem lại thông tin cẩn thận trước khi gửi báo cáo. Hãy chắc chắn rằng bạn báo cáo đúng người chơi, rằng đó thực sự là một vi phạm, và cung cấp đủ chi tiết bối cảnh để giúp đội ngũ kiểm duyệt điều tra báo cáo một cách hợp lý.`,
  gn = (o = {}, n = {}) => {
    const e = n.locale ?? r();
    return e === "en" ? nn() : e === "pt" ? on() : e === "ch" ? rn() : e === "de" ? tn() : e === "es" ? an() : e === "fr" ? sn() : e === "it" ? un() : e === "jp" ? cn() : e === "pl" ? ln() : e === "ru" ? dn() : e === "uk" ? _n() : pn()
  },
  hn = () => "Invalid Information",
  mn = () => "Informação inválida",
  fn = () => "信息无效",
  vn = () => "Ungültige Informationen",
  bn = () => "Información no válida",
  zn = () => "Informations non valides",
  yn = () => "Informazioni non valide",
  wn = () => "無効な情報",
  kn = () => "Nieprawidłowe informacje",
  jn = () => "Недействительная информация",
  qn = () => "Недійсна інформація",
  xn = () => "Thông tin không hợp lệ",
  Sn = (o = {}, n = {}) => {
    const e = n.locale ?? r();
    return e === "en" ? hn() : e === "pt" ? mn() : e === "ch" ? fn() : e === "de" ? vn() : e === "es" ? bn() : e === "fr" ? zn() : e === "it" ? yn() : e === "jp" ? wn() : e === "pl" ? kn() : e === "ru" ? jn() : e === "uk" ? qn() : xn()
  },
  Mn = () => `The reported behavior does not appear to violate the current rules.

The situation may have been frustrating, unwanted, or disruptive from your perspective, but based on the evidence provided, it does not meet the criteria for a rule violation.

Moderation actions are only taken when a report clearly shows behavior that breaks the rules. If you believe this decision is incorrect, please make sure future reports include enough context explaining why you believe that a rule was violated.`,
  An = () => `O comportamento denunciado não parece violar as regras atuais.

A situação pode ter sido frustrante, indesejada ou perturbadora do seu ponto de vista, mas, com base nas evidências fornecidas, ela não atende aos critérios de uma violação de regra.

Ações de moderação só são tomadas quando uma denúncia mostra claramente um comportamento que infringe as regras. Se você acredita que esta decisão está incorreta, certifique-se de que futuras denúncias incluam contexto suficiente explicando por que você acredita que uma regra foi violada.`,
  En = () => `被举报的行为似乎并未违反当前规则。

从您的角度看，这种情况可能令人沮丧、不受欢迎或具有干扰性，但根据所提供的证据，它并不符合违规的标准。

只有当举报清楚地显示出违反规则的行为时，才会采取审核措施。如果您认为此决定有误，请确保今后的举报包含足够的背景信息，说明您为何认为某条规则被违反。`,
  In = () => `Das gemeldete Verhalten scheint nicht gegen die aktuellen Regeln zu verstoßen.

Die Situation mag aus deiner Sicht frustrierend, unerwünscht oder störend gewesen sein, aber auf Grundlage der vorgelegten Beweise erfüllt sie nicht die Kriterien für einen Regelverstoß.

Moderationsmaßnahmen werden nur ergriffen, wenn eine Meldung eindeutig ein Verhalten zeigt, das gegen die Regeln verstößt. Wenn du der Meinung bist, dass diese Entscheidung falsch ist, achte bitte darauf, dass künftige Meldungen genügend Kontext enthalten und erklären, warum du glaubst, dass eine Regel verletzt wurde.`,
  Dn = () => `El comportamiento reportado no parece infringir las reglas actuales.

La situación pudo haber sido frustrante, no deseada o molesta desde tu punto de vista, pero, según las pruebas aportadas, no cumple los criterios de una infracción de reglas.

Las acciones de moderación solo se toman cuando un reporte muestra claramente un comportamiento que rompe las reglas. Si crees que esta decisión es incorrecta, asegúrate de que los reportes futuros incluyan suficiente contexto que explique por qué consideras que se infringió una regla.`,
  Cn = () => `Le comportement signalé ne semble pas enfreindre les règles actuelles.

La situation a peut-être été frustrante, indésirable ou perturbante de votre point de vue, mais d'après les preuves fournies, elle ne remplit pas les critères d'une infraction aux règles.

Des mesures de modération ne sont prises que lorsqu'un signalement montre clairement un comportement qui enfreint les règles. Si vous pensez que cette décision est incorrecte, veillez à ce que vos futurs signalements incluent suffisamment de contexte expliquant pourquoi vous estimez qu'une règle a été enfreinte.`,
  Bn = () => `Il comportamento segnalato non sembra violare le regole attuali.

La situazione potrebbe essere stata frustrante, indesiderata o fastidiosa dal tuo punto di vista, ma in base alle prove fornite non soddisfa i criteri di una violazione delle regole.

Le azioni di moderazione vengono intraprese solo quando una segnalazione mostra chiaramente un comportamento che infrange le regole. Se ritieni che questa decisione sia errata, assicurati che le segnalazioni future includano contesto sufficiente a spiegare perché ritieni che una regola sia stata violata.`,
  Ln = () => `報告された行為は、現在のルールに違反していないようです。

その状況は、あなたの視点ではいら立たしく、望ましくなく、または迷惑なものだったかもしれませんが、提供された証拠に基づくと、ルール違反の基準を満たしていません。

モデレーションの措置は、報告が明確にルールを破る行為を示している場合にのみ行われます。この判断が誤っていると思われる場合は、今後の報告に、なぜルール違反だと考えるのかを説明する十分な背景情報を含めるようにしてください。`,
  Vn = () => `Zgłoszone zachowanie nie wydaje się naruszać obowiązujących zasad.

Sytuacja mogła być z twojej perspektywy frustrująca, niechciana lub uciążliwa, ale na podstawie dostarczonych dowodów nie spełnia kryteriów naruszenia zasad.

Działania moderacyjne są podejmowane tylko wtedy, gdy zgłoszenie wyraźnie pokazuje zachowanie łamiące zasady. Jeśli uważasz, że ta decyzja jest błędna, zadbaj o to, aby przyszłe zgłoszenia zawierały wystarczający kontekst wyjaśniający, dlaczego uważasz, że doszło do naruszenia zasad.`,
  Nn = () => `Указанное поведение, по-видимому, не нарушает действующих правил.

С вашей точки зрения ситуация могла быть неприятной, нежелательной или мешающей, но на основании предоставленных доказательств она не соответствует критериям нарушения правил.

Меры модерации принимаются только тогда, когда жалоба чётко показывает поведение, нарушающее правила. Если вы считаете, что это решение неверно, постарайтесь, чтобы будущие жалобы содержали достаточно контекста, объясняющего, почему вы считаете, что правило было нарушено.`,
  Tn = () => `Зазначена поведінка, схоже, не порушує чинних правил.

З вашого погляду ситуація могла бути неприємною, небажаною або такою, що заважає, але на основі наданих доказів вона не відповідає критеріям порушення правил.

Заходи модерації вживаються лише тоді, коли скарга чітко показує поведінку, що порушує правила. Якщо ви вважаєте, що це рішення неправильне, подбайте, щоб майбутні скарги містили достатньо контексту з поясненням, чому ви вважаєте, що правило було порушено.`,
  Pn = () => `Hành vi bị báo cáo dường như không vi phạm các quy tắc hiện hành.

Tình huống có thể gây bực bội, không mong muốn hoặc gây phiền toái từ góc nhìn của bạn, nhưng dựa trên bằng chứng được cung cấp, nó không đáp ứng tiêu chí của một vi phạm quy tắc.

Các biện pháp kiểm duyệt chỉ được áp dụng khi một báo cáo cho thấy rõ hành vi vi phạm quy tắc. Nếu bạn cho rằng quyết định này không đúng, hãy đảm bảo các báo cáo trong tương lai có đủ bối cảnh giải thích vì sao bạn tin rằng một quy tắc đã bị vi phạm.`,
  Rn = (o = {}, n = {}) => {
    const e = n.locale ?? r();
    return e === "en" ? Mn() : e === "pt" ? An() : e === "ch" ? En() : e === "de" ? In() : e === "es" ? Dn() : e === "fr" ? Cn() : e === "it" ? Bn() : e === "jp" ? Ln() : e === "pl" ? Vn() : e === "ru" ? Nn() : e === "uk" ? Tn() : Pn()
  },
  Kn = () => "No Rule Violation",
  Zn = () => "Nenhuma violação de regra",
  Fn = () => "未违反规则",
  Wn = () => "Kein Regelverstoß",
  Gn = () => "Sin infracción de reglas",
  On = () => "Aucune infraction aux règles",
  Jn = () => "Nessuna violazione delle regole",
  Un = () => "ルール違反なし",
  Hn = () => "Brak naruszenia zasad",
  Qn = () => "Нарушения правил нет",
  Yn = () => "Порушення правил немає",
  Xn = () => "Không vi phạm quy tắc",
  $n = (o = {}, n = {}) => {
    const e = n.locale ?? r();
    return e === "en" ? Kn() : e === "pt" ? Zn() : e === "ch" ? Fn() : e === "de" ? Wn() : e === "es" ? Gn() : e === "fr" ? On() : e === "it" ? Jn() : e === "jp" ? Un() : e === "pl" ? Hn() : e === "ru" ? Qn() : e === "uk" ? Yn() : Xn()
  },
  eo = () => `The report shows behavior that may be questionable, but it is not severe or clear enough to justify a moderation action.

Some situations may be inappropriate, annoying, or borderline, but still not reach the threshold required for a punishment. In these cases, the moderation team may choose not to take formal action unless the behavior continues or becomes more serious.

If this happens again, please submit a new report with additional evidence showing a repeated pattern or a more serious violation.`,
  no = () => `A denúncia mostra um comportamento que pode ser questionável, mas não é grave nem claro o suficiente para justificar uma ação de moderação.

Algumas situações podem ser inadequadas, irritantes ou limítrofes, mas ainda assim não atingem o limite necessário para uma punição. Nesses casos, a equipe de moderação pode optar por não tomar uma ação formal, a menos que o comportamento continue ou se torne mais grave.

Se isso acontecer novamente, envie uma nova denúncia com evidências adicionais que mostrem um padrão repetido ou uma violação mais grave.`,
  oo = () => `该举报显示的行为可能存在问题，但还不够严重或明确，不足以采取审核措施。

某些情况可能不恰当、令人厌烦或处于灰色地带，但仍未达到处罚所需的门槛。在这种情况下，除非该行为继续发生或变得更加严重，否则审核团队可能选择不采取正式行动。

如果此情况再次发生，请提交一份新的举报，并附上能显示重复行为模式或更严重违规的额外证据。`,
  ro = () => `Die Meldung zeigt ein Verhalten, das fragwürdig sein mag, aber nicht schwerwiegend oder eindeutig genug ist, um eine Moderationsmaßnahme zu rechtfertigen.

Manche Situationen sind vielleicht unangemessen, störend oder grenzwertig, erreichen aber dennoch nicht die für eine Strafe erforderliche Schwelle. In solchen Fällen kann das Moderationsteam entscheiden, keine formelle Maßnahme zu ergreifen, sofern das Verhalten nicht anhält oder schwerwiegender wird.

Wenn dies erneut geschieht, reiche bitte eine neue Meldung mit zusätzlichen Beweisen ein, die ein wiederholtes Muster oder einen schwerwiegenderen Verstoß zeigen.`,
  io = () => `El reporte muestra un comportamiento que puede ser cuestionable, pero no es lo bastante grave ni claro como para justificar una acción de moderación.

Algunas situaciones pueden ser inapropiadas, molestas o estar en el límite, pero aun así no alcanzan el umbral necesario para una sanción. En estos casos, el equipo de moderación puede optar por no tomar medidas formales a menos que el comportamiento continúe o se agrave.

Si esto vuelve a ocurrir, envía un nuevo reporte con pruebas adicionales que muestren un patrón repetido o una infracción más grave.`,
  to = () => `Le signalement montre un comportement qui peut être discutable, mais qui n'est pas assez grave ou clair pour justifier une mesure de modération.

Certaines situations peuvent être inappropriées, agaçantes ou limites, sans pour autant atteindre le seuil requis pour une sanction. Dans ces cas, l'équipe de modération peut choisir de ne pas prendre de mesure formelle, sauf si le comportement persiste ou s'aggrave.

Si cela se reproduit, veuillez soumettre un nouveau signalement avec des preuves supplémentaires montrant un schéma répété ou une infraction plus grave.`,
  ao = () => `La segnalazione mostra un comportamento che può essere discutibile, ma non è abbastanza grave o chiaro da giustificare un'azione di moderazione.

Alcune situazioni possono essere inappropriate, fastidiose o al limite, ma non raggiungono comunque la soglia richiesta per una punizione. In questi casi, il team di moderazione può scegliere di non intervenire formalmente, a meno che il comportamento non continui o diventi più grave.

Se dovesse ripetersi, invia una nuova segnalazione con prove aggiuntive che mostrino uno schema ripetuto o una violazione più grave.`,
  so = () => `この報告は、問題があるかもしれない行為を示していますが、モデレーションの措置を正当化するほど深刻でも明確でもありません。

一部の状況は不適切だったり、迷惑だったり、際どいものだったりするかもしれませんが、それでも処分に必要な基準には達していません。こうした場合、行為が続いたりより深刻になったりしない限り、モデレーションチームは正式な措置を取らないことを選ぶことがあります。

再び起きた場合は、繰り返しのパターンやより深刻な違反を示す追加の証拠を添えて、新しい報告を提出してください。`,
  uo = () => `Zgłoszenie pokazuje zachowanie, które może budzić wątpliwości, ale nie jest na tyle poważne ani jednoznaczne, aby uzasadniać działanie moderacyjne.

Niektóre sytuacje mogą być nieodpowiednie, irytujące lub graniczne, a mimo to nie osiągają progu wymaganego do nałożenia kary. W takich przypadkach zespół moderacji może nie podjąć formalnych działań, chyba że zachowanie będzie się powtarzać lub stanie się poważniejsze.

Jeśli sytuacja się powtórzy, prześlij nowe zgłoszenie z dodatkowymi dowodami pokazującymi powtarzający się wzorzec lub poważniejsze naruszenie.`,
  co = () => `Жалоба показывает поведение, которое может вызывать сомнения, но оно недостаточно серьёзное или явное, чтобы оправдать меры модерации.

Некоторые ситуации могут быть неуместными, раздражающими или пограничными, но всё же не достигают порога, необходимого для наказания. В таких случаях команда модерации может решить не предпринимать официальных действий, если поведение не продолжится или не станет более серьёзным.

Если это повторится, отправьте новую жалобу с дополнительными доказательствами, показывающими повторяющийся характер или более серьёзное нарушение.`,
  lo = () => `Скарга показує поведінку, яка може викликати сумніви, але вона недостатньо серйозна чи однозначна, щоб виправдати захід модерації.

Деякі ситуації можуть бути недоречними, дратівливими або межовими, але все ж не досягають порогу, потрібного для покарання. У таких випадках команда модерації може вирішити не вживати офіційних заходів, якщо поведінка не повторюватиметься або не стане серйознішою.

Якщо це повториться, надішліть нову скаргу з додатковими доказами, що показують повторюваний характер або серйозніше порушення.`,
  _o = () => `Báo cáo cho thấy hành vi có thể đáng ngờ, nhưng chưa đủ nghiêm trọng hoặc rõ ràng để biện minh cho một biện pháp kiểm duyệt.

Một số tình huống có thể không phù hợp, gây khó chịu hoặc nằm ở ranh giới, nhưng vẫn chưa đạt đến mức cần thiết để xử phạt. Trong những trường hợp này, đội ngũ kiểm duyệt có thể chọn không hành động chính thức trừ khi hành vi tiếp diễn hoặc trở nên nghiêm trọng hơn.

Nếu điều này lại xảy ra, vui lòng gửi một báo cáo mới kèm bằng chứng bổ sung cho thấy một khuôn mẫu lặp lại hoặc một vi phạm nghiêm trọng hơn.`,
  po = (o = {}, n = {}) => {
    const e = n.locale ?? r();
    return e === "en" ? eo() : e === "pt" ? no() : e === "ch" ? oo() : e === "de" ? ro() : e === "es" ? io() : e === "fr" ? to() : e === "it" ? ao() : e === "jp" ? so() : e === "pl" ? uo() : e === "ru" ? co() : e === "uk" ? lo() : _o()
  },
  go = () => "Not Enough for Punishment",
  ho = () => "Insuficiente para punição",
  mo = () => "不足以处罚",
  fo = () => "Nicht ausreichend für eine Strafe",
  vo = () => "Insuficiente para una sanción",
  bo = () => "Insuffisant pour une sanction",
  zo = () => "Insufficiente per una punizione",
  yo = () => "処分には不十分",
  wo = () => "Niewystarczające do nałożenia kary",
  ko = () => "Недостаточно для наказания",
  jo = () => "Недостатньо для покарання",
  qo = () => "Không đủ để xử phạt",
  xo = (o = {}, n = {}) => {
    const e = n.locale ?? r();
    return e === "en" ? go() : e === "pt" ? ho() : e === "ch" ? mo() : e === "de" ? fo() : e === "es" ? vo() : e === "fr" ? bo() : e === "it" ? zo() : e === "jp" ? yo() : e === "pl" ? wo() : e === "ru" ? ko() : e === "uk" ? jo() : qo()
  },
  So = () => `This report is outside the scope of what the moderation team can act on through the report system.

This may include issues that happened outside the game, personal disputes, support requests, appeals, bug reports, or situations that are not covered by the current moderation rules.

Please use the correct support channel if your issue is related to technical problems, account issues, appeals, or other non-moderation matters.`,
  Mo = () => `Esta denúncia está fora do escopo daquilo que a equipe de moderação pode tratar pelo sistema de denúncias.

Isso pode incluir problemas que aconteceram fora do jogo, disputas pessoais, pedidos de suporte, apelos, relatos de bugs ou situações que não são abrangidas pelas regras de moderação atuais.

Use o canal de suporte correto se o seu problema estiver relacionado a problemas técnicos, questões de conta, apelos ou outros assuntos que não sejam de moderação.`,
  Ao = () => `此举报超出了审核团队通过举报系统能够处理的范围。

这可能包括发生在游戏之外的问题、个人纠纷、支持请求、申诉、漏洞报告，或当前审核规则未涵盖的情况。

如果您的问题与技术故障、账户问题、申诉或其他非审核事项有关，请使用正确的支持渠道。`,
  Eo = () => `Diese Meldung liegt außerhalb dessen, was das Moderationsteam über das Meldesystem bearbeiten kann.

Dazu können Probleme gehören, die außerhalb des Spiels aufgetreten sind, persönliche Streitigkeiten, Support-Anfragen, Einsprüche, Fehlerberichte oder Situationen, die nicht von den aktuellen Moderationsregeln abgedeckt sind.

Bitte nutze den richtigen Support-Kanal, wenn dein Anliegen technische Probleme, Kontoangelegenheiten, Einsprüche oder andere nicht zur Moderation gehörende Themen betrifft.`,
  Io = () => `Este reporte está fuera del alcance de lo que el equipo de moderación puede gestionar a través del sistema de reportes.

Esto puede incluir problemas ocurridos fuera del juego, disputas personales, solicitudes de soporte, apelaciones, reportes de errores o situaciones que no están cubiertas por las reglas de moderación actuales.

Utiliza el canal de soporte correcto si tu problema está relacionado con problemas técnicos, asuntos de cuenta, apelaciones u otros temas ajenos a la moderación.`,
  Do = () => `Ce signalement dépasse le champ d'action de l'équipe de modération via le système de signalement.

Cela peut inclure des problèmes survenus en dehors du jeu, des différends personnels, des demandes d'assistance, des recours, des rapports de bugs ou des situations qui ne sont pas couvertes par les règles de modération actuelles.

Veuillez utiliser le bon canal d'assistance si votre problème concerne des soucis techniques, des questions de compte, des recours ou d'autres sujets ne relevant pas de la modération.`,
  Co = () => `Questa segnalazione esula da ciò che il team di moderazione può gestire tramite il sistema di segnalazione.

Può includere problemi avvenuti al di fuori del gioco, dispute personali, richieste di assistenza, ricorsi, segnalazioni di bug o situazioni non coperte dalle attuali regole di moderazione.

Utilizza il canale di assistenza corretto se il tuo problema riguarda questioni tecniche, problemi di account, ricorsi o altre questioni non legate alla moderazione.`,
  Bo = () => `この報告は、モデレーションチームが報告システムを通じて対応できる範囲を超えています。

これには、ゲーム外で起きた問題、個人的なトラブル、サポート依頼、異議申し立て、バグ報告、または現在のモデレーションルールでは扱えない状況が含まれる場合があります。

技術的な問題、アカウントの問題、異議申し立て、その他モデレーション以外の事項に関する場合は、適切なサポート窓口をご利用ください。`,
  Lo = () => `To zgłoszenie wykracza poza zakres tego, czym zespół moderacji może się zająć za pośrednictwem systemu zgłoszeń.

Może to obejmować problemy, które miały miejsce poza grą, spory osobiste, prośby o wsparcie, odwołania, zgłoszenia błędów lub sytuacje nieobjęte obecnymi zasadami moderacji.

Skorzystaj z właściwego kanału wsparcia, jeśli twój problem dotyczy kwestii technicznych, spraw związanych z kontem, odwołań lub innych zagadnień niezwiązanych z moderacją.`,
  Vo = () => `Эта жалоба выходит за рамки того, что команда модерации может рассматривать через систему жалоб.

Сюда могут относиться проблемы, возникшие вне игры, личные споры, обращения в поддержку, апелляции, сообщения об ошибках или ситуации, не охваченные действующими правилами модерации.

Пожалуйста, используйте подходящий канал поддержки, если ваш вопрос связан с техническими проблемами, вопросами учётной записи, апелляциями или другими темами, не относящимися к модерации.`,
  No = () => `Ця скарга виходить за межі того, що команда модерації може розглядати через систему скарг.

Сюди можуть належати проблеми, що сталися поза грою, особисті суперечки, звернення до підтримки, апеляції, повідомлення про помилки або ситуації, не охоплені чинними правилами модерації.

Будь ласка, скористайтеся відповідним каналом підтримки, якщо ваше питання стосується технічних проблем, питань облікового запису, апеляцій або інших тем, не пов'язаних із модерацією.`,
  To = () => `Báo cáo này nằm ngoài phạm vi mà đội ngũ kiểm duyệt có thể xử lý qua hệ thống báo cáo.

Điều này có thể bao gồm các vấn đề xảy ra bên ngoài trò chơi, tranh chấp cá nhân, yêu cầu hỗ trợ, kháng cáo, báo cáo lỗi hoặc các tình huống không thuộc phạm vi các quy tắc kiểm duyệt hiện hành.

Vui lòng sử dụng kênh hỗ trợ phù hợp nếu vấn đề của bạn liên quan đến sự cố kỹ thuật, vấn đề tài khoản, kháng cáo hoặc các vấn đề khác không thuộc về kiểm duyệt.`,
  Po = (o = {}, n = {}) => {
    const e = n.locale ?? r();
    return e === "en" ? So() : e === "pt" ? Mo() : e === "ch" ? Ao() : e === "de" ? Eo() : e === "es" ? Io() : e === "fr" ? Do() : e === "it" ? Co() : e === "jp" ? Bo() : e === "pl" ? Lo() : e === "ru" ? Vo() : e === "uk" ? No() : To()
  },
  Ro = () => "Out of Scope",
  Ko = () => "Fora do escopo",
  Zo = () => "超出处理范围",
  Fo = () => "Außerhalb des Zuständigkeitsbereichs",
  Wo = () => "Fuera del alcance",
  Go = () => "Hors du champ d'action",
  Oo = () => "Fuori ambito",
  Jo = () => "対応範囲外",
  Uo = () => "Poza zakresem",
  Ho = () => "Вне зоны ответственности",
  Qo = () => "Поза межами компетенції",
  Yo = () => "Ngoài phạm vi xử lý",
  Xo = (o = {}, n = {}) => {
    const e = n.locale ?? r();
    return e === "en" ? Ro() : e === "pt" ? Ko() : e === "ch" ? Zo() : e === "de" ? Fo() : e === "es" ? Wo() : e === "fr" ? Go() : e === "it" ? Oo() : e === "jp" ? Jo() : e === "pl" ? Uo() : e === "ru" ? Ho() : e === "uk" ? Qo() : Yo()
  },
  i = {
    insufficient_context: en(),
    no_rule_violation: $n(),
    not_enough_for_punishment: xo(),
    caused_by_glitch: Me(),
    out_of_scope: Xo(),
    invalid_information: Sn(),
    allowed_by_event: oe(),
    already_handled: E()
  },
  er = {
    insufficient_context: Ke(),
    no_rule_violation: Rn(),
    not_enough_for_punishment: po(),
    caused_by_glitch: he(),
    out_of_scope: Po(),
    invalid_information: gn(),
    allowed_by_event: F(),
    already_handled: f()
  },
  nr = Object.keys(i).map(o => ({
    value: o,
    label: i[o]
  }));

function or(o) {
  return o in i
}
export {
  or as a, nr as b, er as c, i
};