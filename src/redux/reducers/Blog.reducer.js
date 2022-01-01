import { GET_EVENTS } from "../actionTypes";

const initialState = {
  blogList: {
    1: {
      id: 1,
      year: 2019,
      title: "Kids Motivation",
      date: "28th Dec",
      image:
        "https://res.cloudinary.com/drxjql1j7/image/upload/v1640697821/avatars/yqk6xkmfwothhtcngp2y.jpg",
      desc1:
        "In order to motivate the kids, Thambatty Vivekanandar Illaignar Narpani Mandram organized three games as a start up for the new society club at Thambatty. Many kids from the village participated and the prizes were distributed by the elder people from Thambatty. Carrom, chess, Badminton was conducted.",
      desc2: "Date: 28/12/2019. VENUE: Thambatty",
    },
    2:{
        id: 2,
        year: 2021,
        title: "Prize distribution",
        date: "24th Jan",
        image:
          "https://res.cloudinary.com/drxjql1j7/image/upload/v1640697821/avatars/yqk6xkmfwothhtcngp2y.jpg",
        desc1:'In order to brush up the kids extra curricular activity skills, few competitions were held and the prizes were distributed. This competition made sure many of the kids from different classes participated and bagged the prizes.',
        desc2:'DATE: Jan 24, 2021. VENUE: Thambatty'
      },
      3:{
        id: 3,
        year: 2021,
        title: "Covid Precautions",
        date: "24th May",
        image:
          "https://res.cloudinary.com/drxjql1j7/image/upload/v1640697821/avatars/yqk6xkmfwothhtcngp2y.jpg",
        desc1:'During the time of Covid, the team was working for the better and healthy life of the village people. Providing Kabasura kudineer was carried out effectively. With a proper procedure, and support from the team, it was done successfully for few weeks.',
        desc2:'DATE: May, 2021. VENUE: Thambatty'
      },
    
      4:{
        id: 4,
        year: 2020,
        title: "Society club Event",
        date: "27th May",
        image:
          "https://res.cloudinary.com/drxjql1j7/image/upload/v1640697821/avatars/yqk6xkmfwothhtcngp2y.jpg",
        desc1:'In order to keep the village, free from plastics, we as a team have taken a vow to collect plastics from each home weekly and this work was brought into act. Girls and boys joining their service hands together, to be together, to make sure that Thambatty is free from plastics.',
        desc2:'DATE: May 27, 2020. VENUE: Thambatty'
      },
  },
};

export const EventReducer = (state = initialState, action)=>{
    const {type}= action;

    switch (type){
        case GET_EVENTS:
            return state
        default:
            return state
    }
}