let cachedInstagramPosts: any[] = [];
let cacheTimestamp = 0;
const CACHE_DURATION = 60 * 60 * 1000; // 1 hour in milliseconds

const mockInstagramPosts = [
    {
        "id": "18134503813408442",
        "media_url": "https://scontent-sea1-1.cdninstagram.com/v/t51.75761-15/495041845_17940986466004872_7829788149509701674_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=104&ccb=1-7&_nc_sid=18de74&_nc_ohc=FU9Lhq5YHpEQ7kNvwFgaE6K&_nc_oc=AdncMcpix794cYjHBdE7HQ9Mow6EjC-6mB2OYiZ8u540XJLQdXUiCSW54MfiCl9vHFA&_nc_zt=23&_nc_ht=scontent-sea1-1.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=PAGJzLK2Nf3PZYf_OzyinA&oh=00_AfMRIdLf1se8Ty4GqHRYZW7NUSL1GMz9T5zUUZQ-Onik-Q&oe=684D4873",
        "permalink": "https://www.instagram.com/p/DJNFwu3zKSU/",
        "media_type": "CAROUSEL_ALBUM",
        "timestamp": "2025-05-03T20:17:43+0000",
        "username": "lukashahnart"
    },
    {
        "id": "18134564047406920",
        "caption": "I 🫶 my explorer lol\n\nZeiss 28mm 2.8 w/ LUMIX S5",
        "media_url": "https://scontent-sea1-1.cdninstagram.com/v/t51.75761-15/491441307_17939898225004872_6192323722195466338_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=104&ccb=1-7&_nc_sid=18de74&_nc_ohc=sugPj0X0wTUQ7kNvwFxXqS6&_nc_oc=AdlxOzjW3wIm0hBDmakGlu8fhOH35aRucD7XP9HBuCYwLq4ZYXjTTQr7l9skWNRSNd0&_nc_zt=23&_nc_ht=scontent-sea1-1.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=PAGJzLK2Nf3PZYf_OzyinA&oh=00_AfMMxCCTKVclVNm99g5JbNSkx1FluW6JpNgY8d3KM9-Vvg&oe=684D47C9",
        "permalink": "https://www.instagram.com/p/DI0QXuux3NU/",
        "media_type": "IMAGE",
        "timestamp": "2025-04-24T04:49:24+0000",
        "username": "lukashahnart"
    },
    {
        "id": "18077034283801693",
        "caption": "Another pic, don’t mind me 👀\nI like the composition on this photo.",
        "media_url": "https://scontent-sea1-1.cdninstagram.com/v/t51.75761-15/491458495_17939332860004872_3650366410121753531_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=103&ccb=1-7&_nc_sid=18de74&_nc_ohc=hNjXofGRUCgQ7kNvwGSVY9d&_nc_oc=Adl4UVEoSdAhx0uLinsTE7z9OEnB6CN5OLqmGLZhur7OwwpX1CNyJzOwUSRekp66txk&_nc_zt=23&_nc_ht=scontent-sea1-1.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=PAGJzLK2Nf3PZYf_OzyinA&oh=00_AfMzJzqqdYSqUwIC1pcI4EWT8MggNFkf558VUojsbEEU_g&oe=684D230D",
        "permalink": "https://www.instagram.com/p/DIm6eabzvKR/",
        "media_type": "IMAGE",
        "timestamp": "2025-04-19T00:27:57+0000",
        "username": "lukashahnart"
    },
    {
        "id": "17854287225423572",
        "caption": "Probably too much film grain 😜\n\nExperimented with bracketing exposures, but instead of taking multiple shots, using the same shot and making a copy of it —one for the shadows and one for the highlights and then merging them. Was able to get an insane about of dynamic range without sacrificing contrast.",
        "media_url": "https://scontent-sea1-1.cdninstagram.com/v/t51.75761-15/490789742_17939112927004872_4713029885796879428_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=103&ccb=1-7&_nc_sid=18de74&_nc_ohc=LfiwCQS0s5QQ7kNvwH0XP1k&_nc_oc=AdlP7VZEypsCjeJ9OnX6XBdd2O4_L3YzYGM40BKbKDdNT9ZujcEG0vv3Nkhbpb9pUy8&_nc_zt=23&_nc_ht=scontent-sea1-1.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=PAGJzLK2Nf3PZYf_OzyinA&oh=00_AfPFHSjsiGvTVmffgDc5l4sFIibirkDOOdU8rqjYGiXIcQ&oe=684D2635",
        "permalink": "https://www.instagram.com/p/DIhtqKET0xH/",
        "media_type": "CAROUSEL_ALBUM",
        "timestamp": "2025-04-16T23:59:45+0000",
        "username": "lukashahnart"
    },
    {
        "id": "18064534633932198",
        "caption": "It’s a flower!\n\nFuji 400, Zeiss 28mm f/2.8",
        "media_url": "https://scontent-sea1-1.cdninstagram.com/v/t51.75761-15/484330794_17935628496004872_724493988893383484_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=110&ccb=1-7&_nc_sid=18de74&_nc_ohc=kKNZT8nrysQQ7kNvwFinqui&_nc_oc=Admlm3AUZlwbZEu8L4Mh006Y5v01Ohnc_cQBHJy7V9clHY-fkbIwp2pHVbNUoxZ302Q&_nc_zt=23&_nc_ht=scontent-sea1-1.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=PAGJzLK2Nf3PZYf_OzyinA&oh=00_AfPBUdeE-HfWuZCLXSz-4Ntr8WMXj9dDjL-IoOTDDfbwcQ&oe=684D385E",
        "permalink": "https://www.instagram.com/p/DHP33Y1OXjp/",
        "media_type": "IMAGE",
        "timestamp": "2025-03-16T05:11:13+0000",
        "username": "lukashahnart"
    },
    {
        "id": "18353642779181634",
        "caption": "Stock:  Fuji 200 @ 125 \nLens: Zeiss 28mm f/2.8\nDeveloped in CS41 and DSLR scanned by me. 😜",
        "media_url": "https://scontent-sea1-1.cdninstagram.com/v/t51.75761-15/483877678_17935114416004872_1283121835657186622_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=106&ccb=1-7&_nc_sid=18de74&_nc_ohc=8vWI8jcErnsQ7kNvwEJAGuA&_nc_oc=Adl9rg5uTnkzANo5uTvhMikU-6TSljr_uI_mVS3kxVjuT1riQPMgvwXK0pGoCt_743c&_nc_zt=23&_nc_ht=scontent-sea1-1.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=PAGJzLK2Nf3PZYf_OzyinA&oh=00_AfN8XuQFtXzh9UXnU14OFQPKyLdpS3VbDNcMby-6xR-IYQ&oe=684D4ACD",
        "permalink": "https://www.instagram.com/p/DHFb4_4xcT3/",
        "media_type": "IMAGE",
        "timestamp": "2025-03-12T03:54:22+0000",
        "username": "lukashahnart"
    },
    {
        "id": "18060795205951454",
        "caption": "Found this old Minolta 50mm lens. Really loving the look wide open. Doesn’t flare as much as my FD lenses which is lovely. \n\nLUMIX S5 w/ Minolta MC 50mm f/1.4",
        "media_url": "https://scontent-sea1-1.cdninstagram.com/v/t51.75761-15/481444095_17933598510004872_2352317439794317531_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=110&ccb=1-7&_nc_sid=18de74&_nc_ohc=cEXTLEAhenkQ7kNvwHlnU8p&_nc_oc=AdnLCJjC6cXHnxb9Eu9A2IFkcDgqk-nCRyUEJEfjfVuCCnRbMH4y989I34o2rBMQ5bg&_nc_zt=23&_nc_ht=scontent-sea1-1.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=PAGJzLK2Nf3PZYf_OzyinA&oh=00_AfPDkZEie3VoDzK0PWBuTUenuNGzXjThogsm6WOBPfKMTA&oe=684D2748",
        "permalink": "https://www.instagram.com/p/DGmV3I5vsg8/",
        "media_type": "CAROUSEL_ALBUM",
        "timestamp": "2025-02-28T02:05:14+0000",
        "username": "lukashahnart"
    },
    {
        "id": "18038440820171305",
        "caption": "Just got my first roll of film back from the lab! Kinda bummed about the light leaks, but they turned out pretty cool imo.\n\nShot on Fuji 400, Contax 137 MA, Zeiss 28mm 2.8.",
        "media_url": "https://scontent-sea1-1.cdninstagram.com/v/t51.75761-15/481485330_17932954836004872_5205325404096410449_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=104&ccb=1-7&_nc_sid=18de74&_nc_ohc=H8LCOcVHAVgQ7kNvwE5lLrb&_nc_oc=AdmKSNAoyj4FtiguGjrrTbd7iS0Mi3c4IuYH4hKU9_Reqx0n2D2vRaREjhubjQ_88KM&_nc_zt=23&_nc_ht=scontent-sea1-1.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=PAGJzLK2Nf3PZYf_OzyinA&oh=00_AfOFe_T5EKW3mtkktPFpRqoGTeBxAvNa2WK2bZUNtw_lzA&oe=684D4E78",
        "permalink": "https://www.instagram.com/p/DGY5pU4zjPW/",
        "media_type": "CAROUSEL_ALBUM",
        "timestamp": "2025-02-22T20:48:33+0000",
        "username": "lukashahnart"
    },
    {
        "id": "18473444818049950",
        "caption": "Blue jay. \n\nCreated in Procreate.",
        "media_url": "https://scontent-sea1-1.cdninstagram.com/v/t51.29350-15/471454039_534141443008271_8837424211264885670_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=108&ccb=1-7&_nc_sid=18de74&_nc_ohc=2AQ1lBTeURcQ7kNvwEw5bP7&_nc_oc=Adm6f8maK2pEMtBSwCe038NtwwiEw1-j4qayE_KGqFeCwCbFVNMrwCerYhfwsOKhM_w&_nc_zt=23&_nc_ht=scontent-sea1-1.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=PAGJzLK2Nf3PZYf_OzyinA&oh=00_AfPdNlLMK2DMA9HQ-_FbxqT5yvTEY9fZnlIuIy2BnsvvZg&oe=684D58B8",
        "permalink": "https://www.instagram.com/p/DD8seNNRV1w/",
        "media_type": "IMAGE",
        "timestamp": "2024-12-24T04:51:55+0000",
        "username": "lukashahnart"
    },
    {
        "id": "18421258765071272",
        "caption": "A grade I did on a recent video with @brandonplumlee for his upcoming song Tightrope.",
        "media_url": "https://scontent-sea1-1.cdninstagram.com/o1/v/t2/f2/m82/AQMcOzQkboux3BfVB9gK6j3VqMXDWRAC0gfcbYoJzjMYpEQwjnFppL8cAsuA0sRCMzpHXxEOokiQD4qJfI_B8H5yA3erAl8ST2WcdsM.mp4?_nc_cat=101&_nc_sid=5e9851&_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_ohc=fdUIPypMw_IQ7kNvwGQ3Hl-&efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5JTlNUQUdSQU0uQ0xJUFMuQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSIsInhwdl9hc3NldF9pZCI6MTQ2NjE3OTAwNDI5MDYzMSwidmlfdXNlY2FzZV9pZCI6MTAwOTksImR1cmF0aW9uX3MiOjE0LCJ1cmxnZW5fc291cmNlIjoid3d3In0%3D&ccb=17-1&vs=635b7713b00653e6&_nc_vs=HBksFQIYT2lnX3hwdl9yZWVsc19wZXJtYW5lbnRfcHJvZC9GQjQ0OTJCNDg0M0I5OEVDMzRBMjQxNEM5NTAxMDM5Ql92aWRlb19kYXNoaW5pdC5tcDQVAALIARIAFQIYOnBhc3N0aHJvdWdoX2V2ZXJzdG9yZS9HS0JjdWhxSlZEWm1meVFCQUtNelJSRF92aWRTYnFfRUFBQUYVAgLIARIAKAAYABsCiAd1c2Vfb2lsATEScHJvZ3Jlc3NpdmVfcmVjaXBlATEVAAAmjtnS6-zemgUVAigCQzMsF0AtnKwIMSbpGBJkYXNoX2Jhc2VsaW5lXzFfdjERAHX-B2XmnQEA&_nc_zt=28&oh=00_AfPduQMl0n8rVW2lDF8QKCT6krnQqz-okj5qchfTT4J5JA&oe=684955FA",
        "permalink": "https://www.instagram.com/reel/C8QQ439o2GC/",
        "media_type": "VIDEO",
        "thumbnail_url": "https://scontent-sea1-1.cdninstagram.com/v/t51.29350-15/448448559_7777180709063043_5409485584113607530_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=101&ccb=1-7&_nc_sid=18de74&_nc_ohc=l2sj2OVAe4oQ7kNvwGLwak_&_nc_oc=AdlCJ3bFK7ybnVQfVd9IHfzsxtmtYKcUMQGS75SJCFqeeT4Xmbq5dbOVTCfHdTDWjxk&_nc_zt=23&_nc_ht=scontent-sea1-1.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=PAGJzLK2Nf3PZYf_OzyinA&oh=00_AfNIYOsCeZ5dlEmvf9sQ4nekA1WmJNAL5ph6OSEzaCISvQ&oe=684D458E",
        "timestamp": "2024-06-15T23:06:21+0000",
        "username": "lukashahnart"
    },
    {
        "id": "17851894206158607",
        "caption": "Color grade from a recent music video for @brandonplumlee ’s upcoming single, Caffeine!",
        "media_url": "https://scontent-sea1-1.cdninstagram.com/o1/v/t2/f2/m82/AQNepqUytZjLamhzAR5mRCBl9femNSmIcgQ1NlrmlRxyVo4aQQ1SvSAfgMJJhFg_gjzAuzm_vCy2BWPVd0wYfx4bya4l-_3SP9p1RPA.mp4?_nc_cat=107&_nc_sid=5e9851&_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_ohc=ky3Zufs9HyMQ7kNvwEXTBZs&efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5JTlNUQUdSQU0uQ0xJUFMuQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSIsInhwdl9hc3NldF9pZCI6MTg0OTI4OTIxMjI1MTg1OSwiYXNzZXRfYWdlX2RheXMiOjQ0NCwidmlfdXNlY2FzZV9pZCI6MTAwOTksImR1cmF0aW9uX3MiOjgsInVybGdlbl9zb3VyY2UiOiJ3d3cifQ%3D%3D&ccb=17-1&vs=ded25403445e74b&_nc_vs=HBksFQIYT2lnX3hwdl9yZWVsc19wZXJtYW5lbnRfcHJvZC9EQTRDQTA4RUI0M0EyQzA0NkU1MDY5NThDN0JCQTJCM192aWRlb19kYXNoaW5pdC5tcDQVAALIARIAFQIYOnBhc3N0aHJvdWdoX2V2ZXJzdG9yZS9HQWN0NEJtZzRyWUNKbzRCQUhyVmJESXFHN1ZuYnFfRUFBQUYVAgLIARIAKAAYABsCiAd1c2Vfb2lsATEScHJvZ3Jlc3NpdmVfcmVjaXBlATEVAAAmpruqqeb6yAYVAigCQzMsF0AgwAAAAAAAGBJkYXNoX2Jhc2VsaW5lXzFfdjERAHX-B2XmnQEA&_nc_zt=28&oh=00_AfN1N7mX9z1OHRbRksGpBQoBhnvcmosYhTxhdQxXtXfpyA&oe=684935D0",
        "permalink": "https://www.instagram.com/reel/C4zKMiUR_e3/",
        "media_type": "VIDEO",
        "thumbnail_url": "https://scontent-sea1-1.cdninstagram.com/v/t51.29350-15/434022028_791313009559850_9212538265574672600_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=103&ccb=1-7&_nc_sid=18de74&_nc_ohc=RlUOqmzxwPAQ7kNvwFP4lB3&_nc_oc=AdnnSLl9q0n9qJHOBihk0yUdVtbztBh-kLEBJWUJ7CmD019Hsd6AMpo2Ml1-bwU7qZg&_nc_zt=23&_nc_ht=scontent-sea1-1.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=PAGJzLK2Nf3PZYf_OzyinA&oh=00_AfP2U3euSDxsMQAb4bd7FGqjjOdepxo2kgtDFYT5wbmgKQ&oe=684D345E",
        "timestamp": "2024-03-22T02:17:13+0000",
        "username": "lukashahnart"
    },
    {
        "id": "18015019340143193",
        "caption": "Gotta love surface imperfections!\n\nModeled and textured in Blender.\nRendered in Cycles @ 10,000 samples.\nGraded in Resolve.\n\n#blender #blender3d #3dmodeling #3d #3drender #b3d #cycles #cyclesrender",
        "media_url": "https://scontent-sea1-1.cdninstagram.com/v/t51.29350-15/425740076_368051779494546_8510058808228177910_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=103&ccb=1-7&_nc_sid=18de74&_nc_ohc=xY9ffGbMO2AQ7kNvwF11ZP_&_nc_oc=Adl-YK3oUOZ41nCk5LcQdh0wFF29R0FRb1TQ2gkcCGpyFj8P6Ix-uzSIOwxH-Wa1NhU&_nc_zt=23&_nc_ht=scontent-sea1-1.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=PAGJzLK2Nf3PZYf_OzyinA&oh=00_AfNAsuJdmck0dHMVPbiBkhViqJti3qX56ap_G15q6JdBRg&oe=684D5824",
        "permalink": "https://www.instagram.com/p/C3JfbVvxt1j/",
        "media_type": "CAROUSEL_ALBUM",
        "timestamp": "2024-02-10T01:19:56+0000",
        "username": "lukashahnart"
    },
    {
        "id": "18023123017946229",
        "caption": "GoPro 11 Mini + DJI Mini 2 SE\n4k 10 Bit Log w/ Wide Gamut\nGraded in Resolve\n\n#drone #fpv #gopro #gopromini #gopro11 #colorgrading #davinciresolve",
        "media_url": "https://scontent-sea1-1.cdninstagram.com/o1/v/t2/f2/m82/AQMnI3Rkbz46YNQPGKF1VZe8a45ef-RrdG3v3ZbiuA_t4nvZvNiPFQt5Up5bq3AJuM5XOI4Sv1rwEq8CadUdRxVx7C6DT2H0W5HXM2s.mp4?_nc_cat=104&_nc_sid=5e9851&_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_ohc=P2k54aIpyH4Q7kNvwHvAtfU&efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5JTlNUQUdSQU0uQ0xJUFMuQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSIsInhwdl9hc3NldF9pZCI6MTU4ODA0OTE0MjAxMzU3MiwiYXNzZXRfYWdlX2RheXMiOjQ5MiwidmlfdXNlY2FzZV9pZCI6MTAwOTksImR1cmF0aW9uX3MiOjE2LCJ1cmxnZW5fc291cmNlIjoid3d3In0%3D&ccb=17-1&vs=4bbc390cdc61b3e6&_nc_vs=HBksFQIYT2lnX3hwdl9yZWVsc19wZXJtYW5lbnRfcHJvZC9BODRDREMzQ0ZCMUE1MTg2MzUxMDUxNENCRDUzMDc4RV92aWRlb19kYXNoaW5pdC5tcDQVAALIARIAFQIYOnBhc3N0aHJvdWdoX2V2ZXJzdG9yZS9HUHVNWEJtVTNiSUxULXdEQVAxdHBjRnNvTmgxYnFfRUFBQUYVAgLIARIAKAAYABsCiAd1c2Vfb2lsATEScHJvZ3Jlc3NpdmVfcmVjaXBlATEVAAAmiPr2j9CU0gUVAigCQzMsF0Aw-6XjU_fPGBJkYXNoX2Jhc2VsaW5lXzFfdjERAHX-B2XmnQEA&_nc_zt=28&oh=00_AfMSQcrObxjYzgUlSrrjOQcSrnKC-Ia4ZHpnFoQ4ckeJcg&oe=68496459",
        "permalink": "https://www.instagram.com/reel/C23qqPML6kg/",
        "media_type": "VIDEO",
        "thumbnail_url": "https://scontent-sea1-1.cdninstagram.com/v/t51.29350-15/425336702_913213046786157_6349445618405638592_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=103&ccb=1-7&_nc_sid=18de74&_nc_ohc=vofTntUk5PIQ7kNvwEtC3UP&_nc_oc=AdlyXr9QPzq_ej4TlswW-GCkNjh-FC_DvWHw6fZqapnKxHj_56tBAlYVeK23n3J1wRI&_nc_zt=23&_nc_ht=scontent-sea1-1.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=PAGJzLK2Nf3PZYf_OzyinA&oh=00_AfP0dfmVp7fpvEPBC0jEikeWyHkxM3OyOt0tUZHd5B04DQ&oe=684D3A2C",
        "timestamp": "2024-02-03T03:12:11+0000",
        "username": "lukashahnart"
    },
    {
        "id": "17998419770240783",
        "caption": "Canon nFD 50mm f/1.4\nGraded with Resolve\n\n#davinciresolve #colorgrading #cinematography #canonfd",
        "media_url": "https://scontent-sea1-1.cdninstagram.com/o1/v/t2/f2/m82/AQN5yS3IqC-rxIw3LOZbnB6XE0ChZQre4yy7n4-G1uc3joMJEC8iPYDuUCkypOPApL3ZB-a6RR4U4GF1_KPj_fo49zBjN4Qqkb60i6k.mp4?_nc_cat=103&_nc_sid=5e9851&_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_ohc=ioFoqIz5CTEQ7kNvwGmyWN1&efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5JTlNUQUdSQU0uQ0xJUFMuQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSIsInhwdl9hc3NldF9pZCI6MzQ4NTExNDY3OTkzOTUxLCJhc3NldF9hZ2VfZGF5cyI6NDkzLCJ2aV91c2VjYXNlX2lkIjoxMDA5OSwiZHVyYXRpb25fcyI6NSwidXJsZ2VuX3NvdXJjZSI6Ind3dyJ9&ccb=17-1&vs=a06bc688c86e30b1&_nc_vs=HBksFQIYT2lnX3hwdl9yZWVsc19wZXJtYW5lbnRfcHJvZC82MDQ3OEZFMkMyQ0FCQ0VEQjg5MkExQkZBQUE0MzA5OV92aWRlb19kYXNoaW5pdC5tcDQVAALIARIAFQIYOnBhc3N0aHJvdWdoX2V2ZXJzdG9yZS9HRFdETHhrYmZHX3NTZllBQUpLRWphQTJJdU05YnFfRUFBQUYVAgLIARIAKAAYABsCiAd1c2Vfb2lsATEScHJvZ3Jlc3NpdmVfcmVjaXBlATEVAAAmvu3_44S-ngEVAigCQzMsF0AUrxqfvnbJGBJkYXNoX2Jhc2VsaW5lXzFfdjERAHX-B2XmnQEA&_nc_zt=28&oh=00_AfPLjYR18LlFEKKYEiMXeyeclV_d5Lul9Xb_w5YLiEemUw&oe=68494FD4",
        "permalink": "https://www.instagram.com/reel/C2019FYpD4j/",
        "media_type": "VIDEO",
        "thumbnail_url": "https://scontent-sea1-1.cdninstagram.com/v/t51.29350-15/424828746_396513679414390_8487113082498687396_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=101&ccb=1-7&_nc_sid=18de74&_nc_ohc=pBtzCpef_9wQ7kNvwFSaLMB&_nc_oc=AdkUGVd9EKTkbGjgCuaxc9qjaXHvn7cqGbh1ZSndp4s8fegxLyz1dLe8Nbse7e_dEWU&_nc_zt=23&_nc_ht=scontent-sea1-1.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=PAGJzLK2Nf3PZYf_OzyinA&oh=00_AfMe067Yy3Tbk4k0jtNZ3pXUviEwrnj1EmJCWGXGq90RnQ&oe=684D4432",
        "timestamp": "2024-02-02T00:54:44+0000",
        "username": "lukashahnart"
    },
    {
        "id": "18008298215334208",
        "caption": "Absolutely loving my Canon FDs. The flares are so gorgeous. Might try to take them apart and declick them soon. 🤞",
        "media_url": "https://scontent-sea1-1.cdninstagram.com/o1/v/t2/f2/m82/AQNQWjIuXkqo8ahPqVnQUDbu7qgXTjLDLY5GxuN8_HDVd1BgezHOiKZz05PQi5YU8r2sqp0gJCyNx7S0t9NZ_zyJnXLZSVUWnI7RTLE.mp4?_nc_cat=105&_nc_sid=5e9851&_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_ohc=eIONHDNdrQsQ7kNvwFBI1tp&efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5JTlNUQUdSQU0uQ0xJUFMuQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSIsInhwdl9hc3NldF9pZCI6Nzc2NDg4OTQ0MzcxNzA5LCJhc3NldF9hZ2VfZGF5cyI6NDk5LCJ2aV91c2VjYXNlX2lkIjoxMDA5OSwiZHVyYXRpb25fcyI6OCwidXJsZ2VuX3NvdXJjZSI6Ind3dyJ9&ccb=17-1&vs=2e15d1281f982fb2&_nc_vs=HBksFQIYT2lnX3hwdl9yZWVsc19wZXJtYW5lbnRfcHJvZC8zODQ3N0ZCNjBBMkMyRjhFMEYwREU4Q0NDN0JCNjRCMV92aWRlb19kYXNoaW5pdC5tcDQVAALIARIAFQIYOnBhc3N0aHJvdWdoX2V2ZXJzdG9yZS9HR3dZTVJuMnF1eXBYSEVCQUJ4dDVuSnVnR05xYnFfRUFBQUYVAgLIARIAKAAYABsCiAd1c2Vfb2lsATEScHJvZ3Jlc3NpdmVfcmVjaXBlATEVAAAm-p-cu82N4QIVAigCQzMsF0AgxBiTdLxqGBJkYXNoX2Jhc2VsaW5lXzFfdjERAHX-B2XmnQEA&_nc_zt=28&oh=00_AfO-_sAC9FiUjikQ3TQdj84hkpGXSkBijbgZu3FsSB82fg&oe=68495B7A",
        "permalink": "https://www.instagram.com/reel/C2l36SVOe7J/",
        "media_type": "VIDEO",
        "thumbnail_url": "https://scontent-sea1-1.cdninstagram.com/v/t51.29350-15/422020059_404247168798418_5714979465874313485_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=105&ccb=1-7&_nc_sid=18de74&_nc_ohc=dr7ZJuxs0iIQ7kNvwEXu1eh&_nc_oc=Adl9atg016W0NKmFaM9GTlQqvh0uAT4dlEhhmwySupnz5H4Z-d3vtKa7QoXm59Wd3pc&_nc_zt=23&_nc_ht=scontent-sea1-1.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=PAGJzLK2Nf3PZYf_OzyinA&oh=00_AfOUVsjRySV0kMDTRXK7j9fxv_iddZMWFcSeeNGwl4FroA&oe=684D2F30",
        "timestamp": "2024-01-27T05:23:56+0000",
        "username": "lukashahnart"
    },
    {
        "id": "18022829140764585",
        "caption": "Ultimate Frisbee 🥏💪 #ultimate #ultimatefrisbee #videography #sportsphotography #photography",
        "media_url": "https://scontent-sea1-1.cdninstagram.com/o1/v/t2/f2/m82/AQOGRL1mjonERs0AJ4X2eA9tflnhU6IPK83sYs0HgHPUKYVYkeGphd2m0bTM5AJqU9i5vI2U-ELIEyeJz1iD8ZQnDNGAbTlXJzZV0qc.mp4?_nc_cat=100&_nc_sid=5e9851&_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_ohc=9vCTKHjmNDUQ7kNvwGTgLf8&efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5JTlNUQUdSQU0uQ0xJUFMuQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSIsInhwdl9hc3NldF9pZCI6Mjg3MzQ4ODk0MTQyNjI2LCJhc3NldF9hZ2VfZGF5cyI6NjAxLCJ2aV91c2VjYXNlX2lkIjoxMDA5OSwiZHVyYXRpb25fcyI6MjksInVybGdlbl9zb3VyY2UiOiJ3d3cifQ%3D%3D&ccb=17-1&vs=837137665797dae4&_nc_vs=HBksFQIYT2lnX3hwdl9yZWVsc19wZXJtYW5lbnRfcHJvZC9DRTQ1RDA3QTg5ODBFNUZFMjY3MjczQkEyRDhFREY5Ql92aWRlb19kYXNoaW5pdC5tcDQVAALIARIAFQIYOnBhc3N0aHJvdWdoX2V2ZXJzdG9yZS9HTkU2ZWhlWkxpdENRZmtBQUpjZC1WWkc2T0UyYnFfRUFBQUYVAgLIARIAKAAYABsCiAd1c2Vfb2lsATEScHJvZ3Jlc3NpdmVfcmVjaXBlATEVAAAmxMKYjPTVggEVAigCQzMsF0A9Cn752yLRGBJkYXNoX2Jhc2VsaW5lXzFfdjERAHX-B2XmnQEA&_nc_zt=28&oh=00_AfO95-24-OpSEviDK5ysPQgnBQoKEwSPFlFkTOJWlZkd8A&oe=68495435",
        "permalink": "https://www.instagram.com/reel/CygqaTyvhRi/",
        "media_type": "VIDEO",
        "thumbnail_url": "https://scontent-sea1-1.cdninstagram.com/v/t51.29350-15/418375399_915918993218962_1223781683817264531_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=110&ccb=1-7&_nc_sid=18de74&_nc_ohc=10IE9zRcq4EQ7kNvwFzGinX&_nc_oc=Admffhu0BzOEVMdqgq7UAXlljCRksIM6Cfk0ReJf7lbsUHCjByb2rgvqPenlS9IAKz0&_nc_zt=23&_nc_ht=scontent-sea1-1.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=PAGJzLK2Nf3PZYf_OzyinA&oh=00_AfMSHQNX-vopuAhrc5jk2FoL-dxcendRwYQ4nS3bTtSS_g&oe=684D5320",
        "timestamp": "2023-10-17T18:45:47+0000",
        "username": "lukashahnart"
    },
    {
        "id": "18025733299729561",
        "caption": "Went on an EPIC ride the other night during a hunting trip. First time trying out astrophotography. \n\n#photography #astrophotography #nightphotography #dirtbike #outdoorphotography",
        "media_url": "https://scontent-sea1-1.cdninstagram.com/o1/v/t2/f2/m82/AQNTW3slwP2pDXgxJ6SgRfC8g3Vp5kpG8UeqqwAmMcxbEtIlYkIf6GcdML-ZGGYs-99GS7urPE2Mnb7ZZGMwt8QDiW-3tvm7uPV2HYo.mp4?_nc_cat=103&_nc_sid=5e9851&_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_ohc=91AS876m4F0Q7kNvwEN4vaD&efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5JTlNUQUdSQU0uQ0xJUFMuQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSIsInhwdl9hc3NldF9pZCI6NjQ1MTcxNjE3Nzg2OTQ3LCJhc3NldF9hZ2VfZGF5cyI6NjA1LCJ2aV91c2VjYXNlX2lkIjoxMDA5OSwiZHVyYXRpb25fcyI6MjIsInVybGdlbl9zb3VyY2UiOiJ3d3cifQ%3D%3D&ccb=17-1&vs=12fab2c79b662f9d&_nc_vs=HBkcFQIYT2lnX3hwdl9yZWVsc19wZXJtYW5lbnRfcHJvZC85MzREOTI4QTNENEI2NTI1Rjc1NjExOTQ3NjEzNEQ5N192aWRlb19kYXNoaW5pdC5tcDQVAALIARIAKAAYABsCiAd1c2Vfb2lsATEScHJvZ3Jlc3NpdmVfcmVjaXBlATEVAAAmhrHHkfexpQIVAigCQzMsF0A2uFHrhR64GBJkYXNoX2Jhc2VsaW5lXzFfdjERAHX-B2XmnQEA&_nc_zt=28&oh=00_AfPey2WzRhcx9HGDaNGLFZJ7f3prehNkRGN4bi4vc_EQRA&oe=6849438C",
        "permalink": "https://www.instagram.com/reel/CyUyl3ooInU/",
        "media_type": "VIDEO",
        "thumbnail_url": "https://scontent-sea1-1.cdninstagram.com/v/t51.29350-15/418343656_1082439506210277_1122686519826236444_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=110&ccb=1-7&_nc_sid=18de74&_nc_ohc=Erg-vm1ZS6AQ7kNvwFHgV3l&_nc_oc=AdkS1K_1-PVR_MKpAJA8m41e4QhkUGwbY9aiHQxediupVh87iujK9-IdHnk_YkEPdX8&_nc_zt=23&_nc_ht=scontent-sea1-1.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=PAGJzLK2Nf3PZYf_OzyinA&oh=00_AfORzzyFxcnYPhRjEVkVuUHFTfui0hvVlhH-ewODVb8PcA&oe=684D555C",
        "timestamp": "2023-10-13T04:04:43+0000",
        "username": "lukashahnart"
    },
    {
        "id": "18000146147168224",
        "caption": "Here's some renders of a door I recently modeled for one of my scenes. #3d #3dmodeling #blender3d #b3d #3drender #modeling",
        "media_url": "https://scontent-sea1-1.cdninstagram.com/v/t51.29350-15/385339177_1479413672815701_5438400105278446313_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=101&ccb=1-7&_nc_sid=18de74&_nc_ohc=8JypCWQfUAQQ7kNvwFkRqoh&_nc_oc=AdlIihwE3f_MDTr2_b2HSw9TsSiDcScBL9I8gauyLflNpD1-YfwboEdz_tjMqnGjBOc&_nc_zt=23&_nc_ht=scontent-sea1-1.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=PAGJzLK2Nf3PZYf_OzyinA&oh=00_AfMOHlwWoPVOO6Mtxzp8lBpnPsdoESwFxIAy20k6nFgMDg&oe=684D268F",
        "permalink": "https://www.instagram.com/p/Cx0yjJgxRc0/",
        "media_type": "CAROUSEL_ALBUM",
        "timestamp": "2023-09-30T17:46:00+0000",
        "username": "lukashahnart"
    },
    {
        "id": "18010104283812335",
        "caption": "Some shots of @rhs_soccer_boys 's goalie, @t.villanueva05 👏🔥#soccer #sportsphotography #photography #soccerphotography",
        "media_url": "https://scontent-sea1-1.cdninstagram.com/v/t51.29350-15/384166247_556058899986766_7855879142138859670_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=103&ccb=1-7&_nc_sid=18de74&_nc_ohc=42nTA5inxscQ7kNvwHqdzET&_nc_oc=AdlQvIvJuTGFhWTYi2zwImoIBBLy9zG00FwsiasNltjPgWt19iGpPEHP3x6GlFJhu3w&_nc_zt=23&_nc_ht=scontent-sea1-1.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=PAGJzLK2Nf3PZYf_OzyinA&oh=00_AfMvyoZu1cwY_wBrEKVYnZ_qeyZbQEMYK2jhUz3r78I-uw&oe=684D2A81",
        "permalink": "https://www.instagram.com/p/Cxy82BsRkJq/",
        "media_type": "CAROUSEL_ALBUM",
        "timestamp": "2023-09-30T00:37:28+0000",
        "username": "lukashahnart"
    },
    {
        "id": "17997601915969591",
        "caption": "@rhs_soccer_boys JV vs. South Medford\nGreat game, guys!\n\n#soccer #roseburg #roseburghighschool #rhs #rhssoccer",
        "media_url": "https://scontent-sea1-1.cdninstagram.com/o1/v/t2/f2/m82/AQNJRqplfKePNWJ-dzd8iN8yUTbX7L28ZVKWjumEKv83TZwXvlHPQ2UVGwBk3qmHQgWvyfebEJaTA4rEZ9DYwubbAYYwDxYVTk5G8_Y.mp4?_nc_cat=111&_nc_sid=5e9851&_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_ohc=1jIubwXcn0cQ7kNvwGQMamI&efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5JTlNUQUdSQU0uQ0xJUFMuQzMuMTI4MC5kYXNoX2Jhc2VsaW5lXzFfdjEiLCJ4cHZfYXNzZXRfaWQiOjI0NzI2MTgyMTExNDA5NiwiYXNzZXRfYWdlX2RheXMiOjYzNiwidmlfdXNlY2FzZV9pZCI6MTAwOTksImR1cmF0aW9uX3MiOjcwLCJ1cmxnZW5fc291cmNlIjoid3d3In0%3D&ccb=17-1&vs=75220f98473833fa&_nc_vs=HBksFQIYT2lnX3hwdl9yZWVsc19wZXJtYW5lbnRfcHJvZC9BNjRFNzk2RkI3RjE5RTg3Q0UzQzk3MjA2NjNCODVBN192aWRlb19kYXNoaW5pdC5tcDQVAALIARIAFQIYOnBhc3N0aHJvdWdoX2V2ZXJzdG9yZS9HSU9BaUJaY1d0VkJhVzhDQUg1eTJKc2U2bzRHYnFfRUFBQUYVAgLIARIAKAAYABsCiAd1c2Vfb2lsATEScHJvZ3Jlc3NpdmVfcmVjaXBlATEVAAAm4NuckMS4cBUCKAJDMywXQFGd0vGp--cYEmRhc2hfYmFzZWxpbmVfMV92MREAdf4HZeadAQA&_nc_zt=28&oh=00_AfMWpnfPktSkXV3H_d1wFVcclXX0HKnKtbt5ZGWdnVFTSQ&oe=68494E3C",
        "permalink": "https://www.instagram.com/reel/CxEv1l5oZ5_/",
        "media_type": "VIDEO",
        "thumbnail_url": "https://scontent-sea1-1.cdninstagram.com/v/t51.36329-15/376918957_1749058445517657_3010826456184027607_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=111&ccb=1-7&_nc_sid=18de74&_nc_ohc=qXk2QYLycBUQ7kNvwGbb3c0&_nc_oc=Adm4X0hbuQNJBANMCFV87-_Z5Jddj3tlAW9YtAnGCTXd9cvmmbwhQMI9FtuQfZ71zrE&_nc_zt=23&_nc_ht=scontent-sea1-1.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=PAGJzLK2Nf3PZYf_OzyinA&oh=00_AfMCbdkNbTsaaBa96vsAZAkEkwGy-b53dhBhELb9QdvnZA&oe=684D4C32",
        "timestamp": "2023-09-12T02:02:50+0000",
        "username": "lukashahnart"
    },
    {
        "id": "18006034630820721",
        "caption": "Here's something a bit more abstract. Rendered in Blender Eevee.\n\n#blender #blender3d #digitalart #neon #3d #animation #3dmodeling #eeveerender",
        "media_url": "https://scontent-sea1-1.cdninstagram.com/o1/v/t2/f2/m82/AQPfi_TCDoSRlRriH_mL-aQark1yu2jwyILeTPTBBBtCNH_B6GwWxpvZ3RihISPXJWSFS84fKmlK9PeeOoFQKSOOJ-lZjQrVGG5aAzo.mp4?_nc_cat=105&_nc_sid=5e9851&_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_ohc=OnVuSXX3ausQ7kNvwG7_tEO&efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5JTlNUQUdSQU0uQ0xJUFMuQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSIsInhwdl9hc3NldF9pZCI6NjMxODcyNjY4OTMwMjIyLCJhc3NldF9hZ2VfZGF5cyI6NjQ3LCJ2aV91c2VjYXNlX2lkIjoxMDA5OSwiZHVyYXRpb25fcyI6NSwidXJsZ2VuX3NvdXJjZSI6Ind3dyJ9&ccb=17-1&vs=9b30605446fb6927&_nc_vs=HBkcFQIYT2lnX3hwdl9yZWVsc19wZXJtYW5lbnRfcHJvZC9GNzQ2QkFCOTkzRTQ0ODkxODc4N0I2M0NCM0FDN0Y5QV92aWRlb19kYXNoaW5pdC5tcDQVAALIARIAKAAYABsCiAd1c2Vfb2lsATEScHJvZ3Jlc3NpdmVfcmVjaXBlATEVAAAm3MLMn-qrnwIVAigCQzMsF0AUAAAAAAAAGBJkYXNoX2Jhc2VsaW5lXzFfdjERAHX-B2XmnQEA&_nc_zt=28&oh=00_AfNeQtKvFMjlfIH3n2DHj97-ZVpSJJJUyA6M9Ff7BBMNhQ&oe=68494A5E",
        "permalink": "https://www.instagram.com/reel/Cwodw1wIJZF/",
        "media_type": "VIDEO",
        "thumbnail_url": "https://scontent-sea1-1.cdninstagram.com/v/t51.36329-15/372862978_3485602318320176_437236471391360957_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=105&ccb=1-7&_nc_sid=18de74&_nc_ohc=PMKlw0hGeeYQ7kNvwFa9BHS&_nc_oc=AdniJlm9f7l48fWPYX9TkgzssiDPlUkTSi3FsPhPHk1RTCFZARaXCKuP3l6XWxHnq_s&_nc_zt=23&_nc_ht=scontent-sea1-1.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=PAGJzLK2Nf3PZYf_OzyinA&oh=00_AfM6_O6MOekpLPL8fhg7rPbTwnZzdH7453bG0Srks5ObMg&oe=684D4B04",
        "timestamp": "2023-09-01T02:24:14+0000",
        "username": "lukashahnart"
    },
    {
        "id": "17936706062711528",
        "caption": "This was a close one 😳#skatepark #scooter #slowmo #video #cinematography #videography #scootertricks #skatelife",
        "media_url": "https://scontent-sea1-1.cdninstagram.com/o1/v/t2/f2/m82/AQND7htOq9w99NikEtevwUyFgrqCNLrTvbFORL4vVoU8Py34gOPZuP_JE2jr9lWJd4nHwRaE8Stj7ypyPJAnpkpbAFJKCsR-_4fzhio.mp4?_nc_cat=109&_nc_sid=5e9851&_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_ohc=OnqLZ4y9gJwQ7kNvwEUla5e&efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5JTlNUQUdSQU0uQ0xJUFMuQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSIsInhwdl9hc3NldF9pZCI6MzMzMzkzNTAyMzY0Mzg5LCJhc3NldF9hZ2VfZGF5cyI6NjUwLCJ2aV91c2VjYXNlX2lkIjoxMDA5OSwiZHVyYXRpb25fcyI6MTMsInVybGdlbl9zb3VyY2UiOiJ3d3cifQ%3D%3D&ccb=17-1&vs=a7d7025529f89503&_nc_vs=HBksFQIYT2lnX3hwdl9yZWVsc19wZXJtYW5lbnRfcHJvZC9DMzQwRkU4QTI0RkQwNDZCMzdGOTA2RkYxRTcxNTk5MV92aWRlb19kYXNoaW5pdC5tcDQVAALIARIAFQIYOnBhc3N0aHJvdWdoX2V2ZXJzdG9yZS9HR19GSHhheER2QWVfcFVEQUc0TWRrcWRtUmNkYnFfRUFBQUYVAgLIARIAKAAYABsCiAd1c2Vfb2lsATEScHJvZ3Jlc3NpdmVfcmVjaXBlATEVAAAmyou7lIfOlwEVAigCQzMsF0AqAAAAAAAAGBJkYXNoX2Jhc2VsaW5lXzFfdjERAHX-B2XmnQEA&_nc_zt=28&oh=00_AfNDrvDE3NltnNe0vIZMhTjETzwExEqyd4W9NhdLbpINYw&oe=6849366E",
        "permalink": "https://www.instagram.com/reel/CwiTVanIC5T/",
        "media_type": "VIDEO",
        "thumbnail_url": "https://scontent-sea1-1.cdninstagram.com/v/t51.36329-15/371037439_1021630829150509_9095112342173771118_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=105&ccb=1-7&_nc_sid=18de74&_nc_ohc=5oXkj3n_PPgQ7kNvwEAsaHz&_nc_oc=AdlMdOnDTWONKnJ6kCggue9S6LcT3uWTP4Ql_lgIEQYX3ICXDLMBEATYZhmUsDQ__do&_nc_zt=23&_nc_ht=scontent-sea1-1.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=PAGJzLK2Nf3PZYf_OzyinA&oh=00_AfM8VbdsRAaCbfzB8a75m1WpvJRnjxe8Peix7-J-dz0bQA&oe=684D3F84",
        "timestamp": "2023-08-29T16:59:23+0000",
        "username": "lukashahnart"
    },
    {
        "id": "17844825165047100",
        "caption": "Some stills from a recent scene I’ve been working on. Fully modeled and textured myself. Rendered in cycles. #blenderrender #blender3d #cyclesrender #3dmoddeling #3drender #b3d #cycles #cgi",
        "media_url": "https://scontent-sea1-1.cdninstagram.com/v/t51.29350-15/367996041_1449421295912636_5509701958652099098_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=109&ccb=1-7&_nc_sid=18de74&_nc_ohc=-Y4bRlsJk5IQ7kNvwEHIFaF&_nc_oc=AdlCCSNHEE8c_anenoPhyt-k3xnyokV-BRW-khnsIFhCU42gcswOrH547fXb0PxjfBM&_nc_zt=23&_nc_ht=scontent-sea1-1.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=PAGJzLK2Nf3PZYf_OzyinA&oh=00_AfMZRDfiBiuUufeYxAkkX4lrUq19BXJ0qaOqEpO-8DnnCA&oe=684D2AA7",
        "permalink": "https://www.instagram.com/p/CwCA8h7uiQ8/",
        "media_type": "CAROUSEL_ALBUM",
        "timestamp": "2023-08-17T03:59:08+0000",
        "username": "lukashahnart"
    },
    {
        "id": "17973886655318318",
        "caption": "Sci-fi Render. Rendered in Eevee. Modeled and textured in Blender. #blender3d #scifi #render #3dmodeling #b3d #3drender",
        "media_url": "https://scontent-sea1-1.cdninstagram.com/o1/v/t2/f2/m82/AQOB6a9riOdsF0vszHn9WZzf9zjXIj0jlA3kTsFz3T6ii8QEzimJexczkGfIWIzQ29tKsTBUxfEv4NBs9UhY-0DfS2wIbk4dhszQq1c.mp4?_nc_cat=101&_nc_sid=5e9851&_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_ohc=_3yhDf9k41UQ7kNvwGdrT5o&efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5JTlNUQUdSQU0uQ0xJUFMuQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSIsInhwdl9hc3NldF9pZCI6Njc3NjcxNjM3NTk4NTMyLCJhc3NldF9hZ2VfZGF5cyI6NjY1LCJ2aV91c2VjYXNlX2lkIjoxMDA5OSwiZHVyYXRpb25fcyI6MTgsInVybGdlbl9zb3VyY2UiOiJ3d3cifQ%3D%3D&ccb=17-1&vs=7b0846bd4a5cd8a4&_nc_vs=HBksFQIYT2lnX3hwdl9yZWVsc19wZXJtYW5lbnRfcHJvZC9BRjRDMTlGMEQ0RTc4QUVERTYxODEzNUQzOTkzRkZBNl92aWRlb19kYXNoaW5pdC5tcDQVAALIARIAFQIYOnBhc3N0aHJvdWdoX2V2ZXJzdG9yZS9HQTFzNmhYbFdpYTZLWFVEQUdFM3g4U3FLT3M4YnFfRUFBQUYVAgLIARIAKAAYABsCiAd1c2Vfb2lsATEScHJvZ3Jlc3NpdmVfcmVjaXBlATEVAAAmiIXek9eVtAIVAigCQzMsF0AyCHKwIMScGBJkYXNoX2Jhc2VsaW5lXzFfdjERAHX-B2XmnQEA&_nc_zt=28&oh=00_AfMLpNC-b7wJxEhsN0TbMZmQ2oPoF82EBKdSgAe7kWdU6g&oe=6849648A",
        "permalink": "https://www.instagram.com/reel/Cv738vCp3Ib/",
        "media_type": "VIDEO",
        "thumbnail_url": "https://scontent-sea1-1.cdninstagram.com/v/t51.36329-15/367398418_274953758506929_8062692617785003435_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=104&ccb=1-7&_nc_sid=18de74&_nc_ohc=_PLSK749z4gQ7kNvwF4nD0y&_nc_oc=Adm7Z1-SLFotue6FhVtQgooBO1WruWM00gquu46KHC_aavch6w8CearGbQwTzqsr9ak&_nc_zt=23&_nc_ht=scontent-sea1-1.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=PAGJzLK2Nf3PZYf_OzyinA&oh=00_AfO-SEmC2SyBJXUSJ-4svn7eumJptFFEHJ_yaaqNsCVpRA&oe=684D2667",
        "timestamp": "2023-08-14T18:47:12+0000",
        "username": "lukashahnart"
    },
    {
        "id": "17956199102633524",
        "caption": "Trying out some photorealistic Eevee renders 😁#blender3d #b3d #eevee #eeveerender #blenderrender #3d #3dmoddeling #3drender #naturerender #blender #cgi",
        "media_url": "https://scontent-sea1-1.cdninstagram.com/o1/v/t2/f2/m82/AQPIiP6OhO7HsnjFJQLxl4mGWLl-slng8lufSsbaA_KJSyXuR2U9wJz-H-TUu7JOf9Qq4TcFy0XGXdXiVmtrn6cVwOISEtfGbhFfrGc.mp4?_nc_cat=107&_nc_sid=5e9851&_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_ohc=ViGiplF3tvsQ7kNvwEV7Nuk&efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5JTlNUQUdSQU0uQ0xJUFMuQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSIsInhwdl9hc3NldF9pZCI6MzAxMDkzMzg1NzgxMTgzLCJhc3NldF9hZ2VfZGF5cyI6Njc1LCJ2aV91c2VjYXNlX2lkIjoxMDA5OSwiZHVyYXRpb25fcyI6NCwidXJsZ2VuX3NvdXJjZSI6Ind3dyJ9&ccb=17-1&vs=2505d95f92b725e2&_nc_vs=HBkcFQIYT2lnX3hwdl9yZWVsc19wZXJtYW5lbnRfcHJvZC8xMDREM0RFM0MyRUJEQjI4REE3QkNDREFGMTAzNjg4NV92aWRlb19kYXNoaW5pdC5tcDQVAALIARIAKAAYABsCiAd1c2Vfb2lsATEScHJvZ3Jlc3NpdmVfcmVjaXBlATEVAAAm_v7txPj1iAEVAigCQzMsF0AQAAAAAAAAGBJkYXNoX2Jhc2VsaW5lXzFfdjERAHX-B2XmnQEA&_nc_zt=28&oh=00_AfN-l-M7T1j8-upMEUQKXhrTIwZBv4bT1_1Diu7nPP6sZA&oe=684930AC",
        "permalink": "https://www.instagram.com/reel/CvinHQ4u_mf/",
        "media_type": "VIDEO",
        "thumbnail_url": "https://scontent-sea1-1.cdninstagram.com/v/t51.36329-15/364328869_614944517450535_520050326753023093_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=101&ccb=1-7&_nc_sid=18de74&_nc_ohc=p92nyMJ2jOcQ7kNvwGOD3v4&_nc_oc=AdkUwVF4MoPOfAKgh2gUcSwwVz_CQNua28qISFqSrWJ-CvsUSnKqznJd6cLWaYKziXI&_nc_zt=23&_nc_ht=scontent-sea1-1.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=PAGJzLK2Nf3PZYf_OzyinA&oh=00_AfO55VP_UAHHSHcbkx0X7GdtcrGuhXroUFcre-SoHAgiIw&oe=684D5133",
        "timestamp": "2023-08-04T23:19:13+0000",
        "username": "lukashahnart"
    }
]

