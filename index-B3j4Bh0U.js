var Ec=Object.defineProperty;var Tc=(i,e,t)=>e in i?Ec(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var Ma=(i,e,t)=>Tc(i,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function t(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(a){if(a.ep)return;a.ep=!0;const r=t(a);fetch(a.href,r)}})();const Ac="modulepreload",Rc=function(i,e){return new URL(i,e).href},Ms={},Cc=function(e,t,n){let a=Promise.resolve();if(t&&t.length>0){const s=document.getElementsByTagName("link"),o=document.querySelector("meta[property=csp-nonce]"),l=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));a=Promise.allSettled(t.map(c=>{if(c=Rc(c,n),c in Ms)return;Ms[c]=!0;const f=c.endsWith(".css"),h=f?'[rel="stylesheet"]':"";if(!!n)for(let b=s.length-1;b>=0;b--){const v=s[b];if(v.href===c&&(!f||v.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${h}`))return;const m=document.createElement("link");if(m.rel=f?"stylesheet":Ac,f||(m.as="script"),m.crossOrigin="",m.href=c,l&&m.setAttribute("nonce",l),document.head.appendChild(m),f)return new Promise((b,v)=>{m.addEventListener("load",b),m.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${c}`)))})}))}function r(s){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=s,window.dispatchEvent(o),!o.defaultPrevented)throw s}return a.then(s=>{for(const o of s||[])o.status==="rejected"&&r(o.reason);return e().catch(r)})},Lc=""+new URL("logo-CKQAcNCl.png",import.meta.url).href,wc=[{id:"cohiba-cohiba-behike-52-box-of-10-cigars",brand:"Cohiba",name:"Cohiba Behike 52 (Box Of 10)",format:"Behike 52 (Box Of 10)",category:"cigars",origin:"Куба",price:{amount:42e6,currency:"UZS"},inStock:!0,images:["https://static.tildacdn.com/stor6438-3161-4139-b437-343965313335/52328855.webp"],description:"",specs:{}},{id:"cohiba-cohiba-behike-54-box-of-10-cigars",brand:"Cohiba",name:"Cohiba Behike 54 (Box Of 10)",format:"Behike 54 (Box Of 10)",category:"cigars",origin:"Куба",price:{amount:56e6,currency:"UZS"},inStock:!1,images:["https://static.tildacdn.com/stor3130-3531-4238-b433-316663323234/45505093.jpg"],description:"",specs:{}},{id:"cohiba-cohiba-behike-56-cigars",brand:"Cohiba",name:"Cohiba Behike 56",format:"Behike 56",category:"cigars",origin:"Куба",price:{amount:62e6,currency:"UZS"},inStock:!1,images:["https://static.tildacdn.com/stor3534-3263-4132-a165-393761613030/49252029.jpg"],description:"",specs:{}},{id:"cohiba-cohiba-siglo-de-oro-cigars",brand:"Cohiba",name:"Cohiba Siglo de Oro",format:"Siglo de Oro",category:"cigars",origin:"Куба",price:{amount:56e6,currency:"UZS"},inStock:!1,images:["https://static.tildacdn.com/stor3663-6163-4139-b463-613866646331/23064038.jpg"],description:"",specs:{}},{id:"cohiba-cohiba-robustos-box-of-25-cigars",brand:"Cohiba",name:"Cohiba Robustos (Box Of 25)",format:"Robustos (Box Of 25)",category:"cigars",origin:"Куба",price:{amount:325e5,currency:"UZS"},priceNote:"На сайте 2 варианта(ов) цены — уточнить",inStock:!0,images:["https://static.tildacdn.com/stor3038-3634-4231-a234-303464643361/38479825.jpg","https://static.tildacdn.com/stor6636-3737-4266-b466-636437333034/87222287.jpg"],description:"",specs:{}},{id:"cohiba-cohiba-siglo-iv-box-of-25-cigars",brand:"Cohiba",name:"Cohiba Siglo IV (Box Of 25)",format:"Siglo IV (Box Of 25)",category:"cigars",origin:"Куба",price:{amount:285e5,currency:"UZS"},inStock:!0,images:["https://static.tildacdn.com/stor3766-6365-4365-a234-623333643331/20970032.jpg"],description:"",specs:{}},{id:"cohiba-cohiba-ambar-cigars",brand:"Cohiba",name:"Cohiba Ambar",format:"Ambar",category:"cigars",origin:"Куба",price:{amount:15e6,currency:"UZS"},inStock:!1,images:["https://static.tildacdn.com/stor3736-3637-4735-b761-623462376261/73781780.jpg"],description:"",specs:{}},{id:"cohiba-cohiba-genios-box-of-25-cigars",brand:"Cohiba",name:"Cohiba Genios (Box Of 25)",format:"Genios (Box Of 25)",category:"cigars",origin:"Куба",price:{amount:37e6,currency:"UZS"},inStock:!1,images:["https://static.tildacdn.com/stor6236-3265-4963-a535-386332373732/20833957.jpg"],description:"",specs:{}},{id:"hupmann-hupmann-coronas-junior-cigars",brand:"H.Upmann",name:"H.Upmann Coronas Junior",format:"Coronas Junior",category:"cigars",origin:"Куба",price:{amount:19e4,currency:"UZS"},inStock:!1,images:["https://static.tildacdn.com/stor3062-3764-4037-b233-383161383237/63891562.jpg"],description:"",specs:{}},{id:"hupmann-hupmann-no2-cigars",brand:"H.Upmann",name:"H.Upmann №2",format:"№2",category:"cigars",origin:"Куба",price:{amount:115e5,currency:"UZS"},priceNote:"На сайте 2 варианта(ов) цены — уточнить",inStock:!0,images:["https://static.tildacdn.com/stor3931-3537-4539-b764-323962656237/38757096.jpg","https://static.tildacdn.com/stor6139-6438-4834-b939-623138393963/74801584.jpg"],description:"",specs:{}},{id:"hoyo-de-monterrey-hoyo-de-monterrey-le-hoyo-de-san-juan-cigars",brand:"Hoyo de Monterrey",name:"Hoyo de Monterrey Le Hoyo de San Juan",format:"Le Hoyo de San Juan",category:"cigars",origin:"Куба",price:{amount:535e4,currency:"UZS"},priceNote:"На сайте 2 варианта(ов) цены — уточнить",inStock:!0,images:["https://static.tildacdn.com/stor3738-6338-4465-a136-346137393936/39405236.jpg"],description:"",specs:{}},{id:"hupmann-hupmann-magnum-50-cigars",brand:"H.Upmann",name:"H.Upmann Magnum 50",format:"Magnum 50",category:"cigars",origin:"Куба",price:{amount:5e6,currency:"UZS"},priceNote:"На сайте 2 варианта(ов) цены — уточнить",inStock:!0,images:["https://static.tildacdn.com/stor3832-6666-4330-a261-366463313530/75904300.jpg"],description:"",specs:{}},{id:"hoyo-de-monterrey-hoyo-de-monterrey-epicure-no-3-box-of-25-cigars",brand:"Hoyo de Monterrey",name:"Hoyo de Monterrey Epicure № 3 (Box of 25)",format:"Epicure № 3 (Box of 25)",category:"cigars",origin:"Куба",price:{amount:105e5,currency:"UZS"},priceNote:"На сайте 2 варианта(ов) цены — уточнить",inStock:!0,images:["https://static.tildacdn.com/stor3736-3239-4361-b339-356437343037/34562835.jpg"],description:"",specs:{}},{id:"hupmann-hupmann-connossieur-no-2-cigars",brand:"H.Upmann",name:"H.Upmann Connossieur № 2",format:"Connossieur № 2",category:"cigars",origin:"Куба",price:{amount:105e5,currency:"UZS"},priceNote:"На сайте 2 варианта(ов) цены — уточнить",inStock:!0,images:["https://static.tildacdn.com/stor3537-3265-4163-a534-333935396637/68695707.jpg"],description:"",specs:{}},{id:"hupmann-hupmann-magnum-54-tub-cigars",brand:"H.Upmann",name:"H.Upmann Magnum 54 tub",format:"Magnum 54 tub",category:"cigars",origin:"Куба",price:{amount:51e4,currency:"UZS"},inStock:!0,images:["https://static.tildacdn.com/stor3461-6361-4963-b632-663337653966/61466427.jpg","https://static.tildacdn.com/stor6536-6231-4266-b039-613431393038/73015175.jpg"],description:"",specs:{}},{id:"montecristo-montecristo-double-edmundo-box-of-25-cigars",brand:"Montecristo",name:"Montecristo Double Edmundo (Box of 25)",format:"Double Edmundo (Box of 25)",category:"cigars",origin:"Куба",price:{amount:125e5,currency:"UZS"},inStock:!1,images:["https://static.tildacdn.com/stor3966-6464-4662-b633-356235363866/10950109.jpg"],description:"",specs:{}},{id:"montecristo-montecristo-maltes-linea-1935-cigars",brand:"Montecristo",name:"Montecristo Maltes Linea 1935",format:"Maltes Linea 1935",category:"cigars",origin:"Куба",price:{amount:2e7,currency:"UZS"},inStock:!1,images:["https://static.tildacdn.com/stor6265-3730-4366-b039-636135303039/23004676.jpg","https://static.tildacdn.com/stor3266-6261-4530-b761-326564396135/79892984.jpg"],description:"",specs:{}},{id:"montecristo-montecristo-wide-edmundo-box-of-25-cigars",brand:"Montecristo",name:"Montecristo Wide Edmundo (Box Of 25)",format:"Wide Edmundo (Box Of 25)",category:"cigars",origin:"Куба",price:{amount:115e5,currency:"UZS"},priceNote:"На сайте 2 варианта(ов) цены — уточнить",inStock:!0,images:["https://static.tildacdn.com/stor6164-3032-4935-a261-643432656664/43048714.jpg"],description:"",specs:{}},{id:"partagas-partagas-rito-box-of-20-cigars",brand:"Partagas",name:"Partagas Rito (Box of 20)",format:"Rito (Box of 20)",category:"cigars",origin:"Куба",price:{amount:255e5,currency:"UZS"},inStock:!0,images:["https://static.tildacdn.com/stor3365-3361-4136-b434-383761396436/24571799.jpg"],description:"",specs:{}},{id:"partagas-partagas-maestro-box-of-20-cigars",brand:"Partagas",name:"Partagas Maestro (Box of 20)",format:"Maestro (Box of 20)",category:"cigars",origin:"Куба",price:{amount:245e5,currency:"UZS"},inStock:!0,images:["https://static.tildacdn.com/stor6233-3665-4366-b266-666566643039/63325519.jpg","https://static.tildacdn.com/stor3264-3636-4339-b737-623439343965/84875221.jpg"],description:"",specs:{}},{id:"partagas-partagas-origen-box-of-20-cigars",brand:"Partagas",name:"Partagas Origen (Box of 20)",format:"Origen (Box of 20)",category:"cigars",origin:"Куба",price:{amount:24e6,currency:"UZS"},inStock:!0,images:["https://static.tildacdn.com/stor3936-6565-4063-a232-636237363366/14159584.jpg","https://static.tildacdn.com/stor3331-3230-4465-b534-386461323039/42629899.jpg"],description:"",specs:{}},{id:"partagas-partagas-linea-maestra-box-of-3-cigars",brand:"Partagas",name:"Partagas Linea Maestra (Box of 3)",format:"Linea Maestra (Box of 3)",category:"cigars",origin:"Куба",price:{amount:66e5,currency:"UZS"},inStock:!0,images:["https://static.tildacdn.com/stor3536-3763-4233-b666-653138623563/33543483.webp","https://static.tildacdn.com/stor3332-3862-4161-a165-396235656632/84034381.webp"],description:"",specs:{}},{id:"partagas-partagas-maduro-no1-box-of-25-cigars",brand:"Partagas",name:"Partagas Maduro №1 (Box of 25)",format:"Maduro №1 (Box of 25)",category:"cigars",origin:"Куба",price:{amount:95e5,currency:"UZS"},priceNote:"На сайте 2 варианта(ов) цены — уточнить",inStock:!0,images:["https://static.tildacdn.com/stor3035-6438-4232-b166-373835653866/25143932.jpg","https://static.tildacdn.com/stor3064-6536-4161-b936-336661663863/96825088.jpg"],description:"",specs:{}},{id:"partagas-partagas-maduro-no2-box-of-25-cigars",brand:"Partagas",name:"Partagas Maduro №2 (Box of 25)",format:"Maduro №2 (Box of 25)",category:"cigars",origin:"Куба",price:{amount:975e4,currency:"UZS"},priceNote:"На сайте 2 варианта(ов) цены — уточнить",inStock:!1,images:["https://static.tildacdn.com/stor3465-3032-4430-b862-626365326335/52778727.jpg","https://static.tildacdn.com/stor3332-3737-4738-a435-623539643739/10343359.jpg"],description:"",specs:{}},{id:"partagas-partagas-serie-d-no4-cigars",brand:"Partagas",name:"Partagas Serie D №4",format:"Serie D №4",category:"cigars",origin:"Куба",price:{amount:1e7,currency:"UZS"},priceNote:"На сайте 2 варианта(ов) цены — уточнить",inStock:!0,images:["https://static.tildacdn.com/stor6362-3735-4334-b963-613231623365/85457829.jpg","https://static.tildacdn.com/stor3635-6235-4236-b731-316533373761/54543573.jpg"],description:"",specs:{}},{id:"montecristo-montecristo-leyenda-box-of-20-cigars",brand:"Montecristo",name:"Montecristo Leyenda (Box Of 20)",format:"Leyenda (Box Of 20)",category:"cigars",origin:"Куба",price:{amount:24e6,currency:"UZS"},priceNote:"На сайте 2 варианта(ов) цены — уточнить",inStock:!0,images:["https://static.tildacdn.com/stor6338-3561-4435-a166-336465396534/38195542.jpg","https://static.tildacdn.com/stor3931-3932-4465-b138-646639326435/89452983.jpg"],description:"",specs:{}},{id:"quai-dorsay-quai-dorsay-no-50-box-of-10-cigars",brand:"Quai D'Orsay",name:"Quai D'Orsay № 50 (Box of 10)",format:"№ 50 (Box of 10)",category:"cigars",origin:"Куба",price:{amount:275e4,currency:"UZS"},priceNote:"На сайте 2 варианта(ов) цены — уточнить",inStock:!0,images:["https://static.tildacdn.com/stor6231-3763-4734-a464-323461396365/46512749.jpg"],description:"",specs:{}},{id:"quai-dorsay-quai-dorsay-no-54-box-of-10-cigars",brand:"Quai D'Orsay",name:"Quai D'Orsay № 54 (Box of 10)",format:"№ 54 (Box of 10)",category:"cigars",origin:"Куба",price:{amount:375e4,currency:"UZS"},priceNote:"На сайте 2 варианта(ов) цены — уточнить",inStock:!0,images:["https://static.tildacdn.com/stor3062-3936-4164-a637-306334636535/24637268.jpg","https://static.tildacdn.com/stor3965-3165-4333-b166-353134353434/94793758.jpg"],description:"",specs:{}},{id:"quai-dorsay-quai-dorsay-no-54-box-of-25-cigars",brand:"Quai D'Orsay",name:"Quai D'Orsay № 54 (Box of 25)",format:"№ 54 (Box of 25)",category:"cigars",origin:"Куба",price:{amount:875e4,currency:"UZS"},inStock:!0,images:["https://static.tildacdn.com/stor3430-3835-4239-a536-366136336138/64722411.jpg","https://static.tildacdn.com/stor3236-6234-4062-a162-623534336637/55335558.jpg"],description:"",specs:{}},{id:"quai-dorsay-quai-dorsay-no-50-box-of-25-cigars",brand:"Quai D'Orsay",name:"Quai D'Orsay № 50 (Box of 25)",format:"№ 50 (Box of 25)",category:"cigars",origin:"Куба",price:{amount:625e4,currency:"UZS"},inStock:!0,images:["https://static.tildacdn.com/stor6163-6361-4036-a530-656262323964/18709767.jpg","https://static.tildacdn.com/stor3834-3764-4934-a336-643632343666/63304223.jpg"],description:"",specs:{}},{id:"trinidad-trinidad-topes-box-of-12-cigars",brand:"Trinidad",name:"Trinidad Topes (Box of 12)",format:"Topes (Box of 12)",category:"cigars",origin:"Куба",price:{amount:102e5,currency:"UZS"},inStock:!1,images:["https://static.tildacdn.com/stor6430-3238-4630-b562-353131323137/41197887.jpg","https://static.tildacdn.com/stor6133-6434-4338-b464-323031663165/52729688.jpg"],description:"",specs:{}},{id:"romeo-y-julieta-romeo-y-julieta-no1-cigars",brand:"Romeo y Julieta",name:"Romeo y Julieta №1",format:"№1",category:"cigars",origin:"Куба",price:{amount:28e4,currency:"UZS"},inStock:!0,images:["https://static.tildacdn.com/stor3639-6163-4136-a334-613337393063/50521937.jpg"],description:"",specs:{}},{id:"romeo-y-julieta-romeo-y-julieta-no2-cigars",brand:"Romeo y Julieta",name:"Romeo y Julieta №2",format:"№2",category:"cigars",origin:"Куба",price:{amount:25e4,currency:"UZS"},inStock:!0,images:["https://static.tildacdn.com/stor6461-3438-4461-b037-646331666264/68984923.jpg"],description:"",specs:{}},{id:"romeo-y-julieta-romeo-y-julieta-no3-cigars",brand:"Romeo y Julieta",name:"Romeo y Julieta №3",format:"№3",category:"cigars",origin:"Куба",price:{amount:23e4,currency:"UZS"},inStock:!0,images:["https://static.tildacdn.com/stor6265-3563-4664-b264-353866663365/20943733.jpg"],description:"",specs:{}},{id:"romeo-y-julieta-romeo-y-julieta-short-churchils-cigars",brand:"Romeo y Julieta",name:"Romeo y Julieta short churchils",format:"short churchils",category:"cigars",origin:"Куба",price:{amount:45e4,currency:"UZS"},inStock:!1,images:["https://static.tildacdn.com/stor6633-3964-4531-b765-303839666566/14936123.jpg"],description:"",specs:{}},{id:"romeo-y-julieta-romeo-y-julieta-nobles-box-of-20-cigars",brand:"Romeo y Julieta",name:"Romeo y Julieta Nobles (Box Of 20)",format:"Nobles (Box Of 20)",category:"cigars",origin:"Куба",price:{amount:215e5,currency:"UZS"},inStock:!0,images:["https://static.tildacdn.com/stor3032-3032-4138-a336-313466336636/84469214.jpg","https://static.tildacdn.com/stor6261-6664-4037-b064-663161333139/21680349.webp"],description:"",specs:{}},{id:"romeo-y-julieta-romeo-y-julieta-dianes-box-of-20-cigars",brand:"Romeo y Julieta",name:"Romeo y Julieta Dianes (Box Of 20)",format:"Dianes (Box Of 20)",category:"cigars",origin:"Куба",price:{amount:22e6,currency:"UZS"},inStock:!0,images:["https://static.tildacdn.com/stor3563-6137-4530-b932-306134663565/87151793.jpg","https://static.tildacdn.com/stor3664-3866-4461-a336-313436323137/14518417.jpg"],description:"",specs:{}},{id:"romeo-y-julieta-romeo-y-julieta-cupidos-box-of-20-cigars",brand:"Romeo y Julieta",name:"Romeo y Julieta Cupidos (Box Of 20)",format:"Cupidos (Box Of 20)",category:"cigars",origin:"Куба",price:{amount:24e6,currency:"UZS"},inStock:!0,images:["https://static.tildacdn.com/stor3231-6666-4161-b634-356561326431/69660898.jpg"],description:"",specs:{}},{id:"montecristo-montecristo-brillantes-year-of-the-dragon-box-of-18-cigars",brand:"Montecristo",name:"Montecristo Brillantes Year of the Dragon (Box Of 18)",format:"Brillantes Year of the Dragon (Box Of 18)",category:"cigars",origin:"Куба",price:{amount:279e5,currency:"UZS"},inStock:!0,images:["https://static.tildacdn.com/stor6638-6463-4830-a332-643136656534/12291043.jpg","https://static.tildacdn.com/stor3066-3538-4438-b231-623365613035/64160056.jpg"],description:"",specs:{}},{id:"por-larranaga-por-larranaga-montecarlos-cigars",brand:"Por Larranaga",name:"Por Larranaga Montecarlos",format:"Montecarlos",category:"cigars",origin:"Куба",price:{amount:45e5,currency:"UZS"},inStock:!1,images:["https://static.tildacdn.com/stor3166-3863-4232-a366-633236663133/13584253.jpg","https://static.tildacdn.com/stor3264-3030-4361-b532-316631646662/24588268.jpg"],description:"",specs:{}},{id:"partagas-partagas-serie-d-no4-box-of-10-cigars",brand:"Partagas",name:"Partagas Serie D №4 (Box of 10)",format:"Serie D №4 (Box of 10)",category:"cigars",origin:"Куба",price:{amount:38e5,currency:"UZS"},inStock:!0,images:["https://static.tildacdn.com/stor3733-3430-4131-a538-333234643433/53295821.jpg"],description:"",specs:{}},{id:"partagas-partagas-serie-p-2-cigars",brand:"Partagas",name:"Partagas Serie P 2",format:"Serie P 2",category:"cigars",origin:"Куба",price:{amount:57e4,currency:"UZS"},inStock:!0,images:["https://static.tildacdn.com/stor3063-3037-4361-a531-313039313162/84357305.png"],description:"",specs:{}},{id:"vegueros-vegueros-mananitas-box-of-16-cigars",brand:"Vegueros",name:"Vegueros Mananitas (Box Of 16)",format:"Mananitas (Box Of 16)",category:"cigars",origin:"Куба",price:{amount:24e5,currency:"UZS"},priceNote:"На сайте 3 варианта(ов) цены — уточнить",inStock:!1,images:["https://static.tildacdn.com/stor3562-3738-4637-b238-343735633636/42144743.jpg"],description:"",specs:{}},{id:"el-rey-del-mundo-el-rey-del-mundo-choix-supreme-box-of-25-cigars",brand:"El Rey del Mundo",name:"El Rey Del Mundo Choix Supreme (Box of 25)",format:"Choix Supreme (Box of 25)",category:"cigars",origin:"Куба",price:{amount:75e5,currency:"UZS"},priceNote:"На сайте 2 варианта(ов) цены — уточнить",inStock:!0,images:["https://static.tildacdn.com/stor3734-3639-4063-a531-653539326361/264cba4e6bb245ef40ecbee745e4f35b.jpg"],description:"",specs:{}},{id:"punch-punch-punch-punch-box-of-25-cigars",brand:"Punch",name:"Punch Punch Punch (Box Of 25)",format:"Punch Punch (Box Of 25)",category:"cigars",origin:"Куба",price:{amount:95e5,currency:"UZS"},priceNote:"На сайте 2 варианта(ов) цены — уточнить",inStock:!1,images:["https://static.tildacdn.com/stor3632-6435-4463-b462-333131646662/32103519.jpg"],description:"",specs:{}},{id:"hoyo-de-monterrey-hoyo-de-monterrey-monterreyes-no-4-le-2021-box-of-10-cigars",brand:"Hoyo de Monterrey",name:"Hoyo de Monterrey Monterreyes № 4 LE 2021 (Box of 10)",format:"Monterreyes № 4 LE 2021 (Box of 10)",category:"cigars",origin:"Куба",price:{amount:118e5,currency:"UZS"},inStock:!1,images:["https://static.tildacdn.com/stor6330-3631-4364-b166-336634646131/90885937.jpg"],description:"",specs:{}},{id:"montecristo-montecristo-open-eagle-tubos-cigars",brand:"Montecristo",name:"Montecristo Open Eagle Tubos",format:"Open Eagle Tubos",category:"cigars",origin:"Куба",price:{amount:615e3,currency:"UZS"},inStock:!1,images:["https://static.tildacdn.com/stor3466-3736-4464-b966-663736613130/13762789.jpg"],description:"",specs:{}},{id:"montecristo-montecristo-edmundo-reserva-cosecha-2018-box-of-20-cigars",brand:"Montecristo",name:"Montecristo Edmundo Reserva Cosecha 2018 (Box Of 20)",format:"Edmundo Reserva Cosecha 2018 (Box Of 20)",category:"cigars",origin:"Куба",price:{amount:55e6,currency:"UZS"},inStock:!0,images:["https://static.tildacdn.com/stor3334-3035-4163-a563-336165373962/10231014.jpg","https://static.tildacdn.com/stor3363-6363-4938-b830-666661366136/51542071.jpg"],description:"",specs:{}},{id:"montecristo-montecristo-open-regata-tubos-cigars",brand:"Montecristo",name:"Montecristo Open Regata Tubos",format:"Open Regata Tubos",category:"cigars",origin:"Куба",price:{amount:42e4,currency:"UZS"},inStock:!0,images:["https://static.tildacdn.com/stor6132-3664-4162-a666-306435376561/19933284.jpg"],description:"",specs:{}},{id:"vegas-robaina-vegas-robaina-unicos-box-of-25-cigars",brand:"Vegas Robaina",name:"Vegas Robaina Unicos (Box of 25)",format:"Robaina Unicos (Box of 25)",category:"cigars",origin:"Куба",price:{amount:1075e4,currency:"UZS"},priceNote:"На сайте 2 варианта(ов) цены — уточнить",inStock:!1,images:["https://static.tildacdn.com/stor3633-6434-4265-b830-653134633433/83138586.jpg"],description:"",specs:{}},{id:"habanos-seleccion-habanos-seleccion-petit-robustos-sets",brand:"Habanos Seleccion",name:"Habanos Seleccion Petit Robustos",format:"Petit Robustos",category:"sets",origin:"Куба",price:{amount:51e5,currency:"UZS"},inStock:!1,images:["https://static.tildacdn.com/stor3331-6137-4436-a430-313762343637/97422581.jpg","https://static.tildacdn.com/stor6364-6530-4636-b538-643965396639/89991618.jpg","https://static.tildacdn.com/stor6332-3166-4636-b536-616432353233/99665765.jpg"],description:"",specs:{}},{id:"hupmann-hupmann-connossieur-a-box-of-25-cigars",brand:"H.Upmann",name:"H.Upmann Connossieur A (Box Of 25)",format:"Connossieur A (Box Of 25)",category:"cigars",origin:"Куба",price:{amount:1075e4,currency:"UZS"},priceNote:"На сайте 2 варианта(ов) цены — уточнить",inStock:!0,images:["https://static.tildacdn.com/stor3535-3064-4561-a433-323733313231/13371229.jpg"],description:"",specs:{}},{id:"hupmann-hupmann-magnum-54-cigars",brand:"H.Upmann",name:"H.Upmann Magnum 54",format:"Magnum 54",category:"cigars",origin:"Куба",price:{amount:475e4,currency:"UZS"},priceNote:"На сайте 2 варианта(ов) цены — уточнить",inStock:!0,images:["https://static.tildacdn.com/stor3931-3162-4366-b839-666264396630/48314432.jpg"],description:"",specs:{}},{id:"hoyo-de-monterrey-hoyo-de-monterrey-epicure-especial-tubos-cigars",brand:"Hoyo de Monterrey",name:"Hoyo de Monterrey Epicure Especial Tubos",format:"Epicure Especial Tubos",category:"cigars",origin:"Куба",price:{amount:495e3,currency:"UZS"},inStock:!0,images:["https://static.tildacdn.com/stor3337-6438-4439-b631-333435376437/54076825.jpg"],description:"",specs:{}},{id:"hoyo-de-monterrey-hoyo-de-monterrey-epicure-especial-box-of-25-cigars",brand:"Hoyo de Monterrey",name:"Hoyo de Monterrey Epicure Especial (Box of 25)",format:"Epicure Especial (Box of 25)",category:"cigars",origin:"Куба",price:{amount:115e5,currency:"UZS"},inStock:!0,images:["https://static.tildacdn.com/stor3431-3339-4565-b166-303665373764/20880964.jpg"],description:"",specs:{}},{id:"montecristo-montecristo-open-slam-box-of-20-cigars",brand:"Montecristo",name:"Montecristo Open Slam (Box Of 20)",format:"Open Slam (Box Of 20)",category:"cigars",origin:"Куба",price:{amount:105e5,currency:"UZS"},priceNote:"На сайте 2 варианта(ов) цены — уточнить",inStock:!1,images:["https://static.tildacdn.com/stor3363-6630-4664-b464-643363356536/48067116.jpg","https://static.tildacdn.com/stor3435-6235-4930-a437-626535373565/10914490.jpg"],description:"",specs:{}},{id:"partagas-partagas-lusitanias-box-of-10-cigars",brand:"Partagas",name:"Partagas Lusitanias (Box of 10)",format:"Lusitanias (Box of 10)",category:"cigars",origin:"Куба",price:{amount:65e5,currency:"UZS"},priceNote:"На сайте 2 варианта(ов) цены — уточнить",inStock:!0,images:["https://static.tildacdn.com/stor3861-3334-4339-b861-353865386333/27414064.jpg"],description:"",specs:{}},{id:"quintero-quintero-favoritos-tubos-cigars",brand:"Quintero",name:"Quintero Favoritos Tubos",format:"Favoritos Tubos",category:"cigars",origin:"Куба",price:{amount:18e4,currency:"UZS"},inStock:!1,images:["https://static.tildacdn.com/stor3438-3562-4235-b135-353339646130/73526731.jpg"],description:"",specs:{}},{id:"san-cristobal-de-la-habana-san-cristobal-de-la-habana-la-fuerza-box-of-25-ciga",brand:"San Cristobal De La Habana",name:"San Cristobal De La Habana La Fuerza (Box of 25)",format:"La Fuerza (Box of 25)",category:"cigars",origin:"Куба",price:{amount:975e4,currency:"UZS"},inStock:!1,images:["https://static.tildacdn.com/stor6539-3462-4532-b538-663233626665/56730904.jpg"],description:"",specs:{}},{id:"cohiba-сигариллы-cohiba-club-cigarillos",brand:"Cohiba",name:"Сигариллы Cohiba Club",format:"Club",category:"cigarillos",origin:"Куба",price:{amount:62e4,currency:"UZS"},inStock:!0,images:["https://static.tildacdn.com/stor3138-3931-4530-b639-656432336561/25996467.jpg","https://static.tildacdn.com/stor6438-6330-4931-b664-373437383565/69868842.jpg"],description:"",specs:{}},{id:"cohiba-сигариллы-cohiba-wide-short-cigarillos",brand:"Cohiba",name:"Сигариллы Cohiba Wide Short",format:"Wide Short",category:"cigarillos",origin:"Куба",price:{amount:6e5,currency:"UZS"},inStock:!0,images:["https://static.tildacdn.com/stor3830-3862-4361-b337-313561623639/84911333.jpg","https://static.tildacdn.com/stor6164-3437-4335-b162-346366636231/70026329.jpg"],description:"",specs:{}},{id:"guantanamera-сигариллы-guantanamera-mini-cigarillos",brand:"Guantanamera",name:"Сигариллы Guantanamera Mini",format:"Mini",category:"cigarillos",origin:"Куба",price:{amount:3e5,currency:"UZS"},inStock:!0,images:["https://static.tildacdn.com/stor6339-6263-4533-a463-656563376539/61371047.jpg","https://static.tildacdn.com/stor6163-3238-4165-a435-636466633066/41591264.jpg"],description:"",specs:{}},{id:"montecristo-сигариллы-montecristo-club-cigarillos",brand:"Montecristo",name:"Сигариллы Montecristo Club",format:"Club",category:"cigarillos",origin:"Куба",price:{amount:53e4,currency:"UZS"},inStock:!0,images:["https://static.tildacdn.com/stor6662-6637-4463-b862-356133346437/40356064.jpg","https://static.tildacdn.com/stor3463-3630-4939-a335-313439643533/73807700.jpg"],description:"",specs:{}},{id:"montecristo-сигариллы-montecristo-open-club-cigarillos",brand:"Montecristo",name:"Сигариллы Montecristo Open Club",format:"Open Club",category:"cigarillos",origin:"Куба",price:{amount:54e4,currency:"UZS"},inStock:!0,images:["https://static.tildacdn.com/stor6537-3737-4538-a165-306532333633/52262831.jpg","https://static.tildacdn.com/stor3566-3666-4137-b637-663333666431/44086116.jpg"],description:"",specs:{}},{id:"partagas-сигариллы-partagas-club-cigarillos",brand:"Partagas",name:"Сигариллы Partagas Club",format:"Club",category:"cigarillos",origin:"Куба",price:{amount:47e4,currency:"UZS"},inStock:!0,images:["https://static.tildacdn.com/stor6562-6462-4538-a631-633732323962/67596990.jpg"],description:"",specs:{}},{id:"partagas-сигариллы-partagas-series-club-cigarillos",brand:"Partagas",name:"Сигариллы Partagas Series Club",format:"Series Club",category:"cigarillos",origin:"Куба",price:{amount:48e4,currency:"UZS"},inStock:!0,images:["https://static.tildacdn.com/stor6434-6633-4862-b131-366237643065/82807389.jpg","https://static.tildacdn.com/stor3662-3638-4239-b731-353865616339/61599430.jpg"],description:"",specs:{}},{id:"romeo-y-julieta-сигариллы-romeo-y-julieta-club-cigarillos",brand:"Romeo Y Julieta",name:"Сигариллы Romeo Y Julieta Club",format:"Club",category:"cigarillos",origin:"Куба",price:{amount:46e4,currency:"UZS"},inStock:!0,images:["https://static.tildacdn.com/stor6261-3739-4336-b034-373730343161/83581821.jpg","https://static.tildacdn.com/stor3530-3964-4237-b033-633236316162/99210393.jpg"],description:"",specs:{}},{id:"ramon-allones-ramon-allones-allones-no-3-cigars",brand:"Ramon Allones",name:"Ramon Allones Allones № 3",format:"Allones № 3",category:"cigars",origin:"Куба",price:{amount:375e4,currency:"UZS"},priceNote:"На сайте 2 варианта(ов) цены — уточнить",inStock:!0,images:["https://static.tildacdn.com/stor6264-3662-4038-b738-326632626139/76120515.jpg"],description:"",specs:{}},{id:"bolivar-bolivar-belicosos-finos-cigars",brand:"Bolivar",name:"Bolivar Belicosos Finos",format:"Belicosos Finos",category:"cigars",origin:"Куба",price:{amount:105e5,currency:"UZS"},priceNote:"На сайте 2 варианта(ов) цены — уточнить",inStock:!0,images:["https://static.tildacdn.com/stor6236-3638-4032-a266-363538316564/95116818.jpg"],description:"",specs:{}},{id:"bolivar-bolivar-new-gold-medal-lcdh-cigars",brand:"Bolivar",name:"Bolivar New Gold Medal LCDH",format:"New Gold Medal LCDH",category:"cigars",origin:"Куба",price:{amount:575e4,currency:"UZS"},priceNote:"На сайте 2 варианта(ов) цены — уточнить",inStock:!1,images:["https://static.tildacdn.com/stor3832-3233-4166-b235-363436623361/98483676.jpg"],description:"",specs:{}},{id:"cohiba-cohiba-esplenditos-box-of-25-cigars",brand:"Cohiba",name:"Cohiba Esplenditos (Box Of 25)",format:"Esplenditos (Box Of 25)",category:"cigars",origin:"Куба",price:{amount:495e5,currency:"UZS"},inStock:!0,images:["https://static.tildacdn.com/stor3332-3739-4632-b765-633563353766/70241910.jpg"],description:"",specs:{}},{id:"cohiba-cohiba-lanceros-box-of-25-cigars",brand:"Cohiba",name:"Cohiba Lanceros (Box Of 25)",format:"Lanceros (Box Of 25)",category:"cigars",origin:"Куба",price:{amount:345e5,currency:"UZS"},inStock:!1,images:["https://static.tildacdn.com/stor3732-3431-4161-a562-336636373830/33608808.jpg"],description:"",specs:{}},{id:"hupmann-hupmann-coronas-major-tubos-cigars",brand:"H.Upmann",name:"H.Upmann Coronas Major Tubos",format:"Coronas Major Tubos",category:"cigars",origin:"Куба",price:{amount:24e4,currency:"UZS"},inStock:!1,images:["https://static.tildacdn.com/stor3532-6435-4339-b336-613938323564/16675603.jpg"],description:"",specs:{}},{id:"hoyo-de-monterrey-hoyo-de-monterrey-coronations-tubos-cigars",brand:"Hoyo de Monterrey",name:"Hoyo de Monterrey Coronations Tubos",format:"Coronations Tubos",category:"cigars",origin:"Куба",price:{amount:255e3,currency:"UZS"},inStock:!0,images:["https://static.tildacdn.com/stor6632-3062-4239-b866-393931383061/19948463.jpg"],description:"",specs:{}},{id:"jose-l-pedra-jose-l-pedra-petit-cazadores-box-of-5-cigars",brand:"Jose L Pedra",name:"Jose L Pedra Petit Cazadores (Box Of 5)",format:"Petit Cazadores (Box Of 5)",category:"cigars",origin:"Куба",price:{amount:3e5,currency:"UZS"},inStock:!0,images:["https://static.tildacdn.com/stor3162-3233-4364-a664-636136613865/27354182.jpg"],description:"",specs:{}},{id:"partagas-partagas-serie-e-2-box-of-25-cigars",brand:"Partagas",name:"Partagas Serie E 2 (Box of 25)",format:"Serie E 2 (Box of 25)",category:"cigars",origin:"Куба",price:{amount:135e5,currency:"UZS"},priceNote:"На сайте 2 варианта(ов) цены — уточнить",inStock:!0,images:["https://static.tildacdn.com/stor3233-6434-4934-a439-303831643537/17525582.jpg"],description:"",specs:{}},{id:"ramon-allones-ramon-allones-gigantes-cigars",brand:"Ramon Allones",name:"Ramon Allones GIgantes",format:"GIgantes",category:"cigars",origin:"Куба",price:{amount:14e6,currency:"UZS"},inStock:!1,images:["https://static.tildacdn.com/stor3531-3464-4034-a264-306132313966/39009668.jpg"],description:"",specs:{}},{id:"san-cristobal-de-la-habana-san-cristobal-de-la-habana-20th-aniversario-chest-lcd",brand:"San Cristobal De La Habana",name:"San Cristobal De La Habana 20th Aniversario Chest LCDH",format:"20th Aniversario Chest LCDH",category:"cigars",origin:"Куба",price:{amount:195e5,currency:"UZS"},inStock:!1,images:["https://static.tildacdn.com/stor3430-3661-4335-a237-373834613865/78849005.jpg"],description:"",specs:{}},{id:"cuaba-cuaba-exclusivos-cigars",brand:"Cuaba",name:"Cuaba Exclusivos",format:"Exclusivos",category:"cigars",origin:"Куба",price:{amount:825e4,currency:"UZS"},inStock:!0,images:["https://static.tildacdn.com/stor3637-3739-4236-b738-613965616331/15577671.jpg"],description:"",specs:{}},{id:"cuaba-cuaba-tradicionales-cigars",brand:"Cuaba",name:"Cuaba Tradicionales",format:"Tradicionales",category:"cigars",origin:"Куба",price:{amount:6e6,currency:"UZS"},inStock:!1,images:["https://static.tildacdn.com/stor3831-3063-4166-b132-323861626239/30741817.jpg"],description:"",specs:{}},{id:"diplomaticos-diplomaticos-no-2-box-of-25-cigars",brand:"Diplomaticos",name:"Diplomaticos No. 2 (Box Of 25)",format:"No. 2 (Box Of 25)",category:"cigars",origin:"Куба",price:{amount:9e6,currency:"UZS"},priceNote:"На сайте 2 варианта(ов) цены — уточнить",inStock:!0,images:["https://static.tildacdn.com/stor6163-3562-4062-b931-356539323733/8aab495376a15812da6ecc9c13b22794.jpg","https://static.tildacdn.com/stor6336-3264-4633-b533-623935643739/6a6e2a74a21e2b26422b565f300b4440.jpg"],description:"",specs:{}},{id:"fonseca-fonseca-no-1-cigars",brand:"Fonseca",name:"Fonseca No. 1",format:"No. 1",category:"cigars",origin:"Куба",price:{amount:725e4,currency:"UZS"},inStock:!0,images:["https://static.tildacdn.com/stor3133-6130-4566-a336-346333383830/20937630.jpg","https://static.tildacdn.com/stor3533-6136-4736-a433-366239363434/26978241.jpg"],description:"",specs:{}},{id:"lubinski-гильотина-lubinski-lounge-cut-bronze-accessories",brand:"LUBINSKI",name:"Гильотина LUBINSKI Lounge Cut Bronze",format:"Lounge Cut Bronze",category:"accessories",accessorySubcategory:"Гильотины/каттеры/ножи",origin:"Испания",price:{amount:2999e3,currency:"UZS"},inStock:!0,images:["https://static.tildacdn.com/stor3138-6530-4639-b766-326335653361/45753217.jpg"],description:"",specs:{}},{id:"lubinski-гильотина-lubinski-lounge-cut-silver-accessories",brand:"LUBINSKI",name:"Гильотина LUBINSKI Lounge Cut Silver",format:"Lounge Cut Silver",category:"accessories",accessorySubcategory:"Гильотины/каттеры/ножи",origin:"Испания",price:{amount:2999e3,currency:"UZS"},inStock:!0,images:["https://static.tildacdn.com/stor3766-3139-4662-b963-356435303936/63385931.jpg"],description:"",specs:{}},{id:"lubinski-пепельница-сигарная-lubinski-blackstone-cherry-accessories",brand:"LUBINSKI",name:"Пепельница сигарная LUBINSKI Blackstone Cherry",format:"сигарная LUBINSKI Blackstone Cherry",category:"accessories",accessorySubcategory:"Пепельницы",origin:"Испания",price:{amount:999e3,currency:"UZS"},inStock:!1,images:["https://static.tildacdn.com/stor6533-3130-4638-b364-373837646163/95430138.jpg"],description:"",specs:{}},{id:"lubinski-пепельница-сигарная-lubinski-ca-001-blue-accessories",brand:"LUBINSKI",name:"Пепельница сигарная LUBINSKI CA-001 Blue",format:"сигарная LUBINSKI CA-001 Blue",category:"accessories",accessorySubcategory:"Пепельницы",origin:"Испания",price:{amount:249e3,currency:"UZS"},inStock:!1,images:["https://static.tildacdn.com/stor3065-3638-4839-b833-363336333639/50734749.jpg"],description:"",specs:{}},{id:"lubinski-пепельница-сигарная-lubinski-classic-bronze-accessories",brand:"LUBINSKI",name:"Пепельница сигарная LUBINSKI Classic Bronze",format:"сигарная LUBINSKI Classic Bronze",category:"accessories",accessorySubcategory:"Гильотины/каттеры/ножи",origin:"Испания",price:{amount:129e4,currency:"UZS"},inStock:!0,images:["https://static.tildacdn.com/stor3464-6535-4333-a134-356130393264/15957067.jpg"],description:"",specs:{}},{id:"lubinski-пепельница-сигарная-lubinski-solo-red-accessories",brand:"LUBINSKI",name:"Пепельница сигарная LUBINSKI Solo Red",format:"сигарная LUBINSKI Solo Red",category:"accessories",accessorySubcategory:"Пепельницы",origin:"Испания",price:{amount:199e3,currency:"UZS"},inStock:!1,images:["https://static.tildacdn.com/stor3762-3435-4261-b633-643664636437/85051992.jpg"],description:"",specs:{}},{id:"lubinski-пепельница-сигарная-lubinski-solo-white-accessories",brand:"LUBINSKI",name:"Пепельница сигарная LUBINSKI Solo White",format:"сигарная LUBINSKI Solo White",category:"accessories",accessorySubcategory:"Пепельницы",origin:"Испания",price:{amount:199e3,currency:"UZS"},inStock:!1,images:["https://static.tildacdn.com/stor6564-3135-4937-b666-626565316366/18478692.jpg"],description:"",specs:{}},{id:"lubinski-пепельница-сигарная-lubinski-vip-egypt-accessories",brand:"LUBINSKI",name:"Пепельница сигарная LUBINSKI VIP Egypt",format:"сигарная LUBINSKI VIP Egypt",category:"accessories",accessorySubcategory:"Пепельницы",origin:"Испания",price:{amount:1499e3,currency:"UZS"},inStock:!0,images:["https://static.tildacdn.com/stor6561-3337-4263-b834-356233336339/26012080.jpg"],description:"",specs:{}},{id:"lubinski-пепельница-сигарная-lubinski-vip-bronze-accessories",brand:"LUBINSKI",name:"Пепельница сигарная LUBINSKI VIP Bronze",format:"сигарная LUBINSKI VIP Bronze",category:"accessories",accessorySubcategory:"Пепельницы",origin:"Испания",price:{amount:499e3,currency:"UZS"},inStock:!1,images:["https://static.tildacdn.com/stor6536-3734-4837-b264-363133313362/62317364.jpg"],description:"",specs:{}},{id:"lubinski-пепельница-сигарная-lubinski-vip-silver-accessories",brand:"LUBINSKI",name:"Пепельница сигарная LUBINSKI VIP Silver",format:"сигарная LUBINSKI VIP Silver",category:"accessories",accessorySubcategory:"Пепельницы",origin:"Испания",price:{amount:499e3,currency:"UZS"},inStock:!1,images:["https://static.tildacdn.com/stor3236-3864-4163-a231-346263383233/84506815.jpg"],description:"",specs:{}},{id:"lubinski-подставка-для-сигар-lubinski-chief-bronze-accessories",brand:"LUBINSKI",name:"Подставка для сигар LUBINSKI Chief Bronze",format:"для сигар LUBINSKI Chief Bronze",category:"accessories",accessorySubcategory:"Подставки",origin:"Испания",price:{amount:149e4,currency:"UZS"},inStock:!0,images:["https://static.tildacdn.com/stor6433-6439-4732-b465-326139316134/86590404.jpg"],description:"",specs:{}},{id:"lubinski-хьюмидор-lubinski-red-dragon-accessories",brand:"LUBINSKI",name:"Хьюмидор LUBINSKI Red Dragon",format:"Red Dragon",category:"accessories",accessorySubcategory:"Хьюмидоры",origin:"Испания",price:{amount:14999e3,currency:"UZS"},inStock:!0,images:["https://static.tildacdn.com/stor6137-3437-4163-b861-336331613233/17809773.jpg","https://static.tildacdn.com/stor3835-6564-4864-b761-346536653631/48330584.jpg"],description:"",specs:{}},{id:"les-fines-lames-зажигалка-les-fines-lames-brick-black-accessories",brand:"Les Fines Lames",name:"Зажигалка Les Fines Lames BRICK Black",format:"BRICK Black",category:"accessories",accessorySubcategory:"Зажигалки",origin:"Франция",price:{amount:199e4,currency:"UZS"},inStock:!1,images:["https://static.tildacdn.com/stor3535-3131-4561-b865-373432646265/98152627.jpg","https://static.tildacdn.com/stor3864-3732-4961-a632-333637353561/37082710.jpg"],description:"",specs:{}},{id:"les-fines-lames-зажигалка-les-fines-lames-brick-blue-accessories",brand:"Les Fines Lames",name:"Зажигалка Les Fines Lames BRICK Blue",format:"BRICK Blue",category:"accessories",accessorySubcategory:"Зажигалки",origin:"Франция",price:{amount:199e4,currency:"UZS"},inStock:!1,images:["https://static.tildacdn.com/stor6437-3266-4336-b033-393165346430/29255701.jpg","https://static.tildacdn.com/stor3062-3238-4931-b038-363066316231/22598899.jpg"],description:"",specs:{}},{id:"les-fines-lames-зажигалка-les-fines-lames-brick-champagne-accessories",brand:"Les Fines Lames",name:"Зажигалка Les Fines Lames BRICK Champagne",format:"BRICK Champagne",category:"accessories",accessorySubcategory:"Зажигалки",origin:"Франция",price:{amount:199e4,currency:"UZS"},inStock:!1,images:["https://static.tildacdn.com/stor3466-3832-4137-b063-313239373435/68713413.jpg","https://static.tildacdn.com/stor6565-3766-4661-b730-373935343937/26662393.jpg"],description:"",specs:{}},{id:"les-fines-lames-зажигалка-les-fines-lames-brick-red-accessories",brand:"Les Fines Lames",name:"Зажигалка Les Fines Lames BRICK Red",format:"BRICK Red",category:"accessories",accessorySubcategory:"Зажигалки",origin:"Франция",price:{amount:199e4,currency:"UZS"},inStock:!1,images:["https://static.tildacdn.com/stor6436-6131-4736-a162-383239313935/44527250.jpg","https://static.tildacdn.com/stor3435-6161-4139-a535-653133343336/57429482.jpg"],description:"",specs:{}},{id:"les-fines-lames-зажигалка-les-fines-lames-svelt-black-accessories",brand:"Les Fines Lames",name:"Зажигалка Les Fines Lames SVELT Black",format:"SVELT Black",category:"accessories",accessorySubcategory:"Зажигалки",origin:"Франция",price:{amount:179e4,currency:"UZS"},inStock:!1,images:["https://static.tildacdn.com/stor3937-3966-4764-b936-663833393835/43096928.jpg"],description:"",specs:{}},{id:"les-fines-lames-зажигалка-les-fines-lames-svelt-fde-accessories",brand:"Les Fines Lames",name:"Зажигалка Les Fines Lames SVELT FDE",format:"SVELT FDE",category:"accessories",accessorySubcategory:"Зажигалки",origin:"Франция",price:{amount:179e4,currency:"UZS"},inStock:!1,images:["https://static.tildacdn.com/stor3432-3735-4365-b266-643133356536/72360488.jpg","https://static.tildacdn.com/stor3733-6161-4131-a430-313135653834/83123568.jpg"],description:"",specs:{}},{id:"les-fines-lames-подставка-для-сигар-les-fines-lames-black-accessories",brand:"Les Fines Lames",name:"Подставка для сигар Les Fines Lames Black",format:"для сигар Les Fines Lames Black",category:"accessories",accessorySubcategory:"Подставки",origin:"Франция",price:{amount:675e3,currency:"UZS"},inStock:!1,images:["https://static.tildacdn.com/stor6632-3739-4132-b234-666436346363/35200637.jpg"],description:"",specs:{}},{id:"les-fines-lames-нож-сигарный-les-fines-lames-acacia-burl-accessories",brand:"Les Fines Lames",name:"Нож сигарный Les Fines Lames Acacia Burl",format:"сигарный Les Fines Lames Acacia Burl",category:"accessories",accessorySubcategory:"Гильотины/каттеры/ножи",origin:"Франция",price:{amount:239e4,currency:"UZS"},inStock:!0,images:["https://static.tildacdn.com/stor6136-3032-4633-b765-653562653861/31953583.jpg"],description:"",specs:{}},{id:"les-fines-lames-нож-сигарный-les-fines-lames-anodized-aluminum---yellow-accessor",brand:"Les Fines Lames",name:"Нож сигарный Les Fines Lames Anodized aluminum - Yellow",format:"сигарный Les Fines Lames Anodized aluminum - Yellow",category:"accessories",accessorySubcategory:"Гильотины/каттеры/ножи",origin:"Франция",price:{amount:259e4,currency:"UZS"},inStock:!0,images:["https://static.tildacdn.com/stor3932-6565-4933-a461-353231376631/38797272.jpg"],description:"",specs:{}},{id:"les-fines-lames-нож-сигарный-les-fines-lames-barrel-bourbon-accessories",brand:"Les Fines Lames",name:"Нож сигарный Les Fines Lames Barrel Bourbon",format:"сигарный Les Fines Lames Barrel Bourbon",category:"accessories",accessorySubcategory:"Гильотины/каттеры/ножи",origin:"Франция",price:{amount:259e4,currency:"UZS"},inStock:!0,images:["https://static.tildacdn.com/stor3766-3164-4532-b232-626235346134/41145341.jpg","https://static.tildacdn.com/stor6130-3163-4234-b636-623036666162/35022962.jpg"],description:"",specs:{}},{id:"les-fines-lames-нож-сигарный-les-fines-lames-barrel-rum-accessories",brand:"Les Fines Lames",name:"Нож сигарный Les Fines Lames Barrel Rum",format:"сигарный Les Fines Lames Barrel Rum",category:"accessories",accessorySubcategory:"Гильотины/каттеры/ножи",origin:"Франция",price:{amount:259e4,currency:"UZS"},inStock:!0,images:["https://static.tildacdn.com/stor3631-3237-4537-b332-653462373335/31811433.jpg"],description:"",specs:{}},{id:"les-fines-lames-нож-сигарный-les-fines-lames-gunstock-walnut-burl-accessories",brand:"Les Fines Lames",name:"Нож сигарный Les Fines Lames Gunstock Walnut Burl",format:"сигарный Les Fines Lames Gunstock Walnut Burl",category:"accessories",accessorySubcategory:"Гильотины/каттеры/ножи",origin:"Франция",price:{amount:239e4,currency:"UZS"},inStock:!0,images:["https://static.tildacdn.com/stor3536-6438-4264-b139-663133383139/62647096.jpg"],description:"",specs:{}},{id:"les-fines-lames-нож-сигарный-les-fines-lames-calavera-accessories",brand:"Les Fines Lames",name:"Нож сигарный Les Fines Lames Calavera",format:"сигарный Les Fines Lames Calavera",category:"accessories",accessorySubcategory:"Гильотины/каттеры/ножи",origin:"Франция",price:{amount:259e4,currency:"UZS"},inStock:!0,images:["https://static.tildacdn.com/stor6431-6330-4562-a230-386636643135/47248153.jpg","https://static.tildacdn.com/stor3862-6138-4439-a261-356330343237/26279687.jpg"],description:"",specs:{}},{id:"les-fines-lames-нож-сигарный-les-fines-lames-flag-cuba-dark-wood-accessories",brand:"Les Fines Lames",name:"Нож сигарный Les Fines Lames Flag Cuba Dark wood",format:"сигарный Les Fines Lames Flag Cuba Dark wood",category:"accessories",accessorySubcategory:"Гильотины/каттеры/ножи",origin:"Франция",price:{amount:259e4,currency:"UZS"},inStock:!0,images:["https://static.tildacdn.com/stor3364-6137-4436-a264-633037663833/40026541.jpg"],description:"",specs:{}},{id:"les-fines-lames-нож-сигарный-les-fines-lames-compass-cuba-olive-accessories",brand:"Les Fines Lames",name:"Нож сигарный Les Fines Lames Compass Cuba Olive",format:"сигарный Les Fines Lames Compass Cuba Olive",category:"accessories",accessorySubcategory:"Гильотины/каттеры/ножи",origin:"Франция",price:{amount:259e4,currency:"UZS"},inStock:!0,images:["https://static.tildacdn.com/stor3865-3063-4138-b238-346634653464/38659218.jpg"],description:"",specs:{}},{id:"les-fines-lames-нож-сигарный-les-fines-lames-shu-crane-accessories",brand:"Les Fines Lames",name:"Нож сигарный Les Fines Lames Shu Crane",format:"сигарный Les Fines Lames Shu Crane",category:"accessories",accessorySubcategory:"Гильотины/каттеры/ножи",origin:"Франция",price:{amount:259e4,currency:"UZS"},inStock:!0,images:["https://static.tildacdn.com/stor3435-3039-4436-a666-646532663962/39280753.jpg","https://static.tildacdn.com/stor3234-3031-4666-a336-633261633462/59445928.jpg"],description:"",specs:{}},{id:"les-fines-lames-нож-сигарный-les-fines-lames-havana-streets-habana-vieja-accesso",brand:"Les Fines Lames",name:"Нож сигарный Les Fines Lames Havana Streets Habana Vieja",format:"сигарный Les Fines Lames Havana Streets Habana Vieja",category:"accessories",accessorySubcategory:"Гильотины/каттеры/ножи",origin:"Франция",price:{amount:269e4,currency:"UZS"},inStock:!0,images:["https://static.tildacdn.com/stor3530-6339-4665-a132-616533663433/94553923.jpg"],description:"",specs:{}},{id:"les-fines-lames-нож-сигарный-les-fines-lames-havana-havana-streets-hacia-el-male",brand:"Les Fines Lames",name:"Нож сигарный Les Fines Lames Havana Havana Streets Hacia El Malecon",format:"сигарный Les Fines Lames Havana Havana Streets Hacia El Malecon",category:"accessories",accessorySubcategory:"Гильотины/каттеры/ножи",origin:"Франция",price:{amount:269e4,currency:"UZS"},inStock:!0,images:["https://static.tildacdn.com/stor6438-3865-4363-b039-356333363332/54378348.jpg"],description:"",specs:{}},{id:"les-fines-lames-нож-сигарный-les-fines-lames-carbon-fiber-accessories",brand:"Les Fines Lames",name:"Нож сигарный Les Fines Lames Carbon Fiber",format:"сигарный Les Fines Lames Carbon Fiber",category:"accessories",accessorySubcategory:"Гильотины/каттеры/ножи",origin:"Франция",price:{amount:299e4,currency:"UZS"},inStock:!0,images:["https://static.tildacdn.com/stor3864-3064-4061-b362-626330633164/98757324.jpg","https://static.tildacdn.com/stor6636-6563-4638-a265-653665633762/52831491.jpg"],description:"",specs:{}},{id:"les-fines-lames-гильотина-каттер-les-fines-lames-tag-t135---black-accessories",brand:"Les Fines Lames",name:"Гильотина (каттер) Les Fines Lames TAG T135 - Black",format:"(каттер) Les Fines Lames TAG T135 - Black",category:"accessories",accessorySubcategory:"Гильотины/каттеры/ножи",origin:"Франция",price:{amount:139e4,currency:"UZS"},inStock:!0,images:["https://static.tildacdn.com/stor3439-3863-4537-b231-373333333339/55267675.jpg"],description:"",specs:{}},{id:"les-fines-lames-гильотина-каттер-les-fines-lames-tag-t135---blue-accessories",brand:"Les Fines Lames",name:"Гильотина (каттер) Les Fines Lames TAG T135 - Blue",format:"(каттер) Les Fines Lames TAG T135 - Blue",category:"accessories",accessorySubcategory:"Гильотины/каттеры/ножи",origin:"Франция",price:{amount:139e4,currency:"UZS"},inStock:!0,images:["https://static.tildacdn.com/stor3637-3839-4662-a161-313737623030/14030146.jpg"],description:"",specs:{}},{id:"les-fines-lames-гильотина-каттер-les-fines-lames-tag-t135---champagne-accessor",brand:"Les Fines Lames",name:"Гильотина (каттер) Les Fines Lames TAG T135 - Champagne",format:"(каттер) Les Fines Lames TAG T135 - Champagne",category:"accessories",accessorySubcategory:"Гильотины/каттеры/ножи",origin:"Франция",price:{amount:139e4,currency:"UZS"},inStock:!0,images:["https://static.tildacdn.com/stor3235-3233-4532-b430-366664616537/72408820.jpg"],description:"",specs:{}},{id:"les-fines-lames-гильотина-каттер-les-fines-lames-tag-t135---od-green-accessori",brand:"Les Fines Lames",name:"Гильотина (каттер) Les Fines Lames TAG T135 - OD Green",format:"(каттер) Les Fines Lames TAG T135 - OD Green",category:"accessories",accessorySubcategory:"Гильотины/каттеры/ножи",origin:"Франция",price:{amount:139e4,currency:"UZS"},inStock:!0,images:["https://static.tildacdn.com/stor6436-3635-4161-b635-326430346134/84865252.jpg"],description:"",specs:{}},{id:"les-fines-lames-гильотина-каттер-les-fines-lames-tag-t135---red-accessories",brand:"Les Fines Lames",name:"Гильотина (каттер) Les Fines Lames TAG T135 - Red",format:"(каттер) Les Fines Lames TAG T135 - Red",category:"accessories",accessorySubcategory:"Гильотины/каттеры/ножи",origin:"Франция",price:{amount:139e4,currency:"UZS"},inStock:!0,images:["https://static.tildacdn.com/stor6235-3732-4130-a663-396336343864/43474982.jpg"],description:"",specs:{}},{id:"les-fines-lames-браслет---пробойник-les-fines-lames-punch-bracelet---cola-access",brand:"Les Fines Lames",name:"Браслет - пробойник Les Fines Lames Punch Bracelet - Cola",format:"- пробойник Les Fines Lames Punch Bracelet - Cola",category:"accessories",accessorySubcategory:"Пробойники",origin:"Франция",price:{amount:149e4,currency:"UZS"},inStock:!0,images:["https://static.tildacdn.com/stor3863-3662-4231-b333-323639313936/36084007.jpg"],description:"",specs:{}},{id:"les-fines-lames-браслет---пробойник-les-fines-lames-punch-bracelet---mercurio-go",brand:"Les Fines Lames",name:"Браслет - пробойник Les Fines Lames Punch Bracelet - Mercurio Gold Ring",format:"- пробойник Les Fines Lames Punch Bracelet - Mercurio Gold Ring",category:"accessories",accessorySubcategory:"Пробойники",origin:"Франция",price:{amount:299e4,currency:"UZS"},inStock:!0,images:["https://static.tildacdn.com/stor3134-3037-4932-b261-633237383134/49125051.png"],description:"",specs:{}},{id:"les-fines-lames-браслет---пробойник-les-fines-lames-punch-bracelet---mercurio-go-2",brand:"Les Fines Lames",name:"Браслет - пробойник Les Fines Lames Punch Bracelet - Mercurio Gold Ring",format:"- пробойник Les Fines Lames Punch Bracelet - Mercurio Gold Ring",category:"accessories",accessorySubcategory:"Пробойники",origin:"Франция",price:{amount:149e4,currency:"UZS"},inStock:!0,images:["https://static.tildacdn.com/stor6365-3838-4235-b464-356264346637/98592512.png"],description:"",specs:{}},{id:"les-fines-lames-браслет---пробойник-les-fines-lames-punch-bracelet---noche-gold",brand:"Les Fines Lames",name:"Браслет - пробойник Les Fines Lames Punch Bracelet - Noche Gold Ring",format:"- пробойник Les Fines Lames Punch Bracelet - Noche Gold Ring",category:"accessories",accessorySubcategory:"Пробойники",origin:"Франция",price:{amount:299e4,currency:"UZS"},inStock:!0,images:["https://static.tildacdn.com/stor6537-3564-4761-b436-346261326562/80589416.png"],description:"",specs:{}},{id:"les-fines-lames-браслет---пробойник-les-fines-lames-punch-bracelet---onyx-matte-",brand:"Les Fines Lames",name:"Браслет - пробойник Les Fines Lames Punch Bracelet - Onyx Matte",format:"- пробойник Les Fines Lames Punch Bracelet - Onyx Matte",category:"accessories",accessorySubcategory:"Пробойники",origin:"Франция",price:{amount:119e4,currency:"UZS"},inStock:!0,images:["https://static.tildacdn.com/stor3761-6561-4332-b530-613462663234/53679268.png"],description:"",specs:{}},{id:"les-fines-lames-браслет---пробойник-les-fines-lames-punch-bracelet---volcano-sku",brand:"Les Fines Lames",name:"Браслет - пробойник Les Fines Lames Punch Bracelet - Volcano Skull",format:"- пробойник Les Fines Lames Punch Bracelet - Volcano Skull",category:"accessories",accessorySubcategory:"Пробойники",origin:"Франция",price:{amount:149e4,currency:"UZS"},inStock:!0,images:["https://static.tildacdn.com/stor3031-6631-4930-b963-656663356166/24316279.png"],description:"",specs:{}},{id:"les-fines-lames-браслет---пробойник-les-fines-lames-punch-bracelet---connoisseur",brand:"Les Fines Lames",name:"Браслет - пробойник Les Fines Lames Punch Bracelet - Connoisseur",format:"- пробойник Les Fines Lames Punch Bracelet - Connoisseur",category:"accessories",accessorySubcategory:"Пробойники",origin:"Франция",price:{amount:119e4,currency:"UZS"},inStock:!0,images:["https://static.tildacdn.com/stor6662-3362-4466-b362-376339393635/40882227.png"],description:"",specs:{}},{id:"les-fines-lames-браслет---пробойник-les-fines-lames-punch-bracelet---lava-access",brand:"Les Fines Lames",name:"Браслет - пробойник Les Fines Lames Punch Bracelet - Lava",format:"- пробойник Les Fines Lames Punch Bracelet - Lava",category:"accessories",accessorySubcategory:"Пробойники",origin:"Франция",price:{amount:119e4,currency:"UZS"},inStock:!0,images:["https://static.tildacdn.com/stor3766-3332-4538-b134-393539623634/70485302.png"],description:"",specs:{}},{id:"les-fines-lames-футляр-для-сигар-les-fines-lames-cigar-case---duo-blue-pebble-le",brand:"Les Fines Lames",name:"Футляр для сигар Les Fines Lames CIGAR CASE - DUO Blue Pebble Leather",format:"для сигар Les Fines Lames CIGAR CASE - DUO Blue Pebble Leather",category:"accessories",accessorySubcategory:"Футляры и чехлы",origin:"Франция",price:{amount:189e4,currency:"UZS"},inStock:!0,images:["https://static.tildacdn.com/stor3132-3530-4963-a334-653036396538/77361253.jpg"],description:"",specs:{}},{id:"les-fines-lames-футляр-для-сигар-les-fines-lames-cigar-case---duo-brown-pebble-l",brand:"Les Fines Lames",name:"Футляр для сигар Les Fines Lames CIGAR CASE - DUO Brown Pebble Leather",format:"для сигар Les Fines Lames CIGAR CASE - DUO Brown Pebble Leather",category:"accessories",accessorySubcategory:"Футляры и чехлы",origin:"Франция",price:{amount:189e4,currency:"UZS"},inStock:!0,images:["https://static.tildacdn.com/stor3464-6634-4737-b633-346636373830/60231450.jpg"],description:"",specs:{}},{id:"les-fines-lames-футляр-для-сигар-les-fines-lames-cigar-case---duo-yellow-pebble",brand:"Les Fines Lames",name:"Футляр для сигар Les Fines Lames CIGAR CASE - DUO Yellow Pebble Leather",format:"для сигар Les Fines Lames CIGAR CASE - DUO Yellow Pebble Leather",category:"accessories",accessorySubcategory:"Футляры и чехлы",origin:"Франция",price:{amount:189e4,currency:"UZS"},inStock:!0,images:["https://static.tildacdn.com/stor3830-3231-4032-b131-613634646265/76213237.jpg"],description:"",specs:{}},{id:"les-fines-lames-футляр-для-сигар-les-fines-lames-cigar-case---trio-blue-pebble-l",brand:"Les Fines Lames",name:"Футляр для сигар Les Fines Lames CIGAR CASE - TRIO Blue Pebble Leather",format:"для сигар Les Fines Lames CIGAR CASE - TRIO Blue Pebble Leather",category:"accessories",accessorySubcategory:"Футляры и чехлы",origin:"Франция",price:{amount:219e4,currency:"UZS"},inStock:!0,images:["https://static.tildacdn.com/stor3632-3538-4530-b539-636234383164/14058287.jpg"],description:"",specs:{}},{id:"les-fines-lames-футляр-для-сигар-les-fines-lames-cigar-case---trio-yellow-pebble",brand:"Les Fines Lames",name:"Футляр для сигар Les Fines Lames CIGAR CASE - TRIO Yellow Pebble Leather",format:"для сигар Les Fines Lames CIGAR CASE - TRIO Yellow Pebble Leather",category:"accessories",accessorySubcategory:"Футляры и чехлы",origin:"Франция",price:{amount:219e4,currency:"UZS"},inStock:!0,images:["https://static.tildacdn.com/stor3435-3731-4663-b339-623161353863/43534259.jpg"],description:"",specs:{}},{id:"cohiba-cohiba-55-aniversario-2021-edicion-limitada-cigars",brand:"Cohiba",name:"Cohiba 55 Aniversario 2021 Edicion Limitada",format:"55 Aniversario 2021 Edicion Limitada",category:"cigars",origin:"Куба",price:null,inStock:!1,images:["https://static.tildacdn.com/stor3766-6366-4133-b538-653064313637/70307015.jpg"],description:"",specs:{}},{id:"cohiba-cohiba-magicos-maduro-box-of-10-cigars",brand:"Cohiba",name:"Cohiba Magicos Maduro (Box Of 10)",format:"Magicos Maduro (Box Of 10)",category:"cigars",origin:"Куба",price:{amount:13e6,currency:"UZS"},inStock:!1,images:["https://static.tildacdn.com/stor3734-6633-4431-a266-303962376638/44308873.jpg"],description:"",specs:{}},{id:"cuaba-cuaba-tradicionales-cigars-2",brand:"Cuaba",name:"Cuaba Tradicionales",format:"Tradicionales",category:"cigars",origin:"Куба",price:{amount:6e6,currency:"UZS"},inStock:!1,images:["https://static.tildacdn.com/stor3831-3063-4166-b132-323861626239/30741817.jpg"],description:"",specs:{}},{id:"cuaba-cuaba-exclusivos-cigars-2",brand:"Cuaba",name:"Cuaba Exclusivos",format:"Exclusivos",category:"cigars",origin:"Куба",price:{amount:825e4,currency:"UZS"},inStock:!0,images:["https://static.tildacdn.com/stor3266-6661-4265-a431-313835363633/57086162.jpg"],description:"",specs:{}},{id:"hoyo-de-monterrey-hoyo-de-monterrey-epicure-no-1-box-of-25-cigars",brand:"Hoyo de Monterrey",name:"Hoyo de Monterrey Epicure № 1 (Box of 25)",format:"Epicure № 1 (Box of 25)",category:"cigars",origin:"Куба",price:{amount:1025e4,currency:"UZS"},priceNote:"На сайте 2 варианта(ов) цены — уточнить",inStock:!0,images:["https://static.tildacdn.com/stor3364-6437-4464-b833-663364363966/63816884.jpg"],description:"",specs:{}},{id:"hoyo-de-monterrey-hoyo-de-monterrey-epicure-no-2-box-of-25-cigars",brand:"Hoyo de Monterrey",name:"Hoyo de Monterrey Epicure № 2 (Box of 25)",format:"Epicure № 2 (Box of 25)",category:"cigars",origin:"Куба",price:{amount:1e7,currency:"UZS"},priceNote:"На сайте 2 варианта(ов) цены — уточнить",inStock:!0,images:["https://static.tildacdn.com/stor3030-3361-4765-a535-316535356361/51462589.jpg"],description:"",specs:{}},{id:"lubinski-спица-сигарная-lubinski-aficionado-tool-basic-red-accessories",brand:"LUBINSKI",name:"Спица сигарная LUBINSKI Aficionado Tool Basic Red",format:"сигарная LUBINSKI Aficionado Tool Basic Red",category:"accessories",accessorySubcategory:"Пробойники",origin:"Испания",price:{amount:699999,currency:"UZS"},inStock:!1,images:["https://static.tildacdn.com/stor3066-6339-4661-a631-326631633534/43d7dbcb857e9cf51bd498fc1d563687.jpg"],description:"",specs:{}},{id:"lubinski-спица-сигарная-lubinski-aficionado-tool-light-black-accessories",brand:"LUBINSKI",name:"Спица сигарная LUBINSKI Aficionado Tool Light Black",format:"сигарная LUBINSKI Aficionado Tool Light Black",category:"accessories",accessorySubcategory:"Пробойники",origin:"Испания",price:{amount:649999,currency:"UZS"},inStock:!1,images:["https://static.tildacdn.com/stor6532-6363-4265-b837-316232646635/1d65002030f78a9f78be0f93a5dbc4f6.jpg"],description:"",specs:{}},{id:"lubinski-спица-сигарная-lubinski-aficionado-tool-light-grey-accessories",brand:"LUBINSKI",name:"Спица сигарная LUBINSKI Aficionado Tool Light Grey",format:"сигарная LUBINSKI Aficionado Tool Light Grey",category:"accessories",accessorySubcategory:"Пробойники",origin:"Испания",price:{amount:649999,currency:"UZS"},inStock:!1,images:["https://static.tildacdn.com/stor6335-3166-4739-a635-663139313763/e70fb2b2c4c8ebc9db397287294871fb.jpg"],description:"",specs:{}},{id:"lubinski-подставка-для-сигар-lubinski-x---gold-2-accessories",brand:"LUBINSKI",name:"Подставка для сигар LUBINSKI X - Gold 2",format:"для сигар LUBINSKI X - Gold 2",category:"accessories",accessorySubcategory:"Подставки",origin:"Испания",price:{amount:199999,currency:"UZS"},inStock:!1,images:["https://static.tildacdn.com/stor6238-3264-4631-b566-363832353933/2ef6717a5063501a91adeda3c49e2d4c.jpg"],description:"",specs:{}},{id:"lubinski-подставка-для-сигар-lubinski-double-x-gold-accessories",brand:"LUBINSKI",name:"Подставка для сигар LUBINSKI Double X Gold",format:"для сигар LUBINSKI Double X Gold",category:"accessories",accessorySubcategory:"Подставки",origin:"Испания",price:{amount:299e3,currency:"UZS"},inStock:!1,images:["https://static.tildacdn.com/stor3639-6564-4637-a264-386434336632/ddff2752d2ac1adc8b9fcdad30589d4f.jpg"],description:"",specs:{}},{id:"lubinski-подставка-для-сигар-lubinski-u-black-accessories",brand:"LUBINSKI",name:"Подставка для сигар Lubinski U-black",format:"для сигар Lubinski U-black",category:"accessories",accessorySubcategory:"Подставки",origin:"Испания",price:{amount:149e3,currency:"UZS"},inStock:!1,images:["https://static.tildacdn.com/stor3733-3030-4636-b562-333033326566/d99c6d7ffee989d990b1b293e2e34f3a.jpg"],description:"",specs:{}},{id:"lubinski-подставка-для-сигар-lubinski-x-gold-accessories",brand:"LUBINSKI",name:"Подставка для сигар Lubinski X-Gold",format:"для сигар Lubinski X-Gold",category:"accessories",accessorySubcategory:"Подставки",origin:"Испания",price:{amount:199999,currency:"UZS"},inStock:!1,images:["https://static.tildacdn.com/stor6330-6335-4536-b164-326438343165/e04c8fd8d9639cac3bd87ece12db822d.jpg"],description:"",specs:{}},{id:"lubinski-подставка-для-сигар-lubinski-x-carbon-accessories",brand:"LUBINSKI",name:"Подставка для сигар LUBINSKI X-Carbon",format:"для сигар LUBINSKI X-Carbon",category:"accessories",accessorySubcategory:"Подставки",origin:"Испания",price:{amount:199999,currency:"UZS"},inStock:!1,images:["https://static.tildacdn.com/stor6633-3862-4537-b330-303631636364/5c52d557d3a520e180f1851308af94cf.jpg"],description:"",specs:{}},{id:"lubinski-пробойник-lubinski-4001-bronze-accessories",brand:"LUBINSKI",name:"Пробойник LUBINSKI 4001-Bronze",format:"4001-Bronze",category:"accessories",accessorySubcategory:"Пробойники",origin:"Испания",price:{amount:799e3,currency:"UZS"},inStock:!0,images:["https://static.tildacdn.com/stor3063-3162-4038-a662-356537306666/36d035e3f3839e683c77512afeb06d22.jpg"],description:"",specs:{}},{id:"lubinski-пробойник-lubinski-4001-black-accessories",brand:"LUBINSKI",name:"Пробойник LUBINSKI 4001-Black",format:"4001-Black",category:"accessories",accessorySubcategory:"Пробойники",origin:"Испания",price:{amount:799e3,currency:"UZS"},inStock:!0,images:["https://static.tildacdn.com/stor6530-6230-4139-b436-323361313166/aae5c432ea0722b4655eaa1c200e1c54.jpg"],description:"",specs:{}},{id:"lubinski-пепельница-сигарная-lubinski-cuban-life-white-accessories",brand:"LUBINSKI",name:"Пепельница сигарная LUBINSKI Cuban Life White",format:"сигарная LUBINSKI Cuban Life White",category:"accessories",accessorySubcategory:"Пепельницы",origin:"Испания",price:{amount:449e3,currency:"UZS"},inStock:!1,images:["https://static.tildacdn.com/stor3838-3138-4964-a433-356135613764/5e9a6e42e8967f3f649f9557e29cd347.jpg"],description:"",specs:{}},{id:"lubinski-пепельница-сигарная-lubinski-cuban-life-black-accessories",brand:"LUBINSKI",name:"Пепельница сигарная LUBINSKI Cuban Life Black",format:"сигарная LUBINSKI Cuban Life Black",category:"accessories",accessorySubcategory:"Пепельницы",origin:"Испания",price:{amount:449e3,currency:"UZS"},inStock:!1,images:["https://static.tildacdn.com/stor3061-6666-4535-a461-393732323831/8f8b40f95231b1e779637dc093bf8853.jpg"],description:"",specs:{}},{id:"lubinski-пепельница-сигарная-lubinski-cuban-life-yellow-accessories",brand:"LUBINSKI",name:"Пепельница сигарная LUBINSKI Cuban Life Yellow",format:"сигарная LUBINSKI Cuban Life Yellow",category:"accessories",accessorySubcategory:"Пепельницы",origin:"Испания",price:{amount:449e3,currency:"UZS"},inStock:!1,images:["https://static.tildacdn.com/stor6133-3665-4164-b663-346263333164/59570f71acb465d369145e0a7227d6cf.jpg"],description:"",specs:{}},{id:"lubinski-пепельница-сигарная-lubinski-black-hat-accessories",brand:"LUBINSKI",name:"Пепельница сигарная LUBINSKI Black Hat",format:"сигарная LUBINSKI Black Hat",category:"accessories",accessorySubcategory:"Пепельницы",origin:"Испания",price:{amount:199e3,currency:"UZS"},inStock:!1,images:["https://static.tildacdn.com/stor3735-6233-4261-a661-643531346331/0a11ea42382312da5d02693d31fe0b37.jpg"],description:"",specs:{}},{id:"lubinski-пепельница-сигарная-lubinski-well-green-accessories",brand:"LUBINSKI",name:"Пепельница сигарная LUBINSKI Well Green",format:"сигарная LUBINSKI Well Green",category:"accessories",accessorySubcategory:"Пепельницы",origin:"Испания",price:{amount:249e3,currency:"UZS"},inStock:!0,images:["https://static.tildacdn.com/stor3338-3865-4938-a264-303633336236/6152d328dca5e30f91b44b97eef18d1a.jpg"],description:"",specs:{}},{id:"lubinski-пепельница-сигарная-lubinski-well-black-accessories",brand:"LUBINSKI",name:"Пепельница сигарная LUBINSKI Well Black",format:"сигарная LUBINSKI Well Black",category:"accessories",accessorySubcategory:"Пепельницы",origin:"Испания",price:{amount:249e3,currency:"UZS"},inStock:!0,images:["https://static.tildacdn.com/stor3765-3433-4065-b733-383530663531/9d1fecbccce305b1f4d005924ab4f5e7.jpg"],description:"",specs:{}},{id:"lubinski-пепельница-сигарная-lubinski-well-gold-accessories",brand:"LUBINSKI",name:"Пепельница сигарная LUBINSKI Well Gold",format:"сигарная LUBINSKI Well Gold",category:"accessories",accessorySubcategory:"Пепельницы",origin:"Испания",price:{amount:249e3,currency:"UZS"},inStock:!0,images:["https://static.tildacdn.com/stor3631-3139-4438-b032-313566643839/b4b0a10c0df7bd7226829e6e007c3d70.jpg"],description:"",specs:{}},{id:"lubinski-пепельница-сигарная-lubinski-vip-grey-accessories",brand:"LUBINSKI",name:"Пепельница сигарная LUBINSKI VIP Grey",format:"сигарная LUBINSKI VIP Grey",category:"accessories",accessorySubcategory:"Пепельницы",origin:"Испания",price:{amount:1949e3,currency:"UZS"},inStock:!1,images:["https://static.tildacdn.com/stor3465-3630-4138-b066-373031333031/634d31b52dbacc0e2ab4eb8d2ed1f2ed.jpg"],description:"",specs:{}},{id:"lubinski-пепельница-сигарная-lubinski-vip-green-accessories",brand:"LUBINSKI",name:"Пепельница сигарная LUBINSKI VIP Green",format:"сигарная LUBINSKI VIP Green",category:"accessories",accessorySubcategory:"Пепельницы",origin:"Испания",price:{amount:1949e3,currency:"UZS"},inStock:!1,images:["https://static.tildacdn.com/stor3764-3032-4131-a535-633332633030/18a4ae94f5902325d6f19a74b00a75a8.jpg"],description:"",specs:{}},{id:"lubinski-пепельница-сигарная-lubinski-cross-green-accessories",brand:"LUBINSKI",name:"Пепельница сигарная Lubinski Cross Green",format:"сигарная Lubinski Cross Green",category:"accessories",accessorySubcategory:"Пепельницы",origin:"Испания",price:{amount:449e3,currency:"UZS"},inStock:!1,images:["https://static.tildacdn.com/stor3862-6538-4363-b830-643635323763/c2592396cba8585d729f3a1bc8714031.jpg"],description:"",specs:{}},{id:"lubinski-пепельница-сигарная-lubinski-cross-yellow-accessories",brand:"LUBINSKI",name:"Пепельница сигарная Lubinski Cross Yellow",format:"сигарная Lubinski Cross Yellow",category:"accessories",accessorySubcategory:"Пепельницы",origin:"Испания",price:{amount:449e3,currency:"UZS"},inStock:!1,images:["https://static.tildacdn.com/stor3738-6134-4663-b437-643861313763/71f1f0693c130e7d54aa6f81124799d1.jpg"],description:"",specs:{}},{id:"lubinski-пепельница-сигарная-lubinski-cross-black-accessories",brand:"LUBINSKI",name:"Пепельница сигарная Lubinski Cross Black",format:"сигарная Lubinski Cross Black",category:"accessories",accessorySubcategory:"Пепельницы",origin:"Испания",price:{amount:449e3,currency:"UZS"},inStock:!1,images:["https://static.tildacdn.com/stor3362-3231-4234-a537-636239653761/68e1558fc18cb873b6571a1108f90ab5.jpg"],description:"",specs:{}},{id:"lubinski-пепельница-сигарная-lubinski-cross-white-accessories",brand:"LUBINSKI",name:"Пепельница сигарная Lubinski Cross White",format:"сигарная Lubinski Cross White",category:"accessories",accessorySubcategory:"Пепельницы",origin:"Испания",price:{amount:449e3,currency:"UZS"},inStock:!0,images:["https://static.tildacdn.com/stor3464-6564-4237-b065-643965313831/7264d74afda7f9a3d2fa015a1bc4fc5a.jpg"],description:"",specs:{}},{id:"lubinski-пепельница-сигарная-lubinski-solo-black-accessories",brand:"LUBINSKI",name:"Пепельница сигарная LUBINSKI Solo Black",format:"сигарная LUBINSKI Solo Black",category:"accessories",accessorySubcategory:"Пепельницы",origin:"Испания",price:{amount:199e3,currency:"UZS"},inStock:!1,images:["https://static.tildacdn.com/stor3833-6637-4165-a334-373832656534/0758a6ab6ed0b0fd73291b8bba31b26c.jpg"],description:"",specs:{}},{id:"lubinski-пепельница-сигарная-lubinski-сa-001-white-accessories",brand:"LUBINSKI",name:"Пепельница сигарная LUBINSKI СA-001 White",format:"сигарная LUBINSKI СA-001 White",category:"accessories",accessorySubcategory:"Пепельницы",origin:"Испания",price:{amount:249e3,currency:"UZS"},inStock:!1,images:["https://static.tildacdn.com/stor6235-3834-4231-b536-623464353239/bd124e83290202a31d4a664bf1d69cb5.jpg"],description:"",specs:{}},{id:"lubinski-пепельница-сигарная-lubinski-ca-001-black-accessories",brand:"LUBINSKI",name:"Пепельница сигарная LUBINSKI CA-001 Black",format:"сигарная LUBINSKI CA-001 Black",category:"accessories",accessorySubcategory:"Пепельницы",origin:"Испания",price:{amount:249e3,currency:"UZS"},inStock:!1,images:["https://static.tildacdn.com/stor6531-6334-4333-a533-356435316337/5c7d365251161d23e6c67e74889bc181.jpg"],description:"",specs:{}},{id:"lubinski-пепельница-сигарная-lubinski-shield-black-accessories",brand:"LUBINSKI",name:"Пепельница сигарная LUBINSKI Shield Black",format:"сигарная LUBINSKI Shield Black",category:"accessories",accessorySubcategory:"Пепельницы",origin:"Испания",price:{amount:449e3,currency:"UZS"},inStock:!0,images:["https://static.tildacdn.com/stor3064-6438-4066-b664-663639323661/e741cdb2da7214a79b500c64409cddc1.jpg"],description:"",specs:{}},{id:"lubinski-пробойник-lubinski-4009-silver-accessories",brand:"LUBINSKI",name:"Пробойник LUBINSKI 4009-Silver",format:"4009-Silver",category:"accessories",accessorySubcategory:"Пробойники",origin:"Испания",price:{amount:449e3,currency:"UZS"},inStock:!0,images:["https://static.tildacdn.com/stor3238-3536-4130-a434-653734306462/858c7bc0be776fcd3138933ea4857bbf.jpg"],description:"",specs:{}},{id:"lubinski-пробойник-lubinski-4007-gold-accessories",brand:"LUBINSKI",name:"Пробойник LUBINSKI 4007-Gold",format:"4007-Gold",category:"accessories",accessorySubcategory:"Пробойники",origin:"Испания",price:{amount:499e3,currency:"UZS"},inStock:!0,images:["https://static.tildacdn.com/stor3130-3965-4833-a264-653038633436/cf1800f05842ae3ac4dedd16e87f5ffe.jpg"],description:"",specs:{}},{id:"lubinski-пробойник-lubinski-4007-green-accessories",brand:"LUBINSKI",name:"Пробойник LUBINSKI 4007-Green",format:"4007-Green",category:"accessories",accessorySubcategory:"Пробойники",origin:"Испания",price:{amount:499e3,currency:"UZS"},inStock:!0,images:["https://static.tildacdn.com/stor3938-3431-4364-b333-326230326535/2158b4fc7707f54cc98a4ee9dae189b6.jpg"],description:"",specs:{}},{id:"lubinski-пробойник-lubinski-4007-silver-accessories",brand:"LUBINSKI",name:"Пробойник LUBINSKI 4007-Silver",format:"4007-Silver",category:"accessories",accessorySubcategory:"Пробойники",origin:"Испания",price:{amount:499e3,currency:"UZS"},inStock:!0,images:["https://static.tildacdn.com/stor6233-3665-4363-b238-646366653166/1b8be41a69b0a495c235f9e03992558f.jpg"],description:"",specs:{}},{id:"lubinski-гильотина-lubinski-unicut-black-accessories",brand:"LUBINSKI",name:"Гильотина LUBINSKI UniCut Black",format:"UniCut Black",category:"accessories",accessorySubcategory:"Гильотины/каттеры/ножи",origin:"Испания",price:{amount:1999e3,currency:"UZS"},inStock:!1,images:["https://static.tildacdn.com/stor6464-6665-4638-b262-633036643463/c89fa9ed447c3203ab65afcb1d66aae0.jpg"],description:"",specs:{}},{id:"lubinski-гильотина-lubinski-double-cut-gold-accessories",brand:"LUBINSKI",name:"Гильотина LUBINSKI Double Cut Gold",format:"Double Cut Gold",category:"accessories",accessorySubcategory:"Гильотины/каттеры/ножи",origin:"Испания",price:{amount:99e4,currency:"UZS"},inStock:!1,images:["https://static.tildacdn.com/stor3632-3165-4734-b863-316531376565/14cf7211129b4478efaf7323d3f39c45.jpg"],description:"",specs:{}},{id:"lubinski-гильотина-lubinski-double-cut-cuban-accessories",brand:"LUBINSKI",name:"Гильотина LUBINSKI Double Cut Cuban",format:"Double Cut Cuban",category:"accessories",accessorySubcategory:"Гильотины/каттеры/ножи",origin:"Испания",price:{amount:99e4,currency:"UZS"},inStock:!1,images:["https://static.tildacdn.com/stor6335-3861-4435-b738-323936653337/ce2fe8f36fb668414ffa089bb25aaa40.jpg"],description:"",specs:{}},{id:"lubinski-гильотина-lubinski-elegant-cut-steel-accessories",brand:"LUBINSKI",name:"Гильотина LUBINSKI Elegant Cut Steel",format:"Elegant Cut Steel",category:"accessories",accessorySubcategory:"Гильотины/каттеры/ножи",origin:"Испания",price:{amount:149e3,currency:"UZS"},inStock:!0,images:["https://static.tildacdn.com/stor3535-3461-4038-b837-643663333962/4405186d150428265d43e8c4422f35ee.jpg"],description:"",specs:{}},{id:"lubinski-гильотина-lubinski-ct-011-gold-accessories",brand:"LUBINSKI",name:"Гильотина LUBINSKI CT-011 Gold",format:"CT-011 Gold",category:"accessories",accessorySubcategory:"Гильотины/каттеры/ножи",origin:"Испания",price:{amount:499e3,currency:"UZS"},inStock:!0,images:["https://static.tildacdn.com/stor6161-6336-4531-a439-653333366463/ff67bcbb64eaba8d358377ba4821d479.jpg"],description:"",specs:{}},{id:"lubinski-гильотина-lubinski-ct-011-silver-accessories",brand:"LUBINSKI",name:"Гильотина LUBINSKI CT-011 Silver",format:"CT-011 Silver",category:"accessories",accessorySubcategory:"Гильотины/каттеры/ножи",origin:"Испания",price:{amount:499e3,currency:"UZS"},inStock:!1,images:["https://static.tildacdn.com/stor6138-3734-4133-a538-623863323836/dd9aec8202669dd8ed9a013271b69d5b.jpg"],description:"",specs:{}},{id:"lubinski-гильотина-lubinski-v---cut-bronze-accessories",brand:"LUBINSKI",name:"Гильотина LUBINSKI V - Cut Bronze",format:"V - Cut Bronze",category:"accessories",accessorySubcategory:"Гильотины/каттеры/ножи",origin:"Испания",price:{amount:699e3,currency:"UZS"},inStock:!0,images:["https://static.tildacdn.com/stor6237-6663-4335-a631-376366323933/1d2fda25d307fda7fe317d20560d367c.jpg"],description:"",specs:{}},{id:"lubinski-гильотина-lubinski-v-cut-silver-accessories",brand:"LUBINSKI",name:"Гильотина LUBINSKI V-Cut Silver",format:"V-Cut Silver",category:"accessories",accessorySubcategory:"Гильотины/каттеры/ножи",origin:"Испания",price:{amount:699e3,currency:"UZS"},inStock:!1,images:["https://static.tildacdn.com/stor6631-6166-4131-a334-373934313264/6b459589683dbd054fd9d8d68b95c4b8.jpg"],description:"",specs:{}},{id:"lubinski-гильотина-lubinski-v---cut-black-accessories",brand:"LUBINSKI",name:"Гильотина LUBINSKI V - Cut Black",format:"V - Cut Black",category:"accessories",accessorySubcategory:"Гильотины/каттеры/ножи",origin:"Испания",price:{amount:699e3,currency:"UZS"},inStock:!0,images:["https://static.tildacdn.com/stor3062-3566-4538-b164-376136353237/9dc22e440349370b2f9f15d7e75c5e9f.jpg"],description:"",specs:{}},{id:"lubinski-гильотина-lubinski-basic-cut-white-accessories",brand:"LUBINSKI",name:"Гильотина LUBINSKI Basic Cut White",format:"Basic Cut White",category:"accessories",accessorySubcategory:"Гильотины/каттеры/ножи",origin:"Испания",price:{amount:49e3,currency:"UZS"},inStock:!0,images:["https://static.tildacdn.com/stor3433-3537-4762-b564-346630323836/fc361ff1bf92834f311bf39384b1888a.jpg"],description:"",specs:{}},{id:"lubinski-гильотина-lubinski-basic-cut-black-accessories",brand:"LUBINSKI",name:"Гильотина LUBINSKI Basic Cut Black",format:"Basic Cut Black",category:"accessories",accessorySubcategory:"Гильотины/каттеры/ножи",origin:"Испания",price:{amount:49e3,currency:"UZS"},inStock:!0,images:["https://static.tildacdn.com/stor3761-6236-4534-a431-313537343666/6ad4f768022b384924f02ee63abd201f.jpg"],description:"",specs:{}},{id:"lubinski-гильотина-lubinski-ct-001-silver-accessories",brand:"LUBINSKI",name:"Гильотина LUBINSKI CT 001 silver",format:"CT 001 silver",category:"accessories",accessorySubcategory:"Гильотины/каттеры/ножи",origin:"Испания",price:{amount:499e3,currency:"UZS"},inStock:!0,images:["https://static.tildacdn.com/stor3933-3934-4461-a466-366266613561/be329117a09f96e18e36d6add824848d.jpg"],description:"",specs:{}},{id:"lubinski-гильотина-lubinski-ct-001-gold-accessories",brand:"LUBINSKI",name:"Гильотина LUBINSKI CT-001 Gold",format:"CT-001 Gold",category:"accessories",accessorySubcategory:"Гильотины/каттеры/ножи",origin:"Испания",price:{amount:499e3,currency:"UZS"},inStock:!0,images:["https://static.tildacdn.com/stor6266-3435-4666-a164-303039333261/55eacae09ea15dc12adcd5993a941446.jpg"],description:"",specs:{}},{id:"lubinski-гильотина-lubinski-classic-cut-black-accessories",brand:"LUBINSKI",name:"Гильотина LUBINSKI Classic Cut Black",format:"Classic Cut Black",category:"accessories",accessorySubcategory:"Гильотины/каттеры/ножи",origin:"Испания",price:{amount:59e3,currency:"UZS"},inStock:!0,images:["https://static.tildacdn.com/stor3837-6161-4164-a634-623063303362/c5a9f68642dcc3067dce196377acbf99.jpg"],description:"",specs:{}},{id:"lubinski-гильотина-lubinski-classic-cut-cohiba-accessories",brand:"LUBINSKI",name:"Гильотина LUBINSKI Classic Cut Cohiba",format:"Classic Cut Cohiba",category:"accessories",accessorySubcategory:"Гильотины/каттеры/ножи",origin:"Испания",price:{amount:59e3,currency:"UZS"},inStock:!0,images:["https://static.tildacdn.com/stor6439-3834-4333-b837-663939386637/a262068d7e6625d5b770ca07f1716c25.jpg"],description:"",specs:{}},{id:"lubinski-футляр-для-сигар-lubinski-carbon-light-black-на-3-сигары-accessories",brand:"LUBINSKI",name:"Футляр для сигар LUBINSKI Carbon Light Black на 3 сигары",format:"для сигар LUBINSKI Carbon Light Black на 3 сигары",category:"accessories",accessorySubcategory:"Футляры и чехлы",origin:"Испания",price:{amount:999e3,currency:"UZS"},inStock:!1,images:["https://static.tildacdn.com/stor3034-3237-4336-b966-626531346462/054754a8803090ebda42d36c88ae0efb.jpg"],description:"",specs:{}},{id:"lubinski-футляр-для-сигар-lubinski-arbon-light-silver-на-3-сигары-accessories",brand:"LUBINSKI",name:"Футляр для сигар LUBINSKI arbon Light Silver на 3 сигары",format:"для сигар LUBINSKI arbon Light Silver на 3 сигары",category:"accessories",accessorySubcategory:"Футляры и чехлы",origin:"Испания",price:{amount:999e3,currency:"UZS"},inStock:!1,images:["https://static.tildacdn.com/stor3032-3861-4830-b235-363134396439/807f0ec46a63136f5880253bf76ec903.jpg"],description:"",specs:{}},{id:"lubinski-футляр-для-сигар-lubinski-carbon-red-на-3-сигары-accessories",brand:"LUBINSKI",name:"Футляр для сигар LUBINSKI Carbon Red на 3 сигары",format:"для сигар LUBINSKI Carbon Red на 3 сигары",category:"accessories",accessorySubcategory:"Футляры и чехлы",origin:"Испания",price:{amount:999e3,currency:"UZS"},inStock:!1,images:["https://static.tildacdn.com/stor3739-6635-4735-a336-393834343430/438ac04bf6dacda1e6b771976d8aa7be.jpg"],description:"",specs:{}},{id:"lubinski-хьюмидор-lubinski-travel-x-grey-accessories",brand:"LUBINSKI",name:"Хьюмидор LUBINSKI Travel-X-Grey",format:"Travel-X-Grey",category:"accessories",accessorySubcategory:"Хьюмидоры",origin:"Испания",price:{amount:899e3,currency:"UZS"},inStock:!0,images:["https://static.tildacdn.com/stor3662-3030-4231-a631-366461356464/1f94bb81ed6096e4fa7ae3ad10be6b90.jpg","https://static.tildacdn.com/stor3930-3836-4439-b734-333661393765/77174f9954df743b31fd43bbf08900ee.jpg"],description:"",specs:{}},{id:"lubinski-хьюмидор-lubinski-travel-set-blue-accessories",brand:"LUBINSKI",name:"Хьюмидор LUBINSKI Travel Set Blue",format:"Travel Set Blue",category:"accessories",accessorySubcategory:"Хьюмидоры",origin:"Испания",price:{amount:349e4,currency:"UZS"},inStock:!0,images:["https://static.tildacdn.com/stor3830-3430-4266-b438-353237316138/e06e4b30d610a653d90d3195c0db64f9.jpg","https://static.tildacdn.com/stor3039-6465-4463-b361-636633396235/4e38ddb264cec87fe59d266a2658025b.jpg","https://static.tildacdn.com/stor3739-6232-4662-b339-373966366566/795767c44a57e9f2dfc50af8874ad8fd.jpg"],description:"",specs:{}},{id:"lubinski-хьюмидор-lubinski-grand-mosaica-accessories",brand:"LUBINSKI",name:"Хьюмидор LUBINSKI Grand Mosaica",format:"Grand Mosaica",category:"accessories",accessorySubcategory:"Хьюмидоры",origin:"Испания",price:{amount:1599e4,currency:"UZS"},inStock:!0,images:["https://static.tildacdn.com/stor3963-6665-4135-a665-363265393330/7f11c3f849100c23d69e6290b936b133.jpg","https://static.tildacdn.com/stor3433-3234-4664-b432-373164336334/a424db8276343438fb42492a343a1402.jpg"],description:"",specs:{}},{id:"lubinski-хьюмидор-lubinski-oval-grey-accessories",brand:"LUBINSKI",name:"Хьюмидор LUBINSKI Oval Grey",format:"Oval Grey",category:"accessories",accessorySubcategory:"Хьюмидоры",origin:"Испания",price:{amount:1249e3,currency:"UZS"},inStock:!1,images:["https://static.tildacdn.com/stor6536-3438-4663-a232-323865623433/f1a3f470667bbe6cee6b2ed0d247a589.jpg"],description:"",specs:{}},{id:"lubinski-хьюмидор-lubinski-oval-brown-accessories",brand:"LUBINSKI",name:"Хьюмидор LUBINSKI Oval Brown",format:"Oval Brown",category:"accessories",accessorySubcategory:"Хьюмидоры",origin:"Испания",price:{amount:1249e3,currency:"UZS"},inStock:!1,images:["https://static.tildacdn.com/stor6437-3862-4562-a366-376531373763/027dec6c1dee5e68fb8341183d90cce9.jpg"],description:"",specs:{}},{id:"lubinski-хьюмидор-lubinski-mosaica-accessories",brand:"LUBINSKI",name:"Хьюмидор LUBINSKI Mosaica",format:"Mosaica",category:"accessories",accessorySubcategory:"Хьюмидоры",origin:"Испания",price:{amount:299e4,currency:"UZS"},inStock:!0,images:["https://static.tildacdn.com/stor6666-3633-4766-a636-306464336330/6b9b9e7e9cc7c8cf48606fcafdab8e91.jpg","https://static.tildacdn.com/stor3965-6237-4332-b763-646131333033/8ff4588810ade1e18178a7d356d57a51.jpg"],description:"",specs:{}},{id:"lubinski-хьюмидор-lubinski-small-wood-carbon-accessories",brand:"LUBINSKI",name:"Хьюмидор LUBINSKI Small Wood Carbon",format:"Small Wood Carbon",category:"accessories",accessorySubcategory:"Хьюмидоры",origin:"Испания",price:{amount:899e3,currency:"UZS"},inStock:!0,images:["https://static.tildacdn.com/stor6636-3461-4734-a535-623265636666/43e646540a68b67c2b5ab6accba0ae89.jpg"],description:"",specs:{}},{id:"lubinski-хьюмидор-lubinski-grand-glass-black-accessories",brand:"LUBINSKI",name:"Хьюмидор LUBINSKI Grand Glass Black",format:"Grand Glass Black",category:"accessories",accessorySubcategory:"Хьюмидоры",origin:"Испания",price:{amount:349e4,currency:"UZS"},inStock:!1,images:["https://static.tildacdn.com/stor3433-6163-4465-b761-393535306435/d5307d57c12ad928ebda0de849c32f0c.jpg"],description:"",specs:{}},{id:"lubinski-хьюмидор-lubinski-cedar-12-accessories",brand:"LUBINSKI",name:"Хьюмидор LUBINSKI CEDAR-12",format:"CEDAR-12",category:"accessories",accessorySubcategory:"Хьюмидоры",origin:"Испания",price:{amount:239e4,currency:"UZS"},inStock:!1,images:["https://static.tildacdn.com/stor3730-3735-4630-b033-303136386439/24dd12be2a5a0be159ba40a77a8e4f54.jpg"],description:"",specs:{}},{id:"lubinski-ножницы-сигарные-lubinski-silver-accessories",brand:"LUBINSKI",name:"Ножницы сигарные LUBINSKI Silver",format:"сигарные LUBINSKI Silver",category:"accessories",accessorySubcategory:"Гильотины/каттеры/ножи",origin:"Испания",price:{amount:899e3,currency:"UZS"},inStock:!0,images:["https://static.tildacdn.com/stor3363-6433-4362-b838-376531366566/0aa0502d8cf0191d198fc928f6e5511c.jpg"],description:"",specs:{}},{id:"bolivar-bolivar-royal-coronas-cigars",brand:"Bolivar",name:"Bolivar Royal Coronas",format:"Royal Coronas",category:"cigars",origin:"Куба",price:{amount:825e4,currency:"UZS"},priceNote:"На сайте 2 варианта(ов) цены — уточнить",inStock:!0,images:["https://static.tildacdn.com/stor6432-3732-4664-a261-356661356437/c456a2915b8fd45a0a13271980af60df.jpg"],description:"",specs:{}},{id:"montecristo-montecristo-open-eagle-box-of-20-cigars",brand:"Montecristo",name:"Montecristo Open Eagle (Box Of 20)",format:"Open Eagle (Box Of 20)",category:"cigars",origin:"Куба",price:{amount:115e5,currency:"UZS"},priceNote:"На сайте 2 варианта(ов) цены — уточнить",inStock:!1,images:["https://static.tildacdn.com/stor6538-3438-4363-b038-393336633235/13320916dd9da776becb4eebf7216d43.jpg"],description:"",specs:{}},{id:"montecristo-montecristo-no-4-box-of-10-cigars",brand:"Montecristo",name:"Montecristo № 4 (Box Of 10)",format:"№ 4 (Box Of 10)",category:"cigars",origin:"Куба",price:{amount:29e5,currency:"UZS"},priceNote:"На сайте 2 варианта(ов) цены — уточнить",inStock:!0,images:["https://static.tildacdn.com/stor3164-3264-4662-b166-383962393466/4cacfc509d5b4357bb44ee284038ecb7.jpg"],description:"",specs:{}},{id:"montecristo-montecristo-no-5-box-of-10-cigars",brand:"Montecristo",name:"Montecristo № 5 (Box Of 10)",format:"№ 5 (Box Of 10)",category:"cigars",origin:"Куба",price:{amount:23e5,currency:"UZS"},priceNote:"На сайте 2 варианта(ов) цены — уточнить",inStock:!0,images:["https://static.tildacdn.com/stor3065-3363-4731-b535-383137333162/c4b55723de77c339a397c9be76df6487.jpg"],description:"",specs:{}},{id:"cohiba-cohiba-piramides-extra-box-of-10-cigars",brand:"Cohiba",name:"Cohiba Piramides Extra (Box Of 10)",format:"Piramides Extra (Box Of 10)",category:"cigars",origin:"Куба",price:{amount:195e5,currency:"UZS"},inStock:!1,images:["https://static.tildacdn.com/stor3739-3439-4932-b439-633336653534/37fc62e46f706148d85e1bf457260ba5.jpg"],description:"",specs:{}},{id:"cohiba-cohiba-siglo-vi-box-of-10-cigars",brand:"Cohiba",name:"Cohiba Siglo VI (Box Of 10)",format:"Siglo VI (Box Of 10)",category:"cigars",origin:"Куба",price:{amount:17e6,currency:"UZS"},inStock:!1,images:["https://static.tildacdn.com/stor3831-3631-4435-a530-366539313930/1c4fb728a93ec0b8e95857158889e7d3.jpg"],description:"",specs:{}},{id:"montecristo-montecristo-double-edmundo-box-of-10-cigars",brand:"Montecristo",name:"Montecristo Double Edmundo (Box Of 10)",format:"Double Edmundo (Box Of 10)",category:"cigars",origin:"Куба",price:{amount:55e5,currency:"UZS"},inStock:!1,images:["https://static.tildacdn.com/stor3262-3539-4263-a436-636532393738/877435c86ba2fe35d9653d57f7ea8f66.jpg"],description:"",specs:{}},{id:"habanos-seleccion-habanos-seleccion-piramides-sets",brand:"Habanos Seleccion",name:"Habanos Seleccion Piramides",format:"Piramides",category:"sets",origin:"Куба",price:{amount:51e5,currency:"UZS"},inStock:!1,images:["https://static.tildacdn.com/stor3866-3230-4131-a137-303031643434/41bebc0713215aa3d0ee3290a4f466b1.jpg"],description:"",specs:{}},{id:"jose-l-pedra-jose-l-pedra-petit-caballeros-box-of-12-cigars",brand:"Jose L Pedra",name:"Jose L Pedra Petit Caballeros (Box Of 12)",format:"Petit Caballeros (Box Of 12)",category:"cigars",origin:"Куба",price:{amount:99e4,currency:"UZS"},priceNote:"На сайте 2 варианта(ов) цены — уточнить",inStock:!0,images:["https://static.tildacdn.com/stor6361-3431-4335-b562-393138623765/69d944b766e300d770f767cf54b840a8.jpg"],description:"",specs:{}},{id:"jose-l-pedra-jose-l-pedra-cazadores-box-of-5-cigars",brand:"Jose L Pedra",name:"Jose L Pedra Cazadores (Box Of 5)",format:"Cazadores (Box Of 5)",category:"cigars",origin:"Куба",price:{amount:35e4,currency:"UZS"},inStock:!0,images:["https://static.tildacdn.com/stor3766-3661-4565-a636-313866373163/143d59377372e2dcebd3ec2756a09b01.jpg"],description:"",specs:{}},{id:"partagas-partagas-serie-d-5-tubos-cigars",brand:"Partagas",name:"Partagas Serie D 5 Tubos",format:"Serie D 5 Tubos",category:"cigars",origin:"Куба",price:{amount:42e4,currency:"UZS"},inStock:!0,images:["https://static.tildacdn.com/stor6664-3766-4062-b431-623432323465/05d0307d27a7a22227452ea0f1e0e264.jpg"],description:"",specs:{}},{id:"cuaba-cuaba-divinos-box-of-25-cigars",brand:"Cuaba",name:"Cuaba Divinos (Box Of 25)",format:"Divinos (Box Of 25)",category:"cigars",origin:"Куба",price:{amount:525e4,currency:"UZS"},priceNote:"На сайте 2 варианта(ов) цены — уточнить",inStock:!0,images:["https://static.tildacdn.com/stor3236-3138-4765-b139-373361383163/f837b96e9823314cfff482d5a8fc3d96.jpg"],description:"",specs:{}},{id:"hoyo-de-monterrey-hoyo-de-monterrey-epicure-especial-box-of-10-cigars",brand:"Hoyo de Monterrey",name:"Hoyo de Monterrey Epicure Especial (Box Of 10)",format:"Epicure Especial (Box Of 10)",category:"cigars",origin:"Куба",price:{amount:46e5,currency:"UZS"},priceNote:"На сайте 2 варианта(ов) цены — уточнить",inStock:!0,images:["https://static.tildacdn.com/stor6539-3561-4136-a636-613736646263/286691775c86af7c9b4ec89f2b80223d.jpg"],description:"",specs:{}},{id:"hupmann-hupmann-half-corona-box-of-25-cigars",brand:"H.Upmann",name:"H.Upmann Half Corona (Box Of 25)",format:"Half Corona (Box Of 25)",category:"cigars",origin:"Куба",price:{amount:475e4,currency:"UZS"},priceNote:"На сайте 2 варианта(ов) цены — уточнить",inStock:!0,images:["https://static.tildacdn.com/stor6363-3234-4135-a261-393530616132/9fb4228af5c5bf664f62072e7afafcac.png"],description:"",specs:{}},{id:"hoyo-de-monterrey-hoyo-de-monterrey-epicure-de-luxe-box-of-10-cigars",brand:"Hoyo de Monterrey",name:"Hoyo de Monterrey Epicure De Luxe (Box Of 10)",format:"Epicure De Luxe (Box Of 10)",category:"cigars",origin:"Куба",price:{amount:54e5,currency:"UZS"},priceNote:"На сайте 2 варианта(ов) цены — уточнить",inStock:!0,images:["https://static.tildacdn.com/stor3463-6632-4562-a162-616335376636/2c882bac010bf00554a107a50515eba9.jpg"],description:"",specs:{}},{id:"la-gloria-cubana-la-gloria-cubana-turquinos-cigars",brand:"La Gloria Cubana",name:"La Gloria Cubana Turquinos",format:"La Gloria Cubana Turquinos",category:"cigars",origin:"Куба",price:{amount:33e5,currency:"UZS"},priceNote:"На сайте 2 варианта(ов) цены — уточнить",inStock:!0,images:["https://static.tildacdn.com/stor3933-3439-4237-b864-333834653635/e5da7848ccd3a39b128a7545a72e3283.jpg"],description:"",specs:{}},{id:"jose-l-pedra-jose-l-pedra-brevas-box-of-5-cigars",brand:"Jose L Pedra",name:"Jose L Pedra Brevas (Box Of 5)",format:"Brevas (Box Of 5)",category:"cigars",origin:"Куба",price:{amount:4e5,currency:"UZS"},inStock:!0,images:["https://static.tildacdn.com/stor3266-3366-4430-b061-376431376231/4129f7ab35aef8d47b089ab461aea0b5.jpg"],description:"",specs:{}},{id:"juan-lopez-juan-lopez-seleccion-no-1-box-of-25-cigars",brand:"Juan Lopez",name:"Juan Lopez Seleccion No. 1 (Box Of 25)",format:"Juan Lopez Seleccion No. 1 (Box Of 25)",category:"cigars",origin:"Куба",price:{amount:75e5,currency:"UZS"},priceNote:"На сайте 2 варианта(ов) цены — уточнить",inStock:!1,images:["https://static.tildacdn.com/stor6430-6138-4463-a232-656539623631/09c8179ac811df554a161c6089a1b093.jpg"],description:"",specs:{}},{id:"punch-punch-coronations-tubos-cigars",brand:"Punch",name:"Punch Coronations Tubos",format:"Coronations Tubos",category:"cigars",origin:"Куба",price:{amount:225e3,currency:"UZS"},inStock:!0,images:["https://static.tildacdn.com/stor6261-6330-4461-b538-393166323830/f64c09857608084f3aec76c9339fe56a.jpg"],description:"",specs:{}},{id:"montecristo-montecristo-petit-tubos-cigars",brand:"Montecristo",name:"Montecristo Petit Tubos",format:"Petit Tubos",category:"cigars",origin:"Куба",price:{amount:385e3,currency:"UZS"},inStock:!1,images:["https://static.tildacdn.com/stor3762-3331-4561-b662-336339356130/7d1eb09dac133cafbd70a97d6dde55b4.jpg"],description:"",specs:{}},{id:"trinidad-trinidad-esmeralda-box-of-12-cigars",brand:"Trinidad",name:"Trinidad Esmeralda (Box of 12)",format:"Esmeralda (Box of 12)",category:"cigars",origin:"Куба",price:{amount:108e5,currency:"UZS"},inStock:!1,images:["https://static.tildacdn.com/stor6263-6461-4661-a163-323238663732/985d4d7fe310e75f072cf08f02293c44.jpg"],description:"",specs:{}},{id:"trinidad-trinidad-vigia-box-of-12-cigars",brand:"Trinidad",name:"Trinidad Vigia (Box of 12)",format:"Vigia (Box of 12)",category:"cigars",origin:"Куба",price:{amount:9e6,currency:"UZS"},inStock:!1,images:["https://static.tildacdn.com/stor6432-6330-4664-b966-313832623734/08156ad5b8d59c08308edede4557cca5.jpg"],description:"",specs:{}},{id:"hupmann-hupmann-magnum-finite-le-2024-box-of-25-cigars",brand:"H.Upmann",name:"H.Upmann Magnum Finite LE 2024 (Box Of 25)",format:"Magnum Finite LE 2024 (Box Of 25)",category:"cigars",origin:"Куба",price:{amount:26e6,currency:"UZS"},priceNote:"На сайте 2 варианта(ов) цены — уточнить",inStock:!0,images:["https://static.tildacdn.com/stor3435-3834-4537-b538-386664626134/51d349b9aaf2e474263878aecac9f373.jpg","https://static.tildacdn.com/stor6536-3561-4130-b664-306431383134/8c477e7236dd95c3dfa4d7a224abbde7.jpg"],description:"",specs:{}},{id:"sancho-panza-sancho-panza-rocinante-er-rusia-2023-cigars",brand:"Sancho Panza",name:"Sancho Panza Rocinante ER Rusia 2023",format:"Sancho Panza Rocinante ER Rusia 2023",category:"cigars",origin:"Куба",price:{amount:595e4,currency:"UZS"},priceNote:"На сайте 2 варианта(ов) цены — уточнить",inStock:!1,images:["https://static.tildacdn.com/stor3234-6565-4138-b165-336662666163/e89c9726881f47e0ce6a8e4d8956c64a.jpg"],description:"",specs:{}},{id:"trinidad-trinidad-robustos-extra-box-of-12-cigars",brand:"Trinidad",name:"Trinidad Robustos Extra (Box of 12)",format:"Robustos Extra (Box of 12)",category:"cigars",origin:"Куба",price:{amount:15e6,currency:"UZS"},priceNote:"На сайте 2 варианта(ов) цены — уточнить",inStock:!0,images:["https://static.tildacdn.com/stor6234-3161-4230-b964-356437343437/3c62fb9121d66da5ce746d073f8fa7bc.jpg"],description:"",specs:{}},{id:"vegas-robaina-vegas-robaina-famosos-box-of-25-cigars",brand:"Vegas Robaina",name:"Vegas Robaina Famosos (Box of 25)",format:"Robaina Famosos (Box of 25)",category:"cigars",origin:"Куба",price:{amount:8e6,currency:"UZS"},priceNote:"На сайте 2 варианта(ов) цены — уточнить",inStock:!0,images:["https://static.tildacdn.com/stor3839-3336-4433-b436-626430343734/b03c033f95021aaefd667c166d742a76.jpg"],description:"",specs:{}},{id:"romeo-y-julieta-romeo-y-julieta-wide-churchills-box-of-25-cigars",brand:"Romeo y Julieta",name:"Romeo y Julieta Wide Churchills (Box Of 25)",format:"Wide Churchills (Box Of 25)",category:"cigars",origin:"Куба",price:{amount:105e5,currency:"UZS"},priceNote:"На сайте 2 варианта(ов) цены — уточнить",inStock:!0,images:["https://static.tildacdn.com/stor6531-3366-4463-b162-346466393839/b1b06c58247769f02cbfa14d6db0b9bd.jpg"],description:"",specs:{}},{id:"vegueros-vegueros-entretiempos-box-of-16-cigars",brand:"Vegueros",name:"Vegueros Entretiempos (Box Of 16)",format:"Entretiempos (Box Of 16)",category:"cigars",origin:"Куба",price:{amount:32e5,currency:"UZS"},priceNote:"На сайте 2 варианта(ов) цены — уточнить",inStock:!0,images:["https://static.tildacdn.com/stor3034-3337-4339-a534-646536366162/70e3549159e403744983d0a5e5e1221a.webp"],description:"",specs:{}},{id:"cohiba-cohiba-esplenditos-gran-reserva-cosecha-2017-box-of-2-cigars",brand:"Cohiba",name:"Cohiba Esplenditos Gran Reserva Cosecha 2017 (Box Of 2)",format:"Esplenditos Gran Reserva Cosecha 2017 (Box Of 2)",category:"cigars",origin:"Куба",price:{amount:12e6,currency:"UZS"},inStock:!1,images:["https://static.tildacdn.com/stor3330-6164-4965-b762-363037303665/7f8b61817e3c55dcb2485a5c596d9b0e.jpg"],description:"",specs:{}},{id:"partagas-partagas-cedros-year-of-dragon-box-of-18-cigars",brand:"Partagas",name:"Partagas Cedros Year of Dragon (Box Of 18)",format:"Cedros Year of Dragon (Box Of 18)",category:"cigars",origin:"Куба",price:{amount:315e5,currency:"UZS"},inStock:!1,images:["https://static.tildacdn.com/stor3435-6261-4664-b230-643762653165/a264b621033791229e8cde9ffe4846c6.jpg"],description:"",specs:{}},{id:"hupmann-hupmann-majestic-box-of-25-cigars",brand:"H.Upmann",name:"H.Upmann Majestic (Box Of 25)",format:"Majestic (Box Of 25)",category:"cigars",origin:"Куба",price:{amount:5e6,currency:"UZS"},priceNote:"На сайте 2 варианта(ов) цены — уточнить",inStock:!0,images:["https://static.tildacdn.com/stor3366-6430-4030-b133-386663346262/26b4a50c220c7dff85d555db716f11c5.jpg","https://static.tildacdn.com/stor3835-6233-4233-a462-373639353035/aeddfaf32bfe99986f4d983eaa5e999e.jpg"],description:"",specs:{}},{id:"por-larranaga-por-larranaga-picadores-nr-1-box-of-25-cigars",brand:"Por Larranaga",name:"Por Larranaga Picadores Nr. 1 (Box Of 25)",format:"Picadores Nr. 1 (Box Of 25)",category:"cigars",origin:"Куба",price:{amount:625e4,currency:"UZS"},priceNote:"На сайте 2 варианта(ов) цены — уточнить",inStock:!0,images:["https://static.tildacdn.com/stor3530-6136-4463-a261-643635366463/719a8e9dd366bac375a34b222e93a54f.jpg"],description:"",specs:{}},{id:"trinidad-trinidad-la-trova-box-of-12-cigars",brand:"Trinidad",name:"Trinidad La Trova (Box of 12)",format:"La Trova (Box of 12)",category:"cigars",origin:"Куба",price:{amount:144e5,currency:"UZS"},priceNote:"На сайте 2 варианта(ов) цены — уточнить",inStock:!0,images:["https://static.tildacdn.com/stor3839-6664-4132-a466-613238323830/764fc938db6aa6ba308141c90a67dec1.jpg","https://static.tildacdn.com/stor3337-3235-4235-a566-653136353739/c87ff5491f18e0927eff76536f8cbdff.jpg"],description:"",specs:{}},{id:"rafael-gonzalez-rafael-gonzales-coronas-de-lonsdales-box-of-10-cigars",brand:"Rafael Gonzalez",name:"Rafael Gonzales Coronas de Lonsdales (Box Of 10)",format:"Rafael Gonzales Coronas de Lonsdales (Box Of 10)",category:"cigars",origin:"Куба",price:{amount:25e5,currency:"UZS"},priceNote:"На сайте 2 варианта(ов) цены — уточнить",inStock:!1,images:["https://static.tildacdn.com/stor3332-6235-4166-b562-626136643238/0f353c39dae7729ca0a07e3954618a42.jpg"],description:"",specs:{}},{id:"hoyo-de-monterrey-hoyo-de-monterrey-souvenir-de-luxe-box-of-5-cigars",brand:"Hoyo de Monterrey",name:"Hoyo de Monterrey Souvenir De Luxe (Box Of 5)",format:"Souvenir De Luxe (Box Of 5)",category:"cigars",origin:"Куба",price:{amount:16e5,currency:"UZS"},inStock:!0,images:["https://static.tildacdn.com/stor3730-6565-4338-b734-316663353364/a7d49c2ef031655f4f8f46707a5d113b.jpg"],description:"",specs:{}},{id:"hoyo-de-monterrey-hoyo-de-monterrey-le-hoyo-de-rio-seco-box-of-10-cigars",brand:"Hoyo de Monterrey",name:"Hoyo de Monterrey Le Hoyo De Rio Seco (Box Of 10)",format:"Le Hoyo De Rio Seco (Box Of 10)",category:"cigars",origin:"Куба",price:{amount:525e4,currency:"UZS"},priceNote:"На сайте 2 варианта(ов) цены — уточнить",inStock:!0,images:["https://static.tildacdn.com/stor3062-6464-4635-b361-383564323561/ec692dab75e655b908fa4c3cd7fca8a6.jpg"],description:"",specs:{}},{id:"montecristo-montecristo-open-master-box-of-20-cigars",brand:"Montecristo",name:"Montecristo Open Master (Box Of 20)",format:"Open Master (Box Of 20)",category:"cigars",origin:"Куба",price:{amount:88e5,currency:"UZS"},priceNote:"На сайте 2 варианта(ов) цены — уточнить",inStock:!1,images:["https://static.tildacdn.com/stor6664-3430-4234-a438-373464316363/f0fd0f5c95ec6a70de3bbbbbb497f36c.jpg"],description:"",specs:{}},{id:"por-larranaga-por-larranaga-galanes-box-of-10-cigars",brand:"Por Larranaga",name:"Por Larranaga Galanes (Box Of 10)",format:"Galanes (Box Of 10)",category:"cigars",origin:"Куба",price:{amount:235e4,currency:"UZS"},priceNote:"На сайте 2 варианта(ов) цены — уточнить",inStock:!0,images:["https://static.tildacdn.com/stor3363-6231-4262-b933-326639303132/83e87573e6df865267ed52d69c923359.jpg"],description:"",specs:{}},{id:"ramon-allones-ramon-allones-absolutos-le-2024-box-of-20-cigars",brand:"Ramon Allones",name:"Ramon Allones Absolutos LE 2024 (Box Of 20)",format:"Absolutos LE 2024 (Box Of 20)",category:"cigars",origin:"Куба",price:{amount:21e6,currency:"UZS"},priceNote:"На сайте 2 варианта(ов) цены — уточнить",inStock:!0,images:["https://static.tildacdn.com/stor6532-6538-4836-b738-336633666237/9e47c4f78e9a96efd43d547ba5d7d81b.jpg","https://static.tildacdn.com/stor3435-6536-4863-b462-663466643461/2941c2aa276aa29ac772a544b834b511.jpg"],description:"",specs:{}},{id:"romeo-y-julieta-romeo-y-julieta-belicosos-box-of-25-cigars",brand:"Romeo y Julieta",name:"Romeo y Julieta Belicosos (Box Of 25)",format:"Belicosos (Box Of 25)",category:"cigars",origin:"Куба",price:{amount:11e6,currency:"UZS"},priceNote:"На сайте 2 варианта(ов) цены — уточнить",inStock:!0,images:["https://static.tildacdn.com/stor6133-6366-4636-a631-623630643634/7c01a2e21ed81b0cf8c9b1a00ee486eb.jpg"],description:"",specs:{}},{id:"quintero-quintero-tubulares-tubos-cigars",brand:"Quintero",name:"Quintero Tubulares Tubos",format:"Tubulares Tubos",category:"cigars",origin:"Куба",price:{amount:15e4,currency:"UZS"},inStock:!0,images:["https://static.tildacdn.com/stor6235-3065-4863-b639-323736373266/c362e35cf4db2422b5e318cefe0c2b9f.jpg"],description:"",specs:{}},{id:"punch-punch-petit-coronations-tubos-cigars",brand:"Punch",name:"Punch Petit Coronations Tubos",format:"Petit Coronations Tubos",category:"cigars",origin:"Куба",price:{amount:2e5,currency:"UZS"},inStock:!0,images:["https://static.tildacdn.com/stor3665-3363-4130-b637-663831626134/0fcacc53daef2b83028e8c7463ee0bd3.jpg"],description:"",specs:{}},{id:"cohiba-сигариллы-cohiba-white-club-cigarillos",brand:"Cohiba",name:"Сигариллы Cohiba White Club",format:"White Club",category:"cigarillos",origin:"Куба",price:{amount:63e4,currency:"UZS"},inStock:!0,images:["https://static.tildacdn.com/stor3939-3435-4565-b135-613163656165/698f2565f6567e49e06b90f3c422e136.jpg"],description:"",specs:{}},{id:"trinidad-сигариллы-trinidad-wide-short-cigarillos",brand:"Trinidad",name:"Сигариллы Trinidad Wide Short",format:"Wide Short",category:"cigarillos",origin:"Куба",price:{amount:63e4,currency:"UZS"},inStock:!0,images:["https://static.tildacdn.com/stor6536-3562-4630-b661-373965396334/96469858b8036e915aa717c564b38cb0.jpg"],description:"",specs:{}},{id:"cohiba-cohiba-behike-15th-aniversario-seleccion-box-of-4-cigars",brand:"Cohiba",name:"Cohiba Behike 15th Aniversario Seleccion (Box Of 4)",format:"Behike 15th Aniversario Seleccion (Box Of 4)",category:"cigars",origin:"Куба",price:{amount:3e7,currency:"UZS"},inStock:!0,images:["https://static.tildacdn.com/stor3966-3533-4464-b865-633032613562/624122937e2070456332b60c0cb7bf88.jpg","https://static.tildacdn.com/stor3038-6631-4332-a334-653164306563/a2261a8cf53563006f20312198166154.jpg"],description:"",specs:{}},{id:"partagas-partagas-de-luxe-tubos-cigars",brand:"Partagas",name:"Partagas De Luxe Tubos",format:"De Luxe Tubos",category:"cigars",origin:"Куба",price:{amount:27e4,currency:"UZS"},inStock:!0,images:["https://static.tildacdn.com/stor6161-3038-4134-b261-343164326162/bc0256f8362439019ceb551e9261026c.jpg","https://static.tildacdn.com/stor6331-3437-4465-b735-376631343763/5b1671032e266a32756289d1a2878125.jpg"],description:"",specs:{}},{id:"partagas-partagas-serie-p-2-cigars-2",brand:"Partagas",name:"Partagas Serie P 2",format:"Serie P 2",category:"cigars",origin:"Куба",price:{amount:13e6,currency:"UZS"},priceNote:"На сайте 2 варианта(ов) цены — уточнить",inStock:!0,images:["https://static.tildacdn.com/stor6432-3566-4632-b764-613765663861/36ec58d17df3469a1c33404cfa639769.jpg"],description:"",specs:{}},{id:"quai-dorsay-quai-dorsay-especial-dorsay-box-of-5-cigars",brand:"Quai D'Orsay",name:"Quai D'Orsay Especial D'Orsay (Box of 5)",format:"Especial D'Orsay (Box of 5)",category:"cigars",origin:"Куба",price:{amount:65e5,currency:"UZS"},inStock:!0,images:["https://static.tildacdn.com/stor6162-3865-4330-a262-356536326262/3022552ea3a2ebcb661d6959efb463d2.jpg","https://static.tildacdn.com/stor3434-3034-4561-a431-613564623666/e58a876675e609165d1b727d9ece0938.jpg"],description:"",specs:{}},{id:"quintero-quintero-londres-extra-cigars",brand:"Quintero",name:"Quintero Londres Extra",format:"Londres Extra",category:"cigars",origin:"Куба",price:{amount:275e4,currency:"UZS"},priceNote:"На сайте 2 варианта(ов) цены — уточнить",inStock:!0,images:["https://static.tildacdn.com/stor6363-3462-4334-a535-343234323933/c752b7bf0a917bc461de150e18659589.jpg"],description:"",specs:{}},{id:"hupmann-hupmann-connossieur-b-box-of-25-cigars",brand:"H.Upmann",name:"H.Upmann Connossieur B (Box Of 25)",format:"Connossieur B (Box Of 25)",category:"cigars",origin:"Куба",price:{amount:12e6,currency:"UZS"},priceNote:"На сайте 2 варианта(ов) цены — уточнить",inStock:!0,images:["https://static.tildacdn.com/stor6135-3234-4262-b965-633965336164/b56ec3dc24a728f9f197bc2379f6a182.jpg","https://static.tildacdn.com/stor3231-3530-4134-a436-383130393638/ffa5ea9008cf392e773c19e5ed21330c.jpg"],description:"",specs:{}},{id:"partagas-partagas-mille-fleurs-box-of-25-cigars",brand:"Partagas",name:"Partagas Mille Fleurs (Box of 25)",format:"Mille Fleurs (Box of 25)",category:"cigars",origin:"Куба",price:{amount:5e6,currency:"UZS"},priceNote:"На сайте 2 варианта(ов) цены — уточнить",inStock:!0,images:["https://static.tildacdn.com/stor6663-3333-4839-a437-306631373061/433c709ed4e89e91fb0a5b9326fbfa9d.jpg"],description:"",specs:{}},{id:"romeo-y-julieta-romeo-y-julieta-short-churchills-box-of-10-cigars",brand:"Romeo y Julieta",name:"Romeo Y Julieta Short Churchills (Box of 10)",format:"Short Churchills (Box of 10)",category:"cigars",origin:"Куба",price:{amount:43e5,currency:"UZS"},priceNote:"На сайте 2 варианта(ов) цены — уточнить",inStock:!0,images:["https://static.tildacdn.com/stor6537-3564-4134-b035-613364313235/6ff69feb6947eb8e3607323f68639d9b.jpg","https://static.tildacdn.com/stor6533-3031-4338-a232-663664383231/8367dea50ef88a1007308dad6ecec34f.jpg"],description:"",specs:{}},{id:"cohiba-cohiba-siglo-ii-box-of-25-cigars",brand:"Cohiba",name:"Cohiba Siglo II (Box Of 25)",format:"Siglo II (Box Of 25)",category:"cigars",origin:"Куба",price:{amount:15e6,currency:"UZS"},priceNote:"На сайте 2 варианта(ов) цены — уточнить",inStock:!0,images:["https://static.tildacdn.com/stor3836-6432-4662-b164-383862383330/765af0fe408f4f82729a446478e2817e.jpg"],description:"",specs:{}},{id:"cohiba-cohiba-siglo-iv-box-of-25-cigars-2",brand:"Cohiba",name:"Cohiba Siglo IV (Box Of 25)",format:"Siglo IV (Box Of 25)",category:"cigars",origin:"Куба",price:{amount:3e7,currency:"UZS"},priceNote:"На сайте 2 варианта(ов) цены — уточнить",inStock:!0,images:["https://static.tildacdn.com/stor3836-6432-4662-b164-383862383330/765af0fe408f4f82729a446478e2817e.jpg"],description:"",specs:{}},{id:"hoyo-de-monterrey-hoyo-de-monterrey-petit-robustos-box-of-25-cigars",brand:"Hoyo de Monterrey",name:"Hoyo de Monterrey Petit Robustos (Box of 25)",format:"Petit Robustos (Box of 25)",category:"cigars",origin:"Куба",price:{amount:8e6,currency:"UZS"},priceNote:"На сайте 2 варианта(ов) цены — уточнить",inStock:!0,images:["https://static.tildacdn.com/stor3434-6561-4033-a239-396563303932/496e69e6212290aee19b077107a01743.jpg"],description:"",specs:{}},{id:"montecristo-montecristo-dumas-linea-1935-cigars",brand:"Montecristo",name:"Montecristo Dumas Linea 1935",format:"Dumas Linea 1935",category:"cigars",origin:"Куба",price:{amount:17e6,currency:"UZS"},inStock:!1,images:["https://static.tildacdn.com/stor6137-3332-4263-b963-326533313663/42990e4ba8729b7fb047b23fb6ecfaf8.jpg"],description:"",specs:{}},{id:"montecristo-montecristo-no-2-cigars",brand:"Montecristo",name:"Montecristo № 2",format:"№ 2",category:"cigars",origin:"Куба",price:{amount:12e6,currency:"UZS"},priceNote:"На сайте 2 варианта(ов) цены — уточнить",inStock:!0,images:["https://static.tildacdn.com/stor6337-3238-4733-b366-663362646638/146f3becd6d06755e22095e6bfd3d162.jpg"],description:"",specs:{}},{id:"partagas-partagas-serie-d-6-box-of-20-cigars",brand:"Partagas",name:"Partagas Serie D 6 (Box Of 20)",format:"Serie D 6 (Box Of 20)",category:"cigars",origin:"Куба",price:{amount:6e6,currency:"UZS"},inStock:!0,images:["https://static.tildacdn.com/stor3836-6266-4639-b232-396334316239/287a8298cab4dff1219e0551bef29be8.jpg"],description:"",specs:{}},{id:"ramon-allones-ramon-allones-small-club-coronas-cigars",brand:"Ramon Allones",name:"Ramon Allones Small Club Coronas",format:"Small Club Coronas",category:"cigars",origin:"Куба",price:{amount:45e5,currency:"UZS"},priceNote:"На сайте 2 варианта(ов) цены — уточнить",inStock:!0,images:["https://static.tildacdn.com/stor6661-3563-4631-b032-643334363034/225dc6dd20532878e6b29877aba22edd.jpg"],description:"",specs:{}},{id:"romeo-y-julieta-romeo-y-julieta-mille-fleurs-cigars",brand:"Romeo y Julieta",name:"Romeo y Julieta Mille Fleurs",format:"Mille Fleurs",category:"cigars",origin:"Куба",price:{amount:475e4,currency:"UZS"},priceNote:"На сайте 2 варианта(ов) цены — уточнить",inStock:!0,images:["https://static.tildacdn.com/stor6361-3536-4264-a331-356232393539/76fd26072039386430271e32faee7d1f.jpg"],description:"",specs:{}},{id:"hupmann-hupmann-connossieur-no-1-cigars",brand:"H.Upmann",name:"H.Upmann Connossieur № 1",format:"Connossieur № 1",category:"cigars",origin:"Куба",price:{amount:95e5,currency:"UZS"},priceNote:"На сайте 2 варианта(ов) цены — уточнить",inStock:!0,images:["https://static.tildacdn.com/stor3637-6236-4062-b232-303431626234/92f1bb4bc83c258ea85a7d8a2edd6ad0.jpg"],description:"",specs:{}},{id:"hupmann-hupmann-magnum-54-cigars-2",brand:"H.Upmann",name:"H.Upmann Magnum 54",format:"Magnum 54",category:"cigars",origin:"Куба",price:{amount:11875e3,currency:"UZS"},priceNote:"На сайте 2 варианта(ов) цены — уточнить",inStock:!0,images:["https://static.tildacdn.com/stor6565-3435-4830-b231-653635383663/e483dd32217a1326f9a70ee44084c0d0.jpg"],description:"",specs:{}},{id:"hoyo-de-monterrey-hoyo-de-monterrey-le-hoyo-de-san-luis-box-of-10-cigars",brand:"Hoyo de Monterrey",name:"Hoyo de Monterrey Le Hoyo De San Luis (Box of 10)",format:"Le Hoyo De San Luis (Box of 10)",category:"cigars",origin:"Куба",price:{amount:5e6,currency:"UZS"},priceNote:"На сайте 2 варианта(ов) цены — уточнить",inStock:!0,images:["https://static.tildacdn.com/stor3231-6230-4234-b961-636462373130/b81f7d667acdf4b508ad08ad1af8acca.jpg"],description:"",specs:{}},{id:"cohiba-cohiba-robustos-box-of-25-piece-sale",brand:"Cohiba",name:"Cohiba Robustos (Box Of 25)",format:"1 сигара (поштучно)",category:"piece-sale",origin:"Куба",price:{amount:13e5,currency:"UZS"},priceNote:"цена за 1 сигару",inStock:!0,images:["https://static.tildacdn.com/stor3038-3634-4231-a234-303464643361/38479825.jpg","https://static.tildacdn.com/stor6636-3737-4266-b466-636437333034/87222287.jpg"],description:"",specs:{}},{id:"hupmann-hupmann-no2-piece-sale",brand:"H.Upmann",name:"H.Upmann №2",format:"1 сигара (поштучно)",category:"piece-sale",origin:"Куба",price:{amount:46e4,currency:"UZS"},priceNote:"цена за 1 сигару",inStock:!0,images:["https://static.tildacdn.com/stor3931-3537-4539-b764-323962656237/38757096.jpg","https://static.tildacdn.com/stor6139-6438-4834-b939-623138393963/74801584.jpg"],description:"",specs:{}},{id:"hoyo-de-monterrey-hoyo-de-monterrey-le-hoyo-de-san-juan-piece-sale",brand:"Hoyo de Monterrey",name:"Hoyo de Monterrey Le Hoyo de San Juan",format:"1 сигара (поштучно)",category:"piece-sale",origin:"Куба",price:{amount:535e3,currency:"UZS"},priceNote:"цена за 1 сигару",inStock:!0,images:["https://static.tildacdn.com/stor3738-6338-4465-a136-346137393936/39405236.jpg"],description:"",specs:{}},{id:"hupmann-hupmann-magnum-50-piece-sale",brand:"H.Upmann",name:"H.Upmann Magnum 50",format:"1 сигара (поштучно)",category:"piece-sale",origin:"Куба",price:{amount:5e5,currency:"UZS"},priceNote:"цена за 1 сигару",inStock:!0,images:["https://static.tildacdn.com/stor3832-6666-4330-a261-366463313530/75904300.jpg"],description:"",specs:{}},{id:"hoyo-de-monterrey-hoyo-de-monterrey-epicure-no-3-box-of-25-piece-sale",brand:"Hoyo de Monterrey",name:"Hoyo de Monterrey Epicure № 3 (Box of 25)",format:"1 сигара (поштучно)",category:"piece-sale",origin:"Куба",price:{amount:42e4,currency:"UZS"},priceNote:"цена за 1 сигару",inStock:!0,images:["https://static.tildacdn.com/stor3736-3239-4361-b339-356437343037/34562835.jpg"],description:"",specs:{}},{id:"hupmann-hupmann-connossieur-no-2-piece-sale",brand:"H.Upmann",name:"H.Upmann Connossieur № 2",format:"1 сигара (поштучно)",category:"piece-sale",origin:"Куба",price:{amount:42e4,currency:"UZS"},priceNote:"цена за 1 сигару",inStock:!0,images:["https://static.tildacdn.com/stor3537-3265-4163-a534-333935396637/68695707.jpg"],description:"",specs:{}},{id:"montecristo-montecristo-wide-edmundo-box-of-25-piece-sale",brand:"Montecristo",name:"Montecristo Wide Edmundo (Box Of 25)",format:"1 сигара (поштучно)",category:"piece-sale",origin:"Куба",price:{amount:46e4,currency:"UZS"},priceNote:"цена за 1 сигару",inStock:!0,images:["https://static.tildacdn.com/stor6164-3032-4935-a261-643432656664/43048714.jpg"],description:"",specs:{}},{id:"partagas-partagas-maduro-no1-box-of-25-piece-sale",brand:"Partagas",name:"Partagas Maduro №1 (Box of 25)",format:"1 сигара (поштучно)",category:"piece-sale",origin:"Куба",price:{amount:38e4,currency:"UZS"},priceNote:"цена за 1 сигару",inStock:!0,images:["https://static.tildacdn.com/stor3035-6438-4232-b166-373835653866/25143932.jpg","https://static.tildacdn.com/stor3064-6536-4161-b936-336661663863/96825088.jpg"],description:"",specs:{}},{id:"partagas-partagas-maduro-no2-box-of-25-piece-sale",brand:"Partagas",name:"Partagas Maduro №2 (Box of 25)",format:"1 сигара (поштучно)",category:"piece-sale",origin:"Куба",price:{amount:39e4,currency:"UZS"},priceNote:"цена за 1 сигару",inStock:!1,images:["https://static.tildacdn.com/stor3465-3032-4430-b862-626365326335/52778727.jpg","https://static.tildacdn.com/stor3332-3737-4738-a435-623539643739/10343359.jpg"],description:"",specs:{}},{id:"partagas-partagas-serie-d-no4-piece-sale",brand:"Partagas",name:"Partagas Serie D №4",format:"1 сигара (поштучно)",category:"piece-sale",origin:"Куба",price:{amount:4e5,currency:"UZS"},priceNote:"цена за 1 сигару",inStock:!0,images:["https://static.tildacdn.com/stor6362-3735-4334-b963-613231623365/85457829.jpg","https://static.tildacdn.com/stor3635-6235-4236-b731-316533373761/54543573.jpg"],description:"",specs:{}},{id:"montecristo-montecristo-leyenda-box-of-20-piece-sale",brand:"Montecristo",name:"Montecristo Leyenda (Box Of 20)",format:"1 сигара (поштучно)",category:"piece-sale",origin:"Куба",price:{amount:12e5,currency:"UZS"},priceNote:"цена за 1 сигару",inStock:!0,images:["https://static.tildacdn.com/stor6338-3561-4435-a166-336465396534/38195542.jpg","https://static.tildacdn.com/stor3931-3932-4465-b138-646639326435/89452983.jpg"],description:"",specs:{}},{id:"quai-dorsay-quai-dorsay-no-50-box-of-10-piece-sale",brand:"Quai D'Orsay",name:"Quai D'Orsay № 50 (Box of 10)",format:"1 сигара (поштучно)",category:"piece-sale",origin:"Куба",price:{amount:275e3,currency:"UZS"},priceNote:"цена за 1 сигару",inStock:!0,images:["https://static.tildacdn.com/stor6231-3763-4734-a464-323461396365/46512749.jpg"],description:"",specs:{}},{id:"quai-dorsay-quai-dorsay-no-54-box-of-10-piece-sale",brand:"Quai D'Orsay",name:"Quai D'Orsay № 54 (Box of 10)",format:"1 сигара (поштучно)",category:"piece-sale",origin:"Куба",price:{amount:375e3,currency:"UZS"},priceNote:"цена за 1 сигару",inStock:!0,images:["https://static.tildacdn.com/stor3062-3936-4164-a637-306334636535/24637268.jpg","https://static.tildacdn.com/stor3965-3165-4333-b166-353134353434/94793758.jpg"],description:"",specs:{}},{id:"vegueros-vegueros-mananitas-box-of-16-piece-sale",brand:"Vegueros",name:"Vegueros Mananitas (Box Of 16)",format:"1 сигара (поштучно)",category:"piece-sale",origin:"Куба",price:{amount:15e4,currency:"UZS"},priceNote:"цена за 1 сигару",inStock:!1,images:["https://static.tildacdn.com/stor3562-3738-4637-b238-343735633636/42144743.jpg"],description:"",specs:{}},{id:"el-rey-del-mundo-el-rey-del-mundo-choix-supreme-box-of-25-piece-sale",brand:"El Rey del Mundo",name:"El Rey Del Mundo Choix Supreme (Box of 25)",format:"1 сигара (поштучно)",category:"piece-sale",origin:"Куба",price:{amount:3e5,currency:"UZS"},priceNote:"цена за 1 сигару",inStock:!0,images:["https://static.tildacdn.com/stor3734-3639-4063-a531-653539326361/264cba4e6bb245ef40ecbee745e4f35b.jpg"],description:"",specs:{}},{id:"punch-punch-punch-punch-box-of-25-piece-sale",brand:"Punch",name:"Punch Punch Punch (Box Of 25)",format:"1 сигара (поштучно)",category:"piece-sale",origin:"Куба",price:{amount:38e4,currency:"UZS"},priceNote:"цена за 1 сигару",inStock:!1,images:["https://static.tildacdn.com/stor3632-6435-4463-b462-333131646662/32103519.jpg"],description:"",specs:{}},{id:"vegas-robaina-vegas-robaina-unicos-box-of-25-piece-sale",brand:"Vegas Robaina",name:"Vegas Robaina Unicos (Box of 25)",format:"1 сигара (поштучно)",category:"piece-sale",origin:"Куба",price:{amount:43e4,currency:"UZS"},priceNote:"цена за 1 сигару",inStock:!1,images:["https://static.tildacdn.com/stor3633-6434-4265-b830-653134633433/83138586.jpg"],description:"",specs:{}},{id:"hupmann-hupmann-connossieur-a-box-of-25-piece-sale",brand:"H.Upmann",name:"H.Upmann Connossieur A (Box Of 25)",format:"1 сигара (поштучно)",category:"piece-sale",origin:"Куба",price:{amount:43e4,currency:"UZS"},priceNote:"цена за 1 сигару",inStock:!0,images:["https://static.tildacdn.com/stor3535-3064-4561-a433-323733313231/13371229.jpg"],description:"",specs:{}},{id:"hupmann-hupmann-magnum-54-piece-sale",brand:"H.Upmann",name:"H.Upmann Magnum 54",format:"1 сигара (поштучно)",category:"piece-sale",origin:"Куба",price:{amount:475e3,currency:"UZS"},priceNote:"цена за 1 сигару",inStock:!0,images:["https://static.tildacdn.com/stor6565-3435-4830-b231-653635383663/e483dd32217a1326f9a70ee44084c0d0.jpg"],description:"",specs:{}},{id:"montecristo-montecristo-open-slam-box-of-20-piece-sale",brand:"Montecristo",name:"Montecristo Open Slam (Box Of 20)",format:"1 сигара (поштучно)",category:"piece-sale",origin:"Куба",price:{amount:525e3,currency:"UZS"},priceNote:"цена за 1 сигару",inStock:!1,images:["https://static.tildacdn.com/stor3363-6630-4664-b464-643363356536/48067116.jpg","https://static.tildacdn.com/stor3435-6235-4930-a437-626535373565/10914490.jpg"],description:"",specs:{}},{id:"partagas-partagas-lusitanias-box-of-10-piece-sale",brand:"Partagas",name:"Partagas Lusitanias (Box of 10)",format:"1 сигара (поштучно)",category:"piece-sale",origin:"Куба",price:{amount:65e4,currency:"UZS"},priceNote:"цена за 1 сигару",inStock:!0,images:["https://static.tildacdn.com/stor3861-3334-4339-b861-353865386333/27414064.jpg"],description:"",specs:{}},{id:"ramon-allones-ramon-allones-allones-no-3-piece-sale",brand:"Ramon Allones",name:"Ramon Allones Allones № 3",format:"1 сигара (поштучно)",category:"piece-sale",origin:"Куба",price:{amount:375e3,currency:"UZS"},priceNote:"цена за 1 сигару",inStock:!0,images:["https://static.tildacdn.com/stor6264-3662-4038-b738-326632626139/76120515.jpg"],description:"",specs:{}},{id:"bolivar-bolivar-belicosos-finos-piece-sale",brand:"Bolivar",name:"Bolivar Belicosos Finos",format:"1 сигара (поштучно)",category:"piece-sale",origin:"Куба",price:{amount:42e4,currency:"UZS"},priceNote:"цена за 1 сигару",inStock:!0,images:["https://static.tildacdn.com/stor6236-3638-4032-a266-363538316564/95116818.jpg"],description:"",specs:{}},{id:"bolivar-bolivar-new-gold-medal-lcdh-piece-sale",brand:"Bolivar",name:"Bolivar New Gold Medal LCDH",format:"1 сигара (поштучно)",category:"piece-sale",origin:"Куба",price:{amount:575e3,currency:"UZS"},priceNote:"цена за 1 сигару",inStock:!1,images:["https://static.tildacdn.com/stor3832-3233-4166-b235-363436623361/98483676.jpg"],description:"",specs:{}},{id:"partagas-partagas-serie-e-2-box-of-25-piece-sale",brand:"Partagas",name:"Partagas Serie E 2 (Box of 25)",format:"1 сигара (поштучно)",category:"piece-sale",origin:"Куба",price:{amount:54e4,currency:"UZS"},priceNote:"цена за 1 сигару",inStock:!0,images:["https://static.tildacdn.com/stor3233-6434-4934-a439-303831643537/17525582.jpg"],description:"",specs:{}},{id:"diplomaticos-diplomaticos-no-2-box-of-25-piece-sale",brand:"Diplomaticos",name:"Diplomaticos No. 2 (Box Of 25)",format:"1 сигара (поштучно)",category:"piece-sale",origin:"Куба",price:{amount:36e4,currency:"UZS"},priceNote:"цена за 1 сигару",inStock:!0,images:["https://static.tildacdn.com/stor6163-3562-4062-b931-356539323733/8aab495376a15812da6ecc9c13b22794.jpg","https://static.tildacdn.com/stor6336-3264-4633-b533-623935643739/6a6e2a74a21e2b26422b565f300b4440.jpg"],description:"",specs:{}},{id:"hoyo-de-monterrey-hoyo-de-monterrey-epicure-no-1-box-of-25-piece-sale",brand:"Hoyo de Monterrey",name:"Hoyo de Monterrey Epicure № 1 (Box of 25)",format:"1 сигара (поштучно)",category:"piece-sale",origin:"Куба",price:{amount:41e4,currency:"UZS"},priceNote:"цена за 1 сигару",inStock:!0,images:["https://static.tildacdn.com/stor3364-6437-4464-b833-663364363966/63816884.jpg"],description:"",specs:{}},{id:"hoyo-de-monterrey-hoyo-de-monterrey-epicure-no-2-box-of-25-piece-sale",brand:"Hoyo de Monterrey",name:"Hoyo de Monterrey Epicure № 2 (Box of 25)",format:"1 сигара (поштучно)",category:"piece-sale",origin:"Куба",price:{amount:4e5,currency:"UZS"},priceNote:"цена за 1 сигару",inStock:!0,images:["https://static.tildacdn.com/stor3030-3361-4765-a535-316535356361/51462589.jpg"],description:"",specs:{}},{id:"bolivar-bolivar-royal-coronas-piece-sale",brand:"Bolivar",name:"Bolivar Royal Coronas",format:"1 сигара (поштучно)",category:"piece-sale",origin:"Куба",price:{amount:33e4,currency:"UZS"},priceNote:"цена за 1 сигару",inStock:!0,images:["https://static.tildacdn.com/stor6432-3732-4664-a261-356661356437/c456a2915b8fd45a0a13271980af60df.jpg"],description:"",specs:{}},{id:"montecristo-montecristo-open-eagle-box-of-20-piece-sale",brand:"Montecristo",name:"Montecristo Open Eagle (Box Of 20)",format:"1 сигара (поштучно)",category:"piece-sale",origin:"Куба",price:{amount:575e3,currency:"UZS"},priceNote:"цена за 1 сигару",inStock:!1,images:["https://static.tildacdn.com/stor6538-3438-4363-b038-393336633235/13320916dd9da776becb4eebf7216d43.jpg"],description:"",specs:{}},{id:"montecristo-montecristo-no-4-box-of-10-piece-sale",brand:"Montecristo",name:"Montecristo № 4 (Box Of 10)",format:"1 сигара (поштучно)",category:"piece-sale",origin:"Куба",price:{amount:29e4,currency:"UZS"},priceNote:"цена за 1 сигару",inStock:!0,images:["https://static.tildacdn.com/stor3164-3264-4662-b166-383962393466/4cacfc509d5b4357bb44ee284038ecb7.jpg"],description:"",specs:{}},{id:"montecristo-montecristo-no-5-box-of-10-piece-sale",brand:"Montecristo",name:"Montecristo № 5 (Box Of 10)",format:"1 сигара (поштучно)",category:"piece-sale",origin:"Куба",price:{amount:23e4,currency:"UZS"},priceNote:"цена за 1 сигару",inStock:!0,images:["https://static.tildacdn.com/stor3065-3363-4731-b535-383137333162/c4b55723de77c339a397c9be76df6487.jpg"],description:"",specs:{}},{id:"jose-l-pedra-jose-l-pedra-petit-caballeros-box-of-12-piece-sale",brand:"Jose L Pedra",name:"Jose L Pedra Petit Caballeros (Box Of 12)",format:"1 сигара (поштучно)",category:"piece-sale",origin:"Куба",price:{amount:82500,currency:"UZS"},priceNote:"цена за 1 сигару",inStock:!0,images:["https://static.tildacdn.com/stor6361-3431-4335-b562-393138623765/69d944b766e300d770f767cf54b840a8.jpg"],description:"",specs:{}},{id:"cuaba-cuaba-divinos-box-of-25-piece-sale",brand:"Cuaba",name:"Cuaba Divinos (Box Of 25)",format:"1 сигара (поштучно)",category:"piece-sale",origin:"Куба",price:{amount:21e4,currency:"UZS"},priceNote:"цена за 1 сигару",inStock:!0,images:["https://static.tildacdn.com/stor3236-3138-4765-b139-373361383163/f837b96e9823314cfff482d5a8fc3d96.jpg"],description:"",specs:{}},{id:"hoyo-de-monterrey-hoyo-de-monterrey-epicure-especial-box-of-10-piece-sale",brand:"Hoyo de Monterrey",name:"Hoyo de Monterrey Epicure Especial (Box Of 10)",format:"1 сигара (поштучно)",category:"piece-sale",origin:"Куба",price:{amount:46e4,currency:"UZS"},priceNote:"цена за 1 сигару",inStock:!0,images:["https://static.tildacdn.com/stor6539-3561-4136-a636-613736646263/286691775c86af7c9b4ec89f2b80223d.jpg"],description:"",specs:{}},{id:"hupmann-hupmann-half-corona-box-of-25-piece-sale",brand:"H.Upmann",name:"H.Upmann Half Corona (Box Of 25)",format:"1 сигара (поштучно)",category:"piece-sale",origin:"Куба",price:{amount:19e4,currency:"UZS"},priceNote:"цена за 1 сигару",inStock:!0,images:["https://static.tildacdn.com/stor6363-3234-4135-a261-393530616132/9fb4228af5c5bf664f62072e7afafcac.png"],description:"",specs:{}},{id:"hoyo-de-monterrey-hoyo-de-monterrey-epicure-de-luxe-box-of-10-piece-sale",brand:"Hoyo de Monterrey",name:"Hoyo de Monterrey Epicure De Luxe (Box Of 10)",format:"1 сигара (поштучно)",category:"piece-sale",origin:"Куба",price:{amount:54e4,currency:"UZS"},priceNote:"цена за 1 сигару",inStock:!0,images:["https://static.tildacdn.com/stor3463-6632-4562-a162-616335376636/2c882bac010bf00554a107a50515eba9.jpg"],description:"",specs:{}},{id:"la-gloria-cubana-la-gloria-cubana-turquinos-piece-sale",brand:"La Gloria Cubana",name:"La Gloria Cubana Turquinos",format:"1 сигара (поштучно)",category:"piece-sale",origin:"Куба",price:{amount:33e4,currency:"UZS"},priceNote:"цена за 1 сигару",inStock:!0,images:["https://static.tildacdn.com/stor3933-3439-4237-b864-333834653635/e5da7848ccd3a39b128a7545a72e3283.jpg"],description:"",specs:{}},{id:"juan-lopez-juan-lopez-seleccion-no-1-box-of-25-piece-sale",brand:"Juan Lopez",name:"Juan Lopez Seleccion No. 1 (Box Of 25)",format:"1 сигара (поштучно)",category:"piece-sale",origin:"Куба",price:{amount:3e5,currency:"UZS"},priceNote:"цена за 1 сигару",inStock:!1,images:["https://static.tildacdn.com/stor6430-6138-4463-a232-656539623631/09c8179ac811df554a161c6089a1b093.jpg"],description:"",specs:{}},{id:"hupmann-hupmann-magnum-finite-le-2024-box-of-25-piece-sale",brand:"H.Upmann",name:"H.Upmann Magnum Finite LE 2024 (Box Of 25)",format:"1 сигара (поштучно)",category:"piece-sale",origin:"Куба",price:{amount:104e4,currency:"UZS"},priceNote:"цена за 1 сигару",inStock:!0,images:["https://static.tildacdn.com/stor3435-3834-4537-b538-386664626134/51d349b9aaf2e474263878aecac9f373.jpg","https://static.tildacdn.com/stor6536-3561-4130-b664-306431383134/8c477e7236dd95c3dfa4d7a224abbde7.jpg"],description:"",specs:{}},{id:"sancho-panza-sancho-panza-rocinante-er-rusia-2023-piece-sale",brand:"Sancho Panza",name:"Sancho Panza Rocinante ER Rusia 2023",format:"1 сигара (поштучно)",category:"piece-sale",origin:"Куба",price:{amount:595e3,currency:"UZS"},priceNote:"цена за 1 сигару",inStock:!1,images:["https://static.tildacdn.com/stor3234-6565-4138-b165-336662666163/e89c9726881f47e0ce6a8e4d8956c64a.jpg"],description:"",specs:{}},{id:"trinidad-trinidad-robustos-extra-box-of-12-piece-sale",brand:"Trinidad",name:"Trinidad Robustos Extra (Box of 12)",format:"1 сигара (поштучно)",category:"piece-sale",origin:"Куба",price:{amount:125e4,currency:"UZS"},priceNote:"цена за 1 сигару",inStock:!0,images:["https://static.tildacdn.com/stor6234-3161-4230-b964-356437343437/3c62fb9121d66da5ce746d073f8fa7bc.jpg"],description:"",specs:{}},{id:"vegas-robaina-vegas-robaina-famosos-box-of-25-piece-sale",brand:"Vegas Robaina",name:"Vegas Robaina Famosos (Box of 25)",format:"1 сигара (поштучно)",category:"piece-sale",origin:"Куба",price:{amount:32e4,currency:"UZS"},priceNote:"цена за 1 сигару",inStock:!0,images:["https://static.tildacdn.com/stor3839-3336-4433-b436-626430343734/b03c033f95021aaefd667c166d742a76.jpg"],description:"",specs:{}},{id:"romeo-y-julieta-romeo-y-julieta-wide-churchills-box-of-25-piece-sale",brand:"Romeo y Julieta",name:"Romeo y Julieta Wide Churchills (Box Of 25)",format:"1 сигара (поштучно)",category:"piece-sale",origin:"Куба",price:{amount:42e4,currency:"UZS"},priceNote:"цена за 1 сигару",inStock:!0,images:["https://static.tildacdn.com/stor6531-3366-4463-b162-346466393839/b1b06c58247769f02cbfa14d6db0b9bd.jpg"],description:"",specs:{}},{id:"vegueros-vegueros-entretiempos-box-of-16-piece-sale",brand:"Vegueros",name:"Vegueros Entretiempos (Box Of 16)",format:"1 сигара (поштучно)",category:"piece-sale",origin:"Куба",price:{amount:2e5,currency:"UZS"},priceNote:"цена за 1 сигару",inStock:!0,images:["https://static.tildacdn.com/stor3034-3337-4339-a534-646536366162/70e3549159e403744983d0a5e5e1221a.webp"],description:"",specs:{}},{id:"hupmann-hupmann-majestic-box-of-25-piece-sale",brand:"H.Upmann",name:"H.Upmann Majestic (Box Of 25)",format:"1 сигара (поштучно)",category:"piece-sale",origin:"Куба",price:{amount:2e5,currency:"UZS"},priceNote:"цена за 1 сигару",inStock:!0,images:["https://static.tildacdn.com/stor3366-6430-4030-b133-386663346262/26b4a50c220c7dff85d555db716f11c5.jpg","https://static.tildacdn.com/stor3835-6233-4233-a462-373639353035/aeddfaf32bfe99986f4d983eaa5e999e.jpg"],description:"",specs:{}},{id:"por-larranaga-por-larranaga-picadores-nr-1-box-of-25-piece-sale",brand:"Por Larranaga",name:"Por Larranaga Picadores Nr. 1 (Box Of 25)",format:"1 сигара (поштучно)",category:"piece-sale",origin:"Куба",price:{amount:25e4,currency:"UZS"},priceNote:"цена за 1 сигару",inStock:!0,images:["https://static.tildacdn.com/stor3530-6136-4463-a261-643635366463/719a8e9dd366bac375a34b222e93a54f.jpg"],description:"",specs:{}},{id:"trinidad-trinidad-la-trova-box-of-12-piece-sale",brand:"Trinidad",name:"Trinidad La Trova (Box of 12)",format:"1 сигара (поштучно)",category:"piece-sale",origin:"Куба",price:{amount:12e5,currency:"UZS"},priceNote:"цена за 1 сигару",inStock:!0,images:["https://static.tildacdn.com/stor3839-6664-4132-a466-613238323830/764fc938db6aa6ba308141c90a67dec1.jpg","https://static.tildacdn.com/stor3337-3235-4235-a566-653136353739/c87ff5491f18e0927eff76536f8cbdff.jpg"],description:"",specs:{}},{id:"rafael-gonzalez-rafael-gonzales-coronas-de-lonsdales-box-of-10-piece-sale",brand:"Rafael Gonzalez",name:"Rafael Gonzales Coronas de Lonsdales (Box Of 10)",format:"1 сигара (поштучно)",category:"piece-sale",origin:"Куба",price:{amount:25e4,currency:"UZS"},priceNote:"цена за 1 сигару",inStock:!1,images:["https://static.tildacdn.com/stor3332-6235-4166-b562-626136643238/0f353c39dae7729ca0a07e3954618a42.jpg"],description:"",specs:{}},{id:"hoyo-de-monterrey-hoyo-de-monterrey-le-hoyo-de-rio-seco-box-of-10-piece-sale",brand:"Hoyo de Monterrey",name:"Hoyo de Monterrey Le Hoyo De Rio Seco (Box Of 10)",format:"1 сигара (поштучно)",category:"piece-sale",origin:"Куба",price:{amount:525e3,currency:"UZS"},priceNote:"цена за 1 сигару",inStock:!0,images:["https://static.tildacdn.com/stor3062-6464-4635-b361-383564323561/ec692dab75e655b908fa4c3cd7fca8a6.jpg"],description:"",specs:{}},{id:"montecristo-montecristo-open-master-box-of-20-piece-sale",brand:"Montecristo",name:"Montecristo Open Master (Box Of 20)",format:"1 сигара (поштучно)",category:"piece-sale",origin:"Куба",price:{amount:44e4,currency:"UZS"},priceNote:"цена за 1 сигару",inStock:!1,images:["https://static.tildacdn.com/stor6664-3430-4234-a438-373464316363/f0fd0f5c95ec6a70de3bbbbbb497f36c.jpg"],description:"",specs:{}},{id:"por-larranaga-por-larranaga-galanes-box-of-10-piece-sale",brand:"Por Larranaga",name:"Por Larranaga Galanes (Box Of 10)",format:"1 сигара (поштучно)",category:"piece-sale",origin:"Куба",price:{amount:235e3,currency:"UZS"},priceNote:"цена за 1 сигару",inStock:!0,images:["https://static.tildacdn.com/stor3363-6231-4262-b933-326639303132/83e87573e6df865267ed52d69c923359.jpg"],description:"",specs:{}},{id:"ramon-allones-ramon-allones-absolutos-le-2024-box-of-20-piece-sale",brand:"Ramon Allones",name:"Ramon Allones Absolutos LE 2024 (Box Of 20)",format:"1 сигара (поштучно)",category:"piece-sale",origin:"Куба",price:{amount:105e4,currency:"UZS"},priceNote:"цена за 1 сигару",inStock:!0,images:["https://static.tildacdn.com/stor6532-6538-4836-b738-336633666237/9e47c4f78e9a96efd43d547ba5d7d81b.jpg","https://static.tildacdn.com/stor3435-6536-4863-b462-663466643461/2941c2aa276aa29ac772a544b834b511.jpg"],description:"",specs:{}},{id:"romeo-y-julieta-romeo-y-julieta-belicosos-box-of-25-piece-sale",brand:"Romeo y Julieta",name:"Romeo y Julieta Belicosos (Box Of 25)",format:"1 сигара (поштучно)",category:"piece-sale",origin:"Куба",price:{amount:44e4,currency:"UZS"},priceNote:"цена за 1 сигару",inStock:!0,images:["https://static.tildacdn.com/stor6133-6366-4636-a631-623630643634/7c01a2e21ed81b0cf8c9b1a00ee486eb.jpg"],description:"",specs:{}},{id:"partagas-partagas-serie-p-2-piece-sale",brand:"Partagas",name:"Partagas Serie P 2",format:"1 сигара (поштучно)",category:"piece-sale",origin:"Куба",price:{amount:52e4,currency:"UZS"},priceNote:"цена за 1 сигару",inStock:!0,images:["https://static.tildacdn.com/stor6432-3566-4632-b764-613765663861/36ec58d17df3469a1c33404cfa639769.jpg"],description:"",specs:{}},{id:"quintero-quintero-londres-extra-piece-sale",brand:"Quintero",name:"Quintero Londres Extra",format:"1 сигара (поштучно)",category:"piece-sale",origin:"Куба",price:{amount:11e4,currency:"UZS"},priceNote:"цена за 1 сигару",inStock:!0,images:["https://static.tildacdn.com/stor6363-3462-4334-a535-343234323933/c752b7bf0a917bc461de150e18659589.jpg"],description:"",specs:{}},{id:"hupmann-hupmann-connossieur-b-box-of-25-piece-sale",brand:"H.Upmann",name:"H.Upmann Connossieur B (Box Of 25)",format:"1 сигара (поштучно)",category:"piece-sale",origin:"Куба",price:{amount:48e4,currency:"UZS"},priceNote:"цена за 1 сигару",inStock:!0,images:["https://static.tildacdn.com/stor6135-3234-4262-b965-633965336164/b56ec3dc24a728f9f197bc2379f6a182.jpg","https://static.tildacdn.com/stor3231-3530-4134-a436-383130393638/ffa5ea9008cf392e773c19e5ed21330c.jpg"],description:"",specs:{}},{id:"partagas-partagas-mille-fleurs-box-of-25-piece-sale",brand:"Partagas",name:"Partagas Mille Fleurs (Box of 25)",format:"1 сигара (поштучно)",category:"piece-sale",origin:"Куба",price:{amount:2e5,currency:"UZS"},priceNote:"цена за 1 сигару",inStock:!0,images:["https://static.tildacdn.com/stor6663-3333-4839-a437-306631373061/433c709ed4e89e91fb0a5b9326fbfa9d.jpg"],description:"",specs:{}},{id:"romeo-y-julieta-romeo-y-julieta-short-churchills-box-of-10-piece-sale",brand:"Romeo y Julieta",name:"Romeo Y Julieta Short Churchills (Box of 10)",format:"1 сигара (поштучно)",category:"piece-sale",origin:"Куба",price:{amount:43e4,currency:"UZS"},priceNote:"цена за 1 сигару",inStock:!0,images:["https://static.tildacdn.com/stor6537-3564-4134-b035-613364313235/6ff69feb6947eb8e3607323f68639d9b.jpg","https://static.tildacdn.com/stor6533-3031-4338-a232-663664383231/8367dea50ef88a1007308dad6ecec34f.jpg"],description:"",specs:{}},{id:"cohiba-cohiba-siglo-ii-box-of-25-piece-sale",brand:"Cohiba",name:"Cohiba Siglo II (Box Of 25)",format:"1 сигара (поштучно)",category:"piece-sale",origin:"Куба",price:{amount:6e5,currency:"UZS"},priceNote:"цена за 1 сигару",inStock:!0,images:["https://static.tildacdn.com/stor3836-6432-4662-b164-383862383330/765af0fe408f4f82729a446478e2817e.jpg"],description:"",specs:{}},{id:"cohiba-cohiba-siglo-iv-box-of-25-piece-sale",brand:"Cohiba",name:"Cohiba Siglo IV (Box Of 25)",format:"1 сигара (поштучно)",category:"piece-sale",origin:"Куба",price:{amount:12e5,currency:"UZS"},priceNote:"цена за 1 сигару",inStock:!0,images:["https://static.tildacdn.com/stor3836-6432-4662-b164-383862383330/765af0fe408f4f82729a446478e2817e.jpg"],description:"",specs:{}},{id:"hoyo-de-monterrey-hoyo-de-monterrey-petit-robustos-box-of-25-piece-sale",brand:"Hoyo de Monterrey",name:"Hoyo de Monterrey Petit Robustos (Box of 25)",format:"1 сигара (поштучно)",category:"piece-sale",origin:"Куба",price:{amount:32e4,currency:"UZS"},priceNote:"цена за 1 сигару",inStock:!0,images:["https://static.tildacdn.com/stor3434-6561-4033-a239-396563303932/496e69e6212290aee19b077107a01743.jpg"],description:"",specs:{}},{id:"montecristo-montecristo-no-2-piece-sale",brand:"Montecristo",name:"Montecristo № 2",format:"1 сигара (поштучно)",category:"piece-sale",origin:"Куба",price:{amount:48e4,currency:"UZS"},priceNote:"цена за 1 сигару",inStock:!0,images:["https://static.tildacdn.com/stor6337-3238-4733-b366-663362646638/146f3becd6d06755e22095e6bfd3d162.jpg"],description:"",specs:{}},{id:"ramon-allones-ramon-allones-small-club-coronas-piece-sale",brand:"Ramon Allones",name:"Ramon Allones Small Club Coronas",format:"1 сигара (поштучно)",category:"piece-sale",origin:"Куба",price:{amount:18e4,currency:"UZS"},priceNote:"цена за 1 сигару",inStock:!0,images:["https://static.tildacdn.com/stor6661-3563-4631-b032-643334363034/225dc6dd20532878e6b29877aba22edd.jpg"],description:"",specs:{}},{id:"romeo-y-julieta-romeo-y-julieta-mille-fleurs-piece-sale",brand:"Romeo y Julieta",name:"Romeo y Julieta Mille Fleurs",format:"1 сигара (поштучно)",category:"piece-sale",origin:"Куба",price:{amount:19e4,currency:"UZS"},priceNote:"цена за 1 сигару",inStock:!0,images:["https://static.tildacdn.com/stor6361-3536-4264-a331-356232393539/76fd26072039386430271e32faee7d1f.jpg"],description:"",specs:{}},{id:"hupmann-hupmann-connossieur-no-1-piece-sale",brand:"H.Upmann",name:"H.Upmann Connossieur № 1",format:"1 сигара (поштучно)",category:"piece-sale",origin:"Куба",price:{amount:38e4,currency:"UZS"},priceNote:"цена за 1 сигару",inStock:!0,images:["https://static.tildacdn.com/stor3637-6236-4062-b232-303431626234/92f1bb4bc83c258ea85a7d8a2edd6ad0.jpg"],description:"",specs:{}},{id:"hupmann-hupmann-magnum-54-piece-sale-2",brand:"H.Upmann",name:"H.Upmann Magnum 54",format:"1 сигара (поштучно)",category:"piece-sale",origin:"Куба",price:{amount:475e3,currency:"UZS"},priceNote:"цена за 1 сигару",inStock:!0,images:["https://static.tildacdn.com/stor6565-3435-4830-b231-653635383663/e483dd32217a1326f9a70ee44084c0d0.jpg"],description:"",specs:{}},{id:"hoyo-de-monterrey-hoyo-de-monterrey-le-hoyo-de-san-luis-box-of-10-piece-sale",brand:"Hoyo de Monterrey",name:"Hoyo de Monterrey Le Hoyo De San Luis (Box of 10)",format:"1 сигара (поштучно)",category:"piece-sale",origin:"Куба",price:{amount:5e5,currency:"UZS"},priceNote:"цена за 1 сигару",inStock:!0,images:["https://static.tildacdn.com/stor3231-6230-4234-b961-636462373130/b81f7d667acdf4b508ad08ad1af8acca.jpg"],description:"",specs:{}}],Uc={products:wc},Uo=Uc.products;function Io(i){return Uo.find(e=>e.id===i)}function Ic(i){let e=Uo;if(i.category!=="all"&&(e=e.filter(t=>t.category===i.category)),i.brands.length>0&&(e=e.filter(t=>i.brands.includes(t.brand))),i.accessorySubcategories.length>0&&(e=e.filter(t=>t.accessorySubcategory&&i.accessorySubcategories.includes(t.accessorySubcategory))),e=e.filter(t=>t.inStock),i.search.trim()){const t=i.search.trim().toLowerCase();e=e.filter(n=>n.name.toLowerCase().includes(t)||n.brand.toLowerCase().includes(t))}return e}function Pc(i,e){const t=[...i];switch(e){case"price:asc":return t.sort((n,a)=>{var r,s;return(((r=n.price)==null?void 0:r.amount)??0)-(((s=a.price)==null?void 0:s.amount)??0)});case"price:desc":return t.sort((n,a)=>{var r,s;return(((r=a.price)==null?void 0:r.amount)??0)-(((s=n.price)==null?void 0:s.amount)??0)});case"title:asc":return t.sort((n,a)=>n.name.localeCompare(a.name));case"title:desc":return t.sort((n,a)=>a.name.localeCompare(n.name));default:return t}}const Es="lcdh-cart";class Nc{constructor(){Ma(this,"lines",[]);Ma(this,"listeners",new Set);this.restore()}restore(){try{const e=sessionStorage.getItem(Es);e&&(this.lines=JSON.parse(e))}catch{this.lines=[]}}persist(){try{sessionStorage.setItem(Es,JSON.stringify(this.lines))}catch{}}notify(){this.persist(),this.listeners.forEach(e=>e())}subscribe(e){return this.listeners.add(e),()=>this.listeners.delete(e)}getLines(){return[...this.lines]}add(e,t){const n=this.lines.find(a=>a.productId===e);n?n.qty+=t:this.lines.push({productId:e,qty:t}),this.notify()}updateQty(e,t){if(t<=0){this.remove(e);return}const n=this.lines.find(a=>a.productId===e);n&&(n.qty=t,this.notify())}remove(e){this.lines=this.lines.filter(t=>t.productId!==e),this.notify()}clear(){this.lines=[],this.notify()}getTotal(){return this.lines.reduce((e,t)=>{var a;const n=Io(t.productId);return e+(((a=n==null?void 0:n.price)==null?void 0:a.amount)??0)*t.qty},0)}getCount(){return this.lines.reduce((e,t)=>e+t.qty,0)}}const un=new Nc,Ea=[{href:"#hero",label:"Главная"},{href:"#catalog",label:"Ассортимент"},{href:"#news",label:"Новости"},{href:"#contact",label:"Контакты"}];function Dc(){const i=Ea.slice(0,2),e=Ea.slice(2),t=n=>`<a href="${n.href}">${n.label}</a>`;return`
    <nav class="site-nav" id="site-nav">
      <ul class="site-nav__links site-nav__links--left">
        ${i.map(n=>`<li>${t(n)}</li>`).join("")}
      </ul>
      <a class="site-nav__logo" href="#hero" aria-label="La Casa Del Habano Tashkent — на главную">
        <img src="${Lc}" alt="La Casa Del Habano Tashkent" />
      </a>
      <ul class="site-nav__links site-nav__links--right">
        ${e.map(n=>`<li>${t(n)}</li>`).join("")}
      </ul>
      <div class="site-nav__actions">
        <button type="button" class="site-nav__burger" id="nav-burger" aria-label="Открыть меню">☰</button>
        <button type="button" class="site-nav__cart-btn" id="nav-cart-btn" aria-label="Корзина">
          🛒<span class="site-nav__cart-count" id="nav-cart-count" data-count="0"></span>
        </button>
      </div>
    </nav>
    <div class="site-nav__mobile" id="nav-mobile">
      ${Ea.map(n=>t(n)).join("")}
    </div>
  `}function Bc(i){const e=document.getElementById("site-nav"),t=document.getElementById("nav-burger"),n=document.getElementById("nav-mobile"),a=document.getElementById("nav-cart-btn"),r=document.getElementById("nav-cart-count");window.addEventListener("scroll",()=>{e.classList.toggle("is-scrolled",window.scrollY>40)}),t.addEventListener("click",()=>{n.classList.toggle("is-open")}),n.querySelectorAll("a").forEach(o=>o.addEventListener("click",()=>n.classList.remove("is-open"))),a.addEventListener("click",i);const s=()=>{const o=un.getCount();r.dataset.count=String(o),r.textContent=String(o)};un.subscribe(s),s()}const Fc=""+new URL("hero-storefront-DWK7BqyU.jpg",import.meta.url).href;function Oc(){return`
    <section class="hero" id="hero">
      <div class="hero__media">
        <img src="${Fc}" alt="Вывеска La Casa Del Habano над входом в бутик" />
      </div>
      <div class="hero__content">
        <p class="eyebrow">Ташкент · ЖК «Акай-Сити»</p>
        <h1>La Casa Del Habano Tashkent</h1>
        <p>Первый сигарный бутик-лаунж в Узбекистане со статусом международной франшизы La Casa Del Habano.</p>
      </div>
    </section>
  `}function kc(){const i=document.getElementById("hero");i&&requestAnimationFrame(()=>{requestAnimationFrame(()=>i.classList.add("is-loaded"))})}function Hc(){return`
    <section class="about-brand container" id="about" data-reveal>
      <div class="about-brand__grid">
        <div class="about-brand__text">
          <p class="eyebrow">О бренде</p>
          <h2>La Casa Del Habano</h2>
          <p>Самый большой в Узбекистане ассортимент кубинских сигар: лимитированные выпуски и винтажные серии витол.</p>
          <p>В Ташкенте в премиальном комплексе «Акай-Сити» при участии представителей компании Habanos S.A., Infifon II и Топ Сигарс Корпорейшен открылся первый в стране бутик франшизы La Casa Del Habano (в переводе с испанского — «Дом Сигар Абанос»).</p>
          <p>Открытие La Casa Del Habano в Ташкенте — это значимое событие для сигарного сообщества Узбекистана. Теперь у истинных ценителей есть возможность наслаждаться кубинскими сигарами в атмосфере, соответствующей самым высоким мировым стандартам. Это место, где встречаются традиции и современность, где можно стать частью глобального сигарного мира.</p>
          <p>Новая сигарная точка на мировой карте, где каждый афисионадо сможет получить незабываемый опыт соприкосновения с древнейшей культурой сигарного табакокурения – самого естественного, натурального и вместе с тем таинственного и сокровенного.</p>
          <p>La Casa Del Habano — это мировая сеть сигарных лаунжей. Каждый представитель сети придерживается строгих стандартов качества, гарантируя подлинность сигар и оптимальные условия их хранения. У нас вы найдете широкий ассортимент кубинских сигар, включая редкие и лимитированные выпуски.</p>
        </div>
        <div class="about-brand__sphere" id="about-sphere" aria-hidden="true"></div>
      </div>
    </section>
  `}const zc=[{id:"accessories",label:"Аксессуары"},{id:"cigars",label:"Сигары Habanos S.A."},{id:"cigarillos",label:"Сигариллы"},{id:"sets",label:"Наборы"},{id:"piece-sale",label:"Продажа поштучно"}],Gc=["Футляры и чехлы","Гильотины/каттеры/ножи","Пепельницы","Подставки","Пробойники","Хьюмидоры","Зажигалки","Одежда","Прочее"],Ts=["Bolivar","Cohiba","Cuaba","Diplomaticos","El Rey del Mundo","Fonseca","La Flor de Cano","Hoyo de Monterrey","H.Upmann","Jose L Pedra","Juan Lopez","La Gloria Cubana","Montecristo","Partagas","Por Larranaga","Punch","Quai D'Orsay","Quintero","Rafael Gonzalez","Ramon Allones","Romeo y Julieta","San Cristobal de la Habana","Sancho Panza","Saint Luis Rey","Trinidad","Vegas Robaina","Vegueros"],Vc=["Cohiba","Guantanamera","Montecristo","Partagas","Romeo y Julieta","Trinidad"];function Ti(i,e){return`${i.toLocaleString("ru-RU").replace(/,/g," ")} ${e}`}function Wc(i){const e=i.images[0]?`<div class="product-card__media"><img src="${i.images[0]}" alt="${i.name}" loading="lazy" /></div>`:`<div class="product-card__ph">[ нужно фото: ${i.name} ]</div>`,t=i.price?`<span class="product-card__price" data-price-display data-unit-price="${i.price.amount}" data-currency="${i.price.currency}">${Ti(i.price.amount,i.price.currency)}</span>`:'<span class="product-card__price">цена по запросу</span>',n=["1",String(10)],a=i.inStock?`<div class="product-card__qty">
         <select data-qty-select aria-label="Количество">
           ${n.map(s=>`<option value="${s}">${s} шт</option>`).join("")}
         </select>
       </div>`:"",r=i.inStock?`<button type="button" class="btn-outline product-card__buy" data-add-to-cart data-product-id="${i.id}">Купить</button>`:'<span class="product-card__oos">нет в наличии</span>';return`
    <article class="product-card" data-product-card data-product-id="${i.id}">
      ${e}
      <div class="product-card__body">
        <p class="product-card__brand">${i.brand}</p>
        <h3 class="product-card__name">${i.name}</h3>
        ${i.priceNote?`<p class="product-card__note">${i.priceNote}</p>`:""}
        <div class="product-card__foot">
          ${t}
          ${a}
          ${r}
        </div>
      </div>
    </article>
  `}function Xc(){return`
    <section class="catalog container" id="catalog" data-reveal>
      <div class="catalog__header">
        <p class="eyebrow">Ассортимент</p>
        <h2>Каталог</h2>
        <ul class="catalog__tabs" id="catalog-tabs">
          ${[{id:"all",label:"Все"},...zc].map((e,t)=>`<li><button type="button" class="catalog__tab${t===0?" is-active":""}" data-category="${e.id}">${e.label}</button></li>`).join("")}
        </ul>
        <div class="catalog__toolbar">
          <input type="search" class="catalog__search" id="catalog-search" placeholder="Поиск" aria-label="Поиск по каталогу" />
          <select class="catalog__brand-filter" id="catalog-brand" aria-label="Бренд">
            <option value="">Все бренды</option>
          </select>
          <select class="catalog__brand-filter" id="catalog-subcat" aria-label="Категория аксессуаров">
            <option value="">Все категории</option>
            ${Gc.map(e=>`<option value="${e}">${e}</option>`).join("")}
          </select>
          <select class="catalog__sort" id="catalog-sort" aria-label="Сортировка">
            <option value="default">Порядок: по умолчанию</option>
            <option value="price:asc">Цена: по возрастанию</option>
            <option value="price:desc">Цена: по убыванию</option>
            <option value="title:asc">Название: А—Я</option>
            <option value="title:desc">Название: Я—А</option>
          </select>
          <select class="catalog__sort" id="catalog-pagesize" aria-label="Товаров на странице">
            <option value="20">Показывать по 20</option>
            <option value="50">Показывать по 50</option>
            <option value="100">Показывать по 100</option>
          </select>
        </div>
      </div>
      <div class="catalog__grid" id="catalog-grid"></div>
      <div class="catalog__pagination" id="catalog-pagination"></div>
    </section>
    <div class="lightbox" id="lightbox" aria-hidden="true">
      <button type="button" class="lightbox__close" id="lightbox-close" aria-label="Закрыть">✕</button>
      <img id="lightbox-img" src="" alt="" />
    </div>
  `}function Zc(){const i=document.getElementById("catalog-grid"),e=document.getElementById("catalog-tabs"),t=document.getElementById("catalog-search"),n=document.getElementById("catalog-brand"),a=document.getElementById("catalog-subcat"),r=document.getElementById("catalog-sort"),s=document.getElementById("catalog-pagesize"),o=document.getElementById("catalog-pagination"),l={cigars:Ts,"piece-sale":Ts,cigarillos:Vc};let c="all",f=1;function h(){const E=c!=="all"?l[c]:void 0,R=c==="accessories";n.style.display=E?"":"none",a.style.display=R?"":"none",E?n.innerHTML='<option value="">Все бренды</option>'+E.map(S=>`<option value="${S}">${S}</option>`).join(""):n.value="",R||(a.value="")}function d(){const E=Ic({category:c,brands:n.value?[n.value]:[],accessorySubcategories:a.value?[a.value]:[],search:t.value}),R=Pc(E,r.value);if(R.length===0){i.innerHTML=`
        <div class="catalog__empty">
          <h3>Пока нет товаров</h3>
          <p>Каталог наполняется — загляните позже или свяжитесь с нами по телефону, указанному в контактах.</p>
        </div>
      `,o.innerHTML="";return}const S=Number(s.value),A=Math.max(1,Math.ceil(R.length/S));f=Math.min(f,A);const y=(f-1)*S,C=R.slice(y,y+S);i.innerHTML=C.map(Wc).join(""),o.innerHTML=A>1?`
      <button type="button" class="catalog__page-btn" data-page="${f-1}" ${f===1?"disabled":""}>← Назад</button>
      <span class="catalog__page-info">Страница ${f} из ${A}</span>
      <button type="button" class="catalog__page-btn" data-page="${f+1}" ${f===A?"disabled":""}>Вперёд →</button>
    `:""}e.addEventListener("click",E=>{const R=E.target.closest("[data-category]");R&&(c=R.dataset.category,e.querySelectorAll(".catalog__tab").forEach(S=>S.classList.remove("is-active")),R.classList.add("is-active"),h(),f=1,d())}),[t,n,a,r,s].forEach(E=>E.addEventListener("input",()=>{f=1,d()})),o.addEventListener("click",E=>{const R=E.target.closest("[data-page]");!R||R.disabled||(f=Number(R.dataset.page),d(),i.scrollIntoView({block:"start"}))}),h(),i.addEventListener("click",E=>{const R=E.target,S=R.closest(".product-card__media img");if(S){g(S.src,S.alt);return}const A=R.closest("[data-add-to-cart]");if(!A)return;const y=A.closest("[data-product-card]"),C=y==null?void 0:y.querySelector("[data-qty-select]"),_=C?Number(C.value):1;un.add(A.dataset.productId,_)}),i.addEventListener("input",E=>{const R=E.target.closest("[data-qty-select]");if(!R)return;const S=R.closest("[data-product-card]"),A=S==null?void 0:S.querySelector("[data-price-display]");if(!(A!=null&&A.dataset.unitPrice))return;const y=Number(A.dataset.unitPrice),C=Number(R.value);A.textContent=Ti(y*C,A.dataset.currency)});const m=document.getElementById("lightbox"),b=document.getElementById("lightbox-img"),v=document.getElementById("lightbox-close");function g(E,R){b.src=E,b.alt=R,m.classList.add("is-open"),m.setAttribute("aria-hidden","false")}function u(){m.classList.remove("is-open"),m.setAttribute("aria-hidden","true")}v.addEventListener("click",u),m.addEventListener("click",E=>{E.target===m&&u()}),window.addEventListener("keydown",E=>{E.key==="Escape"&&u()}),d()}const qc=""+new URL("lounge-humidor-DxxLZIha.jpg",import.meta.url).href,Kc=""+new URL("lounge-cigars-uxLXcp1-.jpg",import.meta.url).href,jc=""+new URL("lounge-seating-DpeMNGCg.jpg",import.meta.url).href;function Yc(){return`
    <section class="lounge container" id="lounge" data-reveal>
      <div class="lounge__inner">
        <p class="eyebrow">Пространство</p>
        <h2>Лаунж</h2>
        <p class="lounge__text">Пространство для тех, кто ценит неторопливость: витрины с сигарами лучших кубинских марок, зона для дегустации и разговоров, атмосфера, в которой хочется задержаться.</p>
        <div class="lounge__grid">
          <div class="lounge__photo lounge__photo--main">
            <img src="${qc}" alt="Витрины хьюмидора в лаунже La Casa Del Habano" loading="lazy" />
          </div>
          <div class="lounge__photo">
            <img src="${jc}" alt="Зона отдыха лаунжа" loading="lazy" />
          </div>
          <div class="lounge__photo">
            <img src="${Kc}" alt="Коробка сигар Romeo y Julieta" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  `}const $c=[{id:"xvi-habanos-day-2026",title:"XVI Habanos Day 2026: кубинское кино, большие сигары и встреча добрых друзей",excerpt:"Репортаж с XVI Habanos Day 2026 в Москве — более 400 гостей, кубинский кинематограф 70-х, эксклюзивные витолы и аукцион редкостей.",date:"2026-06-24",image:"https://static.tildacdn.com/tild6661-6339-4135-a664-393266366433/photo_2026-06-22_07-.jpg",body:`<p>Для многих любителей кубинских сигар Habanos Day давно стал больше, чем просто отраслевое мероприятие. Это ежегодная встреча друзей, возможность увидеть знакомые лица из разных городов и стран, обменяться новостями сигарного мира и, конечно, продегустировать лучшие сигары Habanos в прекрасной компании.</p><p>В этом году XVI Habanos Day, организованный компанией «Топ Сигарс Корпорейшн» — официальным дистрибьютором Habanos S.A. в России, собрал в Москве более 400 гостей. Помимо многочисленных представителей сигарного сообщества России, на вечер прибыли гости из Узбекистана, Азербайджана, Киргизтана, Макао и Китая.</p><p>Темой вечера стал кубинский кинематограф 70-х годов. Место проведения было выбрано исключительно удачно, пространство Loft Hall позволило одновременно создать несколько совершенно разных зон для отдыха и общения. Просторная welcome-зона на свежем воздухе встречала гостей живой музыкой и приятными кубинскими мотивами. Отдельный зал был отведен под фуршет и стенды партнеров мероприятия. Второй этаж располагал к неспешным разговорам за сигарой и бокалом вина, а основной зал стал площадкой для церемонии награждения, шоу-программы и главных событий вечера.</p><p>Уже на входе гостей ожидала приветственная сигара Diplomaticos, задавшая правильное настроение всему мероприятию. В течение вечера афисионадо получили еще три прекрасные витолы: Hoyo de Monterrey Le Hoyo de San Luis (RG 52 x 160 мм), Quai D'Orsay Especial D'Orsay (RG 52 x 160 мм) и Diplomaticos Cancilleres (RG 50 x 130 мм).</p><p>Любопытно, что подход к дегустации у гостей был совершенно разным. Кто-то не смог устоять перед новинками и раскуривал сигары сразу после получения, а кто-то, напротив, решил сохранить часть витол для выдержки и более вдумчивого знакомства в будущем. Как говорится, у каждого афисионадо свои отношения со временем и своими сигарами.</p><p>Одним из традиционно ожидаемых событий Habanos Day стало награждение лучших представителей индустрии. Победителем в номинации «Открытие года» стал Club 54, звание «Лучший специалист Habanos» получила сеть бутиков винного клуба «О Де Ви», лучшим Habanos Lounge был признан сигарный лаунж «Тифлисский Дворик», а титул лучшего Habanos Point получил CigarRoom.</p><p>Особый интерес вызвал и традиционный аукцион сигарных редкостей. На торги были выставлены Cohiba BHK 15 Aniversario Seleccion, Cohiba Esplendidos Gran Reserva Cosecha 2017, Trinidad Robustos Extra 2020, Cohiba Ideales, Partagas Tropicales Humidor и Trinidad Fundadores 55 Aniversario. Именно Trinidad Fundadores 55 Aniversario стал одним из самых желанных лотов вечера и, без сомнения, нашел очень достойного владельца.</p><p>Сигары сопровождались тщательно подобранной винной картой. Кроме того, гостям были предложены порто и китайский виски, а в welcome-зоне работали бары с коктейлями. Все это создавало атмосферу большого сигарного праздника, где каждый мог найти сочетание по своему вкусу.</p><p>Отдельного упоминания заслуживает специальная газета, подготовленная к мероприятию. Помимо информации о самом Habanos Day, она содержала календарь сигарных и культурных событий Кубы, рассказывала о значимых датах острова и включала большую публикацию, посвященную Фиделю Кастро. Для гостей из Узбекистана особенно приятным стало упоминание арт-объекта, посвященного 100-летию Команданте, который будет открыт в Ташкенте.</p><p>Одним из самых ярких моментов вечера стал короткометражный фильм, который был снят и смонтирован непосредственно во время мероприятия и показан гостям уже в финале программы. Очень удачное решение организаторов, позволившее буквально за несколько минут заново пережить атмосферу вечера и увидеть себя частью большого сигарного сообщества.</p><p>А самые стойкие афисионадо продолжили общение уже на следующий день на уютной веранде гастро-бара "Blush". За устрицами, просекко и сигарами разговоры вновь вернулись к событиям прошедшего вечера, новым сигарам, старым друзьям и планам на будущие мероприятия.</p><p>Наверное, именно в этом и заключается настоящий смысл Habanos Day. Это не только сигары, награды или редкие аукционные лоты. Это встреча добрых друзей, уважение к кубинской культуре, любовь к стране, где сигара давно возведена в настоящий культ, и возможность хотя бы на один вечер почувствовать себя частью большой международной семьи афисионадо.</p>`},{id:"1-god-la-casa-del-habano-tashkent",title:"1 год La Casa Del Habano Tashkent",excerpt:"La Casa Del Habano Tashkent отметила первый год работы вечером для членов Cigar Academy Uz в баре Embar отеля Intercontinental.",date:"2026-06-18",image:"https://static.tildacdn.com/tild3831-3039-4238-a536-396563313664/photo_2026-06-17_12-.jpg",body:"<p>Время афисионадо — увлеченных любителей сигар летит стремительно, непринужденно и практически незаметно. Казалось бы только вчера был июнь 2025 года и происходило торжественное открытие первого в Узбекистане бутика мировой франшизы кубинских сигар, сигарилл и брендированных аксессуаров La Casa Del Habano. Но уже пролетел целый год, в течение которого истинные ценители гаванских сигар могли наслаждаться широким ассортиментом и специальными релизами, такими как: Bolivar New Gold Medal, Hoyo De Monterrey Epicure De Luxe, San Cristobal 20th Aniversario, а также H.Upmann Connossieur A & B и рядом других специальных сигарных релизов. La Casa Del Habano, конечно, не могла оставить без внимания такую знаменательную дату и провела вечер для членов Закрытого Сигарного Клуба Cigar Academy Uz в баре Embar отеля Intercontinental.</p><p>На шикарном видовом руфтоп-баре собралось более 50 афисионадос — на входе их встречала живая кубинская музыка в лице двух представительниц Острова Свободы, прекрасная сигара для утонченных ценителей-конносьёров — H.Upmann Connossieur B и традиционный кубинский мохито.</p><p>Приглашенной звездой вечера стал коллекционер и эксперт по сигарам Евгений Щербаков, который специально прилетел из Нижнего Новгорода в Ташкент на вечер с докладом-презентацией об истории появления направления региональных выпусков кубинских сигар. К слову, Евгений является счастливым обладателем уникальной коллекции, насчитывающей более 250 экземпляров. К радости Евгения (и, предполагаем, сдержанной грусти бюджета его семьи) коллекция пополняется каждый год — ведь из года в год выходят новые и новые релизы. Учитывая, что темой сигарного вечера стали кубинские сигары «со вторым красным бантом», организаторы вечера — La Casa Del Habano и Культ Сигар Узбекистан — не могли не сделать сюрприз для собравшихся гостей — региональную сигару для рынка Швейцарии — Diplomaticos Emissario ER Swiza 2020, которую заблаговременно удалось «выменять» у дистрибьютеров в Швейцарии и доставить в Узбекистан малыми партиями. Большинство членов Клуба никогда не пробовали данную витолу, и по достоинству оценили аромат главной сигары вечера.</p><p>Отдельно следует отметить шикарную алкогольную пару, которая сопровождала гостей благодаря долгосрочному партнерству с компанией Union Beverage Trade — виски The Glenlivet Single Malt 15 years. Гости смаковали вкусы сигар и напитков, обменивались мнениями о сигарах, а также мировых сигарных новостях и трендах.</p><p>День рождения LCDH завершился подарками от организаторов и партнеров для наиболее удачливых — лотереей с призами от отеля Intercontinental и франшизы La Casa Del Habano — многие счастливчики стали обладателями ценных сертификатов и уникальных региональных релизов кубинских сигар.</p><p>Вечер прошел в горячей истинно кубинской атмосфере — гости пожелали своему любимому сигарному бутику процветания и широкого ассортимента сигар несмотря на сложную ситуацию на Кубе.</p><p>Издательство Hill выступило медиа-партнером мероприятия и представило гостям новый выпуск своего журнала, с которым также можно ознакомиться за сигарой в La Casa Del Habano.</p>"},{id:"sigarnyy-iftarlik-2026",title:"Сигарный ифтарлик - 2026 и премьера кубинской «лимитады» Ramon Allones EL2024.",excerpt:"Сигарный ифтарлик клуба Cigar Academy Uz в ресторане The Choyxona — премьера лимитированной Ramon Allones Absolutos Edicion Limitada 2024.",date:"2026-04-18",image:"https://static.tildacdn.com/tild3234-6465-4530-a364-613236396632/photo_2026-04-18_08-.jpg",body:"<p>В закрытом сигарном Клубе «Cigar Academy UZ» каждый год происходит мероприятие с учетом религиозных и национальных особенностей Узбекистана и всего мусульманского мира в рамках Священного месяца Рамадан — вечерний ифтарлик (время после захода солнца, когда мусульманину, соблюдающему Пост, надлежит прочитать молитву и разрешается потребление воды и пищи).</p><p>В марте 2026 года это мероприятие Клуба было организовано специализированным бутиком кубинских сигар La Casa Del Habano и было приурочено к премьере в Узбекистане новой лимитированной кубинской сигары Ramon Allones Absolutos Edicion Limitada 2024 (RG 49 x 156 mm), формат витолы Nuevos, табаки из легендарной кубинской провинции Pinar Del Rio, выдержанные более 2х лет.</p><p>Местом проведения ифтарлика и сигарной презентации стал гостеприимный ресторан традиционной узбекской кухни The Choyxona, в котором с недавнего времени открылись cigar-friendly кабинеты № 7 и 8, а также есть хьюмидор с достойным выбором сигар. Ровно в 18:30 после традиционной молитвы гости приступили к трапезе, которая включала в себя лучшие блюда из меню The Choyxona, включая, конечно, известный на весь Ташкент чайханский плов. Чуть позже Али Альбетков, управляющий партнер компании «Культ Сигар» — официального дистрибьютера сигар Habanos S.A. в Узбекистане, лично представил сигары перед собравшимися членами Клуба, коих собралось более 40 человек — по числу доступных сигар в 3х «премьерных» коробках.</p><p>Темой открытой дискуссии вечера стала современная геополитика в карибском бассейне и возможное влияние на мировой рынок сигар, в том числе кубинских. Али Альбетков поделился последними новостями с Кубы, а гости вечера обменивались своими соображениями и прогнозами на развитие событий и будущее мирового рынка сигар.</p><p>В завершении вечера афисионадо обменялись мнениями о сигаре и сошлись в том, что новая «лимитада» от Ramon Allones — превосходная мощная витола, созданная для опытных, подготовленных дегустаторов.</p><p>Некоторые сигарные коллекционеры Клуба приняли решение пополнить данным редким выпуском свои хьюмидоры для дополнительного выдерживания с целью достижения через 2-4 года оптимального вкуса сигары.</p><p>Вечер Клуба прошел исключительно в теплой и дружественной атмосфере, традиционной для мероприятия сигарного клуба Cigar Academy Uz и сигарного лаунжа La Casa Del Habano.</p>"}],Jc={news:$c},Po=Jc.news;function Qc(){return[...Po].sort((i,e)=>i.date<e.date?1:-1)}function el(i){return Po.find(e=>e.id===i)}function No(i){return new Date(i).toLocaleDateString("ru-RU",{day:"2-digit",month:"2-digit",year:"numeric"})}function tl(){return`
    <section class="news container" id="news" data-reveal>
      <p class="eyebrow">Новости</p>
      <h2>Новости лаунжа</h2>
      <div class="news__grid">${Qc().map(t=>`
        <button type="button" class="news-card" data-news-id="${t.id}">
          ${t.image?`<div class="news-card__media"><img src="${t.image}" alt="${t.title}" loading="lazy" /></div>`:'<div class="news-card__ph">[ нужно фото новости ]</div>'}
          <div class="news-card__body">
            <div class="news-card__date">${No(t.date)}</div>
            <h3 class="news-card__title">${t.title}</h3>
          </div>
        </button>
      `).join("")}</div>
    </section>
    <div class="news-modal-backdrop" id="news-modal-backdrop">
      <div class="news-modal" role="dialog" aria-modal="true" aria-labelledby="news-modal-title">
        <button type="button" class="news-modal__close" id="news-modal-close" aria-label="Закрыть">✕</button>
        <div class="news-card__date" id="news-modal-date"></div>
        <h3 id="news-modal-title"></h3>
        <div class="news-modal__body" id="news-modal-body"></div>
      </div>
    </div>
  `}function nl(){const i=document.querySelector(".news__grid"),e=document.getElementById("news-modal-backdrop"),t=document.getElementById("news-modal-close"),n=document.getElementById("news-modal-title"),a=document.getElementById("news-modal-date"),r=document.getElementById("news-modal-body");function s(l){const c=el(l);c&&(n.textContent=c.title,a.textContent=No(c.date),r.innerHTML=c.body,e.classList.add("is-open"))}function o(){e.classList.remove("is-open")}i.addEventListener("click",l=>{const c=l.target.closest("[data-news-id]");c&&s(c.dataset.newsId)}),e.addEventListener("click",l=>{l.target===e&&o()}),t.addEventListener("click",o),window.addEventListener("keydown",l=>{l.key==="Escape"&&o()})}const Kt={phone:"+998 77 203 80 00",phoneHref:"tel:+998772038000",address:"Ташкент, ул. Кары-Ниязи, 11, ЖК «Акай-Сити»",hours:"11:00–21:00, ежедневно",telegram:"https://t.me/lcdhuz",instagram:"https://www.instagram.com/lcdh.uz/"};function il(){const i=encodeURIComponent(Kt.address);return`
    <section class="contacts container" id="contact" data-reveal>
      <p class="eyebrow">Контакты</p>
      <h2>Приходите в гости</h2>
      <div class="contacts__grid">
        <div>
          <div class="contacts__line"><span class="label">Телефон</span><a href="${Kt.phoneHref}">${Kt.phone}</a></div>
          <div class="contacts__line"><span class="label">Адрес</span><span>${Kt.address}</span></div>
          <div class="contacts__line"><span class="label">Часы</span><span>${Kt.hours}</span></div>
          <div class="contacts__social">
            <a href="${Kt.telegram}" target="_blank" rel="noopener" aria-label="Telegram">TG</a>
            <a href="${Kt.instagram}" target="_blank" rel="noopener" aria-label="Instagram">IG</a>
          </div>
        </div>
        <div class="contacts__map">
          <iframe
            src="https://maps.google.com/maps?q=${i}&z=16&output=embed"
            title="Карта — ${Kt.address}"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </section>
  `}function al(){return`
    <footer class="site-footer container">
      <div class="site-footer__row">
        <p class="site-footer__brand">La Casa Del Habano Tashkent</p>
        <div class="site-footer__social">
          <a href="${Kt.telegram}" target="_blank" rel="noopener" aria-label="Telegram">TG</a>
          <a href="${Kt.instagram}" target="_blank" rel="noopener" aria-label="Instagram">IG</a>
        </div>
      </div>
      <p class="site-footer__meta">La Casa Del Habano Tashkent — прототип, Этап 1</p>
    </footer>
  `}function rl(){return`
    <div class="cart-backdrop" id="cart-backdrop"></div>
    <aside class="cart-drawer" id="cart-drawer" aria-label="Корзина" aria-hidden="true">
      <div class="cart-drawer__header">
        <h3>Ваш заказ</h3>
        <button type="button" class="cart-drawer__close" id="cart-close" aria-label="Закрыть корзину">✕</button>
      </div>
      <div class="cart-drawer__lines" id="cart-lines"></div>
      <div class="cart-drawer__footer">
        <div class="cart-drawer__total">
          <span>Итоговая сумма:</span>
          <span id="cart-total">0 UZS</span>
        </div>
        <form class="cart-form" id="cart-form">
          <div>
            <label for="cart-name">Имя</label>
            <input type="text" id="cart-name" name="name" autocomplete="name" />
          </div>
          <div>
            <label for="cart-phone">Телефон</label>
            <input type="tel" id="cart-phone" name="phone" autocomplete="tel" placeholder="+998 90 123 45 67" />
          </div>
          <p class="cart-form__error" id="cart-form-error">Заполните имя и телефон</p>
          <button type="submit" class="btn-solid" id="cart-submit">Заказать</button>
        </form>
        <div class="cart-drawer__success" id="cart-success">
          <p class="eyebrow">Заявка принята</p>
          <p>Это демо-прототип — заявка никуда не отправляется. На следующем этапе здесь будет реальная отправка в Telegram/Tilda.</p>
        </div>
      </div>
    </aside>
  `}function sl(){const i=document.getElementById("cart-backdrop"),e=document.getElementById("cart-drawer"),t=document.getElementById("cart-lines"),n=document.getElementById("cart-total"),a=document.getElementById("cart-close"),r=document.getElementById("cart-form"),s=document.getElementById("cart-form-error"),o=document.getElementById("cart-success");function l(){i.classList.add("is-open"),e.classList.add("is-open"),e.setAttribute("aria-hidden","false")}function c(){i.classList.remove("is-open"),e.classList.remove("is-open"),e.setAttribute("aria-hidden","true")}i.addEventListener("click",c),a.addEventListener("click",c),window.addEventListener("keydown",h=>{h.key==="Escape"&&c()});function f(){const h=un.getLines();if(h.length===0){t.innerHTML='<p class="cart-drawer__empty">Корзина пуста</p>',n.textContent=Ti(0,"UZS");return}o.classList.remove("is-visible"),r.classList.remove("is-hidden"),t.innerHTML=h.map(d=>{const m=Io(d.productId);if(!m)return"";const b=m.price?Ti(m.price.amount*d.qty,m.price.currency):"цена по запросу",v=m.name.toLowerCase().startsWith(m.brand.toLowerCase())?m.name:`${m.brand} ${m.name}`;return`
          <div class="cart-line" data-line="${d.productId}">
            <div class="cart-line__info">
              <div class="cart-line__name">${v}</div>
              <div class="cart-line__price">${b}</div>
            </div>
            <input type="number" min="1" class="cart-line__qty" data-qty-input value="${d.qty}" aria-label="Количество" />
            <button type="button" class="cart-line__remove" data-remove aria-label="Удалить">✕</button>
          </div>
        `}).join(""),n.textContent=Ti(un.getTotal(),"UZS")}return t.addEventListener("input",h=>{const d=h.target;if(!d.matches("[data-qty-input]"))return;const m=d.closest("[data-line]").dataset.line;un.updateQty(m,Number(d.value))}),t.addEventListener("click",h=>{const d=h.target.closest("[data-remove]");if(!d)return;const m=d.closest("[data-line]").dataset.line;un.remove(m)}),r.addEventListener("submit",h=>{h.preventDefault();const d=document.getElementById("cart-name").value.trim(),m=document.getElementById("cart-phone").value.trim();if(!d||!m){s.classList.add("is-visible");return}s.classList.remove("is-visible"),r.classList.add("is-hidden"),o.classList.add("is-visible"),un.clear()}),un.subscribe(f),f(),{open:l,close:c}}const ol=""+new URL("intro-video-BoVmdgXi.mp4",import.meta.url).href,As=""+new URL("intro-factory-Cq9CyUur.jpg",import.meta.url).href;function jr(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}let Un=null;function cl(){return Un||(Un=new IntersectionObserver(i=>{for(const e of i)e.isIntersecting&&(e.target.classList.add("is-visible"),Un==null||Un.unobserve(e.target))},{threshold:.15,rootMargin:"0px 0px -40px 0px"}),Un)}const ll=2500;function dl(i=document){const e=i.querySelectorAll("[data-reveal]");if(e.length===0)return;if(jr()){e.forEach(n=>n.classList.add("is-visible"));return}const t=cl();e.forEach(n=>t.observe(n)),window.setTimeout(()=>{e.forEach(n=>n.classList.add("is-visible"))},ll)}const ul=1200,fl=12e3;function hl(i){var o,l;document.documentElement.style.overflow="hidden";const e=document.createElement("div");e.className="intro-overlay",e.innerHTML=`
    <img class="intro-video-bg" src="${As}" alt="" aria-hidden="true" />
    <video
      class="intro-video-fg"
      src="${ol}"
      poster="${As}"
      autoplay
      muted
      playsinline
      preload="auto"
    ></video>
    <div class="intro-gate" role="dialog" aria-modal="true" aria-labelledby="age-gate-title">
      <div class="intro-gate-card">
        <p class="eyebrow">18+</p>
        <h2 id="age-gate-title">Вам есть 21 год?</h2>
        <p>Подтвердите свой возраст, чтобы продолжить</p>
        <div class="intro-gate-actions">
          <button type="button" class="btn-solid" id="age-yes">Да, есть 21 год</button>
          <button type="button" class="btn-outline" id="age-no">Нет, нету 21 года</button>
        </div>
      </div>
    </div>
    <div class="intro-denied">
      <p>Извините, вам отказано в посещении сайта</p>
    </div>
  `,document.body.prepend(e);const t=e.querySelector(".intro-video-fg");let n=!1;const a=()=>{n||(n=!0,e.classList.add("is-gate"))},r=()=>{e.classList.add("is-granted"),document.documentElement.style.overflow="",t.pause(),window.setTimeout(()=>e.remove(),600)},s=()=>{e.classList.add("is-denied"),t.pause()};if((o=e.querySelector("#age-yes"))==null||o.addEventListener("click",r),(l=e.querySelector("#age-no"))==null||l.addEventListener("click",s),jr()){t.remove(),window.setTimeout(a,ul);return}t.addEventListener("ended",a),t.addEventListener("error",a),window.setTimeout(a,fl),t.play().catch(a)}const pl=document.getElementById("app");pl.innerHTML=`
  ${Dc()}
  <main>
    ${Oc()}
    ${Hc()}
    ${Xc()}
    ${Yc()}
    ${tl()}
    ${il()}
  </main>
  ${al()}
  ${rl()}
`;const ml=sl();Bc(ml.open);kc();Cc(async()=>{const{initSphere:i}=await Promise.resolve().then(()=>dg);return{initSphere:i}},void 0,import.meta.url).then(({initSphere:i})=>i(document.getElementById("about-sphere")));Zc();nl();dl(document);hl();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Yr="185",gl=0,Rs=1,_l=2,ia=1,bl=2,Mi=3,Ln=0,Rt=1,fn=2,pn=0,oi=1,Cs=2,Ls=3,ws=4,xl=5,Fn=100,Sl=101,vl=102,yl=103,Ml=104,El=200,Tl=201,Al=202,Rl=203,rr=204,sr=205,Cl=206,Ll=207,wl=208,Ul=209,Il=210,Pl=211,Nl=212,Dl=213,Bl=214,or=0,cr=1,lr=2,di=3,dr=4,ur=5,fr=6,hr=7,Do=0,Fl=1,Ol=2,Jt=0,Bo=1,Fo=2,Oo=3,ko=4,Ho=5,zo=6,Go=7,Vo=300,zn=301,ui=302,Ta=303,Aa=304,ga=306,pr=1e3,hn=1001,mr=1002,bt=1003,kl=1004,Pi=1005,yt=1006,Ra=1007,kn=1008,Bt=1009,Wo=1010,Xo=1011,Ai=1012,$r=1013,tn=1014,Yt=1015,gn=1016,Jr=1017,Qr=1018,Ri=1020,Zo=35902,qo=35899,Ko=1021,jo=1022,Gt=1023,_n=1026,Hn=1027,Yo=1028,es=1029,Gn=1030,ts=1031,ns=1033,aa=33776,ra=33777,sa=33778,oa=33779,gr=35840,_r=35841,br=35842,xr=35843,Sr=36196,vr=37492,yr=37496,Mr=37488,Er=37489,la=37490,Tr=37491,Ar=37808,Rr=37809,Cr=37810,Lr=37811,wr=37812,Ur=37813,Ir=37814,Pr=37815,Nr=37816,Dr=37817,Br=37818,Fr=37819,Or=37820,kr=37821,Hr=36492,zr=36494,Gr=36495,Vr=36283,Wr=36284,da=36285,Xr=36286,Hl=3200,Us=0,zl=1,Rn="",Ut="srgb",ua="srgb-linear",fa="linear",qe="srgb",qn=7680,Is=519,Gl=512,Vl=513,Wl=514,is=515,Xl=516,Zl=517,as=518,ql=519,Ps=35044,Ns="300 es",$t=2e3,ha=2001;function Kl(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function pa(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function jl(){const i=pa("canvas");return i.style.display="block",i}const Ds={};function Bs(...i){const e="THREE."+i.shift();console.log(e,...i)}function $o(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Re(...i){i=$o(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function He(...i){i=$o(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function ci(...i){const e=i.join(" ");e in Ds||(Ds[e]=!0,Re(...i))}function Yl(i,e,t){return new Promise(function(n,a){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:a();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const $l={[or]:cr,[lr]:fr,[dr]:hr,[di]:ur,[cr]:or,[fr]:lr,[hr]:dr,[ur]:di};class Wn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const a=n[e];if(a!==void 0){const r=a.indexOf(t);r!==-1&&a.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const a=n.slice(0);for(let r=0,s=a.length;r<s;r++)a[r].call(this,e);e.target=null}}}const St=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ca=Math.PI/180,Zr=180/Math.PI;function Ci(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(St[i&255]+St[i>>8&255]+St[i>>16&255]+St[i>>24&255]+"-"+St[e&255]+St[e>>8&255]+"-"+St[e>>16&15|64]+St[e>>24&255]+"-"+St[t&63|128]+St[t>>8&255]+"-"+St[t>>16&255]+St[t>>24&255]+St[n&255]+St[n>>8&255]+St[n>>16&255]+St[n>>24&255]).toLowerCase()}function Fe(i,e,t){return Math.max(e,Math.min(t,i))}function Jl(i,e){return(i%e+e)%e}function La(i,e,t){return(1-t)*i+t*e}function gi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function At(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const ls=class ls{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6],this.y=a[1]*t+a[4]*n+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Fe(this.x,e.x,t.x),this.y=Fe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Fe(this.x,e,t),this.y=Fe(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Fe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Fe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),a=Math.sin(t),r=this.x-e.x,s=this.y-e.y;return this.x=r*n-s*a+e.x,this.y=r*a+s*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};ls.prototype.isVector2=!0;let We=ls;class pi{constructor(e=0,t=0,n=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=a}static slerpFlat(e,t,n,a,r,s,o){let l=n[a+0],c=n[a+1],f=n[a+2],h=n[a+3],d=r[s+0],m=r[s+1],b=r[s+2],v=r[s+3];if(h!==v||l!==d||c!==m||f!==b){let g=l*d+c*m+f*b+h*v;g<0&&(d=-d,m=-m,b=-b,v=-v,g=-g);let u=1-o;if(g<.9995){const E=Math.acos(g),R=Math.sin(E);u=Math.sin(u*E)/R,o=Math.sin(o*E)/R,l=l*u+d*o,c=c*u+m*o,f=f*u+b*o,h=h*u+v*o}else{l=l*u+d*o,c=c*u+m*o,f=f*u+b*o,h=h*u+v*o;const E=1/Math.sqrt(l*l+c*c+f*f+h*h);l*=E,c*=E,f*=E,h*=E}}e[t]=l,e[t+1]=c,e[t+2]=f,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,a,r,s){const o=n[a],l=n[a+1],c=n[a+2],f=n[a+3],h=r[s],d=r[s+1],m=r[s+2],b=r[s+3];return e[t]=o*b+f*h+l*m-c*d,e[t+1]=l*b+f*d+c*h-o*m,e[t+2]=c*b+f*m+o*d-l*h,e[t+3]=f*b-o*h-l*d-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,a){return this._x=e,this._y=t,this._z=n,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,a=e._y,r=e._z,s=e._order,o=Math.cos,l=Math.sin,c=o(n/2),f=o(a/2),h=o(r/2),d=l(n/2),m=l(a/2),b=l(r/2);switch(s){case"XYZ":this._x=d*f*h+c*m*b,this._y=c*m*h-d*f*b,this._z=c*f*b+d*m*h,this._w=c*f*h-d*m*b;break;case"YXZ":this._x=d*f*h+c*m*b,this._y=c*m*h-d*f*b,this._z=c*f*b-d*m*h,this._w=c*f*h+d*m*b;break;case"ZXY":this._x=d*f*h-c*m*b,this._y=c*m*h+d*f*b,this._z=c*f*b+d*m*h,this._w=c*f*h-d*m*b;break;case"ZYX":this._x=d*f*h-c*m*b,this._y=c*m*h+d*f*b,this._z=c*f*b-d*m*h,this._w=c*f*h+d*m*b;break;case"YZX":this._x=d*f*h+c*m*b,this._y=c*m*h+d*f*b,this._z=c*f*b-d*m*h,this._w=c*f*h-d*m*b;break;case"XZY":this._x=d*f*h-c*m*b,this._y=c*m*h-d*f*b,this._z=c*f*b+d*m*h,this._w=c*f*h+d*m*b;break;default:Re("Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,a=Math.sin(n);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],a=t[4],r=t[8],s=t[1],o=t[5],l=t[9],c=t[2],f=t[6],h=t[10],d=n+o+h;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(f-l)*m,this._y=(r-c)*m,this._z=(s-a)*m}else if(n>o&&n>h){const m=2*Math.sqrt(1+n-o-h);this._w=(f-l)/m,this._x=.25*m,this._y=(a+s)/m,this._z=(r+c)/m}else if(o>h){const m=2*Math.sqrt(1+o-n-h);this._w=(r-c)/m,this._x=(a+s)/m,this._y=.25*m,this._z=(l+f)/m}else{const m=2*Math.sqrt(1+h-n-o);this._w=(s-a)/m,this._x=(r+c)/m,this._y=(l+f)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Fe(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const a=Math.min(1,t/n);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,a=e._y,r=e._z,s=e._w,o=t._x,l=t._y,c=t._z,f=t._w;return this._x=n*f+s*o+a*c-r*l,this._y=a*f+s*l+r*o-n*c,this._z=r*f+s*c+n*l-a*o,this._w=s*f-n*o-a*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,a=e._y,r=e._z,s=e._w,o=this.dot(e);o<0&&(n=-n,a=-a,r=-r,s=-s,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),f=Math.sin(c);l=Math.sin(l*c)/f,t=Math.sin(t*c)/f,this._x=this._x*l+n*t,this._y=this._y*l+a*t,this._z=this._z*l+r*t,this._w=this._w*l+s*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+a*t,this._z=this._z*l+r*t,this._w=this._w*l+s*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),a=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(a*Math.sin(e),a*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const ds=class ds{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Fs.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Fs.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,a=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*a,this.y=r[1]*t+r[4]*n+r[7]*a,this.z=r[2]*t+r[5]*n+r[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,a=this.z,r=e.elements,s=1/(r[3]*t+r[7]*n+r[11]*a+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*a+r[12])*s,this.y=(r[1]*t+r[5]*n+r[9]*a+r[13])*s,this.z=(r[2]*t+r[6]*n+r[10]*a+r[14])*s,this}applyQuaternion(e){const t=this.x,n=this.y,a=this.z,r=e.x,s=e.y,o=e.z,l=e.w,c=2*(s*a-o*n),f=2*(o*t-r*a),h=2*(r*n-s*t);return this.x=t+l*c+s*h-o*f,this.y=n+l*f+o*c-r*h,this.z=a+l*h+r*f-s*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,a=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*a,this.y=r[1]*t+r[5]*n+r[9]*a,this.z=r[2]*t+r[6]*n+r[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Fe(this.x,e.x,t.x),this.y=Fe(this.y,e.y,t.y),this.z=Fe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Fe(this.x,e,t),this.y=Fe(this.y,e,t),this.z=Fe(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Fe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,a=e.y,r=e.z,s=t.x,o=t.y,l=t.z;return this.x=a*l-r*o,this.y=r*s-n*l,this.z=n*o-a*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return wa.copy(this).projectOnVector(e),this.sub(wa)}reflect(e){return this.sub(wa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Fe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,a=this.z-e.z;return t*t+n*n+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const a=Math.sin(t)*e;return this.x=a*Math.sin(n),this.y=Math.cos(t)*e,this.z=a*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};ds.prototype.isVector3=!0;let k=ds;const wa=new k,Fs=new pi,us=class us{constructor(e,t,n,a,r,s,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,a,r,s,o,l,c)}set(e,t,n,a,r,s,o,l,c){const f=this.elements;return f[0]=e,f[1]=a,f[2]=o,f[3]=t,f[4]=r,f[5]=l,f[6]=n,f[7]=s,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,a=t.elements,r=this.elements,s=n[0],o=n[3],l=n[6],c=n[1],f=n[4],h=n[7],d=n[2],m=n[5],b=n[8],v=a[0],g=a[3],u=a[6],E=a[1],R=a[4],S=a[7],A=a[2],y=a[5],C=a[8];return r[0]=s*v+o*E+l*A,r[3]=s*g+o*R+l*y,r[6]=s*u+o*S+l*C,r[1]=c*v+f*E+h*A,r[4]=c*g+f*R+h*y,r[7]=c*u+f*S+h*C,r[2]=d*v+m*E+b*A,r[5]=d*g+m*R+b*y,r[8]=d*u+m*S+b*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],a=e[2],r=e[3],s=e[4],o=e[5],l=e[6],c=e[7],f=e[8];return t*s*f-t*o*c-n*r*f+n*o*l+a*r*c-a*s*l}invert(){const e=this.elements,t=e[0],n=e[1],a=e[2],r=e[3],s=e[4],o=e[5],l=e[6],c=e[7],f=e[8],h=f*s-o*c,d=o*l-f*r,m=c*r-s*l,b=t*h+n*d+a*m;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/b;return e[0]=h*v,e[1]=(a*c-f*n)*v,e[2]=(o*n-a*s)*v,e[3]=d*v,e[4]=(f*t-a*l)*v,e[5]=(a*r-o*t)*v,e[6]=m*v,e[7]=(n*l-c*t)*v,e[8]=(s*t-n*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,a,r,s,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*s+c*o)+s+e,-a*c,a*l,-a*(-c*s+l*o)+o+t,0,0,1),this}scale(e,t){return ci("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ua.makeScale(e,t)),this}rotate(e){return ci("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ua.makeRotation(-e)),this}translate(e,t){return ci("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ua.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let a=0;a<9;a++)if(t[a]!==n[a])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};us.prototype.isMatrix3=!0;let Le=us;const Ua=new Le,Os=new Le().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ks=new Le().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ql(){const i={enabled:!0,workingColorSpace:ua,spaces:{},convert:function(a,r,s){return this.enabled===!1||r===s||!r||!s||(this.spaces[r].transfer===qe&&(a.r=mn(a.r),a.g=mn(a.g),a.b=mn(a.b)),this.spaces[r].primaries!==this.spaces[s].primaries&&(a.applyMatrix3(this.spaces[r].toXYZ),a.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===qe&&(a.r=li(a.r),a.g=li(a.g),a.b=li(a.b))),a},workingToColorSpace:function(a,r){return this.convert(a,this.workingColorSpace,r)},colorSpaceToWorking:function(a,r){return this.convert(a,r,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===Rn?fa:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,r=this.workingColorSpace){return a.fromArray(this.spaces[r].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,r,s){return a.copy(this.spaces[r].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,r){return ci("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(a,r)},toWorkingColorSpace:function(a,r){return ci("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(a,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ua]:{primaries:e,whitePoint:n,transfer:fa,toXYZ:Os,fromXYZ:ks,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ut},outputColorSpaceConfig:{drawingBufferColorSpace:Ut}},[Ut]:{primaries:e,whitePoint:n,transfer:qe,toXYZ:Os,fromXYZ:ks,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ut}}}),i}const Be=Ql();function mn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function li(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Kn;class ed{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Kn===void 0&&(Kn=pa("canvas")),Kn.width=e.width,Kn.height=e.height;const a=Kn.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),n=Kn}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=pa("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const a=n.getImageData(0,0,e.width,e.height),r=a.data;for(let s=0;s<r.length;s++)r[s]=mn(r[s]/255)*255;return n.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(mn(t[n]/255)*255):t[n]=mn(t[n]);return{data:t,width:e.width,height:e.height}}else return Re("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let td=0;class rs{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:td++}),this.uuid=Ci(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},a=this.data;if(a!==null){let r;if(Array.isArray(a)){r=[];for(let s=0,o=a.length;s<o;s++)a[s].isDataTexture?r.push(Ia(a[s].image)):r.push(Ia(a[s]))}else r=Ia(a);n.url=r}return t||(e.images[this.uuid]=n),n}}function Ia(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ed.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Re("Texture: Unable to serialize Texture."),{})}let nd=0;const Pa=new k;class Mt extends Wn{constructor(e=Mt.DEFAULT_IMAGE,t=Mt.DEFAULT_MAPPING,n=hn,a=hn,r=yt,s=kn,o=Gt,l=Bt,c=Mt.DEFAULT_ANISOTROPY,f=Rn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:nd++}),this.uuid=Ci(),this.name="",this.source=new rs(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=a,this.magFilter=r,this.minFilter=s,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new We(0,0),this.repeat=new We(1,1),this.center=new We(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Le,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Pa).x}get height(){return this.source.getSize(Pa).y}get depth(){return this.source.getSize(Pa).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Re(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){Re(`Texture.setValues(): property '${t}' does not exist.`);continue}a&&n&&a.isVector2&&n.isVector2||a&&n&&a.isVector3&&n.isVector3||a&&n&&a.isMatrix3&&n.isMatrix3?a.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Vo)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case pr:e.x=e.x-Math.floor(e.x);break;case hn:e.x=e.x<0?0:1;break;case mr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case pr:e.y=e.y-Math.floor(e.y);break;case hn:e.y=e.y<0?0:1;break;case mr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Mt.DEFAULT_IMAGE=null;Mt.DEFAULT_MAPPING=Vo;Mt.DEFAULT_ANISOTROPY=1;const fs=class fs{constructor(e=0,t=0,n=0,a=1){this.x=e,this.y=t,this.z=n,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,a){return this.x=e,this.y=t,this.z=n,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,a=this.z,r=this.w,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*a+s[12]*r,this.y=s[1]*t+s[5]*n+s[9]*a+s[13]*r,this.z=s[2]*t+s[6]*n+s[10]*a+s[14]*r,this.w=s[3]*t+s[7]*n+s[11]*a+s[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,a,r;const l=e.elements,c=l[0],f=l[4],h=l[8],d=l[1],m=l[5],b=l[9],v=l[2],g=l[6],u=l[10];if(Math.abs(f-d)<.01&&Math.abs(h-v)<.01&&Math.abs(b-g)<.01){if(Math.abs(f+d)<.1&&Math.abs(h+v)<.1&&Math.abs(b+g)<.1&&Math.abs(c+m+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const R=(c+1)/2,S=(m+1)/2,A=(u+1)/2,y=(f+d)/4,C=(h+v)/4,_=(b+g)/4;return R>S&&R>A?R<.01?(n=0,a=.707106781,r=.707106781):(n=Math.sqrt(R),a=y/n,r=C/n):S>A?S<.01?(n=.707106781,a=0,r=.707106781):(a=Math.sqrt(S),n=y/a,r=_/a):A<.01?(n=.707106781,a=.707106781,r=0):(r=Math.sqrt(A),n=C/r,a=_/r),this.set(n,a,r,t),this}let E=Math.sqrt((g-b)*(g-b)+(h-v)*(h-v)+(d-f)*(d-f));return Math.abs(E)<.001&&(E=1),this.x=(g-b)/E,this.y=(h-v)/E,this.z=(d-f)/E,this.w=Math.acos((c+m+u-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Fe(this.x,e.x,t.x),this.y=Fe(this.y,e.y,t.y),this.z=Fe(this.z,e.z,t.z),this.w=Fe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Fe(this.x,e,t),this.y=Fe(this.y,e,t),this.z=Fe(this.z,e,t),this.w=Fe(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Fe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};fs.prototype.isVector4=!0;let at=fs;class id extends Wn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new at(0,0,e,t),this.scissorTest=!1,this.viewport=new at(0,0,e,t),this.textures=[];const a={width:e,height:t,depth:n.depth},r=new Mt(a),s=n.count;for(let o=0;o<s;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:yt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let a=0,r=this.textures.length;a<r;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=n,this.textures[a].isData3DTexture!==!0&&(this.textures[a].isArrayTexture=this.textures[a].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const a=Object.assign({},e.textures[t].image);this.textures[t].source=new rs(a)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Qt extends id{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Jo extends Mt{constructor(e=null,t=1,n=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:a},this.magFilter=bt,this.minFilter=bt,this.wrapR=hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ad extends Mt{constructor(e=null,t=1,n=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:a},this.magFilter=bt,this.minFilter=bt,this.wrapR=hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ma=class ma{constructor(e,t,n,a,r,s,o,l,c,f,h,d,m,b,v,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,a,r,s,o,l,c,f,h,d,m,b,v,g)}set(e,t,n,a,r,s,o,l,c,f,h,d,m,b,v,g){const u=this.elements;return u[0]=e,u[4]=t,u[8]=n,u[12]=a,u[1]=r,u[5]=s,u[9]=o,u[13]=l,u[2]=c,u[6]=f,u[10]=h,u[14]=d,u[3]=m,u[7]=b,u[11]=v,u[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ma().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,a=1/jn.setFromMatrixColumn(e,0).length(),r=1/jn.setFromMatrixColumn(e,1).length(),s=1/jn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*a,t[1]=n[1]*a,t[2]=n[2]*a,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*s,t[9]=n[9]*s,t[10]=n[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,a=e.y,r=e.z,s=Math.cos(n),o=Math.sin(n),l=Math.cos(a),c=Math.sin(a),f=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const d=s*f,m=s*h,b=o*f,v=o*h;t[0]=l*f,t[4]=-l*h,t[8]=c,t[1]=m+b*c,t[5]=d-v*c,t[9]=-o*l,t[2]=v-d*c,t[6]=b+m*c,t[10]=s*l}else if(e.order==="YXZ"){const d=l*f,m=l*h,b=c*f,v=c*h;t[0]=d+v*o,t[4]=b*o-m,t[8]=s*c,t[1]=s*h,t[5]=s*f,t[9]=-o,t[2]=m*o-b,t[6]=v+d*o,t[10]=s*l}else if(e.order==="ZXY"){const d=l*f,m=l*h,b=c*f,v=c*h;t[0]=d-v*o,t[4]=-s*h,t[8]=b+m*o,t[1]=m+b*o,t[5]=s*f,t[9]=v-d*o,t[2]=-s*c,t[6]=o,t[10]=s*l}else if(e.order==="ZYX"){const d=s*f,m=s*h,b=o*f,v=o*h;t[0]=l*f,t[4]=b*c-m,t[8]=d*c+v,t[1]=l*h,t[5]=v*c+d,t[9]=m*c-b,t[2]=-c,t[6]=o*l,t[10]=s*l}else if(e.order==="YZX"){const d=s*l,m=s*c,b=o*l,v=o*c;t[0]=l*f,t[4]=v-d*h,t[8]=b*h+m,t[1]=h,t[5]=s*f,t[9]=-o*f,t[2]=-c*f,t[6]=m*h+b,t[10]=d-v*h}else if(e.order==="XZY"){const d=s*l,m=s*c,b=o*l,v=o*c;t[0]=l*f,t[4]=-h,t[8]=c*f,t[1]=d*h+v,t[5]=s*f,t[9]=m*h-b,t[2]=b*h-m,t[6]=o*f,t[10]=v*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(rd,e,sd)}lookAt(e,t,n){const a=this.elements;return Lt.subVectors(e,t),Lt.lengthSq()===0&&(Lt.z=1),Lt.normalize(),vn.crossVectors(n,Lt),vn.lengthSq()===0&&(Math.abs(n.z)===1?Lt.x+=1e-4:Lt.z+=1e-4,Lt.normalize(),vn.crossVectors(n,Lt)),vn.normalize(),Ni.crossVectors(Lt,vn),a[0]=vn.x,a[4]=Ni.x,a[8]=Lt.x,a[1]=vn.y,a[5]=Ni.y,a[9]=Lt.y,a[2]=vn.z,a[6]=Ni.z,a[10]=Lt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,a=t.elements,r=this.elements,s=n[0],o=n[4],l=n[8],c=n[12],f=n[1],h=n[5],d=n[9],m=n[13],b=n[2],v=n[6],g=n[10],u=n[14],E=n[3],R=n[7],S=n[11],A=n[15],y=a[0],C=a[4],_=a[8],T=a[12],P=a[1],w=a[5],D=a[9],X=a[13],q=a[2],O=a[6],Z=a[10],G=a[14],$=a[3],Q=a[7],de=a[11],pe=a[15];return r[0]=s*y+o*P+l*q+c*$,r[4]=s*C+o*w+l*O+c*Q,r[8]=s*_+o*D+l*Z+c*de,r[12]=s*T+o*X+l*G+c*pe,r[1]=f*y+h*P+d*q+m*$,r[5]=f*C+h*w+d*O+m*Q,r[9]=f*_+h*D+d*Z+m*de,r[13]=f*T+h*X+d*G+m*pe,r[2]=b*y+v*P+g*q+u*$,r[6]=b*C+v*w+g*O+u*Q,r[10]=b*_+v*D+g*Z+u*de,r[14]=b*T+v*X+g*G+u*pe,r[3]=E*y+R*P+S*q+A*$,r[7]=E*C+R*w+S*O+A*Q,r[11]=E*_+R*D+S*Z+A*de,r[15]=E*T+R*X+S*G+A*pe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],a=e[8],r=e[12],s=e[1],o=e[5],l=e[9],c=e[13],f=e[2],h=e[6],d=e[10],m=e[14],b=e[3],v=e[7],g=e[11],u=e[15],E=l*m-c*d,R=o*m-c*h,S=o*d-l*h,A=s*m-c*f,y=s*d-l*f,C=s*h-o*f;return t*(v*E-g*R+u*S)-n*(b*E-g*A+u*y)+a*(b*R-v*A+u*C)-r*(b*S-v*y+g*C)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],a=e[8],r=e[1],s=e[5],o=e[9],l=e[2],c=e[6],f=e[10];return t*(s*f-o*c)-n*(r*f-o*l)+a*(r*c-s*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],a=e[2],r=e[3],s=e[4],o=e[5],l=e[6],c=e[7],f=e[8],h=e[9],d=e[10],m=e[11],b=e[12],v=e[13],g=e[14],u=e[15],E=t*o-n*s,R=t*l-a*s,S=t*c-r*s,A=n*l-a*o,y=n*c-r*o,C=a*c-r*l,_=f*v-h*b,T=f*g-d*b,P=f*u-m*b,w=h*g-d*v,D=h*u-m*v,X=d*u-m*g,q=E*X-R*D+S*w+A*P-y*T+C*_;if(q===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/q;return e[0]=(o*X-l*D+c*w)*O,e[1]=(a*D-n*X-r*w)*O,e[2]=(v*C-g*y+u*A)*O,e[3]=(d*y-h*C-m*A)*O,e[4]=(l*P-s*X-c*T)*O,e[5]=(t*X-a*P+r*T)*O,e[6]=(g*S-b*C-u*R)*O,e[7]=(f*C-d*S+m*R)*O,e[8]=(s*D-o*P+c*_)*O,e[9]=(n*P-t*D-r*_)*O,e[10]=(b*y-v*S+u*E)*O,e[11]=(h*S-f*y-m*E)*O,e[12]=(o*T-s*w-l*_)*O,e[13]=(t*w-n*T+a*_)*O,e[14]=(v*R-b*A-g*E)*O,e[15]=(f*A-h*R+d*E)*O,this}scale(e){const t=this.elements,n=e.x,a=e.y,r=e.z;return t[0]*=n,t[4]*=a,t[8]*=r,t[1]*=n,t[5]*=a,t[9]*=r,t[2]*=n,t[6]*=a,t[10]*=r,t[3]*=n,t[7]*=a,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,a))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),a=Math.sin(t),r=1-n,s=e.x,o=e.y,l=e.z,c=r*s,f=r*o;return this.set(c*s+n,c*o-a*l,c*l+a*o,0,c*o+a*l,f*o+n,f*l-a*s,0,c*l-a*o,f*l+a*s,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,a,r,s){return this.set(1,n,r,0,e,1,s,0,t,a,1,0,0,0,0,1),this}compose(e,t,n){const a=this.elements,r=t._x,s=t._y,o=t._z,l=t._w,c=r+r,f=s+s,h=o+o,d=r*c,m=r*f,b=r*h,v=s*f,g=s*h,u=o*h,E=l*c,R=l*f,S=l*h,A=n.x,y=n.y,C=n.z;return a[0]=(1-(v+u))*A,a[1]=(m+S)*A,a[2]=(b-R)*A,a[3]=0,a[4]=(m-S)*y,a[5]=(1-(d+u))*y,a[6]=(g+E)*y,a[7]=0,a[8]=(b+R)*C,a[9]=(g-E)*C,a[10]=(1-(d+v))*C,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,n){const a=this.elements;e.x=a[12],e.y=a[13],e.z=a[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let s=jn.set(a[0],a[1],a[2]).length();const o=jn.set(a[4],a[5],a[6]).length(),l=jn.set(a[8],a[9],a[10]).length();r<0&&(s=-s),Ot.copy(this);const c=1/s,f=1/o,h=1/l;return Ot.elements[0]*=c,Ot.elements[1]*=c,Ot.elements[2]*=c,Ot.elements[4]*=f,Ot.elements[5]*=f,Ot.elements[6]*=f,Ot.elements[8]*=h,Ot.elements[9]*=h,Ot.elements[10]*=h,t.setFromRotationMatrix(Ot),n.x=s,n.y=o,n.z=l,this}makePerspective(e,t,n,a,r,s,o=$t,l=!1){const c=this.elements,f=2*r/(t-e),h=2*r/(n-a),d=(t+e)/(t-e),m=(n+a)/(n-a);let b,v;if(l)b=r/(s-r),v=s*r/(s-r);else if(o===$t)b=-(s+r)/(s-r),v=-2*s*r/(s-r);else if(o===ha)b=-s/(s-r),v=-s*r/(s-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=f,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=b,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,a,r,s,o=$t,l=!1){const c=this.elements,f=2/(t-e),h=2/(n-a),d=-(t+e)/(t-e),m=-(n+a)/(n-a);let b,v;if(l)b=1/(s-r),v=s/(s-r);else if(o===$t)b=-2/(s-r),v=-(s+r)/(s-r);else if(o===ha)b=-1/(s-r),v=-r/(s-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=f,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=h,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=b,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let a=0;a<16;a++)if(t[a]!==n[a])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};ma.prototype.isMatrix4=!0;let ut=ma;const jn=new k,Ot=new ut,rd=new k(0,0,0),sd=new k(1,1,1),vn=new k,Ni=new k,Lt=new k,Hs=new ut,zs=new pi;class Vn{constructor(e=0,t=0,n=0,a=Vn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,a=this._order){return this._x=e,this._y=t,this._z=n,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const a=e.elements,r=a[0],s=a[4],o=a[8],l=a[1],c=a[5],f=a[9],h=a[2],d=a[6],m=a[10];switch(t){case"XYZ":this._y=Math.asin(Fe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,m),this._z=Math.atan2(-s,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Fe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Fe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Fe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(Fe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Fe(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-f,m),this._y=0);break;default:Re("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Hs.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Hs,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return zs.setFromEuler(this),this.setFromQuaternion(zs,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Vn.DEFAULT_ORDER="XYZ";class Qo{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let od=0;const Gs=new k,Yn=new pi,sn=new ut,Di=new k,_i=new k,cd=new k,ld=new pi,Vs=new k(1,0,0),Ws=new k(0,1,0),Xs=new k(0,0,1),Zs={type:"added"},dd={type:"removed"},$n={type:"childadded",child:null},Na={type:"childremoved",child:null};class It extends Wn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:od++}),this.uuid=Ci(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=It.DEFAULT_UP.clone();const e=new k,t=new Vn,n=new pi,a=new k(1,1,1);function r(){n.setFromEuler(t,!1)}function s(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new ut},normalMatrix:{value:new Le}}),this.matrix=new ut,this.matrixWorld=new ut,this.matrixAutoUpdate=It.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=It.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Qo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Yn.setFromAxisAngle(e,t),this.quaternion.multiply(Yn),this}rotateOnWorldAxis(e,t){return Yn.setFromAxisAngle(e,t),this.quaternion.premultiply(Yn),this}rotateX(e){return this.rotateOnAxis(Vs,e)}rotateY(e){return this.rotateOnAxis(Ws,e)}rotateZ(e){return this.rotateOnAxis(Xs,e)}translateOnAxis(e,t){return Gs.copy(e).applyQuaternion(this.quaternion),this.position.add(Gs.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Vs,e)}translateY(e){return this.translateOnAxis(Ws,e)}translateZ(e){return this.translateOnAxis(Xs,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(sn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Di.copy(e):Di.set(e,t,n);const a=this.parent;this.updateWorldMatrix(!0,!1),_i.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?sn.lookAt(_i,Di,this.up):sn.lookAt(Di,_i,this.up),this.quaternion.setFromRotationMatrix(sn),a&&(sn.extractRotation(a.matrixWorld),Yn.setFromRotationMatrix(sn),this.quaternion.premultiply(Yn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(He("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Zs),$n.child=e,this.dispatchEvent($n),$n.child=null):He("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(dd),Na.child=e,this.dispatchEvent(Na),Na.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),sn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),sn.multiply(e.parent.matrixWorld)),e.applyMatrix4(sn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Zs),$n.child=e,this.dispatchEvent($n),$n.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,a=this.children.length;n<a;n++){const s=this.children[n].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const a=this.children;for(let r=0,s=a.length;r<s;r++)a[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_i,e,cd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_i,ld,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,a=t.length;n<a;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,a=t.length;n<a;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,a=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*a,r[13]+=n-r[1]*t-r[5]*n-r[9]*a,r[14]+=a-r[2]*t-r[6]*n-r[10]*a}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,a=t.length;n<a;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const a=this.parent;if(e===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),this.static!==!1&&(a.static=this.static),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.pivot!==null&&(a.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(o=>({...o})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(e),a.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));a.material=o}else a.material=r(e.materials,this.material);if(this.children.length>0){a.children=[];for(let o=0;o<this.children.length;o++)a.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];a.animations.push(r(e.animations,l))}}if(t){const o=s(e.geometries),l=s(e.materials),c=s(e.textures),f=s(e.images),h=s(e.shapes),d=s(e.skeletons),m=s(e.animations),b=s(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),f.length>0&&(n.images=f),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),b.length>0&&(n.nodes=b)}return n.object=a,n;function s(o){const l=[];for(const c in o){const f=o[c];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const a=e.children[n];this.add(a.clone())}return this}}It.DEFAULT_UP=new k(0,1,0);It.DEFAULT_MATRIX_AUTO_UPDATE=!0;It.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Bi extends It{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ud={type:"move"};class Da{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Bi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Bi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Bi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let a=null,r=null,s=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const v of e.hand.values()){const g=t.getJointPose(v,n),u=this._getHandJoint(c,v);g!==null&&(u.matrix.fromArray(g.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=g.radius),u.visible=g!==null}const f=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=f.position.distanceTo(h.position),m=.02,b=.005;c.inputState.pinching&&d>m+b?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=m-b&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(a=t.getPose(e.targetRaySpace,n),a===null&&r!==null&&(a=r),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ud)))}return o!==null&&(o.visible=a!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Bi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const ec={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},yn={h:0,s:0,l:0},Fi={h:0,s:0,l:0};function Ba(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Xe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ut){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Be.colorSpaceToWorking(this,t),this}setRGB(e,t,n,a=Be.workingColorSpace){return this.r=e,this.g=t,this.b=n,Be.colorSpaceToWorking(this,a),this}setHSL(e,t,n,a=Be.workingColorSpace){if(e=Jl(e,1),t=Fe(t,0,1),n=Fe(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,s=2*n-r;this.r=Ba(s,r,e+1/3),this.g=Ba(s,r,e),this.b=Ba(s,r,e-1/3)}return Be.colorSpaceToWorking(this,a),this}setStyle(e,t=Ut){function n(r){r!==void 0&&parseFloat(r)<1&&Re("Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const s=a[1],o=a[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Re("Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=a[1],s=r.length;if(s===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(r,16),t);Re("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ut){const n=ec[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Re("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=mn(e.r),this.g=mn(e.g),this.b=mn(e.b),this}copyLinearToSRGB(e){return this.r=li(e.r),this.g=li(e.g),this.b=li(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ut){return Be.workingToColorSpace(vt.copy(this),e),Math.round(Fe(vt.r*255,0,255))*65536+Math.round(Fe(vt.g*255,0,255))*256+Math.round(Fe(vt.b*255,0,255))}getHexString(e=Ut){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Be.workingColorSpace){Be.workingToColorSpace(vt.copy(this),t);const n=vt.r,a=vt.g,r=vt.b,s=Math.max(n,a,r),o=Math.min(n,a,r);let l,c;const f=(o+s)/2;if(o===s)l=0,c=0;else{const h=s-o;switch(c=f<=.5?h/(s+o):h/(2-s-o),s){case n:l=(a-r)/h+(a<r?6:0);break;case a:l=(r-n)/h+2;break;case r:l=(n-a)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=f,e}getRGB(e,t=Be.workingColorSpace){return Be.workingToColorSpace(vt.copy(this),t),e.r=vt.r,e.g=vt.g,e.b=vt.b,e}getStyle(e=Ut){Be.workingToColorSpace(vt.copy(this),e);const t=vt.r,n=vt.g,a=vt.b;return e!==Ut?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(a*255)})`}offsetHSL(e,t,n){return this.getHSL(yn),this.setHSL(yn.h+e,yn.s+t,yn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(yn),e.getHSL(Fi);const n=La(yn.h,Fi.h,t),a=La(yn.s,Fi.s,t),r=La(yn.l,Fi.l,t);return this.setHSL(n,a,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,a=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*a,this.g=r[1]*t+r[4]*n+r[7]*a,this.b=r[2]*t+r[5]*n+r[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const vt=new Xe;Xe.NAMES=ec;class fd extends It{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Vn,this.environmentIntensity=1,this.environmentRotation=new Vn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const kt=new k,on=new k,Fa=new k,cn=new k,Jn=new k,Qn=new k,qs=new k,Oa=new k,ka=new k,Ha=new k,za=new at,Ga=new at,Va=new at;class zt{constructor(e=new k,t=new k,n=new k){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,a){a.subVectors(n,t),kt.subVectors(e,t),a.cross(kt);const r=a.lengthSq();return r>0?a.multiplyScalar(1/Math.sqrt(r)):a.set(0,0,0)}static getBarycoord(e,t,n,a,r){kt.subVectors(a,t),on.subVectors(n,t),Fa.subVectors(e,t);const s=kt.dot(kt),o=kt.dot(on),l=kt.dot(Fa),c=on.dot(on),f=on.dot(Fa),h=s*c-o*o;if(h===0)return r.set(0,0,0),null;const d=1/h,m=(c*l-o*f)*d,b=(s*f-o*l)*d;return r.set(1-m-b,b,m)}static containsPoint(e,t,n,a){return this.getBarycoord(e,t,n,a,cn)===null?!1:cn.x>=0&&cn.y>=0&&cn.x+cn.y<=1}static getInterpolation(e,t,n,a,r,s,o,l){return this.getBarycoord(e,t,n,a,cn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,cn.x),l.addScaledVector(s,cn.y),l.addScaledVector(o,cn.z),l)}static getInterpolatedAttribute(e,t,n,a,r,s){return za.setScalar(0),Ga.setScalar(0),Va.setScalar(0),za.fromBufferAttribute(e,t),Ga.fromBufferAttribute(e,n),Va.fromBufferAttribute(e,a),s.setScalar(0),s.addScaledVector(za,r.x),s.addScaledVector(Ga,r.y),s.addScaledVector(Va,r.z),s}static isFrontFacing(e,t,n,a){return kt.subVectors(n,t),on.subVectors(e,t),kt.cross(on).dot(a)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,a){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,n,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return kt.subVectors(this.c,this.b),on.subVectors(this.a,this.b),kt.cross(on).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return zt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return zt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,a,r){return zt.getInterpolation(e,this.a,this.b,this.c,t,n,a,r)}containsPoint(e){return zt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return zt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,a=this.b,r=this.c;let s,o;Jn.subVectors(a,n),Qn.subVectors(r,n),Oa.subVectors(e,n);const l=Jn.dot(Oa),c=Qn.dot(Oa);if(l<=0&&c<=0)return t.copy(n);ka.subVectors(e,a);const f=Jn.dot(ka),h=Qn.dot(ka);if(f>=0&&h<=f)return t.copy(a);const d=l*h-f*c;if(d<=0&&l>=0&&f<=0)return s=l/(l-f),t.copy(n).addScaledVector(Jn,s);Ha.subVectors(e,r);const m=Jn.dot(Ha),b=Qn.dot(Ha);if(b>=0&&m<=b)return t.copy(r);const v=m*c-l*b;if(v<=0&&c>=0&&b<=0)return o=c/(c-b),t.copy(n).addScaledVector(Qn,o);const g=f*b-m*h;if(g<=0&&h-f>=0&&m-b>=0)return qs.subVectors(r,a),o=(h-f)/(h-f+(m-b)),t.copy(a).addScaledVector(qs,o);const u=1/(g+v+d);return s=v*u,o=d*u,t.copy(n).addScaledVector(Jn,s).addScaledVector(Qn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Li{constructor(e=new k(1/0,1/0,1/0),t=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Ht.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Ht.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Ht.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let s=0,o=r.count;s<o;s++)e.isMesh===!0?e.getVertexPosition(s,Ht):Ht.fromBufferAttribute(r,s),Ht.applyMatrix4(e.matrixWorld),this.expandByPoint(Ht);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Oi.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Oi.copy(n.boundingBox)),Oi.applyMatrix4(e.matrixWorld),this.union(Oi)}const a=e.children;for(let r=0,s=a.length;r<s;r++)this.expandByObject(a[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ht),Ht.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(bi),ki.subVectors(this.max,bi),ei.subVectors(e.a,bi),ti.subVectors(e.b,bi),ni.subVectors(e.c,bi),Mn.subVectors(ti,ei),En.subVectors(ni,ti),In.subVectors(ei,ni);let t=[0,-Mn.z,Mn.y,0,-En.z,En.y,0,-In.z,In.y,Mn.z,0,-Mn.x,En.z,0,-En.x,In.z,0,-In.x,-Mn.y,Mn.x,0,-En.y,En.x,0,-In.y,In.x,0];return!Wa(t,ei,ti,ni,ki)||(t=[1,0,0,0,1,0,0,0,1],!Wa(t,ei,ti,ni,ki))?!1:(Hi.crossVectors(Mn,En),t=[Hi.x,Hi.y,Hi.z],Wa(t,ei,ti,ni,ki))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ht).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ht).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ln[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ln[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ln[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ln[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ln[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ln[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ln[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ln[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ln),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ln=[new k,new k,new k,new k,new k,new k,new k,new k],Ht=new k,Oi=new Li,ei=new k,ti=new k,ni=new k,Mn=new k,En=new k,In=new k,bi=new k,ki=new k,Hi=new k,Pn=new k;function Wa(i,e,t,n,a){for(let r=0,s=i.length-3;r<=s;r+=3){Pn.fromArray(i,r);const o=a.x*Math.abs(Pn.x)+a.y*Math.abs(Pn.y)+a.z*Math.abs(Pn.z),l=e.dot(Pn),c=t.dot(Pn),f=n.dot(Pn);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>o)return!1}return!0}const dt=new k,zi=new We;let hd=0;class en extends Wn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:hd++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ps,this.updateRanges=[],this.gpuType=Yt,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let a=0,r=this.itemSize;a<r;a++)this.array[e+a]=t.array[n+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)zi.fromBufferAttribute(this,t),zi.applyMatrix3(e),this.setXY(t,zi.x,zi.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)dt.fromBufferAttribute(this,t),dt.applyMatrix3(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)dt.fromBufferAttribute(this,t),dt.applyMatrix4(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)dt.fromBufferAttribute(this,t),dt.applyNormalMatrix(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)dt.fromBufferAttribute(this,t),dt.transformDirection(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=gi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=At(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=gi(t,this.array)),t}setX(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=gi(t,this.array)),t}setY(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=gi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=gi(t,this.array)),t}setW(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),n=At(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,a){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),n=At(n,this.array),a=At(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=a,this}setXYZW(e,t,n,a,r){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),n=At(n,this.array),a=At(a,this.array),r=At(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=a,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ps&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class tc extends en{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class nc extends en{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Ft extends en{constructor(e,t,n){super(new Float32Array(e),t,n)}}const pd=new Li,xi=new k,Xa=new k;class ss{constructor(e=new k,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):pd.setFromPoints(e).getCenter(n);let a=0;for(let r=0,s=e.length;r<s;r++)a=Math.max(a,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;xi.subVectors(e,this.center);const t=xi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),a=(n-this.radius)*.5;this.center.addScaledVector(xi,a/n),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Xa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(xi.copy(e.center).add(Xa)),this.expandByPoint(xi.copy(e.center).sub(Xa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let md=0;const Nt=new ut,Za=new It,ii=new k,wt=new Li,Si=new Li,gt=new k;class rn extends Wn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:md++}),this.uuid=Ci(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Kl(e)?nc:tc)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Le().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Nt.makeRotationFromQuaternion(e),this.applyMatrix4(Nt),this}rotateX(e){return Nt.makeRotationX(e),this.applyMatrix4(Nt),this}rotateY(e){return Nt.makeRotationY(e),this.applyMatrix4(Nt),this}rotateZ(e){return Nt.makeRotationZ(e),this.applyMatrix4(Nt),this}translate(e,t,n){return Nt.makeTranslation(e,t,n),this.applyMatrix4(Nt),this}scale(e,t,n){return Nt.makeScale(e,t,n),this.applyMatrix4(Nt),this}lookAt(e){return Za.lookAt(e),Za.updateMatrix(),this.applyMatrix4(Za.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ii).negate(),this.translate(ii.x,ii.y,ii.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let a=0,r=e.length;a<r;a++){const s=e[a];n.push(s.x,s.y,s.z||0)}this.setAttribute("position",new Ft(n,3))}else{const n=Math.min(e.length,t.count);for(let a=0;a<n;a++){const r=e[a];t.setXYZ(a,r.x,r.y,r.z||0)}e.length>t.count&&Re("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Li);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){He("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,a=t.length;n<a;n++){const r=t[n];wt.setFromBufferAttribute(r),this.morphTargetsRelative?(gt.addVectors(this.boundingBox.min,wt.min),this.boundingBox.expandByPoint(gt),gt.addVectors(this.boundingBox.max,wt.max),this.boundingBox.expandByPoint(gt)):(this.boundingBox.expandByPoint(wt.min),this.boundingBox.expandByPoint(wt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&He('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ss);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){He("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){const n=this.boundingSphere.center;if(wt.setFromBufferAttribute(e),t)for(let r=0,s=t.length;r<s;r++){const o=t[r];Si.setFromBufferAttribute(o),this.morphTargetsRelative?(gt.addVectors(wt.min,Si.min),wt.expandByPoint(gt),gt.addVectors(wt.max,Si.max),wt.expandByPoint(gt)):(wt.expandByPoint(Si.min),wt.expandByPoint(Si.max))}wt.getCenter(n);let a=0;for(let r=0,s=e.count;r<s;r++)gt.fromBufferAttribute(e,r),a=Math.max(a,n.distanceToSquared(gt));if(t)for(let r=0,s=t.length;r<s;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,f=o.count;c<f;c++)gt.fromBufferAttribute(o,c),l&&(ii.fromBufferAttribute(e,c),gt.add(ii)),a=Math.max(a,n.distanceToSquared(gt))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&He('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){He("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,a=t.normal,r=t.uv;let s=this.getAttribute("tangent");(s===void 0||s.count!==n.count)&&(s=new en(new Float32Array(4*n.count),4),this.setAttribute("tangent",s));const o=[],l=[];for(let _=0;_<n.count;_++)o[_]=new k,l[_]=new k;const c=new k,f=new k,h=new k,d=new We,m=new We,b=new We,v=new k,g=new k;function u(_,T,P){c.fromBufferAttribute(n,_),f.fromBufferAttribute(n,T),h.fromBufferAttribute(n,P),d.fromBufferAttribute(r,_),m.fromBufferAttribute(r,T),b.fromBufferAttribute(r,P),f.sub(c),h.sub(c),m.sub(d),b.sub(d);const w=1/(m.x*b.y-b.x*m.y);isFinite(w)&&(v.copy(f).multiplyScalar(b.y).addScaledVector(h,-m.y).multiplyScalar(w),g.copy(h).multiplyScalar(m.x).addScaledVector(f,-b.x).multiplyScalar(w),o[_].add(v),o[T].add(v),o[P].add(v),l[_].add(g),l[T].add(g),l[P].add(g))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let _=0,T=E.length;_<T;++_){const P=E[_],w=P.start,D=P.count;for(let X=w,q=w+D;X<q;X+=3)u(e.getX(X+0),e.getX(X+1),e.getX(X+2))}const R=new k,S=new k,A=new k,y=new k;function C(_){A.fromBufferAttribute(a,_),y.copy(A);const T=o[_];R.copy(T),R.sub(A.multiplyScalar(A.dot(T))).normalize(),S.crossVectors(y,T);const w=S.dot(l[_])<0?-1:1;s.setXYZW(_,R.x,R.y,R.z,w)}for(let _=0,T=E.length;_<T;++_){const P=E[_],w=P.start,D=P.count;for(let X=w,q=w+D;X<q;X+=3)C(e.getX(X+0)),C(e.getX(X+1)),C(e.getX(X+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new en(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);const a=new k,r=new k,s=new k,o=new k,l=new k,c=new k,f=new k,h=new k;if(e)for(let d=0,m=e.count;d<m;d+=3){const b=e.getX(d+0),v=e.getX(d+1),g=e.getX(d+2);a.fromBufferAttribute(t,b),r.fromBufferAttribute(t,v),s.fromBufferAttribute(t,g),f.subVectors(s,r),h.subVectors(a,r),f.cross(h),o.fromBufferAttribute(n,b),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,g),o.add(f),l.add(f),c.add(f),n.setXYZ(b,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,m=t.count;d<m;d+=3)a.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),s.fromBufferAttribute(t,d+2),f.subVectors(s,r),h.subVectors(a,r),f.cross(h),n.setXYZ(d+0,f.x,f.y,f.z),n.setXYZ(d+1,f.x,f.y,f.z),n.setXYZ(d+2,f.x,f.y,f.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)gt.fromBufferAttribute(e,t),gt.normalize(),e.setXYZ(t,gt.x,gt.y,gt.z)}toNonIndexed(){function e(o,l){const c=o.array,f=o.itemSize,h=o.normalized,d=new c.constructor(l.length*f);let m=0,b=0;for(let v=0,g=l.length;v<g;v++){o.isInterleavedBufferAttribute?m=l[v]*o.data.stride+o.offset:m=l[v]*f;for(let u=0;u<f;u++)d[b++]=c[m++]}return new en(d,f,h)}if(this.index===null)return Re("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new rn,n=this.index.array,a=this.attributes;for(const o in a){const l=a[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let f=0,h=c.length;f<h;f++){const d=c[f],m=e(d,n);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,l=s.length;o<l;o++){const c=s[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const a={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],f=[];for(let h=0,d=c.length;h<d;h++){const m=c[h];f.push(m.toJSON(e.data))}f.length>0&&(a[l]=f,r=!0)}r&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const a=e.attributes;for(const c in a){const f=a[c];this.setAttribute(c,f.clone(t))}const r=e.morphAttributes;for(const c in r){const f=[],h=r[c];for(let d=0,m=h.length;d<m;d++)f.push(h[d].clone(t));this.morphAttributes[c]=f}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,f=s.length;c<f;c++){const h=s[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let gd=0;class _a extends Wn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:gd++}),this.uuid=Ci(),this.name="",this.type="Material",this.blending=oi,this.side=Ln,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=rr,this.blendDst=sr,this.blendEquation=Fn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xe(0,0,0),this.blendAlpha=0,this.depthFunc=di,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Is,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qn,this.stencilZFail=qn,this.stencilZPass=qn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Re(`Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){Re(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(n):a&&a.isVector2&&n&&n.isVector2||a&&a.isEuler&&n&&n.isEuler||a&&a.isVector3&&n&&n.isVector3?a.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==oi&&(n.blending=this.blending),this.side!==Ln&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==rr&&(n.blendSrc=this.blendSrc),this.blendDst!==sr&&(n.blendDst=this.blendDst),this.blendEquation!==Fn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==di&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Is&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==qn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==qn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==qn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function a(r){const s=[];for(const o in r){const l=r[o];delete l.metadata,s.push(l)}return s}if(t){const r=a(e.textures),s=a(e.images);r.length>0&&(n.textures=r),s.length>0&&(n.images=s)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Xe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new We().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new We().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const a=t.length;n=new Array(a);for(let r=0;r!==a;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const dn=new k,qa=new k,Gi=new k,Tn=new k,Ka=new k,Vi=new k,ja=new k;class _d{constructor(e=new k,t=new k(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,dn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=dn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(dn.copy(this.origin).addScaledVector(this.direction,t),dn.distanceToSquared(e))}distanceSqToSegment(e,t,n,a){qa.copy(e).add(t).multiplyScalar(.5),Gi.copy(t).sub(e).normalize(),Tn.copy(this.origin).sub(qa);const r=e.distanceTo(t)*.5,s=-this.direction.dot(Gi),o=Tn.dot(this.direction),l=-Tn.dot(Gi),c=Tn.lengthSq(),f=Math.abs(1-s*s);let h,d,m,b;if(f>0)if(h=s*l-o,d=s*o-l,b=r*f,h>=0)if(d>=-b)if(d<=b){const v=1/f;h*=v,d*=v,m=h*(h+s*d+2*o)+d*(s*h+d+2*l)+c}else d=r,h=Math.max(0,-(s*d+o)),m=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(s*d+o)),m=-h*h+d*(d+2*l)+c;else d<=-b?(h=Math.max(0,-(-s*r+o)),d=h>0?-r:Math.min(Math.max(-r,-l),r),m=-h*h+d*(d+2*l)+c):d<=b?(h=0,d=Math.min(Math.max(-r,-l),r),m=d*(d+2*l)+c):(h=Math.max(0,-(s*r+o)),d=h>0?r:Math.min(Math.max(-r,-l),r),m=-h*h+d*(d+2*l)+c);else d=s>0?-r:r,h=Math.max(0,-(s*d+o)),m=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),a&&a.copy(qa).addScaledVector(Gi,d),m}intersectSphere(e,t){dn.subVectors(e.center,this.origin);const n=dn.dot(this.direction),a=dn.dot(dn)-n*n,r=e.radius*e.radius;if(a>r)return null;const s=Math.sqrt(r-a),o=n-s,l=n+s;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,a,r,s,o,l;const c=1/this.direction.x,f=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,a=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,a=(e.min.x-d.x)*c),f>=0?(r=(e.min.y-d.y)*f,s=(e.max.y-d.y)*f):(r=(e.max.y-d.y)*f,s=(e.min.y-d.y)*f),n>s||r>a||((r>n||isNaN(n))&&(n=r),(s<a||isNaN(a))&&(a=s),h>=0?(o=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||o>a)||((o>n||n!==n)&&(n=o),(l<a||a!==a)&&(a=l),a<0)?null:this.at(n>=0?n:a,t)}intersectsBox(e){return this.intersectBox(e,dn)!==null}intersectTriangle(e,t,n,a,r){Ka.subVectors(t,e),Vi.subVectors(n,e),ja.crossVectors(Ka,Vi);let s=this.direction.dot(ja),o;if(s>0){if(a)return null;o=1}else if(s<0)o=-1,s=-s;else return null;Tn.subVectors(this.origin,e);const l=o*this.direction.dot(Vi.crossVectors(Tn,Vi));if(l<0)return null;const c=o*this.direction.dot(Ka.cross(Tn));if(c<0||l+c>s)return null;const f=-o*Tn.dot(ja);return f<0?null:this.at(f/s,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class os extends _a{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vn,this.combine=Do,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ks=new ut,Nn=new _d,Wi=new ss,js=new k,Xi=new k,Zi=new k,qi=new k,Ya=new k,Ki=new k,Ys=new k,ji=new k;class nn extends It{constructor(e=new rn,t=new os){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const a=t[n[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=a.length;r<s;r++){const o=a[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,a=n.attributes.position,r=n.morphAttributes.position,s=n.morphTargetsRelative;t.fromBufferAttribute(a,e);const o=this.morphTargetInfluences;if(r&&o){Ki.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const f=o[l],h=r[l];f!==0&&(Ya.fromBufferAttribute(h,e),s?Ki.addScaledVector(Ya,f):Ki.addScaledVector(Ya.sub(t),f))}t.add(Ki)}return t}raycast(e,t){const n=this.geometry,a=this.material,r=this.matrixWorld;a!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Wi.copy(n.boundingSphere),Wi.applyMatrix4(r),Nn.copy(e.ray).recast(e.near),!(Wi.containsPoint(Nn.origin)===!1&&(Nn.intersectSphere(Wi,js)===null||Nn.origin.distanceToSquared(js)>(e.far-e.near)**2))&&(Ks.copy(r).invert(),Nn.copy(e.ray).applyMatrix4(Ks),!(n.boundingBox!==null&&Nn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Nn)))}_computeIntersections(e,t,n){let a;const r=this.geometry,s=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,f=r.attributes.uv1,h=r.attributes.normal,d=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(s))for(let b=0,v=d.length;b<v;b++){const g=d[b],u=s[g.materialIndex],E=Math.max(g.start,m.start),R=Math.min(o.count,Math.min(g.start+g.count,m.start+m.count));for(let S=E,A=R;S<A;S+=3){const y=o.getX(S),C=o.getX(S+1),_=o.getX(S+2);a=Yi(this,u,e,n,c,f,h,y,C,_),a&&(a.faceIndex=Math.floor(S/3),a.face.materialIndex=g.materialIndex,t.push(a))}}else{const b=Math.max(0,m.start),v=Math.min(o.count,m.start+m.count);for(let g=b,u=v;g<u;g+=3){const E=o.getX(g),R=o.getX(g+1),S=o.getX(g+2);a=Yi(this,s,e,n,c,f,h,E,R,S),a&&(a.faceIndex=Math.floor(g/3),t.push(a))}}else if(l!==void 0)if(Array.isArray(s))for(let b=0,v=d.length;b<v;b++){const g=d[b],u=s[g.materialIndex],E=Math.max(g.start,m.start),R=Math.min(l.count,Math.min(g.start+g.count,m.start+m.count));for(let S=E,A=R;S<A;S+=3){const y=S,C=S+1,_=S+2;a=Yi(this,u,e,n,c,f,h,y,C,_),a&&(a.faceIndex=Math.floor(S/3),a.face.materialIndex=g.materialIndex,t.push(a))}}else{const b=Math.max(0,m.start),v=Math.min(l.count,m.start+m.count);for(let g=b,u=v;g<u;g+=3){const E=g,R=g+1,S=g+2;a=Yi(this,s,e,n,c,f,h,E,R,S),a&&(a.faceIndex=Math.floor(g/3),t.push(a))}}}}function bd(i,e,t,n,a,r,s,o){let l;if(e.side===Rt?l=n.intersectTriangle(s,r,a,!0,o):l=n.intersectTriangle(a,r,s,e.side===Ln,o),l===null)return null;ji.copy(o),ji.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(ji);return c<t.near||c>t.far?null:{distance:c,point:ji.clone(),object:i}}function Yi(i,e,t,n,a,r,s,o,l,c){i.getVertexPosition(o,Xi),i.getVertexPosition(l,Zi),i.getVertexPosition(c,qi);const f=bd(i,e,t,n,Xi,Zi,qi,Ys);if(f){const h=new k;zt.getBarycoord(Ys,Xi,Zi,qi,h),a&&(f.uv=zt.getInterpolatedAttribute(a,o,l,c,h,new We)),r&&(f.uv1=zt.getInterpolatedAttribute(r,o,l,c,h,new We)),s&&(f.normal=zt.getInterpolatedAttribute(s,o,l,c,h,new k),f.normal.dot(n.direction)>0&&f.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new k,materialIndex:0};zt.getNormal(Xi,Zi,qi,d.normal),f.face=d,f.barycoord=h}return f}class xd extends Mt{constructor(e=null,t=1,n=1,a,r,s,o,l,c=bt,f=bt,h,d){super(null,s,o,l,c,f,a,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const $a=new k,Sd=new k,vd=new Le;class Bn{constructor(e=new k(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,a){return this.normal.set(e,t,n),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const a=$a.subVectors(n,t).cross(Sd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const a=e.delta($a),r=this.normal.dot(a);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(s<0||s>1)?null:t.copy(e.start).addScaledVector(a,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||vd.getNormalMatrix(e),a=this.coplanarPoint($a).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-a.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Dn=new ss,yd=new We(.5,.5),$i=new k;class ic{constructor(e=new Bn,t=new Bn,n=new Bn,a=new Bn,r=new Bn,s=new Bn){this.planes=[e,t,n,a,r,s]}set(e,t,n,a,r,s){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(a),o[4].copy(r),o[5].copy(s),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=$t,n=!1){const a=this.planes,r=e.elements,s=r[0],o=r[1],l=r[2],c=r[3],f=r[4],h=r[5],d=r[6],m=r[7],b=r[8],v=r[9],g=r[10],u=r[11],E=r[12],R=r[13],S=r[14],A=r[15];if(a[0].setComponents(c-s,m-f,u-b,A-E).normalize(),a[1].setComponents(c+s,m+f,u+b,A+E).normalize(),a[2].setComponents(c+o,m+h,u+v,A+R).normalize(),a[3].setComponents(c-o,m-h,u-v,A-R).normalize(),n)a[4].setComponents(l,d,g,S).normalize(),a[5].setComponents(c-l,m-d,u-g,A-S).normalize();else if(a[4].setComponents(c-l,m-d,u-g,A-S).normalize(),t===$t)a[5].setComponents(c+l,m+d,u+g,A+S).normalize();else if(t===ha)a[5].setComponents(l,d,g,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Dn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Dn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Dn)}intersectsSprite(e){Dn.center.set(0,0,0);const t=yd.distanceTo(e.center);return Dn.radius=.7071067811865476+t,Dn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Dn)}intersectsSphere(e){const t=this.planes,n=e.center,a=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const a=t[n];if($i.x=a.normal.x>0?e.max.x:e.min.x,$i.y=a.normal.y>0?e.max.y:e.min.y,$i.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint($i)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ac extends Mt{constructor(e=[],t=zn,n,a,r,s,o,l,c,f){super(e,t,n,a,r,s,o,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Md extends Mt{constructor(e,t,n,a,r,s,o,l,c){super(e,t,n,a,r,s,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class fi extends Mt{constructor(e,t,n=tn,a,r,s,o=bt,l=bt,c,f=_n,h=1){if(f!==_n&&f!==Hn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:h};super(d,a,r,s,o,l,f,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new rs(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Ed extends fi{constructor(e,t=tn,n=zn,a,r,s=bt,o=bt,l,c=_n){const f={width:e,height:e,depth:1},h=[f,f,f,f,f,f];super(e,e,t,n,a,r,s,o,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class rc extends Mt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class wi extends rn{constructor(e=1,t=1,n=1,a=1,r=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:a,heightSegments:r,depthSegments:s};const o=this;a=Math.floor(a),r=Math.floor(r),s=Math.floor(s);const l=[],c=[],f=[],h=[];let d=0,m=0;b("z","y","x",-1,-1,n,t,e,s,r,0),b("z","y","x",1,-1,n,t,-e,s,r,1),b("x","z","y",1,1,e,n,t,a,s,2),b("x","z","y",1,-1,e,n,-t,a,s,3),b("x","y","z",1,-1,e,t,n,a,r,4),b("x","y","z",-1,-1,e,t,-n,a,r,5),this.setIndex(l),this.setAttribute("position",new Ft(c,3)),this.setAttribute("normal",new Ft(f,3)),this.setAttribute("uv",new Ft(h,2));function b(v,g,u,E,R,S,A,y,C,_,T){const P=S/C,w=A/_,D=S/2,X=A/2,q=y/2,O=C+1,Z=_+1;let G=0,$=0;const Q=new k;for(let de=0;de<Z;de++){const pe=de*w-X;for(let _e=0;_e<O;_e++){const ze=_e*P-D;Q[v]=ze*E,Q[g]=pe*R,Q[u]=q,c.push(Q.x,Q.y,Q.z),Q[v]=0,Q[g]=0,Q[u]=y>0?1:-1,f.push(Q.x,Q.y,Q.z),h.push(_e/C),h.push(1-de/_),G+=1}}for(let de=0;de<_;de++)for(let pe=0;pe<C;pe++){const _e=d+pe+O*de,ze=d+pe+O*(de+1),et=d+(pe+1)+O*(de+1),Ge=d+(pe+1)+O*de;l.push(_e,ze,Ge),l.push(ze,et,Ge),$+=6}o.addGroup(m,$,T),m+=$,d+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class ba extends rn{constructor(e=1,t=1,n=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:a};const r=e/2,s=t/2,o=Math.floor(n),l=Math.floor(a),c=o+1,f=l+1,h=e/o,d=t/l,m=[],b=[],v=[],g=[];for(let u=0;u<f;u++){const E=u*d-s;for(let R=0;R<c;R++){const S=R*h-r;b.push(S,-E,0),v.push(0,0,1),g.push(R/o),g.push(1-u/l)}}for(let u=0;u<l;u++)for(let E=0;E<o;E++){const R=E+c*u,S=E+c*(u+1),A=E+1+c*(u+1),y=E+1+c*u;m.push(R,S,y),m.push(S,A,y)}this.setIndex(m),this.setAttribute("position",new Ft(b,3)),this.setAttribute("normal",new Ft(v,3)),this.setAttribute("uv",new Ft(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ba(e.width,e.height,e.widthSegments,e.heightSegments)}}class cs extends rn{constructor(e=1,t=32,n=16,a=0,r=Math.PI*2,s=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:a,phiLength:r,thetaStart:s,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(s+o,Math.PI);let c=0;const f=[],h=new k,d=new k,m=[],b=[],v=[],g=[];for(let u=0;u<=n;u++){const E=[],R=u/n,S=s+R*o,A=e*Math.cos(S),y=Math.sqrt(e*e-A*A);let C=0;u===0&&s===0?C=.5/t:u===n&&l===Math.PI&&(C=-.5/t);for(let _=0;_<=t;_++){const T=_/t,P=a+T*r;h.x=-y*Math.cos(P),h.y=A,h.z=y*Math.sin(P),b.push(h.x,h.y,h.z),d.copy(h).normalize(),v.push(d.x,d.y,d.z),g.push(T+C,1-R),E.push(c++)}f.push(E)}for(let u=0;u<n;u++)for(let E=0;E<t;E++){const R=f[u][E+1],S=f[u][E],A=f[u+1][E],y=f[u+1][E+1];(u!==0||s>0)&&m.push(R,S,y),(u!==n-1||l<Math.PI)&&m.push(S,A,y)}this.setIndex(m),this.setAttribute("position",new Ft(b,3)),this.setAttribute("normal",new Ft(v,3)),this.setAttribute("uv",new Ft(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cs(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function hi(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const a=i[t][n];if($s(a))a.isRenderTargetTexture?(Re("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=a.clone();else if(Array.isArray(a))if($s(a[0])){const r=[];for(let s=0,o=a.length;s<o;s++)r[s]=a[s].clone();e[t][n]=r}else e[t][n]=a.slice();else e[t][n]=a}}return e}function Et(i){const e={};for(let t=0;t<i.length;t++){const n=hi(i[t]);for(const a in n)e[a]=n[a]}return e}function $s(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Td(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function sc(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Be.workingColorSpace}const Ad={clone:hi,merge:Et};var Rd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Cd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class an extends _a{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Rd,this.fragmentShader=Cd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=hi(e.uniforms),this.uniformsGroups=Td(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const s=this.uniforms[a].value;s&&s.isTexture?t.uniforms[a]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[a]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[a]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[a]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[a]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[a]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[a]={type:"m4",value:s.toArray()}:t.uniforms[a]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const a in this.extensions)this.extensions[a]===!0&&(n[a]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const a=e.uniforms[n];switch(this.uniforms[n]={},a.type){case"t":this.uniforms[n].value=t[a.value]||null;break;case"c":this.uniforms[n].value=new Xe().setHex(a.value);break;case"v2":this.uniforms[n].value=new We().fromArray(a.value);break;case"v3":this.uniforms[n].value=new k().fromArray(a.value);break;case"v4":this.uniforms[n].value=new at().fromArray(a.value);break;case"m3":this.uniforms[n].value=new Le().fromArray(a.value);break;case"m4":this.uniforms[n].value=new ut().fromArray(a.value);break;default:this.uniforms[n].value=a.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Ld extends an{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class wd extends _a{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Hl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ud extends _a{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Ji=new k,Qi=new pi,Zt=new k;class oc extends It{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ut,this.projectionMatrix=new ut,this.projectionMatrixInverse=new ut,this.coordinateSystem=$t,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ji,Qi,Zt),Zt.x===1&&Zt.y===1&&Zt.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ji,Qi,Zt.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Ji,Qi,Zt),Zt.x===1&&Zt.y===1&&Zt.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ji,Qi,Zt.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const An=new k,Js=new We,Qs=new We;class Dt extends oc{constructor(e=50,t=1,n=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Zr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ca*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Zr*2*Math.atan(Math.tan(Ca*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){An.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(An.x,An.y).multiplyScalar(-e/An.z),An.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(An.x,An.y).multiplyScalar(-e/An.z)}getViewSize(e,t){return this.getViewBounds(e,Js,Qs),t.subVectors(Qs,Js)}setViewOffset(e,t,n,a,r,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=a,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ca*.5*this.fov)/this.zoom,n=2*t,a=this.aspect*n,r=-.5*a;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;r+=s.offsetX*a/l,t-=s.offsetY*n/c,a*=s.width/l,n*=s.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+a,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class cc extends oc{constructor(e=-1,t=1,n=1,a=-1,r=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=a,this.near=r,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,a,r,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=a,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let r=n-e,s=n+e,o=a+t,l=a-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,s=r+c*this.view.width,o-=f*this.view.offsetY,l=o-f*this.view.height}this.projectionMatrix.makeOrthographic(r,s,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ai=-90,ri=1;class Id extends It{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new Dt(ai,ri,e,t);a.layers=this.layers,this.add(a);const r=new Dt(ai,ri,e,t);r.layers=this.layers,this.add(r);const s=new Dt(ai,ri,e,t);s.layers=this.layers,this.add(s);const o=new Dt(ai,ri,e,t);o.layers=this.layers,this.add(o);const l=new Dt(ai,ri,e,t);l.layers=this.layers,this.add(l);const c=new Dt(ai,ri,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,a,r,s,o,l]=t;for(const c of t)this.remove(c);if(e===$t)n.up.set(0,1,0),n.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ha)n.up.set(0,-1,0),n.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,s,o,l,c,f]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(n,0,a),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,a),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,2,a),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,a),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,a),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,a),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(h,d,m),e.xr.enabled=b,n.texture.needsPMREMUpdate=!0}}class Pd extends Dt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const hs=class hs{constructor(e,t,n,a){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,a)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,a){const r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=a,this}};hs.prototype.isMatrix2=!0;let eo=hs;function to(i,e,t,n){const a=Nd(n);switch(t){case Ko:return i*e;case Yo:return i*e/a.components*a.byteLength;case es:return i*e/a.components*a.byteLength;case Gn:return i*e*2/a.components*a.byteLength;case ts:return i*e*2/a.components*a.byteLength;case jo:return i*e*3/a.components*a.byteLength;case Gt:return i*e*4/a.components*a.byteLength;case ns:return i*e*4/a.components*a.byteLength;case aa:case ra:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case sa:case oa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case _r:case xr:return Math.max(i,16)*Math.max(e,8)/4;case gr:case br:return Math.max(i,8)*Math.max(e,8)/2;case Sr:case vr:case Mr:case Er:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case yr:case la:case Tr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ar:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Rr:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Cr:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Lr:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case wr:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Ur:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Ir:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Pr:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Nr:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Dr:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Br:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Fr:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Or:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case kr:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Hr:case zr:case Gr:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Vr:case Wr:return Math.ceil(i/4)*Math.ceil(e/4)*8;case da:case Xr:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Nd(i){switch(i){case Bt:case Wo:return{byteLength:1,components:1};case Ai:case Xo:case gn:return{byteLength:2,components:1};case Jr:case Qr:return{byteLength:2,components:4};case tn:case $r:case Yt:return{byteLength:4,components:1};case Zo:case qo:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Yr}}));typeof window<"u"&&(window.__THREE__?Re("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Yr);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function lc(){let i=null,e=!1,t=null,n=null;function a(r,s){t(r,s),n=i.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(a),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Dd(i){const e=new WeakMap;function t(o,l){const c=o.array,f=o.usage,h=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,f),o.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,c){const f=l.array,h=l.updateRanges;if(i.bindBuffer(c,o),h.length===0)i.bufferSubData(c,0,f);else{h.sort((m,b)=>m.start-b.start);let d=0;for(let m=1;m<h.length;m++){const b=h[d],v=h[m];v.start<=b.start+b.count+1?b.count=Math.max(b.count,v.start+v.count-b.start):(++d,h[d]=v)}h.length=d+1;for(let m=0,b=h.length;m<b;m++){const v=h[m];i.bufferSubData(c,v.start*f.BYTES_PER_ELEMENT,f,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function a(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function s(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const f=e.get(o);(!f||f.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:a,remove:r,update:s}}var Bd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Fd=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Od=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,kd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,zd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Gd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Vd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Wd=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Xd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Zd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,qd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Kd=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,jd=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Yd=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,$d=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Jd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Qd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,eu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,tu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,nu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,iu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,au=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,ru=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,su=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ou=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,cu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,lu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,du=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,uu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,fu="gl_FragColor = linearToOutputTexel( gl_FragColor );",hu=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,pu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,mu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,gu=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,_u=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,bu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,xu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Su=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,vu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,yu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Mu=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Eu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Tu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Au=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ru=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Cu=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Lu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,wu=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Uu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Iu=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Pu=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Nu=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Du=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Bu=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Fu=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ou=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,ku=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Hu=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zu=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gu=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Vu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Wu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Xu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Zu=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ku=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ju=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Yu=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$u=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ju=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Qu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ef=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,tf=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,nf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,af=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,sf=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,of=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,cf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,lf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,df=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,uf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ff=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,hf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,pf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,mf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,gf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_f=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,bf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,xf=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Sf=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,vf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,yf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Mf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ef=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Tf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Af=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Rf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Cf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Lf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,wf=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Uf=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,If=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Pf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Nf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Df=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Bf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ff=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Of=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hf=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Wf=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Xf=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Zf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,qf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Kf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jf=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Yf=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$f=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Jf=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qf=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,eh=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,th=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,nh=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ih=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ah=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,rh=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sh=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oh=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,ch=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lh=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dh=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uh=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,fh=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,hh=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ph=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,mh=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,gh=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Pe={alphahash_fragment:Bd,alphahash_pars_fragment:Fd,alphamap_fragment:Od,alphamap_pars_fragment:kd,alphatest_fragment:Hd,alphatest_pars_fragment:zd,aomap_fragment:Gd,aomap_pars_fragment:Vd,batching_pars_vertex:Wd,batching_vertex:Xd,begin_vertex:Zd,beginnormal_vertex:qd,bsdfs:Kd,iridescence_fragment:jd,bumpmap_pars_fragment:Yd,clipping_planes_fragment:$d,clipping_planes_pars_fragment:Jd,clipping_planes_pars_vertex:Qd,clipping_planes_vertex:eu,color_fragment:tu,color_pars_fragment:nu,color_pars_vertex:iu,color_vertex:au,common:ru,cube_uv_reflection_fragment:su,defaultnormal_vertex:ou,displacementmap_pars_vertex:cu,displacementmap_vertex:lu,emissivemap_fragment:du,emissivemap_pars_fragment:uu,colorspace_fragment:fu,colorspace_pars_fragment:hu,envmap_fragment:pu,envmap_common_pars_fragment:mu,envmap_pars_fragment:gu,envmap_pars_vertex:_u,envmap_physical_pars_fragment:Cu,envmap_vertex:bu,fog_vertex:xu,fog_pars_vertex:Su,fog_fragment:vu,fog_pars_fragment:yu,gradientmap_pars_fragment:Mu,lightmap_pars_fragment:Eu,lights_lambert_fragment:Tu,lights_lambert_pars_fragment:Au,lights_pars_begin:Ru,lights_toon_fragment:Lu,lights_toon_pars_fragment:wu,lights_phong_fragment:Uu,lights_phong_pars_fragment:Iu,lights_physical_fragment:Pu,lights_physical_pars_fragment:Nu,lights_fragment_begin:Du,lights_fragment_maps:Bu,lights_fragment_end:Fu,lightprobes_pars_fragment:Ou,logdepthbuf_fragment:ku,logdepthbuf_pars_fragment:Hu,logdepthbuf_pars_vertex:zu,logdepthbuf_vertex:Gu,map_fragment:Vu,map_pars_fragment:Wu,map_particle_fragment:Xu,map_particle_pars_fragment:Zu,metalnessmap_fragment:qu,metalnessmap_pars_fragment:Ku,morphinstance_vertex:ju,morphcolor_vertex:Yu,morphnormal_vertex:$u,morphtarget_pars_vertex:Ju,morphtarget_vertex:Qu,normal_fragment_begin:ef,normal_fragment_maps:tf,normal_pars_fragment:nf,normal_pars_vertex:af,normal_vertex:rf,normalmap_pars_fragment:sf,clearcoat_normal_fragment_begin:of,clearcoat_normal_fragment_maps:cf,clearcoat_pars_fragment:lf,iridescence_pars_fragment:df,opaque_fragment:uf,packing:ff,premultiplied_alpha_fragment:hf,project_vertex:pf,dithering_fragment:mf,dithering_pars_fragment:gf,roughnessmap_fragment:_f,roughnessmap_pars_fragment:bf,shadowmap_pars_fragment:xf,shadowmap_pars_vertex:Sf,shadowmap_vertex:vf,shadowmask_pars_fragment:yf,skinbase_vertex:Mf,skinning_pars_vertex:Ef,skinning_vertex:Tf,skinnormal_vertex:Af,specularmap_fragment:Rf,specularmap_pars_fragment:Cf,tonemapping_fragment:Lf,tonemapping_pars_fragment:wf,transmission_fragment:Uf,transmission_pars_fragment:If,uv_pars_fragment:Pf,uv_pars_vertex:Nf,uv_vertex:Df,worldpos_vertex:Bf,background_vert:Ff,background_frag:Of,backgroundCube_vert:kf,backgroundCube_frag:Hf,cube_vert:zf,cube_frag:Gf,depth_vert:Vf,depth_frag:Wf,distance_vert:Xf,distance_frag:Zf,equirect_vert:qf,equirect_frag:Kf,linedashed_vert:jf,linedashed_frag:Yf,meshbasic_vert:$f,meshbasic_frag:Jf,meshlambert_vert:Qf,meshlambert_frag:eh,meshmatcap_vert:th,meshmatcap_frag:nh,meshnormal_vert:ih,meshnormal_frag:ah,meshphong_vert:rh,meshphong_frag:sh,meshphysical_vert:oh,meshphysical_frag:ch,meshtoon_vert:lh,meshtoon_frag:dh,points_vert:uh,points_frag:fh,shadow_vert:hh,shadow_frag:ph,sprite_vert:mh,sprite_frag:gh},le={common:{diffuse:{value:new Xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Le},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Le}},envmap:{envMap:{value:null},envMapRotation:{value:new Le},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Le}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Le}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Le},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Le},normalScale:{value:new We(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Le},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Le}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Le}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Le}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new k},probesMax:{value:new k},probesResolution:{value:new k}},points:{diffuse:{value:new Xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0},uvTransform:{value:new Le}},sprite:{diffuse:{value:new Xe(16777215)},opacity:{value:1},center:{value:new We(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Le},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0}}},jt={basic:{uniforms:Et([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:Pe.meshbasic_vert,fragmentShader:Pe.meshbasic_frag},lambert:{uniforms:Et([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Xe(0)},envMapIntensity:{value:1}}]),vertexShader:Pe.meshlambert_vert,fragmentShader:Pe.meshlambert_frag},phong:{uniforms:Et([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Xe(0)},specular:{value:new Xe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Pe.meshphong_vert,fragmentShader:Pe.meshphong_frag},standard:{uniforms:Et([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new Xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Pe.meshphysical_vert,fragmentShader:Pe.meshphysical_frag},toon:{uniforms:Et([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new Xe(0)}}]),vertexShader:Pe.meshtoon_vert,fragmentShader:Pe.meshtoon_frag},matcap:{uniforms:Et([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:Pe.meshmatcap_vert,fragmentShader:Pe.meshmatcap_frag},points:{uniforms:Et([le.points,le.fog]),vertexShader:Pe.points_vert,fragmentShader:Pe.points_frag},dashed:{uniforms:Et([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Pe.linedashed_vert,fragmentShader:Pe.linedashed_frag},depth:{uniforms:Et([le.common,le.displacementmap]),vertexShader:Pe.depth_vert,fragmentShader:Pe.depth_frag},normal:{uniforms:Et([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:Pe.meshnormal_vert,fragmentShader:Pe.meshnormal_frag},sprite:{uniforms:Et([le.sprite,le.fog]),vertexShader:Pe.sprite_vert,fragmentShader:Pe.sprite_frag},background:{uniforms:{uvTransform:{value:new Le},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Pe.background_vert,fragmentShader:Pe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Le}},vertexShader:Pe.backgroundCube_vert,fragmentShader:Pe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Pe.cube_vert,fragmentShader:Pe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Pe.equirect_vert,fragmentShader:Pe.equirect_frag},distance:{uniforms:Et([le.common,le.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Pe.distance_vert,fragmentShader:Pe.distance_frag},shadow:{uniforms:Et([le.lights,le.fog,{color:{value:new Xe(0)},opacity:{value:1}}]),vertexShader:Pe.shadow_vert,fragmentShader:Pe.shadow_frag}};jt.physical={uniforms:Et([jt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Le},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Le},clearcoatNormalScale:{value:new We(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Le},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Le},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Le},sheen:{value:0},sheenColor:{value:new Xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Le},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Le},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Le},transmissionSamplerSize:{value:new We},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Le},attenuationDistance:{value:0},attenuationColor:{value:new Xe(0)},specularColor:{value:new Xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Le},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Le},anisotropyVector:{value:new We},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Le}}]),vertexShader:Pe.meshphysical_vert,fragmentShader:Pe.meshphysical_frag};const ea={r:0,b:0,g:0},_h=new ut,dc=new Le;dc.set(-1,0,0,0,1,0,0,0,1);function bh(i,e,t,n,a,r){const s=new Xe(0);let o=a===!0?0:1,l,c,f=null,h=0,d=null;function m(E){let R=E.isScene===!0?E.background:null;if(R&&R.isTexture){const S=E.backgroundBlurriness>0;R=e.get(R,S)}return R}function b(E){let R=!1;const S=m(E);S===null?g(s,o):S&&S.isColor&&(g(S,1),R=!0);const A=i.xr.getEnvironmentBlendMode();A==="additive"?t.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||R)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function v(E,R){const S=m(R);S&&(S.isCubeTexture||S.mapping===ga)?(c===void 0&&(c=new nn(new wi(1,1,1),new an({name:"BackgroundCubeMaterial",uniforms:hi(jt.backgroundCube.uniforms),vertexShader:jt.backgroundCube.vertexShader,fragmentShader:jt.backgroundCube.fragmentShader,side:Rt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,y,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=S,c.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(_h.makeRotationFromEuler(R.backgroundRotation)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(dc),c.material.toneMapped=Be.getTransfer(S.colorSpace)!==qe,(f!==S||h!==S.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,f=S,h=S.version,d=i.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new nn(new ba(2,2),new an({name:"BackgroundMaterial",uniforms:hi(jt.background.uniforms),vertexShader:jt.background.vertexShader,fragmentShader:jt.background.fragmentShader,side:Ln,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,l.material.toneMapped=Be.getTransfer(S.colorSpace)!==qe,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(f!==S||h!==S.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,f=S,h=S.version,d=i.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null))}function g(E,R){E.getRGB(ea,sc(i)),t.buffers.color.setClear(ea.r,ea.g,ea.b,R,r)}function u(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return s},setClearColor:function(E,R=1){s.set(E),o=R,g(s,o)},getClearAlpha:function(){return o},setClearAlpha:function(E){o=E,g(s,o)},render:b,addToRenderList:v,dispose:u}}function xh(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},a=d(null);let r=a,s=!1;function o(w,D,X,q,O){let Z=!1;const G=h(w,q,X,D);r!==G&&(r=G,c(r.object)),Z=m(w,q,X,O),Z&&b(w,q,X,O),O!==null&&e.update(O,i.ELEMENT_ARRAY_BUFFER),(Z||s)&&(s=!1,S(w,D,X,q),O!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function l(){return i.createVertexArray()}function c(w){return i.bindVertexArray(w)}function f(w){return i.deleteVertexArray(w)}function h(w,D,X,q){const O=q.wireframe===!0;let Z=n[D.id];Z===void 0&&(Z={},n[D.id]=Z);const G=w.isInstancedMesh===!0?w.id:0;let $=Z[G];$===void 0&&($={},Z[G]=$);let Q=$[X.id];Q===void 0&&(Q={},$[X.id]=Q);let de=Q[O];return de===void 0&&(de=d(l()),Q[O]=de),de}function d(w){const D=[],X=[],q=[];for(let O=0;O<t;O++)D[O]=0,X[O]=0,q[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:X,attributeDivisors:q,object:w,attributes:{},index:null}}function m(w,D,X,q){const O=r.attributes,Z=D.attributes;let G=0;const $=X.getAttributes();for(const Q in $)if($[Q].location>=0){const pe=O[Q];let _e=Z[Q];if(_e===void 0&&(Q==="instanceMatrix"&&w.instanceMatrix&&(_e=w.instanceMatrix),Q==="instanceColor"&&w.instanceColor&&(_e=w.instanceColor)),pe===void 0||pe.attribute!==_e||_e&&pe.data!==_e.data)return!0;G++}return r.attributesNum!==G||r.index!==q}function b(w,D,X,q){const O={},Z=D.attributes;let G=0;const $=X.getAttributes();for(const Q in $)if($[Q].location>=0){let pe=Z[Q];pe===void 0&&(Q==="instanceMatrix"&&w.instanceMatrix&&(pe=w.instanceMatrix),Q==="instanceColor"&&w.instanceColor&&(pe=w.instanceColor));const _e={};_e.attribute=pe,pe&&pe.data&&(_e.data=pe.data),O[Q]=_e,G++}r.attributes=O,r.attributesNum=G,r.index=q}function v(){const w=r.newAttributes;for(let D=0,X=w.length;D<X;D++)w[D]=0}function g(w){u(w,0)}function u(w,D){const X=r.newAttributes,q=r.enabledAttributes,O=r.attributeDivisors;X[w]=1,q[w]===0&&(i.enableVertexAttribArray(w),q[w]=1),O[w]!==D&&(i.vertexAttribDivisor(w,D),O[w]=D)}function E(){const w=r.newAttributes,D=r.enabledAttributes;for(let X=0,q=D.length;X<q;X++)D[X]!==w[X]&&(i.disableVertexAttribArray(X),D[X]=0)}function R(w,D,X,q,O,Z,G){G===!0?i.vertexAttribIPointer(w,D,X,O,Z):i.vertexAttribPointer(w,D,X,q,O,Z)}function S(w,D,X,q){v();const O=q.attributes,Z=X.getAttributes(),G=D.defaultAttributeValues;for(const $ in Z){const Q=Z[$];if(Q.location>=0){let de=O[$];if(de===void 0&&($==="instanceMatrix"&&w.instanceMatrix&&(de=w.instanceMatrix),$==="instanceColor"&&w.instanceColor&&(de=w.instanceColor)),de!==void 0){const pe=de.normalized,_e=de.itemSize,ze=e.get(de);if(ze===void 0)continue;const et=ze.buffer,Ge=ze.type,Y=ze.bytesPerElement,ie=Ge===i.INT||Ge===i.UNSIGNED_INT||de.gpuType===$r;if(de.isInterleavedBufferAttribute){const ee=de.data,Ce=ee.stride,we=de.offset;if(ee.isInstancedInterleavedBuffer){for(let Te=0;Te<Q.locationSize;Te++)u(Q.location+Te,ee.meshPerAttribute);w.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let Te=0;Te<Q.locationSize;Te++)g(Q.location+Te);i.bindBuffer(i.ARRAY_BUFFER,et);for(let Te=0;Te<Q.locationSize;Te++)R(Q.location+Te,_e/Q.locationSize,Ge,pe,Ce*Y,(we+_e/Q.locationSize*Te)*Y,ie)}else{if(de.isInstancedBufferAttribute){for(let ee=0;ee<Q.locationSize;ee++)u(Q.location+ee,de.meshPerAttribute);w.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let ee=0;ee<Q.locationSize;ee++)g(Q.location+ee);i.bindBuffer(i.ARRAY_BUFFER,et);for(let ee=0;ee<Q.locationSize;ee++)R(Q.location+ee,_e/Q.locationSize,Ge,pe,_e*Y,_e/Q.locationSize*ee*Y,ie)}}else if(G!==void 0){const pe=G[$];if(pe!==void 0)switch(pe.length){case 2:i.vertexAttrib2fv(Q.location,pe);break;case 3:i.vertexAttrib3fv(Q.location,pe);break;case 4:i.vertexAttrib4fv(Q.location,pe);break;default:i.vertexAttrib1fv(Q.location,pe)}}}}E()}function A(){T();for(const w in n){const D=n[w];for(const X in D){const q=D[X];for(const O in q){const Z=q[O];for(const G in Z)f(Z[G].object),delete Z[G];delete q[O]}}delete n[w]}}function y(w){if(n[w.id]===void 0)return;const D=n[w.id];for(const X in D){const q=D[X];for(const O in q){const Z=q[O];for(const G in Z)f(Z[G].object),delete Z[G];delete q[O]}}delete n[w.id]}function C(w){for(const D in n){const X=n[D];for(const q in X){const O=X[q];if(O[w.id]===void 0)continue;const Z=O[w.id];for(const G in Z)f(Z[G].object),delete Z[G];delete O[w.id]}}}function _(w){for(const D in n){const X=n[D],q=w.isInstancedMesh===!0?w.id:0,O=X[q];if(O!==void 0){for(const Z in O){const G=O[Z];for(const $ in G)f(G[$].object),delete G[$];delete O[Z]}delete X[q],Object.keys(X).length===0&&delete n[D]}}}function T(){P(),s=!0,r!==a&&(r=a,c(r.object))}function P(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:o,reset:T,resetDefaultState:P,dispose:A,releaseStatesOfGeometry:y,releaseStatesOfObject:_,releaseStatesOfProgram:C,initAttributes:v,enableAttribute:g,disableUnusedAttributes:E}}function Sh(i,e,t){let n;function a(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function s(l,c,f){f!==0&&(i.drawArraysInstanced(n,l,c,f),t.update(c,n,f))}function o(l,c,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,f);let d=0;for(let m=0;m<f;m++)d+=c[m];t.update(d,n,1)}this.setMode=a,this.render=r,this.renderInstances=s,this.renderMultiDraw=o}function vh(i,e,t,n){let a;function r(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");a=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function s(C){return!(C!==Gt&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const _=C===gn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Bt&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Yt&&!_)}function l(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const f=l(c);f!==c&&(Re("WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);const h=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&d===!1&&Re("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),b=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),u=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),R=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=i.getParameter(i.MAX_SAMPLES),y=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:m,maxVertexTextures:b,maxTextureSize:v,maxCubemapSize:g,maxAttributes:u,maxVertexUniforms:E,maxVaryings:R,maxFragmentUniforms:S,maxSamples:A,samples:y}}function yh(i){const e=this;let t=null,n=0,a=!1,r=!1;const s=new Bn,o=new Le,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const m=h.length!==0||d||n!==0||a;return a=d,n=h.length,m},this.beginShadows=function(){r=!0,f(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=f(h,d,0)},this.setState=function(h,d,m){const b=h.clippingPlanes,v=h.clipIntersection,g=h.clipShadows,u=i.get(h);if(!a||b===null||b.length===0||r&&!g)r?f(null):c();else{const E=r?0:n,R=E*4;let S=u.clippingState||null;l.value=S,S=f(b,d,R,m);for(let A=0;A!==R;++A)S[A]=t[A];u.clippingState=S,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function f(h,d,m,b){const v=h!==null?h.length:0;let g=null;if(v!==0){if(g=l.value,b!==!0||g===null){const u=m+v*4,E=d.matrixWorldInverse;o.getNormalMatrix(E),(g===null||g.length<u)&&(g=new Float32Array(u));for(let R=0,S=m;R!==v;++R,S+=4)s.copy(h[R]).applyMatrix4(E,o),s.normal.toArray(g,S),g[S+3]=s.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,g}}const Cn=4,no=[.125,.215,.35,.446,.526,.582],On=20,Mh=256,vi=new cc,io=new Xe;let Ja=null,Qa=0,er=0,tr=!1;const Eh=new k;class ao{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,a=100,r={}){const{size:s=256,position:o=Eh}=r;Ja=this._renderer.getRenderTarget(),Qa=this._renderer.getActiveCubeFace(),er=this._renderer.getActiveMipmapLevel(),tr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,a,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=oo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=so(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Ja,Qa,er),this._renderer.xr.enabled=tr,e.scissorTest=!1,si(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===zn||e.mapping===ui?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ja=this._renderer.getRenderTarget(),Qa=this._renderer.getActiveCubeFace(),er=this._renderer.getActiveMipmapLevel(),tr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:yt,minFilter:yt,generateMipmaps:!1,type:gn,format:Gt,colorSpace:ua,depthBuffer:!1},a=ro(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ro(e,t,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Th(r)),this._blurMaterial=Rh(r,e,t),this._ggxMaterial=Ah(r,e,t)}return a}_compileMaterial(e){const t=new nn(new rn,e);this._renderer.compile(t,vi)}_sceneToCubeUV(e,t,n,a,r){const l=new Dt(90,1,t,n),c=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,m=h.toneMapping;h.getClearColor(io),h.toneMapping=Jt,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(a),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new nn(new wi,new os({name:"PMREM.Background",side:Rt,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,g=v.material;let u=!1;const E=e.background;E?E.isColor&&(g.color.copy(E),e.background=null,u=!0):(g.color.copy(io),u=!0);for(let R=0;R<6;R++){const S=R%3;S===0?(l.up.set(0,c[R],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+f[R],r.y,r.z)):S===1?(l.up.set(0,0,c[R]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+f[R],r.z)):(l.up.set(0,c[R],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+f[R]));const A=this._cubeSize;si(a,S*A,R>2?A:0,A,A),h.setRenderTarget(a),u&&h.render(v,l),h.render(e,l)}h.toneMapping=m,h.autoClear=d,e.background=E}_textureToCubeUV(e,t){const n=this._renderer,a=e.mapping===zn||e.mapping===ui;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=oo()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=so());const r=a?this._cubemapMaterial:this._equirectMaterial,s=this._lodMeshes[0];s.material=r;const o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;si(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(s,vi)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const a=this._lodMeshes.length;for(let r=1;r<a;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){const a=this._renderer,r=this._pingPongRenderTarget,s=this._ggxMaterial,o=this._lodMeshes[n];o.material=s;const l=s.uniforms,c=n/(this._lodMeshes.length-1),f=t/(this._lodMeshes.length-1),h=Math.sqrt(c*c-f*f),d=0+c*1.25,m=h*d,{_lodMax:b}=this,v=this._sizeLods[n],g=3*v*(n>b-Cn?n-b+Cn:0),u=4*(this._cubeSize-v);l.envMap.value=e.texture,l.roughness.value=m,l.mipInt.value=b-t,si(r,g,u,3*v,2*v),a.setRenderTarget(r),a.render(o,vi),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=b-n,si(e,g,u,3*v,2*v),a.setRenderTarget(e),a.render(o,vi)}_blur(e,t,n,a,r){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,n,a,"latitudinal",r),this._halfBlur(s,e,n,n,a,"longitudinal",r)}_halfBlur(e,t,n,a,r,s,o){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&He("blur direction must be either latitudinal or longitudinal!");const f=3,h=this._lodMeshes[a];h.material=c;const d=c.uniforms,m=this._sizeLods[n]-1,b=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*On-1),v=r/b,g=isFinite(r)?1+Math.floor(f*v):On;g>On&&Re(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${On}`);const u=[];let E=0;for(let C=0;C<On;++C){const _=C/v,T=Math.exp(-_*_/2);u.push(T),C===0?E+=T:C<g&&(E+=2*T)}for(let C=0;C<u.length;C++)u[C]=u[C]/E;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=u,d.latitudinal.value=s==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:R}=this;d.dTheta.value=b,d.mipInt.value=R-n;const S=this._sizeLods[a],A=3*S*(a>R-Cn?a-R+Cn:0),y=4*(this._cubeSize-S);si(t,A,y,3*S,2*S),l.setRenderTarget(t),l.render(h,vi)}}function Th(i){const e=[],t=[],n=[];let a=i;const r=i-Cn+1+no.length;for(let s=0;s<r;s++){const o=Math.pow(2,a);e.push(o);let l=1/o;s>i-Cn?l=no[s-i+Cn-1]:s===0&&(l=0),t.push(l);const c=1/(o-2),f=-c,h=1+c,d=[f,f,h,f,h,h,f,f,h,h,f,h],m=6,b=6,v=3,g=2,u=1,E=new Float32Array(v*b*m),R=new Float32Array(g*b*m),S=new Float32Array(u*b*m);for(let y=0;y<m;y++){const C=y%3*2/3-1,_=y>2?0:-1,T=[C,_,0,C+2/3,_,0,C+2/3,_+1,0,C,_,0,C+2/3,_+1,0,C,_+1,0];E.set(T,v*b*y),R.set(d,g*b*y);const P=[y,y,y,y,y,y];S.set(P,u*b*y)}const A=new rn;A.setAttribute("position",new en(E,v)),A.setAttribute("uv",new en(R,g)),A.setAttribute("faceIndex",new en(S,u)),n.push(new nn(A,null)),a>Cn&&a--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function ro(i,e,t){const n=new Qt(i,e,t);return n.texture.mapping=ga,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function si(i,e,t,n,a){i.viewport.set(e,t,n,a),i.scissor.set(e,t,n,a)}function Ah(i,e,t){return new an({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Mh,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:xa(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:pn,depthTest:!1,depthWrite:!1})}function Rh(i,e,t){const n=new Float32Array(On),a=new k(0,1,0);return new an({name:"SphericalGaussianBlur",defines:{n:On,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:xa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:pn,depthTest:!1,depthWrite:!1})}function so(){return new an({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:pn,depthTest:!1,depthWrite:!1})}function oo(){return new an({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:pn,depthTest:!1,depthWrite:!1})}function xa(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class uc extends Qt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},a=[n,n,n,n,n,n];this.texture=new ac(a),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},a=new wi(5,5,5),r=new an({name:"CubemapFromEquirect",uniforms:hi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Rt,blending:pn});r.uniforms.tEquirect.value=t;const s=new nn(a,r),o=t.minFilter;return t.minFilter===kn&&(t.minFilter=yt),new Id(1,10,this).update(e,s),t.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,t=!0,n=!0,a=!0){const r=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,n,a);e.setRenderTarget(r)}}function Ch(i){let e=new WeakMap,t=new WeakMap,n=null;function a(d,m=!1){return d==null?null:m?s(d):r(d)}function r(d){if(d&&d.isTexture){const m=d.mapping;if(m===Ta||m===Aa)if(e.has(d)){const b=e.get(d).texture;return o(b,d.mapping)}else{const b=d.image;if(b&&b.height>0){const v=new uc(b.height);return v.fromEquirectangularTexture(i,d),e.set(d,v),d.addEventListener("dispose",c),o(v.texture,d.mapping)}else return null}}return d}function s(d){if(d&&d.isTexture){const m=d.mapping,b=m===Ta||m===Aa,v=m===zn||m===ui;if(b||v){let g=t.get(d);const u=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==u)return n===null&&(n=new ao(i)),g=b?n.fromEquirectangular(d,g):n.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),g.texture;if(g!==void 0)return g.texture;{const E=d.image;return b&&E&&E.height>0||v&&E&&l(E)?(n===null&&(n=new ao(i)),g=b?n.fromEquirectangular(d):n.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),d.addEventListener("dispose",f),g.texture):null}}}return d}function o(d,m){return m===Ta?d.mapping=zn:m===Aa&&(d.mapping=ui),d}function l(d){let m=0;const b=6;for(let v=0;v<b;v++)d[v]!==void 0&&m++;return m===b}function c(d){const m=d.target;m.removeEventListener("dispose",c);const b=e.get(m);b!==void 0&&(e.delete(m),b.dispose())}function f(d){const m=d.target;m.removeEventListener("dispose",f);const b=t.get(m);b!==void 0&&(t.delete(m),b.dispose())}function h(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:a,dispose:h}}function Lh(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const a=i.getExtension(n);return e[n]=a,a}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const a=t(n);return a===null&&ci("WebGLRenderer: "+n+" extension not supported."),a}}}function wh(i,e,t,n){const a={},r=new WeakMap;function s(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const b in d.attributes)e.remove(d.attributes[b]);d.removeEventListener("dispose",s),delete a[d.id];const m=r.get(d);m&&(e.remove(m),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return a[d.id]===!0||(d.addEventListener("dispose",s),a[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const m in d)e.update(d[m],i.ARRAY_BUFFER)}function c(h){const d=[],m=h.index,b=h.attributes.position;let v=0;if(b===void 0)return;if(m!==null){const E=m.array;v=m.version;for(let R=0,S=E.length;R<S;R+=3){const A=E[R+0],y=E[R+1],C=E[R+2];d.push(A,y,y,C,C,A)}}else{const E=b.array;v=b.version;for(let R=0,S=E.length/3-1;R<S;R+=3){const A=R+0,y=R+1,C=R+2;d.push(A,y,y,C,C,A)}}const g=new(b.count>=65535?nc:tc)(d,1);g.version=v;const u=r.get(h);u&&e.remove(u),r.set(h,g)}function f(h){const d=r.get(h);if(d){const m=h.index;m!==null&&d.version<m.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:f}}function Uh(i,e,t){let n;function a(h){n=h}let r,s;function o(h){r=h.type,s=h.bytesPerElement}function l(h,d){i.drawElements(n,d,r,h*s),t.update(d,n,1)}function c(h,d,m){m!==0&&(i.drawElementsInstanced(n,d,r,h*s,m),t.update(d,n,m))}function f(h,d,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,h,0,m);let v=0;for(let g=0;g<m;g++)v+=d[g];t.update(v,n,1)}this.setMode=a,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=f}function Ih(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,s,o){switch(t.calls++,s){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:He("WebGLInfo: Unknown draw mode:",s);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:n}}function Ph(i,e,t){const n=new WeakMap,a=new at;function r(s,o,l){const c=s.morphTargetInfluences,f=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=f!==void 0?f.length:0;let d=n.get(o);if(d===void 0||d.count!==h){let T=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",T)};d!==void 0&&d.texture.dispose();const m=o.morphAttributes.position!==void 0,b=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],u=o.morphAttributes.normal||[],E=o.morphAttributes.color||[];let R=0;m===!0&&(R=1),b===!0&&(R=2),v===!0&&(R=3);let S=o.attributes.position.count*R,A=1;S>e.maxTextureSize&&(A=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const y=new Float32Array(S*A*4*h),C=new Jo(y,S,A,h);C.type=Yt,C.needsUpdate=!0;const _=R*4;for(let P=0;P<h;P++){const w=g[P],D=u[P],X=E[P],q=S*A*4*P;for(let O=0;O<w.count;O++){const Z=O*_;m===!0&&(a.fromBufferAttribute(w,O),y[q+Z+0]=a.x,y[q+Z+1]=a.y,y[q+Z+2]=a.z,y[q+Z+3]=0),b===!0&&(a.fromBufferAttribute(D,O),y[q+Z+4]=a.x,y[q+Z+5]=a.y,y[q+Z+6]=a.z,y[q+Z+7]=0),v===!0&&(a.fromBufferAttribute(X,O),y[q+Z+8]=a.x,y[q+Z+9]=a.y,y[q+Z+10]=a.z,y[q+Z+11]=X.itemSize===4?a.w:1)}}d={count:h,texture:C,size:new We(S,A)},n.set(o,d),o.addEventListener("dispose",T)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",s.morphTexture,t);else{let m=0;for(let v=0;v<c.length;v++)m+=c[v];const b=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(i,"morphTargetBaseInfluence",b),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Nh(i,e,t,n,a){let r=new WeakMap;function s(c){const f=a.render.frame,h=c.geometry,d=e.get(c,h);if(r.get(d)!==f&&(e.update(d),r.set(d,f)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==f&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,f))),c.isSkinnedMesh){const m=c.skeleton;r.get(m)!==f&&(m.update(),r.set(m,f))}return d}function o(){r=new WeakMap}function l(c){const f=c.target;f.removeEventListener("dispose",l),n.releaseStatesOfObject(f),t.remove(f.instanceMatrix),f.instanceColor!==null&&t.remove(f.instanceColor)}return{update:s,dispose:o}}const Dh={[Bo]:"LINEAR_TONE_MAPPING",[Fo]:"REINHARD_TONE_MAPPING",[Oo]:"CINEON_TONE_MAPPING",[ko]:"ACES_FILMIC_TONE_MAPPING",[zo]:"AGX_TONE_MAPPING",[Go]:"NEUTRAL_TONE_MAPPING",[Ho]:"CUSTOM_TONE_MAPPING"};function Bh(i,e,t,n,a,r){const s=new Qt(e,t,{type:i,depthBuffer:a,stencilBuffer:r,samples:n?4:0,depthTexture:a?new fi(e,t):void 0}),o=new Qt(e,t,{type:gn,depthBuffer:!1,stencilBuffer:!1}),l=new rn;l.setAttribute("position",new Ft([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new Ft([0,2,0,0,2,0],2));const c=new Ld({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new nn(l,c),h=new cc(-1,1,1,-1,0,1);let d=null,m=null,b=!1,v,g=null,u=[],E=!1;this.setSize=function(R,S){s.setSize(R,S),o.setSize(R,S);for(let A=0;A<u.length;A++){const y=u[A];y.setSize&&y.setSize(R,S)}},this.setEffects=function(R){u=R,E=u.length>0&&u[0].isRenderPass===!0;const S=s.width,A=s.height;for(let y=0;y<u.length;y++){const C=u[y];C.setSize&&C.setSize(S,A)}},this.begin=function(R,S){if(b||R.toneMapping===Jt&&u.length===0)return!1;if(g=S,S!==null){const A=S.width,y=S.height;(s.width!==A||s.height!==y)&&this.setSize(A,y)}return E===!1&&R.setRenderTarget(s),v=R.toneMapping,R.toneMapping=Jt,!0},this.hasRenderPass=function(){return E},this.end=function(R,S){R.toneMapping=v,b=!0;let A=s,y=o;for(let C=0;C<u.length;C++){const _=u[C];if(_.enabled!==!1&&(_.render(R,y,A,S),_.needsSwap!==!1)){const T=A;A=y,y=T}}if(d!==R.outputColorSpace||m!==R.toneMapping){d=R.outputColorSpace,m=R.toneMapping,c.defines={},Be.getTransfer(d)===qe&&(c.defines.SRGB_TRANSFER="");const C=Dh[m];C&&(c.defines[C]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=A.texture,R.setRenderTarget(g),R.render(f,h),g=null,b=!1},this.isCompositing=function(){return b},this.dispose=function(){s.depthTexture&&s.depthTexture.dispose(),s.dispose(),o.dispose(),l.dispose(),c.dispose()}}const fc=new Mt,qr=new fi(1,1),hc=new Jo,pc=new ad,mc=new ac,co=[],lo=[],uo=new Float32Array(16),fo=new Float32Array(9),ho=new Float32Array(4);function mi(i,e,t){const n=i[0];if(n<=0||n>0)return i;const a=e*t;let r=co[a];if(r===void 0&&(r=new Float32Array(a),co[a]=r),e!==0){n.toArray(r,0);for(let s=1,o=0;s!==e;++s)o+=t,i[s].toArray(r,o)}return r}function ht(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function pt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Sa(i,e){let t=lo[e];t===void 0&&(t=new Int32Array(e),lo[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Fh(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Oh(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ht(t,e))return;i.uniform2fv(this.addr,e),pt(t,e)}}function kh(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ht(t,e))return;i.uniform3fv(this.addr,e),pt(t,e)}}function Hh(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ht(t,e))return;i.uniform4fv(this.addr,e),pt(t,e)}}function zh(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ht(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),pt(t,e)}else{if(ht(t,n))return;ho.set(n),i.uniformMatrix2fv(this.addr,!1,ho),pt(t,n)}}function Gh(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ht(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),pt(t,e)}else{if(ht(t,n))return;fo.set(n),i.uniformMatrix3fv(this.addr,!1,fo),pt(t,n)}}function Vh(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ht(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),pt(t,e)}else{if(ht(t,n))return;uo.set(n),i.uniformMatrix4fv(this.addr,!1,uo),pt(t,n)}}function Wh(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Xh(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ht(t,e))return;i.uniform2iv(this.addr,e),pt(t,e)}}function Zh(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ht(t,e))return;i.uniform3iv(this.addr,e),pt(t,e)}}function qh(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ht(t,e))return;i.uniform4iv(this.addr,e),pt(t,e)}}function Kh(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function jh(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ht(t,e))return;i.uniform2uiv(this.addr,e),pt(t,e)}}function Yh(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ht(t,e))return;i.uniform3uiv(this.addr,e),pt(t,e)}}function $h(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ht(t,e))return;i.uniform4uiv(this.addr,e),pt(t,e)}}function Jh(i,e,t){const n=this.cache,a=t.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a);let r;this.type===i.SAMPLER_2D_SHADOW?(qr.compareFunction=t.isReversedDepthBuffer()?as:is,r=qr):r=fc,t.setTexture2D(e||r,a)}function Qh(i,e,t){const n=this.cache,a=t.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a),t.setTexture3D(e||pc,a)}function ep(i,e,t){const n=this.cache,a=t.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a),t.setTextureCube(e||mc,a)}function tp(i,e,t){const n=this.cache,a=t.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a),t.setTexture2DArray(e||hc,a)}function np(i){switch(i){case 5126:return Fh;case 35664:return Oh;case 35665:return kh;case 35666:return Hh;case 35674:return zh;case 35675:return Gh;case 35676:return Vh;case 5124:case 35670:return Wh;case 35667:case 35671:return Xh;case 35668:case 35672:return Zh;case 35669:case 35673:return qh;case 5125:return Kh;case 36294:return jh;case 36295:return Yh;case 36296:return $h;case 35678:case 36198:case 36298:case 36306:case 35682:return Jh;case 35679:case 36299:case 36307:return Qh;case 35680:case 36300:case 36308:case 36293:return ep;case 36289:case 36303:case 36311:case 36292:return tp}}function ip(i,e){i.uniform1fv(this.addr,e)}function ap(i,e){const t=mi(e,this.size,2);i.uniform2fv(this.addr,t)}function rp(i,e){const t=mi(e,this.size,3);i.uniform3fv(this.addr,t)}function sp(i,e){const t=mi(e,this.size,4);i.uniform4fv(this.addr,t)}function op(i,e){const t=mi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function cp(i,e){const t=mi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function lp(i,e){const t=mi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function dp(i,e){i.uniform1iv(this.addr,e)}function up(i,e){i.uniform2iv(this.addr,e)}function fp(i,e){i.uniform3iv(this.addr,e)}function hp(i,e){i.uniform4iv(this.addr,e)}function pp(i,e){i.uniform1uiv(this.addr,e)}function mp(i,e){i.uniform2uiv(this.addr,e)}function gp(i,e){i.uniform3uiv(this.addr,e)}function _p(i,e){i.uniform4uiv(this.addr,e)}function bp(i,e,t){const n=this.cache,a=e.length,r=Sa(t,a);ht(n,r)||(i.uniform1iv(this.addr,r),pt(n,r));let s;this.type===i.SAMPLER_2D_SHADOW?s=qr:s=fc;for(let o=0;o!==a;++o)t.setTexture2D(e[o]||s,r[o])}function xp(i,e,t){const n=this.cache,a=e.length,r=Sa(t,a);ht(n,r)||(i.uniform1iv(this.addr,r),pt(n,r));for(let s=0;s!==a;++s)t.setTexture3D(e[s]||pc,r[s])}function Sp(i,e,t){const n=this.cache,a=e.length,r=Sa(t,a);ht(n,r)||(i.uniform1iv(this.addr,r),pt(n,r));for(let s=0;s!==a;++s)t.setTextureCube(e[s]||mc,r[s])}function vp(i,e,t){const n=this.cache,a=e.length,r=Sa(t,a);ht(n,r)||(i.uniform1iv(this.addr,r),pt(n,r));for(let s=0;s!==a;++s)t.setTexture2DArray(e[s]||hc,r[s])}function yp(i){switch(i){case 5126:return ip;case 35664:return ap;case 35665:return rp;case 35666:return sp;case 35674:return op;case 35675:return cp;case 35676:return lp;case 5124:case 35670:return dp;case 35667:case 35671:return up;case 35668:case 35672:return fp;case 35669:case 35673:return hp;case 5125:return pp;case 36294:return mp;case 36295:return gp;case 36296:return _p;case 35678:case 36198:case 36298:case 36306:case 35682:return bp;case 35679:case 36299:case 36307:return xp;case 35680:case 36300:case 36308:case 36293:return Sp;case 36289:case 36303:case 36311:case 36292:return vp}}class Mp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=np(t.type)}}class Ep{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=yp(t.type)}}class Tp{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const a=this.seq;for(let r=0,s=a.length;r!==s;++r){const o=a[r];o.setValue(e,t[o.id],n)}}}const nr=/(\w+)(\])?(\[|\.)?/g;function po(i,e){i.seq.push(e),i.map[e.id]=e}function Ap(i,e,t){const n=i.name,a=n.length;for(nr.lastIndex=0;;){const r=nr.exec(n),s=nr.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&s+2===a){po(t,c===void 0?new Mp(o,i,e):new Ep(o,i,e));break}else{let h=t.map[o];h===void 0&&(h=new Tp(o),po(t,h)),t=h}}}class ca{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const o=e.getActiveUniform(t,s),l=e.getUniformLocation(t,o.name);Ap(o,l,this)}const a=[],r=[];for(const s of this.seq)s.type===e.SAMPLER_2D_SHADOW||s.type===e.SAMPLER_CUBE_SHADOW||s.type===e.SAMPLER_2D_ARRAY_SHADOW?a.push(s):r.push(s);a.length>0&&(this.seq=a.concat(r))}setValue(e,t,n,a){const r=this.map[t];r!==void 0&&r.setValue(e,n,a)}setOptional(e,t,n){const a=t[n];a!==void 0&&this.setValue(e,n,a)}static upload(e,t,n,a){for(let r=0,s=t.length;r!==s;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,a)}}static seqWithValue(e,t){const n=[];for(let a=0,r=e.length;a!==r;++a){const s=e[a];s.id in t&&n.push(s)}return n}}function mo(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Rp=37297;let Cp=0;function Lp(i,e){const t=i.split(`
`),n=[],a=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let s=a;s<r;s++){const o=s+1;n.push(`${o===e?">":" "} ${o}: ${t[s]}`)}return n.join(`
`)}const go=new Le;function wp(i){Be._getMatrix(go,Be.workingColorSpace,i);const e=`mat3( ${go.elements.map(t=>t.toFixed(4))} )`;switch(Be.getTransfer(i)){case fa:return[e,"LinearTransferOETF"];case qe:return[e,"sRGBTransferOETF"];default:return Re("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function _o(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Lp(i.getShaderSource(e),o)}else return r}function Up(i,e){const t=wp(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const Ip={[Bo]:"Linear",[Fo]:"Reinhard",[Oo]:"Cineon",[ko]:"ACESFilmic",[zo]:"AgX",[Go]:"Neutral",[Ho]:"Custom"};function Pp(i,e){const t=Ip[e];return t===void 0?(Re("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ta=new k;function Np(){Be.getLuminanceCoefficients(ta);const i=ta.x.toFixed(4),e=ta.y.toFixed(4),t=ta.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Dp(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ei).join(`
`)}function Bp(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Fp(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let a=0;a<n;a++){const r=i.getActiveAttrib(e,a),s=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[s]={type:r.type,location:i.getAttribLocation(e,s),locationSize:o}}return t}function Ei(i){return i!==""}function bo(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function xo(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Op=/^[ \t]*#include +<([\w\d./]+)>/gm;function Kr(i){return i.replace(Op,Hp)}const kp=new Map;function Hp(i,e){let t=Pe[e];if(t===void 0){const n=kp.get(e);if(n!==void 0)t=Pe[n],Re('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Kr(t)}const zp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function So(i){return i.replace(zp,Gp)}function Gp(i,e,t,n){let a="";for(let r=parseInt(e);r<parseInt(t);r++)a+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return a}function vo(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const Vp={[ia]:"SHADOWMAP_TYPE_PCF",[Mi]:"SHADOWMAP_TYPE_VSM"};function Wp(i){return Vp[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Xp={[zn]:"ENVMAP_TYPE_CUBE",[ui]:"ENVMAP_TYPE_CUBE",[ga]:"ENVMAP_TYPE_CUBE_UV"};function Zp(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Xp[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const qp={[ui]:"ENVMAP_MODE_REFRACTION"};function Kp(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":qp[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const jp={[Do]:"ENVMAP_BLENDING_MULTIPLY",[Fl]:"ENVMAP_BLENDING_MIX",[Ol]:"ENVMAP_BLENDING_ADD"};function Yp(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":jp[i.combine]||"ENVMAP_BLENDING_NONE"}function $p(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Jp(i,e,t,n){const a=i.getContext(),r=t.defines;let s=t.vertexShader,o=t.fragmentShader;const l=Wp(t),c=Zp(t),f=Kp(t),h=Yp(t),d=$p(t),m=Dp(t),b=Bp(r),v=a.createProgram();let g,u,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b].filter(Ei).join(`
`),g.length>0&&(g+=`
`),u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b].filter(Ei).join(`
`),u.length>0&&(u+=`
`)):(g=[vo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ei).join(`
`),u=[vo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+f:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Jt?"#define TONE_MAPPING":"",t.toneMapping!==Jt?Pe.tonemapping_pars_fragment:"",t.toneMapping!==Jt?Pp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Pe.colorspace_pars_fragment,Up("linearToOutputTexel",t.outputColorSpace),Np(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ei).join(`
`)),s=Kr(s),s=bo(s,t),s=xo(s,t),o=Kr(o),o=bo(o,t),o=xo(o,t),s=So(s),o=So(o),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,g=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,u=["#define varying in",t.glslVersion===Ns?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ns?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const R=E+g+s,S=E+u+o,A=mo(a,a.VERTEX_SHADER,R),y=mo(a,a.FRAGMENT_SHADER,S);a.attachShader(v,A),a.attachShader(v,y),t.index0AttributeName!==void 0?a.bindAttribLocation(v,0,t.index0AttributeName):t.hasPositionAttribute===!0&&a.bindAttribLocation(v,0,"position"),a.linkProgram(v);function C(w){if(i.debug.checkShaderErrors){const D=a.getProgramInfoLog(v)||"",X=a.getShaderInfoLog(A)||"",q=a.getShaderInfoLog(y)||"",O=D.trim(),Z=X.trim(),G=q.trim();let $=!0,Q=!0;if(a.getProgramParameter(v,a.LINK_STATUS)===!1)if($=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(a,v,A,y);else{const de=_o(a,A,"vertex"),pe=_o(a,y,"fragment");He("WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(v,a.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+O+`
`+de+`
`+pe)}else O!==""?Re("WebGLProgram: Program Info Log:",O):(Z===""||G==="")&&(Q=!1);Q&&(w.diagnostics={runnable:$,programLog:O,vertexShader:{log:Z,prefix:g},fragmentShader:{log:G,prefix:u}})}a.deleteShader(A),a.deleteShader(y),_=new ca(a,v),T=Fp(a,v)}let _;this.getUniforms=function(){return _===void 0&&C(this),_};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let P=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=a.getProgramParameter(v,Rp)),P},this.destroy=function(){n.releaseStatesOfProgram(this),a.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Cp++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=A,this.fragmentShader=y,this}let Qp=0;class em{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const a=this._getShaderCacheForMaterial(e);return a.has(t)===!1&&(a.add(t),t.usedTimes++),a.has(n)===!1&&(a.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new tm(e),t.set(e,n)),n}}class tm{constructor(e){this.id=Qp++,this.code=e,this.usedTimes=0}}function nm(i){return i===Gn||i===la||i===da}function im(i,e,t,n,a,r){const s=new Qo,o=new em,l=new Set,c=[],f=new Map,h=n.logarithmicDepthBuffer;let d=n.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(_){return l.add(_),_===0?"uv":`uv${_}`}function v(_,T,P,w,D,X){const q=w.fog,O=D.geometry,Z=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?w.environment:null,G=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,$=e.get(_.envMap||Z,G),Q=$&&$.mapping===ga?$.image.height:null,de=m[_.type];_.precision!==null&&(d=n.getMaxPrecision(_.precision),d!==_.precision&&Re("WebGLProgram.getParameters:",_.precision,"not supported, using",d,"instead."));const pe=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,_e=pe!==void 0?pe.length:0;let ze=0;O.morphAttributes.position!==void 0&&(ze=1),O.morphAttributes.normal!==void 0&&(ze=2),O.morphAttributes.color!==void 0&&(ze=3);let et,Ge,Y,ie;if(de){const be=jt[de];et=be.vertexShader,Ge=be.fragmentShader}else{et=_.vertexShader,Ge=_.fragmentShader;const be=o.getVertexShaderStage(_),nt=o.getFragmentShaderStage(_);o.update(_,be,nt),Y=be.id,ie=nt.id}const ee=i.getRenderTarget(),Ce=i.state.buffers.depth.getReversed(),we=D.isInstancedMesh===!0,Te=D.isBatchedMesh===!0,rt=!!_.map,De=!!_.matcap,je=!!$,Ve=!!_.aoMap,Oe=!!_.lightMap,ct=!!_.bumpMap&&_.wireframe===!1,ft=!!_.normalMap,mt=!!_.displacementMap,_t=!!_.emissiveMap,tt=!!_.metalnessMap,lt=!!_.roughnessMap,U=_.anisotropy>0,Tt=_.clearcoat>0,Ze=_.dispersion>0,M=_.iridescence>0,p=_.sheen>0,N=_.transmission>0,H=U&&!!_.anisotropyMap,V=Tt&&!!_.clearcoatMap,te=Tt&&!!_.clearcoatNormalMap,ae=Tt&&!!_.clearcoatRoughnessMap,W=M&&!!_.iridescenceMap,j=M&&!!_.iridescenceThicknessMap,re=p&&!!_.sheenColorMap,ve=p&&!!_.sheenRoughnessMap,ce=!!_.specularMap,se=!!_.specularColorMap,Ee=!!_.specularIntensityMap,Ae=N&&!!_.transmissionMap,Ue=N&&!!_.thicknessMap,L=!!_.gradientMap,ne=!!_.alphaMap,K=_.alphaTest>0,oe=!!_.alphaHash,he=!!_.extensions;let J=Jt;_.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(J=i.toneMapping);const Se={shaderID:de,shaderType:_.type,shaderName:_.name,vertexShader:et,fragmentShader:Ge,defines:_.defines,customVertexShaderID:Y,customFragmentShaderID:ie,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:d,batching:Te,batchingColor:Te&&D._colorsTexture!==null,instancing:we,instancingColor:we&&D.instanceColor!==null,instancingMorph:we&&D.morphTexture!==null,outputColorSpace:ee===null?i.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:Be.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:rt,matcap:De,envMap:je,envMapMode:je&&$.mapping,envMapCubeUVHeight:Q,aoMap:Ve,lightMap:Oe,bumpMap:ct,normalMap:ft,displacementMap:mt,emissiveMap:_t,normalMapObjectSpace:ft&&_.normalMapType===zl,normalMapTangentSpace:ft&&_.normalMapType===Us,packedNormalMap:ft&&_.normalMapType===Us&&nm(_.normalMap.format),metalnessMap:tt,roughnessMap:lt,anisotropy:U,anisotropyMap:H,clearcoat:Tt,clearcoatMap:V,clearcoatNormalMap:te,clearcoatRoughnessMap:ae,dispersion:Ze,iridescence:M,iridescenceMap:W,iridescenceThicknessMap:j,sheen:p,sheenColorMap:re,sheenRoughnessMap:ve,specularMap:ce,specularColorMap:se,specularIntensityMap:Ee,transmission:N,transmissionMap:Ae,thicknessMap:Ue,gradientMap:L,opaque:_.transparent===!1&&_.blending===oi&&_.alphaToCoverage===!1,alphaMap:ne,alphaTest:K,alphaHash:oe,combine:_.combine,mapUv:rt&&b(_.map.channel),aoMapUv:Ve&&b(_.aoMap.channel),lightMapUv:Oe&&b(_.lightMap.channel),bumpMapUv:ct&&b(_.bumpMap.channel),normalMapUv:ft&&b(_.normalMap.channel),displacementMapUv:mt&&b(_.displacementMap.channel),emissiveMapUv:_t&&b(_.emissiveMap.channel),metalnessMapUv:tt&&b(_.metalnessMap.channel),roughnessMapUv:lt&&b(_.roughnessMap.channel),anisotropyMapUv:H&&b(_.anisotropyMap.channel),clearcoatMapUv:V&&b(_.clearcoatMap.channel),clearcoatNormalMapUv:te&&b(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ae&&b(_.clearcoatRoughnessMap.channel),iridescenceMapUv:W&&b(_.iridescenceMap.channel),iridescenceThicknessMapUv:j&&b(_.iridescenceThicknessMap.channel),sheenColorMapUv:re&&b(_.sheenColorMap.channel),sheenRoughnessMapUv:ve&&b(_.sheenRoughnessMap.channel),specularMapUv:ce&&b(_.specularMap.channel),specularColorMapUv:se&&b(_.specularColorMap.channel),specularIntensityMapUv:Ee&&b(_.specularIntensityMap.channel),transmissionMapUv:Ae&&b(_.transmissionMap.channel),thicknessMapUv:Ue&&b(_.thicknessMap.channel),alphaMapUv:ne&&b(_.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(ft||U),vertexNormals:!!O.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!O.attributes.uv&&(rt||ne),fog:!!q,useFog:_.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||O.attributes.normal===void 0&&ft===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:Ce,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:O.attributes.position!==void 0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:_e,morphTextureStride:ze,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:X.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:J,decodeVideoTexture:rt&&_.map.isVideoTexture===!0&&Be.getTransfer(_.map.colorSpace)===qe,decodeVideoTextureEmissive:_t&&_.emissiveMap.isVideoTexture===!0&&Be.getTransfer(_.emissiveMap.colorSpace)===qe,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===fn,flipSided:_.side===Rt,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:he&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(he&&_.extensions.multiDraw===!0||Te)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Se.vertexUv1s=l.has(1),Se.vertexUv2s=l.has(2),Se.vertexUv3s=l.has(3),l.clear(),Se}function g(_){const T=[];if(_.shaderID?T.push(_.shaderID):(T.push(_.customVertexShaderID),T.push(_.customFragmentShaderID)),_.defines!==void 0)for(const P in _.defines)T.push(P),T.push(_.defines[P]);return _.isRawShaderMaterial===!1&&(u(T,_),E(T,_),T.push(i.outputColorSpace)),T.push(_.customProgramCacheKey),T.join()}function u(_,T){_.push(T.precision),_.push(T.outputColorSpace),_.push(T.envMapMode),_.push(T.envMapCubeUVHeight),_.push(T.mapUv),_.push(T.alphaMapUv),_.push(T.lightMapUv),_.push(T.aoMapUv),_.push(T.bumpMapUv),_.push(T.normalMapUv),_.push(T.displacementMapUv),_.push(T.emissiveMapUv),_.push(T.metalnessMapUv),_.push(T.roughnessMapUv),_.push(T.anisotropyMapUv),_.push(T.clearcoatMapUv),_.push(T.clearcoatNormalMapUv),_.push(T.clearcoatRoughnessMapUv),_.push(T.iridescenceMapUv),_.push(T.iridescenceThicknessMapUv),_.push(T.sheenColorMapUv),_.push(T.sheenRoughnessMapUv),_.push(T.specularMapUv),_.push(T.specularColorMapUv),_.push(T.specularIntensityMapUv),_.push(T.transmissionMapUv),_.push(T.thicknessMapUv),_.push(T.combine),_.push(T.fogExp2),_.push(T.sizeAttenuation),_.push(T.morphTargetsCount),_.push(T.morphAttributeCount),_.push(T.numDirLights),_.push(T.numPointLights),_.push(T.numSpotLights),_.push(T.numSpotLightMaps),_.push(T.numHemiLights),_.push(T.numRectAreaLights),_.push(T.numDirLightShadows),_.push(T.numPointLightShadows),_.push(T.numSpotLightShadows),_.push(T.numSpotLightShadowsWithMaps),_.push(T.numLightProbes),_.push(T.shadowMapType),_.push(T.toneMapping),_.push(T.numClippingPlanes),_.push(T.numClipIntersection),_.push(T.depthPacking)}function E(_,T){s.disableAll(),T.instancing&&s.enable(0),T.instancingColor&&s.enable(1),T.instancingMorph&&s.enable(2),T.matcap&&s.enable(3),T.envMap&&s.enable(4),T.normalMapObjectSpace&&s.enable(5),T.normalMapTangentSpace&&s.enable(6),T.clearcoat&&s.enable(7),T.iridescence&&s.enable(8),T.alphaTest&&s.enable(9),T.vertexColors&&s.enable(10),T.vertexAlphas&&s.enable(11),T.vertexUv1s&&s.enable(12),T.vertexUv2s&&s.enable(13),T.vertexUv3s&&s.enable(14),T.vertexTangents&&s.enable(15),T.anisotropy&&s.enable(16),T.alphaHash&&s.enable(17),T.batching&&s.enable(18),T.dispersion&&s.enable(19),T.batchingColor&&s.enable(20),T.gradientMap&&s.enable(21),T.packedNormalMap&&s.enable(22),T.vertexNormals&&s.enable(23),_.push(s.mask),s.disableAll(),T.fog&&s.enable(0),T.useFog&&s.enable(1),T.flatShading&&s.enable(2),T.logarithmicDepthBuffer&&s.enable(3),T.reversedDepthBuffer&&s.enable(4),T.skinning&&s.enable(5),T.morphTargets&&s.enable(6),T.morphNormals&&s.enable(7),T.morphColors&&s.enable(8),T.premultipliedAlpha&&s.enable(9),T.shadowMapEnabled&&s.enable(10),T.doubleSided&&s.enable(11),T.flipSided&&s.enable(12),T.useDepthPacking&&s.enable(13),T.dithering&&s.enable(14),T.transmission&&s.enable(15),T.sheen&&s.enable(16),T.opaque&&s.enable(17),T.pointsUvs&&s.enable(18),T.decodeVideoTexture&&s.enable(19),T.decodeVideoTextureEmissive&&s.enable(20),T.alphaToCoverage&&s.enable(21),T.numLightProbeGrids>0&&s.enable(22),T.hasPositionAttribute&&s.enable(23),_.push(s.mask)}function R(_){const T=m[_.type];let P;if(T){const w=jt[T];P=Ad.clone(w.uniforms)}else P=_.uniforms;return P}function S(_,T){let P=f.get(T);return P!==void 0?++P.usedTimes:(P=new Jp(i,T,_,a),c.push(P),f.set(T,P)),P}function A(_){if(--_.usedTimes===0){const T=c.indexOf(_);c[T]=c[c.length-1],c.pop(),f.delete(_.cacheKey),_.destroy()}}function y(_){o.remove(_)}function C(){o.dispose()}return{getParameters:v,getProgramCacheKey:g,getUniforms:R,acquireProgram:S,releaseProgram:A,releaseShaderCache:y,programs:c,dispose:C}}function am(){let i=new WeakMap;function e(s){return i.has(s)}function t(s){let o=i.get(s);return o===void 0&&(o={},i.set(s,o)),o}function n(s){i.delete(s)}function a(s,o,l){i.get(s)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:a,dispose:r}}function rm(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function yo(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Mo(){const i=[];let e=0;const t=[],n=[],a=[];function r(){e=0,t.length=0,n.length=0,a.length=0}function s(d){let m=0;return d.isInstancedMesh&&(m+=2),d.isSkinnedMesh&&(m+=1),m}function o(d,m,b,v,g,u){let E=i[e];return E===void 0?(E={id:d.id,object:d,geometry:m,material:b,materialVariant:s(d),groupOrder:v,renderOrder:d.renderOrder,z:g,group:u},i[e]=E):(E.id=d.id,E.object=d,E.geometry=m,E.material=b,E.materialVariant=s(d),E.groupOrder=v,E.renderOrder=d.renderOrder,E.z=g,E.group=u),e++,E}function l(d,m,b,v,g,u){const E=o(d,m,b,v,g,u);b.transmission>0?n.push(E):b.transparent===!0?a.push(E):t.push(E)}function c(d,m,b,v,g,u){const E=o(d,m,b,v,g,u);b.transmission>0?n.unshift(E):b.transparent===!0?a.unshift(E):t.unshift(E)}function f(d,m,b){t.length>1&&t.sort(d||rm),n.length>1&&n.sort(m||yo),a.length>1&&a.sort(m||yo),b&&(t.reverse(),n.reverse(),a.reverse())}function h(){for(let d=e,m=i.length;d<m;d++){const b=i[d];if(b.id===null)break;b.id=null,b.object=null,b.geometry=null,b.material=null,b.group=null}}return{opaque:t,transmissive:n,transparent:a,init:r,push:l,unshift:c,finish:h,sort:f}}function sm(){let i=new WeakMap;function e(n,a){const r=i.get(n);let s;return r===void 0?(s=new Mo,i.set(n,[s])):a>=r.length?(s=new Mo,r.push(s)):s=r[a],s}function t(){i=new WeakMap}return{get:e,dispose:t}}function om(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new k,color:new Xe};break;case"SpotLight":t={position:new k,direction:new k,color:new Xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new k,color:new Xe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new k,skyColor:new Xe,groundColor:new Xe};break;case"RectAreaLight":t={color:new Xe,position:new k,halfWidth:new k,halfHeight:new k};break}return i[e.id]=t,t}}}function cm(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let lm=0;function dm(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function um(i){const e=new om,t=cm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new k);const a=new k,r=new ut,s=new ut;function o(c){let f=0,h=0,d=0;for(let T=0;T<9;T++)n.probe[T].set(0,0,0);let m=0,b=0,v=0,g=0,u=0,E=0,R=0,S=0,A=0,y=0,C=0;c.sort(dm);for(let T=0,P=c.length;T<P;T++){const w=c[T],D=w.color,X=w.intensity,q=w.distance;let O=null;if(w.shadow&&w.shadow.map&&(w.shadow.map.texture.format===Gn?O=w.shadow.map.texture:O=w.shadow.map.depthTexture||w.shadow.map.texture),w.isAmbientLight)f+=D.r*X,h+=D.g*X,d+=D.b*X;else if(w.isLightProbe){for(let Z=0;Z<9;Z++)n.probe[Z].addScaledVector(w.sh.coefficients[Z],X);C++}else if(w.isDirectionalLight){const Z=e.get(w);if(Z.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const G=w.shadow,$=t.get(w);$.shadowIntensity=G.intensity,$.shadowBias=G.bias,$.shadowNormalBias=G.normalBias,$.shadowRadius=G.radius,$.shadowMapSize=G.mapSize,n.directionalShadow[m]=$,n.directionalShadowMap[m]=O,n.directionalShadowMatrix[m]=w.shadow.matrix,E++}n.directional[m]=Z,m++}else if(w.isSpotLight){const Z=e.get(w);Z.position.setFromMatrixPosition(w.matrixWorld),Z.color.copy(D).multiplyScalar(X),Z.distance=q,Z.coneCos=Math.cos(w.angle),Z.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),Z.decay=w.decay,n.spot[v]=Z;const G=w.shadow;if(w.map&&(n.spotLightMap[A]=w.map,A++,G.updateMatrices(w),w.castShadow&&y++),n.spotLightMatrix[v]=G.matrix,w.castShadow){const $=t.get(w);$.shadowIntensity=G.intensity,$.shadowBias=G.bias,$.shadowNormalBias=G.normalBias,$.shadowRadius=G.radius,$.shadowMapSize=G.mapSize,n.spotShadow[v]=$,n.spotShadowMap[v]=O,S++}v++}else if(w.isRectAreaLight){const Z=e.get(w);Z.color.copy(D).multiplyScalar(X),Z.halfWidth.set(w.width*.5,0,0),Z.halfHeight.set(0,w.height*.5,0),n.rectArea[g]=Z,g++}else if(w.isPointLight){const Z=e.get(w);if(Z.color.copy(w.color).multiplyScalar(w.intensity),Z.distance=w.distance,Z.decay=w.decay,w.castShadow){const G=w.shadow,$=t.get(w);$.shadowIntensity=G.intensity,$.shadowBias=G.bias,$.shadowNormalBias=G.normalBias,$.shadowRadius=G.radius,$.shadowMapSize=G.mapSize,$.shadowCameraNear=G.camera.near,$.shadowCameraFar=G.camera.far,n.pointShadow[b]=$,n.pointShadowMap[b]=O,n.pointShadowMatrix[b]=w.shadow.matrix,R++}n.point[b]=Z,b++}else if(w.isHemisphereLight){const Z=e.get(w);Z.skyColor.copy(w.color).multiplyScalar(X),Z.groundColor.copy(w.groundColor).multiplyScalar(X),n.hemi[u]=Z,u++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=le.LTC_FLOAT_1,n.rectAreaLTC2=le.LTC_FLOAT_2):(n.rectAreaLTC1=le.LTC_HALF_1,n.rectAreaLTC2=le.LTC_HALF_2)),n.ambient[0]=f,n.ambient[1]=h,n.ambient[2]=d;const _=n.hash;(_.directionalLength!==m||_.pointLength!==b||_.spotLength!==v||_.rectAreaLength!==g||_.hemiLength!==u||_.numDirectionalShadows!==E||_.numPointShadows!==R||_.numSpotShadows!==S||_.numSpotMaps!==A||_.numLightProbes!==C)&&(n.directional.length=m,n.spot.length=v,n.rectArea.length=g,n.point.length=b,n.hemi.length=u,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=R,n.pointShadowMap.length=R,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=R,n.spotLightMatrix.length=S+A-y,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=y,n.numLightProbes=C,_.directionalLength=m,_.pointLength=b,_.spotLength=v,_.rectAreaLength=g,_.hemiLength=u,_.numDirectionalShadows=E,_.numPointShadows=R,_.numSpotShadows=S,_.numSpotMaps=A,_.numLightProbes=C,n.version=lm++)}function l(c,f){let h=0,d=0,m=0,b=0,v=0;const g=f.matrixWorldInverse;for(let u=0,E=c.length;u<E;u++){const R=c[u];if(R.isDirectionalLight){const S=n.directional[h];S.direction.setFromMatrixPosition(R.matrixWorld),a.setFromMatrixPosition(R.target.matrixWorld),S.direction.sub(a),S.direction.transformDirection(g),h++}else if(R.isSpotLight){const S=n.spot[m];S.position.setFromMatrixPosition(R.matrixWorld),S.position.applyMatrix4(g),S.direction.setFromMatrixPosition(R.matrixWorld),a.setFromMatrixPosition(R.target.matrixWorld),S.direction.sub(a),S.direction.transformDirection(g),m++}else if(R.isRectAreaLight){const S=n.rectArea[b];S.position.setFromMatrixPosition(R.matrixWorld),S.position.applyMatrix4(g),s.identity(),r.copy(R.matrixWorld),r.premultiply(g),s.extractRotation(r),S.halfWidth.set(R.width*.5,0,0),S.halfHeight.set(0,R.height*.5,0),S.halfWidth.applyMatrix4(s),S.halfHeight.applyMatrix4(s),b++}else if(R.isPointLight){const S=n.point[d];S.position.setFromMatrixPosition(R.matrixWorld),S.position.applyMatrix4(g),d++}else if(R.isHemisphereLight){const S=n.hemi[v];S.direction.setFromMatrixPosition(R.matrixWorld),S.direction.transformDirection(g),v++}}}return{setup:o,setupView:l,state:n}}function Eo(i){const e=new um(i),t=[],n=[],a=[];function r(d){h.camera=d,t.length=0,n.length=0,a.length=0}function s(d){t.push(d)}function o(d){n.push(d)}function l(d){a.push(d)}function c(){e.setup(t)}function f(d){e.setupView(t,d)}const h={lightsArray:t,shadowsArray:n,lightProbeGridArray:a,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:c,setupLightsView:f,pushLight:s,pushShadow:o,pushLightProbeGrid:l}}function fm(i){let e=new WeakMap;function t(a,r=0){const s=e.get(a);let o;return s===void 0?(o=new Eo(i),e.set(a,[o])):r>=s.length?(o=new Eo(i),s.push(o)):o=s[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const hm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,pm=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,mm=[new k(1,0,0),new k(-1,0,0),new k(0,1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1)],gm=[new k(0,-1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1),new k(0,-1,0),new k(0,-1,0)],To=new ut,yi=new k,ir=new k;function _m(i,e,t){let n=new ic;const a=new We,r=new We,s=new at,o=new wd,l=new Ud,c={},f=t.maxTextureSize,h={[Ln]:Rt,[Rt]:Ln,[fn]:fn},d=new an({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new We},radius:{value:4}},vertexShader:hm,fragmentShader:pm}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const b=new rn;b.setAttribute("position",new en(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new nn(b,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ia;let u=this.type;this.render=function(y,C,_){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||y.length===0)return;this.type===bl&&(Re("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=ia);const T=i.getRenderTarget(),P=i.getActiveCubeFace(),w=i.getActiveMipmapLevel(),D=i.state;D.setBlending(pn),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const X=u!==this.type;X&&C.traverse(function(q){q.material&&(Array.isArray(q.material)?q.material.forEach(O=>O.needsUpdate=!0):q.material.needsUpdate=!0)});for(let q=0,O=y.length;q<O;q++){const Z=y[q],G=Z.shadow;if(G===void 0){Re("WebGLShadowMap:",Z,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;a.copy(G.mapSize);const $=G.getFrameExtents();a.multiply($),r.copy(G.mapSize),(a.x>f||a.y>f)&&(a.x>f&&(r.x=Math.floor(f/$.x),a.x=r.x*$.x,G.mapSize.x=r.x),a.y>f&&(r.y=Math.floor(f/$.y),a.y=r.y*$.y,G.mapSize.y=r.y));const Q=i.state.buffers.depth.getReversed();if(G.camera._reversedDepth=Q,G.map===null||X===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===Mi){if(Z.isPointLight){Re("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new Qt(a.x,a.y,{format:Gn,type:gn,minFilter:yt,magFilter:yt,generateMipmaps:!1}),G.map.texture.name=Z.name+".shadowMap",G.map.depthTexture=new fi(a.x,a.y,Yt),G.map.depthTexture.name=Z.name+".shadowMapDepth",G.map.depthTexture.format=_n,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=bt,G.map.depthTexture.magFilter=bt}else Z.isPointLight?(G.map=new uc(a.x),G.map.depthTexture=new Ed(a.x,tn)):(G.map=new Qt(a.x,a.y),G.map.depthTexture=new fi(a.x,a.y,tn)),G.map.depthTexture.name=Z.name+".shadowMap",G.map.depthTexture.format=_n,this.type===ia?(G.map.depthTexture.compareFunction=Q?as:is,G.map.depthTexture.minFilter=yt,G.map.depthTexture.magFilter=yt):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=bt,G.map.depthTexture.magFilter=bt);G.camera.updateProjectionMatrix()}const de=G.map.isWebGLCubeRenderTarget?6:1;for(let pe=0;pe<de;pe++){if(G.map.isWebGLCubeRenderTarget)i.setRenderTarget(G.map,pe),i.clear();else{pe===0&&(i.setRenderTarget(G.map),i.clear());const _e=G.getViewport(pe);s.set(r.x*_e.x,r.y*_e.y,r.x*_e.z,r.y*_e.w),D.viewport(s)}if(Z.isPointLight){const _e=G.camera,ze=G.matrix,et=Z.distance||_e.far;et!==_e.far&&(_e.far=et,_e.updateProjectionMatrix()),yi.setFromMatrixPosition(Z.matrixWorld),_e.position.copy(yi),ir.copy(_e.position),ir.add(mm[pe]),_e.up.copy(gm[pe]),_e.lookAt(ir),_e.updateMatrixWorld(),ze.makeTranslation(-yi.x,-yi.y,-yi.z),To.multiplyMatrices(_e.projectionMatrix,_e.matrixWorldInverse),G._frustum.setFromProjectionMatrix(To,_e.coordinateSystem,_e.reversedDepth)}else G.updateMatrices(Z);n=G.getFrustum(),S(C,_,G.camera,Z,this.type)}G.isPointLightShadow!==!0&&this.type===Mi&&E(G,_),G.needsUpdate=!1}u=this.type,g.needsUpdate=!1,i.setRenderTarget(T,P,w)};function E(y,C){const _=e.update(v);d.defines.VSM_SAMPLES!==y.blurSamples&&(d.defines.VSM_SAMPLES=y.blurSamples,m.defines.VSM_SAMPLES=y.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new Qt(a.x,a.y,{format:Gn,type:gn})),d.uniforms.shadow_pass.value=y.map.depthTexture,d.uniforms.resolution.value=y.mapSize,d.uniforms.radius.value=y.radius,i.setRenderTarget(y.mapPass),i.clear(),i.renderBufferDirect(C,null,_,d,v,null),m.uniforms.shadow_pass.value=y.mapPass.texture,m.uniforms.resolution.value=y.mapSize,m.uniforms.radius.value=y.radius,i.setRenderTarget(y.map),i.clear(),i.renderBufferDirect(C,null,_,m,v,null)}function R(y,C,_,T){let P=null;const w=_.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(w!==void 0)P=w;else if(P=_.isPointLight===!0?l:o,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const D=P.uuid,X=C.uuid;let q=c[D];q===void 0&&(q={},c[D]=q);let O=q[X];O===void 0&&(O=P.clone(),q[X]=O,C.addEventListener("dispose",A)),P=O}if(P.visible=C.visible,P.wireframe=C.wireframe,T===Mi?P.side=C.shadowSide!==null?C.shadowSide:C.side:P.side=C.shadowSide!==null?C.shadowSide:h[C.side],P.alphaMap=C.alphaMap,P.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,P.map=C.map,P.clipShadows=C.clipShadows,P.clippingPlanes=C.clippingPlanes,P.clipIntersection=C.clipIntersection,P.displacementMap=C.displacementMap,P.displacementScale=C.displacementScale,P.displacementBias=C.displacementBias,P.wireframeLinewidth=C.wireframeLinewidth,P.linewidth=C.linewidth,_.isPointLight===!0&&P.isMeshDistanceMaterial===!0){const D=i.properties.get(P);D.light=_}return P}function S(y,C,_,T,P){if(y.visible===!1)return;if(y.layers.test(C.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&P===Mi)&&(!y.frustumCulled||n.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,y.matrixWorld);const X=e.update(y),q=y.material;if(Array.isArray(q)){const O=X.groups;for(let Z=0,G=O.length;Z<G;Z++){const $=O[Z],Q=q[$.materialIndex];if(Q&&Q.visible){const de=R(y,Q,T,P);y.onBeforeShadow(i,y,C,_,X,de,$),i.renderBufferDirect(_,null,X,de,y,$),y.onAfterShadow(i,y,C,_,X,de,$)}}}else if(q.visible){const O=R(y,q,T,P);y.onBeforeShadow(i,y,C,_,X,O,null),i.renderBufferDirect(_,null,X,O,y,null),y.onAfterShadow(i,y,C,_,X,O,null)}}const D=y.children;for(let X=0,q=D.length;X<q;X++)S(D[X],C,_,T,P)}function A(y){y.target.removeEventListener("dispose",A);for(const _ in c){const T=c[_],P=y.target.uuid;P in T&&(T[P].dispose(),delete T[P])}}}function bm(i,e){function t(){let L=!1;const ne=new at;let K=null;const oe=new at(0,0,0,0);return{setMask:function(he){K!==he&&!L&&(i.colorMask(he,he,he,he),K=he)},setLocked:function(he){L=he},setClear:function(he,J,Se,be,nt){nt===!0&&(he*=be,J*=be,Se*=be),ne.set(he,J,Se,be),oe.equals(ne)===!1&&(i.clearColor(he,J,Se,be),oe.copy(ne))},reset:function(){L=!1,K=null,oe.set(-1,0,0,0)}}}function n(){let L=!1,ne=!1,K=null,oe=null,he=null;return{setReversed:function(J){if(ne!==J){const Se=e.get("EXT_clip_control");J?Se.clipControlEXT(Se.LOWER_LEFT_EXT,Se.ZERO_TO_ONE_EXT):Se.clipControlEXT(Se.LOWER_LEFT_EXT,Se.NEGATIVE_ONE_TO_ONE_EXT),ne=J;const be=he;he=null,this.setClear(be)}},getReversed:function(){return ne},setTest:function(J){J?ee(i.DEPTH_TEST):Ce(i.DEPTH_TEST)},setMask:function(J){K!==J&&!L&&(i.depthMask(J),K=J)},setFunc:function(J){if(ne&&(J=$l[J]),oe!==J){switch(J){case or:i.depthFunc(i.NEVER);break;case cr:i.depthFunc(i.ALWAYS);break;case lr:i.depthFunc(i.LESS);break;case di:i.depthFunc(i.LEQUAL);break;case dr:i.depthFunc(i.EQUAL);break;case ur:i.depthFunc(i.GEQUAL);break;case fr:i.depthFunc(i.GREATER);break;case hr:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}oe=J}},setLocked:function(J){L=J},setClear:function(J){he!==J&&(he=J,ne&&(J=1-J),i.clearDepth(J))},reset:function(){L=!1,K=null,oe=null,he=null,ne=!1}}}function a(){let L=!1,ne=null,K=null,oe=null,he=null,J=null,Se=null,be=null,nt=null;return{setTest:function(Je){L||(Je?ee(i.STENCIL_TEST):Ce(i.STENCIL_TEST))},setMask:function(Je){ne!==Je&&!L&&(i.stencilMask(Je),ne=Je)},setFunc:function(Je,Vt,Wt){(K!==Je||oe!==Vt||he!==Wt)&&(i.stencilFunc(Je,Vt,Wt),K=Je,oe=Vt,he=Wt)},setOp:function(Je,Vt,Wt){(J!==Je||Se!==Vt||be!==Wt)&&(i.stencilOp(Je,Vt,Wt),J=Je,Se=Vt,be=Wt)},setLocked:function(Je){L=Je},setClear:function(Je){nt!==Je&&(i.clearStencil(Je),nt=Je)},reset:function(){L=!1,ne=null,K=null,oe=null,he=null,J=null,Se=null,be=null,nt=null}}}const r=new t,s=new n,o=new a,l=new WeakMap,c=new WeakMap;let f={},h={},d={},m=new WeakMap,b=[],v=null,g=!1,u=null,E=null,R=null,S=null,A=null,y=null,C=null,_=new Xe(0,0,0),T=0,P=!1,w=null,D=null,X=null,q=null,O=null;const Z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,$=0;const Q=i.getParameter(i.VERSION);Q.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(Q)[1]),G=$>=1):Q.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),G=$>=2);let de=null,pe={};const _e=i.getParameter(i.SCISSOR_BOX),ze=i.getParameter(i.VIEWPORT),et=new at().fromArray(_e),Ge=new at().fromArray(ze);function Y(L,ne,K,oe){const he=new Uint8Array(4),J=i.createTexture();i.bindTexture(L,J),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Se=0;Se<K;Se++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(ne,0,i.RGBA,1,1,oe,0,i.RGBA,i.UNSIGNED_BYTE,he):i.texImage2D(ne+Se,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,he);return J}const ie={};ie[i.TEXTURE_2D]=Y(i.TEXTURE_2D,i.TEXTURE_2D,1),ie[i.TEXTURE_CUBE_MAP]=Y(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ie[i.TEXTURE_2D_ARRAY]=Y(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ie[i.TEXTURE_3D]=Y(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),ee(i.DEPTH_TEST),s.setFunc(di),ct(!1),ft(Rs),ee(i.CULL_FACE),Ve(pn);function ee(L){f[L]!==!0&&(i.enable(L),f[L]=!0)}function Ce(L){f[L]!==!1&&(i.disable(L),f[L]=!1)}function we(L,ne){return d[L]!==ne?(i.bindFramebuffer(L,ne),d[L]=ne,L===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=ne),L===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=ne),!0):!1}function Te(L,ne){let K=b,oe=!1;if(L){K=m.get(ne),K===void 0&&(K=[],m.set(ne,K));const he=L.textures;if(K.length!==he.length||K[0]!==i.COLOR_ATTACHMENT0){for(let J=0,Se=he.length;J<Se;J++)K[J]=i.COLOR_ATTACHMENT0+J;K.length=he.length,oe=!0}}else K[0]!==i.BACK&&(K[0]=i.BACK,oe=!0);oe&&i.drawBuffers(K)}function rt(L){return v!==L?(i.useProgram(L),v=L,!0):!1}const De={[Fn]:i.FUNC_ADD,[Sl]:i.FUNC_SUBTRACT,[vl]:i.FUNC_REVERSE_SUBTRACT};De[yl]=i.MIN,De[Ml]=i.MAX;const je={[El]:i.ZERO,[Tl]:i.ONE,[Al]:i.SRC_COLOR,[rr]:i.SRC_ALPHA,[Il]:i.SRC_ALPHA_SATURATE,[wl]:i.DST_COLOR,[Cl]:i.DST_ALPHA,[Rl]:i.ONE_MINUS_SRC_COLOR,[sr]:i.ONE_MINUS_SRC_ALPHA,[Ul]:i.ONE_MINUS_DST_COLOR,[Ll]:i.ONE_MINUS_DST_ALPHA,[Pl]:i.CONSTANT_COLOR,[Nl]:i.ONE_MINUS_CONSTANT_COLOR,[Dl]:i.CONSTANT_ALPHA,[Bl]:i.ONE_MINUS_CONSTANT_ALPHA};function Ve(L,ne,K,oe,he,J,Se,be,nt,Je){if(L===pn){g===!0&&(Ce(i.BLEND),g=!1);return}if(g===!1&&(ee(i.BLEND),g=!0),L!==xl){if(L!==u||Je!==P){if((E!==Fn||A!==Fn)&&(i.blendEquation(i.FUNC_ADD),E=Fn,A=Fn),Je)switch(L){case oi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Cs:i.blendFunc(i.ONE,i.ONE);break;case Ls:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ws:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:He("WebGLState: Invalid blending: ",L);break}else switch(L){case oi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Cs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Ls:He("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ws:He("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:He("WebGLState: Invalid blending: ",L);break}R=null,S=null,y=null,C=null,_.set(0,0,0),T=0,u=L,P=Je}return}he=he||ne,J=J||K,Se=Se||oe,(ne!==E||he!==A)&&(i.blendEquationSeparate(De[ne],De[he]),E=ne,A=he),(K!==R||oe!==S||J!==y||Se!==C)&&(i.blendFuncSeparate(je[K],je[oe],je[J],je[Se]),R=K,S=oe,y=J,C=Se),(be.equals(_)===!1||nt!==T)&&(i.blendColor(be.r,be.g,be.b,nt),_.copy(be),T=nt),u=L,P=!1}function Oe(L,ne){L.side===fn?Ce(i.CULL_FACE):ee(i.CULL_FACE);let K=L.side===Rt;ne&&(K=!K),ct(K),L.blending===oi&&L.transparent===!1?Ve(pn):Ve(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),s.setFunc(L.depthFunc),s.setTest(L.depthTest),s.setMask(L.depthWrite),r.setMask(L.colorWrite);const oe=L.stencilWrite;o.setTest(oe),oe&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),_t(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?ee(i.SAMPLE_ALPHA_TO_COVERAGE):Ce(i.SAMPLE_ALPHA_TO_COVERAGE)}function ct(L){w!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),w=L)}function ft(L){L!==gl?(ee(i.CULL_FACE),L!==D&&(L===Rs?i.cullFace(i.BACK):L===_l?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ce(i.CULL_FACE),D=L}function mt(L){L!==X&&(G&&i.lineWidth(L),X=L)}function _t(L,ne,K){L?(ee(i.POLYGON_OFFSET_FILL),(q!==ne||O!==K)&&(q=ne,O=K,s.getReversed()&&(ne=-ne),i.polygonOffset(ne,K))):Ce(i.POLYGON_OFFSET_FILL)}function tt(L){L?ee(i.SCISSOR_TEST):Ce(i.SCISSOR_TEST)}function lt(L){L===void 0&&(L=i.TEXTURE0+Z-1),de!==L&&(i.activeTexture(L),de=L)}function U(L,ne,K){K===void 0&&(de===null?K=i.TEXTURE0+Z-1:K=de);let oe=pe[K];oe===void 0&&(oe={type:void 0,texture:void 0},pe[K]=oe),(oe.type!==L||oe.texture!==ne)&&(de!==K&&(i.activeTexture(K),de=K),i.bindTexture(L,ne||ie[L]),oe.type=L,oe.texture=ne)}function Tt(){const L=pe[de];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function Ze(){try{i.compressedTexImage2D(...arguments)}catch(L){He("WebGLState:",L)}}function M(){try{i.compressedTexImage3D(...arguments)}catch(L){He("WebGLState:",L)}}function p(){try{i.texSubImage2D(...arguments)}catch(L){He("WebGLState:",L)}}function N(){try{i.texSubImage3D(...arguments)}catch(L){He("WebGLState:",L)}}function H(){try{i.compressedTexSubImage2D(...arguments)}catch(L){He("WebGLState:",L)}}function V(){try{i.compressedTexSubImage3D(...arguments)}catch(L){He("WebGLState:",L)}}function te(){try{i.texStorage2D(...arguments)}catch(L){He("WebGLState:",L)}}function ae(){try{i.texStorage3D(...arguments)}catch(L){He("WebGLState:",L)}}function W(){try{i.texImage2D(...arguments)}catch(L){He("WebGLState:",L)}}function j(){try{i.texImage3D(...arguments)}catch(L){He("WebGLState:",L)}}function re(L){return h[L]!==void 0?h[L]:i.getParameter(L)}function ve(L,ne){h[L]!==ne&&(i.pixelStorei(L,ne),h[L]=ne)}function ce(L){et.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),et.copy(L))}function se(L){Ge.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),Ge.copy(L))}function Ee(L,ne){let K=c.get(ne);K===void 0&&(K=new WeakMap,c.set(ne,K));let oe=K.get(L);oe===void 0&&(oe=i.getUniformBlockIndex(ne,L.name),K.set(L,oe))}function Ae(L,ne){const oe=c.get(ne).get(L);l.get(ne)!==oe&&(i.uniformBlockBinding(ne,oe,L.__bindingPointIndex),l.set(ne,oe))}function Ue(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),s.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),f={},h={},de=null,pe={},d={},m=new WeakMap,b=[],v=null,g=!1,u=null,E=null,R=null,S=null,A=null,y=null,C=null,_=new Xe(0,0,0),T=0,P=!1,w=null,D=null,X=null,q=null,O=null,et.set(0,0,i.canvas.width,i.canvas.height),Ge.set(0,0,i.canvas.width,i.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:ee,disable:Ce,bindFramebuffer:we,drawBuffers:Te,useProgram:rt,setBlending:Ve,setMaterial:Oe,setFlipSided:ct,setCullFace:ft,setLineWidth:mt,setPolygonOffset:_t,setScissorTest:tt,activeTexture:lt,bindTexture:U,unbindTexture:Tt,compressedTexImage2D:Ze,compressedTexImage3D:M,texImage2D:W,texImage3D:j,pixelStorei:ve,getParameter:re,updateUBOMapping:Ee,uniformBlockBinding:Ae,texStorage2D:te,texStorage3D:ae,texSubImage2D:p,texSubImage3D:N,compressedTexSubImage2D:H,compressedTexSubImage3D:V,scissor:ce,viewport:se,reset:Ue}}function xm(i,e,t,n,a,r,s){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new We,f=new WeakMap,h=new Set;let d;const m=new WeakMap;let b=!1;try{b=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(M,p){return b?new OffscreenCanvas(M,p):pa("canvas")}function g(M,p,N){let H=1;const V=Ze(M);if((V.width>N||V.height>N)&&(H=N/Math.max(V.width,V.height)),H<1)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap||typeof VideoFrame<"u"&&M instanceof VideoFrame){const te=Math.floor(H*V.width),ae=Math.floor(H*V.height);d===void 0&&(d=v(te,ae));const W=p?v(te,ae):d;return W.width=te,W.height=ae,W.getContext("2d").drawImage(M,0,0,te,ae),Re("WebGLRenderer: Texture has been resized from ("+V.width+"x"+V.height+") to ("+te+"x"+ae+")."),W}else return"data"in M&&Re("WebGLRenderer: Image in DataTexture is too big ("+V.width+"x"+V.height+")."),M;return M}function u(M){return M.generateMipmaps}function E(M){i.generateMipmap(M)}function R(M){return M.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:M.isWebGL3DRenderTarget?i.TEXTURE_3D:M.isWebGLArrayRenderTarget||M.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(M,p,N,H,V,te=!1){if(M!==null){if(i[M]!==void 0)return i[M];Re("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let ae;H&&(ae=e.get("EXT_texture_norm16"),ae||Re("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let W=p;if(p===i.RED&&(N===i.FLOAT&&(W=i.R32F),N===i.HALF_FLOAT&&(W=i.R16F),N===i.UNSIGNED_BYTE&&(W=i.R8),N===i.UNSIGNED_SHORT&&ae&&(W=ae.R16_EXT),N===i.SHORT&&ae&&(W=ae.R16_SNORM_EXT)),p===i.RED_INTEGER&&(N===i.UNSIGNED_BYTE&&(W=i.R8UI),N===i.UNSIGNED_SHORT&&(W=i.R16UI),N===i.UNSIGNED_INT&&(W=i.R32UI),N===i.BYTE&&(W=i.R8I),N===i.SHORT&&(W=i.R16I),N===i.INT&&(W=i.R32I)),p===i.RG&&(N===i.FLOAT&&(W=i.RG32F),N===i.HALF_FLOAT&&(W=i.RG16F),N===i.UNSIGNED_BYTE&&(W=i.RG8),N===i.UNSIGNED_SHORT&&ae&&(W=ae.RG16_EXT),N===i.SHORT&&ae&&(W=ae.RG16_SNORM_EXT)),p===i.RG_INTEGER&&(N===i.UNSIGNED_BYTE&&(W=i.RG8UI),N===i.UNSIGNED_SHORT&&(W=i.RG16UI),N===i.UNSIGNED_INT&&(W=i.RG32UI),N===i.BYTE&&(W=i.RG8I),N===i.SHORT&&(W=i.RG16I),N===i.INT&&(W=i.RG32I)),p===i.RGB_INTEGER&&(N===i.UNSIGNED_BYTE&&(W=i.RGB8UI),N===i.UNSIGNED_SHORT&&(W=i.RGB16UI),N===i.UNSIGNED_INT&&(W=i.RGB32UI),N===i.BYTE&&(W=i.RGB8I),N===i.SHORT&&(W=i.RGB16I),N===i.INT&&(W=i.RGB32I)),p===i.RGBA_INTEGER&&(N===i.UNSIGNED_BYTE&&(W=i.RGBA8UI),N===i.UNSIGNED_SHORT&&(W=i.RGBA16UI),N===i.UNSIGNED_INT&&(W=i.RGBA32UI),N===i.BYTE&&(W=i.RGBA8I),N===i.SHORT&&(W=i.RGBA16I),N===i.INT&&(W=i.RGBA32I)),p===i.RGB&&(N===i.UNSIGNED_SHORT&&ae&&(W=ae.RGB16_EXT),N===i.SHORT&&ae&&(W=ae.RGB16_SNORM_EXT),N===i.UNSIGNED_INT_5_9_9_9_REV&&(W=i.RGB9_E5),N===i.UNSIGNED_INT_10F_11F_11F_REV&&(W=i.R11F_G11F_B10F)),p===i.RGBA){const j=te?fa:Be.getTransfer(V);N===i.FLOAT&&(W=i.RGBA32F),N===i.HALF_FLOAT&&(W=i.RGBA16F),N===i.UNSIGNED_BYTE&&(W=j===qe?i.SRGB8_ALPHA8:i.RGBA8),N===i.UNSIGNED_SHORT&&ae&&(W=ae.RGBA16_EXT),N===i.SHORT&&ae&&(W=ae.RGBA16_SNORM_EXT),N===i.UNSIGNED_SHORT_4_4_4_4&&(W=i.RGBA4),N===i.UNSIGNED_SHORT_5_5_5_1&&(W=i.RGB5_A1)}return(W===i.R16F||W===i.R32F||W===i.RG16F||W===i.RG32F||W===i.RGBA16F||W===i.RGBA32F)&&e.get("EXT_color_buffer_float"),W}function A(M,p){let N;return M?p===null||p===tn||p===Ri?N=i.DEPTH24_STENCIL8:p===Yt?N=i.DEPTH32F_STENCIL8:p===Ai&&(N=i.DEPTH24_STENCIL8,Re("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):p===null||p===tn||p===Ri?N=i.DEPTH_COMPONENT24:p===Yt?N=i.DEPTH_COMPONENT32F:p===Ai&&(N=i.DEPTH_COMPONENT16),N}function y(M,p){return u(M)===!0||M.isFramebufferTexture&&M.minFilter!==bt&&M.minFilter!==yt?Math.log2(Math.max(p.width,p.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?p.mipmaps.length:1}function C(M){const p=M.target;p.removeEventListener("dispose",C),T(p),p.isVideoTexture&&f.delete(p),p.isHTMLTexture&&h.delete(p)}function _(M){const p=M.target;p.removeEventListener("dispose",_),w(p)}function T(M){const p=n.get(M);if(p.__webglInit===void 0)return;const N=M.source,H=m.get(N);if(H){const V=H[p.__cacheKey];V.usedTimes--,V.usedTimes===0&&P(M),Object.keys(H).length===0&&m.delete(N)}n.remove(M)}function P(M){const p=n.get(M);i.deleteTexture(p.__webglTexture);const N=M.source,H=m.get(N);delete H[p.__cacheKey],s.memory.textures--}function w(M){const p=n.get(M);if(M.depthTexture&&(M.depthTexture.dispose(),n.remove(M.depthTexture)),M.isWebGLCubeRenderTarget)for(let H=0;H<6;H++){if(Array.isArray(p.__webglFramebuffer[H]))for(let V=0;V<p.__webglFramebuffer[H].length;V++)i.deleteFramebuffer(p.__webglFramebuffer[H][V]);else i.deleteFramebuffer(p.__webglFramebuffer[H]);p.__webglDepthbuffer&&i.deleteRenderbuffer(p.__webglDepthbuffer[H])}else{if(Array.isArray(p.__webglFramebuffer))for(let H=0;H<p.__webglFramebuffer.length;H++)i.deleteFramebuffer(p.__webglFramebuffer[H]);else i.deleteFramebuffer(p.__webglFramebuffer);if(p.__webglDepthbuffer&&i.deleteRenderbuffer(p.__webglDepthbuffer),p.__webglMultisampledFramebuffer&&i.deleteFramebuffer(p.__webglMultisampledFramebuffer),p.__webglColorRenderbuffer)for(let H=0;H<p.__webglColorRenderbuffer.length;H++)p.__webglColorRenderbuffer[H]&&i.deleteRenderbuffer(p.__webglColorRenderbuffer[H]);p.__webglDepthRenderbuffer&&i.deleteRenderbuffer(p.__webglDepthRenderbuffer)}const N=M.textures;for(let H=0,V=N.length;H<V;H++){const te=n.get(N[H]);te.__webglTexture&&(i.deleteTexture(te.__webglTexture),s.memory.textures--),n.remove(N[H])}n.remove(M)}let D=0;function X(){D=0}function q(){return D}function O(M){D=M}function Z(){const M=D;return M>=a.maxTextures&&Re("WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+a.maxTextures),D+=1,M}function G(M){const p=[];return p.push(M.wrapS),p.push(M.wrapT),p.push(M.wrapR||0),p.push(M.magFilter),p.push(M.minFilter),p.push(M.anisotropy),p.push(M.internalFormat),p.push(M.format),p.push(M.type),p.push(M.generateMipmaps),p.push(M.premultiplyAlpha),p.push(M.flipY),p.push(M.unpackAlignment),p.push(M.colorSpace),p.join()}function $(M,p){const N=n.get(M);if(M.isVideoTexture&&U(M),M.isRenderTargetTexture===!1&&M.isExternalTexture!==!0&&M.version>0&&N.__version!==M.version){const H=M.image;if(H===null)Re("WebGLRenderer: Texture marked for update but no image data found.");else if(H.complete===!1)Re("WebGLRenderer: Texture marked for update but image is incomplete");else{Ce(N,M,p);return}}else M.isExternalTexture&&(N.__webglTexture=M.sourceTexture?M.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,N.__webglTexture,i.TEXTURE0+p)}function Q(M,p){const N=n.get(M);if(M.isRenderTargetTexture===!1&&M.version>0&&N.__version!==M.version){Ce(N,M,p);return}else M.isExternalTexture&&(N.__webglTexture=M.sourceTexture?M.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,N.__webglTexture,i.TEXTURE0+p)}function de(M,p){const N=n.get(M);if(M.isRenderTargetTexture===!1&&M.version>0&&N.__version!==M.version){Ce(N,M,p);return}t.bindTexture(i.TEXTURE_3D,N.__webglTexture,i.TEXTURE0+p)}function pe(M,p){const N=n.get(M);if(M.isCubeDepthTexture!==!0&&M.version>0&&N.__version!==M.version){we(N,M,p);return}t.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+p)}const _e={[pr]:i.REPEAT,[hn]:i.CLAMP_TO_EDGE,[mr]:i.MIRRORED_REPEAT},ze={[bt]:i.NEAREST,[kl]:i.NEAREST_MIPMAP_NEAREST,[Pi]:i.NEAREST_MIPMAP_LINEAR,[yt]:i.LINEAR,[Ra]:i.LINEAR_MIPMAP_NEAREST,[kn]:i.LINEAR_MIPMAP_LINEAR},et={[Gl]:i.NEVER,[ql]:i.ALWAYS,[Vl]:i.LESS,[is]:i.LEQUAL,[Wl]:i.EQUAL,[as]:i.GEQUAL,[Xl]:i.GREATER,[Zl]:i.NOTEQUAL};function Ge(M,p){if(p.type===Yt&&e.has("OES_texture_float_linear")===!1&&(p.magFilter===yt||p.magFilter===Ra||p.magFilter===Pi||p.magFilter===kn||p.minFilter===yt||p.minFilter===Ra||p.minFilter===Pi||p.minFilter===kn)&&Re("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(M,i.TEXTURE_WRAP_S,_e[p.wrapS]),i.texParameteri(M,i.TEXTURE_WRAP_T,_e[p.wrapT]),(M===i.TEXTURE_3D||M===i.TEXTURE_2D_ARRAY)&&i.texParameteri(M,i.TEXTURE_WRAP_R,_e[p.wrapR]),i.texParameteri(M,i.TEXTURE_MAG_FILTER,ze[p.magFilter]),i.texParameteri(M,i.TEXTURE_MIN_FILTER,ze[p.minFilter]),p.compareFunction&&(i.texParameteri(M,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(M,i.TEXTURE_COMPARE_FUNC,et[p.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(p.magFilter===bt||p.minFilter!==Pi&&p.minFilter!==kn||p.type===Yt&&e.has("OES_texture_float_linear")===!1)return;if(p.anisotropy>1||n.get(p).__currentAnisotropy){const N=e.get("EXT_texture_filter_anisotropic");i.texParameterf(M,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(p.anisotropy,a.getMaxAnisotropy())),n.get(p).__currentAnisotropy=p.anisotropy}}}function Y(M,p){let N=!1;M.__webglInit===void 0&&(M.__webglInit=!0,p.addEventListener("dispose",C));const H=p.source;let V=m.get(H);V===void 0&&(V={},m.set(H,V));const te=G(p);if(te!==M.__cacheKey){V[te]===void 0&&(V[te]={texture:i.createTexture(),usedTimes:0},s.memory.textures++,N=!0),V[te].usedTimes++;const ae=V[M.__cacheKey];ae!==void 0&&(V[M.__cacheKey].usedTimes--,ae.usedTimes===0&&P(p)),M.__cacheKey=te,M.__webglTexture=V[te].texture}return N}function ie(M,p,N){return Math.floor(Math.floor(M/N)/p)}function ee(M,p,N,H){const te=M.updateRanges;if(te.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,p.width,p.height,N,H,p.data);else{te.sort((ve,ce)=>ve.start-ce.start);let ae=0;for(let ve=1;ve<te.length;ve++){const ce=te[ae],se=te[ve],Ee=ce.start+ce.count,Ae=ie(se.start,p.width,4),Ue=ie(ce.start,p.width,4);se.start<=Ee+1&&Ae===Ue&&ie(se.start+se.count-1,p.width,4)===Ae?ce.count=Math.max(ce.count,se.start+se.count-ce.start):(++ae,te[ae]=se)}te.length=ae+1;const W=t.getParameter(i.UNPACK_ROW_LENGTH),j=t.getParameter(i.UNPACK_SKIP_PIXELS),re=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,p.width);for(let ve=0,ce=te.length;ve<ce;ve++){const se=te[ve],Ee=Math.floor(se.start/4),Ae=Math.ceil(se.count/4),Ue=Ee%p.width,L=Math.floor(Ee/p.width),ne=Ae,K=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Ue),t.pixelStorei(i.UNPACK_SKIP_ROWS,L),t.texSubImage2D(i.TEXTURE_2D,0,Ue,L,ne,K,N,H,p.data)}M.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,W),t.pixelStorei(i.UNPACK_SKIP_PIXELS,j),t.pixelStorei(i.UNPACK_SKIP_ROWS,re)}}function Ce(M,p,N){let H=i.TEXTURE_2D;(p.isDataArrayTexture||p.isCompressedArrayTexture)&&(H=i.TEXTURE_2D_ARRAY),p.isData3DTexture&&(H=i.TEXTURE_3D);const V=Y(M,p),te=p.source;t.bindTexture(H,M.__webglTexture,i.TEXTURE0+N);const ae=n.get(te);if(te.version!==ae.__version||V===!0){if(t.activeTexture(i.TEXTURE0+N),(typeof ImageBitmap<"u"&&p.image instanceof ImageBitmap)===!1){const K=Be.getPrimaries(Be.workingColorSpace),oe=p.colorSpace===Rn?null:Be.getPrimaries(p.colorSpace),he=p.colorSpace===Rn||K===oe?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,p.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,p.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,he)}t.pixelStorei(i.UNPACK_ALIGNMENT,p.unpackAlignment);let j=g(p.image,!1,a.maxTextureSize);j=Tt(p,j);const re=r.convert(p.format,p.colorSpace),ve=r.convert(p.type);let ce=S(p.internalFormat,re,ve,p.normalized,p.colorSpace,p.isVideoTexture);Ge(H,p);let se;const Ee=p.mipmaps,Ae=p.isVideoTexture!==!0,Ue=ae.__version===void 0||V===!0,L=te.dataReady,ne=y(p,j);if(p.isDepthTexture)ce=A(p.format===Hn,p.type),Ue&&(Ae?t.texStorage2D(i.TEXTURE_2D,1,ce,j.width,j.height):t.texImage2D(i.TEXTURE_2D,0,ce,j.width,j.height,0,re,ve,null));else if(p.isDataTexture)if(Ee.length>0){Ae&&Ue&&t.texStorage2D(i.TEXTURE_2D,ne,ce,Ee[0].width,Ee[0].height);for(let K=0,oe=Ee.length;K<oe;K++)se=Ee[K],Ae?L&&t.texSubImage2D(i.TEXTURE_2D,K,0,0,se.width,se.height,re,ve,se.data):t.texImage2D(i.TEXTURE_2D,K,ce,se.width,se.height,0,re,ve,se.data);p.generateMipmaps=!1}else Ae?(Ue&&t.texStorage2D(i.TEXTURE_2D,ne,ce,j.width,j.height),L&&ee(p,j,re,ve)):t.texImage2D(i.TEXTURE_2D,0,ce,j.width,j.height,0,re,ve,j.data);else if(p.isCompressedTexture)if(p.isCompressedArrayTexture){Ae&&Ue&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ne,ce,Ee[0].width,Ee[0].height,j.depth);for(let K=0,oe=Ee.length;K<oe;K++)if(se=Ee[K],p.format!==Gt)if(re!==null)if(Ae){if(L)if(p.layerUpdates.size>0){const he=to(se.width,se.height,p.format,p.type);for(const J of p.layerUpdates){const Se=se.data.subarray(J*he/se.data.BYTES_PER_ELEMENT,(J+1)*he/se.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,J,se.width,se.height,1,re,Se)}p.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,0,se.width,se.height,j.depth,re,se.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,K,ce,se.width,se.height,j.depth,0,se.data,0,0);else Re("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ae?L&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,0,se.width,se.height,j.depth,re,ve,se.data):t.texImage3D(i.TEXTURE_2D_ARRAY,K,ce,se.width,se.height,j.depth,0,re,ve,se.data)}else{Ae&&Ue&&t.texStorage2D(i.TEXTURE_2D,ne,ce,Ee[0].width,Ee[0].height);for(let K=0,oe=Ee.length;K<oe;K++)se=Ee[K],p.format!==Gt?re!==null?Ae?L&&t.compressedTexSubImage2D(i.TEXTURE_2D,K,0,0,se.width,se.height,re,se.data):t.compressedTexImage2D(i.TEXTURE_2D,K,ce,se.width,se.height,0,se.data):Re("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ae?L&&t.texSubImage2D(i.TEXTURE_2D,K,0,0,se.width,se.height,re,ve,se.data):t.texImage2D(i.TEXTURE_2D,K,ce,se.width,se.height,0,re,ve,se.data)}else if(p.isDataArrayTexture)if(Ae){if(Ue&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ne,ce,j.width,j.height,j.depth),L)if(p.layerUpdates.size>0){const K=to(j.width,j.height,p.format,p.type);for(const oe of p.layerUpdates){const he=j.data.subarray(oe*K/j.data.BYTES_PER_ELEMENT,(oe+1)*K/j.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,oe,j.width,j.height,1,re,ve,he)}p.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,re,ve,j.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ce,j.width,j.height,j.depth,0,re,ve,j.data);else if(p.isData3DTexture)Ae?(Ue&&t.texStorage3D(i.TEXTURE_3D,ne,ce,j.width,j.height,j.depth),L&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,re,ve,j.data)):t.texImage3D(i.TEXTURE_3D,0,ce,j.width,j.height,j.depth,0,re,ve,j.data);else if(p.isFramebufferTexture){if(Ue)if(Ae)t.texStorage2D(i.TEXTURE_2D,ne,ce,j.width,j.height);else{let K=j.width,oe=j.height;for(let he=0;he<ne;he++)t.texImage2D(i.TEXTURE_2D,he,ce,K,oe,0,re,ve,null),K>>=1,oe>>=1}}else if(p.isHTMLTexture){if("texElementImage2D"in i){const K=i.canvas;if(K.hasAttribute("layoutsubtree")||K.setAttribute("layoutsubtree","true"),j.parentNode!==K){K.appendChild(j),h.add(p),K.onpaint=oe=>{const he=oe.changedElements;for(const J of h)he.includes(J.image)&&(J.needsUpdate=!0)},K.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,j);else{const he=i.RGBA,J=i.RGBA,Se=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,he,J,Se,j)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ee.length>0){if(Ae&&Ue){const K=Ze(Ee[0]);t.texStorage2D(i.TEXTURE_2D,ne,ce,K.width,K.height)}for(let K=0,oe=Ee.length;K<oe;K++)se=Ee[K],Ae?L&&t.texSubImage2D(i.TEXTURE_2D,K,0,0,re,ve,se):t.texImage2D(i.TEXTURE_2D,K,ce,re,ve,se);p.generateMipmaps=!1}else if(Ae){if(Ue){const K=Ze(j);t.texStorage2D(i.TEXTURE_2D,ne,ce,K.width,K.height)}L&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,re,ve,j)}else t.texImage2D(i.TEXTURE_2D,0,ce,re,ve,j);u(p)&&E(H),ae.__version=te.version,p.onUpdate&&p.onUpdate(p)}M.__version=p.version}function we(M,p,N){if(p.image.length!==6)return;const H=Y(M,p),V=p.source;t.bindTexture(i.TEXTURE_CUBE_MAP,M.__webglTexture,i.TEXTURE0+N);const te=n.get(V);if(V.version!==te.__version||H===!0){t.activeTexture(i.TEXTURE0+N);const ae=Be.getPrimaries(Be.workingColorSpace),W=p.colorSpace===Rn?null:Be.getPrimaries(p.colorSpace),j=p.colorSpace===Rn||ae===W?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,p.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,p.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,p.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,j);const re=p.isCompressedTexture||p.image[0].isCompressedTexture,ve=p.image[0]&&p.image[0].isDataTexture,ce=[];for(let J=0;J<6;J++)!re&&!ve?ce[J]=g(p.image[J],!0,a.maxCubemapSize):ce[J]=ve?p.image[J].image:p.image[J],ce[J]=Tt(p,ce[J]);const se=ce[0],Ee=r.convert(p.format,p.colorSpace),Ae=r.convert(p.type),Ue=S(p.internalFormat,Ee,Ae,p.normalized,p.colorSpace),L=p.isVideoTexture!==!0,ne=te.__version===void 0||H===!0,K=V.dataReady;let oe=y(p,se);Ge(i.TEXTURE_CUBE_MAP,p);let he;if(re){L&&ne&&t.texStorage2D(i.TEXTURE_CUBE_MAP,oe,Ue,se.width,se.height);for(let J=0;J<6;J++){he=ce[J].mipmaps;for(let Se=0;Se<he.length;Se++){const be=he[Se];p.format!==Gt?Ee!==null?L?K&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,Se,0,0,be.width,be.height,Ee,be.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,Se,Ue,be.width,be.height,0,be.data):Re("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?K&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,Se,0,0,be.width,be.height,Ee,Ae,be.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,Se,Ue,be.width,be.height,0,Ee,Ae,be.data)}}}else{if(he=p.mipmaps,L&&ne){he.length>0&&oe++;const J=Ze(ce[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,oe,Ue,J.width,J.height)}for(let J=0;J<6;J++)if(ve){L?K&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,ce[J].width,ce[J].height,Ee,Ae,ce[J].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Ue,ce[J].width,ce[J].height,0,Ee,Ae,ce[J].data);for(let Se=0;Se<he.length;Se++){const nt=he[Se].image[J].image;L?K&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,Se+1,0,0,nt.width,nt.height,Ee,Ae,nt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,Se+1,Ue,nt.width,nt.height,0,Ee,Ae,nt.data)}}else{L?K&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Ee,Ae,ce[J]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Ue,Ee,Ae,ce[J]);for(let Se=0;Se<he.length;Se++){const be=he[Se];L?K&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,Se+1,0,0,Ee,Ae,be.image[J]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,Se+1,Ue,Ee,Ae,be.image[J])}}}u(p)&&E(i.TEXTURE_CUBE_MAP),te.__version=V.version,p.onUpdate&&p.onUpdate(p)}M.__version=p.version}function Te(M,p,N,H,V,te){const ae=r.convert(N.format,N.colorSpace),W=r.convert(N.type),j=S(N.internalFormat,ae,W,N.normalized,N.colorSpace),re=n.get(p),ve=n.get(N);if(ve.__renderTarget=p,!re.__hasExternalTextures){const ce=Math.max(1,p.width>>te),se=Math.max(1,p.height>>te);V===i.TEXTURE_3D||V===i.TEXTURE_2D_ARRAY?t.texImage3D(V,te,j,ce,se,p.depth,0,ae,W,null):t.texImage2D(V,te,j,ce,se,0,ae,W,null)}t.bindFramebuffer(i.FRAMEBUFFER,M),lt(p)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,H,V,ve.__webglTexture,0,tt(p)):(V===i.TEXTURE_2D||V>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&V<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,H,V,ve.__webglTexture,te),t.bindFramebuffer(i.FRAMEBUFFER,null)}function rt(M,p,N){if(i.bindRenderbuffer(i.RENDERBUFFER,M),p.depthBuffer){const H=p.depthTexture,V=H&&H.isDepthTexture?H.type:null,te=A(p.stencilBuffer,V),ae=p.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;lt(p)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,tt(p),te,p.width,p.height):N?i.renderbufferStorageMultisample(i.RENDERBUFFER,tt(p),te,p.width,p.height):i.renderbufferStorage(i.RENDERBUFFER,te,p.width,p.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ae,i.RENDERBUFFER,M)}else{const H=p.textures;for(let V=0;V<H.length;V++){const te=H[V],ae=r.convert(te.format,te.colorSpace),W=r.convert(te.type),j=S(te.internalFormat,ae,W,te.normalized,te.colorSpace);lt(p)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,tt(p),j,p.width,p.height):N?i.renderbufferStorageMultisample(i.RENDERBUFFER,tt(p),j,p.width,p.height):i.renderbufferStorage(i.RENDERBUFFER,j,p.width,p.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function De(M,p,N){const H=p.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,M),!(p.depthTexture&&p.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const V=n.get(p.depthTexture);if(V.__renderTarget=p,(!V.__webglTexture||p.depthTexture.image.width!==p.width||p.depthTexture.image.height!==p.height)&&(p.depthTexture.image.width=p.width,p.depthTexture.image.height=p.height,p.depthTexture.needsUpdate=!0),H){if(V.__webglInit===void 0&&(V.__webglInit=!0,p.depthTexture.addEventListener("dispose",C)),V.__webglTexture===void 0){V.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture),Ge(i.TEXTURE_CUBE_MAP,p.depthTexture);const re=r.convert(p.depthTexture.format),ve=r.convert(p.depthTexture.type);let ce;p.depthTexture.format===_n?ce=i.DEPTH_COMPONENT24:p.depthTexture.format===Hn&&(ce=i.DEPTH24_STENCIL8);for(let se=0;se<6;se++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,ce,p.width,p.height,0,re,ve,null)}}else $(p.depthTexture,0);const te=V.__webglTexture,ae=tt(p),W=H?i.TEXTURE_CUBE_MAP_POSITIVE_X+N:i.TEXTURE_2D,j=p.depthTexture.format===Hn?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(p.depthTexture.format===_n)lt(p)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,W,te,0,ae):i.framebufferTexture2D(i.FRAMEBUFFER,j,W,te,0);else if(p.depthTexture.format===Hn)lt(p)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,W,te,0,ae):i.framebufferTexture2D(i.FRAMEBUFFER,j,W,te,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function je(M){const p=n.get(M),N=M.isWebGLCubeRenderTarget===!0;if(p.__boundDepthTexture!==M.depthTexture){const H=M.depthTexture;if(p.__depthDisposeCallback&&p.__depthDisposeCallback(),H){const V=()=>{delete p.__boundDepthTexture,delete p.__depthDisposeCallback,H.removeEventListener("dispose",V)};H.addEventListener("dispose",V),p.__depthDisposeCallback=V}p.__boundDepthTexture=H}if(M.depthTexture&&!p.__autoAllocateDepthBuffer)if(N)for(let H=0;H<6;H++)De(p.__webglFramebuffer[H],M,H);else{const H=M.texture.mipmaps;H&&H.length>0?De(p.__webglFramebuffer[0],M,0):De(p.__webglFramebuffer,M,0)}else if(N){p.__webglDepthbuffer=[];for(let H=0;H<6;H++)if(t.bindFramebuffer(i.FRAMEBUFFER,p.__webglFramebuffer[H]),p.__webglDepthbuffer[H]===void 0)p.__webglDepthbuffer[H]=i.createRenderbuffer(),rt(p.__webglDepthbuffer[H],M,!1);else{const V=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,te=p.__webglDepthbuffer[H];i.bindRenderbuffer(i.RENDERBUFFER,te),i.framebufferRenderbuffer(i.FRAMEBUFFER,V,i.RENDERBUFFER,te)}}else{const H=M.texture.mipmaps;if(H&&H.length>0?t.bindFramebuffer(i.FRAMEBUFFER,p.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,p.__webglFramebuffer),p.__webglDepthbuffer===void 0)p.__webglDepthbuffer=i.createRenderbuffer(),rt(p.__webglDepthbuffer,M,!1);else{const V=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,te=p.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,te),i.framebufferRenderbuffer(i.FRAMEBUFFER,V,i.RENDERBUFFER,te)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ve(M,p,N){const H=n.get(M);p!==void 0&&Te(H.__webglFramebuffer,M,M.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),N!==void 0&&je(M)}function Oe(M){const p=M.texture,N=n.get(M),H=n.get(p);M.addEventListener("dispose",_);const V=M.textures,te=M.isWebGLCubeRenderTarget===!0,ae=V.length>1;if(ae||(H.__webglTexture===void 0&&(H.__webglTexture=i.createTexture()),H.__version=p.version,s.memory.textures++),te){N.__webglFramebuffer=[];for(let W=0;W<6;W++)if(p.mipmaps&&p.mipmaps.length>0){N.__webglFramebuffer[W]=[];for(let j=0;j<p.mipmaps.length;j++)N.__webglFramebuffer[W][j]=i.createFramebuffer()}else N.__webglFramebuffer[W]=i.createFramebuffer()}else{if(p.mipmaps&&p.mipmaps.length>0){N.__webglFramebuffer=[];for(let W=0;W<p.mipmaps.length;W++)N.__webglFramebuffer[W]=i.createFramebuffer()}else N.__webglFramebuffer=i.createFramebuffer();if(ae)for(let W=0,j=V.length;W<j;W++){const re=n.get(V[W]);re.__webglTexture===void 0&&(re.__webglTexture=i.createTexture(),s.memory.textures++)}if(M.samples>0&&lt(M)===!1){N.__webglMultisampledFramebuffer=i.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let W=0;W<V.length;W++){const j=V[W];N.__webglColorRenderbuffer[W]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,N.__webglColorRenderbuffer[W]);const re=r.convert(j.format,j.colorSpace),ve=r.convert(j.type),ce=S(j.internalFormat,re,ve,j.normalized,j.colorSpace,M.isXRRenderTarget===!0),se=tt(M);i.renderbufferStorageMultisample(i.RENDERBUFFER,se,ce,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+W,i.RENDERBUFFER,N.__webglColorRenderbuffer[W])}i.bindRenderbuffer(i.RENDERBUFFER,null),M.depthBuffer&&(N.__webglDepthRenderbuffer=i.createRenderbuffer(),rt(N.__webglDepthRenderbuffer,M,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(te){t.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture),Ge(i.TEXTURE_CUBE_MAP,p);for(let W=0;W<6;W++)if(p.mipmaps&&p.mipmaps.length>0)for(let j=0;j<p.mipmaps.length;j++)Te(N.__webglFramebuffer[W][j],M,p,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+W,j);else Te(N.__webglFramebuffer[W],M,p,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+W,0);u(p)&&E(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ae){for(let W=0,j=V.length;W<j;W++){const re=V[W],ve=n.get(re);let ce=i.TEXTURE_2D;(M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(ce=M.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ce,ve.__webglTexture),Ge(ce,re),Te(N.__webglFramebuffer,M,re,i.COLOR_ATTACHMENT0+W,ce,0),u(re)&&E(ce)}t.unbindTexture()}else{let W=i.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(W=M.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(W,H.__webglTexture),Ge(W,p),p.mipmaps&&p.mipmaps.length>0)for(let j=0;j<p.mipmaps.length;j++)Te(N.__webglFramebuffer[j],M,p,i.COLOR_ATTACHMENT0,W,j);else Te(N.__webglFramebuffer,M,p,i.COLOR_ATTACHMENT0,W,0);u(p)&&E(W),t.unbindTexture()}M.depthBuffer&&je(M)}function ct(M){const p=M.textures;for(let N=0,H=p.length;N<H;N++){const V=p[N];if(u(V)){const te=R(M),ae=n.get(V).__webglTexture;t.bindTexture(te,ae),E(te),t.unbindTexture()}}}const ft=[],mt=[];function _t(M){if(M.samples>0){if(lt(M)===!1){const p=M.textures,N=M.width,H=M.height;let V=i.COLOR_BUFFER_BIT;const te=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ae=n.get(M),W=p.length>1;if(W)for(let re=0;re<p.length;re++)t.bindFramebuffer(i.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+re,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ae.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+re,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ae.__webglMultisampledFramebuffer);const j=M.texture.mipmaps;j&&j.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ae.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ae.__webglFramebuffer);for(let re=0;re<p.length;re++){if(M.resolveDepthBuffer&&(M.depthBuffer&&(V|=i.DEPTH_BUFFER_BIT),M.stencilBuffer&&M.resolveStencilBuffer&&(V|=i.STENCIL_BUFFER_BIT)),W){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ae.__webglColorRenderbuffer[re]);const ve=n.get(p[re]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ve,0)}i.blitFramebuffer(0,0,N,H,0,0,N,H,V,i.NEAREST),l===!0&&(ft.length=0,mt.length=0,ft.push(i.COLOR_ATTACHMENT0+re),M.depthBuffer&&M.resolveDepthBuffer===!1&&(ft.push(te),mt.push(te),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,mt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ft))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),W)for(let re=0;re<p.length;re++){t.bindFramebuffer(i.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+re,i.RENDERBUFFER,ae.__webglColorRenderbuffer[re]);const ve=n.get(p[re]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ae.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+re,i.TEXTURE_2D,ve,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ae.__webglMultisampledFramebuffer)}else if(M.depthBuffer&&M.resolveDepthBuffer===!1&&l){const p=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[p])}}}function tt(M){return Math.min(a.maxSamples,M.samples)}function lt(M){const p=n.get(M);return M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&p.__useRenderToTexture!==!1}function U(M){const p=s.render.frame;f.get(M)!==p&&(f.set(M,p),M.update())}function Tt(M,p){const N=M.colorSpace,H=M.format,V=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||N!==ua&&N!==Rn&&(Be.getTransfer(N)===qe?(H!==Gt||V!==Bt)&&Re("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):He("WebGLTextures: Unsupported texture color space:",N)),p}function Ze(M){return typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement?(c.width=M.naturalWidth||M.width,c.height=M.naturalHeight||M.height):typeof VideoFrame<"u"&&M instanceof VideoFrame?(c.width=M.displayWidth,c.height=M.displayHeight):(c.width=M.width,c.height=M.height),c}this.allocateTextureUnit=Z,this.resetTextureUnits=X,this.getTextureUnits=q,this.setTextureUnits=O,this.setTexture2D=$,this.setTexture2DArray=Q,this.setTexture3D=de,this.setTextureCube=pe,this.rebindTextures=Ve,this.setupRenderTarget=Oe,this.updateRenderTargetMipmap=ct,this.updateMultisampleRenderTarget=_t,this.setupDepthRenderbuffer=je,this.setupFrameBufferTexture=Te,this.useMultisampledRTT=lt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Sm(i,e){function t(n,a=Rn){let r;const s=Be.getTransfer(a);if(n===Bt)return i.UNSIGNED_BYTE;if(n===Jr)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Qr)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Zo)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===qo)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Wo)return i.BYTE;if(n===Xo)return i.SHORT;if(n===Ai)return i.UNSIGNED_SHORT;if(n===$r)return i.INT;if(n===tn)return i.UNSIGNED_INT;if(n===Yt)return i.FLOAT;if(n===gn)return i.HALF_FLOAT;if(n===Ko)return i.ALPHA;if(n===jo)return i.RGB;if(n===Gt)return i.RGBA;if(n===_n)return i.DEPTH_COMPONENT;if(n===Hn)return i.DEPTH_STENCIL;if(n===Yo)return i.RED;if(n===es)return i.RED_INTEGER;if(n===Gn)return i.RG;if(n===ts)return i.RG_INTEGER;if(n===ns)return i.RGBA_INTEGER;if(n===aa||n===ra||n===sa||n===oa)if(s===qe)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===aa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ra)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===sa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===oa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===aa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ra)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===sa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===oa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===gr||n===_r||n===br||n===xr)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===gr)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===_r)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===br)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===xr)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Sr||n===vr||n===yr||n===Mr||n===Er||n===la||n===Tr)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Sr||n===vr)return s===qe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===yr)return s===qe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Mr)return r.COMPRESSED_R11_EAC;if(n===Er)return r.COMPRESSED_SIGNED_R11_EAC;if(n===la)return r.COMPRESSED_RG11_EAC;if(n===Tr)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ar||n===Rr||n===Cr||n===Lr||n===wr||n===Ur||n===Ir||n===Pr||n===Nr||n===Dr||n===Br||n===Fr||n===Or||n===kr)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ar)return s===qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Rr)return s===qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Cr)return s===qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Lr)return s===qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===wr)return s===qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ur)return s===qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ir)return s===qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Pr)return s===qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Nr)return s===qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Dr)return s===qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Br)return s===qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Fr)return s===qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Or)return s===qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===kr)return s===qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Hr||n===zr||n===Gr)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Hr)return s===qe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===zr)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Gr)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Vr||n===Wr||n===da||n===Xr)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Vr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Wr)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===da)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Xr)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ri?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const vm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ym=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Mm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new rc(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new an({vertexShader:vm,fragmentShader:ym,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new nn(new ba(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Em extends Wn{constructor(e,t){super();const n=this;let a=null,r=1,s=null,o="local-floor",l=1,c=null,f=null,h=null,d=null,m=null,b=null;const v=typeof XRWebGLBinding<"u",g=new Mm,u={},E=t.getContextAttributes();let R=null,S=null;const A=[],y=[],C=new We;let _=null;const T=new Dt;T.viewport=new at;const P=new Dt;P.viewport=new at;const w=[T,P],D=new Pd;let X=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let ie=A[Y];return ie===void 0&&(ie=new Da,A[Y]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(Y){let ie=A[Y];return ie===void 0&&(ie=new Da,A[Y]=ie),ie.getGripSpace()},this.getHand=function(Y){let ie=A[Y];return ie===void 0&&(ie=new Da,A[Y]=ie),ie.getHandSpace()};function O(Y){const ie=y.indexOf(Y.inputSource);if(ie===-1)return;const ee=A[ie];ee!==void 0&&(ee.update(Y.inputSource,Y.frame,c||s),ee.dispatchEvent({type:Y.type,data:Y.inputSource}))}function Z(){a.removeEventListener("select",O),a.removeEventListener("selectstart",O),a.removeEventListener("selectend",O),a.removeEventListener("squeeze",O),a.removeEventListener("squeezestart",O),a.removeEventListener("squeezeend",O),a.removeEventListener("end",Z),a.removeEventListener("inputsourceschange",G);for(let Y=0;Y<A.length;Y++){const ie=y[Y];ie!==null&&(y[Y]=null,A[Y].disconnect(ie))}X=null,q=null,g.reset();for(const Y in u)delete u[Y];e.setRenderTarget(R),m=null,d=null,h=null,a=null,S=null,Ge.stop(),n.isPresenting=!1,e.setPixelRatio(_),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&Re("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&Re("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return h===null&&v&&(h=new XRWebGLBinding(a,t)),h},this.getFrame=function(){return b},this.getSession=function(){return a},this.setSession=async function(Y){if(a=Y,a!==null){if(R=e.getRenderTarget(),a.addEventListener("select",O),a.addEventListener("selectstart",O),a.addEventListener("selectend",O),a.addEventListener("squeeze",O),a.addEventListener("squeezestart",O),a.addEventListener("squeezeend",O),a.addEventListener("end",Z),a.addEventListener("inputsourceschange",G),E.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(C),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let ee=null,Ce=null,we=null;E.depth&&(we=E.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ee=E.stencil?Hn:_n,Ce=E.stencil?Ri:tn);const Te={colorFormat:t.RGBA8,depthFormat:we,scaleFactor:r};h=this.getBinding(),d=h.createProjectionLayer(Te),a.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),S=new Qt(d.textureWidth,d.textureHeight,{format:Gt,type:Bt,depthTexture:new fi(d.textureWidth,d.textureHeight,Ce,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:E.stencil,colorSpace:e.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const ee={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(a,t,ee),a.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),S=new Qt(m.framebufferWidth,m.framebufferHeight,{format:Gt,type:Bt,colorSpace:e.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await a.requestReferenceSpace(o),Ge.setContext(a),Ge.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function G(Y){for(let ie=0;ie<Y.removed.length;ie++){const ee=Y.removed[ie],Ce=y.indexOf(ee);Ce>=0&&(y[Ce]=null,A[Ce].disconnect(ee))}for(let ie=0;ie<Y.added.length;ie++){const ee=Y.added[ie];let Ce=y.indexOf(ee);if(Ce===-1){for(let Te=0;Te<A.length;Te++)if(Te>=y.length){y.push(ee),Ce=Te;break}else if(y[Te]===null){y[Te]=ee,Ce=Te;break}if(Ce===-1)break}const we=A[Ce];we&&we.connect(ee)}}const $=new k,Q=new k;function de(Y,ie,ee){$.setFromMatrixPosition(ie.matrixWorld),Q.setFromMatrixPosition(ee.matrixWorld);const Ce=$.distanceTo(Q),we=ie.projectionMatrix.elements,Te=ee.projectionMatrix.elements,rt=we[14]/(we[10]-1),De=we[14]/(we[10]+1),je=(we[9]+1)/we[5],Ve=(we[9]-1)/we[5],Oe=(we[8]-1)/we[0],ct=(Te[8]+1)/Te[0],ft=rt*Oe,mt=rt*ct,_t=Ce/(-Oe+ct),tt=_t*-Oe;if(ie.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(tt),Y.translateZ(_t),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),we[10]===-1)Y.projectionMatrix.copy(ie.projectionMatrix),Y.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{const lt=rt+_t,U=De+_t,Tt=ft-tt,Ze=mt+(Ce-tt),M=je*De/U*lt,p=Ve*De/U*lt;Y.projectionMatrix.makePerspective(Tt,Ze,M,p,lt,U),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function pe(Y,ie){ie===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(ie.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(a===null)return;let ie=Y.near,ee=Y.far;g.texture!==null&&(g.depthNear>0&&(ie=g.depthNear),g.depthFar>0&&(ee=g.depthFar)),D.near=P.near=T.near=ie,D.far=P.far=T.far=ee,(X!==D.near||q!==D.far)&&(a.updateRenderState({depthNear:D.near,depthFar:D.far}),X=D.near,q=D.far),D.layers.mask=Y.layers.mask|6,T.layers.mask=D.layers.mask&-5,P.layers.mask=D.layers.mask&-3;const Ce=Y.parent,we=D.cameras;pe(D,Ce);for(let Te=0;Te<we.length;Te++)pe(we[Te],Ce);we.length===2?de(D,T,P):D.projectionMatrix.copy(T.projectionMatrix),_e(Y,D,Ce)};function _e(Y,ie,ee){ee===null?Y.matrix.copy(ie.matrixWorld):(Y.matrix.copy(ee.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(ie.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(ie.projectionMatrix),Y.projectionMatrixInverse.copy(ie.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Zr*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(Y){l=Y,d!==null&&(d.fixedFoveation=Y),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Y)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(D)},this.getCameraTexture=function(Y){return u[Y]};let ze=null;function et(Y,ie){if(f=ie.getViewerPose(c||s),b=ie,f!==null){const ee=f.views;m!==null&&(e.setRenderTargetFramebuffer(S,m.framebuffer),e.setRenderTarget(S));let Ce=!1;ee.length!==D.cameras.length&&(D.cameras.length=0,Ce=!0);for(let De=0;De<ee.length;De++){const je=ee[De];let Ve=null;if(m!==null)Ve=m.getViewport(je);else{const ct=h.getViewSubImage(d,je);Ve=ct.viewport,De===0&&(e.setRenderTargetTextures(S,ct.colorTexture,ct.depthStencilTexture),e.setRenderTarget(S))}let Oe=w[De];Oe===void 0&&(Oe=new Dt,Oe.layers.enable(De),Oe.viewport=new at,w[De]=Oe),Oe.matrix.fromArray(je.transform.matrix),Oe.matrix.decompose(Oe.position,Oe.quaternion,Oe.scale),Oe.projectionMatrix.fromArray(je.projectionMatrix),Oe.projectionMatrixInverse.copy(Oe.projectionMatrix).invert(),Oe.viewport.set(Ve.x,Ve.y,Ve.width,Ve.height),De===0&&(D.matrix.copy(Oe.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),Ce===!0&&D.cameras.push(Oe)}const we=a.enabledFeatures;if(we&&we.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&v){h=n.getBinding();const De=h.getDepthInformation(ee[0]);De&&De.isValid&&De.texture&&g.init(De,a.renderState)}if(we&&we.includes("camera-access")&&v){e.state.unbindTexture(),h=n.getBinding();for(let De=0;De<ee.length;De++){const je=ee[De].camera;if(je){let Ve=u[je];Ve||(Ve=new rc,u[je]=Ve);const Oe=h.getCameraImage(je);Ve.sourceTexture=Oe}}}}for(let ee=0;ee<A.length;ee++){const Ce=y[ee],we=A[ee];Ce!==null&&we!==void 0&&we.update(Ce,ie,c||s)}ze&&ze(Y,ie),ie.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ie}),b=null}const Ge=new lc;Ge.setAnimationLoop(et),this.setAnimationLoop=function(Y){ze=Y},this.dispose=function(){}}}const Tm=new ut,gc=new Le;gc.set(-1,0,0,0,1,0,0,0,1);function Am(i,e){function t(g,u){g.matrixAutoUpdate===!0&&g.updateMatrix(),u.value.copy(g.matrix)}function n(g,u){u.color.getRGB(g.fogColor.value,sc(i)),u.isFog?(g.fogNear.value=u.near,g.fogFar.value=u.far):u.isFogExp2&&(g.fogDensity.value=u.density)}function a(g,u,E,R,S){u.isNodeMaterial?u.uniformsNeedUpdate=!1:u.isMeshBasicMaterial?r(g,u):u.isMeshLambertMaterial?(r(g,u),u.envMap&&(g.envMapIntensity.value=u.envMapIntensity)):u.isMeshToonMaterial?(r(g,u),h(g,u)):u.isMeshPhongMaterial?(r(g,u),f(g,u),u.envMap&&(g.envMapIntensity.value=u.envMapIntensity)):u.isMeshStandardMaterial?(r(g,u),d(g,u),u.isMeshPhysicalMaterial&&m(g,u,S)):u.isMeshMatcapMaterial?(r(g,u),b(g,u)):u.isMeshDepthMaterial?r(g,u):u.isMeshDistanceMaterial?(r(g,u),v(g,u)):u.isMeshNormalMaterial?r(g,u):u.isLineBasicMaterial?(s(g,u),u.isLineDashedMaterial&&o(g,u)):u.isPointsMaterial?l(g,u,E,R):u.isSpriteMaterial?c(g,u):u.isShadowMaterial?(g.color.value.copy(u.color),g.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(g,u){g.opacity.value=u.opacity,u.color&&g.diffuse.value.copy(u.color),u.emissive&&g.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(g.map.value=u.map,t(u.map,g.mapTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,t(u.alphaMap,g.alphaMapTransform)),u.bumpMap&&(g.bumpMap.value=u.bumpMap,t(u.bumpMap,g.bumpMapTransform),g.bumpScale.value=u.bumpScale,u.side===Rt&&(g.bumpScale.value*=-1)),u.normalMap&&(g.normalMap.value=u.normalMap,t(u.normalMap,g.normalMapTransform),g.normalScale.value.copy(u.normalScale),u.side===Rt&&g.normalScale.value.negate()),u.displacementMap&&(g.displacementMap.value=u.displacementMap,t(u.displacementMap,g.displacementMapTransform),g.displacementScale.value=u.displacementScale,g.displacementBias.value=u.displacementBias),u.emissiveMap&&(g.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,g.emissiveMapTransform)),u.specularMap&&(g.specularMap.value=u.specularMap,t(u.specularMap,g.specularMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest);const E=e.get(u),R=E.envMap,S=E.envMapRotation;R&&(g.envMap.value=R,g.envMapRotation.value.setFromMatrix4(Tm.makeRotationFromEuler(S)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(gc),g.reflectivity.value=u.reflectivity,g.ior.value=u.ior,g.refractionRatio.value=u.refractionRatio),u.lightMap&&(g.lightMap.value=u.lightMap,g.lightMapIntensity.value=u.lightMapIntensity,t(u.lightMap,g.lightMapTransform)),u.aoMap&&(g.aoMap.value=u.aoMap,g.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,g.aoMapTransform))}function s(g,u){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,u.map&&(g.map.value=u.map,t(u.map,g.mapTransform))}function o(g,u){g.dashSize.value=u.dashSize,g.totalSize.value=u.dashSize+u.gapSize,g.scale.value=u.scale}function l(g,u,E,R){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,g.size.value=u.size*E,g.scale.value=R*.5,u.map&&(g.map.value=u.map,t(u.map,g.uvTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,t(u.alphaMap,g.alphaMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest)}function c(g,u){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,g.rotation.value=u.rotation,u.map&&(g.map.value=u.map,t(u.map,g.mapTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,t(u.alphaMap,g.alphaMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest)}function f(g,u){g.specular.value.copy(u.specular),g.shininess.value=Math.max(u.shininess,1e-4)}function h(g,u){u.gradientMap&&(g.gradientMap.value=u.gradientMap)}function d(g,u){g.metalness.value=u.metalness,u.metalnessMap&&(g.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,g.metalnessMapTransform)),g.roughness.value=u.roughness,u.roughnessMap&&(g.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,g.roughnessMapTransform)),u.envMap&&(g.envMapIntensity.value=u.envMapIntensity)}function m(g,u,E){g.ior.value=u.ior,u.sheen>0&&(g.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),g.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(g.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,g.sheenColorMapTransform)),u.sheenRoughnessMap&&(g.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,g.sheenRoughnessMapTransform))),u.clearcoat>0&&(g.clearcoat.value=u.clearcoat,g.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(g.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,g.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(g.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Rt&&g.clearcoatNormalScale.value.negate())),u.dispersion>0&&(g.dispersion.value=u.dispersion),u.iridescence>0&&(g.iridescence.value=u.iridescence,g.iridescenceIOR.value=u.iridescenceIOR,g.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(g.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,g.iridescenceMapTransform)),u.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),u.transmission>0&&(g.transmission.value=u.transmission,g.transmissionSamplerMap.value=E.texture,g.transmissionSamplerSize.value.set(E.width,E.height),u.transmissionMap&&(g.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,g.transmissionMapTransform)),g.thickness.value=u.thickness,u.thicknessMap&&(g.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=u.attenuationDistance,g.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(g.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(g.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=u.specularIntensity,g.specularColor.value.copy(u.specularColor),u.specularColorMap&&(g.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,g.specularColorMapTransform)),u.specularIntensityMap&&(g.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,g.specularIntensityMapTransform))}function b(g,u){u.matcap&&(g.matcap.value=u.matcap)}function v(g,u){const E=e.get(u).light;g.referencePosition.value.setFromMatrixPosition(E.matrixWorld),g.nearDistance.value=E.shadow.camera.near,g.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:a}}function Rm(i,e,t,n){let a={},r={},s=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,A){const y=A.program;n.uniformBlockBinding(S,y)}function c(S,A){let y=a[S.id];y===void 0&&(g(S),y=f(S),a[S.id]=y,S.addEventListener("dispose",E));const C=A.program;n.updateUBOMapping(S,C);const _=e.render.frame;r[S.id]!==_&&(d(S),r[S.id]=_)}function f(S){const A=h();S.__bindingPointIndex=A;const y=i.createBuffer(),C=S.__size,_=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,C,_),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,A,y),y}function h(){for(let S=0;S<o;S++)if(s.indexOf(S)===-1)return s.push(S),S;return He("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){const A=a[S.id],y=S.uniforms,C=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,A);for(let _=0,T=y.length;_<T;_++){const P=y[_];if(Array.isArray(P))for(let w=0,D=P.length;w<D;w++)m(P[w],_,w,C);else m(P,_,0,C)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(S,A,y,C){if(v(S,A,y,C)===!0){const _=S.__offset,T=S.value;if(Array.isArray(T)){let P=0;for(let w=0;w<T.length;w++){const D=T[w],X=u(D);b(D,S.__data,P),typeof D!="number"&&typeof D!="boolean"&&!D.isMatrix3&&!ArrayBuffer.isView(D)&&(P+=X.storage/Float32Array.BYTES_PER_ELEMENT)}}else b(T,S.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,_,S.__data)}}function b(S,A,y){typeof S=="number"||typeof S=="boolean"?A[0]=S:S.isMatrix3?(A[0]=S.elements[0],A[1]=S.elements[1],A[2]=S.elements[2],A[3]=0,A[4]=S.elements[3],A[5]=S.elements[4],A[6]=S.elements[5],A[7]=0,A[8]=S.elements[6],A[9]=S.elements[7],A[10]=S.elements[8],A[11]=0):ArrayBuffer.isView(S)?A.set(new S.constructor(S.buffer,S.byteOffset,A.length)):S.toArray(A,y)}function v(S,A,y,C){const _=S.value,T=A+"_"+y;if(C[T]===void 0)return typeof _=="number"||typeof _=="boolean"?C[T]=_:ArrayBuffer.isView(_)?C[T]=_.slice():C[T]=_.clone(),!0;{const P=C[T];if(typeof _=="number"||typeof _=="boolean"){if(P!==_)return C[T]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(P.equals(_)===!1)return P.copy(_),!0}}return!1}function g(S){const A=S.uniforms;let y=0;const C=16;for(let T=0,P=A.length;T<P;T++){const w=Array.isArray(A[T])?A[T]:[A[T]];for(let D=0,X=w.length;D<X;D++){const q=w[D],O=Array.isArray(q.value)?q.value:[q.value];for(let Z=0,G=O.length;Z<G;Z++){const $=O[Z],Q=u($),de=y%C,pe=de%Q.boundary,_e=de+pe;y+=pe,_e!==0&&C-_e<Q.storage&&(y+=C-_e),q.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=y,y+=Q.storage}}}const _=y%C;return _>0&&(y+=C-_),S.__size=y,S.__cache={},this}function u(S){const A={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(A.boundary=4,A.storage=4):S.isVector2?(A.boundary=8,A.storage=8):S.isVector3||S.isColor?(A.boundary=16,A.storage=12):S.isVector4?(A.boundary=16,A.storage=16):S.isMatrix3?(A.boundary=48,A.storage=48):S.isMatrix4?(A.boundary=64,A.storage=64):S.isTexture?Re("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(A.boundary=16,A.storage=S.byteLength):Re("WebGLRenderer: Unsupported uniform value type.",S),A}function E(S){const A=S.target;A.removeEventListener("dispose",E);const y=s.indexOf(A.__bindingPointIndex);s.splice(y,1),i.deleteBuffer(a[A.id]),delete a[A.id],delete r[A.id]}function R(){for(const S in a)i.deleteBuffer(a[S]);s=[],a={},r={}}return{bind:l,update:c,dispose:R}}const Cm=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let qt=null;function Lm(){return qt===null&&(qt=new xd(Cm,16,16,Gn,gn),qt.name="DFG_LUT",qt.minFilter=yt,qt.magFilter=yt,qt.wrapS=hn,qt.wrapT=hn,qt.generateMipmaps=!1,qt.needsUpdate=!0),qt}class wm{constructor(e={}){const{canvas:t=jl(),context:n=null,depth:a=!0,stencil:r=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1,outputBufferType:m=Bt}=e;this.isWebGLRenderer=!0;let b;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=n.getContextAttributes().alpha}else b=s;const v=m,g=new Set([ns,ts,es]),u=new Set([Bt,tn,Ai,Ri,Jr,Qr]),E=new Uint32Array(4),R=new Int32Array(4),S=new k;let A=null,y=null;const C=[],_=[];let T=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Jt,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const P=this;let w=!1,D=null,X=null,q=null,O=null;this._outputColorSpace=Ut;let Z=0,G=0,$=null,Q=-1,de=null;const pe=new at,_e=new at;let ze=null;const et=new Xe(0);let Ge=0,Y=t.width,ie=t.height,ee=1,Ce=null,we=null;const Te=new at(0,0,Y,ie),rt=new at(0,0,Y,ie);let De=!1;const je=new ic;let Ve=!1,Oe=!1;const ct=new ut,ft=new k,mt=new at,_t={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let tt=!1;function lt(){return $===null?ee:1}let U=n;function Tt(x,I){return t.getContext(x,I)}try{const x={alpha:!0,depth:a,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Yr}`),t.addEventListener("webglcontextlost",nt,!1),t.addEventListener("webglcontextrestored",Je,!1),t.addEventListener("webglcontextcreationerror",Vt,!1),U===null){const I="webgl2";if(U=Tt(I,x),U===null)throw Tt(I)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(x){throw He("WebGLRenderer: "+x.message),x}let Ze,M,p,N,H,V,te,ae,W,j,re,ve,ce,se,Ee,Ae,Ue,L,ne,K,oe,he,J;function Se(){Ze=new Lh(U),Ze.init(),oe=new Sm(U,Ze),M=new vh(U,Ze,e,oe),p=new bm(U,Ze),M.reversedDepthBuffer&&d&&p.buffers.depth.setReversed(!0),X=U.createFramebuffer(),q=U.createFramebuffer(),O=U.createFramebuffer(),N=new Ih(U),H=new am,V=new xm(U,Ze,p,H,M,oe,N),te=new Ch(P),ae=new Dd(U),he=new xh(U,ae),W=new wh(U,ae,N,he),j=new Nh(U,W,ae,he,N),L=new Ph(U,M,V),Ee=new yh(H),re=new im(P,te,Ze,M,he,Ee),ve=new Am(P,H),ce=new sm,se=new fm(Ze),Ue=new bh(P,te,p,j,b,l),Ae=new _m(P,j,M),J=new Rm(U,N,M,p),ne=new Sh(U,Ze,N),K=new Uh(U,Ze,N),N.programs=re.programs,P.capabilities=M,P.extensions=Ze,P.properties=H,P.renderLists=ce,P.shadowMap=Ae,P.state=p,P.info=N}Se(),v!==Bt&&(T=new Bh(v,t.width,t.height,o,a,r));const be=new Em(P,U);this.xr=be,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const x=Ze.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=Ze.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(x){x!==void 0&&(ee=x,this.setSize(Y,ie,!1))},this.getSize=function(x){return x.set(Y,ie)},this.setSize=function(x,I,z=!0){if(be.isPresenting){Re("WebGLRenderer: Can't change size while VR device is presenting.");return}Y=x,ie=I,t.width=Math.floor(x*ee),t.height=Math.floor(I*ee),z===!0&&(t.style.width=x+"px",t.style.height=I+"px"),T!==null&&T.setSize(t.width,t.height),this.setViewport(0,0,x,I)},this.getDrawingBufferSize=function(x){return x.set(Y*ee,ie*ee).floor()},this.setDrawingBufferSize=function(x,I,z){Y=x,ie=I,ee=z,t.width=Math.floor(x*z),t.height=Math.floor(I*z),this.setViewport(0,0,x,I)},this.setEffects=function(x){if(v===Bt){He("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(x){for(let I=0;I<x.length;I++)if(x[I].isOutputPass===!0){Re("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(x||[])},this.getCurrentViewport=function(x){return x.copy(pe)},this.getViewport=function(x){return x.copy(Te)},this.setViewport=function(x,I,z,B){x.isVector4?Te.set(x.x,x.y,x.z,x.w):Te.set(x,I,z,B),p.viewport(pe.copy(Te).multiplyScalar(ee).round())},this.getScissor=function(x){return x.copy(rt)},this.setScissor=function(x,I,z,B){x.isVector4?rt.set(x.x,x.y,x.z,x.w):rt.set(x,I,z,B),p.scissor(_e.copy(rt).multiplyScalar(ee).round())},this.getScissorTest=function(){return De},this.setScissorTest=function(x){p.setScissorTest(De=x)},this.setOpaqueSort=function(x){Ce=x},this.setTransparentSort=function(x){we=x},this.getClearColor=function(x){return x.copy(Ue.getClearColor())},this.setClearColor=function(){Ue.setClearColor(...arguments)},this.getClearAlpha=function(){return Ue.getClearAlpha()},this.setClearAlpha=function(){Ue.setClearAlpha(...arguments)},this.clear=function(x=!0,I=!0,z=!0){let B=0;if(x){let F=!1;if($!==null){const fe=$.texture.format;F=g.has(fe)}if(F){const fe=$.texture.type,ge=u.has(fe),ue=Ue.getClearColor(),xe=Ue.getClearAlpha(),ye=ue.r,Ie=ue.g,Ne=ue.b;ge?(E[0]=ye,E[1]=Ie,E[2]=Ne,E[3]=xe,U.clearBufferuiv(U.COLOR,0,E)):(R[0]=ye,R[1]=Ie,R[2]=Ne,R[3]=xe,U.clearBufferiv(U.COLOR,0,R))}else B|=U.COLOR_BUFFER_BIT}I&&(B|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),z&&(B|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B!==0&&U.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(x){x.setRenderer(this),D=x},this.dispose=function(){t.removeEventListener("webglcontextlost",nt,!1),t.removeEventListener("webglcontextrestored",Je,!1),t.removeEventListener("webglcontextcreationerror",Vt,!1),Ue.dispose(),ce.dispose(),se.dispose(),H.dispose(),te.dispose(),j.dispose(),he.dispose(),J.dispose(),re.dispose(),be.dispose(),be.removeEventListener("sessionstart",ms),be.removeEventListener("sessionend",gs),wn.stop()};function nt(x){x.preventDefault(),Bs("WebGLRenderer: Context Lost."),w=!0}function Je(){Bs("WebGLRenderer: Context Restored."),w=!1;const x=N.autoReset,I=Ae.enabled,z=Ae.autoUpdate,B=Ae.needsUpdate,F=Ae.type;Se(),N.autoReset=x,Ae.enabled=I,Ae.autoUpdate=z,Ae.needsUpdate=B,Ae.type=F}function Vt(x){He("WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function Wt(x){const I=x.target;I.removeEventListener("dispose",Wt),_c(I)}function _c(x){bc(x),H.remove(x)}function bc(x){const I=H.get(x).programs;I!==void 0&&(I.forEach(function(z){re.releaseProgram(z)}),x.isShaderMaterial&&re.releaseShaderCache(x))}this.renderBufferDirect=function(x,I,z,B,F,fe){I===null&&(I=_t);const ge=F.isMesh&&F.matrixWorld.determinantAffine()<0,ue=vc(x,I,z,B,F);p.setMaterial(B,ge);let xe=z.index,ye=1;if(B.wireframe===!0){if(xe=W.getWireframeAttribute(z),xe===void 0)return;ye=2}const Ie=z.drawRange,Ne=z.attributes.position;let Me=Ie.start*ye,Ke=(Ie.start+Ie.count)*ye;fe!==null&&(Me=Math.max(Me,fe.start*ye),Ke=Math.min(Ke,(fe.start+fe.count)*ye)),xe!==null?(Me=Math.max(Me,0),Ke=Math.min(Ke,xe.count)):Ne!=null&&(Me=Math.max(Me,0),Ke=Math.min(Ke,Ne.count));const st=Ke-Me;if(st<0||st===1/0)return;he.setup(F,B,ue,z,xe);let it,Ye=ne;if(xe!==null&&(it=ae.get(xe),Ye=K,Ye.setIndex(it)),F.isMesh)B.wireframe===!0?(p.setLineWidth(B.wireframeLinewidth*lt()),Ye.setMode(U.LINES)):Ye.setMode(U.TRIANGLES);else if(F.isLine){let xt=B.linewidth;xt===void 0&&(xt=1),p.setLineWidth(xt*lt()),F.isLineSegments?Ye.setMode(U.LINES):F.isLineLoop?Ye.setMode(U.LINE_LOOP):Ye.setMode(U.LINE_STRIP)}else F.isPoints?Ye.setMode(U.POINTS):F.isSprite&&Ye.setMode(U.TRIANGLES);if(F.isBatchedMesh)if(Ze.get("WEBGL_multi_draw"))Ye.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const xt=F._multiDrawStarts,me=F._multiDrawCounts,Ct=F._multiDrawCount,ke=xe?ae.get(xe).bytesPerElement:1,Pt=H.get(B).currentProgram.getUniforms();for(let Xt=0;Xt<Ct;Xt++)Pt.setValue(U,"_gl_DrawID",Xt),Ye.render(xt[Xt]/ke,me[Xt])}else if(F.isInstancedMesh)Ye.renderInstances(Me,st,F.count);else if(z.isInstancedBufferGeometry){const xt=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,me=Math.min(z.instanceCount,xt);Ye.renderInstances(Me,st,me)}else Ye.render(Me,st)};function ps(x,I,z){x.transparent===!0&&x.side===fn&&x.forceSinglePass===!1?(x.side=Rt,x.needsUpdate=!0,Ii(x,I,z),x.side=Ln,x.needsUpdate=!0,Ii(x,I,z),x.side=fn):Ii(x,I,z)}this.compile=function(x,I,z=null){z===null&&(z=x),y=se.get(z),y.init(I),_.push(y),z.traverseVisible(function(F){F.isLight&&F.layers.test(I.layers)&&(y.pushLight(F),F.castShadow&&y.pushShadow(F))}),x!==z&&x.traverseVisible(function(F){F.isLight&&F.layers.test(I.layers)&&(y.pushLight(F),F.castShadow&&y.pushShadow(F))}),y.setupLights();const B=new Set;return x.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const fe=F.material;if(fe)if(Array.isArray(fe))for(let ge=0;ge<fe.length;ge++){const ue=fe[ge];ps(ue,z,F),B.add(ue)}else ps(fe,z,F),B.add(fe)}),y=_.pop(),B},this.compileAsync=function(x,I,z=null){const B=this.compile(x,I,z);return new Promise(F=>{function fe(){if(B.forEach(function(ge){H.get(ge).currentProgram.isReady()&&B.delete(ge)}),B.size===0){F(x);return}setTimeout(fe,10)}Ze.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let va=null;function xc(x){va&&va(x)}function ms(){wn.stop()}function gs(){wn.start()}const wn=new lc;wn.setAnimationLoop(xc),typeof self<"u"&&wn.setContext(self),this.setAnimationLoop=function(x){va=x,be.setAnimationLoop(x),x===null?wn.stop():wn.start()},be.addEventListener("sessionstart",ms),be.addEventListener("sessionend",gs),this.render=function(x,I){if(I!==void 0&&I.isCamera!==!0){He("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;D!==null&&D.renderStart(x,I);const z=be.enabled===!0&&be.isPresenting===!0,B=T!==null&&($===null||z)&&T.begin(P,$);if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),be.enabled===!0&&be.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(be.cameraAutoUpdate===!0&&be.updateCamera(I),I=be.getCamera()),x.isScene===!0&&x.onBeforeRender(P,x,I,$),y=se.get(x,_.length),y.init(I),y.state.textureUnits=V.getTextureUnits(),_.push(y),ct.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),je.setFromProjectionMatrix(ct,$t,I.reversedDepth),Oe=this.localClippingEnabled,Ve=Ee.init(this.clippingPlanes,Oe),A=ce.get(x,C.length),A.init(),C.push(A),be.enabled===!0&&be.isPresenting===!0){const ge=P.xr.getDepthSensingMesh();ge!==null&&ya(ge,I,-1/0,P.sortObjects)}ya(x,I,0,P.sortObjects),A.finish(),P.sortObjects===!0&&A.sort(Ce,we,I.reversedDepth),tt=be.enabled===!1||be.isPresenting===!1||be.hasDepthSensing()===!1,tt&&Ue.addToRenderList(A,x),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ve===!0&&Ee.beginShadows();const F=y.state.shadowsArray;if(Ae.render(F,x,I),Ve===!0&&Ee.endShadows(),(B&&T.hasRenderPass())===!1){const ge=A.opaque,ue=A.transmissive;if(y.setupLights(),I.isArrayCamera){const xe=I.cameras;if(ue.length>0)for(let ye=0,Ie=xe.length;ye<Ie;ye++){const Ne=xe[ye];bs(ge,ue,x,Ne)}tt&&Ue.render(x);for(let ye=0,Ie=xe.length;ye<Ie;ye++){const Ne=xe[ye];_s(A,x,Ne,Ne.viewport)}}else ue.length>0&&bs(ge,ue,x,I),tt&&Ue.render(x),_s(A,x,I)}$!==null&&G===0&&(V.updateMultisampleRenderTarget($),V.updateRenderTargetMipmap($)),B&&T.end(P),x.isScene===!0&&x.onAfterRender(P,x,I),he.resetDefaultState(),Q=-1,de=null,_.pop(),_.length>0?(y=_[_.length-1],V.setTextureUnits(y.state.textureUnits),Ve===!0&&Ee.setGlobalState(P.clippingPlanes,y.state.camera)):y=null,C.pop(),C.length>0?A=C[C.length-1]:A=null,D!==null&&D.renderEnd()};function ya(x,I,z,B){if(x.visible===!1)return;if(x.layers.test(I.layers)){if(x.isGroup)z=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(I);else if(x.isLightProbeGrid)y.pushLightProbeGrid(x);else if(x.isLight)y.pushLight(x),x.castShadow&&y.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||je.intersectsSprite(x)){B&&mt.setFromMatrixPosition(x.matrixWorld).applyMatrix4(ct);const ge=j.update(x),ue=x.material;ue.visible&&A.push(x,ge,ue,z,mt.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||je.intersectsObject(x))){const ge=j.update(x),ue=x.material;if(B&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),mt.copy(x.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),mt.copy(ge.boundingSphere.center)),mt.applyMatrix4(x.matrixWorld).applyMatrix4(ct)),Array.isArray(ue)){const xe=ge.groups;for(let ye=0,Ie=xe.length;ye<Ie;ye++){const Ne=xe[ye],Me=ue[Ne.materialIndex];Me&&Me.visible&&A.push(x,ge,Me,z,mt.z,Ne)}}else ue.visible&&A.push(x,ge,ue,z,mt.z,null)}}const fe=x.children;for(let ge=0,ue=fe.length;ge<ue;ge++)ya(fe[ge],I,z,B)}function _s(x,I,z,B){const{opaque:F,transmissive:fe,transparent:ge}=x;y.setupLightsView(z),Ve===!0&&Ee.setGlobalState(P.clippingPlanes,z),B&&p.viewport(pe.copy(B)),F.length>0&&Ui(F,I,z),fe.length>0&&Ui(fe,I,z),ge.length>0&&Ui(ge,I,z),p.buffers.depth.setTest(!0),p.buffers.depth.setMask(!0),p.buffers.color.setMask(!0),p.setPolygonOffset(!1)}function bs(x,I,z,B){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;if(y.state.transmissionRenderTarget[B.id]===void 0){const Me=Ze.has("EXT_color_buffer_half_float")||Ze.has("EXT_color_buffer_float");y.state.transmissionRenderTarget[B.id]=new Qt(1,1,{generateMipmaps:!0,type:Me?gn:Bt,minFilter:kn,samples:Math.max(4,M.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Be.workingColorSpace})}const fe=y.state.transmissionRenderTarget[B.id],ge=B.viewport||pe;fe.setSize(ge.z*P.transmissionResolutionScale,ge.w*P.transmissionResolutionScale);const ue=P.getRenderTarget(),xe=P.getActiveCubeFace(),ye=P.getActiveMipmapLevel();P.setRenderTarget(fe),P.getClearColor(et),Ge=P.getClearAlpha(),Ge<1&&P.setClearColor(16777215,.5),P.clear(),tt&&Ue.render(z);const Ie=P.toneMapping;P.toneMapping=Jt;const Ne=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),y.setupLightsView(B),Ve===!0&&Ee.setGlobalState(P.clippingPlanes,B),Ui(x,z,B),V.updateMultisampleRenderTarget(fe),V.updateRenderTargetMipmap(fe),Ze.has("WEBGL_multisampled_render_to_texture")===!1){let Me=!1;for(let Ke=0,st=I.length;Ke<st;Ke++){const it=I[Ke],{object:Ye,geometry:xt,material:me,group:Ct}=it;if(me.side===fn&&Ye.layers.test(B.layers)){const ke=me.side;me.side=Rt,me.needsUpdate=!0,xs(Ye,z,B,xt,me,Ct),me.side=ke,me.needsUpdate=!0,Me=!0}}Me===!0&&(V.updateMultisampleRenderTarget(fe),V.updateRenderTargetMipmap(fe))}P.setRenderTarget(ue,xe,ye),P.setClearColor(et,Ge),Ne!==void 0&&(B.viewport=Ne),P.toneMapping=Ie}function Ui(x,I,z){const B=I.isScene===!0?I.overrideMaterial:null;for(let F=0,fe=x.length;F<fe;F++){const ge=x[F],{object:ue,geometry:xe,group:ye}=ge;let Ie=ge.material;Ie.allowOverride===!0&&B!==null&&(Ie=B),ue.layers.test(z.layers)&&xs(ue,I,z,xe,Ie,ye)}}function xs(x,I,z,B,F,fe){x.onBeforeRender(P,I,z,B,F,fe),x.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),F.onBeforeRender(P,I,z,B,x,fe),F.transparent===!0&&F.side===fn&&F.forceSinglePass===!1?(F.side=Rt,F.needsUpdate=!0,P.renderBufferDirect(z,I,B,F,x,fe),F.side=Ln,F.needsUpdate=!0,P.renderBufferDirect(z,I,B,F,x,fe),F.side=fn):P.renderBufferDirect(z,I,B,F,x,fe),x.onAfterRender(P,I,z,B,F,fe)}function Ii(x,I,z){I.isScene!==!0&&(I=_t);const B=H.get(x),F=y.state.lights,fe=y.state.shadowsArray,ge=F.state.version,ue=re.getParameters(x,F.state,fe,I,z,y.state.lightProbeGridArray),xe=re.getProgramCacheKey(ue);let ye=B.programs;B.environment=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?I.environment:null,B.fog=I.fog;const Ie=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap;B.envMap=te.get(x.envMap||B.environment,Ie),B.envMapRotation=B.environment!==null&&x.envMap===null?I.environmentRotation:x.envMapRotation,ye===void 0&&(x.addEventListener("dispose",Wt),ye=new Map,B.programs=ye);let Ne=ye.get(xe);if(Ne!==void 0){if(B.currentProgram===Ne&&B.lightsStateVersion===ge)return vs(x,ue),Ne}else ue.uniforms=re.getUniforms(x),D!==null&&x.isNodeMaterial&&D.build(x,z,ue),x.onBeforeCompile(ue,P),Ne=re.acquireProgram(ue,xe),ye.set(xe,Ne),B.uniforms=ue.uniforms;const Me=B.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(Me.clippingPlanes=Ee.uniform),vs(x,ue),B.needsLights=Mc(x),B.lightsStateVersion=ge,B.needsLights&&(Me.ambientLightColor.value=F.state.ambient,Me.lightProbe.value=F.state.probe,Me.directionalLights.value=F.state.directional,Me.directionalLightShadows.value=F.state.directionalShadow,Me.spotLights.value=F.state.spot,Me.spotLightShadows.value=F.state.spotShadow,Me.rectAreaLights.value=F.state.rectArea,Me.ltc_1.value=F.state.rectAreaLTC1,Me.ltc_2.value=F.state.rectAreaLTC2,Me.pointLights.value=F.state.point,Me.pointLightShadows.value=F.state.pointShadow,Me.hemisphereLights.value=F.state.hemi,Me.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Me.spotLightMatrix.value=F.state.spotLightMatrix,Me.spotLightMap.value=F.state.spotLightMap,Me.pointShadowMatrix.value=F.state.pointShadowMatrix),B.lightProbeGrid=y.state.lightProbeGridArray.length>0,B.currentProgram=Ne,B.uniformsList=null,Ne}function Ss(x){if(x.uniformsList===null){const I=x.currentProgram.getUniforms();x.uniformsList=ca.seqWithValue(I.seq,x.uniforms)}return x.uniformsList}function vs(x,I){const z=H.get(x);z.outputColorSpace=I.outputColorSpace,z.batching=I.batching,z.batchingColor=I.batchingColor,z.instancing=I.instancing,z.instancingColor=I.instancingColor,z.instancingMorph=I.instancingMorph,z.skinning=I.skinning,z.morphTargets=I.morphTargets,z.morphNormals=I.morphNormals,z.morphColors=I.morphColors,z.morphTargetsCount=I.morphTargetsCount,z.numClippingPlanes=I.numClippingPlanes,z.numIntersection=I.numClipIntersection,z.vertexAlphas=I.vertexAlphas,z.vertexTangents=I.vertexTangents,z.toneMapping=I.toneMapping}function Sc(x,I){if(x.length===0)return null;if(x.length===1)return x[0].texture!==null?x[0]:null;S.setFromMatrixPosition(I.matrixWorld);for(let z=0,B=x.length;z<B;z++){const F=x[z];if(F.texture!==null&&F.boundingBox.containsPoint(S))return F}return null}function vc(x,I,z,B,F){I.isScene!==!0&&(I=_t),V.resetTextureUnits();const fe=I.fog,ge=B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial?I.environment:null,ue=$===null?P.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:Be.workingColorSpace,xe=B.isMeshStandardMaterial||B.isMeshLambertMaterial&&!B.envMap||B.isMeshPhongMaterial&&!B.envMap,ye=te.get(B.envMap||ge,xe),Ie=B.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Ne=!!z.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Me=!!z.morphAttributes.position,Ke=!!z.morphAttributes.normal,st=!!z.morphAttributes.color;let it=Jt;B.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(it=P.toneMapping);const Ye=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,xt=Ye!==void 0?Ye.length:0,me=H.get(B),Ct=y.state.lights;if(Ve===!0&&(Oe===!0||x!==de)){const Qe=x===de&&B.id===Q;Ee.setState(B,x,Qe)}let ke=!1;B.version===me.__version?(me.needsLights&&me.lightsStateVersion!==Ct.state.version||me.outputColorSpace!==ue||F.isBatchedMesh&&me.batching===!1||!F.isBatchedMesh&&me.batching===!0||F.isBatchedMesh&&me.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&me.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&me.instancing===!1||!F.isInstancedMesh&&me.instancing===!0||F.isSkinnedMesh&&me.skinning===!1||!F.isSkinnedMesh&&me.skinning===!0||F.isInstancedMesh&&me.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&me.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&me.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&me.instancingMorph===!1&&F.morphTexture!==null||me.envMap!==ye||B.fog===!0&&me.fog!==fe||me.numClippingPlanes!==void 0&&(me.numClippingPlanes!==Ee.numPlanes||me.numIntersection!==Ee.numIntersection)||me.vertexAlphas!==Ie||me.vertexTangents!==Ne||me.morphTargets!==Me||me.morphNormals!==Ke||me.morphColors!==st||me.toneMapping!==it||me.morphTargetsCount!==xt||!!me.lightProbeGrid!=y.state.lightProbeGridArray.length>0)&&(ke=!0):(ke=!0,me.__version=B.version);let Pt=me.currentProgram;ke===!0&&(Pt=Ii(B,I,F),D&&B.isNodeMaterial&&D.onUpdateProgram(B,Pt,me));let Xt=!1,bn=!1,Xn=!1;const $e=Pt.getUniforms(),ot=me.uniforms;if(p.useProgram(Pt.program)&&(Xt=!0,bn=!0,Xn=!0),B.id!==Q&&(Q=B.id,bn=!0),me.needsLights){const Qe=Sc(y.state.lightProbeGridArray,F);me.lightProbeGrid!==Qe&&(me.lightProbeGrid=Qe,bn=!0)}if(Xt||de!==x){p.buffers.depth.getReversed()&&x.reversedDepth!==!0&&(x._reversedDepth=!0,x.updateProjectionMatrix()),$e.setValue(U,"projectionMatrix",x.projectionMatrix),$e.setValue(U,"viewMatrix",x.matrixWorldInverse);const Sn=$e.map.cameraPosition;Sn!==void 0&&Sn.setValue(U,ft.setFromMatrixPosition(x.matrixWorld)),M.logarithmicDepthBuffer&&$e.setValue(U,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&$e.setValue(U,"isOrthographic",x.isOrthographicCamera===!0),de!==x&&(de=x,bn=!0,Xn=!0)}if(me.needsLights&&(Ct.state.directionalShadowMap.length>0&&$e.setValue(U,"directionalShadowMap",Ct.state.directionalShadowMap,V),Ct.state.spotShadowMap.length>0&&$e.setValue(U,"spotShadowMap",Ct.state.spotShadowMap,V),Ct.state.pointShadowMap.length>0&&$e.setValue(U,"pointShadowMap",Ct.state.pointShadowMap,V)),F.isSkinnedMesh){$e.setOptional(U,F,"bindMatrix"),$e.setOptional(U,F,"bindMatrixInverse");const Qe=F.skeleton;Qe&&(Qe.boneTexture===null&&Qe.computeBoneTexture(),$e.setValue(U,"boneTexture",Qe.boneTexture,V))}F.isBatchedMesh&&($e.setOptional(U,F,"batchingTexture"),$e.setValue(U,"batchingTexture",F._matricesTexture,V),$e.setOptional(U,F,"batchingIdTexture"),$e.setValue(U,"batchingIdTexture",F._indirectTexture,V),$e.setOptional(U,F,"batchingColorTexture"),F._colorsTexture!==null&&$e.setValue(U,"batchingColorTexture",F._colorsTexture,V));const xn=z.morphAttributes;if((xn.position!==void 0||xn.normal!==void 0||xn.color!==void 0)&&L.update(F,z,Pt),(bn||me.receiveShadow!==F.receiveShadow)&&(me.receiveShadow=F.receiveShadow,$e.setValue(U,"receiveShadow",F.receiveShadow)),(B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial)&&B.envMap===null&&I.environment!==null&&(ot.envMapIntensity.value=I.environmentIntensity),ot.dfgLUT!==void 0&&(ot.dfgLUT.value=Lm()),bn){if($e.setValue(U,"toneMappingExposure",P.toneMappingExposure),me.needsLights&&yc(ot,Xn),fe&&B.fog===!0&&ve.refreshFogUniforms(ot,fe),ve.refreshMaterialUniforms(ot,B,ee,ie,y.state.transmissionRenderTarget[x.id]),me.needsLights&&me.lightProbeGrid){const Qe=me.lightProbeGrid;ot.probesSH.value=Qe.texture,ot.probesMin.value.copy(Qe.boundingBox.min),ot.probesMax.value.copy(Qe.boundingBox.max),ot.probesResolution.value.copy(Qe.resolution)}ca.upload(U,Ss(me),ot,V)}if(B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(ca.upload(U,Ss(me),ot,V),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&$e.setValue(U,"center",F.center),$e.setValue(U,"modelViewMatrix",F.modelViewMatrix),$e.setValue(U,"normalMatrix",F.normalMatrix),$e.setValue(U,"modelMatrix",F.matrixWorld),B.uniformsGroups!==void 0){const Qe=B.uniformsGroups;for(let Sn=0,Zn=Qe.length;Sn<Zn;Sn++){const ys=Qe[Sn];J.update(ys,Pt),J.bind(ys,Pt)}}return Pt}function yc(x,I){x.ambientLightColor.needsUpdate=I,x.lightProbe.needsUpdate=I,x.directionalLights.needsUpdate=I,x.directionalLightShadows.needsUpdate=I,x.pointLights.needsUpdate=I,x.pointLightShadows.needsUpdate=I,x.spotLights.needsUpdate=I,x.spotLightShadows.needsUpdate=I,x.rectAreaLights.needsUpdate=I,x.hemisphereLights.needsUpdate=I}function Mc(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return Z},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return $},this.setRenderTargetTextures=function(x,I,z){const B=H.get(x);B.__autoAllocateDepthBuffer=x.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),H.get(x.texture).__webglTexture=I,H.get(x.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:z,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(x,I){const z=H.get(x);z.__webglFramebuffer=I,z.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(x,I=0,z=0){$=x,Z=I,G=z;let B=null,F=!1,fe=!1;if(x){const ue=H.get(x);if(ue.__useDefaultFramebuffer!==void 0){p.bindFramebuffer(U.FRAMEBUFFER,ue.__webglFramebuffer),pe.copy(x.viewport),_e.copy(x.scissor),ze=x.scissorTest,p.viewport(pe),p.scissor(_e),p.setScissorTest(ze),Q=-1;return}else if(ue.__webglFramebuffer===void 0)V.setupRenderTarget(x);else if(ue.__hasExternalTextures)V.rebindTextures(x,H.get(x.texture).__webglTexture,H.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){const Ie=x.depthTexture;if(ue.__boundDepthTexture!==Ie){if(Ie!==null&&H.has(Ie)&&(x.width!==Ie.image.width||x.height!==Ie.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");V.setupDepthRenderbuffer(x)}}const xe=x.texture;(xe.isData3DTexture||xe.isDataArrayTexture||xe.isCompressedArrayTexture)&&(fe=!0);const ye=H.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(ye[I])?B=ye[I][z]:B=ye[I],F=!0):x.samples>0&&V.useMultisampledRTT(x)===!1?B=H.get(x).__webglMultisampledFramebuffer:Array.isArray(ye)?B=ye[z]:B=ye,pe.copy(x.viewport),_e.copy(x.scissor),ze=x.scissorTest}else pe.copy(Te).multiplyScalar(ee).floor(),_e.copy(rt).multiplyScalar(ee).floor(),ze=De;if(z!==0&&(B=X),p.bindFramebuffer(U.FRAMEBUFFER,B)&&p.drawBuffers(x,B),p.viewport(pe),p.scissor(_e),p.setScissorTest(ze),F){const ue=H.get(x.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+I,ue.__webglTexture,z)}else if(fe){const ue=I;for(let xe=0;xe<x.textures.length;xe++){const ye=H.get(x.textures[xe]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+xe,ye.__webglTexture,z,ue)}}else if(x!==null&&z!==0){const ue=H.get(x.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,ue.__webglTexture,z)}Q=-1},this.readRenderTargetPixels=function(x,I,z,B,F,fe,ge,ue=0){if(!(x&&x.isWebGLRenderTarget)){He("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xe=H.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&ge!==void 0&&(xe=xe[ge]),xe){p.bindFramebuffer(U.FRAMEBUFFER,xe);try{const ye=x.textures[ue],Ie=ye.format,Ne=ye.type;if(x.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+ue),!M.textureFormatReadable(Ie)){He("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!M.textureTypeReadable(Ne)){He("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=x.width-B&&z>=0&&z<=x.height-F&&U.readPixels(I,z,B,F,oe.convert(Ie),oe.convert(Ne),fe)}finally{const ye=$!==null?H.get($).__webglFramebuffer:null;p.bindFramebuffer(U.FRAMEBUFFER,ye)}}},this.readRenderTargetPixelsAsync=async function(x,I,z,B,F,fe,ge,ue=0){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xe=H.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&ge!==void 0&&(xe=xe[ge]),xe)if(I>=0&&I<=x.width-B&&z>=0&&z<=x.height-F){p.bindFramebuffer(U.FRAMEBUFFER,xe);const ye=x.textures[ue],Ie=ye.format,Ne=ye.type;if(x.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+ue),!M.textureFormatReadable(Ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!M.textureTypeReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Me=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Me),U.bufferData(U.PIXEL_PACK_BUFFER,fe.byteLength,U.STREAM_READ),U.readPixels(I,z,B,F,oe.convert(Ie),oe.convert(Ne),0);const Ke=$!==null?H.get($).__webglFramebuffer:null;p.bindFramebuffer(U.FRAMEBUFFER,Ke);const st=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Yl(U,st,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Me),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,fe),U.deleteBuffer(Me),U.deleteSync(st),fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(x,I=null,z=0){const B=Math.pow(2,-z),F=Math.floor(x.image.width*B),fe=Math.floor(x.image.height*B),ge=I!==null?I.x:0,ue=I!==null?I.y:0;V.setTexture2D(x,0),U.copyTexSubImage2D(U.TEXTURE_2D,z,0,0,ge,ue,F,fe),p.unbindTexture()},this.copyTextureToTexture=function(x,I,z=null,B=null,F=0,fe=0){let ge,ue,xe,ye,Ie,Ne,Me,Ke,st;const it=x.isCompressedTexture?x.mipmaps[fe]:x.image;if(z!==null)ge=z.max.x-z.min.x,ue=z.max.y-z.min.y,xe=z.isBox3?z.max.z-z.min.z:1,ye=z.min.x,Ie=z.min.y,Ne=z.isBox3?z.min.z:0;else{const ot=Math.pow(2,-F);ge=Math.floor(it.width*ot),ue=Math.floor(it.height*ot),x.isDataArrayTexture?xe=it.depth:x.isData3DTexture?xe=Math.floor(it.depth*ot):xe=1,ye=0,Ie=0,Ne=0}B!==null?(Me=B.x,Ke=B.y,st=B.z):(Me=0,Ke=0,st=0);const Ye=oe.convert(I.format),xt=oe.convert(I.type);let me;I.isData3DTexture?(V.setTexture3D(I,0),me=U.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(V.setTexture2DArray(I,0),me=U.TEXTURE_2D_ARRAY):(V.setTexture2D(I,0),me=U.TEXTURE_2D),p.activeTexture(U.TEXTURE0),p.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,I.flipY),p.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),p.pixelStorei(U.UNPACK_ALIGNMENT,I.unpackAlignment);const Ct=p.getParameter(U.UNPACK_ROW_LENGTH),ke=p.getParameter(U.UNPACK_IMAGE_HEIGHT),Pt=p.getParameter(U.UNPACK_SKIP_PIXELS),Xt=p.getParameter(U.UNPACK_SKIP_ROWS),bn=p.getParameter(U.UNPACK_SKIP_IMAGES);p.pixelStorei(U.UNPACK_ROW_LENGTH,it.width),p.pixelStorei(U.UNPACK_IMAGE_HEIGHT,it.height),p.pixelStorei(U.UNPACK_SKIP_PIXELS,ye),p.pixelStorei(U.UNPACK_SKIP_ROWS,Ie),p.pixelStorei(U.UNPACK_SKIP_IMAGES,Ne);const Xn=x.isDataArrayTexture||x.isData3DTexture,$e=I.isDataArrayTexture||I.isData3DTexture;if(x.isDepthTexture){const ot=H.get(x),xn=H.get(I),Qe=H.get(ot.__renderTarget),Sn=H.get(xn.__renderTarget);p.bindFramebuffer(U.READ_FRAMEBUFFER,Qe.__webglFramebuffer),p.bindFramebuffer(U.DRAW_FRAMEBUFFER,Sn.__webglFramebuffer);for(let Zn=0;Zn<xe;Zn++)Xn&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,H.get(x).__webglTexture,F,Ne+Zn),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,H.get(I).__webglTexture,fe,st+Zn)),U.blitFramebuffer(ye,Ie,ge,ue,Me,Ke,ge,ue,U.DEPTH_BUFFER_BIT,U.NEAREST);p.bindFramebuffer(U.READ_FRAMEBUFFER,null),p.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(F!==0||x.isRenderTargetTexture||H.has(x)){const ot=H.get(x),xn=H.get(I);p.bindFramebuffer(U.READ_FRAMEBUFFER,q),p.bindFramebuffer(U.DRAW_FRAMEBUFFER,O);for(let Qe=0;Qe<xe;Qe++)Xn?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,ot.__webglTexture,F,Ne+Qe):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,ot.__webglTexture,F),$e?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,xn.__webglTexture,fe,st+Qe):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,xn.__webglTexture,fe),F!==0?U.blitFramebuffer(ye,Ie,ge,ue,Me,Ke,ge,ue,U.COLOR_BUFFER_BIT,U.NEAREST):$e?U.copyTexSubImage3D(me,fe,Me,Ke,st+Qe,ye,Ie,ge,ue):U.copyTexSubImage2D(me,fe,Me,Ke,ye,Ie,ge,ue);p.bindFramebuffer(U.READ_FRAMEBUFFER,null),p.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else $e?x.isDataTexture||x.isData3DTexture?U.texSubImage3D(me,fe,Me,Ke,st,ge,ue,xe,Ye,xt,it.data):I.isCompressedArrayTexture?U.compressedTexSubImage3D(me,fe,Me,Ke,st,ge,ue,xe,Ye,it.data):U.texSubImage3D(me,fe,Me,Ke,st,ge,ue,xe,Ye,xt,it):x.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,fe,Me,Ke,ge,ue,Ye,xt,it.data):x.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,fe,Me,Ke,it.width,it.height,Ye,it.data):U.texSubImage2D(U.TEXTURE_2D,fe,Me,Ke,ge,ue,Ye,xt,it);p.pixelStorei(U.UNPACK_ROW_LENGTH,Ct),p.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ke),p.pixelStorei(U.UNPACK_SKIP_PIXELS,Pt),p.pixelStorei(U.UNPACK_SKIP_ROWS,Xt),p.pixelStorei(U.UNPACK_SKIP_IMAGES,bn),fe===0&&I.generateMipmaps&&U.generateMipmap(me),p.unbindTexture()},this.initRenderTarget=function(x){H.get(x).__webglFramebuffer===void 0&&V.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?V.setTextureCube(x,0):x.isData3DTexture?V.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?V.setTexture2DArray(x,0):V.setTexture2D(x,0),p.unbindTexture()},this.resetState=function(){Z=0,G=0,$=null,p.reset(),he.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return $t}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Be._getDrawingBufferColorSpace(e),t.unpackColorSpace=Be._getUnpackColorSpace()}}const Um=""+new URL("bolivar-DAmw7Pau.png",import.meta.url).href,Im=""+new URL("cohiba-hV1Gq32A.png",import.meta.url).href,Pm=""+new URL("cuaba-0WSYhaNV.png",import.meta.url).href,Nm=""+new URL("diplomaticos-C_cEcRuX.png",import.meta.url).href,Dm=""+new URL("el-rey-del-mundo-fAydttHL.jpg",import.meta.url).href,Bm=""+new URL("fonseca-CD1rxTkv.png",import.meta.url).href,Fm=""+new URL("la-flor-de-cano-CZbf_QjQ.jpg",import.meta.url).href,Om=""+new URL("hoyo-de-monterrey-rqDxmP8O.png",import.meta.url).href,km=""+new URL("h-upmann-DnoM1k-M.png",import.meta.url).href,Hm=""+new URL("jose-l-piedra-CKArbdJv.png",import.meta.url).href,zm=""+new URL("juan-lopez-DHwcP1vQ.png",import.meta.url).href,Gm=""+new URL("la-gloria-cubana-C52SKp7F.png",import.meta.url).href,Vm=""+new URL("montecristo-B-_mXGSK.png",import.meta.url).href,Wm=""+new URL("partagas-D_alk2DX.png",import.meta.url).href,Xm=""+new URL("por-larranaga-VovdbPDn.png",import.meta.url).href,Zm=""+new URL("punch-D9qBiuOX.png",import.meta.url).href,qm=""+new URL("quai-dorsay-BLhlMEiK.png",import.meta.url).href,Km=""+new URL("quintero-B8PjEEgU.png",import.meta.url).href,jm=""+new URL("rafael-gonzalez-8vdFXFnN.png",import.meta.url).href,Ym=""+new URL("ramon-allones-dgHwWREU.jpg",import.meta.url).href,$m=""+new URL("romeo-y-julieta-BkRaRHj2.png",import.meta.url).href,Jm=""+new URL("san-cristobal-de-la-habana-BDrfomcb.jpg",import.meta.url).href,Qm=""+new URL("sancho-panza-dEucs0rV.png",import.meta.url).href,eg=""+new URL("saint-luis-rey-DyX4sH73.png",import.meta.url).href,tg=""+new URL("trinidad-C-IAfVF5.png",import.meta.url).href,ng=""+new URL("vegas-robaina-L5pGaAhH.png",import.meta.url).href,ig=""+new URL("vegueros-CITVUQrS.png",import.meta.url).href,ar=[{name:"Bolivar",image:Um,transparent:!1},{name:"Cohiba",image:Im,transparent:!0},{name:"Cuaba",image:Pm,transparent:!1},{name:"Diplomaticos",image:Nm,transparent:!1},{name:"El Rey del Mundo",image:Dm,transparent:!1},{name:"Fonseca",image:Bm,transparent:!1},{name:"La Flor de Cano",image:Fm,transparent:!1},{name:"Hoyo de Monterrey",image:Om,transparent:!1},{name:"H.Upmann",image:km,transparent:!1},{name:"Jose L Piedra",image:Hm,transparent:!0},{name:"Juan Lopez",image:zm,transparent:!1},{name:"La Gloria Cubana",image:Gm,transparent:!1},{name:"Montecristo",image:Vm,transparent:!1},{name:"Partagas",image:Wm,transparent:!1},{name:"Por Larranaga",image:Xm,transparent:!1},{name:"Punch",image:Zm,transparent:!1},{name:"Quai D'Orsay",image:qm,transparent:!1,backgroundLumCutoff:220},{name:"Quintero",image:Km,transparent:!0},{name:"Rafael Gonzalez",image:jm,transparent:!1},{name:"Ramon Allones",image:Ym,transparent:!1},{name:"Romeo y Julieta",image:$m,transparent:!1,thinStroke:!0},{name:"San Cristobal de la Habana",image:Jm,transparent:!1},{name:"Sancho Panza",image:Qm,transparent:!1},{name:"Saint Luis Rey",image:eg,transparent:!1},{name:"Trinidad",image:tg,transparent:!0},{name:"Vegas Robaina",image:ng,transparent:!1},{name:"Vegueros",image:ig,transparent:!0}],Ao=.0022,Ro=.005,Co=.94,Lo=5e-5,na=Math.PI/2.4;function ag(i){return new Promise((e,t)=>{const n=new Image;n.crossOrigin="anonymous",n.onload=()=>e(n),n.onerror=t,n.src=i})}function rg(i,e,t,n,a,r){i.beginPath(),i.moveTo(e+r,t),i.arcTo(e+n,t,e+n,t+a,r),i.arcTo(e+n,t+a,e,t+a,r),i.arcTo(e,t+a,e,t,r),i.arcTo(e,t,e+n,t,r),i.closePath()}function sg(i){const e=parseInt(i.slice(1),16);return[e>>16&255,e>>8&255,e&255]}function og(i,e){const t=i.getContext("2d");t.globalCompositeOperation="source-in",t.fillStyle=e,t.fillRect(0,0,i.width,i.height),t.globalCompositeOperation="source-over"}function wo(i,e,t){const n=i.getContext("2d"),{width:a,height:r}=i,s=n.getImageData(0,0,a,r),o=s.data,[l,c,f]=sg(e);let h=255,d=0;for(let v=0;v<o.length;v+=4){const g=(o[v]+o[v+1]+o[v+2])/3;g<h&&(h=g),g>d&&(d=g)}const b=Math.max(1,(t??d)-h);for(let v=0;v<o.length;v+=4){const u=((o[v]+o[v+1]+o[v+2])/3-h)/b;o[v]=l,o[v+1]=c,o[v+2]=f,o[v+3]=Math.max(0,Math.min(255,Math.round(255*(1-u))))}n.putImageData(s,0,0)}async function cg(){const i=document.createElement("canvas");i.width=3072,i.height=1536;const e=i.getContext("2d");e.fillStyle="#211b15",e.fillRect(0,0,i.width,i.height);const t="#a6854e",n="#ede3d0",a=6,r=Math.ceil(ar.length/a),s=i.width*.015,o=i.height*.06,l=i.height*.06,c=i.width*.01,f=i.width-s*2,h=(i.height-o-l-c*(r-1))/r,d=await Promise.all(ar.map(b=>ag(b.image)));d.forEach((b,v)=>{const g=Math.floor(v/a),u=v-g*a,E=Math.min(a,d.length-g*a),R=(f-c*(E-1))/E,S=s+u*(R+c),A=o+g*(h+c),y=S+R/2,C=A+h/2;rg(e,S,A,R,h,R*.04),e.strokeStyle=t,e.lineWidth=3,e.stroke();const _=R*.86,T=h*.86,P=Math.min(_/b.naturalWidth,T/b.naturalHeight),w=Math.round(b.naturalWidth*P),D=Math.round(b.naturalHeight*P),X=document.createElement("canvas");X.width=w,X.height=D;const q=ar[v];if(q.transparent)X.getContext("2d").drawImage(b,0,0,w,D),og(X,n);else if(q.thinStroke){const O=document.createElement("canvas");O.width=b.naturalWidth,O.height=b.naturalHeight,O.getContext("2d").drawImage(b,0,0),wo(O,n),X.getContext("2d").drawImage(O,0,0,w,D)}else X.getContext("2d").drawImage(b,0,0,w,D),wo(X,n,q.backgroundLumCutoff);e.drawImage(X,y-w/2,C-D/2,w,D)});const m=new Md(i);return m.colorSpace=Ut,m}function lg(i){if(!i)return()=>{};let e=!1;const t=jr(),n=new fd,a=new Dt(38,1,.1,10);a.position.z=3.1;const r=new wm({antialias:!0,alpha:!0});r.setPixelRatio(Math.min(window.devicePixelRatio,2)),i.appendChild(r.domElement);let s=null,o=null,l=null,c=null;cg().then(y=>{if(e){y.dispose();return}c=y,c.anisotropy=r.capabilities.getMaxAnisotropy(),o=new cs(1,48,48),l=new os({map:c}),s=new nn(o,l),n.add(s)});let f=0,h=t?0:Ao,d=!1,m=0,b=0;function v(){const y=i.clientWidth,C=i.clientHeight;y===0||C===0||(a.aspect=y/C,a.updateProjectionMatrix(),r.setSize(y,C))}const g=new ResizeObserver(v);g.observe(i),v();const u=y=>{s&&(d=!0,m=y.clientX,b=y.clientY,f=0,h=0,r.domElement.setPointerCapture(y.pointerId))},E=y=>{if(!d||!s)return;const C=y.clientX-m,_=y.clientY-b;m=y.clientX,b=y.clientY,h=C*Ro,f=_*Ro,s.rotation.y+=h,s.rotation.x=Math.max(-na,Math.min(na,s.rotation.x+f))},R=()=>{d=!1};r.domElement.addEventListener("pointerdown",u),r.domElement.addEventListener("pointermove",E),r.domElement.addEventListener("pointerup",R),r.domElement.addEventListener("pointercancel",R),r.domElement.addEventListener("pointerleave",()=>d&&R());let S=0;function A(){S=requestAnimationFrame(A),s&&!d&&(Math.abs(f)>Lo||Math.abs(h)>Lo?(s.rotation.y+=h,s.rotation.x=Math.max(-na,Math.min(na,s.rotation.x+f)),f*=Co,h*=Co):t||(h+=(Ao-h)*.02,s.rotation.y+=h)),r.render(n,a)}return A(),function(){e=!0,cancelAnimationFrame(S),g.disconnect(),r.domElement.removeEventListener("pointerdown",u),r.domElement.removeEventListener("pointermove",E),r.domElement.removeEventListener("pointerup",R),r.domElement.removeEventListener("pointercancel",R),o==null||o.dispose(),l==null||l.dispose(),c==null||c.dispose(),r.dispose(),r.domElement.parentNode===i&&i.removeChild(r.domElement)}}const dg=Object.freeze(Object.defineProperty({__proto__:null,initSphere:lg},Symbol.toStringTag,{value:"Module"}));
