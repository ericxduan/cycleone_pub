
export interface SubscriptionService {
  key: string;
  english_name: string;
  chinese_name: string;
  logo_asset_url: string;
  brand_colors_hex: string[];
  notes: string;
  sources: string[];
}

export const SUBSCRIPTION_SERVICES: SubscriptionService[] = [
{
  "key": "netflix",
  "english_name": "Netflix",
  "chinese_name": "网飞",
  "logo_asset_url": "https://brand.netflix.com",
  "brand_colors_hex": [
    "#E50914",
    "#221F1F",
    "#FFFFFF"
  ],
  "notes": "Netflix brand uses distinctive red (#E50914) with black (#221F1F) and white; the color palette is widely recognized and used across its logo and interface.",
  "sources": [
    "https://usbrandcolors.com/netflix-colors/",
    "https://brand.netflix.com"
  ]
},
{
  "key": "spotify",
  "english_name": "Spotify",
  "chinese_name": "Spotify 音乐",
  "logo_asset_url": "https://developer.spotify.com/documentation/design#/branding-guidelines",
  "brand_colors_hex": [
    "#1DB954",
    "#191414",
    "#FFFFFF"
  ],
  "notes": "Spotify's primary brand color is Spotify Green (#1DB954). Black (#191414) and white are used for contrast and backgrounds.",
  "sources": [
    "https://usbrandcolors.com/spotify-colors/",
    "https://developer.spotify.com/documentation/design"
  ]
},
{
  "key": "youtube_premium",
  "english_name": "YouTube Premium",
  "chinese_name": "YouTube 高级版",
  "logo_asset_url": "https://brand.youtube",
  "brand_colors_hex": [
    "#FF0000",
    "#282828",
    "#FFFFFF"
  ],
  "notes": "YouTube's palette consists of YouTube Red (#FF0000), an almost black shade (#282828) and white. These colors are used consistently across the brand.",
  "sources": [
    "https://usbrandcolors.com/youtube-colors/",
    "https://brand.youtube"
  ]
},
{
  "key": "hulu",
  "english_name": "Hulu",
  "chinese_name": "Hulu",
  "logo_asset_url": "https://thisishulu.com",
  "brand_colors_hex": [
    "#1CE783",
    "#040405",
    "#FFFFFF",
    "#29A869"
  ],
  "notes": "Hulu's guidelines specify using Hulu Green (#1CE783) wherever possible. If placed on a green background, the logo may be black (#040405). A secondary green (#29A869) is used sparingly.",
  "sources": [
    "http://localhost:8451/https://assetshuluimcom-a.akamaihd.net/thisishulu/images/pdf/Hulu-Brand-Guidelines.pdf"
  ]
},
{
  "key": "disney_plus",
  "english_name": "Disney+",
  "chinese_name": "迪士尼+",
  "logo_asset_url": "https://press.disneyplus.com",
  "brand_colors_hex": [
    "#113CCF",
    "#0A5C73",
    "#FFFFFF"
  ],
  "notes": "Disney+ updated its branding in 2024, shifting from a gradient to a unified deep teal/blue palette. The logo commonly uses a dark blue (#113CCF) and teal (#0A5C73) with white lettering.",
  "sources": [
    "https://logos-world.net/disney-logo/"
  ]
},
{
  "key": "prime_video",
  "english_name": "Prime Video",
  "chinese_name": "Prime 视频",
  "logo_asset_url": "https://primevideo.com",
  "brand_colors_hex": [
    "#1399FF",
    "#000000",
    "#FFFFFF"
  ],
  "notes": "Prime Video uses a bright blue (#1399FF) as its primary color alongside black and white. These values are approximations based on the Amazon Prime Blue palette.",
  "sources": [
    "https://www.brandcolorcode.com/amazon-prime-blue"
  ]
},
{
  "key": "paramount_plus",
  "english_name": "Paramount+",
  "chinese_name": "派拉蒙+",
  "logo_asset_url": "https://brand.paramount.com",
  "brand_colors_hex": [
    "#0060A3",
    "#FFFFFF",
    "#000000"
  ],
  "notes": "Paramount+ uses Paramount blue (#0060A3) in its logos. White lettering or a white background is often paired with this blue.",
  "sources": [
    "https://www.paramountplus.com/"
  ]
},
{
  "key": "max",
  "english_name": "Max",
  "chinese_name": "Max 流媒体",
  "logo_asset_url": "https://press.max.com/brand-resources",
  "brand_colors_hex": [
    "#1A237E",
    "#FFFFFF",
    "#000000"
  ],
  "notes": "Max (formerly HBO Max) uses a deep indigo or dark purple (#1A237E) and monochrome palette in its recent rebrand.",
  "sources": [
    "https://press.max.com"
  ]
},
{
  "key": "notion",
  "english_name": "Notion",
  "chinese_name": "Notion 笔记",
  "logo_asset_url": "https://www.notion.so/brand",
  "brand_colors_hex": [
    "#000000",
    "#FFFFFF"
  ],
  "notes": "Notion’s brand is intentionally monochrome, primarily black on white, reflecting a minimalist design philosophy.",
  "sources": [
    "https://www.notion.so/brand"
  ]
},
{
  "key": "dropbox",
  "english_name": "Dropbox",
  "chinese_name": "Dropbox 云盘",
  "logo_asset_url": "https://brand.dropbox.com",
  "brand_colors_hex": [
    "#0061FF",
    "#FFFFFF",
    "#000000"
  ],
  "notes": "Dropbox uses a strong blue (#0061FF) for its logo with white or black as supporting colors.",
  "sources": [
    "https://brand.dropbox.com"
  ]
},
{
  "key": "microsoft_365",
  "english_name": "Microsoft 365",
  "chinese_name": "微软 365",
  "logo_asset_url": "https://www.microsoft.com/en-us/legal/intellectualproperty/trademarks",
  "brand_colors_hex": [
    "#F25022",
    "#7FBA00",
    "#00A4EF",
    "#FFB900"
  ],
  "notes": "Microsoft 365 draws on Microsoft’s four-color palette: orange (#F25022), green (#7FBA00), blue (#00A4EF) and yellow (#FFB900).",
  "sources": [
    "https://learn.microsoft.com/en-us/legal/intellectual-property-use"
  ]
},
{
  "key": "google_one",
  "english_name": "Google One",
  "chinese_name": "Google One 云盘",
  "logo_asset_url": "https://about.google/brand-resource-center/logos-list/",
  "brand_colors_hex": [
    "#4285F4",
    "#EA4335",
    "#FBBC05",
    "#34A853"
  ],
  "notes": "Google One follows Google’s four standard colors: blue (#4285F4), red (#EA4335), yellow (#FBBC05), and green (#34A853).",
  "sources": [
    "https://about.google/brand-resource-center/logos-list/"
  ]
},
{
  "key": "evernote_premium",
  "english_name": "Evernote Premium",
  "chinese_name": "印象笔记高级版",
  "logo_asset_url": "https://evernote.com/brand",
  "brand_colors_hex": [
    "#2DCE89",
    "#FFFFFF",
    "#000000"
  ],
  "notes": "Evernote’s primary color is a vibrant green (#2DCE89); it is paired with black or white backgrounds.",
  "sources": [
    "https://evernote.com/brand"
  ]
},
{
  "key": "patreon",
  "english_name": "Patreon",
  "chinese_name": "Patreon 创作者平台",
  "logo_asset_url": "https://www.patreon.com/brand-kit",
  "brand_colors_hex": [
    "#F96854",
    "#05192D",
    "#FFFFFF"
  ],
  "notes": "Patreon uses a coral orange (#F96854) and deep navy (#05192D) as its primary brand colors.",
  "sources": [
    "https://www.patreon.com/brand-kit"
  ]
},
{
  "key": "playstation_plus",
  "english_name": "PlayStation Plus",
  "chinese_name": "PlayStation Plus 会员",
  "logo_asset_url": "https://www.playstation.com/en-us/legal/trademarks/",
  "brand_colors_hex": [
    "#003087",
    "#FFFFFF",
    "#000000"
  ],
  "notes": "PlayStation branding uses a deep blue (#003087) along with black and white for contrast.",
  "sources": [
    "https://www.playstation.com/en-us/legal/trademarks/"
  ]
},
{
  "key": "xbox_game_pass",
  "english_name": "Xbox Game Pass",
  "chinese_name": "Xbox 游戏通行证",
  "logo_asset_url": "https://news.xbox.com/en-us/category/brand-resources/",
  "brand_colors_hex": [
    "#107C10",
    "#FFFFFF",
    "#000000"
  ],
  "notes": "The Xbox brand uses a bold green (#107C10) with white and black for its Game Pass logos.",
  "sources": [
    "https://news.xbox.com/en-us/category/brand-resources/"
  ]
},
{
  "key": "amazon_music_unlimited",
  "english_name": "Amazon Music Unlimited",
  "chinese_name": "Amazon Music Unlimited 订阅",
  "logo_asset_url": "https://advertising.amazon.com/brand-resources",
  "brand_colors_hex": [
    "#00BBFF",
    "#000000",
    "#FFFFFF"
  ],
  "notes": "Amazon Music Unlimited generally uses a bright azure blue (#00BBFF) along with black and white.",
  "sources": [
    "https://advertising.amazon.com/brand-resources"
  ]
},
{
  "key": "tencent_video",
  "english_name": "Tencent Video",
  "chinese_name": "腾讯视频",
  "logo_asset_url": "https://www.tencent.com/en-us/brand_assets.html",
  "brand_colors_hex": [
    "#00C6FF",
    "#FFFFFF",
    "#000000"
  ],
  "notes": "Tencent Video uses a bright blue (#00C6FF) as its primary color; white and black provide contrast.",
  "sources": [
    "https://www.tencent.com/en-us/brand_assets.html"
  ]
},
{
  "key": "iqiyi_premium",
  "english_name": "iQIYI Premium",
  "chinese_name": "爱奇艺 VIP",
  "logo_asset_url": "https://www.iqiyi.com/brand/symbol.html",
  "brand_colors_hex": [
    "#00DC5A",
    "#000000",
    "#FFFFFF"
  ],
  "notes": "iQIYI’s logo uses a vivid green (#00DC5A) wordmark; black or white may be used as background.",
  "sources": [
    "https://companieslogo.com/iqiyi/logo/"
  ]
},
{
  "key": "youku_premium",
  "english_name": "Youku Premium",
  "chinese_name": "优酷 VIP",
  "logo_asset_url": "https://www.youku.com/brand/logo.html",
  "brand_colors_hex": [
    "#00A0E9",
    "#FF0000",
    "#FFFFFF"
  ],
  "notes": "Youku’s logo pairs a vibrant blue (#00A0E9) with red (#FF0000). White is used for contrast.",
  "sources": [
    "https://www.youku.com/brand/logo.html"
  ]
},
{
  "key": "bilibili_bvip",
  "english_name": "Bilibili B-VIP",
  "chinese_name": "哔哩哔哩大会员",
  "logo_asset_url": "https://www.bilibili.com/brand",
  "brand_colors_hex": [
    "#00A1E9",
    "#FB7299",
    "#FFFFFF"
  ],
  "notes": "Bilibili’s palette mixes blue (#00A1E9) and pink (#FB7299), reflecting the platform’s playful aesthetic. These values are widely used although formal guidelines are not public.",
  "sources": [
    "https://www.bilibili.com"
  ]
},
{
  "key": "wechat_vip",
  "english_name": "WeChat VIP",
  "chinese_name": "微信 VIP会员",
  "logo_asset_url": "https://open.weixin.qq.com/cgi-bin/showdocument?docid=brandresources",
  "brand_colors_hex": [
    "#09BB07",
    "#000000",
    "#FFFFFF"
  ],
  "notes": "WeChat’s primary color is green (#09BB07); logos may appear on black or white backgrounds.",
  "sources": [
    "https://open.weixin.qq.com/cgi-bin/showdocument?docid=brandresources"
  ]
},
{
  "key": "apple_music",
  "english_name": "Apple Music",
  "chinese_name": "Apple Music",
  "logo_asset_url": "https://marketing.services.apple/apple-music-identity-guidelines",
  "brand_colors_hex": [
    "#FF4E6B",
    "#FF0436",
    "#FFFFFF"
  ],
  "notes": "Apple Music uses a gradient pink/red palette (e.g., #FF4E6B and #FF0436). Official guidelines focus on using Apple-provided artwork; color values are approximate.",
  "sources": [
    "https://www.brandcolorcode.com/apple-music",
    "https://marketing.services.apple/apple-music-identity-guidelines"
  ]
},
{
  "key": "apple_tv_plus",
  "english_name": "Apple TV+",
  "chinese_name": "Apple TV+",
  "logo_asset_url": "https://marketing.services.apple/apple-tv-app-identity-guidelines",
  "brand_colors_hex": [
    "#000000",
    "#FFFFFF"
  ],
  "notes": "Apple TV+ follows Apple’s monochrome signature: black and white, without additional colors.",
  "sources": [
    "https://marketing.services.apple/apple-music-identity-guidelines"
  ]
},
{
  "key": "apple_arcade",
  "english_name": "Apple Arcade",
  "chinese_name": "Apple Arcade",
  "logo_asset_url": "https://developer.apple.com/app-store/marketing/guidelines/",
  "brand_colors_hex": [
    "#FF453A",
    "#FFFFFF"
  ],
  "notes": "Apple Arcade uses a vivid red (#FF453A) in its logo, with white as contrast. Values are approximate.",
  "sources": [
    "https://developer.apple.com/app-store/marketing/guidelines/"
  ]
},
{
  "key": "apple_icloud_plus",
  "english_name": "iCloud+",
  "chinese_name": "iCloud+ 云服务",
  "logo_asset_url": "https://support.apple.com/icloud",
  "brand_colors_hex": [
    "#3693F3",
    "#FFFFFF"
  ],
  "notes": "iCloud+ is often represented with a sky-blue cloud icon (#3693F3) on a white background; colors are approximate.",
  "sources": [
    "https://support.apple.com/icloud"
  ]
},
{
  "key": "audible",
  "english_name": "Audible",
  "chinese_name": "Audible 有声书",
  "logo_asset_url": "https://www.audible.com/about/logos",
  "brand_colors_hex": [
    "#F8991C",
    "#000000",
    "#FFFFFF"
  ],
  "notes": "Audible’s logo features a warm orange (#F8991C) combined with black and white.",
  "sources": [
    "https://www.audible.com/about/logos"
  ]
},
{
  "key": "kindle_unlimited",
  "english_name": "Kindle Unlimited",
  "chinese_name": "Kindle 无限会员",
  "logo_asset_url": "https://www.amazon.com/kindleunlimited",
  "brand_colors_hex": [
    "#FF9900",
    "#000000",
    "#FFFFFF"
  ],
  "notes": "Kindle Unlimited aligns with Amazon’s orange (#FF9900) paired with black and white.",
  "sources": [
    "https://www.amazon.com/kindleunlimited"
  ]
},
{
  "key": "adobe_creative_cloud",
  "english_name": "Adobe Creative Cloud",
  "chinese_name": "Adobe 创意云",
  "logo_asset_url": "https://www.adobe.com/about-adobe/brand.html",
  "brand_colors_hex": [
    "#FF0000",
    "#EC008C",
    "#F79E1B"
  ],
  "notes": "Adobe Creative Cloud uses a gradient of red (#FF0000), magenta (#EC008C) and orange (#F79E1B) in its swirl logo.",
  "sources": [
    "https://www.adobe.com/about-adobe/brand.html"
  ]
},
{
  "key": "crunchyroll",
  "english_name": "Crunchyroll",
  "chinese_name": "Crunchyroll 动漫订阅",
  "logo_asset_url": "https://www.crunchyroll.com/",
  "brand_colors_hex": [
    "#F47521",
    "#FFFFFF"
  ],
  "notes": "Crunchyroll’s official color is orange (#F47521). The logo may appear in white on colored backgrounds.",
  "sources": [
    "https://brandpalettes.com/crunchyroll-colors/"
  ]
},
{
  "key": "tidal",
  "english_name": "Tidal",
  "chinese_name": "Tidal 音乐",
  "logo_asset_url": "https://tidal.com/press",
  "brand_colors_hex": [
    "#000000",
    "#00B4D8",
    "#FFFFFF"
  ],
  "notes": "Tidal’s branding is largely monochromatic (black and white) accented by a cyan-blue (#00B4D8) in some contexts.",
  "sources": [
    "https://tidal.com/press"
  ]
},
{
  "key": "deezer",
  "english_name": "Deezer",
  "chinese_name": "Deezer 音乐",
  "logo_asset_url": "https://www.deezer.com/en/company/press",
  "brand_colors_hex": [
    "#FA0B0B",
    "#FEEB0B",
    "#33FF62",
    "#00A8E0",
    "#C402E4"
  ],
  "notes": "Deezer’s logo uses a multi-color equalizer motif with red (#FA0B0B), yellow (#FEEB0B), green (#33FF62), blue (#00A8E0) and purple (#C402E4).",
  "sources": [
    "https://www.deezer.com/en/company/press"
  ]
},
{
  "key": "linkedin_premium",
  "english_name": "LinkedIn Premium",
  "chinese_name": "LinkedIn 领英高级会员",
  "logo_asset_url": "https://brand.linkedin.com/policies/logos-brand-guidelines",
  "brand_colors_hex": [
    "#0077B5",
    "#000000",
    "#FFFFFF"
  ],
  "notes": "LinkedIn uses a distinctive blue (#0077B5) together with black and white for its premium services.",
  "sources": [
    "https://brand.linkedin.com/policies/logos-brand-guidelines"
  ]
},
{
  "key": "nordvpn",
  "english_name": "NordVPN",
  "chinese_name": "NordVPN 加速器",
  "logo_asset_url": "https://nordvpn.com/press/",
  "brand_colors_hex": [
    "#007FFF",
    "#FFFFFF",
    "#000000"
  ],
  "notes": "NordVPN’s brand features a cool blue (#007FFF) with white and black to convey trust and security.",
  "sources": [
    "https://nordvpn.com/press/"
  ]
},
{
  "key": "expressvpn",
  "english_name": "ExpressVPN",
  "chinese_name": "ExpressVPN 加速器",
  "logo_asset_url": "https://www.expressvpn.com/company/press",
  "brand_colors_hex": [
    "#DA3940",
    "#FFFFFF"
  ],
  "notes": "ExpressVPN’s logo uses a bold red (#DA3940) with white.",
  "sources": [
    "https://www.expressvpn.com/company/press"
  ]
},
{
  "key": "canva_pro",
  "english_name": "Canva Pro",
  "chinese_name": "Canva 专业版",
  "logo_asset_url": "https://www.canva.com/brand/",
  "brand_colors_hex": [
    "#00C4CC",
    "#FF6F61",
    "#8338EC"
  ],
  "notes": "Canva’s brand palette includes teal (#00C4CC), coral (#FF6F61) and purple (#8338EC), reflecting its creative platform.",
  "sources": [
    "https://www.canva.com/brand/"
  ]
},
{
  "key": "figma_pro",
  "english_name": "Figma Professional",
  "chinese_name": "Figma 专业版",
  "logo_asset_url": "https://www.figma.com/about/brand/",
  "brand_colors_hex": [
    "#F24E1E",
    "#A259FF",
    "#0ACF83",
    "#FF7262"
  ],
  "notes": "Figma’s logo uses four circles in different colors: orange (#F24E1E), purple (#A259FF), green (#0ACF83), and coral (#FF7262).",
  "sources": [
    "https://www.figma.com/about/brand/"
  ]
},
{
  "key": "chatgpt_plus",
  "english_name": "ChatGPT Plus",
  "chinese_name": "ChatGPT Plus 订阅",
  "logo_asset_url": "https://openai.com/brand",
  "brand_colors_hex": [
    "#10A37F",
    "#000000",
    "#FFFFFF"
  ],
  "notes": "ChatGPT’s branding uses a distinctive green (#10A37F) along with black and white.",
  "sources": [
    "https://openai.com/brand"
  ]
},
{
  "key": "midjourney",
  "english_name": "Midjourney",
  "chinese_name": "Midjourney 订阅",
  "logo_asset_url": "https://www.midjourney.com/home/",
  "brand_colors_hex": [
    "#5A4C8F",
    "#FFFFFF",
    "#000000"
  ],
  "notes": "Midjourney uses a purple hue (#5A4C8F) and often pairs it with black or white.",
  "sources": [
    "https://www.midjourney.com/home/"
  ]
},
{
  "key": "coursera_plus",
  "english_name": "Coursera Plus",
  "chinese_name": "Coursera 学堂Plus",
  "logo_asset_url": "https://about.coursera.org/press",
  "brand_colors_hex": [
    "#0056D2",
    "#FFFFFF"
  ],
  "notes": "Coursera’s palette centers on a deep blue (#0056D2) with white.",
  "sources": [
    "https://about.coursera.org/press"
  ]
},
{
  "key": "chegg_study",
  "english_name": "Chegg Study",
  "chinese_name": "Chegg 学习",
  "logo_asset_url": "https://www.chegg.com/about/brand",
  "brand_colors_hex": [
    "#FFB800",
    "#FFFFFF"
  ],
  "notes": "Chegg uses a bright orange (#FFB800) for its identity paired with white.",
  "sources": [
    "https://www.chegg.com/about/brand"
  ]
},
{
  "key": "slack_pro",
  "english_name": "Slack Pro",
  "chinese_name": "Slack 专业版",
  "logo_asset_url": "https://slack.com/brand-guidelines",
  "brand_colors_hex": [
    "#611F69",
    "#36C5F0",
    "#2EB67D",
    "#E01E5A"
  ],
  "notes": "Slack’s hashtag logo contains four colors: purple (#611F69), blue (#36C5F0), green (#2EB67D), and pink (#E01E5A).",
  "sources": [
    "https://slack.com/brand-guidelines"
  ]
},
{
  "key": "github_pro",
  "english_name": "GitHub Pro",
  "chinese_name": "GitHub 专业版",
  "logo_asset_url": "https://github.com/logos",
  "brand_colors_hex": [
    "#181717",
    "#FFFFFF",
    "#6CC644"
  ],
  "notes": "GitHub’s branding uses black (#181717) with white; the green (#6CC644) appears in Octocat imagery.",
  "sources": [
    "https://github.com/logos"
  ]
},
{
  "key": "qq_music",
  "english_name": "QQ Music",
  "chinese_name": "QQ 音乐会员",
  "logo_asset_url": "https://y.qq.com/brand/",
  "brand_colors_hex": [
    "#F9AE08",
    "#EA1C26",
    "#FFFFFF",
    "#000000"
  ],
  "notes": "QQ’s palette includes yellow (#F9AE08), red (#EA1C26), black and white. These values come from QQ brand guidelines.",
  "sources": [
    "https://www.brandcolorcode.com/qq"
  ]
},
{
  "key": "kugou_music",
  "english_name": "Kugou Music",
  "chinese_name": "酷狗音乐",
  "logo_asset_url": "https://www.kugou.com/brand",
  "brand_colors_hex": [
    "#0179F1",
    "#FFFFFF"
  ],
  "notes": "Kugou’s logo uses a vivid blue (#0179F1) paired with white.",
  "sources": [
    "https://www.kugou.com"
  ]
},
{
  "key": "baidu_wenku_vip",
  "english_name": "Baidu Wenku VIP",
  "chinese_name": "百度文库VIP",
  "logo_asset_url": "https://wenku.baidu.com/",
  "brand_colors_hex": [
    "#2932E1",
    "#DE0F17",
    "#FFFFFF"
  ],
  "notes": "Baidu’s corporate palette includes blue (#2932E1) and red (#DE0F17). These colors extend to Baidu Wenku.",
  "sources": [
    "https://www.baidu.com"
  ]
},
{
  "key": "wps_membership",
  "english_name": "WPS Office Membership",
  "chinese_name": "WPS 会员",
  "logo_asset_url": "https://www.wps.com/brand",
  "brand_colors_hex": [
    "#E94D2B",
    "#FFFFFF"
  ],
  "notes": "WPS Office uses a bright orange-red (#E94D2B) for its logo.",
  "sources": [
    "https://www.wps.com"
  ]
},
{
  "key": "zhihu_salt_member",
  "english_name": "Zhihu Salt Member",
  "chinese_name": "知乎盐选会员",
  "logo_asset_url": "https://www.zhihu.com/brand",
  "brand_colors_hex": [
    "#0084FF",
    "#FFFFFF",
    "#000000"
  ],
  "notes": "Zhihu’s primary color is blue (#0084FF). It is paired with black and white in the brand’s visual identity.",
  "sources": [
    "https://www.zhihu.com"
  ]
},
{
  "key": "udemy_personal_plan",
  "english_name": "Udemy Personal Plan",
  "chinese_name": "Udemy 个人计划",
  "logo_asset_url": "https://about.udemy.com/",
  "brand_colors_hex": [
    "#EC5252",
    "#A435F0",
    "#FFFFFF"
  ],
  "notes": "Udemy’s branding often uses a gradient from red (#EC5252) to purple (#A435F0) combined with white.",
  "sources": [
    "https://about.udemy.com"
  ]
},
{
  "key": "douyin_vip",
  "english_name": "Douyin VIP",
  "chinese_name": "抖音VIP",
  "logo_asset_url": "https://douyin.com/brand",
  "brand_colors_hex": [
    "#00F8FF",
    "#FF0050",
    "#000000",
    "#FFFFFF"
  ],
  "notes": "Douyin (TikTok in mainland China) uses neon cyan (#00F8FF) and pink (#FF0050) against black backgrounds; white may be used for text.",
  "sources": [
    "https://www.douyin.com"
  ]
}
];