export async function load() {
    const now = Date.now();

    //Return the mock posts if in development mode
    if (import.meta.env.DEV) {
        console.log('Using mock Instagram posts in development mode', mockInstagramPosts);
        return {
            props: {
                instagramPosts: mockInstagramPosts
            }
        };
    }

    // Use cache if it's still valid
    if (cachedInstagramPosts.length > 0 && now - cacheTimestamp < CACHE_DURATION) {
        console.log('Using cached Instagram posts:', cachedInstagramPosts);
        return {
            props: {
                instagramPosts: cachedInstagramPosts
            }
        };
    }

    let token =
        'IGAAPZCoqVFCT9BZAE91SzhIR3MwRm1uU3B6S3IzU3Fja3hyanF4X25pNEx2enBkQnQtYWdZAYkZATR3JQMHlHWUdIUVhUX3FnLXBkVG1SYm1nMVIxSnJ4VEJqWmNEMFRwOERfLTB2dFFQeW4wTTJMVEFib3pR';

    const url = `https://graph.instagram.com/me/media?fields=id,caption,media_url,permalink,media_type,thumbnail_url,timestamp,username&access_token=${token}`;
    let instagramPosts: any[] = [];

    try {
        const res = await fetch(url);
        const data = await res.json();
        instagramPosts = data.data || []
        // Update cache
        cachedInstagramPosts = instagramPosts;
        cacheTimestamp = now;
        console.log('Instagram posts fetched:', instagramPosts);
    } catch (e) {
        console.error('Failed to fetch Instagram posts:', e);
    }

    return {
        props: {
            instagramPosts
        }
    };
}