Hallo Professor Becker, hier eine kurze Anleitung zum Projekt und allen Features 
## Projekt ausführen

Als erstes mit dem Terminal in das Root Directory des Projects navigieren

und folgende Befehle der Reihe nach durchführen(Die Prisma Studio Seite muss eventuell 1-2 mal refreshed werden)

```bash
npx prisma studio

npm run dev
```
[http://localhost:5555](http://localhost:5555) Im Browser öffnen um die Datenbank einzusehen oder zu bearbeiten

[http://localhost:3000](http://localhost:3000) Im Browser öfnnen um die Seite zu besuchen

[http://localhost:3000/api/posts](http://localhost:3000/api/posts) Besuchen um die Posts über die GET Methode abzurufen

[http://localhost:3000/api/tokenPrice?addressOne=0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48&addressTwo=0xdac17f958d2ee523a2206206994597c13d831ec7](http://localhost:3000/api/tokenPrice?addressOne=0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48&addressTwo=0xdac17f958d2ee523a2206206994597c13d831ec7) Besuchen um Tokenpreise für USDC und Chainlink über die GET Methode abzurufen
Hier kann jede beliebige "address" aus "./lib/tokenList.json" eingesetzt werden.

## Learn More

Da NextJS ein Fullstack Framework ist, muss hier ExpressJS nicht verwendet werden. Über den Ordner pages/api/ werden API-Routes automatisch über den Dateinamen zur Verfügung gestellt.

Prisma wird in diesem Projekt als Persistenzschicht verwendet, die Datenbank wird über meinen Vercel Account gehostet.

Ich bin mit diesen Technologien gegangen, da diese Seite auch in Production über meinen Vercel Account gehostet werden wird.

## Features für die Zukunft

*Über Metamask einen Token Sswap durchführen. Die Authentifikation dauerte länger als gedacht, der Button wurde einfach auskommentiert.

*Aktuell können keine neuen Posts erstellt werden, hierfür wurde ebenfalls die Zeit knapp.
