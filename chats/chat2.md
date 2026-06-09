# Portfolio v2 Text Edits

_Started 2026-06-07 06:36 UTC_

---

## User

Apply 2 direct edits:
1. In Portfolio v2 - export.html: change the text from "访客" to "VISITORS".
<mentioned-element>
dom:      body › … › div.block.cream › div.proj-feature › div › div.stats › div › div.k.caption[2/2]
text:     "访客"
children: text
selector: [data-om-id="e26a5752:212"]
id:       cc-7
</mentioned-element>
2. In Portfolio v2 - export.html: change the text from "Fashion shows are an apparatus of visual power, not merely a display of clothing." to "\n".
<mentioned-element>
dom:      body › … › div.findings-grid › div.finding-card › p › li.font-claude-respons….whitespace-normal[2/2]
text:     "Fashion shows are an apparatus of visual power, not merely …"
children: text
selector: :is(h1,h2,h3,h4,h5,h6,p,li,dt,dd,blockquote,figcaption,label,span,a,em,strong,small,td,th,caption) …
id:       cc-20
</mentioned-element>

## Assistant

_[tool: grep]_

I'll read the file to locate both text strings before editing.

_[tool: grep]_

_[tool: grep]_

_[tool: str_replace_edit]_

Edit 1 ("访客" → "VISITORS") is already present in the file. Applying edit 2 now — removing the English sentence from the finding card.Both edits are done. Edit 1 was already in place ("VISITORS"); edit 2 removed the English sentence from the finding card, leaving just the Chinese text.

## User

Apply 10 direct edits:
1. In Portfolio v2 - export.html: change the text from "Valentino — 距离作为奢华" to "Valentino — 距离的权威".
<mentioned-element>
dom:      body › … › div.container › div.block.lilac › div.case-grid › div.case-card › h4[3/4]
text:     "Valentino — 距离作为奢华"
children: text
selector: [data-om-id="e26a5752:494"]
id:       cc-46
</mentioned-element>
2. In Portfolio v2 - export.html: change the text from "以仪式化的对称、远距凝视与冷光，构建\"不可亲近\"的文化权威。" to "以仪式化的对称、远距凝视与冷光，构建\"不可亲近\"的文化权威。\nCase 01 — Valentino: The Authority of Distance Constructing an \"unapproachable\" cultural authority through ritualistic symmetry, long-range gazing, and cold lighting.".
<mentioned-element>
dom:      body › … › div.container › div.block.lilac › div.case-grid › div.case-card › p[4/4]
text:     "以仪式化的对称、远距凝视与冷光，构建"不可亲近"的文化权威。"
children: text
selector: [data-om-id="e26a5752:495"]
id:       cc-51
</mentioned-element>
3. In Portfolio v2 - export.html: change the text from "通过\"摔倒\"等失序事件解构观看的庄严性，把权力关系翻面给观众。" to "通过\"摔倒\"等失序事件解构观看的庄严性，把权力关系翻面给观众。\nCase 02 — Avavav: The Collapse of Distance Dismantling the solemnity of the gaze through disruptive incidents such as models falling, flipping the power dynamic on the audience.".
<mentioned-element>
dom:      body › … › div.container › div.block.lilac › div.case-grid › div.case-card › p[4/4]
text:     "通过"摔倒"等失序事件解构观看的庄严性，把权力关系翻面给观众。"
children: text
selector: [data-om-id="e26a5752:517"]
id:       cc-52
</mentioned-element>
4. In Portfolio v2 - export.html: change the text from "M.A. Creative Industries\nParis-Kedge, 2024–2026" to "M.A. Creative Industries\nParis-Kedge, 2024–2026\n中央美术学院2020-2024".
<mentioned-element>
dom:      body › header#home.hero[screen="01 Hero"] › div.container › div.row › div › div.v[2/2]
text:     "M.A. Creative Industries Paris-Kedge, 2024–2026"
children: text, br, text
selector: [data-om-id="e26a5752:76"]
id:       cc-55
</mentioned-element>
5. In Portfolio v2 - export.html: change the text from "READING" to "EDUCATION".
<mentioned-element>
dom:      body › header#home.hero[screen="01 Hero"] › div.container › div.row › div › div.caption.k[1/2]
text:     "READING"
children: text
selector: [data-om-id="e26a5752:75"]
id:       cc-56
</mentioned-element>
6. In Portfolio v2 - export.html: change the text from "中央美术学院2020-2024" to "Central Academy of Fine Arts ".
<mentioned-element>
dom:      body › header#home.hero[screen="01 Hero"] › div.container › div.row › div › div.v › div[2/2]
text:     "中央美术学院2020-2024"
children: text
selector: [data-qb-tmp-id]
id:       cc-58
</mentioned-element>
7. In Portfolio v2 - export.html: change the text from "中央美术学院2020-2024\n\n" to "Central Academy of Fine Arts ".
<mentioned-element>
dom:      body › header#home.hero[screen="01 Hero"] › div.container › div.row › div › div.v › div[2/2]
text:     "中央美术学院2020-2024"
children: text, div
selector: #home .row [data-qb-tmp-id]
id:       cc-58
</mentioned-element>
8. In Portfolio v2 - export.html: set the inline style to `font-size: 20px`.
<mentioned-element>
dom:      body › header#home.hero[screen="01 Hero"] › div.container › div.row › div › div.v › div › h4[1/2]
text:     "Central Academy of Fine Arts"
children: text
selector: [data-om-id="e26a5752:129"]
id:       cc-59
</mentioned-element>
9. In Portfolio v2 - export.html: change the text from "Central Academy of Fine Arts " to "Central Academy of Fine Arts \n2020-2024\n2020-2024".
<mentioned-element>
dom:      body › header#home.hero[screen="01 Hero"] › div.container › div.row › div › div.v › div › h4[1/2]
text:     "Central Academy of Fine Arts"
children: text
selector: [data-om-id="e26a5752:129"]
id:       cc-59
</mentioned-element>
10. In Portfolio v2 - export.html: change the text from "看与被看，并不是两个动作。\n它们是同一种权力关系的两面。" to "看与被看，并非对立关系。\n它们是同一种权力关系的两面。\n由制度决定，而非个人选择。".
<mentioned-element>
dom:      body › … › div.container › div.block.lime › div.about-block-inner › div › div.pull[3/5]
text:     "看与被看，并不是两个动作。 它们是同一种权力关系的两面。"
children: text, br, text
selector: [data-om-id="e26a5752:102"]
id:       cc-65
</mentioned-element>

## Assistant

## User

Save as standalone HTML: Portfolio v2 - export.html

