import { initializeApp, getApps, cert } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";
const initFirebaseAdmin = () => {
    const apps = getApps()
    const projectId = "real-time-ai-voice-agent"
    const email = "firebase-adminsdk-fbsvc@real-time-ai-voice-agent.iam.gserviceaccount.com"
    const key = "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCSrvMZKJ9cMDzJ\ngwq6filnOmYmrcCT8YoMXzvS/pDomjO1GkO5GzKLYA+RH/J0YZUtzeSL0PtlQNj5\n4HGqXKxsmuMerSMTqtuGREoiGOUQRqu7C2Sp9qQIpmV2Mi/TVCaXy11F/oOxcSl1\nsnPUreoLjefYboWpZod6fhuWjaTVushqFeWk+JWHvK23rY3yvTIp9lWrBKM4XApV\nQh76QwBYy8Ij9p2yw/lBDN+8Pk3M2VCWOoZzMVwvoMo+ndx+HdMLayuaR3QZsRNa\nih3JvhJ41yUdGsby5ZGjOtGX2YmAYiyybvynuG4kxqGcTQ9LizMd28YbbnEuE17C\ntem2sixTAgMBAAECggEACkwnkHnBF5mNUuo/q7r6ph677XWKN6NKeTbgU3N/8cxi\n2pEW9bJFQ0fsSoMPJCt2QRUbY9Nj1Vu5lRqJcEJ5mlWUoeKEEWKPxGZxO+E6h4DR\nQobOENPZ99TSpPsTT3HbabxNoSx5IKZcmOt9D+O2XWGfcprDsxJEauLahfW4qjEL\nly/InbMU8OiImyqbHwDQ9wdMliYfM2jWyxeag9qUtwwbNKdBWnYs8uo5RKdM1C7o\njQLvSVrGUjqwkfZYFu/lO5/Huknx44skcvxfpxg0lfLUeB4Q6ibEPZu7M8U1flTO\nqXn5KMKnVsnSOwVppubel2wFetaSr79XUk1NFEe+KQKBgQDMdlAWyTkY6bCv++8y\nX+rYXfF2Zzy+Yx76U8cvFXdRhxlN+6mIhsRqM8dtigj/kW8RBWL+j/DaFRZNmB+j\nggC1xymfGxWIfexyFMqbsMou1Yl1llk9kZBjqkepZC156tmEjCpo+OW5zT6YnFJh\nlpmOzHr88hcRxIcS5oAcuBMX6wKBgQC3qD7b72puFgf5jvCdRYBO6xSYCVhUoB3d\nJLnYAdEhyX/0KCoHHpPgtfpPTlv8suSqm2orEeLMEgIxiMtSM+7PhjWyLmcAlhAi\n/q83RRgTCVGTbhhmxJtQK+aoSjPsl59I9TibNZufXjozOPVAydh5NPUMs0QN41jX\nlCy1u1BLOQKBgCUBAKuvDWNh3/Vpvje6vlEcZ3gLZSX74H5jrTfrRaX+smi3tE4e\nPewOpPhBNDG0y4okFG+H84o0qM2wS4GXJLPBcNn31+TVDXb0JlsZGu5w/SjH5izL\nbHttNP0GQWjARU/E4mQPL9x5tet+1zYMQIxkm5mt4tj3XY7hIqyP7/yzAoGAG2SV\n05oXJspUcC2Yx+xo4dyAWtjx+tVS/vwOWCCVP9PdKN6gviUaa2bZKeEHKV7JaoT5\nxejKCiQZfafoo58pXHypH6V6KYU4bO/N1JGSsKwwJaxDKXjjrYaOxcUjj4Nh97DT\nu5q4VoHobmFtezdf+VwjvLw0R1oEk0r/jC+fH0kCgYAwLU4ghvq7+n1YpwO/ENdh\nGhUzbsi3F4kbD/mrU8QgbtsEpQdw6YCkQZUxifCXPuk446k2abxunhfGsUn+bjb4\nRP9Hoh2kABt2g48L9DVUiwI0NTbmgeY9+9rOiNsvRGZmG07Lkv6ciO72FCubyuyX\nhAjg0Xt8SG06csn0HYLQ7g==\n-----END PRIVATE KEY-----\n"
    if (!apps.length) {
        initializeApp({
            credential: cert({
                projectId: projectId,
                clientEmail: email, 
                privateKey:key?.replace(/\\n/g,'\n')
            })
        })
    }
    return {
        auth: getAuth(),
        db: getFirestore(),
      };
}
export const { auth, db } = initFirebaseAdmin();