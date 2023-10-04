//for adding Header section including meta tags for searching
import Head from "next/head";
import { MongoClient } from "mongodb";

import MeetupList from "../components/meetups/MeetupList";
import { Fragment } from "react";

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>React Meetups</title>
        <meta
          name="description"
          content="Browse a huge list of highly actvie React meetups!"
        />
      </Head>
      <MeetupList meetups={props.meetups} />
    </Fragment>
  );
}

/*
    1. Static Pre-rendering
    - Always inside 'pages'
    - Must use 'getStaticProps'
*/
export async function getStaticProps() {
  //fetch data
  const client = await MongoClient.connect(
    "mongodb+srv://kdh4646:oHjS8egRofmlBB1Q@cluster0.jiylnit.mongodb.net/meetups?retryWrites=true&w=majority"
  );

  const db = client.db();

  //get meetups data
  const meetupsCollection = db.collection("meetups");
  const meetups = await meetupsCollection.find().toArray();

  console.log(meetups);

  client.close();

  //only execute during BUILD PROCESS
  return {
    //always name 'props'
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        description: meetup.description,
        id: meetup._id.toString(),
      })),
    },
    //wait time till regenerate page for updating
    revalidate: 10,
  };
}

/*
    2. Dynamic rendering
    - Not run during build process
    - Always on the server after deployment
    - Works for every incoming "REQUEST"
*/
// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }

export default HomePage;
