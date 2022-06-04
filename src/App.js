import { useEffect, useState } from "react";
import "./App.css";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  useParams,
} from "react-router-dom";

import ReactGA from "react-ga4";

// Send pageview with a custom path
ReactGA.send({ hitType: "pageview", page: "/my-path" });

// Send a custom event
ReactGA.event({
  category: "your category",
  action: "your action",
  label: "your label", // optional
  value: 99, // optional, must be a number
  nonInteraction: true, // optional, true/false
  transport: "xhr", // optional, beacon/xhr/image
});

const people = [
  `HowlaGaadu`,
  `ChetthaNaayalu`,
  `SolluGaadu`,
  `PeethiGaadu`,
  `Udaal`,
  `Tabrez`,
];

///////// REACT ROUTER V5///////////

// 1. Import BrowserRouter as Router (common practice of giving alias in community), Route, Switch.

// 2. Enclose the component, which renders your app with Router.

// 3. You can specify path as prop inside a Route component and enclose it with the component that should show on that page.

// 4. But router shows everything that matches part of the path, to avoid such conflictswe need to another prop exact

// 5. If we specify path as *, then the component inside Route will display on all pages. We can use it as error page. But to avoid conflict with others, we can wrap all components inside Switch component, which makes only the first route to display that matches the condition.

// 6. Link is to navigation to specific path and it uses prop "to".

// 7. The Links may not work in some cases because, just simply clicking on Link doesn't component to rerender.

// 8. Some times we need different urls for each item like products and people etc., but we can't go on create a component for each item thats where url params and placeholder comes. We need a placeholder for any item to render. In placeholder component to access the url params we use, useparams. Based on useParams we render specific data in the component.

// 9. with useParams we url params and its data type is always string inside an object.

function App() {
  return (
    <div className="app">
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/people">
          <People />
        </Route>
        <Route path="/person/:id" children={<Person />}></Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </div>
  );
}

// Pages

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link className="links" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="links" to="/about">
            About
          </Link>
        </li>
        <li>
          <Link className="links" to="/people">
            People
          </Link>
        </li>
      </ul>
    </nav>
  );
};

const Home = () => {
  return (
    <>
      <h1 className="heading-primary">Home</h1>
      <p>Shake and Bake</p>
    </>
  );
};

const About = () => {
  return (
    <>
      <h1 className="heading-primary">About</h1>
      <p>Bake and shake</p>
    </>
  );
};

