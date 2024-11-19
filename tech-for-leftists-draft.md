# Tech for leftists: 

I’m not gonna sit here and say I’m an expert at all. I’m solely a random person sharing information it thinks is important. While I did computer studies, I’m not a high-scale messaging platform engineer or anything. Please do your own research, double-check the links I provide, and [feel free to contact me with any additions or corrections](/contributions/)!

## Slight content warning

If you struggle with paranoia, please mind that this article is about government surveillance. If that subject is not something you can deal with right now, feel free to click away.

## Prelude

Please note the following things:

1. If you’ve got nothing to hide, you've got nothing to fear. As long as your controlling government doesn’t switch sides.
2. Tech security is not about being "secure" or "not secure". It is (like gender) a spectrum. If a government desperately wants to spy on someone, they’ll find *a* way. Albeit through getting data from websites/apps you’ve used, or just [adding backdoors into commercially available products (infoworld.com)](https://www.infoworld.com/article/2179244/snowden-the-nsa-planted-backdoors-in-cisco-products.html).
3. But this doesn’t mean that they’ll care enough to jump through too much hoops, and there are relatively easy steps you can take to increase the hoops to jump through. Being safe online is a field of harm reduction, but that doesn’t make it any less important.


---

## Messaging
If Meta having access to the entire history of your Instagram/Facebook messages doesn’t freak you out a little, it should. Meta in specific is a horrible company (see /watchpigeon/tech/](/watchpigeon/tech/?tags=tech_meta)), and individuals misusing company resources for classified information is an old tale.

