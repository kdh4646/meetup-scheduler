import { Fragment } from "react";

import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails() {
  return (
    <MeetupDetail
      image="https://test.com"
      title="11"
      address="22"
      description="33"
    />
  );
}

//for pre-rendering all dynamic path pages (kind of default setting)
export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
    ],
  };
}
export async function getStaticProps(context) {
  //dynamic url path from params
  const meetupId = context.params.meetupId;

  return {
    props: {
      meetupData: {
        image: "https://test.com",
        id: meetupId,
        title: "test",
        address: "22",
        description: "33",
      },
    },
  };
}

export default MeetupDetails;
