export default function Meta(Props: { title: string ,description : string }) {
    return (
        <div>
            <title>{Props.title}</title>
            <meta name="description" content={Props.description}/>
            <meta name="author" content="EarthlyEric6 & Destiny‧Soul Studio"/>
            <meta property="og:title" content={Props.title}></meta>
            <meta property="og:description" content={Props.description}/>
            <meta property="og:image" content="https://destinysoul.eu.org/resources/img/logo.png"/>
            <meta property="og:url" content="https://destinysoul.eu.org/"/>
            <meta property="og:site_name" content="Destiny‧Soul"/>
            <meta property="og:type" content="website"></meta>
        </div>
    );
  }