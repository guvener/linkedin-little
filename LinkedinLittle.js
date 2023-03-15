// LinkedIn little Text Format Parser
// readme: https://github.com/guvener/linkedin-little
class LinkedinLittle {

    /*
       @test: findHashtags(`Haltet euch fest, oder lasst euch durch uns unterstützen.\n\n{hashtag|\\#|gartenbau} {hashtag|\\#|menzimuck} {hashtag|\\#|zürichoberland}`);
       @returns:  [ "gartenbau", "menzimuck", "zürichoberland" ]
    */
    findHashtags(str) {
        let results = [];
        if(!str) return results;

        const regex = /(?<={hashtag\|\\#\|)[^}]+/gm;

        let m;
        while ((m = regex.exec(str)) !== null) {
            // This is necessary to avoid infinite loops with zero-width matches
            if (m.index === regex.lastIndex) {
                regex.lastIndex++;
            }

            // The result can be accessed through the `m`-variable.
            m.forEach((match, groupIndex) => {
                results.push(match);
            });
        }
        return results;
    }

    /*
        @test: findMentions("Hello @[Acme Corp](urn:li:organization:1234)")
        @returns:
        [
            {
                "matched": "@[Acme Corp](urn:li:organization:1234)",
                "mention": "Acme Corp",
                "urn": "urn:li:organization:1234",
                "type": "organization"
            }
        ]
     */
    findMentions(str) {
        let results = [];
        if(!str) return results;

        const regex = /@\[([^\]]+)\]\((urn:li:(person|organization):\d+)\)/gm;

        let m;
        while ((m = regex.exec(str)) !== null) {
            // This is necessary to avoid infinite loops with zero-width matches
            if (m.index === regex.lastIndex) {
                regex.lastIndex++;
            }

            let element = {};
            let groups = ['matched', 'mention', 'urn', 'type'];
            // The result can be accessed through the `m`-variable.
            m.forEach((match, groupIndex) => {
                if(groupIndex < groups.length) element[groups[groupIndex]] = match;
            });
            results.push(element);
        }
        return results;
    }
}


