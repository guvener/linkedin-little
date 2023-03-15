# LinkedIn little Text Format Parser JS
Simple LinkedIn little Text Format Parser in JS according to [LinkedIn little Documentation](https://learn.microsoft.com/en-us/linkedin/marketing/integrations/community-management/shares/little-text-format?view=li-lms-2023-02)

```js
(new LinkedinLittle).findHashtags(`Haltet euch fest, oder lasst euch durch uns unterstützen.\n\n{hashtag|\\#|gartenbau} {hashtag|\\#|menzimuck} {hashtag|\\#|zürichoberland}`);
// @returns:  [ "gartenbau", "menzimuck", "zürichoberland" ]
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
