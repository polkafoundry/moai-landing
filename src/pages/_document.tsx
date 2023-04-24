import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        {/* <link rel="icon" href="/icon.ico" /> */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          property="description"
          content="Unlock your character's potential and shape the game's destiny on our community-driven, fully on-chain journey on zkSync."
        />
        <meta
          itemProp="name"
          name="name"
          property="name"
          content="Wicked Moai"
        />
        <meta
          itemProp="name"
          name="title"
          property="title"
          content="Wicked Moai"
        />
        <meta
          itemProp="description"
          name="description"
          property="description"
          content="Unlock your character's potential and shape the game's destiny on our community-driven, fully on-chain journey on zkSync."
        />
        <meta
          itemProp="image"
          name="image"
          property="image"
          content="/assets/thumb.jpg"
        />

        <meta
          name="twitter:description"
          property="twitter:description"
          content="Unlock your character's potential and shape the game's destiny on our community-driven, fully on-chain journey on zkSync."
        />
        <meta
          itemProp="twitter:name"
          name="twitter:name"
          property="twitter:name"
          content="Wicked Moai"
        />
        <meta
          itemProp="twitter:name"
          name="twitter:title"
          property="twitter:title"
          content="Wicked Moai"
        />
        <meta
          itemProp="twitter:description"
          property="twitter:description"
          content="Unlock your character's potential and shape the game's destiny on our community-driven, fully on-chain journey on zkSync."
        />
        <meta
          itemProp="twitter:image"
          name="twitter:image"
          property="twitter:image"
          content="/assets/thumb.jpg"
        />

        <meta
          name="og:description"
          property="og:description"
          content="Unlock your character's potential and shape the game's destiny on our community-driven, fully on-chain journey on zkSync."
        />
        <meta
          itemProp="og:name"
          name="og:name"
          property="og:name"
          content="Wicked Moai"
        />
        <meta
          itemProp="og:name"
          name="og:title"
          property="og:title"
          content="Wicked Moai"
        />
        <meta
          itemProp="og:description"
          property="og:description"
          content="Unlock your character's potential and shape the game's destiny on our community-driven, fully on-chain journey on zkSync."
        />
        <meta
          itemProp="og:image"
          name="og:image"
          property="og:image"
          content="/assets/thumb.jpg"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
