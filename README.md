# LinkedIn little Text Format Parser JS
Simple LinkedIn little Text Format Parser in JS
[LinkedIn little Documentation](https://learn.microsoft.com/en-us/linkedin/marketing/integrations/community-management/shares/little-text-format?view=li-lms-2023-02)

```js
(new LinkedinLittle).findHashtags(`💪Haltet euch fest, oder lasst euch durch uns unterstützen.\n\n{hashtag|\\#|gartenbau} {hashtag|\\#|menzimuck} {hashtag|\\#|zürichoberland} {hashtag|\\#|altwegggartenbau}`);
// @returns:  [ "gartenbau", "menzimuck", "zürichoberland", "altwegggartenbau" ]
```

```js
(new LinkedinLittle).findMentions("Hello @[Acme Corp](urn:li:organization:1234)")
/* @returns:
        [
            {
                "matched": "@[Acme Corp](urn:li:organization:1234)",
                "mention": "Acme Corp",
                "urn": "urn:li:organization:1234",
                "type": "organization"
            }
        ]
*/
```
