import WhiteBoxWrapper from "../components/WhiteBoxWrapper";

export default function Index() {
  return (
    <WhiteBoxWrapper>
      <h1>Welcome to our pair generator web tool!</h1>
      <p>
        Are you looking for the perfect match, or perhaps just a fun and random
        pairing for a game or activity? Look no further! Our pair generator is
        here to make the process easy and enjoyable.
      </p>
      <a href="/names">
        <div>
          <b>Begin</b>
        </div>
      </a>
    </WhiteBoxWrapper>
  );
}
