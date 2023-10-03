import Layout from "../components/layout/Layout";
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "test",
    image: "https://test.com",
    address: "111",
    description: "222",
  },
];

function HomePage() {
  return (
    <Layout>
      <MeetupList meetups={DUMMY_MEETUPS} />;
    </Layout>
  );
}

export default HomePage;