const People = () => {
  return (
    <>
      <h1 className="heading-primary">People</h1>
      <p>Shake and Bake</p>
      <div className="people">
        {people.map((curr, i) => {
          return (
            <Link to={`/person/${curr}`} className="links">
              <div key={i} className="person flex-centering">
                {curr}
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};
const Error = () => {
  return (
    <>
      <h1 className="heading-primary">Doesn't Exist</h1>
    </>
  );
};
const Person = () => {
  const [name, setName] = useState(`default name`);
  const { id } = useParams();
  console.log(useParams());
  useEffect(() => {
    const newPerson = people.find((person) => person === id);
    setName(newPerson);
  }, []);
  return (
    <>
      <Link className="links" to="/people"></Link>

      <h1 className="heading-primary">{name}</h1>
      <p className="about-person">
        When I was asked to describe myself in one word, it was really hard to
        choose a certain word because I could think of many adjectives to
        describe myself. I would put numerous descriptions of my character
        trait, but since I could only limit myself to only one word, I would
        call me funny. According to the Online Oxford English Dictionary, funny
        means: “Humorous, comical, fun; causing laughter or amusement.” ("Funny,
        adj., n2, A1"). I guess without even trying, I am quite a funny person.
        It is just a part of my personality for me to behave, think, and react
        in an involuntarily funny way whenever I converse with my peers. The way
        I behave makes me seem like I’m a funny person without even trying. I
        guess whenever I talk to someone…show more content… Being funny makes me
        feel creative in a way that I would only understand. From time to time
        now, my little sister always says “Brandon, how do you always think of
        these weird things so fast?”, and I always tell her that it’s whatever
        puts on in the mind I say. Then she told me that I was the most creative
        person that she ever talks to because of the way I think. I feel like I
        react differently than some people because I look at the bright funny
        side of any situation that could be good or bad. I would say that would
        make me an optimist because it’s like I see “the glass half full”,
        instead of looking at the down side. I would try to get a good laugh
        from a bad situation, so it doesn’t hurt as much when I really know how
        bad it is. Sometimes if I’m trying to be funny on purpose, I would over
        react at some of the most irrelevant things just to get in a good laugh
        for myself. For instance, it’s like whenever my sister accidently steps
        on my shoe, I would react in such an overcompensate type of way. I would
        only do that so she feels bad, but she would know that I am joking. I
        react the way I do, so I could get over the bad things that happens and
        it helps me move on more Get Access Check Writing Quality Related Good
        Essays Character Analysis Of Elizabeth Bennet 1173 Words 5 Pages
        Elizabeth 's sparkling and teasing wit brings on Lady Catherine 's
        disapproval and Darcy 's admiration. She is always interesting to listen
        to and always ready to laugh at foolishness, stating, "I hope I never
        ridicule what is wise or good. Follies and nonsense, whims and
        inconsistencies do divert me, I own, and I laugh at them whenever I
        can." Because of her exceptional powers of observation, Elizabeth 's
        sense of the difference between the wise and foolish, for the most part,
        is very good. (Josephine, 2003) Read More Better Essays The Man Your Man
        Could Spice Rhetorical Analysis 1149 Words 5 Pages One can say the
        company's word choice was chosen to make the audience laugh. The overall
        atmosphere of this commercial was humorous and a huge hyperbole. If you
        want to grab someone’s attention, you’re going to want to play with
        their emotions one way or another, and you can’t go wrong with humor.
        Since majority of this commercial is impossible, it’s kind of funny how
        ridiculous it is. It’s portraying the materialistic things a woman would
        like a man to have or offer. Read More Good Essays No Wonder They Call
        Me A Bitch Analysis 602 Words 3 Pages Because no matter how disturbing
        the story may be, others may stick around longer if instead of the
        blatant truth there is a little humor behind the story. In my honest
        opinion I believe humor is what keeps us together, because after all
        “laughter is the best medicine”. If we can get others to laugh at our
        misery, then maybe the misery was worth it after all. The way she
        described the food left the readers hanging on. Read More Good Essays
        Character Analysis Of C. J In The Overachievers 569 Words 3 Pages In
        turn C.J reverts to flirting instead. It takes me some time to finally
        open up to people I get close to and they eventually see my whole
        personality. C.J is the same way, when she meets people she is often
        times flirtatious or rude and it comes off as being vapid and annoying,
        but in reality she is a very caring person with good intentions and
        possibility of being a good friend. Only my good friends who I have
        known for years really know who I am and what my life is like. Sometimes
        I unfortunately come off as standoffish, but it really is just because I
        don't know that person very well Read More Good Essays One Flew Over The
        Cuckoo's Nest Laughter Essay 1236 Words 5 Pages It’s hard to understand
        much else about the why’s and how’s of laughter, but they seem to know,
        simply, that it works. This means that in order for readers to further
        understand the reality of things like humor in Kesey’s book, oneself
        should have to ignore their feelings and sacrifice the pleasure and ask
        questions that help people to discover what it is about humor that is so
        powerful. Laughter does not only play a major role in the story, but in
        life as Read More Good Essays Lil Dicky Research Paper 337 Words 2 Pages
        “True humor is fun-fit does not put down, kid, or mock. It makes people
        feel wonderful, not separate, different, and cut off.”- Hugh Prather.
        Laughing is my necessity in my day, maybe it’s not in my neighbor’s, but
        I will try my best to bring them joy. Laughter makes life ten times
        better, especially when it’s with close friends. Read More Good Essays
        To Kill A Mockingbird Sopntanious Character Analysis 683 Words 3 Pages
        Charels Baker Harris brings love and life into the book because of his
        spontanious actions, creativity, and lovingness. The world is a much
        more pleasant and exciting place because of Read More Powerful Essays
        Lucille Ball Biography 1325 Words 6 Pages A growing talent, Ball
        developed the ability to make people laugh by making humorous facial
        expressions identifiable to herself, which later became so popular and
        performed so frequently that they were given their own names. Through
        her work she not only helped familiarize the country with this new form
        of comedy but she also did so as a woman who was not portraying her
        character as the common elegant and proper woman, but expressed herself
        in a manner which accurately and comically demonstrated the way that
        many women often acted and felt. Even though she was a comedian, Ball
        did not make just any funny joke or facial expression she was directed
        to, but practiced and performed her new art form which continues to
        inspire modern comedians. “It was routine for the actress to spend hours
        rehearsing her antics and facial expressions. And her groundbreaking
        work in comedy paved the way for future stars such as Mary Tyler Moore,
        Penny Marshall, Cybill Shepherd and even Robin Williams” (“Lucille Ball
        Biography”). Read More Good Essays Barbara Ehrenreich The Civility Glut
        Analysis 756 Words 4 Pages 7). She guides the reader through her train
        of thought, attempting to make logical assumptions on the meaning of her
        zip codes or account number, which are sarcastic. This method of
        deductive conclusion not only appeals to logos through logic, but
        further create some humour, keeping the audience involved and
        sympathetic to the issue. She also recalls the joke “Don’t tell me what
        kind of day to have!” and parodies a hostile farewell from Romeo and
        Juliet to “Have a great day, Romeo!” Read More Good Essays Essay On
        Making Mistakes 744 Words 3 Pages Utilize our slips-ups as a going
        stone. Allow them to be lessons in how you can do things differently.
        They mould you to be the best version of yourself. At times when you lie
        to your closest friends whether intentionally or unintentionally you
        don’t feel good about it, but when they find out the truth, they are
        hurt the most as you break their trust. At that time you don’t really
        realize your mistake but when the same thing happens to you, you
        understand the real mistake that you had done to them sometime back.
        Read More Good Essays Sherryl Clark's Fresh Bait 820 Words 4 Pages Other
        techniques that were used include hyperboles such as when the unknown
        hitchhiker also stated “If I opened my mouth it would spill out like a
        torrent of acid” (Page 24). The story also used the techniques of
        imagery where the hitchhiker described what their sister looked like
        “then the memory of Melanie’s grey face with the bruises around her neck
        and the dried blood in her hair jumped up to haunt me”. (Page 23) The
        writer, Sherryl Clark also used hook as she kept the reader guessing.
        Read More Good Essays How Does Kelly Create Suspense In The Foxglove
        Killings 455 Words 2 Pages It generally gives no sense of what the story
        is about and is just plain confusing. However, I thought I may as well
        give it a go, because I have absolutely loved all of the upcoming
        Entangled Teen books. Despite my reservations, The Foxglove Killings
        nailed it. Kelly was great at creating a tense and frightening
        atmosphere while also maintaining minimal consistency errors. From the
        start of the novel, she is building the action. Read More Good Essays
        Hum/111 Week 1 Assignment 613 Words 3 Pages I do hate that I don 't
        express my emotion as often as I should because when I do, it can be
        overwhelming. I think it would be so awesome to meet someone with the
        same personality as me. I usually tend to use my goofy sense of humor to
        try and brighten other 's days. I think that together we would be able
        to brighten a lot more of people Read More Good Essays Alain De Botton
        Humorists 709 Words 3 Pages There are many different levels of humor
        ranging from niche humor to highly sophisticated humor to crude and
        brash humor. Even thought some forms of humor are more revered than
        others, all forms of humor, through any type of medium, can be
        informative. The creators of South Park, a popular yet controversial
        cartoon, Matt Stone and Trey Parker made a big impact on the public 's
        views of Tourette Syndrome. Many Americans were unaware of the disorder
        which is known for causing verbal or physical tics. After the episode
        aired, awareness dramatically increased for Tourette Syndrome.
      </p>
      <Link to="/people">
        <button className="btn">Back to people</button>
      </Link>
    </>
  );
};

export default App;