### Most secure options
#### Signal
*[Official Website (signal.org)](https://signal.org/)*

For easy, non-self hosted communications, Signal is probably your best shot.

- Open Source
- End-to-end encrypted
- While it does require a phone number to sign up:
  - In Settings you can disable "find me by phone number" and "see my phone number"; 
  - It since recently allows you to use throwaway-able usernames to connect to people, never revealing your phone number

Unfortunately, Signal *is* based in America (see [Five-Fourteen Eyes](#five-fourteen-eyes). But due to the encrypted, non-profit & open source nature, it should hopefully be okay.


#### Matrix
*[Official Website (matrix.org)](https://matrix.org/)*

Matrix is a chat platform that…

- Allows self hosting
- Allows connecting (or purposefully not connecting) with other Matrix instances
- Freedom of app/client choice
- Allows/incentivises default end-to-end encryption
- Can be configured to require no identifiable data. By default, no phone number *nor* e-mail is required to sign up at all.

It should be noted that Matrix is still in its infancy. A lot of clients have not yet figured out the whole “usability” thing yet. Expect some hickups getting started, but with some patience, you can make this a secure & self-managed way of communicating.

#### OnionShare
*[Official Website (onionshare.org)](https://onionshare.org/)*

Cross-platform, open-source, Tor based file sharing/website hosting/chat, developed by [Micah Lee (he/him) (micahflee.com)](https://micahflee.com/). Included with the [Qubes OS (qubes-os.org)](https://www.qubes-os.org/) & [Tails (tails.net)](https://tails.net/) operating systems, which are both popular privacy-above-everything solutions. This is less of a daily driver, but it is a very secure way to communicate.


### Kinda secure options

#### WhatsApp/Messenger, I guess
*[Official WhatsApp Website (whatsapp.com)](https://www.whatsapp.com/)*&nbsp;-&nbsp;
*[Official Messenger Website (messenger.com)](https://www.messenger.com/)*


WhatsApp…
- *Is* end-to-end encrypted, which is great
- *Is* widely used, making it a great option to communicate with a wider array of people than Signal's/Matrix's userbase.

But it also…
- *Isn’t* open source (as opposed to [Signal](#signal))
- *Is* still located in the United States (see [Five-Fourteen Eyes](#five-fourteen-eyes))
- *Is* owned by Meta (see [/watchpigeon/tech/](/watchpigeon/tech/?tags=tech_meta))
- Requires a phone number to sign up *& find* other people. The only other way to connect to people is group chats, but those then subsequently reveal your phone number.

Messenger used to be by default non-end-to-end encrypted, but since [last year this has changed (fb.com)](https://about.fb.com/news/2023/12/default-end-to-end-encryption-on-messenger/). However, most of the negative parts about Whatsapp universally apply to Messenger, whilst also possibly being linked to your Facebook account.

### To avoid

#### SMS
There are inherent technical problems with SMS, seeing...
- A well-sourced article on general SMS privacy issues: [Why SMS Text Messages Aren't Private or Secure (howtogeek.com)](https://www.howtogeek.com/709373/why-sms-text-messages-arent-private-or-secure/)
- An article by [Micah Lee (he/him) (micahflee.com)](https://micahflee.com/), talking about police attacks on sms’s and sim cards ([Feds Are Tapping Protesters’ Phones. Here’s How To Stop Them. (theintercept.com)](https://theintercept.com/2020/09/25/surveillance-sim-cloning-protests-protect-phone/)


For the Belgium-specific problems with SMS, look no further than the Belgian laws about electronic communications.

The Belgian penal code(?) (fgov.be, [NL](https://www.ejustice.just.fgov.be/cgi_loi/change_lg.pl?language=nl&la=N&cn=2005061332&table_name=wet#t)/[FR](https://www.ejustice.just.fgov.be/cgi_loi/article.pl?language=fr&lg_txt=f&type=&sort=&numac_search=&cn_search=2005061332&caller=SUM&&view_numac=2005061332n)) states the following:

```jsx
Art. 2.Voor de toepassing van deze wet wordt verstaan onder :
  ...
  [12 91° "elektronische-communicatiegegevens": de inhoud en de metagegevens van elektronische communicatie;
   92° "inhoud van elektronische communicatie": de inhoud die wordt uitgewisseld door middel van elektronische-communicatiediensten, met name tekst, spraak, video, beelden en geluid;
   93° "elektronische-communicatiemetagegevens": de gegevens die worden verwerkt in een elektronische-communicatienetwerk met het oog op de transmissie, de distributie of de uitwisseling van de inhoud van elektronische communicatie, met inbegrip van gegevens waarmee een communicatie kan worden getraceerd en de bron en de bestemming van de communicatie kunnen worden bepaald, alsmede gegevens betreffende de locatie van de apparatuur die in het kader van het aanbieden van elektronische-communicatiediensten zijn gegenereerd, en de datum, het tijdstip, de duur en de aard van de communicatie.]12
...  
Art. 127/3. [1 § 1. Bij elke operator wordt een Coördinatie-cel opgericht, belast met het verstrekken aan de wettelijk bevoegde autoriteiten, op hun verzoek, van de elektronische-communicatiegegevens.
```

French version of the Dutch excerpt above:

```jsx
Art. 2.Pour l'application de la présente loi, il faut entendre par :
  ...
 [12 91° "données de communications électroniques": le contenu et les métadonnées de communications électroniques;
   92° "contenu de communications électroniques": le contenu échangé au moyen de services de communications électroniques, notamment sous forme de texte, de voix, de documents vidéo, d'images et de son;
   93° "métadonnées de communications électroniques": les données traitées dans un réseau de communications électroniques aux fins de la transmission, la distribution ou l'échange de contenu de communications électroniques, y compris les données permettant de retracer une communication et d'en déterminer l'origine et la destination ainsi que les données relatives à la localisation de l'appareil produites dans le cadre de la fourniture de services de communications électroniques, et la date, l'heure, la durée et le type de communication.]12
  ...
  
Art. 127/3. [1 § 1er. Auprès de chaque opérateur est constituée une Cellule de coordination, chargée de fournir aux autorités légalement habilitées, à leur demande, des données de communications électroniques.
```

#### Telegram
*[Official Website (telegram.com)](https://telegram.org/)*

Telegram: favoured home of furries and drug dealers, my two favourite genders. However, unless you’re in a "secret chat", it is *not* end-to-end encrypted, allowing Telegram to view your chat contents. It also requires *and reveals* phone numbers, an issue shared by [WhatsApp/Messenger](#whatsappmessenger-i-guess), semi-fixed by [Signal](#signal) and fully fixed by [Matrix](#matrix))

It should additionally be mentioned that Telegram has an incredibly troubled past in terms of security:
- [Is Telegram safe? Discover the app’s strengths and limitations (nordvpn.com)](https://nordvpn.com/blog/is-telegram-safe/)
- [U.S. Marshals Spied on Abortion Protesters Using Dataminr (theintercept.com)](https://theintercept.com/2023/05/15/abortion-surveillance-dataminr/)
- [Telegram’s peer-to-peer SMS login service is a privacy nightmare (techcrunch.com)](https://techcrunch.com/2024/03/25/telegrams-peer-to-peer-sms-login-service-is-a-privacy-nightmare/)

#### Discord
*[Official Website (discord.com)](https://discord.com/)*

Don’t get me wrong, I like Discord. But also, Discord is not end-to-end encrypted, *and* run in the USA (see [Five-Fourteen Eyes](#five-fourteen-eyes)). This means that at any point, Discord employees can see entire chat histories.

Yes, this has sometimes been instrumental in taking awful people down. But remember, your country’s current government can decide whether you’re a criminal at any point, and personal misuse of company resources is always a risk in these cases.

---

## Mail/Google alternatives

### Tuta
*[Free & paid plans (tuta.com)](https://tuta.com/pricing)*

Previously Tutanota, Tuta is an open-source, encrypted-first **e-mail** service, alongside an encrypted **calendar**, hosted in Germany\*. Their eco-system is pretty locked in, so don’t expect a lot of integration with external services, but this is also done in the pursuit of being privacy-first. They have a decent **free tier**.

\*: [Five-Fourteen Eyes](#five-fourteen-eyes)

### Proton
*[Free & Paid Plans (proton.me)](https://proton.me/pricing)*

Like Tuta, Proton has an closed ecosystem that’s not likely to integrate with other services. But they compensate by offering encrypted **e-mail**, **calendar**, **cloud storage**, **VPN**, and a **password manager**. They also offer a decent **free tier**. It's like if the Google Suite was private.


### Mailbox.org
*[Paid plans (mailbox.org)](https://register.mailbox.org/en)*

Unlike [Tuta](#tuta) and [Proton](#proton), [mailbox.org](http://mailbox.org) is *not* a closed ecosystem. This means it is inherently less private, but this allows you to integrate it with your phones' built-in/downloaded mail/contacts/calendar apps. It is [built on top of and uses open-source systems, but they have their own closed-source software built on top of it (mailbox.org)](https://userforum-en.mailbox.org/topic/is-everything-at-mailbox-org-open-source). It is hosted in Germany\*.

They still focus on privacy however, with support for encrypted **mail** (including custom domains for the standard & premium packages), **calendar**, an **online office suite**, **meeting tools**, and include [transparency reports about government data requests, including when they deny them for not having been properly filed (mailbox.org)](https://mailbox.org/en/post/transparency-report-2023).

While less secure than [Proton](#proton)'s closed ecosystem, it's a decent Google-suite style option if you want to be able to use different mail/calendar apps. Also seems to be run on green energy.

\*: [Five-Fourteen Eyes](#five-fourteen-eyes)

## Extra info
### Five-Fourteen Eyes
A publicly stated agreement exists, wherein
- 🇦🇺 Australia
- 🇨🇦 Canada
- 🇳🇿 New Zealand
- 🇬🇧 The UK
- 🇺🇸 The USA
... communicate any CIA/NSA/FBI/MI6 type stuff between eachother.

According to [leaked documents by Edward Snowden (he/him, I assume) (bbc.co.uk)](https://www.bbc.co.uk/news/technology-25085592), this now also includes:
- 🇩🇰 Denmark
- 🇫🇷 France
- 🇳🇱 The Netherlands
- 🇳🇴 Norway
- 🇧🇪 Belgium
- 🇩🇪 Germany
- 🇮🇹 Italy
- 🇪🇸 Spain
- 🇸🇪 Sweden

### Good explanations about tech stuff for normal people
I feel a bit silly posting links to [Tom Scott (he/him) (tomscott.com)](https://www.tomscott.com/) videos on this website, but he does an excellent job at explaining some common pitfalls in terms of cybersecurity in understandable ways.

- [On encryption, privacy, laws, and “crime fighting” (youtube.com)](https://www.youtube.com/watch?v=CINVwWHlzTY)
- [On the risks of electronic voting and "trust" in computing (youtube.com)](https://www.youtube.com/watch?v=LkH2r-sNjQs)
- [On two-factor authentication (youtube.com)](https://www.youtube.com/watch?v=hGRii5f_uSc)

