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

function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

/*
    1. Static Pre-rendering
    - Always inside 'pages'
    - Must use 'getStaticProps'
*/
export async function getStaticProps() {
  //only execute during BUILD PROCESS
  return {
    //always name 'props'
    props: {
      meetups: DUMMY_MEETUPS,
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
